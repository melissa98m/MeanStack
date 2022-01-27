import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesViewComponent } from './views/sales-view/sales-view.component';

const routes: Routes = [
  {path: '', component:SalesViewComponent},
  {path:'sales-view', component:SalesViewComponent},
  {path:'**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
