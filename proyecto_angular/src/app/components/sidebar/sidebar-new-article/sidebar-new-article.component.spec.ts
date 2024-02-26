import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewArticleComponent } from './sidebar-new-article.component';

describe('SidebarNewArticleComponent', () => {
  let component: SidebarNewArticleComponent;
  let fixture: ComponentFixture<SidebarNewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNewArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarNewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
