import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular RxJS';

  sub: Subscription

  constructor() {
      const myTimer$ = interval(1000)
      this.sub = myTimer$.pipe(
        map((value, index )=>{
            return 'номер: ' + value
        })
      ).subscribe(value => console.log(value))
  }

  stop(){
      this.sub.unsubscribe()
  }


}

