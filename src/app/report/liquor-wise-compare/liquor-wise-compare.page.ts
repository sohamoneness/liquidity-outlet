import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Chart, registerables } from 'chart.js';

import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-liquor-wise-compare',
  templateUrl: './liquor-wise-compare.page.html',
  styleUrls: ['./liquor-wise-compare.page.scss'],
})
export class LiquorWiseComparePage implements OnInit {
  userDetails: any;
  startDate: any = '';
  endDate: any = '';
  today: any = '';
  minDate: any = '';
  liquorList: any = [];
  barChart: any;
  @ViewChild('barCanvas') private barCanvas!: ElementRef;

  constructor(private _helper: HelperService, private _api: ApiService) {
    this.today = moment(new Date()).format("yyyy-MM-DD");
  }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }


  //Method call to get date
  startDateSelect() {
    this.minDate = this.startDate;
  }


  // Method call to get report by category wise compare
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
      this._api.reportLiquorWiseCompare(report).subscribe((res: any) => {
        console.log(res);
        if (res.status == "1") {
          this.liquorList = res.categories;
          let label: any = [];
          let values: any = [];
          this.liquorList.forEach((element: any) => {
            label.push(element.name);
            values.push(element.total_price);
          });
          this.barChartMethod(label, values)
          this._helper.dismissLoader();
        } else {
          this._helper.dismissLoader();
        }
      }, err => {
        this._helper.alertToast('Somthing went wrong. Please try again');
        this._helper.dismissLoader();
      })
    }
  }


  // Method call to clear data
  clearData() {
    this.startDate = '';
    this.endDate = '';
    this.liquorList = [];
    this.barChart.destroy();
  }

  // Method call to show data in graph chart

  barChartMethod(label: any, values: any) {
    //check if grpah is present then destroy
    if (this.barChart) {
      this.barChart.destroy();
    }


    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: 'Liquor wise Compare',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'x'
      }
    });
  }

}
