import React from 'react';
import bg from '../../assets/background-4.jpg'

const Join_developer = () => {
    return (
        <section className="relative bg-cover bg-no-repeat bg-fixed py-24 before:bg-custom-primary/60 before:absolute before:inset-0 before:z-10 " style={{ backgroundImage: `url('${bg}')` }}>

            <div className='container'>
                <div className="relative z-10 space-y-2">
                    <h3 className="">
                        Join Our Developer Community Today
                    </h3>
                    <h6 className="">
                        Sign up now to connect, share knowledge, and grow with fellow developers in our forum.
                    </h6>

                    {/* Buttons */}
                    <div className="pt-4 space-x-4">
                        <button className="primaryButton">
                            Sign Up
                        </button>
                        <button className="outlineButton">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join_developer;