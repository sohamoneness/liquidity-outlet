import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWiseSalesReportPage } from './category-wise-sales-report.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWiseSalesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWiseSalesReportPageRoutingModule {}
