import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'qp-questions-nav',
  templateUrl: 'app/qp/questions-nav.component.html',
  styleUrls: ['app/qp/questions-nav.component.css']
})
export class QPQuestionsNavComponent {
  @Input() qp: any;
  @Output() onSelect = new EventEmitter<any>();

  constructor(private state: StateService) {

  }

  public select(question: number) {
    this.onSelect.emit(question);
  }

  public addQuestion() {
    this.qp.questions.push(this.state.newBlankQuestion());
    this.onSelect.emit(this.qp.questions.length - 1);
  }

  public disabled() {
    return this.qp.status !== 'draft';
  }
}
