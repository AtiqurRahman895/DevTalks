import React, { useContext, useState } from 'react';
import TextEditor from '../CommonComponents/TextEditor';
import SelectTags from '../CommonComponents/SelectTags';
import { toast } from 'react-toastify';
import useWordCount from '../../Hooks/useWordCount';
import PreviewQuestion from './PreviewQuestion';
import { AuthContext } from '../../Provider/AuthProvider';
import useSecureAxios from '../../Hooks/useSecureAxios';

const AskQuestionsForm = () => {
    const [showPreview, setShowPreview] = useState(false)
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 

    const [title, setTitle] = useState("")
    const [editorContents, setEditorContents] = useState({question:""});
    const [selectedTags, setSelectedTags] = useState([])
    const {htmlToPlainText, countWordsAndChars} = useWordCount()

    const verify=()=>{
        const {wordCount:titleTextCount}=countWordsAndChars(title)
        
        const question = editorContents.question;
        const plainQuestionText= htmlToPlainText(question)
        const {wordCount:questionTextCount}=countWordsAndChars(plainQuestionText)
        
        if (!user){
            toast.warning(`Currently you are not signned in! Please sign in first to ask question.`);
            return;
        }else if (titleTextCount < 5){
            toast.warning(`Question title is required! Please lenghten Question title to 5 or more word! (Currently has ${titleTextCount} words)`);
            return;
        }else if(questionTextCount < 10) {
            toast.warning(`Question is required! Please lenghten Question to 10 or more word! (Currently has ${questionTextCount} words)`);
            return;
        }else if(selectedTags.length === 0) {
            toast.warning("Please select atleast one tag!");
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

    const handleSubmit = async () => {
        const allRight=verify()
        if(!allRight){
            return
        }

        const question = editorContents.question;
        const tags = selectedTags.map((tag) => tag.value);
        const createdAt= new Date()
        const asker= user?.displayName
        const askerEmail= user?.email

        const credentials={asker, askerEmail, title, question, tags, createdAt}
        
        try {
            await secureAxios.post("/questions/creatQuestion",credentials)
            toast.success("You have successfully created a question.")
            setShowPreview(false)
            setTitle("")
            setEditorContents({question:""})
            setSelectedTags([])
        } catch (error) {
            console.log(`Unable to creat question now: ${error}`)
            toast.info(`Unable to creat question now, try again later`)
        }
    };

    return (
        <div className='space-y-12'>
            {
                (!showPreview) ?

                <div className='space-y-6'>
                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type question title</h5>
                        <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className="input w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type title..."></input>
                    </div>
        
                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Type your question</h5>
                        <TextEditor label="question" setEditorContents={setEditorContents} editorContents={editorContents.question} />
                    </div>
        
                    <div className="space-y-3">
                        <h5 className='text-custom-primary'>Question tags</h5>
                        <SelectTags selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
                    </div>
        
                </div>
                :
                <PreviewQuestion showPreview={showPreview} title={title} createdAt={new Date()} selectedTags={selectedTags} editorContents={editorContents.question} />
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

export default AskQuestionsForm;