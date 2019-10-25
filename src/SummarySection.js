import React from 'react'
import Summary from './Summary'
import Total from './Total'

export default function SummarySection(props) {
  const { selected } = props;

  const summary = Object.keys(selected)
    .map(key =>
      <Summary
        key={key}
        featureTitle={key}
        selected={selected} /> 
    );

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total selected={selected} />
    </section>
  );
}