import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Traditional Methods', Accuracy: 80, Complexity: 60 },
  { name: 'metRology', Accuracy: 90, Complexity: 40 },
];

export default function ParadigmComparison() {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Accuracy" fill="#8884d8" />
      <Bar dataKey="Complexity" fill="#82ca9d" />
    </BarChart>
  );
}
