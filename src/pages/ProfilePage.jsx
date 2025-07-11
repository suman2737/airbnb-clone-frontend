import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
    const[redirect,setRedirect]=useState(null);
    const{ready,user,setUser} = useContext(UserContext);
    const { subpage = 'profile' } = useParams();


    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }
    if(!ready){
        return 'Loading...'
    }
    if(ready && !user && !redirect){
        return <Navigate to ={'/login'}/>
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }
    
    return(
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="max-w-lg mx-auto text-center">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="max-w-sm mt-2 primary">Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage/>
            )}
        </div>
    );
}