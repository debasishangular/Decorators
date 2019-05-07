import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  // Property for child component one
        cityMsg = 'Indian City Names';
        cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
        stdAddMsg = 'Add Student';
        stdLeaderObj = new Student('Debasish', 'K');

  // Properties used in Parent
  stdFullName = '';
  msg = '';

  constructor() { }

  ngOnInit() {
  }
  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname ;
      }

  printMsg(msg) {
    this.msg = msg;
      }

}
