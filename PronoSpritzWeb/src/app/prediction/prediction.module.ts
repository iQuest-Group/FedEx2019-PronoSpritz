import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionComponent } from './prediction/prediction.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [PredictionComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PredictionComponent
  ]
})
export class PredictionModule { }
