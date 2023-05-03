import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent,
  children: [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutingModule { }
