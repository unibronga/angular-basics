import { Component } from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor() {
      console.log('start TestComponent')
  }


  title: string = ""



}
