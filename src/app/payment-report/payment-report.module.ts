import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentReportPageRoutingModule } from './payment-report-routing.module';

import { PaymentReportPage } from './payment-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentReportPageRoutingModule
  ],
  declarations: [PaymentReportPage]
})
export class PaymentReportPageModule {}
