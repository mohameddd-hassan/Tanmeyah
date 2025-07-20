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
  result = 0;
  message = '';
  

  onSlider1Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value1 = +input.value;
  }

  onSlider2Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value2 = +input.value;
  }

  calculateLoan() {
    if (this.value2 > 0) {
      this.result = this.value1 / this.value2;
      this.message = 'This calculation is for illustrative purposes only and does not constitute a final offer or cash amounts. The actual amount or installment may vary based on the terms and conditions.';
    } else {
   
      this.message = 'Please enter a valid number of installments.';
    }
  }
}
