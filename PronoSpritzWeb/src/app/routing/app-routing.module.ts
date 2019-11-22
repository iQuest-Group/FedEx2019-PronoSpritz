import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from '../competition/competitions/competitions.component';
import { CompetitionComponent } from '../competition/competition/competition.component';
import { LoginComponent } from '../authenticate/login/login.component';
import { AuthorizedGuard } from './guard/authorized.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'competitions', component: CompetitionsComponent, canActivate: [AuthorizedGuard] },
  { path: 'competitions/:competitionName', component: CompetitionComponent, canActivate: [AuthorizedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
