import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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

  public qp: any;
  public questionIndex: number;
  public questionPackSize: number;
  public show: string;

  constructor(private state: StateService, private ngZone: NgZone, private router: Router) {
  }

  public next(form: NgForm) {
    this.qp = {
      id: '' + (this.state.getQuestionPacks().length + 1),
      name: this.form.name,
      description: this.form.description,
      price: '$0.00',
      status: 'draft',
      questions: this.form.questions
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
    this.qp.status = 'in_review';

    this.router.navigate(['/home']);

    return false;
  }

  public checkWords() {
    return (this.form.description.trim().match(/\s+/g) || []).length >= 2;
  }

  private newBlankQuestion() {
    return this.state.newBlankQuestion();
  }
}
