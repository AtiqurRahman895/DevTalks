import React from 'react';
import { FcTimeline } from "react-icons/fc";
const Admin_Panel = () => {
    return (
        <div>
            {/* card section  */}

            <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-4 sm:grid-cols-1">

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total Traffic</p>
                        <h4>34,500</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcTimeline className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total Traffic</p>
                        <h4>34,500</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcTimeline className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total Traffic</p>
                        <h4>34,500</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcTimeline className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total Traffic</p>
                        <h4>34,500</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcTimeline className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>


                 
            </div>


        </div>
    );
};

export default Admin_Panel;