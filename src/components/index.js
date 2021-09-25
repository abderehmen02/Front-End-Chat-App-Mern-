import React from "react";
import Weather from './weather'
import Cyties from './cyties'
// import CityWeather from "./weather/CityWeather";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router  >
                <Switch  >
                  <Route path='/cyties' >
<Cyties/>
</Route>   
                <Route exact path='/' ><div>this is the default</div></Route>
 <Route path='/weather'  >
<Weather/>
                    </Route>
         
{/* <Route path='/City/:Name' >
<CityWeather/>
</Route>  */}
</Switch>
            </Router>
        </div>
    )
}

export default App
