import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjsComponent } from './dayjs.component';

describe('DayjsComponent', () => {
  let component: DayjsComponent;
  let fixture: ComponentFixture<DayjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
