import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {NgIf} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgIf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements  OnInit{
  @Input()
  course!:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input() index!: number;

  ngOnInit(): void {
  }

  onEmitCourse() {
    console.log("Curse emitted")
    this.courseSelected.emit(this.course)
  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }
}
