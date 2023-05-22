import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaiterLoginPageRoutingModule } from './waiter-login-routing.module';

import { WaiterLoginPage } from './waiter-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaiterLoginPageRoutingModule
  ],
  declarations: [WaiterLoginPage]
})
export class WaiterLoginPageModule {}
