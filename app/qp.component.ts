import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StateService } from './state.service';
import { ApiService } from './api.service';

@Component({
  selector: 'qp-screen',
  templateUrl: 'app/qp.component.html',
  styleUrls: ['app/qp.component.css']
})
export class QPComponent implements OnInit {
  public qpId: string;
  public qp: any;

  private editQuestionIndex: number;
  private editQuestion: any;

  constructor(private state: StateService, private api: ApiService, private route: ActivatedRoute) {

  }

  public choose(index: number) {
    this.editQuestionIndex = index;
    this.editQuestion = this.qp.questions[index];
  }

  public removeQuestion(index: number) {
    this.qp.questions.splice(index, 1);
    this.editQuestion = null;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.qpId = params['id'];
      this.api.loadQuestionPack(this.qpId).then((qp: any) => this.qp = qp);
      this.editQuestion = false;
    });
  }

  public disabled() {
    return this.qp.status !== 'draft';
  }
}
