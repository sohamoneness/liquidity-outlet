import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWiseComparePageRoutingModule } from './category-wise-compare-routing.module';

import { CategoryWiseComparePage } from './category-wise-compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryWiseComparePageRoutingModule
  ],
  declarations: [CategoryWiseComparePage]
})
export class CategoryWiseComparePageModule {}
