import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { IonicModule } from '@ionic/angular';

import { OutletAccountPageRoutingModule } from './outlet-account-routing.module';

import { OutletAccountPage } from './outlet-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    OutletAccountPageRoutingModule
  ],
  declarations: [OutletAccountPage],
  providers: [Camera, FileTransfer]
})
export class OutletAccountPageModule { }
