import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart({data}) {

    const dates={
        labels:['SI','NO'],
  datasets: [
    {
      label: 'Es Peligroso',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
    
      ],
      borderWidth: 1,
    },
  ],

    };
    console.log(data);
  return <Pie data={dates}/>;
}


