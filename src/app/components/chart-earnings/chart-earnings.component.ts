import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-earnings',
  templateUrl: './chart-earnings.component.html',
  styleUrls: ['./chart-earnings.component.css']
})
export class ChartEarningsComponent implements OnInit{
 
  public chart:Chart
  
  ngOnInit(): void {
    const data = {
      labels: ['1º', '5', '10',
    '15', '20', '25', '30'],
      datasets: [{
        label: 'Ganancias en el mes',
        data: [800000, 20000, 2000, 90000, 7000, 10000, 50000],
        fill: true,
        backgroundColor: '#FCC03E',
        borderColor: '#FCC03E',
        tension: 0.1
      }]
    };
    
    this.chart = new Chart("chart-earning", {
    type: 'line',
    data
    })
  }

}
