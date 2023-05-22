import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerLoginPage } from './manager-login.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerLoginPageRoutingModule {}
