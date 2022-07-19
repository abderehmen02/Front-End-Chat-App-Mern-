import React  from 'react';
import Home from '../pages/Home'
import Chat from '../pages/Chat'
import SignUp from "../pages/SignUp"
import ChatRoom from '../pages/chatroom'
import Settings from '../pages/settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProviderComponent from  "../context"
import { IsLogedIn , IsLogedOut } from "../helpers/userCheck"
import SignIn from "../pages/signIn"
function MyRouter() {
  
  return <UserProviderComponent>
  <Router>
<Routes>
{/* <IsLogedOut path="/home" > <Home/> </IsLogedOut> */}
<Route path='/' element={ <IsLogedOut>  <Home/> </IsLogedOut> } ></Route>
<Route path='/signIn' element={ <IsLogedOut> <SignIn/> </IsLogedOut> } >  </Route>
<Route path='/chat' element={ <IsLogedIn> <Chat/></IsLogedIn>} >  </Route> 
<Route path='/signUp'  element={ <IsLogedOut> <SignUp/> </IsLogedOut> } >  </Route> 
<Route path='/chat/:userName' element={<IsLogedIn> <ChatRoom/> </IsLogedIn>  } ></Route>
<Route path='/settings' element={<IsLogedIn> <Settings/> </IsLogedIn>} ></Route>
      </Routes>
  </Router>
  </UserProviderComponent>;
}

export default MyRouter;
