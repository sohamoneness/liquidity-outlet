import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockBulkAddPageRoutingModule } from './stock-bulk-add-routing.module';

import { StockBulkAddPage } from './stock-bulk-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockBulkAddPageRoutingModule
  ],
  declarations: [StockBulkAddPage]
})
export class StockBulkAddPageModule {}
