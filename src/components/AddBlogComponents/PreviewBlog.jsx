import React, { useRef } from 'react';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoMdTime } from 'react-icons/io';
import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import { Link } from 'react-router';

const PreviewBlog = ({showPreview, title, shortDescription, createdAt, selectedTags, image, editorContents}) => {
    const highlightRef = useRef(null);
    useHighlightCodeBlock(showPreview, highlightRef)

    const formatRelativeTime= useGetRelativeTime()
    
    return (
        <div className="space-y-3">
            <h5 className='text-custom-primary'>Preview Of The Blog</h5>
            <div className="space-y-2">
                <h3>{title}</h3>
                <b>{shortDescription}</b>
                <div className="flex flex-wrap gap-1">
                    <div className='flex items-center gap-1'>
                        <HiOutlineCalendarDateRange />
                        <p>{new Date(createdAt).toLocaleDateString()},</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdTime /> 
                        <p>{formatRelativeTime(createdAt)}</p> {/* Relative time */}
                    </div>
                </div>

                <div className="flex flex-wrap gap-1">
                    {
                        selectedTags.map((tag, index)=>(
                            <Link key={index} className='font-bold text-custom-gray hover:text-custom-primary hover:underline'>
                                #{tag.value}{(selectedTags.length-1 !== index) && ","}
                            </Link>
                        ))
                    }
                </div>

                <img src={image?image:""} alt="Blog cover image" className="bg-custom-primary max-w-full m-auto !my-6" />

                <div ref={highlightRef} className="!whitespace-pre-wrap editorContents" dangerouslySetInnerHTML={{ __html: editorContents }}></div>

            </div>

        </div> 
    );
};

export default PreviewBlog;