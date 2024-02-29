import { Component, OnInit } from '@angular/core';
import { SliderComponent } from "@/components/slider/slider.component";
import { AsideComponent } from "@/components/sidebar/aside/aside.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { Article } from "@/models/Article.model";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";

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
export class HomeComponent implements OnInit{

  protected articles: Article[] = []

  constructor(private apiArticleService: ApiArticlesService) {
  }

  ngOnInit(): void {
    this.apiArticleService.getLastArticles()
      .subscribe((apiResponse: ApiListArticles) => {
        if(apiResponse.isSuccessful) {
          this.articles = apiResponse.response;
        }
      });
  }
}
