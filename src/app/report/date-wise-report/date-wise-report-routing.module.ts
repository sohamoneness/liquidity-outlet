import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateWiseReportPage } from './date-wise-report.page';

const routes: Routes = [
  {
    path: '',
    component: DateWiseReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateWiseReportPageRoutingModule {}
