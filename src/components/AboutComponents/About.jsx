import React from 'react'
import SectionBanner from '../CommonComponents/SectionBanner'
import AboutUsHighlight from './AboutUsHighlight/AboutUsHighlight'
import AboutUsSolutionCenter from './AboutUsSolutionCenter/AboutUsSolutionCenter'

export default function About() {
  return (
    <div className='container'>
      <SectionBanner title={"About Us"} />
      
      <AboutUsHighlight />

      <AboutUsSolutionCenter />

    </div>
  )
}
