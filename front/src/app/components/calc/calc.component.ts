import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  value1 = 0;
  value2 = 0;

  onSlider1Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value1 = +input.value;
  }

  onSlider2Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value2 = +input.value;
  }
}
