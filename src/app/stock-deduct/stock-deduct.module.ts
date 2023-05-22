import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDeductPageRoutingModule } from './stock-deduct-routing.module';

import { StockDeductPage } from './stock-deduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockDeductPageRoutingModule
  ],
  declarations: [StockDeductPage]
})
export class StockDeductPageModule {}
