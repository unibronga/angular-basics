import {Component, Input} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent  {

    @Input('megaPost') myPost: Post
    @Input('testTest') myTest: string

  constructor() {

  }

}/* 5) 2 строка - импортирую тип Post из компонента где он был описан в интерфейсе */
/* 4) 13 строка -  передаю объект myPost с помощью декоратора @Input */
