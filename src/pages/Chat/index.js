import React , {useState , useContext , useEffect } from 'react'
import { SearchUser , SearchUserInterests } from '../../servises/user'
import UsersSearched from "./usersSearched"
import Header from './header'
import { UserProvider  } from '../../context'
import {useNavigate} from "react-router-dom"
import UsersWithSameInterestsComponent from "./usersSameInterests"
import Rooms from "./rooms"
import Requests from './requests'
import './index.css'
function Chat() {
const MyContext = useContext(UserProvider)
const CurrentUserData = JSON.parse(MyContext.CurrentUser.data)
const [usersArray, setUsersArray] = useState([])  ; 
const navigate = useNavigate()
const [UserWithSameInterests, setUserWithSameInterests] = useState([])
//functions

const searchUserWithSameInterests = async ()=>{
  const {error , data} = await SearchUserInterests( JSON.parse( MyContext.CurrentUser.data).interests.join(',')) ;
  if(error) {console.log(error);
  return}  ;
  if(data){
setUserWithSameInterests(data.usersWithSameInterests)
 }
}


const logout =()=>{
  MyContext.setCurrentUser(null) ; 
  localStorage.removeItem("whatsappUser")
  navigate('/')
  window.location.reload(false);
}

//effects 
useEffect(() => {
  searchUserWithSameInterests()
}, [])


  return (
  <div className='d-flex flex-column text-light align-items-center justify-content-center bg-dark chatComponent ' >
<Header userName={CurrentUserData.userName} image={CurrentUserData.image} />
   <Rooms/>
  <UsersSearched usersArray={usersArray} />
  <Requests requestsArray={CurrentUserData.requestsReceived} />
  <UsersWithSameInterestsComponent props={{UserWithSameInterests : UserWithSameInterests}} />
  <button className=' btn btn-info rounded-5 m-5' onClick={logout} > log out </button>
 </div> )
}

export default Chat