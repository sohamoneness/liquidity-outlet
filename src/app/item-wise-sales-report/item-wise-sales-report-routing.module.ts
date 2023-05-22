import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemWiseSalesReportPage } from './item-wise-sales-report.page';

const routes: Routes = [
  {
    path: '',
    component: ItemWiseSalesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemWiseSalesReportPageRoutingModule {}
