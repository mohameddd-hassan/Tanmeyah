import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
cards = [
  { img: '../../../assets/images/about/leadership.svg', title: 'LeaderShip' },
  { img: '../../../assets/images/about/ourhistory.svg', title: 'Our History' },
   { img: '../../../assets/images/about/industry.svg', title: 'Industry Recognition' },

];
 currentIndex = 1; 
  visibleCards = 3;

  getVisibleCards() {
    
    const total = this.cards.length;
    const prev = (this.currentIndex - 1 + total) % total;
    const next = (this.currentIndex + 1) % total;
    return [this.cards[prev], this.cards[this.currentIndex], this.cards[next]];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}