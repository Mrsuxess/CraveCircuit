import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom";

 export const Navbar = () => {
    const[user] = useAuthState(auth);
    const navigate = useNavigate();
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/");


    }
    return (
    <div className="topnav">
       

        <div>
            <div className="user">
                {user && (
                <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="20" height="20"  alt=""/>
            <button className="stbtn" onClick={signUserOut}>log out</button>
            </>
                )}
        </div>
        </div>
        </div>
    );  
};