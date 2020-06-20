import {Component, Input} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent  {

    @Input('postObject') myPost: Post
    @Input('myDataTag') myDataTagPushed: string

  constructor() {

  }

}/* 5) 2 строка - импортирую тип Post из компонента где он был описан в интерфейсе */
/* 4) 13 строка -  передаю объект myPost с помощью декоратора @Input */
