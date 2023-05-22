import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentFromLiquidityPageRoutingModule } from './payment-from-liquidity-routing.module';

import { PaymentFromLiquidityPage } from './payment-from-liquidity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentFromLiquidityPageRoutingModule
  ],
  declarations: [PaymentFromLiquidityPage]
})
export class PaymentFromLiquidityPageModule {}
