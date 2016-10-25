import { Component, Input } from '@angular/core';
import { StateService } from 'app/state.service';

@Component({
  selector: 'qp-edit-question',
  templateUrl: 'app/qp/edit-question.component.html',
  styleUrls: ['app/qp/edit-question.component.css']
})
export class QPEditQuestionComponent {
  @Input() question: any;

  constructor(private state: StateService) {

  }
}
