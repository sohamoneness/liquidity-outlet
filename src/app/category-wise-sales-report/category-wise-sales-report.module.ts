import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWiseSalesReportPageRoutingModule } from './category-wise-sales-report-routing.module';

import { CategoryWiseSalesReportPage } from './category-wise-sales-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryWiseSalesReportPageRoutingModule
  ],
  declarations: [CategoryWiseSalesReportPage]
})
export class CategoryWiseSalesReportPageModule {}
