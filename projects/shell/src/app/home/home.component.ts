import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  constructor(private pippo: MyLibService) {
    // console.log('initiated my lib service Shell', pippo)
  }

  incrementMyService() {
    console.log('SHELL INCREASED: ', this.pippo.incrementCounter());
  }

  ngOnInit() {
  }

}
