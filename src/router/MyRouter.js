import React  from 'react';
import Home from '../pages/Home'
import Chat from '../pages/Chat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProviderComponent from  "../context"
import { IsLogedIn , IsLogedOut } from "../helpers/userCheck"
import SignIn from "../pages/signIn"
function MyRouter() {
  return <UserProviderComponent>
  <Router>
      <Routes>
{/* <IsLogedOut path="/home" > <Home/> </IsLogedOut> */}
<Route path='/home' element={<Home/> } ></Route>
<Route path='/signIn' element={<SignIn/>} >  </Route>
<Route path='/chat' element={<Chat/>} >  </Route>  
      </Routes>
  </Router>
  </UserProviderComponent>;
}

export default MyRouter;
