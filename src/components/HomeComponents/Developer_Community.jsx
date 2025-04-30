import React from 'react';
import img_1 from '../../assets/card-img-1.jpg'
import img_2 from '../../assets/card-img-2.jpg'
import img_3 from '../../assets/card-img-3.jpg'
import { Link } from 'react-router';

const Developer_Community = ({user}) => {
    return (
        <section className="">
            <div className="container lg:px-20 ">
                <div className="sectionHeaderWidth space-y-2">
                    <h6 className="uppercase text-custom-primary">Connect</h6>
                    <h3 className="">
                        Empowering Developers Through Learning
                    </h3>
                    <h6 className="sectionHeaderSubtextWidth">
                        Ask questions, get expert answers, and grow with a supportive community. 
                        Would you like any further refinements?
                    </h6>
                </div>

                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    
                    <div className="rounded-lg text-center space-y-4">
                        <img
                            src={img_1}
                            alt="Ask Questions"
                            className="rounded-lg w-full h-52 object-cover object-left-top"
                        />
                        <div className='space-y-1'>
                            <h3 className="text-xl font-semibold">Ask Questions and Get Expert Answers</h3>
                            <p className="text-custom-gray">
                                Post your queries and receive guidance from industry professionals.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg text-center space-y-4">
                        <img
                            src={img_2}
                            alt="Ask Questions"
                            className="rounded-lg w-full h-52 object-cover object-left-top"
                        />
                        <div className='space-y-1'>
                            <h3 className="text-xl font-semibold">Ask Questions and Get Expert Answers</h3>
                            <p className="text-custom-gray">
                                Post your queries and receive guidance from industry professionals.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg text-center space-y-4">
                        <img
                            src={img_3}
                            alt="Ask Questions"
                            className="rounded-lg w-full h-52 object-cover object-left-top"
                        />
                        <div className='space-y-1'>
                            <h3 className="text-xl font-semibold">Ask Questions and Get Expert Answers</h3>
                            <p className="text-custom-gray">
                                Post your queries and receive guidance from industry professionals.
                            </p>
                        </div>
                    </div>
                    
                </div>

            
                <div className="mt-10 flex justify-center gap-6">
                    {
                        user?.email || <Link to={'/sign-up'} className="primaryButton">Join</Link>
                    }
                    <Link to={"/about"} className="outlineButton">Learn more</Link>
                </div>
            </div>
        </section>

    );
};

export default Developer_Community;