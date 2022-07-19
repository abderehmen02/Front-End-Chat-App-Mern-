import React , {useContext , useState } from 'react'
import {UserProvider} from '../../context'
import { updateProfile  , uploadProfileImage } from '../../servises/user'
import './index.css'; 
import Skeleton from 'react-skeleton'           ; 
import {motion , useAnimation} from 'framer-motion'
function Settings() {

//constants

const sign = useAnimation()  ; 
const updatedFrame = useAnimation() ; 
const userContext = useContext(UserProvider) ;
const currentUserData = JSON.parse(userContext.CurrentUser.data)
const [profileImage, setProfileImage] = useState(null)
const [name, setName] = useState(currentUserData.name) ;
const [userName, setUserName] = useState(currentUserData.userName) ;
const [newPassword, setNewPassword] = useState("")
const [rewriteNewPassword, setRewriteNewPassword] = useState("")
const [oldPassword, setOldPassword] = useState("") ;
const [myError, setmyError] = useState("") ; 
// function set to set the new profile image
const handleFile =  (event)=>{
  if(event.target.files[0]){
    setProfileImage(event.target.files[0])
  }
}


// funtion to save the update
const save = async ()=>{
  // if the user set any new image we want to update it in our database ; if not we don' t want to update it
  if(profileImage){
    const {data   , error} = await uploadProfileImage({token : userContext.CurrentUser.token , image: profileImage })
    if(data ){
    updatedFrame.start({
  x: [-1000 ,  0 ,  0 , -1000], 
  transition: {duration : 4}
})

    const newCurrentUserData = {...JSON.parse(userContext.CurrentUser.data) , image: data.image  }
    userContext.setCurrentUser({...userContext.CurrentUser , data : JSON.stringify( newCurrentUserData ) } )
    }
    if(error){
    setmyError(error)   
    }
  }
 // if the user set a new passwords we want to make sure they are equals 
  if(newPassword === rewriteNewPassword){
// setting the body that we are going to send to our backend and if there are any propercy that the user have updated , we want to add that property to the body that we are going to send it to the backend
const body = {passWord : oldPassword  }
// if the user set a new name we want to send that name to our backend api so we have to add that name to our body object
if(name !== currentUserData.name){
  body.name= name 
}

if(userName !== currentUserData.userName ){
body.userName = userName
}
if(newPassword !== '' && newPassword.length >  4 ){
 body.newPassword = newPassword 
}
// if our body contains more than one property that means that the user has set at least one property  so we want to send the body to our backend; 
if(Object.keys(body).length > 1){
try{
const {data  , error} = await updateProfile({  token : userContext.CurrentUser.token ,data:  body })
if(error){
  error !== "authontification error" && alert(error)   ;
  error === "authontification error" && sign.start({
  scale: 2 , 
  color: "red"
  })
  setmyError(error)
}
if(data){
console.log(data)  
userContext.UpdateUser({...userContext , data :JSON.stringify(data) } ,   {userName  : userName || currentUserData.userName  , passWord : newPassword || oldPassword } )
updatedFrame.start({
  x: [-1000 ,  0 ,  0 , -1000], 
  transition: {duration : 4}
})
}
else if(!error && !data) alert('there is no responce from the server , please check your internet connection ')
}
catch(err){
  console.log(err)

}}
}
else{
  setmyError({
    type: 'newPassword' ,
    error : 'two passwords does not match ' 
  })
  alert("the two passwords doesn't match")
}
}
  return (
    <div className='settingsComponent' >
  <div className='settingsHeader' >  <div>    <label className='fileLabel' for='fileInput' style={{backgroundImage:  `url(http://localhost:2000/image/${currentUserData.image})`}} ><div className='overlayProfileImg' ></div> <span className='edit' >Edit</span>  </label>  <input name="file" id='fileInput' type="file" onChange={handleFile}  /> </div> 
 <h2>Settings</h2></div>
 <motion.div initial={{x: -1000}} className='updatedFrame' animate={updatedFrame} > Updated  </motion.div>
   <div     ></div>
  <div className='settingsForm' >
<div>    <label className='settingsLabel' >userName</label>  <input className="settingsInput" type='text' value={userName} onChange={(e)=>{setUserName(e.target.value)}}  /> <span className='notRquired' ></span>  </div>   
<div>    <label className='settingsLabel' >name</label>      <input className="settingsInput" type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}  />    <span className='notRquired' ></span>  </div>
<div>    <label className='settingsLabel' >NewPassword</label><input className="settingsInput" value={newPassword} type="text" onChange={(e)=>{setNewPassword(e.target.value)}}  /> <span className='notRquired' ></span>  </div> 
<div  >    <label className='settingsLabel' >rewrite ew Password</label>       <input className="settingsInput" type='text' value={rewriteNewPassword} onChange={(e)=>{setRewriteNewPassword(e.target.value)}}  ></input> <span className='notRquired' ></span> </div>
<div  >   <label className='settingsLabel' > passWord</label> <div className='mobileBreaker' > {myError ===  'authontification error' ? <motion.span animate={sign} transition={{delay : 0.5 }} className='requiredSiglaled'> incorrect password</motion.span> : <span className='required'>required</span> }  <input className="settingsInput" value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}} ></input> </div> </div> 
 <button onClick={save} > save </button>
 </div>
    </div>
  )
}

export default Settings