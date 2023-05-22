import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquorWiseComparePageRoutingModule } from './liquor-wise-compare-routing.module';

import { LiquorWiseComparePage } from './liquor-wise-compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquorWiseComparePageRoutingModule
  ],
  declarations: [LiquorWiseComparePage]
})
export class LiquorWiseComparePageModule {}
