import React from 'react'
import FEATURES from './FEATURES'
import FeatureItem from './FeatureItem'

export default function FormSection(props) {
  const features = Object.keys(FEATURES)
    .map( key => 
      <FeatureItem 
        key={key}
        features={FEATURES}
        selected={props.selected}
        featureTitle={key}
        handleUpdate={props.handleUpdate} />
    ); 

  return (
    <section className="main__form">
      <h2>Customize your Laptop</h2>
      {features}
    </section>
  )
}