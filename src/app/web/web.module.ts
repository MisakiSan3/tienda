import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProductsComponent,
    HomeComponent
  ]
})
export class WebModule { }
