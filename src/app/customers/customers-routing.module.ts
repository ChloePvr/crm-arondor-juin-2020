import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';

const routes: Routes = [
  {path : '', component: PageListCustomersComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class CustomersRoutingModule { }
