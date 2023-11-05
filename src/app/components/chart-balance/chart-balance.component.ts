import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-balance',
  templateUrl: './chart-balance.component.html',
  styleUrls: ['./chart-balance.component.css']
})
export class ChartBalanceComponent implements OnInit{
  
  public chart:Chart
  
  ngOnInit(): void {
    const data = {
    datasets: [{
      label: 'Balance total del año',
      grouped: true,
      borderWidth: 1
    }]
    };
    
    this.chart = new Chart("chart-balance", {
      type: 'bar',
      data: {
       labels: ['1º', '5', '10',
       '15', '20', '25', '30'],
        datasets: [{
        label: 'Ganancias',
        backgroundColor: '#FCC03E',
      data: [150000, 200000, 250000, 300450, 500000, 850005, 979000],
    }, {
      label: 'Gastos',
      backgroundColor: '#F6A222',
      data: [147000, 200001, 200000, 250000, 560000, 550000, 226900],
    }]
    }
});
  }
}
