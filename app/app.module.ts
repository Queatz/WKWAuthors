import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './sign-in.component';
import { SidebarComponent } from './sidebar.component';
import { EntrywayComponent } from './entryway.component';
import { NewQPComponent } from './new-qp.component';
import { NoQPComponent } from './no-qp.component';
import { QPComponent } from './qp.component';
import { HelpComponent } from './help.component';

import { QPEditDetailsComponent } from './qp/edit-details.component';
import { QPEditQuestionComponent } from './qp/edit-question.component';
import { QPQuestionsNavComponent } from './qp/questions-nav.component';

import { StateService } from './state.service';
import { ApiService } from './api.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: EntrywayComponent },
      { path: 'home', component: HomeComponent, children: [
        {
          path: '',
          component: NoQPComponent
        },
        {
          path: 'new',
          component: NewQPComponent
        },
        {
          path: 'help',
          component: HelpComponent
        },
        {
          path: 'qp/:id',
          component: QPComponent
        }
      ] },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    EntrywayComponent,
    SigninComponent,
    SidebarComponent,
    NewQPComponent,
    NoQPComponent,
    QPComponent,
    HelpComponent,

    QPEditDetailsComponent,
    QPEditQuestionComponent,
    QPQuestionsNavComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ StateService, ApiService ]
})
export class AppModule { }
