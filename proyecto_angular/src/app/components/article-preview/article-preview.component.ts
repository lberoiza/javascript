import { Component, Input } from '@angular/core';
import { Article } from "@/models/Article.model";
import { RouterLink } from "@angular/router";
import { getImageUrl} from "@/libs/ImageUtils";

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [
    RouterLink
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

}
