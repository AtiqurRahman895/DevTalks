import React from 'react';
import developer_img from '../../assets/developer_support.jpg'
import { FaCube, FaCubes } from 'react-icons/fa';

const Developer_Community_support = () => {
    return (
        <section>
          <div className='container'>
            <div className="">
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-8 items-center">
                  
                  <div className='md:w-7/12 space-y-2'>
                    <h3>
                      Unlock Your Potential with Our Developer Community
                    </h3>
                    <h6>
                      Join a thriving space where developers support each other, explore diverse topics, and enhance their skills.
                    </h6>
                    
                    <div className="pt-6 flex justify-between items-start gap-4">
                      <div className="space-y-3">
                        <FaCube className="text-5xl" />
                        <div>
                          <h3 className="text-lg font-semibold">Peer Support</h3>
                          <p className="text-Custom-Gray">
                            Connect with like-minded developers and grow together.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <FaCubes className="text-5xl" />
                        <div>
                          <h3 className="text-lg font-semibold">Diverse Topics</h3>
                          <p className="text-Custom-Gray">
                            Learn about the latest trends, tools, and best practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <img
                    src={developer_img}
                    alt="Developer Community support"
                    className=" md:w-5/12 rounded-lg"
                  />

                </div>
            </div>
          </div>
        </section>
    );
};

export default Developer_Community_support;