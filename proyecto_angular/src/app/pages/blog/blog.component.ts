import { Component, OnInit } from '@angular/core';
import { Article } from "@/models/Article.model";
import { allArticles } from "../../../assets/data";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    ArticlePreviewComponent,
    PageContentComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  protected articles: Article[] = [];

  ngOnInit(): void {
    this.articles = allArticles;
  }

}
