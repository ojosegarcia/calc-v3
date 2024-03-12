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

  onClickSum() {
    this.result = this.num1 + this.num2;
  }

  onClickSubtract() {
    this.result = this.num1 - this.num2;
  }

  onClickMultiply() {
    this.result = this.num1 * this.num2;
  }

  onClickDivide() {
    if (this.num2 === 0) {
      this.result = NaN; //se dividir por zero
    } else {
      this.result = this.num1 / this.num2;
    }
  }

  onClickPercentage() {
    this.result = (this.num1 / 100) * this.num2;
  }

  onClickClear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }
}
