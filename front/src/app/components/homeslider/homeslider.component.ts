import { Component } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  imports: [],
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.css'
})
export class HomesliderComponent {

slides: string[] = [
    '../../../assets/images/homeslider/Rectangle.svg',
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
