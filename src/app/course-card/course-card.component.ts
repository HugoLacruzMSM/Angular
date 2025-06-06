import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements  OnInit{
  @Input()
  course!:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {
  }

  onEmitCourse() {
    console.log("Curse emitted")
    this.courseSelected.emit(this.course)
  }
}
