import {WebSocketServer} from "ws";

const ws=new WebSocketServer({port:8080});

ws.on("connection",(socket)=>{

let mem;
socket.on("message",(data)=>{
    mem=data.toString()
    console.log(data)
})
if(mem=="ping"){
    socket.send("pong")
}

})