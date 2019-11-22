import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-lancamentos-report',
  templateUrl: './lancamentos-report.component.html',
  styleUrls: ['./lancamentos-report.component.css']
})
export class LancamentosReportComponent implements OnInit {

  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;

  data1 = [];

  constructor() { }

  ngOnInit() {

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Comparação entre vendas e recebimentos'
        },
      },
      data: {
        labels: ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
        datasets: [
          {
            type: 'bar',
            label: 'vendas',
            data: [10.000, 8.000, 7.000, 8.000, 15.000, 9.000, 16.000, 14.000],
            backgroundColor: 'rgba(147,219,112,0.4)',
            borderColor: 'rgba(147,219,112,0.4)',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          {
            type: 'bar',
            label: 'recebimentos',
            data: [11.000, 6.000, 9.000, 17.000, 12.000, 9.000, 16.000, 14.000].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    new Chart('bubble', {
      type: 'bubble',
      options: options,
      data: {
        datasets: [
          {
          backgroundColor: 'rgba(255,0,0,0.4)',
          label: 'Name 1',
          data: [{
            x: 50,
            y: 60,
            v: 200
            },{
              x: 50,
              y: 80,
              v: 700
            },{
              x: 80,
              y: 60,
              v: 100
            },{
            x: 60,
            y: 60,
            v: 500
            },{
            x: 90,
            y: 80,
            v: 800
            }]
          },{
            backgroundColor: 'rgba(0,255,0,0.4)',
            label: 'Name 2',
            data: [{
              x: 60,
              y: 20,
              v: 200
            },{
              x: 55,
              y: 70,
              v: 800
            }, {
              x: 80,
              y: 30,
              v: 500
            },{
              x: 70,
              y: 40,
              v: 800
            }]}]
      }
    })

    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15],
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })

    this.pie = new Chart('pie',{
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15].reverse(),
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })

  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex){
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}

}
