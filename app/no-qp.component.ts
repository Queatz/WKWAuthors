import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'no-qp',
  templateUrl: 'app/no-qp.component.html',
  styleUrls: ['app/no-qp.component.css']
})
export class NoQPComponent {
  constructor(private state: StateService) {
  }
}
