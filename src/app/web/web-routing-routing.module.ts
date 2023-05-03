import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {path: "dashboard",component:WebComponent,
  children:[
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent}
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingRoutingModule { }
