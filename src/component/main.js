import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate} from "react-router-dom"

export const Main = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/meals");
    };
       
    

    
    return <div className="nmsign">
        
        <center><h4>Sign In With Google To Continue</h4></center>
   <center> <button onClick={ signInWithGoogle }><b>Sign in with Google</b></button></center>
    </div>

};