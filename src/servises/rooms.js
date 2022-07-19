const GetUserRooms = async (token)=>{
try {const data = await fetch("http://localhost:2000/api/v1/room" , {
method: "GET" , 
headers: {
 'Content-Type': 'application/json' ,
 'Authorization': `bearer ${token}`

}
} )
const ResponceData = await data.json()

if(ResponceData.type === "success"){
    return { ResponceData }
}
else{
    return {error: ResponceData.error}
}
}
catch(error){
    if(error){return {error}}
}

}



const sendRequest = async ({token , data})=>{
try {
const responce = await fetch('http://localhost:2000/api/v1/messages/sendRequest' , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `bearer ${token}`
    } ,
 
    body: JSON.stringify(data)
})
const ResponceData = await responce.json() ;

if(ResponceData.type === "success") {
    return {data: ResponceData}
}
else if (ResponceData.type === "failed") {
    return {error : ResponceData.error}
}
return {error: "some error happened while sending the request to the server"}
}
catch(error) {
return {error}
}
}
const acceptRequest =async(token ,  data) =>{
    try {
        const responce = await fetch('http://localhost:2000/api/v1/messages/acceptRequest' , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `bearer ${token}`
    } ,
 
    body: JSON.stringify(data)
})

const ResponceData = await responce.json()

if(ResponceData.type === "success") {
    return {data: ResponceData.data}
}

else {
    return {error: ResponceData.error}
}
    }
    catch(error) {
        console.log(error);
return {error }
    }
}
const cancelFriend = async (token , data)=>{
    try {
    const responce = await fetch('http://localhost:2000/api/v1/messages/cancelFriend' , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `bearer ${token}`
    } ,
 
    body: JSON.stringify(data)
})

const ResponceData = await responce.json()

if(ResponceData.type === "success") {
    return {data: ResponceData.data}
}

else {
    return {error: ResponceData.error}
}
    }
    catch(error) {
console.log(error);
return {error }
    }
}
const cancelRequest = async(token , data)=>{
        try {
    const responce = await fetch('http://localhost:2000/api/v1/messages/cancelRequest' , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `bearer ${token}`
    } ,
 
    body: JSON.stringify(data)
})

const ResponceData = await responce.json()
if(ResponceData.type === "success") {
    return {data: ResponceData.data}
}

else {
    return {error: ResponceData.error}
}
    }
catch(error) {
console.log(error);
return {error }
    }

}
const sendMessage = async (token , data)=>{
  
       try {
    const responce = await fetch('http://localhost:2000/api/v1/messages/sendMessage' , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `bearer ${token}`
    } ,
    body: JSON.stringify(data)
})

const ResponceData = await responce.json()

if(ResponceData.type === "success") {
    return {data: ResponceData.data}
}

else {
    return {error: ResponceData.error}
}
    }
catch(error) {
console.log(error);
return {error }
    }
}

const getRoom = async (token , userName)=>{
         try {
    const responce = await fetch(`http://localhost:2000/api/v1/messages/${userName}` , {
    method: 'GET', 
    headers: {
      'Authorization': `bearer ${token}`
    }})

const ResponceData = await responce.json()

if(ResponceData.type === "success") {
    return {data: ResponceData.data}
}

else {
   
    return {error: ResponceData.error}
}
    }
catch(error) {
(error);
return {error }
    }
}

export {GetUserRooms , sendRequest   , cancelFriend, acceptRequest , cancelRequest , sendMessage , getRoom }