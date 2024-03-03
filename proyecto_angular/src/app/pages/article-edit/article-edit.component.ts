import { Component, OnInit } from '@angular/core';
import { Article } from "@/models/Article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleDetailsComponent } from "@/components/article-details/article-details.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { ArticleFormComponent } from "@/components/article-form/article-form.component";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { ActionLoadArticleByIdParams, ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { AppState } from "@/store/app.state";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [
    ArticleDetailsComponent,
    PageContentComponent,
    ArticleFormComponent
  ],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css'
})
export class ArticleEditComponent implements OnInit {

  protected articleTitle = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
  }


  ngOnInit(): void {
    this.subscribeToRouteParams();
    this.subscribeToArticle();
  }

  private subscribeToArticle() {
    this.store.select(SelectModuleArticleCurrentArticle)
      .subscribe((article?: Article) => {
        this.articleTitle = article?.title || '';
      });
  }

  private subscribeToRouteParams(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        this.goToBlog();
        return;
      }

      const loadArticleDispatchParams: ActionLoadArticleByIdParams = {
        articleId: id,
        onError: () => this.goToBlog()
      }

      this.store.dispatch(ModuleArticleActions.loadArticleById(loadArticleDispatchParams));
    });
  }

  private goToBlog(): void {
    this.router.navigate(['']).then();
  }

}
