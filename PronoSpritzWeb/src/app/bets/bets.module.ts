import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetsComponent } from './bets/bets.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [BetsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BetsComponent
  ]
})
export class BetsModule { }
