import React, { useState } from 'react';
import TextEditor from '../CommonComponents/TextEditor';
import SelectTags from '../CommonComponents/SelectTags';
import { toast } from 'react-toastify';
import useWordCount from '../../Hooks/useWordCount';
import CoverImageInput from '../CommonComponents/CoverImageInput';

const AddBlogForm = () => {
    const [showPreview, setShowPreview] = useState(false)

    const [title, setTitle] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [editorContents, setEditorContents] = useState({});
    const [selectedTags, setSelectedTags] = useState([])
    const [image, setImage] = useState()
    const {htmlToPlainText, countWordsAndChars} = useWordCount()

    const verify=()=>{
        const {wordCount:titleTextCount}=countWordsAndChars(title)
        const {wordCount:shortDescriptionCount}=countWordsAndChars(shortDescription)

        const LongDescription = editorContents.LongDescription;
        const plainLongDescriptionText= htmlToPlainText(LongDescription)
        const {wordCount:longDescriptionTextCount}=countWordsAndChars(plainLongDescriptionText)
        
        if (titleTextCount < 3){
            toast.warning(`Blog title is required! Please lenghten blog title to 3 or more word! (Currently has ${titleTextCount} words)`);
            return;
        }else if(shortDescriptionCount < 10) {
            toast.warning(`Short description is required! Please lenghten blog short description to 10 or more word! (Currently has ${shortDescriptionCount} words)`);
            return;
        }else if(selectedTags.length === 0) {
            toast.warning("Please select atleast one tag!");
            return;
        }else if(!image) {
            toast.warning("You must upload a image. Only JPG, PNG, GIF image files are allowed, and the maximum file size is 10MB. Please select an appropriate image file to proceed!");
            return;
        }else if(longDescriptionTextCount < 20) {
            toast.warning(`Long description is required! Please lenghten long description to 20 or more word! (Currently has ${longDescriptionTextCount} words)`);
            return;
        }

        return true
    }

    const handlePreview= ()=>{
        const allRight=verify()
        if(!allRight){
            return
        }
        setShowPreview(!showPreview)
    }

    const handleSubmit = () => {
        const allRight=verify()
        if(!allRight){
            return
        }

        const LongDescription = editorContents.LongDescription;
        const tags = selectedTags.map((tag) => tag.value);
        console.log(title, shortDescription, tags, image, LongDescription)
        toast.success("worked!")
    };


    return (
        <div className='space-y-12'>
            {
                (!showPreview) ?

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type Blog Title</h5>
                        <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className="input w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type title..."></input>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type Blog Title</h5>
                        <textarea value={shortDescription} rows={3} onChange={e=>setShortDescription(e.target.value)} className="textarea w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type short description..."></textarea>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Blog Tags</h5>
                        <SelectTags selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
                    </div>

                    <div className="space-y-1 text-center [&_*]:m-auto">
                        <h5 className='text-custom-primary w-fit'>Add Blog Image</h5>
                        <CoverImageInput image={image} setImage={setImage}/>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type Long Description</h5>
                        <TextEditor label="LongDescription" setEditorContents={setEditorContents} />
                    </div>


                </div>
                :
                <div className="space-y-3">
                    <h5 className='text-custom-primary'>Preview Of The Blog</h5>
                    <div className="!whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: editorContents.LongDescription }}></div>
                </div> 
            }


            <div className="flex gap-4">
                <button onClick={handleSubmit} className="primaryButton">
                    Submit
                </button>
                <button onClick={handlePreview} className="outlineButton">
                    {showPreview?"Show Form":"Show Preview"}
                </button>
            </div>

        </div>
    );
};

export default AddBlogForm;
