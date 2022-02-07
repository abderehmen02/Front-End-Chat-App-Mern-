import React  , {useState} from 'react'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './index.css'
import { motion } from "framer-motion"
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BuildCircleIcon from '@material-ui/icons/Build';
import NoteIcon from '@material-ui/icons/Note';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import animateScrollTo from 'animated-scroll-to';
import Dialog from '@material-ui/core/Dialog';

function Index({component}) {

const [OpenDropDown , setOpenDropDown] = useState(false)
const DropDown = ()=>{
  return <div  className='navDropDown' >
{ OpenDropDown ? 
<motion.div initial={{x: 100 }} animate={{x:0}}   className='dropDownComponent'  >  

<Dialog open={OpenDropDown} onClose={()=>{setOpenDropDown(false)}} >  

    <div onClick={()=>{setOpenDropDown(false)  }} className='closeIcon' >
    <CloseIcon/>
    </div>
  <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    > 
<div style={{cursor: 'pointer'}} className={component === 'home' ? 'choosed' : 'notChoosed'}  >
      <ListItem onClick={()=>{animateScrollTo(0) ; setOpenDropDown(false) }} className={component === 'home' ? 'choosed' : 'notChoose'}  >
        <ListItemIcon>
        <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
</div> 
<div style={{cursor: 'pointer'}} className={component === 'Protfolio' ? 'choosed' : 'notChoosed'}  >
      <ListItem onClick={()=>{ screen.width > 500?  animateScrollTo(550).then(()=>{setOpenDropDown(false)}) :   animateScrollTo(550).then(()=>{setOpenDropDown(false)}) }} >
        <ListItemIcon>
        <LocalMallIcon/>
        </ListItemIcon>
        <ListItemText primary="Protfolio" />
      </ListItem></div>
      <div style={{cursor: 'pointer'}}     className={component === 'Progects' ? 'choosed' : 'notChoosed'}     >
      <ListItem onClick={()=>{ screen.width > 500?  animateScrollTo(3950).then(()=>{setOpenDropDown(false)}) :   animateScrollTo(3950).then(()=>{setOpenDropDown(false)}) }} >
        <ListItemIcon>
        <BuildCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="My Progects" />
      </ListItem>
</div>
      <div style={{cursor: 'pointer'}} className={component === 'ContactMe' ? 'choosed' : 'notChoosed'} >
      <ListItem  onClick={()=>{ screen.width > 500?  animateScrollTo(6150).then(()=>{setOpenDropDown(false)}) :   animateScrollTo(7900).then(()=>{setOpenDropDown(false)}) }} >
        <ListItemIcon>
        <ContactPhoneIcon/>
        </ListItemIcon>
        <ListItemText primary="Contact Me" />
      </ListItem></div>
      <div style={{cursor: 'pointer'}} >
      <ListItem  onClick={()=>{animateScrollTo(2500) ;  setOpenDropDown(false) } } className={component === 'resumate' ? 'choosed' : 'notChoosed'} >
        <ListItemIcon>
        <NoteIcon/>
        </ListItemIcon>
        <ListItemText primary="My Resumate" />
      </ListItem>
</div>
</List></Dialog> </motion.div>
   :  <div onClick={()=>{setOpenDropDown(true)}} > <FormatListBulletedIcon color='primary' fontSize='large' style={{cursor: 'pointer'}} /></div> }

        </div>
}

    return (
<div>
<div style={{cursor: 'pointer'}} >
<div className='dropDown' > <DropDown  />   </div>
</div>
</div>
    )
}

export default Index
