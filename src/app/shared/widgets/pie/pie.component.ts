import { Component, Input, OnInit } from '@angular/core';

import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  HighCharts = HighCharts;
  chartOptions!: {};
  @Input() data = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions =
    {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Random DATA'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting:{
        enabled: true
      },
      credits:{
        enabled: false
      },
      series: this.data
    };

    HC_exporting(HighCharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );

    }, 300);
  }
}
