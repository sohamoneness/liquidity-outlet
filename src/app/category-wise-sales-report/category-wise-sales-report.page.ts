import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-category-wise-sales-report',
  templateUrl: './category-wise-sales-report.page.html',
  styleUrls: ['./category-wise-sales-report.page.scss'],
})
export class CategoryWiseSalesReportPage implements OnInit {
  categoryList: any = [];
  subcategoryList: any = [];
  constructor(private _api: ApiService, private _helper: HelperService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getCategory();
  }
  // Method call to get category list
  getCategory() {
    this._helper.startLoading();
    this._api.getCategoryList().subscribe((res: any) => {
      if (res.status == '1') this.categoryList = res?.categories;
      this._helper.dismissLoader();
    }, err => this._helper.dismissLoader())
  }

  // Method call to get sub category list after select category
  getSubCategory(event: any) {
    this._api.getSubCategoryList(event).subscribe((ressubCat: any) => {
      if (ressubCat.status == '1') this.subcategoryList = ressubCat?.sub_categories;
      this._helper.dismissLoader();
    })
  }

}
