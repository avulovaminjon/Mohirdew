const  http = require('http')
const fs = require('fs')
const getBodyData = require("./getbody")
const dbWK = require("./dbWK")
const { v4 } = require('uuid')
const { throws } = require('assert')


// const books = JSON.parse(fs.readFileSync("DB/books.json", "utf8"))
// const books = require('./DB/books.json')

// Server yaratish
const server = http.createServer(async(req,res)=>{
    // GET - /books => books.json faylini o’qib oling va barcha ma’lumotlarni chiqaring
    if( req.url === '/books' && req.method === "GET"){
        res.writeHead(200,{"Content-Type" : "applecation/json charset=utf8"})
        const books = dbWK.readDB()
        console.log(books)
        const resp = {
            status : "OK",
            books
        }
        res.end(JSON.stringify(resp))
    }
    // GET - /books/:id => books.json faylidan :id bo’yicha qidirish
    else if(req.url.startsWith("/books/") && req.method === "GET"){
        console.log(req.url)
        const id = req.url.split("/")[2]
        const books = dbWK.readDB()
        const book = books.find(b => b.id === id)
        res.writeHead(200, {"Content-Type" : "applecation/json chartes=utf8"})
        if(book){
            
            const resp = {
                status : "OK",
                book
            }
            res.end(JSON.stringify(resp))
        }else{
            const resp = {
                status : "ERROR",
                message : "bunday 'ID'ga ega kitob topilmadi"
            }
            res.end(JSON.stringify(resp))
        }
    }

    //POST - /books => books.json fayliga yangi ma’lumotni qo’shing
    else if(req.url === "/books" && req.method === "POST"){
        const data = await getBodyData(req)
        const bodyData = JSON.parse(data)
        const {title, author} = bodyData
        const newBook = {
            id : v4(),
            title,
            author
        }
        res.writeHead(200, {"Content-Type" : "aplecation/json charset=utf8"})
        const books = dbWK.readDB()
        if(!books.find(b => b.title === title)){
            books.push(newBook)
            dbWK.putDB(books)
            const resp = {
                status : "CREATED",
                book : newBook
            }
            res.end(JSON.stringify(resp))
        }
        else{
            const resp = {
                status : "ERROR",
                massage : "Bunday nomli kitob bazada bor!"
            }
            res.end(JSON.stringify(resp))
        }
    }
    // PUT - /books/:id => books.json faylidan :id bo’yicha qidiring, agar topilsa ma’lumotni kiritilgan
    else if(req.url.startsWith("/books/") && req.method === "PUT"){
        const id = req.url.split("/")[2]
        const books = dbWK.readDB()
        const data = await getBodyData(req)
        const bodyData = JSON.parse(data)
        const {title, author} = bodyData
        const book = books.find(b => b.id === id)
        res.writeHead(200, {"Content-Type" : "aplecation/json charset=utf8"})
        if(book){
            const idx = books.findIndex(b => b.id === id)
            const updataBook = {
                id : books[idx].id,
                title : title || books[idx].title,
                author : author || books[idx].title
            }
            books[idx] = updataBook
            dbWK.putDB(books)
            const resp = {
                status : "UPDATE",
                book : updataBook
            }
            res.end(JSON.stringify(resp))
        }
        else{
            const resp = {
                status : "ERROR",
                message : "Bunday 'ID'ga ega kitob yo'q"
            }
            res.end(JSON.stringify(resp))
        }
    }
    // DELETE - /books/:id => books.json faylidan :id bo’yicha qidiring, agar topilsa ma’lumotni o’chirib tashlang, aks xolda ma’lumot topilmadi degan xabarni qaytaring.
    else if(req.url.startsWith("/books/") && req.method === "DELETE"){
        const id = req.url.split("/")[2]
        let books = dbWK.readDB()
        const book = books.find(b => b.id === id)
        res.writeHead(200, {"Content-Type" : "aplecation/json charset=utf8"})
        if (book){
            books = books.filter(b => b.id !== id)
            dbWK.putDB(books)
            const resp = {
                status : "DELETE",
                message : "Element o'chirildi"
            }
            res.end(JSON.stringify(resp))
        }else{
            const resp = {
                status : "ERROR",
                message : "Bunday 'ID'ga ega kitob yo'q"
            }
            res.end(JSON.stringify(resp))
        }
    }
        

        
    
})
const PORT = 5005;
server.listen(PORT, () => console.log("Server run on the port : " + PORT))