import  React  ,{useContext} from 'react';
import { MyContext }from '../../index'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {makeStyles} from '@material-ui/core'  ; 
import CloseIcon from '@material-ui/icons/Close';
import "./index.css"
import { motion , useAnimation } from 'framer-motion' 
const useStyles = makeStyles({
papper : {
        backgroundColor: 'black' , 
        borderRadius: 23 , 
        textAlign: 'start' ,
        display: 'flex' , 
        alignItems: 'flex-start' ,
        justifyContent: 'center'    
    } ,
    btn : {
       
        margin: 5 ,  
        width: '90vw' , 
        borderRadius: '20px' , 
        textAlign: 'center'
    } , 
    CloseIcon : {
      color: 'red' ,
      margin: 10 , 
    }
})
const MoblieNavigation = ({component})=> {
    const myStyles = useStyles() ;
    const MenuIconAnimation = useAnimation() ; 
    const MobileNavigation =  useAnimation() ; 
    const data = useContext(MyContext) ;
    
    React.useEffect(()=>{
MenuIconAnimation.start({
    x: 0 ,
})
MobileNavigation.start({
y : -500 
})
    } , [] )
    const MenuOpened = ()=>{
MobileNavigation.start({
    y: 0 ,
    transition: {
      duration: 1 , 
    }
})
MenuIconAnimation.start({
    x: 500 ,
        transition: {
      duration: 1 , 
    }

})
    }
   const MenuClosed = ()=>{
        MobileNavigation.start({
   y:    -500 ,
       transition: {
      duration: 1 , 
    }

        })
        MenuIconAnimation.start({
            x: 0 , 
                transition: {
      duration: 1 , 
    }
        })
    }
  return (
      <div className='mobile ' >
 <motion.div className='listIcon' animate={MenuIconAnimation}  onClick={MenuOpened} >     <FormatListBulletedIcon color="primary" /></motion.div>
<motion.div className='mobileNavigation' mobileNavigation animate={MobileNavigation} >   <Paper  sx={{ width: 320, maxWidth: '100%' }} className={myStyles.papper} > 
      <MenuList>
      <CloseIcon onClick={MenuClosed} className={myStyles.CloseIcon} />
        <MenuItem  onClick={()=>{ MenuClosed() ; data.HomeReference.current.scrollIntoView()}}  className={ myStyles.btn } style={{backgroundColor: component === 'Home' ? 'yellow'   : 'white' ,    }} >
          <ListItemIcon>         
          </ListItemIcon>
          <ListItemText>Home </ListItemText>
        </MenuItem>   <Divider />
        <MenuItem  onClick={()=>{  MenuClosed() ; data.PortfolioReference.current.scrollIntoView()}}  className={ myStyles.btn } style={{backgroundColor: component === 'portfolio' ? 'yellow'   : 'white'  }} >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>PortFolio</ListItemText>
         
        </MenuItem>  <Divider />
        <MenuItem   onClick={()=>{ MenuClosed() ;  data.ProjectsReference.current.scrollIntoView()}}  className={ myStyles.btn } style={{backgroundColor: component === 'Projects' ? 'yellow'   : 'white' ,  }} >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText> Projects </ListItemText>
         
        </MenuItem>
        <Divider />
        <MenuItem style={{backgroundColor: component === 'ContactMe' ? 'yellow'   : 'white' ,   }} onClick={()=>{  MenuClosed() ; data.ContactMeReference.current.scrollIntoView()}} className={ myStyles.btn } >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>  Contact Me </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper></motion.div>
    </div>
  );
}
export default MoblieNavigation