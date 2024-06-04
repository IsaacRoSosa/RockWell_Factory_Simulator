import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale);

const SatisfactionChart = ({ satisfactionPercentage }) => {
  const data = {
    labels: ['Satisfied', 'Unsatisfied'],
    datasets: [
      {
        data: [satisfactionPercentage, 100 - satisfactionPercentage],
        borderWidth: 0,
        backgroundColor: ['#F5EFD9', '#22234B'],
        hoverBackgroundColor: ['#F5EFD9', '#22234B'],
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

const ClientsContactedChart = ({ clientsContactedPercentage }) => {
  const data = {
    labels: ['Contacted', 'Not Contacted'],
    datasets: [
      {
        data: [clientsContactedPercentage, 100 - clientsContactedPercentage],
        backgroundColor: ['#4BC0C0', '#FF9F40'],
        hoverBackgroundColor: ['#4BC0C0', '#FF9F40'],
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


const AveragePlayTimeChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Average Play Time',
        data: [65, 59, 80, 81, 56, 55],
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
      padding: 10,
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
