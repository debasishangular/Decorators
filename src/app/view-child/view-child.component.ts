import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('title') private elName: ElementRef;
  @ViewChild(ChildComponent) private childComponent: ChildComponent;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elName.nativeElement.style.color = 'red';
    console.log('Values on ngAfterViewInit():');
    console.log('title:', this.elName.nativeElement);
  }
  addNumbers(): void {
this.childComponent.addNumbers();
  }
}
