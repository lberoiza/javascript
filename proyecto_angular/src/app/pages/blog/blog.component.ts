import { Component, OnInit } from '@angular/core';
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { AppState } from "@/store/app.state";
import { Article } from "@/models/Article.model";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { ModuleBlogActions } from "@/store/storemodule-blog/module-blog.actions";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { Store } from "@ngrx/store";
import {
  SelectModuleBlogArticles
} from "@/store/storemodule-blog/module-blog.selectors";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    ArticlePreviewComponent,
    PageContentComponent
  ],
  providers: [
    ApiArticlesService
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  protected articles: Article[] = [];

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(ModuleBlogActions.loadAllArticles());
    this.store.select(SelectModuleBlogArticles)
      .subscribe((articles: Article[]) => this.articles = articles);
  }

}
