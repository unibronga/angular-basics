import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnChanges {

    @Input('postObject') myPost: Post
    @Input() myDataTag: string

    @Output() onRemove = new EventEmitter<number>();

    constructor() {
        console.log('constructor')
    }

    ngOnInit(){
        console.log('ngOnInit')
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let num in changes) {
            let a = changes[num];
            console.log(a);
            console.log(' JSON ---> ' + JSON.stringify(a.currentValue));
        }

    }

    removePost($event: MouseEvent){
        this.onRemove.emit(this.myPost.id)
    }




}



/* 5) 2 строка - импортирую тип Post из компонента где он был описан в интерфейсе */
/* 4) 13 строка -  передаю объект myPost с помощью декоратора @Input */
