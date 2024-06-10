import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale);

const SatisfactionChart = ({ satisfactionPlayers, dissatisfactionPlayers }) => {
  const data = {
    labels: ['Satisfied', 'Unsatisfied'],
    datasets: [
      {
        data: [satisfactionPlayers,dissatisfactionPlayers],
        borderWidth: 0,
        backgroundColor: ['#ff0000', '#FF9F40'],
        hoverBackgroundColor: ['#ff0000', '#FF9F40'],
      },
    ],
  };

  const options ={
    rotation: -110,
    circumference: 220,
    cutout: '90%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        
      },
    },layout: {
      padding: 0, 
    },
  };

  return <Doughnut data={data} options={options} style={{width: '70%', height: '70%', margin:'0', padding: '0'}} />;
};

const ClientsContactedChart = ({ contactedPlayers, notContactedPlayers }) => {
  const data = {
    labels: ['Contacted', 'Not Contacted'],
    datasets: [
      {
        data: [contactedPlayers, notContactedPlayers],
        backgroundColor: ['#ff0000', '#FF9F40'],
        hoverBackgroundColor: ['#ff0000', '#FF9F40'],
      },
    ],
  };
  const options = {
    rotation: -110,
    circumference: 220,
    cutout: '90%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        
      },
    },layout: {
      padding: 0, // Añade esta línea
    },
  };

  return <Doughnut data={data} options={options} style={{width: '70%', height: '70%', margin:'0', padding: '0'}} />;
};


const AveragePlayTimeChart = ({playDates, avgPlayTimes}) => {
  const data = {
    labels: playDates,
    datasets: [
      {
        label: 'Games played per day',
        data: avgPlayTimes,
        fill: false,
        backgroundColor: 'rgb(255, 0, 0)', // línea roja
        borderColor: 'rgb(255, 0, 0)', // línea roja
      },
    ],
  }; 

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Games',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgb(0, 0, 0)', // color del texto negro
        },
      },
    },
    layout: {
      padding: 0,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    interaction: {
      intersect: false,
    },
    backgroundColor: 'rgb(255, 255, 255, 0)', // fondo blanco
  };

  return <Line data={data} options={options} />;
};

export { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart };
