import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { SharedModule } from '../shared';

const competitionModuleComponents = [
  CompetitionComponent, CompetitionsComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [competitionModuleComponents],
  exports: [competitionModuleComponents]
})
export class CompetitionModule { }
