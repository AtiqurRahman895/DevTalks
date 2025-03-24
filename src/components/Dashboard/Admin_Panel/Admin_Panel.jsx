import React from 'react';
import { FcTimeline } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import LineCharts from './LineChart';
import CustomBarChart from './BarCharts';
import DashboardWidgets from './TeamMembers';
import TeamMembers from './TeamMembers';
import MeetingSlat from './MeetingSlat';
import ProgressTrack from './Progress_Topic';

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
                        <p>Total User</p>
                        <h4>4,500</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcConferenceCall className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>




                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total Post</p>
                        <h4>2,570</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcDocument className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Performance</p>
                        <h4>67%</h4>
                        <p> <span className='text-green-300'>3.45% </span> science last Month</p>
                    </div>
                    <div>
                        <FcComboChart className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>



            </div>


            {/* line charts  */}


            <div className="flex flex-col md:flex-row my-7 justify-between items-center">
                <div className="w-full md:w-4/6 md:mr-4">
                    
                    <LineCharts></LineCharts>
                </div>
                <div className="w-full md:w-2/6">
                    <CustomBarChart></CustomBarChart>
                </div>
            </div>

            {/* table  card  */}

            <div className='grid grid-cols-3 gap-4'>
                  <TeamMembers></TeamMembers>
                  <MeetingSlat></MeetingSlat>
                  <ProgressTrack></ProgressTrack>
            </div>




        </div>
    );
};

export default Admin_Panel;