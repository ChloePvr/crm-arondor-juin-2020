import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [NavComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, FooterComponent, HeaderComponent]
})
export class CoreModule { }
