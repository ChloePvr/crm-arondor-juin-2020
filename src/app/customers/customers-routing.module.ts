import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';
import { PageAddCustomerComponent } from './pages/page-add-customer/page-add-customer.component';

const routes: Routes = [
  {path : '', component: PageListCustomersComponent},
  {path : 'add', component: PageAddCustomerComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class CustomersRoutingModule { }
