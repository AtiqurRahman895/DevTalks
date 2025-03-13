import React from 'react';
import { FaStar } from 'react-icons/fa';
import developer from '../../assets/developer.jpg';

const Developer_Rating = () => {
    return (
        <section className='bg-custom-primary py-16'>
            <div className="container text-center space-y-4">
               
                <div className="flex justify-center items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-2xl" />
                    ))}
                </div>

                
                <h5 className="font-light italic max-w-2xl mx-auto">
                    "This forum has transformed my coding journey. The support and
                    knowledge shared here are invaluable!"
                </h5>

                
                <div className="flex justify-center items-center gap-4">
                    
                    <img
                        src={developer}
                        alt="Alex Johnson"
                        className="w-12 aspect-square rounded-full border-2 border-white"
                    />
                    <div className="text-left">
                        <h3 className="text-sm font-semibold">Alex Johnson</h3>
                        <p className="text-xs text-gray-400">Developer, TechCorp</p>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Developer_Rating;