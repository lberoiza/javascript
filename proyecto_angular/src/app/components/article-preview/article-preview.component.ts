import { Component, Input } from '@angular/core';
import { Article } from "@/models/Article.model";
import { Router, RouterLink } from "@angular/router";
import { getImageUrl} from "@/libs/ImageUtils";
import { DayjsComponent } from "@/components/dayjs/dayjs.component";
import { AppState } from "@/store/app.state";
import { Store } from "@ngrx/store";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [
    RouterLink,
    DayjsComponent
  ],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css'
})
export class ArticlePreviewComponent {
  protected readonly getImageUrl = getImageUrl;

  @Input()
  article: Article = {
    _id: "0",
    title: "",
    content: "",
    date: "",
    image: "",
    __v: 0
  }

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  protected goToArticle(): void {
    this.store.dispatch(ModuleArticleActions.setArticle({article: this.article}));
    this.router
      .navigate(['/blog/article', this.article._id])
      .then();
  }


}
