// this file will contains any function what will deals with our api in the backend
//login function 
const login =  async (data)=>{
try { const responce = await fetch(" http://localhost:2000/api/v1/user/signIn" , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    } ,
    body: JSON.stringify(data)
})
const ResponceData = await responce.json()
if(ResponceData.type === "success"){
  return {data: ResponceData}
}

else if (ResponceData.type === "failed"){
  return {error: ResponceData.error}
}
else return {error: "server error"}
}
catch(error){
console.log(error)
}
}

//Sign Up Function 

const SignUp = async (data)=>{
  
try { const responce = await fetch("http://localhost:2000/api/v1/user/signUp" , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    } ,
 
    body: JSON.stringify(data) })
const ResponceData = await responce.json()

return {ResponceData} }
catch(error){
return {error}
}
}


//Getting users from database 
// we will canll this function when the cuser visit the chat with other user
const findOneUser = async (userName)=>{
try {
const responce  = await fetch(`http://localhost:2000/api/v1/user/findOneUser/${userName}`)
const responceData = await responce.json() 
if(responceData.type === "success"){
  return {data : responceData.data}
}
else if(responceData.type === "failed"){
  return {error :  "some error happen while sending the request "}
}
}
catch(error){
  if(error){
    return {error}
  }
}
}

// search all the users with a given data
const SearchUser = async (data)=>{
try {const response = await fetch(`http://localhost:2000/api/v1//user/Search/${data}`) ;
const ResponceData  = await response.json()
if(ResponceData.type === "success"){
return {ResponceData}
}
else if(ResponceData.type === "failed"){
  return {error: ResponceData.error}
}
}
catch(error){
  return {error}
}
}






// searching the users that have the same interests
const SearchUserInterests = async (interests)=>{
 
  try{
const responce =  await fetch(`http://localhost:2000/api/v1/user/interests?interests=${interests}`)
const responceData = await responce.json()  ; 
if(responceData.type === "success"){
  return{ data :  responceData.data }
}
else if(responceData.type === "failed"){
  return { error : responceData.error }
}
  }
  catch(error){
(error);

  }
}


//Updata User function (changing pssword , name ...ext)
const updateProfile = async ({data , token})=>{
 
try {
  const responce = await fetch("http://localhost:2000/api/v1/user/update" , {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
       'Authorization': `bearer ${token}`
    } , 
    body: JSON.stringify(data ) })
const ResponceData = await responce.json()    ; 

if(ResponceData.type === "success"){
return {data : ResponceData.data  }
}
if(ResponceData.type === "failed"){
  return {error : ResponceData.error}
}
else return {error : 'some error happened while sending the request '}
 }
catch(error){
return {error}
}}
const uploadProfileImage = async ({ token ,  image})=>{
console.log("fetching in server file")
    try {
         const formData = new FormData();
         formData.append('image' , image )
        const responce =  await fetch('http://localhost:2000/api/v1/user/profileImage' , {
        method: 'PATCH' ,
        headers: {
       'Authorization': `bearer ${token}`
    } , 
        body: formData,   
})
     const ResponceData = await responce.json()  ;  
     if(ResponceData.type === "success"){
      return {data: ResponceData.data}
     }  
     if(ResponceData.type === "failed"){
      return {error : ResponceData.error}
     }
    }
    catch(err){
        (err)
    }
}

//delete user function  from the database
export  {login , uploadProfileImage ,SearchUserInterests , findOneUser ,SignUp , updateProfile , SearchUser }