import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './sign-in.component';
import { SidebarComponent } from './sidebar.component';
import { EntrywayComponent } from './entryway.component';
import { NewQPComponent } from './new-qp.component';
import { NoQPComponent } from './no-qp.component';
import { QPComponent } from './qp.component';
import { StateService } from './state.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    QPComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ StateService ]
})
export class AppModule { }
