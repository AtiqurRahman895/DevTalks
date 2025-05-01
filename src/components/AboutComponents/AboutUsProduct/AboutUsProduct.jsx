import React from 'react'
import ProductCard from './ProductCard';
import { FaLightbulb, FaMedal, FaGlobe, FaBook } from "react-icons/fa"; 

const AboutUsProduct = () => {

    const cards = [
        {
          subheading: "Solve",
          title: "Get Answers to Your Questions",
          icon: <FaLightbulb style={{ color: "white" }} /> 
        },
        {
          subheading: "Earn Badges",
          title: "Earn Badges for Your Expertise",
          icon: <FaMedal style={{ color: "white" }} /> 
        },
        {
          subheading: "Collaborate",
          title: "Collaborate with Developers Worldwide",
          icon: <FaGlobe style={{ color: "white" }} /> 
        },
        {
          subheading: "Learn",
          title: "Access Exclusive Learning Resources",
          icon: <FaBook style={{ color: "white" }} />
        }
      ];
      
    
      
  return (
    <section className="">
      <div className='container space-y-8'>
          {/* title */}
          <h3 className='text-center'><strong className='text-custom-primary'>Empowering</strong> Developers Every Day</h3>

          {/* cards */}
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
              {cards.map((card,index)=><ProductCard key={index} card={card} />)}
          </div>
      </div>
    </section>
  )
}

export default AboutUsProduct
