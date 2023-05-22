import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterLoginPage } from './waiter-login.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterLoginPageRoutingModule {}
