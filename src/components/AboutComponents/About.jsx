import React from 'react'
import SectionBanner from '../CommonComponents/SectionBanner'
import AboutUsHighlight from './AboutUsHighlight/AboutUsHighlight'
import AboutUsSolutionCenter from './AboutUsSolutionCenter/AboutUsSolutionCenter'
import AboutUsProduct from './AboutUsProduct/AboutUsProduct'
import AboutUsBrand from './AboutUsBrand/AboutUsBrand'
import AboutUsCreator from './AboutUsCreator/AboutUsCreator'

export default function About() {
  return (
    <div className='container'>
      <SectionBanner title={"About Us"} />
      
      <AboutUsHighlight />
      <AboutUsSolutionCenter />
      <AboutUsProduct />
      <AboutUsBrand />
      <AboutUsCreator />

    </div>
  )
}
