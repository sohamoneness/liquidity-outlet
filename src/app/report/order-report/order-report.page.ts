import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';
import * as moment from 'moment';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.page.html',
  styleUrls: ['./order-report.page.scss'],
})
export class OrderReportPage implements OnInit {
  userDetails: any;
  startDate: any = '';
  endDate: any = '';
  today: any = '';
  minDate: any = '';
  total_order_count: any = 0;
  total_order_value: any = 0;
  order_datas: any = [];
  constructor(private _helper: HelperService, private _api: ApiService) { }

  ngOnInit() {
    this.today = moment(new Date()).format("yyyy-MM-DD");
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }

  //Method call to get date
  startDateSelect() {
    this.minDate = this.startDate;
  }


  // Method call to get report by date
  getReport() {
    if (this.endDate && !this.startDate) {
      this._helper.alertToast("Please select start Date");
    } else if (this.startDate && !this.endDate) {
      this._helper.alertToast("Please select end Date");
    } else {
      let report = new FormData();
      report.append('shop_id', this.userDetails.id),
        report.append('start_date', this.startDate),
        report.append('end_date', this.endDate)
      this._helper.startLoading();
      this._api.reportOrderWise(report).subscribe((res: any) => {
        console.log(res);
        if (res.status == "1") {
          this.total_order_count = res.total_order_count;
          this.total_order_value = res.total_order_value;
          this.order_datas = res.order_datas;
          this._helper.dismissLoader();
        } else {
          this._helper.dismissLoader();
        }
      }, err => {
        this._helper.dismissLoader();
      })
    }
  }

  // Method call to clear data
  clearData() {
    this.startDate = '', this.endDate = '', this.total_order_count = 0;
    this.total_order_value = 0;
    this.order_datas = [];
  }

}
