import { Bar } from "react-chartjs-2";
import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Grafico de Dimenciones',
    },
  },
};





export function BarCh({ labels,data }) {

  const dates = {
    labels ,
    datasets: [
      {
        label: "Kilometros",
        data,
        backgroundColor: "rgba(233, 49, 25, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={dates} />;
}


