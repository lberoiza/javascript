import { Component, Input } from '@angular/core';
import { AsideComponent } from "@/components/sidebar/aside/aside.component";
import { SliderComponent } from "@/components/slider/slider.component";

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [
    AsideComponent,
    SliderComponent
  ],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {
  @Input()
  sliderTitle: string = '';

  @Input()
  subheaderTitle: string = '';

  @Input()
  showBigSlider: boolean = false;

  @Input()
  showBoxNewArticle: boolean = true;

  @Input()
  showBoxSearch: boolean = true;

}
