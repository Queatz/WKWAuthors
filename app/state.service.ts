declare var gapi: any;

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StateService {
  public user: any;
  public ready: boolean;

  private questionPacks = [
    {
      id: '1',
      name: 'Quesiton pack 1',
      price: '$0.99'
    },
    {
      id: '2',
      name: 'Forest Sex Adventure',
      price: '$2.99'
    }
  ];

  constructor(private router: Router, private ngZone: NgZone) {
    gapi.load('auth2', () => {
      gapi.auth2.init();
      var auth2 = gapi.auth2.getAuthInstance();
      if (auth2) {
        auth2.then(() => {
          if (auth2.isSignedIn.get()) {
            this.load(auth2.currentUser.get().getBasicProfile());
          } else {
            this.load(null, true);
          }
        });
      }
    });
  }

  public getName() {
    if (this.user) {
      return this.user.getGivenName();
    }
  }

  public signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      this.load(null, true);
    });
  }

  public load(googleUser: any, advance?: boolean) {
    this.ngZone.run(() => {
      this.user = googleUser;
      this.ready = true;

      if (!advance) {
        return;
      }

      if (this.user) {
        setTimeout(() => this.router.navigate(['/home']), 1500);
      } else {
        this.router.navigate(['/'])
      }
    });
  }

  public getQuestionPacks() {
    return this.questionPacks;
  }

}
