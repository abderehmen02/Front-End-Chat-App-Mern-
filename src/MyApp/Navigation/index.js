import React  , {useContext} from 'react';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import MoblieNavigation from './MobileNavigation'
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BuildCircleIcon from '@material-ui/icons/Build';
import NoteIcon from '@material-ui/icons/Note';
import {InView , useInView} from "react-intersection-observer" ;
import {MyContext} from '../index' 
import "./index.css"
export default function FloatingActionButtons({component}) {
const  data  = useContext(MyContext) ; 

  return (
    <div>
      <div className='natigationComponent desktop' >
      <Fab onClick={()=>{data.HomeReference.current.scrollIntoView()}} color={component == "Home" ? "secondary" : "primary" } variant="extended">
        Home <HomeIcon/>
      </Fab>
      <Fab onClick={()=>{data.PortfolioReference.current.scrollIntoView()}} color={component == "portfolio" ? "secondary" : "primary" } variant="extended">
        PortFolio <LocalMallIcon/>
      </Fab>
      <Fab onClick={()=>{data.ProjectsReference.current.scrollIntoView()}} color={component === "Projects" ? "secondary" : "primary" } variant="extended">
        Projects <BuildCircleIcon/>
      </Fab>
      <Fab onClick={()=>{data.ContactMeReference.current.scrollIntoView()}}  color={component === 'ContactMe' ? "secondary" : "primary" } variant="extended">
        Contact Me  <ContactPhoneIcon/>     
      </Fab>
    </div>
    <MoblieNavigation component={component} />
    </div>
  );
}
