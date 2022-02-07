import React, { useEffect , useRef , useState } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import TextField from '@material-ui/core/TextField';
import {makeStyles , useMediaQuery } from '@material-ui/core'
import MyImage from '../../image/myImg.jpeg' ; 
import './index.css'
  

function Index() {
  const Mobile = useMediaQuery("(max-width: 600px)")
  const UseStyles = makeStyles({
  TextFieldInput : {
    backgroundColor: 'white' ,
    borderRadius: 15 ,
    borderBottomRightRadius: 0 , 
    borderBottomLeftRadius: 0 , 
    margin: 20 ,
    marginRight: 5 ,
    width: Mobile ? 250 : 400  , 
  }
})
  const Classes = UseStyles()
  const [ButtonText, setButtonText] = useState('send')
return (
<div  className='ContactForm'  onClick={()=>{console.log(window.scrollY)}} >
<h3>  Contact Me  </h3>
<div className="demo" > <span> Do you have any node ? </span> feel free to leave me a message   </div>
<div className="imageComponent" > <div className="line" ></div> <div className="myImgContactMe" style={{backgroundImage:  `url(${MyImage})`}} ></div> </div>
<div  className="Forms">
<div  className='ContactMeMyImage' ></div>
<div  className="Form"  >
<div  className="inputContainer" > <TextField id="filled-basic"   className={Classes.TextFieldInput} label="Name" variant="filled" />  <span className="notRequired" > Not Required </span></div>
<div  className="inputContainer" >  <TextField id="filled-basic" className={Classes.TextFieldInput} label="Email" variant="filled" />  <span className="notRequired" > Not Required </span></div>
<div  className="inputContainer">  <TextField id="filled-basic" className={Classes.TextFieldInput} label="Message" variant="filled" />  <span className="required" > Required </span></div>
   <button> Send </button>
</div>
<div className='ContactMedea' >
<div className='instruction' > you can also contact me via :</div>
<ul className='medeaList' >
    <li><a href='https://web.facebook.com/abde.rehmen.1/' ><span> Facebook </span>  <FacebookIcon color="primary" fontSize='large' /></a> </li>
    <li><a href='mailto:abderehmen02@gmail.com?subject=Web Development' > <span>  Email : abderehmen02@gmail.com</span> <EmailIcon color='primary' fontSize='large' /> </a></li>
    <li> <a href='https://github.com/abderehmen02/' > <span> GitHub </span> <GitHubIcon color='primary' fontSize='large' ></GitHubIcon></a> </li>
    <li> Phone Number: +213541006184 <LocalPhoneIcon color='primary' fontSize='large' /> </li>
</ul>
</div>
</div>

      </div>

    )
}

export default Index