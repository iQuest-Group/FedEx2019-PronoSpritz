import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';

const competitionModuleComponents = [{
  CompetitionComponent, CompetitionsComponent
}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [competitionModuleComponents],
  exports: [competitionModuleComponents]
})
export class CompetitionModule { }
