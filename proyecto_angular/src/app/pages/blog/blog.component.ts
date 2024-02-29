import { Component, OnInit } from '@angular/core';
import { Article } from "@/models/Article.model";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";

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

  constructor(private apiArticlesService: ApiArticlesService) {

  }

  ngOnInit(): void {
    this.apiArticlesService.getAllArticles()
      .subscribe((apiResponse: ApiListArticles) => {
      if(apiResponse.isSuccessful) {
        this.articles = apiResponse.response;
      }
    });
  }

}
