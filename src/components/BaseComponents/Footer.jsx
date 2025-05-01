import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
            <section className="relative pt-10 pb-8 bg-[url('http://www.transparenttextures.com/patterns/cubes.png')] before:bg-black/45 before:absolute before:inset-0 before:!z-10">
                <div className='container relative !z-10'>
                    <div className="space-y-12 text-center">
                        <div className="">
                            <Link to="/" className='inline-block '>
                                <h1 className='w-fit font-fugaz'>DevTalks</h1>
                            </Link>
                            <div className="flex gap-3 items-center justify-center">
                                <a href="" target='_blank'>
                                    <FaGithub className='text-2xl' />
                                </a>
                                <a href="" target='_blank'>
                                    <FaLinkedin className='text-2xl' />
                                </a>
                                <a href="" target='_blank'>
                                    <FaFacebook className='text-2xl' />
                                </a>
                                <a href="" target='_blank'>
                                    <FaYoutube className='text-2xl' />
                                </a>

                            </div>
                        </div>

                        
                        <div className="flex flex-wrap justify-center items-start gap-x-60 gap-y-6">

                            <div className="flex flex-col gap-1">
                                <h5 className="uppercase text-custom-primary mb-2">Resources</h5>
                                <Link to="/">Home</Link>
                                <Link to="/questions">Questions </Link>
                                <Link to="/blogs">Blogs </Link>
                                <Link to="/quiz">Quiz</Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h5 className="uppercase text-custom-primary mb-2">Contact us</h5>
                                <a className="" target="_blank" href="tel:+8801400447787">Call us</a>
                                <a className="" target="_blank" href="mailto:devtalks@gmail.com">Email us</a>
                                <a className="" target="_blank" href="http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003">Address</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h5 className="uppercase text-custom-primary mb-2">More</h5>
                                <Link to="/about">About us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="divider before:bg-white after:bg-white"></div>

                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="">© Copyright 2025. All Rights Reserved.</div>
                    </div>


                </div>
            </section>

    );
};

export default Footer;