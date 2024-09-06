// UncertaintyTypes component for flowchart-like representation
import React from 'react';

export default function ResearchFlowchart() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Research Problem and Objective</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div>
          <h4>Research Problem</h4>
          <p>Analyzing measurement uncertainty in statistical methods.</p>
        </div>
        <div>
          <h4>Objective</h4>
          <p>Compare traditional methods with metRology.</p>
        </div>
      </div>
    </div>
  );
}
