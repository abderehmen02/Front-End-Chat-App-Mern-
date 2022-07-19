import React  , {useEffect , useContext, useState}from 'react'
import { GetUserRooms } from "../../servises/rooms"
import {UserProvider} from '../../context'
import {useNavigate} from 'react-router-dom'
import unknownPerson  from '../../images/unknown.jpg'
import AvatarEditor from 'react-avatar-editor'

function Rooms() {
const navigate = useNavigate()
const user = useContext(UserProvider)
const [Rooms, setRooms] = useState([])
// functions
const getRooms = async ()=>{
try {        const {ResponceData , error } = await GetUserRooms(user.CurrentUser.token)     
        if(ResponceData){      
          setRooms(ResponceData.data)
          }
else  if(error){
alert("somme error happened :  "  + error)
        } 
      }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
      getRooms()
        }, [])
    
  return (
    <div className='d-flex  flex-column align-items-center justify-content-center border border-light roomsModel model ' >
        <h2 className='ModelTitle roomsTitle' >Rooms</h2>
        <div className='d-flex models flex-column align-items-center justify-content-center w-100' >
{Rooms.map(room =>{
  console.log("room")
  console.log(room)
  return  <div onClick={()=>{navigate(room.userName)}} className='d-flex mt-3 flex-row w-100 align-items-center justify-items-around  modelItem w-90' >
 <AvatarEditor
        image={`http://localhost:2000/image/${room.image}`}   width={40}
        borderRadius={50}
        height={40}
        border={2}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
      />  <div className='names w-100 d-flex align-items-center justify-content-center  flex-column' >            
 <div className='requestName text-center w-100 '> {room.userName} </div> <small className='requestUserName text-center text-muted ' > {room.name}  </small> 
         </div>       </div>

})}
    </div></div>
  )
}

export default Rooms