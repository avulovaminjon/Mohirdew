const express = require('express')
const path = require('path')
const fs = require('fs')
const mainRoute = require('./routes/mainRourer')
const booksRoutes = require('./routes/booksRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(booksRoutes)
app.use(mainRoute)

app.use((req, res, next) => {
    res.status('404').send(`
        <h1>404 <br> PAGE NOT FOUND</h1>
    `)
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}!`)
})