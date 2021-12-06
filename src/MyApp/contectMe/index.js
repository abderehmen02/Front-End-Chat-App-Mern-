import React, { useEffect , useRef , useState } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TextField from '@material-ui/core/TextField' ;
import {makeStyles} from '@material-ui/core'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import './index.css'
import emailjs from 'emailjs-com'  

const useStyles = makeStyles({
 textInput : {

  color: 'rgb(245, 245, 245)'  
 }
})



function Index() {
const classes = useStyles()
  const [ButtonText, setButtonText] = useState('send')
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_quyfb8o', 'template_9azz26i', form.current, 'user_1qwbYVqyj01JlFVQ8wWMY')
      .then((result) => {
          setButtonText('sent')
      }, (error) => {
alert(error.text)
      });
  };
  
return (
<div className='ContactForm'  onClick={()=>{console.log(window.scrollY)}} >
<div className='header'>
     <div className='ContactFormTitle' > Contact Us </div>
     <div className='ContactFormText'> do you have a question ?  contact me and i will reply as soon as posible </div>
</div>
<div className='forms'  >
    <div className="contact-form" >
    <h2> Write your Information </h2> 
     <form ref={form} onSubmit={sendEmail}  >
        <TextField
        className={classes.textInput}
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          multiline
          color="primary"
          required
          name='message'
          rowsMax={4}
          type="text"
        />        <span> required </span>
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          name='name'
          variant="outlined"
          type="text"
        />
                <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          name='email'
          placeholder="Enter email address"
          variant="outlined"
          type="email"
          required
        />         <span> required </span>
        <br />
        <br />
        <br />
        
        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="website"
          variant="outlined"   
        />         
        <br />
        <br />
        <br />
        <div className="button--container">
          <button className='ContactSend' type="submit"  >
          {ButtonText}
          </button>
        </div>
      </form>
</div>
<div className='ContactMedea' >
<div className='instruction' > you can also contact me via :</div>
<ul className='medeaList' >
    <li><a href='https://web.facebook.com/abde.rehmen.1/' ><span> Facebook </span>  <FacebookIcon color='primary' fontSize='large' /></a> </li>
    <li><a href='mailto:abderehmen02@gmail.com?subject=Web Development' > <span>  Email : abderehmen02@gmail.com</span> <EmailIcon color='secondary' fontSize='large' /> </a></li>
    <li> <a href='https://github.com/abderehmen02/' > <span> GitHub </span> <GitHubIcon color='primary' fontSize='large' ></GitHubIcon></a> </li>
    <li> Phone Number: +213541006184 <LocalPhoneIcon color='secondary' fontSize='large' /> </li>
</ul>
</div>
</div>

      </div>

    )
}

export default Index