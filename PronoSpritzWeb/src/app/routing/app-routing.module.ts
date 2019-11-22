import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from '../competition/competitions/competitions.component';
import { CompetitionComponent } from '../competition/competition/competition.component';

const routes: Routes = [
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'competitions/:competitionName', component: CompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
