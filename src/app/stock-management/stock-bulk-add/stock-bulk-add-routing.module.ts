import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockBulkAddPage } from './stock-bulk-add.page';

const routes: Routes = [
  {
    path: '',
    component: StockBulkAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockBulkAddPageRoutingModule {}
