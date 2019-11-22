import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './competition/team/team.component';

const competitionModuleComponents = [
  CompetitionComponent, CompetitionsComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  declarations: [competitionModuleComponents, TeamComponent],
  exports: [competitionModuleComponents]
})
export class CompetitionModule { }
