import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateWiseReportPageRoutingModule } from './date-wise-report-routing.module';

import { DateWiseReportPage } from './date-wise-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateWiseReportPageRoutingModule
  ],
  declarations: [DateWiseReportPage]
})
export class DateWiseReportPageModule {}
