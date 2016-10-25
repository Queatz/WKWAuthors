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

  constructor(private state: StateService, private api: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.qpId = params['id'];
      this.api.loadQuestionPack(this.qpId).then(qp => this.qp = qp);
    });
  }
}
