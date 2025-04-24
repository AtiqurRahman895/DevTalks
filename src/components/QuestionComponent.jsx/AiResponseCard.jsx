import React, { useRef } from 'react';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';

const AiResponseCard = ({aiResponse}) => {
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    return (
        <div className="">
            <div className="px-4 border bg-custom-half-gray border-custom-gray rounded-lg">
                <div className="py-4 border-b border-custom-gray space-y-1">

                    <h4 className='text-custom-primary'>What Ai has to say:</h4>

                </div>

                <div ref={highlightRef} className="editorContents py-4" dangerouslySetInnerHTML={{ __html: aiResponse }}></div>
            </div>
        </div>
    );
};

export default AiResponseCard;