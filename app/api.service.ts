declare var gapi: any;
declare var Promise: any;

import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class ApiService {
  private questionPacks = [
    {
      id: '1',
      name: 'Quesiton pack 1',
      description: '',
      price: '$0.99',
      author: 'Jacob Ferrero',
      status: 'active',
      questions: []
    }, {
      id: '2',
      name: 'Forest Sex Adventure',
      description: '',
      price: '$2.99',
      author: 'Jacob Ferrero',
      status: 'draft',
      questions: [
        {
          text: 'When dinosaurs went extinct, did your girlfriend have sex with at least 5 different species?',
          choices: [
            'Yes',
            'She didn\'t make the cut',
            'She knows best',
            'No'
          ]
        }, {
          text: 'Is your girlfriend more into brachiosaurus or velociraptorosaurus?',
          choices: [
            'Both, hands down',
            'Brachiosaurus',
            'Velociraptorosaurus',
            'She can\'t stand either'
          ]
        }
      ]
    }
  ];

  private questionPacksNeedingReview = [
    {
      id: '19',
      name: 'Climbing Mountains',
      description: '',
      price: '$1.99',
      status: 'in_review',
      author: 'Jasmine Gray',
      questions: [
        {
          text: 'When dinosaurs went extinct, did your girlfriend have sex with at least 5 different species?',
          choices: [
            'Yes',
            'She didn\'t make the cut',
            'She knows best',
            'No'
          ]
        }, {
          text: 'Is your girlfriend more into brachiosaurus or velociraptorosaurus?',
          choices: [
            'Both, hands down',
            'Brachiosaurus',
            'Velociraptorosaurus',
            'She can\'t stand either'
          ]
        }
      ]
    }
  ];

  public getQuestionPacks() {
    return Promise.resolve(this.questionPacks);
  }

  public getQuestionPacksNeedingReview() {
    return Promise.resolve(this.questionPacksNeedingReview);
  }

  public loadQuestionPack(qpId: string) {
    return Promise.resolve(this.questionPacks[+qpId - 1 /* it just so happenz lol! */] || this.questionPacksNeedingReview[0]);
  }
}
