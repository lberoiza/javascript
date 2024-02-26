import { Component } from '@angular/core';
import { SliderComponent } from "@/components/slider/slider.component";
import { AsideComponent } from "@/components/sidebar/aside/aside.component";
import { PageContentComponent } from "@/components/page-content/page-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    AsideComponent,
    PageContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
