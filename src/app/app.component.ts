import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular-Directive';
  visible : boolean = true;
  toggleTab: boolean = true;



  contentClass = {
    content: true,
    box2: true
  }

    myTab(){
        this.visible = !this.visible;
        this.toggleTab = !this.toggleTab;
        this.contentClass.box2 = !this.contentClass.box2

  }


}
