import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquorWiseComparePage } from './liquor-wise-compare.page';

const routes: Routes = [
  {
    path: '',
    component: LiquorWiseComparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquorWiseComparePageRoutingModule {}
