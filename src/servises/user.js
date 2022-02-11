import axios from "axios" 
import api from "./api"
const url = "http://localhost:2000/api/v1/user"
const login =  async (data)=>{
try { const responce = await fetch(" http://localhost:2000/api/v1/user/SignIn" , {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    } ,
 
    body: JSON.stringify(data)
})
const ResponceData = await responce.json()
if(ResponceData.type === "success"){
  localStorage.setItem("whatsappUser" , JSON.stringify(data) )
}
return {ResponceData} }
catch(error){
  return {error}
}
}
const SignUp = async (data)=>{
 const currentUser = await api.post("/user/signUp")
 return currentUser ; 
}
const UpdateUser = async ({userName , data})=>{
const user = await api.patch(`/user/${userName}` , data)
return user
}
const DeleteUser = async (userName)=>{
const user = await api.patch(`/user/${userName}`)
}
export  {login , SignUp , UpdateUser , DeleteUser }