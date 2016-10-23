import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'entryway-screen',
  templateUrl: 'app/entryway.component.html',
  styleUrls: ['app/entryway.component.css']
})
export class EntrywayComponent {
  constructor(private state: StateService) {
  }
}
