import React from 'react'
import SectionBanner from '../CommonComponents/SectionBanner'
import AboutUsHighlight from './AboutUsHighlight/AboutUsHighlight'
import AboutUsSolutionCenter from './AboutUsSolutionCenter/AboutUsSolutionCenter'
import AboutUsProduct from './AboutUsProduct/AboutUsProduct'
import AboutUsBrand from './AboutUsBrand/AboutUsBrand'
import AboutUsCreator from './AboutUsCreator/AboutUsCreator'
import Join_developer from '../HomeComponents/Join_developer'
import PageTitle from '../CommonComponents/PageTitle'

export default function About() {
  return (
    <div className='container'>
        <PageTitle title="About Us" />
      <SectionBanner title={"About Us"} />
      
      <AboutUsHighlight />
      <AboutUsSolutionCenter />
      <AboutUsProduct />
      <AboutUsBrand />
      <AboutUsCreator />
      <Join_developer/>

    </div>
  )
}
