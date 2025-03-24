import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const ForgotPassword = () => {
    const location = useLocation();
    const { sendResetEmail } = useContext(AuthContext);
    const navigate = useNavigate();
 
    const [email, setEmail]=useState(location.state?.email)

    
    const ResetPasswordOnSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            await sendResetEmail(email)
            navigate("/login");
            toast.success(`Reset email has been sent to ${email}!`);
            window.open("https://mail.google.com", "_blank");
        } catch (error) {
          toast.error(error.message ? error.message : error.code);            
        }

    }
    return (
        <main className="py-16">
            <PageTitle title="Forgot password" />
    
            <section className="container place-items-center">
                <div className="w-full max-w-sm bg-white rounded-lg">
        
                    <div className="p-4 md:p-8 text-black space-y-4">
                        <h3 className="">Forgot password?</h3>
            
                        <form onSubmit={(e)=>ResetPasswordOnSubmit(e)} className="space-y-4">
                            <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                                <MdEmail />
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="grow !bg-transparent" placeholder="Email" required/>
                            </label>
                            <button type="submit" className="primaryButton !w-full">Reset</button>
                        </form>
                    </div>
        
                </div>
            </section>
        </main>
    );
};

export default ForgotPassword;