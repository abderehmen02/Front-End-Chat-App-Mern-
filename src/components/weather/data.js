
export default async function fetchWeather(City){
    const API_KEY = 'bfebe81ab1ad3d17fe6fd3ea883ecedb'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)
    const data = await response.json() 
    return data
}