import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-single-stock-add',
  templateUrl: './single-stock-add.page.html',
  styleUrls: ['./single-stock-add.page.scss'],
})
export class SingleStockAddPage implements OnInit {
  userDetails: any;
  stockList: any = [];
  productId: any = 0;
  count: any = 0
  constructor(private _helper: HelperService, private _api: ApiService, private navCtrl: NavController) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
    console.log(this.userDetails)
  }

  ionViewWillEnter() {
    this.getAllStock()
  }

  // Method call to show all product's stock
  getAllStock() {
    this._helper.startLoading();
    this._api.getproductStockList(this.userDetails.shop_id).subscribe((res: any) => {
      console.log(res);
      if (res.status == "1") this.stockList = res.products;
      this._helper.dismissLoader();
    })
  }

  // Method call to update stock 
  updateStock() {
    let product_id: any = [];
    //check if value is add or not
    if (this.count != 0) {
      const stockForm = new FormData();
      stockForm.append('shop_id', this.userDetails.shop_id),
        stockForm.append('product_id', this.productId),
        stockForm.append('count', this.count),
        this._api.updatesingleStock(stockForm).subscribe((res: any) => {
          console.log(res)
          if (res.status == '1') {
            this.navCtrl.back();
            this._helper.dismissLoader()
          } else {
            this._helper.dismissLoader()
          }
        })
    } else {
      this._helper.alertToast('Please update your stock')
    }
  }
}
