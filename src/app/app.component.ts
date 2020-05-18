import { Component } from '@angular/core';
import {log} from "util";

@Component({
    selector: 'app-root',

    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-basics';
    smart = {
        title: 'User',

        text: 'lalalalallalalalalla',
    };

    img =
        'https://avatars.mds.yandex.net/get-pdb/1346662/af26fa79-7712-4943-bd7e-f169ec86528d/s375';

    inputValue = '';

    constructor() {
        setTimeout(() => {
            this.img =
                'https://pbs.twimg.com/profile_images/1067490244117889029/q3GIYw9I_400x400.jpg';
        }, 5000);
    }

    onKey(event: KeyboardEvent) {
        this.inputValue = (<HTMLInputElement>event.target).value;
    }

    onInput(event?: any) {
        this.inputValue = event.target.value;
    }

    setOver(){
        return console.log('Hi')
    }
}
