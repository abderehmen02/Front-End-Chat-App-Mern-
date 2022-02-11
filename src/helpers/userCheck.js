import React , {useContext, useEffect } from 'react';
import {UserProvider} from "../context"
import { useNavigate } from "react-router-dom";
// const IsLogedIn=({children , ...props})=> {
        // const {CurrentUser} = useContext(UserProvider)

//     if(!CurrentUser){
//   return <Route {...props} >
// {children}
//   </Route>
//  };
//  if(!CurrentUser){
//      return <Redirect to={{ pathname: "/Home" }} />
//  }
// }
const IsLogedOut = ({children})=>{
    const navigate = useNavigate()
    const data = useContext(UserProvider)
    useEffect(()=>{
    console.log("current usser")
    console.log(data)
    if(data.CurrentUser){
  navigate('/chat')
    }
 
}  , [] )
    return <div>{children}</div> 
}

export  { IsLogedOut }
