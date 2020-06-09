import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [PageListCustomersComponent],
  imports: [
    CommonModule, CustomersRoutingModule
  ]
})
export class CustomersModule { }
