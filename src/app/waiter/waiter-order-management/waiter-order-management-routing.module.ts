import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterOrderManagementPage } from './waiter-order-management.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterOrderManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterOrderManagementPageRoutingModule {}
