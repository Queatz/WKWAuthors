import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'entryway-screen',
  templateUrl: './entryway.component.html',
  styleUrls: ['./entryway.component.css']
})
export class EntrywayComponent {
  constructor(private state: StateService) {
  }
}
