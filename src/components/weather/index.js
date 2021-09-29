import React , {useState , useEffect , useCallback, useRef}from 'react'
import fetchWeather from './data'
import { db } from '../../firebase';
import './index.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
let temperaryOptions = []
function index() {
const [CityName, setCityName] = useState('')
const [Options, setOptions] = useState([])
const [CityNameWeather, setCityNameWeather] = useState(null)
const [Details, setDetails] = useState(false)
const CityInput = useRef(null)
useEffect(() => {
    CityInput.current.focus()
}, [])
const CityNameChanged = (e) =>{
setCityName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)) 
db.collection('cyties').where('name','>',  e.target.value ).get().then(snapShot =>{
             temperaryOptions = [] 
    snapShot.forEach(doc =>{
        temperaryOptions.push(doc.data())
setOptions(temperaryOptions)
console.log(Options)
    })
})
fetchWeather(e.target.value).then(data =>{
    if(data.weather[0].main ){
    setCityNameWeather(data) 
    db.collection('cyties').doc(e.target.value).set({
      name: e.target.value
    })
}
}).catch(err =>{
    setCityNameWeather(null)
})
}
    return (
     <div className='weatherComponent'>
<div> this is the weather page</div>
<input ref={CityInput} value={CityName} onChange={(event) => {CityNameChanged(event)}} ></input> 
<div>{
    CityNameWeather?
    <div>
    tempereture: { Math.round(  eval( (CityNameWeather.main.temp - 273 ) ) ) }
    weather: {CityNameWeather.weather[0].main }
    <button onClick={()=>{setDetails('wind')}} >See More ...</button>
    </div>
    
     : <div> Loading...</div> }
</div>
<div>
    {Details && <div> 
    <nav><span onClick={()=>{setDetails('wind')}} >wind</span><span  onClick={()=>{setDetails('city')}}  >City</span><span onClick={()=>{setDetails('temp')}} >temperature</span><span onClick={()=>{setDetails('others')}} >others</span></nav>
    {Details === 'wind' && (<div>
    degree:  {CityNameWeather.wind.deg}
    speed: {CityNameWeather.wind.speed}
    </div> )}
    {Details === 'city' && <div>
        Grand Level : {CityNameWeather.main.grnd_level}
        Sea Level :{CityNameWeather.main.sea_level}
        Latitude : {CityNameWeather.coord.lat}
        Longitude: { CityNameWeather.coord.lon }
        Country : {CityNameWeather.sys.country} 
    </div> }
{Details === 'temp' && <div>
    Temperature : { Math.round( eval( CityNameWeather.main.temp - 273 )) }
    Maximum Temperature : {  Math.round( eval (CityNameWeather.main.temp_max  - 273))}
    Minimum Temperature : {  Math.round( eval (CityNameWeather.main.temp_min -273 ))}
</div>}
{Details === 'others' && <div>
Humidity: {CityNameWeather.main.humidity}
pressure: {CityNameWeather.main.pressure}
Weather Info : {CityNameWeather.weather[0].description}
</div>
}  
    </div>}
</div>
        </div>)
}

export default index