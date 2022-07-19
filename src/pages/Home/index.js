import React, { useEffect , useContext } from 'react';
import {login} from '../../servises/user'
// importing all the images that will be in the background or our home page
import image0  from '../../images/chat0.jpg'
import image1  from '../../images/chat1.jpg' 
import image2  from '../../images/chat2.jpg'  
import image3  from '../../images/chat3.jpg'
import image4  from '../../images/chat4.jpg'
import image5  from '../../images/chat5.jpg'
import image6  from '../../images/chat6.jpg'
import image7  from '../../images/chat7.jpg'
import image8  from '../../images/chat8.jpg'
import image9  from '../../images/chat9.jpg'
import image10 from '../../images/chat10.jpg'
import {IsLogedOut} from '../../helpers/userCheck' ;
import {useNavigate} from "react-router-dom" ;
import { motion , useAnimation } from 'framer-motion'
import ReactTypingEffect from 'react-typing-effect';
import './index.css'  
import {UserProvider} from '../../context'

const animationPrefrences  = {
  initialLoadPage : {
x: 2000 
  } ,
  animateLoadPage : {
    x: 0 ,
    transition: {
      type : "spring" ,
      duration: 0.5,
      delay: 0 
    }
  }
}
const images = [image0  , image1  , image2  , image3  , image4  , image5  , image6  , image7  , image8  , image9  , image10   ]
function Home() {
const {UpdateUser } = useContext(UserProvider)
  const changeBackground = useAnimation()
  const navigate = useNavigate()

// updating the background image in the home page every 2 seconds

setInterval(()=>{
changeBackground.start({
backgroundImage: `url(${images[Math.floor(Math.random() * images.length - 1)]})`
})
} , 20000 )

// setting the backgorund when the page loaded 
useEffect(() => {
changeBackground.start({
backgroundImage: `url(${images[Math.floor(Math.random() * images.length - 1)]})`
})
  
}, [])



// function to log in as a guest
const SignInAsGuest = async ()=>{
try{
const {data , error}=  await  login({userName: 'guest111' , passWord: 'guest' })
if(data ){
  // updating the data when the user loged in
  UpdateUser(data , {userName: 'guest111', passWord: 'guest' } )
}
else if(error){
  console.log(error);
}
}
catch(err){
  console.log(err)
}
}

return <IsLogedOut>
<motion.div   variants={animationPrefrences} initial="initialLoadPage" animate="animateLoadPage" className="d-flex  flex-column justify-content-around  align-items-center  homeComponent" >
<motion.div animate={changeBackground} className='background'  ></motion.div>
<div className='overlay' ></div>
<div  className='typingEffect' >
 <ReactTypingEffect
        text={["Welcome to chaTIn", "build relationships" , "Find your interests" ]}
        eraseSpeed={0}
        speed={50}
        eraseDelay={10000}
        displayTextRenderer={(text , index)=>{
          return <div key={index} className="text-center text-capitalize font-weight-bold font-italic text-light welcomeText" > {text} </div>
        }}
      /> </div>

<div class="d-flex flex-sm-row flex-column align-items-center buttons " >
    <button className='btn border border-info m-5  btn-primary  '  onClick={()=>{navigate("/signIn")}} > Sign In </button>
    <button className='btn border border-warning m-5  btn-danger ' onClick={()=>{navigate("/signUp")}} > Sign up </button>
    <button className='btn border border-info m-5  btn-primary  '  onClick={SignInAsGuest} > Sing In As A guest </button>
  </div>
</motion.div>
  </IsLogedOut>
  ;
}

export default Home;
