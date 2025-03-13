import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <div className=" py-8">
                        <div className="container px-4 sm:px-6 text-gray-800 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                            <div className="p-5">
                                <img src='' alt="" />
                                <h4 className='text-white'>DevTalks</h4>
                            </div>
                            <div className="p-5">
                                <div className="text-sm uppercase text-white font-bold">Resources</div>
                                <Link className="my-3 block text-white"  >Home<span className="text-white text-xs p-1"></span></Link>
                                <Link className="my-3 block text-white" >Brands <span className="text-white text-xs p-1"></span></Link>
                                <Link className="my-3 block text-white"  >Contact Us <span className="text-white text-xs p-1"></span></Link>
                                <Link className="my-3 block text-white"  >About Dev<span className="text-white text-xs p-1"></span></Link>
                                <Link className="my-3 block text-white" >Support <span className="text-white text-xs p-1">New</span></Link>
                            </div>
                            <div className="p-5">
                                <div className="text-sm uppercase text-white font-bold">Support</div>
                                <a className="my-3 text-white block" href="/#">Help Center <span className="text-white text-xs p-1"></span></a>
                                <a className="my-3 text-white block" href="/#">Privacy Policy <span className="text-white text-xs p-1"></span></a>
                                <a className="my-3 text-white block" href="/#">Conditions <span className="text-white text-xs p-1"></span></a>
                            </div>
                            <div className="p-5">
                                <div className="text-sm uppercase text-white font-bold">Contact us</div>
                                <a className="my-3 block text-white" href="/#">DevTalks Developer
                                    
                                    <span className="text-white text-xs p-1"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="  pt-2 ">
                        <div className="flex pb-5 px-3  pt-5 container border-t text-gray-800 text-sm flex-col
       items-center">
                            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                                <a href=" " target='_blank' className="w-6  text-3xl mx-3">
                                    <FaGithub className='text-white' />
                                </a>
                                <a href=' ' target='_blank' className="w-6 text-3xl mx-3">

                                    <FaLinkedin className='text-white' />

                                </a>
                                <a className="w-6 text-3xl mx-3">


                                    <FaFacebook className='text-white' />
                                </a>
                                <a className="w-6 text-3xl mx-3">

                                    <FaYoutube className='text-white' />

                                </a>

                            </div>
                            <div className="my-5 text-white">© Copyright 2025. All Rights Reserved.</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;