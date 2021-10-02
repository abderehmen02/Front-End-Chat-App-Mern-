import React from "react";
import Weather from './weather'
import './index.css'
import Cyties from './cyties'
import Nav from './nav'
// import CityWeather from "./weather/CityWeather";
import {
  BrowserRouter as Router,
  Switch,
  useLocation ,
  Route,
  useHistory,
  Link
} from "react-router-dom";

function App() {
    const location = useHistory()
    console.log(location)
    return (
        <div>
            <Router  >
            <div>
<div className='weatherBk' ></div>
<Nav/>
<Switch  >
<Route path='/cyties' >
<Cyties/>
</Route>   
                <Route exact path='/' ><div>this is the default</div></Route>
 <Route path='/weather'  >
<Weather/>
                    </Route>
         

</Switch>
</div>
            </Router>
        </div>
    )
}

export default App
