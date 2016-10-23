import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  constructor(private state: StateService) {
  }
}
