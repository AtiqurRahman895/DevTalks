import React, { useRef, useState, useContext } from 'react';
import TextEditor from '../CommonComponents/TextEditor';
import SelectTags from '../CommonComponents/SelectTags';
import { toast } from 'react-toastify';
import useWordCount from '../../Hooks/useWordCount';
import CoverImageInput from '../CommonComponents/CoverImageInput';
import PreviewBlog from './PreviewBlog';
import { AuthContext } from '../../Provider/AuthProvider';

const AddBlogForm = () => {
    const {user} = useContext(AuthContext)

    const [showPreview, setShowPreview] = useState(false)

    const [title, setTitle] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [editorContents, setEditorContents] = useState({LongDescription:""});
    const [selectedTags, setSelectedTags] = useState([])
    const [image, setImage] = useState()
    const {htmlToPlainText, countWordsAndChars} = useWordCount()


    const verify=()=>{
        const {wordCount:titleTextCount}=countWordsAndChars(title)
        const {wordCount:shortDescriptionCount}=countWordsAndChars(shortDescription)

        const LongDescription = editorContents.LongDescription;
        const plainLongDescriptionText= htmlToPlainText(LongDescription||"")
        const {wordCount:longDescriptionTextCount}=countWordsAndChars(plainLongDescriptionText)
        
        if (!user){
            toast.warning(`Currently you are not signned in! Please sign in first to Add blog.`);
            return;
        }else if (titleTextCount < 3){
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
        const createdAt= new Date()
        const author= user?.displayName
        const authorEmail= user?.email

        console.log(author, authorEmail, title, shortDescription, tags, image, LongDescription, createdAt)
        toast.success("worked!")
    };


    return (
        <div className='space-y-12'>
            {
                (!showPreview) ?

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type blog title</h5>
                        <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className="input w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type title..."></input>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Shortly describe blog</h5>
                        <textarea value={shortDescription} rows={3} onChange={e=>setShortDescription(e.target.value)} className="textarea w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type short description..."></textarea>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Blog tags</h5>
                        <SelectTags selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
                    </div>

                    <div className="space-y-1 text-center [&_*]:m-auto">
                        <h5 className='text-custom-primary w-fit'>Add blog image</h5>
                        <CoverImageInput image={image} setImage={setImage}/>
                    </div>

                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type long description</h5>
                        <TextEditor label="LongDescription" setEditorContents={setEditorContents} editorContents={editorContents.LongDescription} />
                    </div>


                </div>
                :
                <PreviewBlog showPreview={showPreview} title={title} shortDescription={shortDescription} createdAt={new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)} selectedTags={selectedTags} image={image} editorContents={editorContents.LongDescription} />
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
