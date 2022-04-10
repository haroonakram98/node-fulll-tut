const { readFileSync, writeFileSync, readFile } = require("fs");

// const writeFile=writeFileSync('./FileFolder/Sub Folder/test.txt',readFile,{flag:'a'})

// console.log(writeFile)
console.log('Before')
// const readFile=readFileSync('./data.txt','utf-8')
console.log(readFileSync('./data.txt','utf-8'))
// readFile("./data.txt",'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

console.log("After")
