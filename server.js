const express=require('express')
const app = express()
const path = require('path')
const port=process.env.PORT||8000


app.use('/',require(path.join(__dirname, 'routes/route.js')))

app.listen(port,()=>{
    console.log('listening on port')
})