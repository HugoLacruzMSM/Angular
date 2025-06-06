import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseCardComponent} from './course-card/course-card.component';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  courses = COURSES;



  onCourseSelected(course: Course) {
   console.log('App component ',course)
  }


  protected readonly COURSES = COURSES;
}
