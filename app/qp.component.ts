import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StateService } from './state.service';

@Component({
  selector: 'qp-screen',
  templateUrl: 'app/qp.component.html',
  styleUrls: ['app/qp.component.css']
})
export class QPComponent implements OnInit {
  public qpId: string;

  constructor(private state: StateService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.qpId = params.id;
    })
  }
}
