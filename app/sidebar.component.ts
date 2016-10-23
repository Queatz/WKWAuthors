import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/sidebar.component.html',
  styleUrls: ['app/sidebar.component.css']
})
export class SidebarComponent {
  constructor(private state: StateService) {
  }
}
