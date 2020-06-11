import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [TableComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableComponent, BtnComponent]
})
export class LibraryModule { }
