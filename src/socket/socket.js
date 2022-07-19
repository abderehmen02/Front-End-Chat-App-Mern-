import { io } from "socket.io-client"
const socket = io("http://localhost:4000/")
// socket is the packeage that gives the ability to connect with our backend 

export const socketListener = (listener , cb)=>{
    socket.on(listener, cb)
}
export const socketEmit = (emiter , ...params)=>{
    socket.emit(emiter , ...params )
}