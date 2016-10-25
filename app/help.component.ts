import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from './state.service';
import { ApiService } from './api.service';

@Component({
  selector: 'help-screen',
  templateUrl: 'app/help.component.html',
  styleUrls: ['app/help.component.css']
})
export class HelpComponent {
  public form: any = {
    text: ''
  }

  public showConfirm: boolean;

  constructor(private state: StateService, private api: ApiService) {

  }

  public sendEmail(form: NgForm) {
//    this.api.sendEmail();
    this.showConfirm = true;

    return false;
  }
}
