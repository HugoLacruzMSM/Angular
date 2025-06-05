import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
