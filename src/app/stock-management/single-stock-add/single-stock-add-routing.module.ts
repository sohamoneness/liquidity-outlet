import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleStockAddPage } from './single-stock-add.page';

const routes: Routes = [
  {
    path: '',
    component: SingleStockAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleStockAddPageRoutingModule {}
