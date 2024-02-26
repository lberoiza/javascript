import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchArticleComponent } from './sidebar-search-article.component';

describe('SidebarSearchArticleComponent', () => {
  let component: SidebarSearchArticleComponent;
  let fixture: ComponentFixture<SidebarSearchArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSearchArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarSearchArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
