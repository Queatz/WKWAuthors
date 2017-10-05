import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'qp-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class QPEditDetailsComponent implements OnChanges {
  @Input() qp: any;
  private savedCopy: any;

  constructor(private state: StateService) {

  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.savedCopy = Object.assign({}, this.qp);
  }

  public saveQP() {
    this.savedCopy = Object.assign({}, this.qp);

    return false;
  }

  public unsavedChanges() {
    return this.qp.name !== this.savedCopy.name ||
      this.qp.description !== this.savedCopy.description ||
      this.qp.price !== this.savedCopy.price;
  }

  public selectPrice(price: string) {
    this.qp.price = price;
  }

  public disabled() {
    return this.qp.status !== 'draft';
  }

  public setStatus(status: string) {
    this.qp.status = status;
  }

  public calcProfit() {
    return Math.ceil(20 / +this.qp.price.slice(1));
  }
}
