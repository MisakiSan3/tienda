import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
