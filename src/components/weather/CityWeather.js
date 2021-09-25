import React , {useEffect , useState } from 'react'
import {useParams} from 'react-router-dom'
import fetchWeather from './data'

function CityWeather() {
    console.log(Cyties)
    console.log(firebase)
    const [CityData, setCityData] = useState({})
    const  params  = useParams()
    const CityName = params.Name
useEffect(() => {
    fetchWeather(CityName).then(data =>{
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })
}, [])

    return (
        <div>
            this the the weatehr detail
{CityName}         
        </div>
    )
}

export default CityWeather
