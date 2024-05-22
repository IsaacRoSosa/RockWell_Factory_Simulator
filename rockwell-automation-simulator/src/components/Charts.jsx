// components/Charts.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const SatisfactionChart = () => {
  const data = {
    labels: ['Satisfied', 'Unsatisfied'],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

const ClientsContactedChart = () => {
  const data = {
    labels: ['Played', 'Contacted'],
    datasets: [
      {
        data: [145, 140],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export { SatisfactionChart, ClientsContactedChart };
