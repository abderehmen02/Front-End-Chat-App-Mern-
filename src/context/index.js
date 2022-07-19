import React , { useEffect, useState} from 'react';
import {login} from '../servises/user'
export const UserProvider = React.createContext()  ; 

function UserProviderComponent({children}) {

const storageUser = JSON.parse( localStorage.getItem("whatsappUser"))
const [CurrentUser, setCurrentUser] = useState(null)

// writing a  function that can update the user and reload the page at the same time

const UpdateUser = (data , loginData )=>{
    setCurrentUser(data) ;
    loginData &&   localStorage.setItem("whatsappUser" , JSON.stringify(loginData) )
// when the user update his data i should not reload the page
    loginData &&  window.location.reload(false)
}

if(!storageUser || CurrentUser === false ){
    return <UserProvider.Provider value={{CurrentUser: false ,  setCurrentUser , UpdateUser  }} >
{children}
</UserProvider.Provider>;
}
useEffect( async () => {
    if(storageUser){
 const { data , error } = await  login(storageUser);
 if(error){
     console.log(error)
 }
 
 if( data )
     setCurrentUser(data)
}

} , [] )



if(CurrentUser === null){
    return <h1>Loading</h1>
}
// our provider will includes the user so we can access the user in all our pages
// our provider will also include the update user function so we can update the user when ever we need
return <UserProvider.Provider value={{ CurrentUser , setCurrentUser , UpdateUser : UpdateUser }}>
{children}
</UserProvider.Provider>
}

export default UserProviderComponent;