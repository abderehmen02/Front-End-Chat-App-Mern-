import React , {useState } from 'react'
import {motion , useAnimation } from 'framer-motion'
import ReactLogo from '../../image/react.png'
import CssLogo from '../../image/css.png'
import HtmlLogo from '../../image/html.png'
import firebaseLogo from '../../image/firebase.jpg'
import javascriptLogo from '../../image/Javascript.png'
import NodeLogo from '../../image/nodeJs.png'
import MaterialLogo from '../../image/materialUi.png'
import CloseIcon from '@material-ui/icons/Close';
import './index.css'
import {InView} from 'react-intersection-observer';
import {useMediaQuery} from '@material-ui/core'
const Skills = [{title:'React js' , image: ReactLogo , descreption: ' about 2 years experience with react , react components , react hooks , redux ...ext '   },{title: 'javascript' , image: javascriptLogo , descreption: 'about 3 years of experience with javascript ; json , api , data structures , algorithms ...ext ' },{title: 'html', image: HtmlLogo, descreption: 'about 3 years of experience with html compined with css '  },{title: 'css' , image: CssLogo , descreption: '3 years of experience with css ,  flex box , grid box  , ui design , ux design , animation , responsive web' },{title: ' Nodejs ', image: NodeLogo , descreption: '1 year experience with node js , servers , events , ...ext' },{title: 'firebase', image:firebaseLogo , descreption: 'i use firebase as a database for my progect so i get experience with cloud firestore and firebase authentication ...ext ' },{title: 'Material Ui' , image: MaterialLogo , descreption: ' i combine the material ui components and icons to build a better design and  provide a better user experience'  },]


const Skill = ( {title , descreption , image , index } )=>{
const Mobile = useMediaQuery('(max-width : 600px)') ; 
const [IndexSkillTextDisplayed, setIndexSkillTextDisplayed] = useState(false);
const animation = useAnimation() ; 
const TextAnimation = useAnimation() ; 
const taggleAnimation = (inview )=>{

    if(inview){
        animation.start({
x: 0 ,  
       transition : { duration: 0.7}    
        })
    }
else    animation.start({
x: -500 ,
    })
}
const DisplayText = (index)=>{
    setIndexSkillTextDisplayed(index);
    TextAnimation.start({
        x: 0 ,
        transition: {duration: 0.7}
    })
}
const HideText= (index)=>{
    setIndexSkillTextDisplayed(false)  ; 
    TextAnimation.start({
        x:  100 , 
        transition : { duration: 0.7 }
    })
}
 return <InView onChange={taggleAnimation} >
  <motion.div animate={Mobile ? animation : null } className='SkillComponent' onMouseEnter={()=>{DisplayText(index)}} onMouseLeave={()=>{HideText(index)}} >
 <div style={{backgroundImage: `url(${image})` , filter: index === IndexSkillTextDisplayed && Mobile ? 'opacity(20%)': !Mobile && IndexSkillTextDisplayed ? 'opacity(5%)' : 'none' }} className='skillImage' > </div>
 <div className='mobileBk' > </div>
{ Mobile && IndexSkillTextDisplayed === false?  <button onClick={()=>{DisplayText(index)}} > See More </button> : ''}
<motion.div initial={{x: 100 }} animate={TextAnimation} style={{display: index === IndexSkillTextDisplayed ? 'flex' : 'none'}} className='skilInfo' >
<h2 className='SkillTitle' > {title} </h2>
<p>  { descreption }</p>
{ Mobile && <CloseIcon color='secondary' onClick={()=>{HideText(index)}} />}
  </motion.div>  </motion.div>  </InView>
}
function index() {
    return (
        <motion.div  className='protfolioComponent'  >
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
