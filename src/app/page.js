"use client"

import React, { useState } from 'react';
import TitleSlide from '../components/TitleSlide';
import ResearchFlowchart from '../components/ResearchFlowchart';
import ResearchObjectiveComparison from '../components/ResearchObjectiveComparison';
import ParadigmComparison from '../components/ParadigmComparison';
import QuantitativeComparison from '../components/QuantitativeComparison';
import RadarChart from '../components/RadarChart';
import ConclusionScatterPlot from '../components/ConclusionScatterPlot';
import MethodologySlide from '../components/MethodologySlide';
import ResultsSlide from '../components/ResultsSlide';

const slides = [
  { id: 1, component: <TitleSlide /> },
  { id: 2, component: <ResearchFlowchart /> },
  { id: 3, component: <ResearchObjectiveComparison /> },
  { id: 4, component: <ParadigmComparison /> },
  { id: 5, component: <QuantitativeComparison /> },
  { id: 6, component: <RadarChart /> },
  { id: 7, component: <MethodologySlide /> },
  { id: 8, component: <ResultsSlide /> },
  { id: 9, component: <ConclusionScatterPlot /> },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slide-container">
      {/* Render the current slide */}
      {slides[currentSlide].component}

      <div className="slide-navigation">
        {/* Navigation Buttons */}
        <button onClick={prevSlide} disabled={currentSlide === 0}>
          Previous
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
