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
import { SelectModuleSearchQuery, SelectModuleSearchResults } from "@/store/storemodule-search/module-search.selectors";
import { debounceTime, Subject } from "rxjs";

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
  protected searchSubject = new Subject<string>();

  constructor(
    private apiArticlesService: ApiArticlesService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.initializeSearchSubject();
    this.subscribeToSearchStrChanges();
    this.subscribeToArticlesChanges();
  }

  private initializeSearchSubject() {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchValue => {
      if (searchValue.length < 3) return;
      this.store.dispatch(ModuleSearchActions.search({ strQuery: searchValue }));
    });
  }


  private subscribeToSearchStrChanges() {
    this.store.select(SelectModuleSearchQuery)
      .subscribe(searchStr => {
        this.searchStr = searchStr;
      })
  }

  private subscribeToArticlesChanges() {
    this.store.select(SelectModuleSearchResults)
      .subscribe(articles => {
        this.articles = articles;
      })
  }

  protected onSearchInput(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.searchSubject.next(searchValue);
    } else {
      this.store.dispatch(ModuleSearchActions.setResults({ results: [] }));
    }
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
