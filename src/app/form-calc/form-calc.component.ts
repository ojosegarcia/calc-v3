import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operation: string = '';

  onClickCalculate(operation: string) {
    switch (operation) {
      case 'somar':
        this.result = this.num1 + this.num2;
        break;
      case 'subtrai':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num1 / this.num2;
        break;
      case 'exponent':
        this.result = Math.pow(this.num1, this.num2);
        break;
      case 'sqrt':
        this.result = Math.sqrt(this.num1);
        break;
      case 'percentage':
        this.result = (this.num1 * this.num2) / 100;
        break;
      default:
        this.result = 0;
    }
    this.operation = operation;
  }
}
