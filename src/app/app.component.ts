import { Component } from '@angular/core';

export interface TypePost {
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

    test:string = 'Мой тест'

    posts: TypePost[] = [
        {title:'First news', text:'Я хочу выучить Angular компоненты', id:1},
        {title:'Second news', text:'Я хочу выучить Angular модул  пайпы', id:2},
        {title:'Third news', text:'Я хочу выучить много всего ))', id:3},
    ]



}


/* 1) 3 строка -  создаю (инетерфейс) свой тип TypePost */
/* 2) 16 строка -  создаю массив объектов со своим типом */
