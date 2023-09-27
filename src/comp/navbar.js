import { Link } from "react-router-dom"
 export const Navbar = () =>{
    return (
    <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/login">About us</Link>
        <Link to="/signup">Contact us</Link>
        <Link to="/apis">Meals</Link>
        </div>
    );  
};