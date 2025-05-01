import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import img_wishlist from '../../assets/img-wishlist.gif';

const SocialAuthButton = () => {
    const navigate = useNavigate();
    const normalAxios = useNormalAxios()
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignInBtn=async()=>{
        try {
            let userCredential = await signInWithGoogle();
            await normalAxios.post("/users/addUser", {
                name:userCredential.user.displayName,
                photoURL:userCredential.user.photoURL,
                email: userCredential.user.email,     
            });
            navigate("/");
            Swal.fire({
                position: "center",
                timer: 5000,
                imageUrl: img_wishlist,  
                imageWidth: 800,     
                imageHeight: 400,    
                imageAlt: "Eid Mubarak",
                showConfirmButton: false,
                width: '850px',      
                   
                customClass: {
                  popup: 'rounded-xl', // Rounded corners for popup
                  image: 'object-cover' // Ensures image fits nicely
                }
            })
            toast.success(`Sign in successful! Welcome, ${userCredential.user.displayName}!`);
        } catch (error) {
            toast.error(error.message ? error.message : error.code);
        }
    }

    // const handleGithubSignInBtn=()=>{
    //     toast.info("Sign in with Github is not posible at this moment. Try with Google")
    // }

    // const handleLinkedinSignInBtn=()=>{
    //     toast.info("Sign in with LinkedIn is not posible at this moment. Try with Google")
    // }
    return (
        <>
        <div className="divider !my-5 before:bg-black after:bg-black before:h-[1px] after:h-[1px] ">OR</div>
        <div className="space-x-3 flex flex-col items-center gap-2">
            <button type="button" onClick={handleGoogleSignInBtn} className="py-1.5 px-3 border hover:border-black/20 rounded-full duration-300 flex items-center gap-1"><FcGoogle className="text-2xl"/>Sign in with Google</button>
            {/* <button type="button" onClick={handleGithubSignInBtn} className="py-1.5 px-3 border hover:border-black/20 rounded-full duration-300 flex items-center gap-1"><TbBrandGithubFilled className="text-2xl"/>Sign in with Github</button>
            <button type="button" onClick={handleLinkedinSignInBtn} className="py-1.5 px-3 border hover:border-black/20 rounded-full duration-300 flex items-center gap-1"><FaLinkedinIn className="text-2xl text-[#006192]"/>Sign in with LinkedIn</button> */}
        </div>
        </>
    );
};

export default SocialAuthButton;