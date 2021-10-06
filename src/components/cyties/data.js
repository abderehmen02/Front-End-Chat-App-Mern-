import axios from 'axios' ;
const searchImageUrl = 'https://serpapi.com/search.json?q=sig&tbm=isch&ijn=0&api_key=f4a30457fe81209566118cdfba505a5f4d70813f8d523cfe58b25e8a507bdb8c'
const searchImaageUrl = 'https://serpapi.com/search.json?q=sig&tbm=isch&ijn=0&api_key=f4a30457fe81209566118cdfba505a5f4d70813f8d523cfe58b25e8a507bdb8c'
const anynomous = ()=>{
var options = {
  method: 'GET',
  url: 'https://bing-image-search1.p.rapidapi.com/images/details',
  params: {insightsToken: '<REQUIRED>'},
  headers: {
    'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
    'x-rapidapi-key': '5c2c8979e5msha0f9182d3bae9e0p107de4jsnfe57e814a2ab'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
export default async ( lat='51.509865' , lon='-0.118092' , priceMin= '0' , priceMax='10000' ) =>{

var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby',
  params: {
    latitude: lat,
    currency: 'USD',
    longitude: lon ,
    checkout_date: '2022-03-27',
    sort_order: 'STAR_RATING_HIGHEST_FIRST',
    checkin_date: '2022-03-26',
    adults_number: '1',
    locale: 'en_US',
    guest_rating_min: '4',
    star_rating_ids: '3,4,5',
    children_ages: '4,0,15',
    page_number: '1',
    price_min: priceMin,
    accommodation_ids: '20,8,15,5,1',
    theme_ids: '14,27,25',
    price_max: priceMax,
    amenity_ids: '527,2063'
  },
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '5c2c8979e5msha0f9182d3bae9e0p107de4jsnfe57e814a2ab'
  }
};
const res = await  axios.request(options)
return res.data
} 
export const HotelDetails = async (geoid)=>{
  var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews',
  params: {locale: 'en_US', hotel_id: geoid , page_number: '1'},
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '5c2c8979e5msha0f9182d3bae9e0p107de4jsnfe57e814a2ab'
  }
};

const response = await axios.request(options)
return response.data
}