import { Component, Input } from '@angular/core';
import { Article } from "@/models/Article.model";
import { allArticles } from "../../../assets/data";
import { getImageUrl } from "@/libs/ImageUtils";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {
  protected readonly getImageUrl = getImageUrl;

  @Input()
  article: Article = allArticles[0];

}
