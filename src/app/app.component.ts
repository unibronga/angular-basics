import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    title = 'angular-basics';
    now : Date = new Date().toString();

    smart = {
        title: 'User',
        text: 'lalalalallalalalalla',
    };
    img =
        'https://avatars.mds.yandex.net/get-pdb/1346662/af26fa79-7712-4943-bd7e-f169ec86528d/s375';
    inputValue = '';

    myToggle = false;
    tab = 1;
    testArray: Array<string> = ['second', 'floor', 'third', 'nexus'];

    constructor() {
        setTimeout(() => {
            this.img =
                'https://pbs.twimg.com/profile_images/1067490244117889029/q3GIYw9I_400x400.jpg';
        }, 5000);
        console.log('start class AppComponent');
    }

    onKey(event: KeyboardEvent) {
        this.inputValue = (<HTMLInputElement>event.target).value;
    }
    onInput(event?: any) {
        this.inputValue = event.target.value;
    }
    onEnter() {
        return alert('HELLO!');
    }
    onBlur(str: string) {
        this.smart.title = str;
    }

    starTest(){
        return console.log('startTest run!')
    }

}
