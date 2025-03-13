import React from 'react';
import { FaStar } from 'react-icons/fa';
import developer from '../../assets/developer.jpg';

const Developer_Rating = () => {
    return (
        <div>
            <div className="bg-[#0d1b2a] text-white py-16 px-6 md:px-16 rounded-lg text-center">
               
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="w-6 h-6 text-white" />
                    ))}
                </div>

                
                <p className="text-lg md:text-xl font-light italic max-w-2xl mx-auto">
                    "This forum has transformed my coding journey. The support and
                    knowledge shared here are invaluable!"
                </p>

                
                <div className="mt-6 flex justify-center items-center gap-4">
                    
                    <img
                        src={developer}
                        alt="Alex Johnson"
                        className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="text-left">
                        <h3 className="text-sm font-semibold">Alex Johnson</h3>
                        <p className="text-xs text-gray-400">Developer, TechCorp</p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Developer_Rating;