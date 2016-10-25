declare var gapi: any;
declare var Promise: any;

import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class ApiService {
  public loadQuestionPack(qpId: string) {
    return Promise.resolve({
      id: '2',
      name: 'Forest Sex Adventure',
      price: '$2.99',
      status: 'draft'
    });
  }
}
