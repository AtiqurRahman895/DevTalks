import React from 'react';
import bg from '../../assets/background-4.jpg'

const Join_developer = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-bottom bg-no-repeat text-white py-20 px-6 md:px-16"
                style={{ backgroundImage: `url('${bg}')` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className='container'>
                <div className="relative z-10  mx-auto text-left">
                    <h1 className="text-3xl md:text-3xl font-semibold">
                        Join Our Developer Community Today
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Sign up now to connect, share knowledge, and grow with fellow developers in our forum.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-start gap-4">
                        <button className="bg-custom-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md  ">
                            Sign Up
                        </button>
                        <button className="border text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600">
                            Learn More
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Join_developer;