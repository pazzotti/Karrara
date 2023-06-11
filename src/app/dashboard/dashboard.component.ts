import { Component } from '@angular/core';


@Component({
  selector: 'app-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
              [datasets]="barChartData"
              [labels]="barChartLabels"
              [options]="barChartOptions"
              [legend]="barChartLegend"
              [plugins]="barChartPlugins"
      ></canvas>
    </div>
  `
})
export class DashboardComponent {

  barChartOptions = {
    responsive: true
  };
  barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
}
