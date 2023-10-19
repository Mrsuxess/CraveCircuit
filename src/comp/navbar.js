import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"
 export const Navbar = () => {
    const[user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);

    }
    return (
    <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/apis">Meals</Link>

        <div>
            <div className="user">
                {user && (
                <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="20" height="20"  alt=""/>
            <button onClick={signUserOut}>log out</button>
            </>
                )}
        </div>
        </div>
        </div>
    );  
};