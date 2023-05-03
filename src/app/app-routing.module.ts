import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebRoutingRoutingModule } from './web/web-routing-routing.module';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "dashboard", loadChildren: () => import("./web/web.module").then (m => m.WebModule)},
  {path: "**", component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  WebRoutingRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
