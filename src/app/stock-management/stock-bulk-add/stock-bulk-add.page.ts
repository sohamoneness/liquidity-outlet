import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-stock-bulk-add',
  templateUrl: './stock-bulk-add.page.html',
  styleUrls: ['./stock-bulk-add.page.scss'],
})
export class StockBulkAddPage implements OnInit {
  userDetails: any;
  productSearch = '';
  stockList: any = [];
  filterArray: any = [];
  stockAdd: any = [];
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
      this.filterArray = [...this.stockList];
      this.stockList.forEach((element: any) => {
        this.stockAdd.push({ key: element.id })
      });
      this._helper.dismissLoader();
    })
  }

  // Method call to search data from stock list
  search(event: any) {
    console.log('event', event)
    let query = event.detail.value.toLowerCase()
    if (!query) { // revert back to the original array if no query
      this.stockList = [...this.filterArray];
    } else { // filter array by query
      this.stockList = this.filterArray.filter((list: any) => {
        return (list.name.toLowerCase().includes(query));
      })
    }
  }

  // Method call to update stock 
  updateStock() {
    let product_id: any = [];
    let count: any = [];
    //check if value is add or not
    if (this.stockAdd.some((el: any) => el.value)) {
      console.log('stock', this.stockAdd)
      this._helper.startLoading();
      this.stockAdd.forEach((el: any) => {
        if (el.value) {
          product_id.push(el.key);
          count.push(el.value);
        }
      })
      console.log('product_id', product_id)
      const stockForm = new FormData();
      stockForm.append('shop_id', this.userDetails.shop_id),
        stockForm.append('product_ids', product_id.join("*")),
        stockForm.append('counts', count.join("*")),
        this._api.updateBulkStock(stockForm).subscribe((res: any) => {
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
