import { Component } from '@angular/core';

export interface Post {
    title: string;
    text: string;
    id?: any
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    myData: Array<string> = [
        'Hello', 'My', 'Friends'
    ]

    posts: Post[] = [
        {title:'First news', text:'Я хочу выучить Angular компоненты', id:1},
        {title:'Second news', text:'Я хочу выучить Angular модул  пайпы', id:2},
        {title:'Third news', text:'Я хочу выучить много всего ))', id:3},
    ]


    updatePosts(newPost: Post){
        this.posts.unshift(newPost)
    }

}


/* 1) 3 строка -  создаю (инетерфейс) свой тип Post */
/* 2) 16 строка -  создаю массив объектов со своим типом */
