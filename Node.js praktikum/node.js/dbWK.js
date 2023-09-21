const fs = require ("fs")
const path = require("path")

function readDB(){
    return data = JSON.parse(fs.readFileSync("DB/books.json", "utf8")) 
}

function putDB(newData){
    fs.writeFile(path.join(__dirname,"/DB/books.json"),JSON.stringify(newData, null, 4),(err)=>{
        if(err)return false
        else return true
    })
}

const dbWK = {
    readDB,
    putDB
}
module.exports = dbWK;
// Module Author : Avulov Aminjon