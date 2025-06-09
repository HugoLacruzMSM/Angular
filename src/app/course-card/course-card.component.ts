import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
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

  cardClasses() {

    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
    return [];
  }
  cardStyles(){
    return {'background-image':'url('+ this.course.iconUrl+')'}
  }
}
