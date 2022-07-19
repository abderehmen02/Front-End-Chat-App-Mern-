import React , {useContext, useEffect } from 'react';
import {UserProvider} from "../context"
import { useNavigate , Navigate } from "react-router-dom";



// if user is logged in and tries to go to the sign in page or the sing up page ; we want to direct him to the chat page (because he already loged in)
const IsLogedOut = ({children})=>{

    const data = useContext(UserProvider)

    if(data.CurrentUser){
return <Navigate to="/chat"></Navigate>
    }
return <div>{children}</div> 
}

// if the user is not logged in and he tries to go to the chat page ; we want to redirect him to the sign in page (because he didn't logged in yet)
const IsLogedIn = ({children})=>{

    const data = useContext(UserProvider)

    if(!data.CurrentUser){
return <Navigate to="/" />
    }

    return <div>{children}</div> 
}
export  { IsLogedOut , IsLogedIn }
