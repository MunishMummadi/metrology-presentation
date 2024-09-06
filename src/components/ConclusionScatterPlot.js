// BeliefScatterPlot component for conclusion
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { belief: 0.1, uncertainty: 20 },
  { belief: 0.2, uncertainty: 15 },
  { belief: 0.5, uncertainty: 10 },
  { belief: 0.8, uncertainty: 5 },
  { belief: 1.0, uncertainty: 2 },
];

export default function ConclusionScatterPlot() {
  return (
    <ScatterChart width={500} height={300} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
      <CartesianGrid />
      <XAxis dataKey="belief" name="Degree of Belief" />
      <YAxis dataKey="uncertainty" name="Uncertainty" />
      <Tooltip />
      <Legend />
      <Scatter name="Belief" data={data} fill="#8884d8" />
    </ScatterChart>
  );
}
