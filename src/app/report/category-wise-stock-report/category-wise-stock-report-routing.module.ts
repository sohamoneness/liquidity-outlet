import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWiseStockReportPage } from './category-wise-stock-report.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWiseStockReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWiseStockReportPageRoutingModule {}
