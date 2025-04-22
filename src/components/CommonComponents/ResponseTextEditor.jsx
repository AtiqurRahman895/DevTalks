import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useWordCount from '../../Hooks/useWordCount';
import { toast } from 'react-toastify';
import TextEditor from '../CommonComponents/TextEditor';
import useSecureAxios from '../../Hooks/useSecureAxios';

const ResponseTextEditor = ({responseTo, setResponseTo, commentOnly=true, refetch, CommentOnBlog=false}) => {
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 

    const [responseType, setResponseType] = useState(commentOnly?"commnet":"")
    const [editorContents, setEditorContents] = useState({response:""});
    const [editorKey, setEditorKey] = useState(0);
    const {htmlToPlainText, countWordsAndChars} = useWordCount()

    const verify=()=>{
        const response = editorContents.response;
        const plainResponseText= htmlToPlainText(response)
        const {wordCount:responseTextCount}=countWordsAndChars(plainResponseText)
        
        if (!user){
            toast.warning(`Currently you are not signned in! Please sign in first to response.`);
            return;
        }else if(!responseType) {
            toast.warning(`Please select the type of your response.`);
            return;
        }else if(responseTextCount < 1) {
            toast.warning(`response is required! Please lenghten response to 2 or more word! (Currently has ${responseTextCount} words)`);
            return;
        }

        return true

    }

    const handleSubmit = async () => {
        const allRight=verify()
        if(!allRight){
            return
        }

        const response = editorContents.response;
        const createdAt= new Date()
        const responder= user?.displayName
        const responderEmail= user?.email

        const credentials={responder, responderEmail, responseTo:CommentOnBlog||responseTo, responseType, response, createdAt}
        
        try {
            await secureAxios.post("/responses/creatResponse",credentials)
            toast.success("You have successfully added a response.")
            setEditorContents({response:""})
            setEditorKey(prev => prev + 1); // 💡 This will force remount
            setResponseTo("")
            refetch()
        } catch (error) {
            console.log(`Unable to add response now: ${error}`)
            toast.info(`Unable to add response now, try again later`)
        }
    };

    // console.log(editorContents)

    return (

        <div className='space-y-4'>
            {
                !commentOnly&&
                <div className="space-y-1">
                    <h5 className='text-custom-primary'>Response Type</h5>

                    <label className="flex gap-2">
                        <input type='radio' name='responseType' value='answer' onChange={e=> setResponseType(e.target.value)} />
                        <span>Answer</span>
                    </label>

                    <label className="flex gap-2">
                        <input type='radio' name='responseType' value='comment' onChange={e=> setResponseType(e.target.value)} />
                        <span>Comment</span>
                    </label>

                </div>
            }


            <div className="space-y-3">
                <h5 className='text-custom-primary'>{!CommentOnBlog?"Your Response":"Add your comment"}</h5>
                <TextEditor key={editorKey} label="response" setEditorContents={setEditorContents} editorContents={editorContents.response} />
            </div>

            <button onClick={handleSubmit} className="primaryButton">
                    Submit
            </button>

        </div>


    );
};

export default ResponseTextEditor;