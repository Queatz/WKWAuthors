import { Component, Input } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'sidebar-qp',
  templateUrl: './sidebar-qp.component.html',
  styleUrls: ['./sidebar-qp.component.css']
})
export class SidebarQPComponent {
  @Input() qp: any;

  constructor(private state: StateService) {
  }
}
