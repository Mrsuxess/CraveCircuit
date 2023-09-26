import { Link } from "react-router-dom"
export const Navbar = () =>{
    return (
    <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>signup</button></Link>
        </div>
    );  
};