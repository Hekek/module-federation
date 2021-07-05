import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { MyLibService } from 'my-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(private pippo: MyLibService) {
    // console.log('initiated my lib service MFE1', pippo);
  }


  incrementMyService() {
    console.log('MFE INCREASED: ', this.pippo.incrementCounter());
  }
}
