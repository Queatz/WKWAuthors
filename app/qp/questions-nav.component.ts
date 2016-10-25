import { Component, Input } from '@angular/core';
import { StateService } from 'app/state.service';

@Component({
  selector: 'qp-questions-nav',
  templateUrl: 'app/qp/questions-nav.component.html',
  styleUrls: ['app/qp/questions-nav.component.css']
})
export class QPQuestionsNavComponent {
  @Input() qp: any;

  constructor(private state: StateService) {

  }
}
