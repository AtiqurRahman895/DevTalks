import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";

const SocialAuthButton = () => {
    const handleGoogleSignInBtn=()=>{
        toast.success("Logged in with Google")
    }

    const handleGithubSignInBtn=()=>{
        toast.success("Logged in with Github")
    }

    const handleLinkedinSignInBtn=()=>{
        toast.success("Logged in with Linkedin")
    }
    return (
        <>
        <div className="space-x-3">
            <button type="button" onClick={handleGoogleSignInBtn} className="p-1.5 border hover:border-black/20 rounded-full duration-300"><FcGoogle className="text-2xl"/></button>
            <button type="button" onClick={handleGithubSignInBtn} className="p-1.5 border hover:border-black/20 rounded-full duration-300"><TbBrandGithubFilled className="text-2xl"/></button>
            <button type="button" onClick={handleLinkedinSignInBtn} className="p-1.5 border hover:border-black/20 rounded-full duration-300"><FaLinkedinIn className="text-2xl text-[#006192]"/></button>
        </div>
        <div className="divider !my-5 before:bg-black after:bg-black before:h-[1px] after:h-[1px] ">OR</div>
        </>
    );
};

export default SocialAuthButton;