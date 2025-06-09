import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseCardComponent} from './course-card/course-card.component';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe, JsonPipe, KeyValuePipe,
  LowerCasePipe,
  NgForOf,
  PercentPipe, SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, NgForOf, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, PercentPipe, DecimalPipe, CurrencyPipe, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  courses = COURSES;
  startDate = new Date(2000,0,1);
  title = COURSES[0].description
  price = 9.9900000009889
  rate= 0.67;
course = COURSES[0]

  onCourseSelected(course: Course) {
   console.log('App component ',course)
  }


}
