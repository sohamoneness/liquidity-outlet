import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockManagementPageRoutingModule } from './stock-management-routing.module';

import { StockManagementPage } from './stock-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockManagementPageRoutingModule
  ],
  declarations: [StockManagementPage]
})
export class StockManagementPageModule {}
