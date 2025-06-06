import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements  OnInit{
  @Input({
    required:true
  })
  course!:Course;

  ngOnInit(): void {
    console.log(this.course)
  }
}
