import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StateService } from './state.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/sidebar.component.html',
  styleUrls: ['app/sidebar.component.css']
})
export class SidebarComponent {
  constructor(private state: StateService, private route: ActivatedRoute) {
  }
}
