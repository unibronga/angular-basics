import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})



export class AppComponent {


    inputText: any = '';
    myTitle = 'teletext';
    myInput2: any;

    constructor() {
        console.log('start');
    }

    testMethod(event){
        this.inputText = event;
        console.log(this.inputText);
    }

}
