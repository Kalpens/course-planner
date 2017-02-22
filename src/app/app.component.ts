import { Component } from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses : Course[];
  constructor(){
    this.courses = [
      {
        academy: 'EASV',
        year: 2017,
        title: 'Angular2',
        education: 'Computer science',
        lecturer: 'Lars bilde'
      },
      {
        academy: 'EASV',
        year: 2017,
        title: 'ITO',
        education: 'Computer science',
        lecturer: 'Lars bilde'
      }
    ];
  }
}
