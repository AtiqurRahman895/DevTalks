import React, { useState } from 'react';
import TextEditor from '../CommonComponents/TextEditor';
import SelectTags from '../CommonComponents/SelectTags';
import { toast } from 'react-toastify';
import useWordCount from '../../Hooks/useWordCount';

const AskQuestionsForm = () => {
    const [title, setTitle] = useState("")
    const [editorContents, setEditorContents] = useState({});
    const [selectedTags, setSelectedTags] = useState([])
    const {htmlToPlainText, countWordsAndChars} = useWordCount()


    const handleSubmit = () => {
        const {wordCount:titleTextCount}=countWordsAndChars(title)
        
        const question = editorContents.question;
        const plainQuestionText= htmlToPlainText(question)
        const {wordCount:questionTextCount}=countWordsAndChars(plainQuestionText)
        
        if (titleTextCount < 5){
            toast.warning(`Question Ttile is required! Please lenghten Question Ttile to 5 or more word! (Currently has ${titleTextCount} words)`);
            return;
        }else if(questionTextCount < 10) {
            toast.warning(`Question is required! Please lenghten Question to 10 or more word! (Currently has ${questionTextCount} words)`);
            return;
        }else if(selectedTags.length === 0) {
            toast.warning("Please select atleast one tag!");
            return;
        }

        const tags = selectedTags.map((tag) => tag.value);
        console.log(title, question, tags)
    };
    return (
        <div className='space-y-6'>
            <div className="space-y-3">
                <h5 className='text-custom-primary'>Type Question Title</h5>
                <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className="input w-full focus-within:outline-none focus-within:border-none bg-white text-black" placeholder="Type title..."></input>
            </div>

            <div className="space-y-3">
                <h5 className='text-custom-primary'>Type Your Question</h5>
                <TextEditor label="question" setEditorContents={setEditorContents} />
            </div>

            {/* <div className="space-y-3">
                <h5 className='text-custom-primary'>Preview Of Your Question</h5>
                <div className="!whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: editorContents.question }}></div>

            </div> */}

            <div className="space-y-3">
                <h5 className='text-custom-primary'>Question Tags</h5>
                <SelectTags selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            </div>

            <button onClick={handleSubmit} className="primaryButton !mt-10">
                Submit
            </button>
        </div>
    );
};

export default AskQuestionsForm;