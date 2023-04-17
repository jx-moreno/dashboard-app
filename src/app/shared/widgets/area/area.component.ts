import { Component, Input, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions!: {};
  HighCharts = HighCharts;
  
  @Input() data: any = [];

  constructor(){}

  ngOnInit(): void {
    this.chartOptions = 
      {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Random DATA',
            align: 'left'
        },
        subtitle: {
            text: 'Demo ' ,
            align: 'left'
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
        },
        credits: {
          enabled: false
        },
        exporting:{
          enabled: true
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
