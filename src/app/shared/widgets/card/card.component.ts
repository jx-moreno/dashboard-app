import { Component, Input, OnInit } from '@angular/core';

import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  // label: string = '';
  // total: number = 0;
  // percentage: number = 0

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  @Input() data: any = [];


  HighCharts = HighCharts;
  chartOptions!: {};

  
  constructor(){}

  ngOnInit(): void {
    this.chartOptions = 
      {
        chart: {
            type: 'area',
            backgroundColor: null,
            borderWidth: 0,
            margin: [2, 2, 2, 2],
            height: 70,

        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            shared: true,
            outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting:{
          enabled: false
        },
        xAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        yAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
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
