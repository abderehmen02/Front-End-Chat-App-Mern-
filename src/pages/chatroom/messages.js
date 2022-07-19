import React , {useEffect , useRef }  from 'react'

function Messages({messages , userName }   ) {

const messagesDOM = useRef(null)

useEffect(()=>{
messagesDOM.current.scrollTop = messagesDOM.current.scrollHeight
} , [messages] )
  return (
    <div ref={messagesDOM} className='d-flex align-items-center flex-column justify-content-center messages' >
  <div className='messagesContent' >
{messages.map(message=>{

    return <div className={message.sender === userName ? 'myMessage message' : 'otherUserMessage  message' } >
    {message.message}
    </div>
})}
</div>
    </div>
  )
}

export default Messages