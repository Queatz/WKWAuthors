declare var gapi: any;

import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { StateService } from './state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signin',
    template: '<div class="google-signin" [hidden]="!state.ready"></div>',
    styleUrls: ['./sign-in.component.css']
})
export class SigninComponent implements AfterViewInit {
  private element: any;

  constructor(private state: StateService, private router: Router, elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    var state = this.state;
    var self = this;
    gapi.signin2.render(this.element.querySelector('.google-signin'), {
      width: 240,
      longtitle: true,
      theme: 'dark',
      onsuccess: (googleUser: any) => {
        this.state.load(googleUser.getBasicProfile(), true);
      },
      onfailure: (error: any) => {
        console.log(error);
      },
      scope: 'profile email',
      redirect_uri: 'postmessage'
    });
  }
}
