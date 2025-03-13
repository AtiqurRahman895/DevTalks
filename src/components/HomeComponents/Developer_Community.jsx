import React from 'react';
import img_1 from '../../assets/card-img-1.jpg'
import img_2 from '../../assets/card-img-2.jpg'
import img_3 from '../../assets/card-img-3.jpg'

const Developer_Community = () => {
    return (
        <div className="bg-black text-white py-20 px-6 md:px-20 rounded-lg container">
            <div className="text-center">
                <p className="text-sm uppercase tracking-wide">Connect</p>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    Empowering Developers Through Collaboration and Learning
                </h2>
                <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                    Join a vibrant community where you can ask questions and get answers from experienced developers.
                    Our platform fosters knowledge sharing and continuous learning.
                </p>
            </div>

            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="   rounded-lg text-center">
                    <img
                        src={img_1}
                        alt="Ask Questions"
                        className="rounded-lg w-full h-52 object-cover object-left-top"
                    />
                   <div className='p-6'>
                   <h3 className="text-xl font-semibold mt-4">Ask Questions and Get Expert Answers</h3>
                    <p className="text-gray-400 mt-2">
                        Post your queries and receive guidance from industry professionals.
                    </p>
                   </div>
                </div>

                <div className="   rounded-lg text-center">
                    <img
                        src={img_2}
                        alt="Ask Questions"
                        className="rounded-lg w-full h-52 object-cover object-center"
                    />
                   <div className='p-6'>
                   <h3 className="text-xl font-semibold mt-4">Ask Questions and Get Expert Answers</h3>
                    <p className="text-gray-400 mt-2">
                        Post your queries and receive guidance from industry professionals.
                    </p>
                   </div>
                </div>

                <div className="   rounded-lg text-center">
                    <img
                        src={img_3}
                        alt="Ask Questions"
                        className="rounded-lg w-full h-52 object-cover object-center"
                    />
                   <div className='p-6'>
                   <h3 className="text-xl font-semibold mt-4">Ask Questions and Get Expert Answers</h3>
                    <p className="text-gray-400 mt-2">
                        Post your queries and receive guidance from industry professionals.
                    </p>
                   </div>
                </div>

              
                 

               
                
            </div>

          
            <div className="mt-10 flex justify-center gap-6">
                <button className="bg-custom-primary text-white px-6 py-2   font-medium">Join</button>
                <button className="border border-white px-6 py-2   font-medium">Learn More</button>
            </div>
        </div>
    );
};

export default Developer_Community;