import { Component, OnInit } from '@angular/core';
import { SliderComponent } from "@/components/slider/slider.component";
import { AsideComponent } from "@/components/sidebar/aside/aside.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";
import { Article } from "@/models/Article.model";
import { allArticles } from "../../../assets/data";
import { ArticlePreviewComponent } from "@/components/article-preview/article-preview.component";

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

  ngOnInit(): void {
    this.articles = allArticles.splice(0, 3);
  }

}
