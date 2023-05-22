import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() chartVal : any[] = [];
  @Input() chartName : any;

  constructor() { }

  ngOnInit(): void {
    console.log("chartVal", this.chartVal);
    //update the chart data
    let datasets: any = [
      {data: [], backgroundColor:["#9ad0f5", "#ffce56", "#fd9fb3"], hoverBackgroundColor:["#9ad0f5", "#ffce56", "#fd9fb3"], hoverBorderColor:["#9ad0f5", "#ffce56", "#fd9fb3"]},
    ]
    let labels: any = []
    this.chartVal.forEach( (element:any) => {
      labels.push(element.productType[0]?.title);
      datasets[0]?.data.push(element.count);
    })
    this.updateChartData(labels, datasets);
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public updateChartData(labels: any, datasets: any): void {
    this.doughnutChartData.labels = labels;
    this.doughnutChartData.datasets = datasets;

    // this.chart?.update();
  }
}
