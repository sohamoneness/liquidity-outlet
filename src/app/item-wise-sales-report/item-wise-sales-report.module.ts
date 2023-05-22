import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemWiseSalesReportPageRoutingModule } from './item-wise-sales-report-routing.module';

import { ItemWiseSalesReportPage } from './item-wise-sales-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemWiseSalesReportPageRoutingModule
  ],
  declarations: [ItemWiseSalesReportPage]
})
export class ItemWiseSalesReportPageModule {}
