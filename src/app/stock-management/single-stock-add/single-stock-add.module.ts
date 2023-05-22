import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleStockAddPageRoutingModule } from './single-stock-add-routing.module';

import { SingleStockAddPage } from './single-stock-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleStockAddPageRoutingModule
  ],
  declarations: [SingleStockAddPage]
})
export class SingleStockAddPageModule {}
