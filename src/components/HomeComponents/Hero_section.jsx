import React from 'react';
import hero_img from '../../assets/hero-img.jpg'

const Hero_section = () => {


    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-start py-20">
                <div>
                    <h2 className="text-4xl md:text-6xl pb-5 lg:pb-0">
                        Join Our Vibrant Developer Community Today
                    </h2>
                </div>
                <div>
                    <p className="text-lg">
                        Welcome to a thriving platform where developers unite to share knowledge
                        and solve challenges together. Join us in fostering collaboration and
                        innovation in the world of programming.
                    </p>
                    <div className="py-4 flex gap-4">
                        <button className="bg-custom-primary px-6 py-2">Join</button>
                        <button className="border px-6 py-2">Learn more</button>
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

    );
};

export default Hero_section;