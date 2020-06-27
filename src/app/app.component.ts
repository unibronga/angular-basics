import { Component } from '@angular/core';

export interface Post {
    title: string,
    text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:  string;

  constructor() {
     this.title = "Angular Pipes";
  }

  num: number = Math.E * Math.PI;
  str : string = 'Hello world'

  time: Date = new Date()

  myObj = {
      name: 'mathematics' ,
      id: '0001',
      category1: {
          name: 'algebra',
          id: '01',
          status: false,
      },
      category2:{
          name: 'geometry',
          id: '02',
          status: true,
      }
  }

  fieldset = 'title'
  search = ''
  posts : Post[]  = [
        {title: 'Ukraine', text: 'Dnipro' },
        {title: 'Ukraine', text: 'Kiev'},
        {title: 'USA', text: 'New York'},
        {title: 'France', text: 'Paris'}
  ]


    myPromise: Promise<any> = new Promise<any>(resolve => {
        setTimeout(() => {
            resolve ('Hello')
        }, 5000)
    })





}
