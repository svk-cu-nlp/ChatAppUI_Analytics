import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: Record<string, number>;
}

export default function DoughnutChart({ data }: DoughnutChartProps) {
  const chartData = {
    labels: Object.keys(data).map(key => 
      key.charAt(0).toUpperCase() + key.slice(1)
    ),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(236, 72, 153, 0.5)',
          'rgba(16, 185, 129, 0.5)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(236, 72, 153)',
          'rgb(16, 185, 129)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}