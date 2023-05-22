import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.page.html',
  styleUrls: ['./order-management.page.scss'],
})
export class OrderManagementPage implements OnInit {
  userDetails: any;
  orderId = '';
  customer_name = '';
  customer_ph = '';
  date: any = '';
  orders: any = [];
  constructor(private _helper: HelperService, private _api: ApiService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }

  ionViewWillEnter() {
    this.getOrderList();
  }

  // Method call to get order list
  getOrderList() {
    this.callSerachApi()
  }

  // Method call to serach order
  searchOrder() {
    this.callSerachApi()
  }

  // Method call to api for get order list
  callSerachApi() {
    this._helper.autoLoading();
    let mainData = new FormData();
    mainData.append('shop_id', this.userDetails.id)
    mainData.append('order_id', this.orderId)
    mainData.append('customer_name', this.customer_name)
    mainData.append('customer_phone', this.customer_ph)
    mainData.append('created_at', this.date)
    this._api.getcustomerOrderList(mainData).subscribe((res: any) => {
      if (res.status == '1') {
        this.orders = res.orders;
        this.orders.forEach((element: any) => {
          element.order_date = moment(element.order_date).format("Do MMM YYYY");
        });
        this._helper.dismissLoader()
      } else {
        this._helper.dismissLoader()
      }
    }, err => {
      this._helper.dismissLoader();
      this._helper.alertToast('Something went wrong. Please try again')
    })
  }

  //Method call to clear search data
  clearData() {
    this.orderId = '';
    this.customer_name = '';
    this.customer_ph = '';
    this.date = '';
    this.callSerachApi()
  }

}


