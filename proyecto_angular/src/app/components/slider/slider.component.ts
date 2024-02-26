import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input()
  public title: string = '';

  @Input()
  public isHome: boolean = false;

}
