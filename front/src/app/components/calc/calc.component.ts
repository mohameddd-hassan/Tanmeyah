import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-calc',
  imports: [CommonModule,TranslateModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  value1 = 0;
  value2 = 0;
  result = 0;
  message = '';
  calculated = false;
  
  

  onSlider1Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value1 = +input.value;
    this.calculated = false;
  }

  onSlider2Change(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value2 = +input.value;
    this.calculated = false;
  }

  calculateLoan() {
    this.calculated = true;
    if (this.value2 > 0) {
      this.result = this.value1 / this.value2;
      this.message = '';
    } else {
   
      this.message = 'Please enter a valid number of installments.';
    }
  }
}
