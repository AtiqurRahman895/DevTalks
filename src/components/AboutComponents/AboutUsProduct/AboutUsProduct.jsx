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
          subheading: "Earn",
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
    <div className='my-24 px-10'>
        {/* title */}
        <h3 className='text-center'><strong className='text-custom-primary'>Empowering</strong> Developers Every Day</h3>

        {/* cards */}
        <div className='grid grid-cols-4 gap-12 container mx-auto'>
            {cards.map(card=><ProductCard card={card} />)}
        </div>
    </div>
  )
}

export default AboutUsProduct
