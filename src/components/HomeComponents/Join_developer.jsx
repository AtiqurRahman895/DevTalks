import React from 'react';
import bg from '../../assets/background-4.jpg'
import { Link } from 'react-router';

const Join_developer = ({user}) => {
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
                        {
                            !user?.email && <Link to={'/sign-up'} className="primaryButton">Join</Link>
                        }
                        
                        <Link to={"/about"} className="outlineButton">Learn more</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join_developer;