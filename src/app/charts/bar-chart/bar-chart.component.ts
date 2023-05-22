import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() chartVal: any[] = [];
  @Input() chartName: any;

  constructor() { }

  ngOnInit(): void {
    console.log("chartVal", this.chartVal);
    //update the chart data
    let datasets: any = [
      { data: [], label: this.chartName, borderColor: '#36A2EB', backgroundColor: '#000000', hoverBackgroundColor: "#9BD0F5" },
    ]
    let labels: any = []
    this.chartVal.forEach((element: any) => {
      labels.push(element.month);
      datasets[0]?.data.push(element.count);
    })
    this.updateChartData(labels, datasets);
  }


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    // events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
      },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public updateChartData(labels: any, datasets: any): void {
    this.barChartData.labels = labels;
    this.barChartData.datasets = datasets;

    this.chart?.update();
  }

}
