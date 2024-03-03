import { Component, OnInit } from '@angular/core';
import { AppState } from "@/store/app.state";
import { Article } from "@/models/Article.model";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { AsideComponent } from "@/components/sidebar/aside/aside.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { SelectHomeArticles } from "@/store/storemodule-home/module-home.selectors";
import { SliderComponent } from "@/components/slider/slider.component";
import { Store } from "@ngrx/store";
import { ModuleHomeActions } from "@/store/storemodule-home/module-home.actions";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    AsideComponent,
    PageContentComponent,
    ArticlePreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  protected articles: Article[] = []

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(ModuleHomeActions.loadLastArticles());
    this.store.select(SelectHomeArticles)
      .subscribe((articles: Article[]) => this.articles = articles);
  }
}
