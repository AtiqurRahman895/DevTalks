import React, { useContext, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const UpvoteDownvoteButtons = ({voteOn, forQuestion=false, totalVotes }) => {
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 

    const [votes, setVotes] = useState(totalVotes)
    const [didUpvote, setDidUpvote] = useState(false)
    const [didDownvote, setDidDownvote] = useState(false)

    const fetchVote= async() => {
        const params = {
            query:{voterEmail:user.email, voteOn}
        };

        const res=await secureAxios.get("/votes/vote", {params})
        setDidUpvote(res.data?.voteType?.upvote||false)
        setDidDownvote(res.data?.voteType?.downvote||false)
        return res.data
    };

    useQuery(
        ['vote', voteOn],
        fetchVote,
        {
            enabled: !!user, // Prevent fetching when user is still loading
            onError: (error) => {
                console.error("Error fetching vote role:", error);
            },
        }
    );

    const addVote=(voteType)=>{
        const credentials = {voter:user.displayName, voterEmail:user.email, voteOn, voteType}
        try {
            secureAxios.post("/votes/creatVotes",credentials)
        } catch (error) {
            console.log(`Unable to add vote now: ${error}`)
            // toast.info(`Unable to add vote now, try again later`)
        }
    }

    const deletevote=()=>{
        const params = {
            query:{voterEmail:user.email, voteOn}
        };
        try {
            secureAxios.delete("/votes/deleteVotes", {params})
        } catch (error) {
            console.log(`Unable to delete vote now: ${error}`)
            // toast.info(`Unable to deletevote now, try again later`)
        }
    }

    const updateVotesCount=async(votes)=>{
        try {
            if(forQuestion){
                secureAxios.put(`/questions/updateVotes/${voteOn}`, {votes})
            }else{
                secureAxios.put(`/responses/updateVotes/${voteOn}`, {votes})
            }
        } catch (error) {
            console.log(`Unable to update votes now: ${error}`)
            // toast.info(`Unable to update votes now, try again later`)
        }
    }

    const handleUpvoteButton=()=>{
        if(!user){
            toast.info("You are not signed in. Sign in first to upvote!")
            return
        }else if(didUpvote){
            setDidUpvote(false)
            setVotes((pre)=>pre-1)
            deletevote()
            updateVotesCount(votes-1)
            return

        }else if(didDownvote){
            setDidUpvote(true)
            setDidDownvote(false)
            setVotes((pre)=>pre+2)
            deletevote()
            addVote({upvote:true})
            updateVotesCount(votes+2)
            return
        }
        setDidUpvote(true)
        setDidDownvote(false)
        setVotes((pre)=>pre+1)
        addVote({upvote:true})
        updateVotesCount(votes+1)
    }

    const handleDownvoteButton=()=>{
        if(!user){
            toast.info("You are not signed in. Sign in first to downvote!")
            return
        }else if(didDownvote){
            setDidDownvote(false)
            setVotes((pre)=>pre+1)
            deletevote()
            updateVotesCount(votes+1)
            return

        }else if(didUpvote){
            setDidDownvote(true)
            setDidUpvote(false)
            setVotes((pre)=>pre-2)
            deletevote()
            addVote({downvote:true})
            updateVotesCount(votes-2)
            return
        }
        setDidDownvote(true)
        setDidUpvote(false)
        setVotes((pre)=>pre-1)
        addVote({downvote:true})
        updateVotesCount(votes-1)
    }


    return (
        <>

            <div onClick={handleUpvoteButton} className={`upvote p-2 duration-500 rounded-full border ${user && didUpvote ? "text-black bg-white" : "text-white border-custom-gray"}`} >
                <BiSolidUpArrow className="" />
            </div>

            <Tooltip
                anchorSelect=".upvote"
                className="!bg-custom-primary"
            >
                Upvote
            </Tooltip>

            <p>{votes}</p>

            <div onClick={handleDownvoteButton} className={`downvote p-2 duration-500 rounded-full border ${user && didDownvote ? "text-black bg-white" : "text-white border-custom-gray"}`} >
                <BiSolidDownArrow className="" />
            </div>

            <Tooltip
                anchorSelect=".downvote"
                className="!bg-custom-primary"
            >
                Downvote
            </Tooltip>
            
        </>
    );
};

export default UpvoteDownvoteButtons;