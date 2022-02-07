import React from 'react'
import MemeryGameLogo from '../../image/memoryGameLogo.png'
import WouldYouRatherLogo from '../../image/wouldYouRatherLogo.png'
import CoffeShopLogo from '../../image/CoffeShopLogo.jpg'
import  WeatherAppLogo from '../../image/WeatherAppIcon.jpg'
import SocailAppLogo from '../../image/SocialAppIcon.png'
import './index.css'
import {InView} from 'react-intersection-observer';
import {motion , useAnimation } from 'framer-motion'
function Index() { 

const myProjects = [{name: 'Would You Rather'  , live: 'https://fervent-williams-901074.netlify.app/',   descreption: 'a game that will test your brain  if you are thinking the same as other persons ; each time you choosed  the most choosed answer you got 1 score and if you did not choose the most selected answer you will not get any score' , image: WouldYouRatherLogo , link: 'https://fervent-williams-901074.netlify.app/?fbclid=IwAR3WwzJupwTFy_UCmzUUZkCf-AxWJBOl6spZwnfKqJXMVty00bSUI4-9Xys'  , tecknologies: 'react js , animations ,html  , css , javascript , firebase '} ,
{name: 'memery game' ,live: 'https://upbeat-jang-321498.netlify.app/',   github: 'https://github.com/abderehmen02/Memery-Game', descreption : ' a memory game that will test your memery ; you can choose between various levels ( easy , intermediate , hard ) , you can open an eye if you did not have any answer and you will get your score according to the time you took to finish the game ' , link  : 'https://upbeat-jang-321498.netlify.app/?fbclid=IwAR2HgPtRxKUnV8S_dMntxSaX9GxZVLK0G8MeOsbcN79D2XxDD4l81SAIBTI' , image: MemeryGameLogo , tecknologies : 'react js , html , css , javascript'} , 
{name:  'coffe shop', live: 'https://trusting-meninsky-c6e7d4.netlify.app/' ,  github: 'https://github.com/abderehmen02/Coffe-Shop'  ,   descreption: 'an eccomerce website that you can add a coffe products to your cards and delete them and contact the buisness manager ...ext' , image: CoffeShopLogo , link: 'https://trusting-meninsky-c6e7d4.netlify.app/servisses.html'  , tecknologies: 'html , css , javascript' } , 
{name: 'Social medea app'  ,  github: 'https://github.com/abderehmen02/Chat-X-' ,   descreption: ' a social medea app that you can follow other pepoles and post an event and like other people post and put the comment you can alse search for other people profiles ...ext' , image: SocailAppLogo, live: 'https://brave-cray-e15007.netlify.app/'  , tecknologies: 'jsx(html) , react js , framer motion , firebase authentication  firebase , firestore  , react-framer motion '     }, 
{name: 'Traveling Webapp', live: 'https://cranky-lovelace-71dbe7.netlify.app/' ,  like: 'https://cranky-lovelace-71dbe7.netlify.app/' ,  github: 'https://github.com/abderehmen02/complete-weather' , descreption : 'ussing this app you can explore the weather for any city in the world ; you can alse explore the world map and you can search for hotels in any place ussing the map and you will determine the min price and the max price ' , image: WeatherAppLogo ,  tecknologies: 'json , api fetch  react js , react sckeleton , react maps,javascript , html css' }
 ]
const ProjectComponent = ( {info})=>{
const {name , descreption , github , live , tecknologies , image } = info
const dragProgect = useAnimation()
const taggleAnimation = (inview)=>{
if(inview){
    dragProgect.start({
x: 0 , 
y: 0 , 
scale: 1 , 
      transition: {    duration: 1  , bounce: 0.5  ,   }    
})
}

    else    dragProgect.start({
        x: 200  , y: 200 , scale: 0
    })
}
return <InView onChange={taggleAnimation} >
<motion.div  onClick={()=>{console.log(window.scrollY)}} animate={dragProgect} className='projectComponent' >
    <h2>{name}</h2>
    <div className='progectdesc' > {descreption} </div>
    <div className='progectTechnologies' > <div className='title' > technologies i have used :  </div>  <div className='tecknologiesList' > {tecknologies} </div> </div>
<div className='footer' >
<div className='links' >
<a href={live} > Try It live </a>
<a href={github} > See Git Repository  </a></div>
<div className='ProgectLogo' style={{backgroundImage: `url(${image})`}} ></div>
</div>
</motion.div></InView>
}
    return (
        <div className='projectsComponent' >
            <h1>My Projects</h1>
            <p> i have worked on several big progect by my self ussing diffrent technologies  ; so i got a lot's of experience while working on them  ; and here is some of my simple projects : </p>
<div className='Projects' >
   {myProjects.map(item =>{
       return <ProjectComponent info={item} />
   })} 
</div>
        </div>
    )
}
export default Index