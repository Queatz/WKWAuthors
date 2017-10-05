declare var gapi: any;

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class StateService {
  public user: any;
  public ready: boolean;
  private questionPacks: any;
  private questionPacksNeedingReview: any;

  public balance: string = '$0.98';

  public recentActivity = [
    {
      activity: 'Purchase of Forest Sex Adventure',
      date: 'Sun Nov 9, 2016',
      balanceChange: '+$0.98',
      balance: '$0.98',
    },
    {
      activity: 'Account Created',
      date: 'Sun Oct 30, 2016',
      balance: '$0',
    }
  ];

  constructor(private api: ApiService, private router: Router, private ngZone: NgZone) {
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

    this.api.getQuestionPacks().then((qps: any) => {
      this.questionPacks = qps;
    });

    this.api.getQuestionPacksNeedingReview().then((qps: any) => {
      this.questionPacksNeedingReview = qps;
    });
  }

  public getName() {
    if (this.user) {
      return this.user.getGivenName();
    }
  }

  public getEmail() {
    if (this.user) {
      return this.user.getEmail();
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

  public getQuestionPacksNeedingReview() {
    return this.questionPacksNeedingReview;
  }

  public isAdmin() {
    return true;
  }

  public newBlankQuestion() {
    return {
      text: '',
      choices: [
        '',
        '',
        '',
        ''
      ]
    };
  }

}
