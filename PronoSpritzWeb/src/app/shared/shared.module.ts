import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports: [AngularMaterialModule],
  providers: [RequestService]
})
export class SharedModule { }
