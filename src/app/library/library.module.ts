import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [TableComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent, BtnComponent]
})
export class LibraryModule { }
