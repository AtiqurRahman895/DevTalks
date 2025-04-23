import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import img_wishlist from '../../assets/img-wishlist.gif';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const QuickAccess = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e, email, password) => {
    e.preventDefault();

    try {
      const userCredential = await signInUser(email, password)
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
      toast.success(
        `Sign in successful! Welcome, ${userCredential.user.displayName}!`
      );
    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
  };

    return (
        <div className={`px-4 py-8 md:p-8 bg-custom-primary flex flex-col justify-center text-center rounded-b-lg sm:rounded-l-none sm:rounded-r-lg`}>
            <div className="space-y-4">
            
            <h4 className="">Quick Access for Recruiters & Testers as a</h4>

            <div className="flex items-center justify-center gap-4">
                <button onClick={(e)=>handleSignIn(e, "emonhassan895@gmail.com", "1aA@1a")} type="submit" className="outlineButton !rounded-full">ordinary user</button>
                <button onClick={(e)=>handleSignIn(e, "test.admin@devtalks.com", "1aA@1a")} type="submit" className="outlineButton !rounded-full">admin user</button>
            </div>

            </div>
        </div>
    );
};

export default QuickAccess;