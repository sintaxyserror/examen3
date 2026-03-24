import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  size: string = 'default';

  more(newSize: string) {
    this.size = newSize; 
  }

  less(newSize: string) {
    this.size = newSize; 
  }
}
