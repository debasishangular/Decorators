import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @ViewChild('firstNumber') private firstNumber: ElementRef<any>;
  @ViewChild('secondNumber') private secondNumber: ElementRef<any>;

  sum: number;
  constructor() { }

  ngOnInit() {
  }

  addNumbers() {
// tslint:disable-next-line: radix
    this.sum = parseInt(this.firstNumber.nativeElement.value) +
// tslint:disable-next-line: radix
    parseInt(this.secondNumber.nativeElement.value);

  }


}
