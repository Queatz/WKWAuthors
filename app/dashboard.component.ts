import { Component, Input } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'dashboard-screen',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private state: StateService) {
  }
}
