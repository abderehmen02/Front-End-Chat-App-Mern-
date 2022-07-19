import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import unknownPerson  from '../../images/unknown.jpg'

import {useNavigate} from 'react-router-dom'
function UserSameInterestsComponent({props}) {
    const {UserWithSameInterests} = props ;
    const navigate = useNavigate()
  return (
    
         <div className='d-flex mt-5 flex-column align-items-center justify-content-center border border-light requestsModel model ' >
        <h2 className='ModelTitle RequestsTitle' >User With Same Interests</h2>
        <div className='d-flex models flex-column align-items-center justify-content-center w-100' >
            {UserWithSameInterests.map(Person =>{
            console.log(Person)
                return <div onClick={()=>{navigate(Person.userName)}} className='d-flex mt-3 flex-row w-100 align-items-center justify-items-around  modelItem w-90' >
 <AvatarEditor
        image={`http://localhost:2000/image/${Person.image}`}
        width={40}
        borderRadius={50}
        height={40}
        border={2}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        s
      />  <div className='names w-100 d-flex align-items-center justify-content-center  flex-column' >            
 <div className='requestName text-center w-100 '> {Person.userName} </div> <small className='requestUserName text-center text-muted ' > {Person.name} {Person.interests.join(" , ")}  </small> 
         </div>       </div>
            })}
        </div>
    </div>
    
  )
}

export default UserSameInterestsComponent