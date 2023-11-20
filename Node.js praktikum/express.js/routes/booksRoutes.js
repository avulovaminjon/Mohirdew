const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const { v4 } = require('uuid')
const router =  Router()

let bookId;
router.param('id', function (req, res, next, id) {
    bookId = id
    next()
})

// Read books.json

function readDB(){
    return JSON.parse(fs.readFileSync('DB/books.json', 'utf8'));
}

// Updata books.json
function updateDB(newData){
    fs.writeFile(path.join(__dirname,"../DB/books.json"),JSON.stringify(newData, null, 4),(err)=>{
        if(err)return false
        else return true
    })
}

// 1. GET - /books => books.json faylini o’qib oling va barcha ma’lumotlarni chiqaring

router.get('/books', (req, res) => {
    let data = readDB()
    res.json(data)
})

// 2. GET - /books/:id => books.json faylidan :id bo’yicha qidiring, agar topilsa ma’lumotni qaytaring, aks xolda ma’lumot topilmadi degan xabarni qaytaring

router.get('/books/:id', (req, res) => {
    let books = readDB()
    let book = books.find(b => b.id == bookId)
    if(book != undefined){
        res.json({
            status : 'ok',
            data : book
            })
    }else{
        res.json({
            status : '404',
            })
    }
})

// 3. POST - /books => books.json fayliga yangi ma’lumotni qo’shing

router.post('/books', async(req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ status: 400, message : 'title va author ma\'lumotlari to\'liq kiritilishi kerak' });
    }
    
    let books = await  readDB();

    let aboutBook = books.find(b => b.title === title)

    if(aboutBook){
        return res.status(409).json({ status: 409, message : 'Bu kitob mavjud' });
    }

    const newBook = {
        id : v4(),
        title,
        author
    }

    books.push(newBook)
    
    await updateDB(books);

    res.status(201).json({
        status : 201,
        message : newBook
    });
    
})

// 4. PUT - /books/:id => books.json faylidan :id bo’yicha qidiring, agar topilsa ma’lumotni kiritilgan ma’lumotlar bo’yicha tahrirlang, topilmasa ma’lumot topilmadi xabarini qaytaring

router.put('/books/:id', async (req, res) => {
    const {title, author} = req.body;

    if (!title || !author) {
        return res.status(400).json({ status: 400, message : 'title va author ma\'lumotlari to\'liq kiritilishi kerak' });
    }

    let books= await readDB();

    let aboutBook = books.findIndex(b => b.id == bookId)

    if(aboutBook === -1){
        return res.status(409).json({ status: 409, message : 'Bu kitob topilmadi' });
    }

    books[aboutBook] ={
        id : bookId,
        title,
        author
    }

    await updateDB(books)

    res.status(201).json({
        status : 201,
        message : "O\'zgartirildi!"
    });

})

// 5. DELETE - /books/:id => books.json faylidan :id bo’yicha qidiring, agar topilsa ma’lumotni o’chirib tashlang, aks xolda ma’lumot topilmadi degan xabarni qaytaring.

router.delete('/books/:id', async (req, res) => {
    let books = readDB();

    let aboutBook = books.findIndex(b => b.id == bookId)

    if(aboutBook === -1){
        return res.status(409).json({ status: 409, message : 'Bu kitob topilmadi' });
    }

    books = books.filter(b => b.id !== bookId)
    console.log(books)

    await updateDB(books)

    res.json({
        status : 200,
        message : "Kitob o\'chirildi!"
    })
})

module.exports = router