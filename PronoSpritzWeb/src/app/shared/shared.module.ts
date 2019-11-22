import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    HeaderNavigationComponent,
    ReactiveFormsModule
  ],
  providers: [RequestService]
})
export class SharedModule { }
