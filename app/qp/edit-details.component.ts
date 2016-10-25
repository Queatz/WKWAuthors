import { Component, Input, OnChanges } from '@angular/core';
import { StateService } from 'app/state.service';

@Component({
  selector: 'qp-edit-details',
  templateUrl: 'app/qp/edit-details.component.html',
  styleUrls: ['app/qp/edit-details.component.css']
})
export class QPEditDetailsComponent implements OnChanges {
  @Input() qp: any;
  public unsavedChanges: boolean;

  constructor(private state: StateService) {

  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let propName in changes) {
      if (!changes[propName].isFirstChange()) {
        this.unsavedChanges = true;
        return;
      }
    }
  }

  public saveQP() {
    this.unsavedChanges = false;
  }

  public selectPrice(price: string) {
    this.qp.price = price;
  }
}
