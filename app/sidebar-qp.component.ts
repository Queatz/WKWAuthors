import { Component, Input } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'sidebar-qp',
  templateUrl: 'app/sidebar-qp.component.html',
  styleUrls: ['app/sidebar-qp.component.css']
})
export class SidebarQPComponent {
  @Input() qp: any;

  constructor(private state: StateService) {
  }
}
