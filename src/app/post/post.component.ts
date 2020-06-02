import {Component, Input} from '@angular/core';
import {TypePost} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent  {

    @Input('mandaPost') myPost: TypePost
    @Input() myTest: string

  constructor() {

  }

}

/* 4) 13 строка -  передаю объект myPost с помощью декоратора @Input */
