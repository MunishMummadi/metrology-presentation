// Dual-Axis bar graph for quantitative approach
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Precision', Traditional: 70, metRology: 90 },
  { name: 'Computation Time', Traditional: 80, metRology: 60 },
  { name: 'Data Type Support', Traditional: 50, metRology: 80 },
];

export default function QuantitativeComparison() {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Traditional" fill="#8884d8" />
      <Bar dataKey="metRology" fill="#82ca9d" />
    </BarChart>
  );
}
