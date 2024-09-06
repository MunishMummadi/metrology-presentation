'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Accuracy', contact: 85, optical: 95 },
  { name: 'Speed', contact: 60, optical: 90 },
  { name: 'Versatility', contact: 70, optical: 85 },
  { name: 'Non-destructive', contact: 65, optical: 100 },
];

export default function MethodologySlide() {
  return (
    <div className="slide bg-white">
      <h2>Methodology</h2>
      <div className="text-left mb-8 max-w-2xl">
        <p>Comparative analysis of contact (traditional) and optical (modern) metrology methods:</p>
        <ul className="ml-6 mt-2">
          <li>Sample size: 100 precision-manufactured components</li>
          <li>Materials: Aluminum, steel, titanium, and polymers</li>
          <li>Measurements: Dimensions, surface roughness, and geometric tolerances</li>
        </ul>
      </div>
      <div className="chart-container">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="contact" fill="#8884d8" name="Contact Metrology" />
            <Bar dataKey="optical" fill="#82ca9d" name="Optical Metrology" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}