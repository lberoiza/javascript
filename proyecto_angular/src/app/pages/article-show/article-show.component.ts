import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from "@/models/Article.model";
import { ArticleDetailsComponent } from "@/components/article-details/article-details.component";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { ActionLoadArticleByIdParams, ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    ArticleDetailsComponent,
    ArticlePreviewComponent,
    PageContentComponent,
  ],
  templateUrl: './article-show.component.html',
  styleUrl: './article-show.component.css'
})
export class ArticleShowComponent implements OnInit {

  protected articleTitle = ''

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
