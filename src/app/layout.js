// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Metrology Research Presentation',
  description: 'A research presentation with visualizations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
