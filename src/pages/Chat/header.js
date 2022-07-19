import React from 'react'
import 'dotenv'
import AvatarEditor from 'react-avatar-editor'
import {useNavigate} from 'react-router-dom'

// the header will be in the top of my chat app at the home page

function Header({image , userName}) {
  const navigate = useNavigate()
  return (
    <div className='header m-5 d-flex flex-row align-items-center justify-content-center ' onClick={()=>{navigate('/settings')}} > 
    <div className='info d-flex flex-column align-items-center justify-content-center  '>
{userName}
<AvatarEditor
        image={'http://localhost:2000/image/' + image}
        width={40}
        borderRadius={50}
        height={40}
        border={2}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
      />
    </div>
 <h1 className='text-center text-info chatTitel' > Settings</h1>
 </div>
  )
}

export default Header