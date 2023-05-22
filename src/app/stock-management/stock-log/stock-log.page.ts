import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-stock-log',
  templateUrl: './stock-log.page.html',
  styleUrls: ['./stock-log.page.scss'],
})
export class StockLogPage implements OnInit {
  productId: any = 0;
  stockDetails: any = [];
  products: any = {}
  constructor(private activatedRoute: ActivatedRoute, private _api: ApiService, private _helper: HelperService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getStockDetails();
  }

  // Method call to get product's stock details
  getStockDetails() {
    this._helper.startLoading();
    this._api.getProductStockLog(this.productId).subscribe((res: any) => {
      console.log(res);
      if (res.status == '1') {
        this.stockDetails = res.stock_logs;
        this.products = res.product;
        this.stockDetails.forEach((el: any) => {
          let data = el.created_at.split(' ')
          el.date = data[0];
          el.time = data[1];
        })
        this._helper.dismissLoader();
      } else {
        this._helper.dismissLoader();
      }
    })
  }

}
