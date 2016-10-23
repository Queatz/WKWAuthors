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
    description: '',
    price: '',
    questions: []
  };

  public questionIndex: number;
  public questionPackSize: number;
  public show: string;

  constructor(private state: StateService, private ngZone: NgZone) {
  }

  public next(form: NgForm) {
    this.qp = {
      id: '3',
      name: this.form.name,
      price: 'DRAFT'
    };

    this.state.getQuestionPacks().push(this.qp);

    this.questionIndex = 0;
    this.questionPackSize = 1; // 40
    this.form.questions.push(this.newBlankQuestion());
    this.show = 'question';

    return false;
  }

  public nextQuestion(form: NgForm) {
    this.form.questions.push(this.newBlankQuestion());
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

  public keepGoing() {
    this.questionPackSize += 2; // 10
  }

  public finishUp() {
    this.show = 'details';
  }

  public selectPrice(price: string) {
    this.form.price = price;
    this.qp.price = this.form.price;
  }

  public calcProfit() {
    return Math.ceil(20 / +this.form.price.slice(1));
  }

  public submitForReview(form: NgForm) {
    this.show = 'done';

    return false;
  }

  private newBlankQuestion() {
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
