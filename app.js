// const fs=require('fs');
// import * as fs from "fs/promises";

// try{
// await fs.mkdir('C:/Users/haroo/OneDrive/Desktop/node_full_course/New');
// console.log("Created")
// }
// catch(e){
// console.log("Failed to create")
// }

// try {
//     await fs.writeFile('C:/Users/haroo/OneDrive/Desktop/node_full_course/New/data.txt',"name is haroon");

// } catch (error) {
//     console.log("Failed to write data")
// }
// fs.readFile('data.txt','utf8').then((data,err)=>{
//     if(err) 
//     {
// console.log("Failed to read data1")
// return
//     }
//     console.log(data)
// }).catch((err)=>{
//     console.log("Failed to read data")
// })

// try{
//     await fs.readFile('data.txt','utf8',(data,err)=>{
//         console.log('hello');
//     })
// }
// catch(err) {
//     console.log("Failed to read data")
// }

// fs.appendFile('data.txt',' and my roll number is 25').then((data,err)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Failed to append")
// })


// try{
//     const files=await fs.readdir('C:/Users/haroo/OneDrive/Desktop/');
//     for(const file of files)
//     {
//         console.log(file);
//     }
// }   
// catch(err) {
//     console.log("Failed to read")
// }

