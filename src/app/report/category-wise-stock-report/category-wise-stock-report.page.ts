import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-category-wise-stock-report',
  templateUrl: './category-wise-stock-report.page.html',
  styleUrls: ['./category-wise-stock-report.page.scss'],
})
export class CategoryWiseStockReportPage implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  // @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  chartData: any = [
    { month: 'jan', count: 3 },
    { month: 'feb', count: 7 },
    { month: 'mar', count: 0 },
    { month: 'apr', count: 0 },
    { month: 'may', count: 0 },
    { month: 'jun', count: 0 },
    { month: 'jul', count: 0 },
    { month: 'aug', count: 0 },
    { month: 'sep', count: 0 },
    { month: 'oct', count: 0 },
    { month: 'nov', count: 0 },
    { month: 'dec', count: 0 }];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.barChartMethod();
    // this.doughnutChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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
      // options: {
      //   legend: {
      //     display: false
      //   },
      //   scales: {
      //     xAxes: [
      //       {
      //         ticks: {
      //           display: true
      //          }
      //       }
      //     ],
      //     y: [
      //       {
      //         ticks: {
      //           display: true
      //          }
      //       }
      //     ]
      //    }
      // }

    })
  }



  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }


}
