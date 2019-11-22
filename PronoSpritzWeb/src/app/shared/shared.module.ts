import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    HeaderNavigationComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
