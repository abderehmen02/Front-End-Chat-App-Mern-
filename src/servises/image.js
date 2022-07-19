export  const uploadProfileImage = async (data)=>{
    console.log(data.image)
    try {
         const formData = new FormData();
         formData.append('image' , data.image )
        const responce =  await fetch('http://localhost:2000/api/v1/image/upload' , {
    method: 'POST' ,
      body: formData,   
       
   
    })       
    console.log(responce)
    }
    catch(err){
        console.log(err)
    }
}
