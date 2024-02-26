import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar-new-article',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar-new-article.component.html',
  styleUrls: [
    '../sidebar.css',
    './sidebar-new-article.component.css'
  ]
})
export class SidebarNewArticleComponent {

}
