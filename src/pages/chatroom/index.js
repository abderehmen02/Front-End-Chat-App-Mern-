import React , {useEffect , useContext ,  useState } from 'react'
import {useParams} from 'react-router-dom'
import {findOneUser} from '../../servises/user'
import { UserProvider } from '../../context';
import './index.css'
import unknownPerson  from '../../images/unknown.jpg'
import AvatarEditor from 'react-avatar-editor'
import Messages from './messages';
import { sendMessage ,  cancelFriend   , getRoom, acceptRequest, sendRequest, cancelRequest} from '../../servises/rooms' ;
import { io } from "socket.io-client"
import './index.css'
import { Skeleton } from 'react-skeleton-screen'
import 'react-skeleton-screen/build/skeleton.css'


// the header skeleton will be loaded while we are fetching the user

const HeaderSkeleton = ()=>{
  return  <div className='headerChat' > <div className='chatInfo' > <h4>      <Skeleton width="200px" height="25px"  className="avatar avatarSkeleton" /> </h4> <h6>     <Skeleton width="200px" height="17px" /></h6> </div> <div className='avatar avatarSkeleton ' >  </div>  </div>
}

// the chat room skeleton will be loaded when we are fetching the status of the current user with the uer that we are visiting

const ChatRoomContentSkeleton = ()=>{
  return <div className='d-flex flex-column align-items-center  justify-content-center border border-light requestModel model modelSkelelton' ></div>
}


// the chat room content is where we show the messages if the users are friends or we can show the send request button
const ChatRoomContent = (   {props} )=>{
const  { CancelRequestFn , setCurrentMessage , sendMessageFn, currentUserData , userData , CancelFriendFn  , acceptRequestFn  , Room , CurrentMessage , sendRequesFn, setCurrentUserTyping , OtherUserTyping } = props
  if(currentUserData.requestsSent.some(room =>{
    return room.userName === userData.userName
  })){
    return <div className='d-flex flex-column align-items-center  justify-content-center border border-light requestModel model' ><button onClick={CancelRequestFn}  className="requestSentBtn"> request Sent  </button></div> 
  }
 if(currentUserData.requestsReceived.some(user=>{
  return user.userName === userData.userName
})){
return <div className='d-flex flex-column align-items-center  justify-content-center border border-light requestModel model'>
  <h6 className='requestText' > {userData.name} sends you a friend request </h6> 
  <button className='acceptBtn' onClick={acceptRequestFn} > Accept  </button>
</div>
}
if(currentUserData.rooms.some(room =>{
  return room.userName === userData.userName
})){
  return <div   className="d-flex flex-column align-items-center  justify-content-around bg-dark text-ligth  chatRoomComponent" >
<div className='header m-5 text-light border border-primary d-flex align-items-center justify-content-around flex-row ' >
    <AvatarEditor
        className='avatar'
        image={unknownPerson}
        width={40}
        borderRadius={50}
        height={40}
        border={2}
        color={[255, 255, 255, 0.6]} 
        scale={1.2}
      />   
  <div className='userInfo   d-flex flex-column algin-items-center justify-content-center ' ><span className='userDataName' >{userData.userName} </span><small className='userDataName' > {userData.name}</small></div>
  <h3 className='friendReference' > Friend  </h3>
  <button  onClick={CancelFriendFn} className='btn btn-warning btn-sm text-dark rounded-10' > Cancel friendship </button>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center messagesBody ' >
 { Room.messages ? <Messages messages={Room.messages} userName={currentUserData.userName} /> : <div>loading...</div> }
<div className='sendMessageField d-flex align-items-center justify-content-center w-100  ' >
{OtherUserTyping && <div className='typing' > {userData.userName} is typing </div>}
 <input className='messageInput m-2'  type="text"
   value={CurrentMessage}  onChange={(e)=>{    setCurrentMessage(e.target.value)}}   onFocus={()=>{setCurrentUserTyping(true)}} onBlur={()=>{setCurrentUserTyping(false)}}   ></input>
<button className='sendBtn btn btn-primary btn-sm rounded' onClick={sendMessageFn} > Send </button>
</div>
  </div>
  </div>
}
else if (userData){
return (
    <div className='d-flex flex-column align-items-center  justify-content-center border border-light requestModel model' >    <div><button className='sendRequestBtn'  onClick={sendRequesFn} >Send Request </button></div>  
    </div>
  ) }}







function ChatRoom() {
    const currentUser =   useContext(UserProvider).CurrentUser
    const currentUserData = JSON.parse(currentUser.data) ; 
    const {userName} = useParams() ; 
    const [userData, setUserData] = useState(null) ;
    const [OtherUserTyping, setOtherUserTyping] = useState(false) ; 
    const [CurrentUserTyping, setCurrentUserTyping] = useState(false) ; 
    const [Room, setRoom] = useState({})            ;  ; 
    const [CurrentMessage, setCurrentMessage] = useState("") ; 


// functions
    const getUserData = async ()=>{
    const {data , error}  =  await findOneUser(userName) ;
    if(error){
        return console.log(error) 
    }

setUserData(data)
}




// api functions
const sendRequesFn =  async()=>{

const {data , error } = await sendRequest(  { token : currentUser.token  , data:  {name : userData.name ,  userName  : userData.userName}})
if(data){
  window.location.reload(false) ; 
}
if(error){
  console.log(error);
}
}


const acceptRequestFn = async()=>{
  const {data , error } = await acceptRequest(currentUser.token  , { name : userData.name , userName : userData.userName , image : userData.image})
  if(data.firstMember === userData.userName ){
setRoom(data) ;
window.location.reload(true);
  }
  else if(error){
    console.log(error);
  }
}


const CancelFriendFn = async()=>{
  const {data , error } = await cancelFriend(currentUser.token  , { name : userData.name , userName : userData.userName })
  if(data){
    console.log(data);
  }
  else if(error){
    console.log(error);
  }
}

const CancelRequestFn = async()=>{
  const {data , error } = await cancelRequest(currentUser.token , {name : userData.name , userName : userData.userName})
  if(data){

    window.location.reload(false) ; 
  }
  else if(error){
    alert(error)
  }
}


const sendMessageFn = async ()=>{
  const {data , error } = await sendMessage(currentUser.token , {receiver: userData.userName , message: CurrentMessage })
if(data){
    socketEmit(`sendMessage` , userData.userName ,  currentUserData.userName , CurrentMessage , []   )
    socketEmit('sendMessage' , currentUserData.userName , userData.userName , CurrentMessage , [] )
    setCurrentMessage("")
}
else if(error){
  console.log(error);
  }
}



const getRoomFn = async ()=>{
  if(userData){
  const {data , error } = await getRoom(currentUser.token , userData.userName)
  if(data){
    setRoom(data)
  }
  else if(error){
    console.log(error);
  }
  }
}

const updateRoom = async (userName   , message ,likes )=>{

try{ const {data , error } = await getRoom(currentUser.token , userName) ; 
if(data){setRoom(data)}
else alert(error)
    }
     catch(error){
       console.log(error);
     }
}
const socket = io("http://localhost:4000/")
 const socketListener = (listener , cb)=>{
    socket.on(listener, cb)
}

 const socketEmit = (emiter , ...params)=>{
    socket.emit(emiter , ...params )
}

// effects
useEffect(() => {
    getUserData() ;
    socketListener("connect" ,()=>{console.log("you connected to socket")} ) ;
    socketListener(`receiveMessage${currentUserData.userName}` ,(userName , message , likes)=>{updateRoom(userName)} )
 }, [])

useEffect(()=>{
getRoomFn() ;
// when the otheer user start typing
socketListener(`typing${currentUserData.userName}` , ( otherUserName , isTyping)=>{
     
if(userData){   console.log(otherUserName);    console.log(userData.userName ); }
    if( userData && otherUserName === userData.userName){
    setOtherUserTyping(isTyping) } } )
  } , [userData])


// when the user start typing the message
 useEffect(() => {
 
   if(userData){
     socketEmit('typing' , userData.userName , currentUser.token ,  CurrentUserTyping ) ;
   }
 }, [CurrentUserTyping])


// the header of the app is always static 
const Header = ()=>{
  return currentUserData.rooms.every(room =>{
  return room.userName !== userData.userName
}) &&   <div className='headerChat' > <div className='chatInfo' > <h4> {userData.userName} </h4> <h6>{userData.name}</h6> </div> <div className='avatar' style={{backgroundImage : `url(http://localhost:2000/image/${userData.image})`}} ></div>  </div>
}

// the skeleton of the header while fetching the userData




// the content that is inside the chat room depends on the state of the user and the other user    
if(!currentUserData){
  return <h1>loading</h1>
}

  return <div className='ChatComponent' >
  { userData ? <Header/> :  <HeaderSkeleton/> }
  { userData ? <ChatRoomContent props={{CancelRequestFn , setCurrentMessage , sendMessageFn, currentUserData , userData , CancelFriendFn  , acceptRequestFn  , Room , CurrentMessage , sendRequesFn, setCurrentUserTyping , OtherUserTyping }} /> : <ChatRoomContentSkeleton/>  }
  </div>
}
export default ChatRoom