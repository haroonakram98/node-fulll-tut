const http = require("http");

const server=http.createServer((req, res) => {
    console.log("Hello")
})


server.listen(5000,(err, server)=>{
    if(err)
    {
    console.log("Failed to listen")
    return
    }
    console.log("Listen")
})