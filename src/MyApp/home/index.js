import React , {useState , useEffect}  from 'react'
import './index.css'
import MyImg from "../../image/MyImgReact.jpg"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import FileCopyIcon from '@material-ui/icons/FileCopy';
function Home() {
  const [OpenDropDown , setOpenDropDown] = useState(false)
  const [Name, setName] = useState('abderehmen')
      return (
<div className='homeComponent' >
<div className='bk' > </div>
<h2 className='titel' > <span className='welcome' > Web Developer </span>  <div className='myNameDiv' >  <span className='myNameSpan' >  React js Developer</span> </div> </h2>
<div className="mobileTitel" >
<div className="welcome" > Web Developer </div>
<div className="niche" > React Js Developer </div>
</div>
<div className="MyImgAndBtns" > 
<div className="myImg" style={{backgroundImage: `url(${MyImg})`}} >    
</div>
<div className="buttons" >
<a target="_blank" href="https://docs.google.com/document/d/1QDCPgrYLqCTonWEBIWV4pkL1yaui9LII/edit" class="glow-on-hover" type="button"> See Resumate <span className="icon">  <FileCopyIcon/> </span> </a>
<button class="glow-on-hover" type="button"> Contact me<span  className="icon"> <PhoneIcon/> </span> </button>
<a target="_blank" href="https://www.linkedin.com/in/abde-rehmen-244141226/" class="glow-on-hover" type="button"> LinkedIn <span className="icon" > <LinkedInIcon/> </span> </a>
<a target="_blank" href="https://github.com/abderehmen02" class="glow-on-hover" type="button"> Github <span className="icon" > <GitHubIcon/> </span> </a>
</div>
</div>
{/* <a href="https://drive.google.com/file/d/1IVmhPR7q5OmbNP-I6vVcAvb6t-N7kmGz/view" > See Resumate </a>  */}
<p class="line-1 anim-typewriter"> I design and build user interfaces with react js </p>
<p className="caption" > I design and build user interfaces  </p>

</div>
    )
}

export default Home
