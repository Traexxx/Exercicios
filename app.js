const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname + '/public')));
app.get("/",(req,res) =>{
    res.sendfile(__dirname +'/view/index.html')
    console.log('acessado')
})
app.listen(3000)
