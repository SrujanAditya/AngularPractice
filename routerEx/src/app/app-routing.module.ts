import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdHomeComponent } from './prod-home/prod-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"",component:ProdHomeComponent},
  {path:"prod/:id",component:ProductDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
