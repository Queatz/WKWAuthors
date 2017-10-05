import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'no-qp',
  templateUrl: './no-qp.component.html',
  styleUrls: ['./no-qp.component.css']
})
export class NoQPComponent {
  constructor(private state: StateService) {
  }

  public getDay() {
    let weekday = new Array(7);
    weekday[0]=  'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    return weekday[new Date().getDay()];
  }
}
