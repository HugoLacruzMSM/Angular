import { Component } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  data ={
    title: 'HUGO LACRUZ',
    text: 'This is an Angular Tutorial, 8:18'
  }
  onLogoClicked() {
    alert('Hello world')
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
