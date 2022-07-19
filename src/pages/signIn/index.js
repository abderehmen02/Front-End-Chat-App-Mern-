import React , {useState , useEffect, useContext } from 'react';
import { IsLogedOut } from '../../helpers/userCheck';
import {login} from '../../servises/user'
import {UserProvider} from '../../context'
import './index.css'
function   signIn() {
const [userName, setuserName] = useState("");
const [passWord, setPassWord] = useState("");
const [Error, setError] = useState("")
const {UpdateUser } = useContext(UserProvider)
const LoginFunction = async ()=>{
  try{
const {data , error}=  await  login({userName: userName , passWord: passWord })
if(data ){
  // updating the data when the user loged in
  UpdateUser(data , {userName: userName , passWord: passWord } )
  }
else if(error){
  console.log(error);
switch(error){
 case  'authentification error' : { setError("password")  }; break ;
 case   'can not find user' : {setError("userName") ; console.log("this is running"); } break;
 default : console.log(error);
}
}
}
catch(err){
  console.log(err)
}
}

  return <IsLogedOut>
      <div className='d-flex flex-column align-items-center justify-content-around bg-dark  signInComponent' >
      <h1 className='text-primary signInText' >Sign In</h1>  
      <div> 
  <div class="form-group">
    <label >Email address</label>
    <input type="text" value={userName} onChange={e=>{setuserName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
 <small id="emailHelp" className="form-text text-danger">{Error === "userName" && "can't found this user" }</small> 
  </div> 
  <div className="form-group">
    <label >Password</label>
    <input vlaue={passWord} onChange={e=>{setPassWord(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
 <small id="emailHelp"  className="form-text  text-danger">{Error === "password" && "incorect password" } </small> 
<button onClick={LoginFunction}  className="form-control btn btn-lg  px-10 btn-primary mt-5 "  > Log In </button>
  </div>
</div>
 </div>
</IsLogedOut>;
}

export default signIn;
