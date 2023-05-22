import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';
import * as moment from 'moment';
@Component({
  selector: 'app-date-wise-report',
  templateUrl: './date-wise-report.page.html',
  styleUrls: ['./date-wise-report.page.scss'],
})
export class DateWiseReportPage implements OnInit {
  userDetails: any;
  startDate: any = '';
  endDate: any = '';
  today: any = '';
  minDate: any = '';
  total_orders: any = 0;
  total_amount: any = 0;
  total_food_value: any = 0;
  total_liquor_value: any = 0;

  constructor(private _helper: HelperService, private _api: ApiService) {
    this.today = moment(new Date()).format("yyyy-MM-DD");
  }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }


  //Method call to get date
  startDateSelect() {
    console.log('date', this.startDate);
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
      this._api.reportDateWise(report).subscribe((res: any) => {
        console.log(res);
        if (res.status == "1") {
          this.total_amount = res.total_amount;
          this.total_food_value = res.total_food_value;
          this.total_liquor_value = res.total_liquor_value;
          this.total_orders = res.total_orders;
          this._helper.dismissLoader();
        } else {
          this._helper.dismissLoader();
        }
      })
    }
  }


  // Method call to clear data
  clearData() {
    this.startDate = '';
    this.endDate = '';
    this.total_amount = 0
    this.total_food_value = 0;
    this.total_liquor_value = 0;
    this.total_orders = 0;
  }

}
