import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';



@NgModule({
  declarations: [PageListCustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    LibraryModule,
    TemplatesModule,
    TextModule,
    CoreModule
  ]
})
export class CustomersModule { }
