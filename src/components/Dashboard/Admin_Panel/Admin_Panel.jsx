import React, { useState } from 'react';
import { FcNews, FcQuestions } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import LineCharts from './LineChart';
import PageVisits from './PageVisits';
import SocialTraffic from './SocialTraffic';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import TopViewedQuestions from './TopViewedQuestions';
import TopViewedBlogs from './TopViewedBlogs';
import TopVotedQuestions from './TopVotedQuestions';
import useGetQuestionsCount from '../../../Hooks/useGetQuestionsCount';
import useGetBlogsCount from '../../../Hooks/useGetBlogsCount';
import useGetUsersCount from '../../../Hooks/useGetUsersCount';

const Admin_Panel = () => {
    const secureAxios = useSecureAxios()
    const [totalTraffics, setTotalTraffics]= useState(0)
    const [totalUniqueTraffics, setTotalUniqueTraffics]= useState(0)

    const fetchTraffics= async() => {
        const res=await secureAxios.get("/traffics/traffics")
        let totalPageViews=0
        let totalUniqueVisitors=0
      
        res.data.forEach((traffic) => {
          totalPageViews += traffic.pageViews;
          totalUniqueVisitors += traffic.uniqueVisitors;
        });
      
        setTotalTraffics(totalPageViews);
        setTotalUniqueTraffics(totalUniqueVisitors);
        return res.data
    };

    const { data:traffics=[] } = useQuery(
        ['traffics'],
        fetchTraffics,
        {
            onError: (error) => {
              console.error("Error fetching traffics:", error);
            }
        }
    );

    const {questionsCount} = useGetQuestionsCount()
    const {blogsCount} = useGetBlogsCount()
    const {usersCount} = useGetUsersCount()


    return (
        <section className='space-y-8'>

            <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">

                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total traffic</p>
                        <h4>{totalTraffics}</h4>
                        <p>Since last 7 days</p>
                    </div>
                    <div>
                        <FcComboChart className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>


                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total questions</p>
                        <h4>{questionsCount}</h4>
                    </div>
                    <div>
                        <FcQuestions className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>


                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total User</p>
                        <h4>{usersCount}</h4>
                    </div>
                    <div>
                        <FcConferenceCall className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>




                <div className='bg-custom-primary rounded-lg p-6 flex justify-between items-center'>
                    <div>
                        <p>Total blogs</p>
                        <h4>{blogsCount}</h4>
                    </div>
                    <div>
                        <FcNews className='bg-white text-6xl p-3 rounded-full' />
                    </div>
                </div>



            </div>


            {/* line charts  */}

            <div className="space-y-6 py-6">
                <div className="overflow-x-auto space-y-4">
                    <div className="text-center">
                        <h4>Traffic in the last 7 days</h4>
                        <p className='text-custom-primary'>How many times users viewed pages on the site each day, including repeated views.</p>                        
                    </div>

                    <LineCharts data={traffics} type={"pageViews"}/>
                </div>

                <div className="overflow-x-auto space-y-4">
                    <div className="text-center">
                        <h4>Unique Visitors in the Last 7 Days</h4>
                        <p className='text-custom-primary'>How many different users visited, counting each person only once per day.</p>                        
                    </div>

                    <LineCharts data={traffics} type={"uniqueVisitors"}/>
                </div>
                
            </div>

            {/* table  card  */}

            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
                  <TopVotedQuestions />
                  <TopViewedQuestions />
                  <TopViewedBlogs />
            </div>

            <div className="grid grid-cols-8 gap-4 my-6">
                <div className="lg:col-span-5 col-span-8">
                    
                    <PageVisits></PageVisits>
                     
                </div>
                <div className="lg:col-span-3 col-span-8">
                     <SocialTraffic></SocialTraffic>
                </div>
            </div>


        </section>
    );
};

export default Admin_Panel;