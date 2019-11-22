import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AppRoutingModule } from './routing';
import { RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition/competition/competition.component';

const routes = [
  { path: 'competition', component: CompetitionComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
