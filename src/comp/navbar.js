import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState} from "react-firebase-hooks/auth"
 export const Navbar = () => {
    const[user] = useAuthState(auth);
    return (
    <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Contact us</Link>
        <Link to="/apis">Meals</Link>
        <Link to="/About">About us</Link>
        <div>
            <div className="user">
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="20" height="20"  alt=""/>
        </div>
        </div>
        </div>
    );  
};