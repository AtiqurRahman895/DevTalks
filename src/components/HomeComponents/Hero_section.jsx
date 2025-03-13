import React from 'react';
import hero_img from '../../assets/hero-img.jpg'

const Hero_section = () => {


    return (
        <section className="pt-16">
            <div className="container space-y-10">
                <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3 justify-between items-start">
                    <div className='lg:w-7/12'>
                        <h1 className="">
                            Join Our Vibrant Developer Community
                        </h1>
                    </div>
                    <div className='lg:w-5/12 space-y-6 mt-3'>
                        <h5 className="">
                            Connect with developers worldwide to share knowledge, solve challenges, and grow together in a collaborative space.
                        </h5>
                        <div className="flex gap-4">
                            <button className="primaryButton">Join</button>
                            <button className="outlineButton">Learn more</button>
                        </div>
                    </div>
                </div>

                <div className="lg:h-[600px] md:h-[400px] sm:[400px] ">
                    <img
                        src={hero_img}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Developer Community"
                    />
                </div>
            </div>
        </section>

    );
};

export default Hero_section;