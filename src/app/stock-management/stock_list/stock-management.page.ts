import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.page.html',
  styleUrls: ['./stock-management.page.scss'],
})
export class StockManagementPage implements OnInit {
  userDetails: any;
  stockList: any;

  constructor(private _api: ApiService, private _helper: HelperService) { }


  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }

  ionViewWillEnter() {
    this.getAllStock()
  }

  // Method call to show all stock of product
  getAllStock() {
    this._helper.startLoading();
    this._api.getproductStockList(this.userDetails.shop_id).subscribe((res: any) => {
      console.log(res);
      if (res.status == "1") this.stockList = res.products;
      this._helper.dismissLoader();
    })
  }

}
