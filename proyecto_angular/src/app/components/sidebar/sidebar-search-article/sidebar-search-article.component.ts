import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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

  constructor(
    private router: Router
  ) {
  }

  private isFormValid(): boolean {
    return this.searchStr.trim().length > 0;
  }

  protected search(mySearchForm: NgForm): void {
    if(this.isFormValid()) {
      this.router.navigate(['/blog/search', this.searchStr]).then();
    }
  }

  shouldInputBeSelected() {
    return this.searchStr.length > 0;
  }

}
