import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { PageAddCustomerComponent } from './pages/page-add-customer/page-add-customer.component';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';



@NgModule({
  declarations: [PageListCustomersComponent, PageAddCustomerComponent, FormCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    LibraryModule,
    TemplatesModule,
    TextModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
