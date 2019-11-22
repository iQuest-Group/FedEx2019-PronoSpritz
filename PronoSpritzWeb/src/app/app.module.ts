import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AppRoutingModule } from './routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetitionModule } from './competition/competition.module';
import { AuthenticateModule } from './authenticate';
import { DashboardModule } from './dashboard';
import { PredictionModule } from './prediction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompetitionModule,
    AuthenticateModule,
    DashboardModule,
    PredictionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
