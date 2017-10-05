import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StateService } from './state.service';

import { SidebarQPComponent } from './sidebar-qp.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    SidebarQPComponent
  ]
})
export class SidebarComponent {
  constructor(private state: StateService, private route: ActivatedRoute) {
  }
}
