import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { SigninComponent }  from './sign-in.component';
import { SidebarComponent }  from './sidebar.component';
import { EntrywayComponent }  from './entryway.component';
import { StateService }   from './state.service';
import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: EntrywayComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    EntrywayComponent,
    SigninComponent,
    SidebarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ StateService ]
})
export class AppModule { }
