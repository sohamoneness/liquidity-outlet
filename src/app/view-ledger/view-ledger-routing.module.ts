import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLedgerPage } from './view-ledger.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLedgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLedgerPageRoutingModule {}
