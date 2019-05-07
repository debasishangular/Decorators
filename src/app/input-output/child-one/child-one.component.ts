import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input() color: string;

  @Input() ctMsg: string;


  @Input('ctArray') cityArray: Array<string>;

  @Input() studentAddMsg: string;

  @Input('stdLeader') myStdLeader: Student;

  @Output('addStudentEvent') addStdEvent = new EventEmitter<Student>();

  @Output() sendMsgEvent = new EventEmitter<string>();

  student = new Student();

  childTitle = '---Child One---';

  msg: string;

  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    this.addStdEvent.emit(this.student);
    }
    sendMsg() {
      this.sendMsgEvent.emit(this.msg);
      }

}
