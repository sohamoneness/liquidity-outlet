import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-payment-from-liquidity',
  templateUrl: './payment-from-liquidity.page.html',
  styleUrls: ['./payment-from-liquidity.page.scss'],
})
export class PaymentFromLiquidityPage implements OnInit {
  userDetails: any;
  allPayments: any = [];
  totalAmount = 0;
  constructor(private _helper: HelperService, private _api: ApiService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');

  }

  ionViewWillEnter() {
    this.getPaymentData();
  }

  getPaymentData() {
    this._helper.startLoading();
    this._api.paymentFromLiqudity(this.userDetails.id).subscribe((res: any) => {
      console.log(res);
      if (res.status == 1) {
        this.allPayments = res.outlet_transactions;
        this.allPayments.forEach((el: any) => {
          this.totalAmount += parseInt(el.amount)
        })
        console.log('totalAmount', this.totalAmount);
        this._helper.dismissLoader()
      } else {
        this._helper.dismissLoader()
      }
    })
  }

}
