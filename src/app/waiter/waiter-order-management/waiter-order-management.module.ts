import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaiterOrderManagementPageRoutingModule } from './waiter-order-management-routing.module';

import { WaiterOrderManagementPage } from './waiter-order-management.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaiterOrderManagementPageRoutingModule
  ],
  declarations: [WaiterOrderManagementPage],
  providers: [BarcodeScanner]
})
export class WaiterOrderManagementPageModule { }
