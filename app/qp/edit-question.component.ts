import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'qp-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class QPEditQuestionComponent {
  @Input() question: any;
  @Input() disabled: boolean;
  @Output() onRemove = new EventEmitter<any>();
  private savedCopy: any;

  constructor(private state: StateService) {

  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.savedCopy = Object.assign({}, this.question);
  }

  public save() {
    this.savedCopy = Object.assign({}, this.question);

    return false;
  }

  public unsavedChanges() {
    return this.question.text !== this.savedCopy.text ||
      this.question.text !== this.savedCopy.text ||
      this.question.text !== this.savedCopy.text;
  }

  public removeQuestion() {
    this.onRemove.emit();
  }
}
