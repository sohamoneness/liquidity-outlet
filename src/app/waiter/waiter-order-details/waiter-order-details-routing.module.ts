import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterOrderDetailsPage } from './waiter-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterOrderDetailsPageRoutingModule {}
