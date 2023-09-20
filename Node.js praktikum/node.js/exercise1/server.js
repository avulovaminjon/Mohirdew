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
    }else if(req.url === '/books' && req.method === "GET"){
        res.setHeader('Content-Type', 'application/json')
        fs.readFile('DB/books.json', "utf8", (err,data)=>{
            if(err) throw err
            res.end(data)
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