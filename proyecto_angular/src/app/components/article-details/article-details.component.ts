import { Component, Input } from '@angular/core';
import { AlertMessage, AlertService } from "@/services/alerts/alert.service";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { Article } from "@/models/Article.model";
import { ConvertNewLinesToBrTag } from "@/pipes/ConvertNewLinesToBrTag";
import { DayjsComponent } from "@/components/dayjs/dayjs.component";
import { Router, RouterLink } from "@angular/router";
import { allArticles } from "../../../assets/data";
import { getImageUrl } from "@/libs/ImageUtils";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [
    ConvertNewLinesToBrTag,
    DayjsComponent,
    RouterLink
  ],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {
  protected readonly getImageUrl = getImageUrl;

  @Input()
  article: Article = allArticles[0];

  constructor(
    private alert: AlertService,
    private apiArticleService: ApiArticlesService,
    private router: Router
  ) {
  }


  protected confirmDeleteArticle = (articleId: string) => {

    const message: AlertMessage = {
      title: 'The deletion is permanent!',
      content: 'Are you sure, that you want to delete the Article?'
    }

    this.alert.confirmDialog(message)
      .then((willDelete) => {
        if (willDelete) {
          this.deleteArticle(articleId);
        }
      });
  }

  private deleteArticle = (articleId: string) => {
    const alertMessage: AlertMessage = {
      title: '',
      content: ''
    }

    this.apiArticleService.deleteArticle(articleId)
      .subscribe(apiResult => {
        if (apiResult.isSuccessful) {
          alertMessage.title = `Successfully deleted`;
          alertMessage.content = `The Article: "${apiResult.response?.title}" was successfully deleted.`;
          this.router.navigate(['/blog']).then(() => {
            this.alert.showSuccess(alertMessage);
          })
        } else {
          alertMessage.title = `Error`;
          alertMessage.content = `The Article could not be eliminated`;
          this.alert.showError(alertMessage);
        }
      })
  }
}
