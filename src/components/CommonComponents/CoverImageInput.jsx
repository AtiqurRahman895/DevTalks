import React from 'react';
import useHostImage from "../../Hooks/useHostImage";
import { RiImageAddFill } from "react-icons/ri";

const CoverImageInput = ({image, setImage}) => {
    const hostImage = useHostImage()
    const handleImageChange=(e)=>{
        const file=e.target.files[0]
        hostImage(file,setImage)
    }

    return (
        <>
            <label className='!w-fit block relative cursor-pointer'>
                <RiImageAddFill className='text-7xl'/>
                <input id='blogImage' type="file" accept="image/*" onChange={handleImageChange} className="file-input w-[4.5rem] absolute top-1 scale-0" />
                <p className='text-custom-primary'>{image&&`1 image file uploaded`}</p>
            </label>
        </>

    );
};

export default CoverImageInput;