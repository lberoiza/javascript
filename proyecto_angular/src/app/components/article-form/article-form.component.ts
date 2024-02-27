import { Component, Input } from '@angular/core';
import { getImageUrl } from "@/libs/ImageUtils";
import { Article, createEmptyArticle } from "@/models/Article.model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent {
  protected readonly getImageUrl = getImageUrl;

  @Input()
  article: Article = createEmptyArticle();
}
