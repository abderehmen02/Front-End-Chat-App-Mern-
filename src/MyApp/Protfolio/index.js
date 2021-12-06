import React , {useEffect} from 'react'
import {motion , useAnimation } from 'framer-motion'
import ReactLogo from '../../image/react.png'
import CssLogo from '../../image/css.png'
import HtmlLogo from '../../image/html.png'
import firebaseLogo from '../../image/firebase.jpg'
import javascriptLogo from '../../image/Javascript.png'
import NodeLogo from '../../image/nodeJs.png'
import MaterialLogo from '../../image/materialUi.png'
import './index.css'
import {InView} from 'react-intersection-observer';

const Skills = [{title:'React js' , image: ReactLogo , descreption: ' about 2 years experience with react , react components , react hooks , redux ...ext '   },{title: 'javascript' , image: javascriptLogo , descreption: 'about 3 years of experience with javascript ; json , api , data structures , algorithms ...ext ' },{title: 'html', image: HtmlLogo, descreption: 'about 3 years of experience with html compined with css '  },{title: 'css' , image: CssLogo , descreption: '3 years of experience with css ,  flex box , grid box  , ui design , ux design , animation , responsive web' },{title: ' Nodejs ', image: NodeLogo , descreption: '1 year experience with node js , servers , events , ...ext' },{title: 'firebase', image:firebaseLogo , descreption: 'i use firebase as a database for my progect so i get experience with cloud firestore and firebase authentication ...ext ' },{title: 'Material Ui' , image: MaterialLogo , descreption: ' i combine the material ui components and icons to build a better design and  provide a better user experience'  },]





const Skill = ( {title , descreption , image , index } )=>{
const animation = useAnimation()
const taggleAnimation = (inview )=>{
    console.log(inview)
    if(inview){
        animation.start({
x: 0 ,  
       transition : {type: 'spring' , duration: 1 , delay: 0.2 }    
        })
    }
else    animation.start({
x: -500 ,
    })
}
    if( Math.floor( Number( index / 2)) == Number( index / 2 )){
 return <InView onChange={taggleAnimation} >
  <motion.div onClick={()=>{console.log(window.scrollY)}} animate={animation} className='SkillComponent'  >
 <div style={{backgroundImage: `url(${image})` }} className='skillImage' > </div>
 <div className='mobileBk' > </div>
<div className='skilInfo' >
<h2 className='SkillTitle' > {title} </h2>
<p>  { descreption }</p>
  </div>  </motion.div>  </InView>}
return <InView onChange={taggleAnimation} >
 <motion.div animate={animation} className='SkillComponent' >
 <div className='mobileBk' > </div>
<div className='skilInfo' >
<h2 className='SkillTitle' > {title} </h2>
<p>  { descreption }</p>
  </div> 
<div style={{backgroundImage: `url(${image})` }} className='skillImage' > </div>
   </motion.div> </InView>
}
function index() {
    return (
        <motion.div onClick={()=>{console.log(window.scrollY)}}  className='protfolioComponent'  >
<motion.h1  className='ProgectTitel' >My Experience</motion.h1>
<motion.div className='protfolioResume' > i have worked on many progects related to web tecknologies ; in both frond end and back end but i consider my self as a frond end developer because i have worked on a speacelised frond end progects </motion.div>
<motion.h2 className='technologiestitle' > Technologies i have used </motion.h2>
<motion.div className='mySkills' > 
{Skills.map((item , index )=>{
return    <Skill title={item.title} descreption={item.descreption} image={item.image} index={index} />
})}
</motion.div>
<motion.h3> My progects </motion.h3>
</motion.div>
    )
}

export default index
