import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { saveSvgAsPng } from 'save-svg-as-png';

// Data for the chart
const data = [
  { name: 'Traditional Methods', Accuracy: 80, Complexity: 60 },
  { name: 'metRology', Accuracy: 90, Complexity: 40 },
];

export default function ResearchObjectiveComparison() {
  const handleDownload = () => {
    const svgElement = document.querySelector('svg');
    if (svgElement) {
      saveSvgAsPng(svgElement, 'comparison_chart.svg');
    }
  };

  return (
    <div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Accuracy" fill="#8884d8" />
        <Bar dataKey="Complexity" fill="#82ca9d" />
      </BarChart>
      <button onClick={handleDownload}>Download as SVG</button>
    </div>
  );
}