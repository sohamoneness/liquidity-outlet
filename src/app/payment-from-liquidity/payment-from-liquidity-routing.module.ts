import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFromLiquidityPage } from './payment-from-liquidity.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentFromLiquidityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentFromLiquidityPageRoutingModule {}
