import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from "@/models/Article.model";
import { ArticleDetailsComponent } from "@/components/article-details/article-details.component";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { allArticles } from "../../../assets/data";
import { ApiArticlesService } from "@/services/api-articles.service";
import { ApiArticle } from "@/models/ApiArticleResponse";

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
    private router: Router,
    private apiArticlesService: ApiArticlesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id){
        this.goBackHome();
        return;
      }
      this.loadArticleOrGoHome(id);
    });
  }

  private loadArticleOrGoHome(id: string): void {
    this.apiArticlesService.getArticleById(id).subscribe((apiResponse: ApiArticle) => {
      if(apiResponse.isSuccessful) {
        this.article = apiResponse.response;
      }
      else {
        this.goBackHome();
        return;
      }
    });
  }


  private goBackHome(): void {
    this.router.navigate(['/']).then(r => console.log('r', r));
  }

}

