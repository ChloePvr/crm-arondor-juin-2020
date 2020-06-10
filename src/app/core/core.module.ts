import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [NavComponent, FooterComponent, HeaderComponent, TotalPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent, FooterComponent, HeaderComponent, TotalPipe]
})
export class CoreModule { }
