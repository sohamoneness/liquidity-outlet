import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaiterOrderDetailsPageRoutingModule } from './waiter-order-details-routing.module';

import { WaiterOrderDetailsPage } from './waiter-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaiterOrderDetailsPageRoutingModule
  ],
  declarations: [WaiterOrderDetailsPage]
})
export class WaiterOrderDetailsPageModule {}
