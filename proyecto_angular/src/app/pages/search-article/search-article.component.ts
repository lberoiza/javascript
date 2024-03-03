import { Component, OnInit } from '@angular/core';
import { Article } from "@/models/Article.model";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "@/store/app.state";
import { Store } from "@ngrx/store";
import { ModuleSearchActions } from "@/store/storemodule-search/module-search.actions";
import { considerSettingUpAutocompletion } from "@angular/cli/src/utilities/completion";

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
  templateUrl: './search-article.component.html',
  styleUrl: './search-article.component.css'
})
export class SearchArticleComponent implements OnInit {

  protected articles: Article[] = [];
  protected searchStr: string = '';

  constructor(
    private apiArticlesService: ApiArticlesService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.searchStr = params['searchStr'] || '';
      console.log(this.searchStr)
      this.apiArticlesService.getArticlesBySearch(this.searchStr)
        .subscribe((apiResponse: ApiListArticles) => {
          if (apiResponse.isSuccessful) {
            this.articles = apiResponse.response;
            this.store.dispatch(ModuleSearchActions.setResults({ results: this.articles }));
          }
        });
    });
  }

  protected hasSearchString(): boolean {
    return this.searchStr !== ''
  }

  protected getHeaderTitle(){
    if(this.hasSearchString()) {
      return `List of Articles matching: ${this.searchStr}'`
    }
    return "Search an Article"
  }





}
