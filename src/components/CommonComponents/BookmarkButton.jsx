import React, { useContext, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import useCheckIfBookmarked from '../../Hooks/useCheckIfBookmarked';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { Tooltip } from 'react-tooltip';

const BookmarkButton = ({_id, type=""}) => {
    const [booked, setBooked] = useState(0)
    const {bookedItemInfo, refetch} = useCheckIfBookmarked(_id, setBooked)
    const {user} = useContext(AuthContext)
    const secureAxios = useSecureAxios()
    
    const handleBookmarkButton = async ()=>{
        if(!user){
            toast.info("Curently you are not signed in. Sign in first to add this to bookmark!")
            return
        }

        const name= user?.displayName
        const email= user?.email

        const credentials={name, email, item:_id, type}
        
        if(!booked){
            try {
                await secureAxios.post("/bookmarks/addToBookmark",credentials)
                toast.success(`Added this ${type} to bookmark!`)
                refetch()
            } catch (error) {
                console.log(`Unable to add this ${type} to bookmark now: ${error}`)
                toast.info(`Unable to add this ${type} to bookmark now, try again later`)
            }
        }else{
            try {
                await secureAxios.delete(`/bookmarks/deleteFromBookmark/${bookedItemInfo._id}`)
                toast.info(`Deleted this ${type} from bookmark!`)
                refetch()
            } catch (error) {
                console.log(`Unable to delete this ${type} from bookmark now: ${error}`)
                toast.info(`Unable to delete this ${type} from bookmark now, try again later`)
            }
        }

    }
    return (
        <>
            <div onClick={handleBookmarkButton} className={`bookmark p-2 duration-500 rounded-full border inline-block ${booked? "text-black bg-white" : "text-white border-custom-gray"}`}>
                <FaBookmark className="" />
            </div>

            <Tooltip
                anchorSelect=".bookmark"
                className="!bg-custom-primary"
            >
                Add to bookmark!
            </Tooltip>
        </>
    );
};

export default BookmarkButton;