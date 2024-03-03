import { Component, Input } from '@angular/core';
import { SidebarNewArticleComponent } from "@/components/sidebar/sidebar-new-article/sidebar-new-article.component";
import {
  SidebarSearchArticleComponent
} from "@/components/sidebar/sidebar-search-article/sidebar-search-article.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    SidebarNewArticleComponent,
    SidebarSearchArticleComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  @Input()
  showBoxNewArticle: boolean = true;

  @Input()
  showBoxSearch: boolean = true;
}
