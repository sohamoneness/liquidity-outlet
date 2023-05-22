import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

import { ApiService } from '../../service/api.service';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-waiter-order-management',
  templateUrl: './waiter-order-management.page.html',
  styleUrls: ['./waiter-order-management.page.scss'],
})
export class WaiterOrderManagementPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private _api: ApiService, private _helper: HelperService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  // Method call to scan qr code of order
  scanOrder() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      //formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      formats: 'QR_CODE',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(qrCodeData => {

      console.log('Barcode data', qrCodeData);
      if (qrCodeData.cancelled == false) {
        this._helper.startLoading()

        this._api.getOrderDetails(qrCodeData.text).subscribe((res: any) => {
          if (res.status == "1") {
            let orderId = res.order.id
            this._helper.dismissLoader();
            // this._helper.alertToast('You get reward successfully.')
            this.navCtrl.navigateForward('/waiter_order_detials/' + orderId)
          } else {
            this._helper.dismissLoader();
            this._helper.alertToast(res.resp)
          }
        }, (err: any) => {
          this._helper.dismissLoader();
          this._helper.alertToast('Something went wrong. Please try again')
        })
      }

    }).catch(err => {
      console.log('Error', err);
    });
  }


}
