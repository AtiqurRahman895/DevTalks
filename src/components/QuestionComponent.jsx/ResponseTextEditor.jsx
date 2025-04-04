import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useWordCount from '../../Hooks/useWordCount';
import { toast } from 'react-toastify';
import TextEditor from '../CommonComponents/TextEditor';
import useSecureAxios from '../../Hooks/useSecureAxios';

const ResponseTextEditor = ({responseTo, setResponseTo, commentOnly=true, refetch}) => {
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 

    const [responseType, setResponseType] = useState(commentOnly?"commnet":"")
    const [editorContents, setEditorContents] = useState({response:""});
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
        }else if(responseTextCount < 2) {
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

        const credentials={responder, responderEmail, responseTo, responseType, response, createdAt}
        
        try {
            await secureAxios.post("/responses/creatResponse",credentials)
            toast.success("You have successfully added a response.")
            refetch()
            setResponseTo("")
        } catch (error) {
            console.log(`Unable to add response now: ${error}`)
            toast.info(`Unable to add response now, try again later`)
        }
    };

    return (

        <div className='space-y-4'>
            <div className="space-y-1">
                <h5 className='text-custom-primary'>Response Type</h5>

                {
                    !commentOnly &&
                    <label className="flex gap-2">
                        <input type='radio' name='responseType' value='answer' onChange={e=> setResponseType(e.target.value)} />
                        <span>Answer</span>
                    </label>
                }

                <label className="flex gap-2">
                    <input type='radio' name='responseType' value='comment' onChange={e=> setResponseType(e.target.value)} defaultChecked={commentOnly} />
                    <span>Comment</span>
                </label>

            </div>

            <div className="space-y-3">
                <h5 className='text-custom-primary'>Your Response</h5>
                <TextEditor label="response" setEditorContents={setEditorContents} editorContents={editorContents.response} />
            </div>

            <button onClick={handleSubmit} className="primaryButton">
                    Submit
            </button>

        </div>


    );
};

export default ResponseTextEditor;