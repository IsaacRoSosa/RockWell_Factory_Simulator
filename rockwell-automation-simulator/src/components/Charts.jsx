// components/Charts.js
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale);

const SatisfactionChart = () => {
  const data = {
    labels: ['Satisfied', 'Unsatisfied'],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ['#F5EFD9', '#22234B'],
        hoverBackgroundColor: ['#F5EFD9', '#22234B'],
        borderWidth: 0,
      
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

const ClientsContactedChart = () => {
  const data = {
    labels: ['Played', 'Contacted'],
    datasets: [
      {
        data: [14, 5],
        backgroundColor: ['#F9077C', '#22234B'],
        hoverBackgroundColor: ['#F9077C', '#22234B'],
        borderWidth: 0,
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Play Time',
        data: [20, 10, 30, 40, 20, 30, 40, 30, 20, 30, 20, 40],
        borderColor: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Average',
        data: [10, 20, 15, 25, 20, 15, 25, 20, 15, 10, 20, 15],
        borderColor: '#00FFFF',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#1E1E1E', borderRadius: '10px', width:'100%', height:'90%' , display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h2 style={{ color: '#FFFFFF' }}>Average PlayTime</h2>
      <Line data={data} options={options} style={{width: '80%',height:'85%'}} />
    </div>
  );
};

export { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart };
