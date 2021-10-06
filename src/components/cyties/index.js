import React , {useState , useEffect } from 'react'
import './index.css'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GoogleMapReact from 'google-map-react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import data , {HotelDetails} from './data'
function City() {
const [Hotels, setHotels] = useState([])
const showPosition = (position) =>{
    data(position.coords.latitude , position.coords.longitude).then(res =>{
    setHotels(res.searchResults.results )
    })
}
const PositionError = (err)=>{
    data().then(res =>{
        console.log(res)
        setHotels(res.searchResults.results)
    })
}

const getHotels = ()=>{

data().then(res =>{
    console.log(res)
        setHotels(res.searchResults.results)
    }).catch(err =>{
        console.error(err)
    })

}
const myLocation = ()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition , PositionError );
  } else {
     console.log('no location')
}
}
const RatingComponent =({rate})=>{
console.log(StarBorderIcon)
const stars = [ 1 , 2 , 3 , 4 , 5]
return <div> <h1> {rate} </h1>
{ stars.map(item => {return <div> {item <= Math.floor(rate) ? <StarIcon/> :(  rate > item - 1 && Math.floor(rate) ==  item -1 ? <StarHalfIcon/> : <StarBorderIcon/> ) }  </div>} ) }
</div>
}
const HotelsComponent = ()=>{
    if(Hotels){
        console.log(Hotels)
return <div  className='hotelComponent' >  {      Hotels.map(item => <div>
<div> {item.messaging.name} </div>
<div>{item.address.countryName}</div>
<div> {item.address.locality}</div>
<div>{item.address.streetAddress}</div> 
<img width='50px' height='50px' src={item.optimizedThumbUrls.srpDesktop} ></img>
<div> {item.ratePlan.price.current}</div>
<RatingComponent rate={item.guestReviews.rating} />
        </div> ) }
    </div> 
}
else return <div> loading</div>
}
useEffect(() => {
   getHotels() 
}, [])
console.log(Hotels)
return (
<div className='CityComponent' >
<h1>Hotels </h1>

<HotelsComponent/>
</div>
    )
}

export default City
