const express=require('express')
const app = express()
const path = require('path')
const exphbs=require('express-handlebars')
const port=process.env.PORT||8000


app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use('/',require(path.join(__dirname, 'routes/route.js')))

app.listen(port,()=>{
    console.log('listening on port')
})