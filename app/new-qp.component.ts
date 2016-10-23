import { Component, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService }   from './state.service';

@Component({
  selector: 'new-qp',
  templateUrl: 'app/new-qp.component.html',
  styleUrls: ['app/new-qp.component.css']
})
export class NewQPComponent {
  public form: any = {
    name: '',
    questions: []
  };

  public questionIndex: number;
  public showQuestion: boolean;

  constructor(private state: StateService, private ngZone: NgZone) {
  }

  public next(form: NgForm) {
    this.state.getQuestionPacks().push({
      id: '3',
      name: this.form.name,
      price: 'DRAFT'
    });

    this.questionIndex = 0;
    this.form.questions.push(this.blankQuestion());

    this.showQuestion = true;

    return false;
  }

  public nextQuestion(form: NgForm) {
    this.form.questions.push(this.blankQuestion());
    this.questionIndex += 1;

    return false;
  }

  public canAdvance() {
    let q = this.form.questions[this.questionIndex];
    return q.text
      && q.choices[0]
      && q.choices[1]
      && q.choices[2]
      && q.choices[3];
  }

  private blankQuestion() {
    return {
      text: '',
      choices: [
        '',
        '',
        '',
        ''
      ]
    };
  }
}
