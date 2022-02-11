import React from 'react';
import {IsLogedOut} from '../helpers/userCheck'
function Home() {
  return <IsLogedOut>
    <h1>this is the home compenent</h1>
  </IsLogedOut>
  ;
}

export default Home;
