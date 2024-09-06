import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['User Satisfaction', 'Learning Curve', 'Experience'],
  datasets: [
    {
      label: 'Traditional Tools',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90],
    },
    {
      label: 'metRology',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      data: [80, 85, 70],
    },
  ],
};

export default function RadarChart() {
  return <Radar data={data} />;
}