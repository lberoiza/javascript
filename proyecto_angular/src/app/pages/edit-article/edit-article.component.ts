import { Component, OnInit } from '@angular/core';
import { Article, createEmptyArticle } from "@/models/Article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiArticle } from "@/models/ApiArticleResponse";
import { ArticleDetailsComponent } from "@/components/article-details/article-details.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { ArticleFormComponent } from "@/components/article-form/article-form.component";

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [
    ArticleDetailsComponent,
    PageContentComponent,
    ArticleFormComponent
  ],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent  implements OnInit {

  protected article: Article =  createEmptyArticle();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiArticlesService: ApiArticlesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.goBackHome();
        return;
      }
      this.loadArticleOrGoHome(id);
    });
  }

  private loadArticleOrGoHome(id: string): void {
    this.apiArticlesService.getArticleById(id).subscribe((apiResponse: ApiArticle) => {
      if (apiResponse.isSuccessful) {
        this.article = apiResponse.response;
      } else {
        this.goBackHome();
        return;
      }
    });
  }


  private goBackHome(): void {
    this.router.navigate(['/']).then(r => console.log('r', r));
  }

}
