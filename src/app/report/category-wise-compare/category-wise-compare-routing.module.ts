import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWiseComparePage } from './category-wise-compare.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWiseComparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWiseComparePageRoutingModule {}
