const express =  require('express')
const dotenv = require('dotenv')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express();

// Initial env variables
dotenv.config()

// Initialize temlate engine "Handlebars"
app.engine('.hbs', exphbs.engine({ extname : '.hbs'}))

app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, 'public')))

// Initialize routes
app.use('/admin', require('./routes/dashboard.rote'))
app.use('/', require('./routes/zayShop.route'))


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})