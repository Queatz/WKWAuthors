import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/sidebar.component.html',
  styleUrls: ['app/sidebar.component.css']
})
export class SidebarComponent {
  private qps: any = [
    {
      id: '1',
      name: 'Quesiton pack 1',
      price: '$0.99'
    },
    {
      id: '2',
      name: 'Forest Sex Adventure',
      price: '$2.99'
    }
  ];

  constructor(private state: StateService) {
  }
}
