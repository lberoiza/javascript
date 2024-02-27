import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Article } from "@/models/Article.model";
import { ArticleDetailsComponent } from "@/components/article-details/article-details.component";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { allArticles } from "../../../assets/data";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    ArticleDetailsComponent,
    ArticlePreviewComponent,
    PageContentComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  protected article: Article = allArticles[0];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('id', id);
      this.article = allArticles.find(article => article._id === id) || allArticles[0];
    });
  }

}
