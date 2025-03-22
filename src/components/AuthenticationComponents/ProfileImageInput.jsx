import React from 'react';
import useHostImage from '../../Hooks/useHostImage';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfileImageInput = ({image, setImage}) => {
    const hostImage=useHostImage()

    const handleImageChange=(e)=>{
        const file=e.target.files[0]
        hostImage(file,setImage)
    }
    return (
        <div className="flex flex-col items-center text-center">
            <label htmlFor="image" className="w-[3rem] xs:w-[4.5rem] aspect-square rounded-full overflow-hidden cursor-pointer relative">
                {image?
                    <img src={image?image:""} alt="" className="max-w-full" />
                    :
                    <FaRegUserCircle className={`text-5xl xs:text-7xl`} />
                }
                
                <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="file-input absolute w-1 opacity-0 left-1/2 bottom-0"/>
            </label>
            <span className="">{image?"1 Image File Chosen":"Choose your Photo"}</span>
        </div>
    );
};

export default ProfileImageInput;