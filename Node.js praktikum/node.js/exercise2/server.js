const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url === '/'){
        res.end(`
            <title>Home</title>
            <h1>Welcom Home Page</h1>
            <a href="/books">Books page</a>
        `)
    }else if(req.url === '/books' && req.method === 'GET'){
        res.end(`
        <title>Home</title>
        <h1>Welcom BOOKS Page</h1>`)
    }
    else if(req.url.startsWith('/books/') && req.method === "GET"){
        let bookId = +req.url.split('/')[2]
        fs.readFile("DB/books.json", "utf8", (err, data)=>{
            if(err) throw err
            else{
                const booksData = JSON.parse(data) 
                const book = booksData.find(({ id }) => id === bookId)
                if(book){
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(book))
                }
                else{
                    res.end("Ma'lumot topilmadi")
                }
            }
        })
       
    }else{
        res.end(`
        <title>404</title>
        <h1>404 Page</h1>
        <a href="/books">Books page</a>
    `)
    }

    
})

const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Server ${PORT}da ishga tushdi!`)
})