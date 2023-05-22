import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLedgerPageRoutingModule } from './view-ledger-routing.module';

import { ViewLedgerPage } from './view-ledger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLedgerPageRoutingModule
  ],
  declarations: [ViewLedgerPage]
})
export class ViewLedgerPageModule {}
