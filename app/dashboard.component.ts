import { Component, Input } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'dashboard-screen',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent {
  constructor(private state: StateService) {
  }
}
