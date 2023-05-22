import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDeductPage } from './stock-deduct.page';

const routes: Routes = [
  {
    path: '',
    component: StockDeductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDeductPageRoutingModule {}
