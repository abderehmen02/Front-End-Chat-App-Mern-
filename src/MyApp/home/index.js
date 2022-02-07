import React , {useState}  from 'react'
import './index.css'
import FacebookIcon  from '@material-ui/icons/Facebook' ;
import GithubIcon from "@material-ui/icons/GitHub" ;
import EmailIcon from "@material-ui/icons/Email" ;
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ResumateIcon from "@material-ui/icons/Receipt";
import MyImage from '../../image/myImg.jpeg'
import { motion , useAnimation } from "framer-motion" ;
const technologyAnimation = {
    hover: {
        scale: 1.1 ,
        textShadow: "1px 1px 2px black",
        transition : { duration : 0.5  }
    } , 
    right : {
        x: 500 ,
    } ,
    left : {
        x: -500 , 
    } , 
    toleft: {
        x: 0 ,
        transition: {
            duration: 1,
            ease: "easeOut" ,
        }
    } ,
    toright: {
        x: 20 ,
        transition: {
            duration: 1,
            ease: "easeOut" ,
        }
    }

}
function Home() {
   let animationTime = 0;
   const JavaScriptAnimation = useAnimation() ;
   const ReactAnimation = useAnimation() ;
   const MaterialUiAnimation = useAnimation() ;
   const NodeJsAnimation = useAnimation() ;
   const HtmlAnimation = useAnimation() ;
  const [OpenDropDown , setOpenDropDown] = useState(false)
  const [Name, setName] = useState('abderehmen') ;
//   setInterval(()=>{
// if(animationTime === 0){
//     JavaScriptAnimation.start({
//         scale: [ 1.5 ,  1 ] ,
//         rotate: 360 , 
//         transition : {
//             ease: "easeOut" , 
//             rotate: { delay : 1  } 
//         }
//     }) ; 
    
//     animationTime += 1 ;
// }
// else if(animationTime === 1 ){
//      ReactAnimation.start({
//         scale: [ 1.5 ,  1 ] ,
//                 rotate: 360 , 
//         transition : {
//             ease: "easeOut" , 
//             rotate: { delay : 1} 
//         }
//     }) ; 
//     animationTime += 1 ;
// }
// else if(animationTime === 2 ){
//      MaterialUiAnimation.start({
//         scale: [1 ,  1.5  , 1 ] ,
//                 rotate: 360 , 
//         transition : {
//             ease: "easeOut" , 
//             rotate: { delay : 1} 
//         }
//     }) ; 
//     animationTime += 1 ;
// }
// else if(animationTime === 3 ){
//      NodeJsAnimation.start({
//         scale: [1 , 1.5 , 1 ] ,
//                 rotate: 360 , 
//         transition : {
//             ease: "easeOut" , 
//             rotate: { delay : 1} 
//         }
//     }) ; 
//     animationTime += 1 ;
// }
// else if(animationTime === 4 ){
//      HtmlAnimation.start({
//         scale: [ 0.2 , 1.5 , 1 ] ,
//                 rotate: 360 , 
//         transition : {
//             ease: "easeOut" , 
//             rotate: { delay : 1} 
//         }
//     }) ; 
//     animationTime = 0;
// }

//   } , 5000 )
      return (
          <div>
<div className='homeComponent' >
<div className='bk' > </div>
<h2 className='titel desktop ' > <span className='welcome' >  Web Developer </span>  <div className='myNameDiv' >  <span className='myNameSpan' >  Full Stack Developer  </span> </div> </h2> 
<h2 className='titelMobile mobile' ><motion.div variants={technologyAnimation} initial="left" animate="toright" > Web Developer </motion.div> <motion.div className='welcomeMobile' variants={technologyAnimation} initial="right" animate="toleft" > Full Stack Developer  </motion.div> </h2>
<div class="SubTitle">
 <p className='SubtitleText' >  I Build And Design User Interfaces Ussing React Js</p> </div>
<div className='Page desktop'> 
<div className="lists HomeTechnologies " >
<motion.div  style={{color: "yellow"}} variants={technologyAnimation} whileHover="defaultAnimation" animate={JavaScriptAnimation}   > JavaScript </motion.div>
<motion.div animate={ReactAnimation} variants={technologyAnimation} whileHover="defaultAnimation"  style={{color: "blue"}} >  React Js  </motion.div>
<motion.div animate={MaterialUiAnimation} variants={technologyAnimation} whileHover="defaultAnimation" style={{color: "aqua"}} > Material Ui  </motion.div>
<motion.div animate={NodeJsAnimation} style={{color: "orange"}} variants={technologyAnimation} whileHover="defaultAnimation" > Node Js  </motion.div>
<motion.div animate={HtmlAnimation} style={{color: "red"}} variants={technologyAnimation} whileHover="defaultAnimation" > Html / Css  </motion.div>
</div>
<div className='myImg' style={{backgroundImage: `url(${MyImage})`}} > </div>
<div className="lists" >
<div onClick={()=>{window.open("https://mail.google.com/mail/u/0/#search/abderehmen02%40gmail.com?compose=new")}} >  Gmail  <div> <EmailIcon/> </div> </div>
<div onClick={()=>{window.open("https://www.facebook.com/profile.php?id=100076193304397")}} > Facebook <FacebookIcon/> </div>
<div onClick={()=>{window.open("https://www.linkedin.com/in/abde-rehmen-244141226/")}} > LinkedIn <LinkedInIcon/> </div>
<div onClick={()=>{window.open("https://github.com/abderehmen02")}} > Github <GithubIcon/> </div>
<div onClick={()=>{window.open("https://drive.google.com/file/d/1IVmhPR7q5OmbNP-I6vVcAvb6t-N7kmGz/view")}} > Resumate <ResumateIcon/> </div>
</div>
</div>   
<div className='pageMobile mobile' >
<div className="AllList" >
    <div className="lists HomeTechnologies " >
<motion.div  style={{color: "yellow"}} variants={technologyAnimation} whileHover="defaultAnimation" animate={JavaScriptAnimation}   > JavaScript </motion.div>
<motion.div animate={ReactAnimation} variants={technologyAnimation} whileHover="defaultAnimation"  style={{color: "blue"}} >  React Js  </motion.div>
<motion.div animate={MaterialUiAnimation} variants={technologyAnimation} whileHover="defaultAnimation" style={{color: "aqua"}} > Material Ui  </motion.div>
<motion.div animate={NodeJsAnimation} style={{color: "orange"}} variants={technologyAnimation} whileHover="defaultAnimation" > Node Js  </motion.div>
<motion.div animate={HtmlAnimation} style={{color: "red"}} variants={technologyAnimation} whileHover="defaultAnimation" > Html / Css  </motion.div>
</div>
<div className="lists" >
<div onClick={()=>{window.open("https://mail.google.com/mail/u/0/#search/abderehmen02%40gmail.com?compose=new")}} >  Gmail  <div> <EmailIcon/> </div> </div>
<div onClick={()=>{window.open("https://www.facebook.com/profile.php?id=100076193304397")}} > Facebook <FacebookIcon/> </div>
<div onClick={()=>{window.open("https://www.linkedin.com/in/abde-rehmen-244141226/")}} > LinkedIn <LinkedInIcon/> </div>
<div onClick={()=>{window.open("https://github.com/abderehmen02")}} > Github <GithubIcon/> </div>
<div onClick={()=>{window.open("https://drive.google.com/file/d/1IVmhPR7q5OmbNP-I6vVcAvb6t-N7kmGz/view")}} > Resumate <ResumateIcon/> </div>
</div>
</div>
<div className='myImg' > </div>
</div>     
</div>
<div className='QuickResume' >
    <h2> Hi There , I am AbdeRehmen , Nice to meet you !! </h2>
    <ul>
    <li> i began my jurney as a web developer in 2020 </li> 
    <li> i have developed a lot't of my personal projects  </li>
    <li> i used react to develop all my personal projects </li>
    <li> i engage a lot's of technologies with react js to make a better results </li>
    <li> my goal is to help people solve their technecal problems related to the web development field</li>
    <li> if you have any note , please contact me on my email above 'abderehmen02@gmail.com'  </li>
    </ul>
</div>
</div>
    )
}

export default Home
