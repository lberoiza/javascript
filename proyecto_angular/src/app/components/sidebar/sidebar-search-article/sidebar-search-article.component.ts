import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sidebar-search-article',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sidebar-search-article.component.html',
  styleUrls: [
    '../sidebar.css',
    './sidebar-search-article.component.css'
  ]
})
export class SidebarSearchArticleComponent {

  protected searchStr: string = '';

}
