import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockLogPageRoutingModule } from './stock-log-routing.module';

import { StockLogPage } from './stock-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockLogPageRoutingModule
  ],
  declarations: [StockLogPage]
})
export class StockLogPageModule {}
