import { Component } from '@angular/core';
import { StateService } from './state.service';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    SidebarComponent
  ]
})
export class HomeComponent {
  constructor(private state: StateService) {
  }
}
