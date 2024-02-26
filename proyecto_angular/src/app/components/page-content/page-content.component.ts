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
  sliderTitle: string = 'sdfsdfsd';

  @Input()
  isHomePage: boolean = false;

  @Input()
  subheaderTitle: string = '';

}
