import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageRoutingModule } from './basket-page-routing.module';
import { BasketPageComponent } from './basket-page/basket-page.component';


@NgModule({
  imports: [
    CommonModule,
    BasketPageRoutingModule
  ],
  declarations: [BasketPageComponent]
})
export class BasketPageModule { }
