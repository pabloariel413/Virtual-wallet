import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart-expenses',
  templateUrl: './chart-expenses.component.html',
  styleUrls: ['./chart-expenses.component.css']
})
export class ChartExpensesComponent implements OnInit {

  public chart:Chart

  ngOnInit(): void {

    const data = {
      labels: ['1º', '5', '10',
      '15', '20', '25', '30'],
      datasets: [{
        label: 'Gastos del mes',
        data: [30000, 30000, 85000, 20000, 56000, 5500, 400],
        fill: true,
        backgroundColor: '#223452',
        borderColor: '#223452',
        tension: 0.1
      }]
    };
    
    this.chart = new Chart("chart-expense", {
    type: 'line',
    data
    })
  }

}