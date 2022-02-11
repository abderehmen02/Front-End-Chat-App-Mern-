import React , {useState , useContext } from 'react';
import { IsLogedOut } from '../helpers/userCheck';
import {login} from '../servises/user'
import {UserProvider} from '../context'
function   signIn() {
    console.log("sign in")
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
const {setCurrentUser} = useContext(UserProvider)
console.log(setCurrentUser)
const LoginFunction = async ()=>{
try { const data =  await  login({userName , password })
 setCurrentUser(data) }
 catch(error){
     console.log(error)
 }
}
  return <IsLogedOut>
      <div>
      <h1>Sign In</h1>
          <input value={userName} onChange={(e)=>{setuserName(e.target.value)}} ></input>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} ></input>
          <button onClick={LoginFunction} >Login</button>
      </div>
  </IsLogedOut>;
}

export default signIn;
