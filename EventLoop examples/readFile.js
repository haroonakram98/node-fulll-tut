const {readFile} =require('fs')

console.log("before")
readFile("C:/Users/haroo/OneDrive/Desktop/node_full_course/data.txt",'utf-8',(err, data)=>{
    if(err) 
    {
        console.log(err)
        return
    }
    console.log(data)
})

console.log("after")