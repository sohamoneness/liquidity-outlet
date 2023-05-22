import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  userDetails: any;
  orderId: any = 0;
  order: any = {};
  productList: any = [];
  constructor(private _route: ActivatedRoute, private _helper: HelperService, private _api: ApiService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');

  }

  ionViewWillEnter() {
    this.orderId = this._route.snapshot.paramMap.get('order_id')
    this.orderDetails();
  }

  orderDetails() {
    this._helper.startLoading();
    this._api.getOrderDetails(this.orderId).subscribe((res: any) => {
      if (res.status == '1') {
        this.order = res.order;
        this.productList = res.order_products;
        console.table(this.productList)
        this._helper.dismissLoader()
      } else {
        this._helper.dismissLoader()
      }
    }, err => {
      this._helper.dismissLoader();
      this._helper.alertToast('Something went wrong. Please try again')
    })
  }

}



