import React, {useState, useEffect} from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './chart.css';

defaults.global.maintainAspectRatio = false


const Grafico = () => {
  const [chartData, setChartData] = useState({});


  const chart = () => {
    setChartData({
      labels: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Nov',
        'Dez',
      ],
      datasets: [
        {
          label: 'Entradas',
          data: [100, 500, 300, 600, 400, 600, 200, 400, 500, 300, 150],
          backgroundColor: ['rgba(0, 190, 62, 0.2)'],
          borderColor: ['rgba(0, 190, 62, 0.4)'],
          borderWidth: 3,
        },
        {
          label: 'Saida',
          data: [100, 300, 200, 500, 300, 700, 100, 500, 300, 400, 100],
          backgroundColor: ['rgba(412, 90, 62, 0.2)'],
          borderColor: ['rgba(412, 90, 62, 0.4)'],
          borderWidth: 3,
        },
      ],
    });
  };

  useEffect(() => {
    chart()
  }, [])

  const options = {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 30,
        bottom: 10,
      },
    },
    elements: {
      point: {
        radius: 3,
      },
    },
    legend: { display: false },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            autoskip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          maxBarThicness: 500,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return(
    <div className="canvas-container">
    <Line data={chartData} options={options} />
  </div>
  )
}

export default Grafico;
