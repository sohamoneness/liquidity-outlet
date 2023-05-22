import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWiseStockReportPageRoutingModule } from './category-wise-stock-report-routing.module';

import { CategoryWiseStockReportPage } from './category-wise-stock-report.page';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    CategoryWiseStockReportPageRoutingModule
  ],
  declarations: [CategoryWiseStockReportPage, BarChartComponent, PieChartComponent]
})
export class CategoryWiseStockReportPageModule { }
