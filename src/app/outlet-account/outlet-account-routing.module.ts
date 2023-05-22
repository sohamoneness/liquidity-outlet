import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletAccountPage } from './outlet-account.page';

const routes: Routes = [
  {
    path: '',
    component: OutletAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletAccountPageRoutingModule {}
