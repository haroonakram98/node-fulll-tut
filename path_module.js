const path=require("path")
const filePath = path.join("/FileFolder","sub Folder","test.txt");
console.log(filePath)
const baseName = path.basename(filePath,".txt")
console.log(baseName)
const pathDeliimerer=process.env.PATH.split(path.delimiter);
//console.log(pathDeliimerer)
const dirName = path.dirname(filePath)
console.log(dirName)
const extnsn= path.extname(filePath)
console.log(extnsn)
const loc={
    root:"c:/",
    base: "file.txt"

}
console.log(path.format(loc))
const checkPath=path.isAbsolute("c:user/name")
console.log(checkPath)
const parsePath=path.parse(filePath)
console.log(parsePath)