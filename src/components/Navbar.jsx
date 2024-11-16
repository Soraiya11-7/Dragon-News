import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthProviderContext } from "./Provider/AuthProvider";

const Navbar = () => {
    const {name,user,signOutUser} = useContext(AuthProviderContext);
    return (
        <div className="flex justify-between">
            <div>{user && user?.email}</div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
                <Link to='/dev'>Dev Info</Link>
            </div>
            <div className="login flex justify-center items-center gap-2">
               <div>
                {
                    user && user?.email ? 
                    <div>
                        <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                        <h2>{user.displayName}</h2>
                    </div>
                    :
                    
                    <img src={userIcon} alt="" />
                }
                   
               </div>
               {
                user && user?.email ? 
                (<button onClick={signOutUser} className="btn btn-neutral rounded-none">LogOut</button>)
                :
                (<Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>)
               }
               
            </div>
            
        </div>
    );
};

export default Navbar;