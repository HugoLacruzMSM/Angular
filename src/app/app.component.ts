import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseCardComponent} from './course-card/course-card.component';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  courses = COURSES;

  angularCourse:Course = COURSES[0];
  rxjsCourse:Course = COURSES[1];
  ngrxCourse:Course = COURSES[2];

  onCourseSelected(course: Course) {
   console.log('App component ',course)
  }

}
