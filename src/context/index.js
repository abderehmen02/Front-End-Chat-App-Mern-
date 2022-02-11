import React , { useEffect, useState} from 'react';
import {login} from '../servises/user'
export const UserProvider = React.createContext()  ; 

function UserProviderComponent({children}) {
const storageUser = JSON.parse( localStorage.getItem("whatsappUser"))
const [CurrentUser, setCurrentUser] = useState(null)
if(!storageUser || CurrentUser === false ){
    return <UserProvider.Provider value={{CurrentUser: false ,  setCurrentUser   }} >
{children}
</UserProvider.Provider>;
}
useEffect( async () => {
    if(storageUser){
 const { ResponceData , error } = await  login(storageUser);
 if(error){
     console.log(error)
     setCurrentUser(false)
 }
 if(ResponceData.type === "success")
     setCurrentUser(ResponceData)
}

}, [] )
if(CurrentUser === null){
    return <h1>Loading</h1>
}
return <UserProvider.Provider value={{CurrentUser : CurrentUser , setCurrentUser}}>
{children}
</UserProvider.Provider>
}

export default UserProviderComponent;