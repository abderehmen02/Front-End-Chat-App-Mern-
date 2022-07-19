import React  ,{useState} from 'react'
import {useNavigate}from 'react-router-dom'
import {SearchUser} from '../../servises/user'
import unknownPerson  from '../../images/unknown.jpg'
import AvatarEditor from 'react-avatar-editor'

   function SearchedUsers() {
   const navigate = useNavigate()
   const [userNameSearched, setUserNameSearched] = useState('')
   const [usersArray, setUsersArray] = useState([])  ; 


const taggleUserNameSearched = async (e)=>{
  setUserNameSearched(e.target.value)
  if(e.target.value.length){
 const {ResponceData , error } = await SearchUser(e.target.value) ; 
if(error){
return   alert("somme error happened" + "   " + error)
 }
setUsersArray(ResponceData.data) }
}


  return (
    
<div className='d-flex mt-5 flex-column align-items-center justify-content-center border border-light roomsModel model ' >
        <h2 className='ModelTitle roomsTitle' >Search</h2>
                <input className='searchInput' value={userNameSearched} onChange={taggleUserNameSearched} placeholder='search for a person' ></input>

        <div className='d-flex models flex-column align-items-center justify-content-center w-100' >
{usersArray.map(room =>{
  return  <div onClick={()=>{navigate(room.userName)}} className='d-flex mt-3 flex-row w-100 align-items-center justify-items-around  modelItem w-90' >
 <AvatarEditor
        image={`http://localhost:2000/image/${room.image}`}
        width={40}
        borderRadius={50}
        height={40}
        border={2}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        s
      />  <div className='names w-100 d-flex align-items-center justify-content-center  flex-column' >            
 <div className='requestName text-center w-100 '> {room.userName} </div> <small className='requestUserName text-center text-muted ' > {room.name}  </small> 
         </div>       </div>

})}
    </div></div>
  

  )
}

export default SearchedUsers