const express = require('express')
const app = express()

app.listen(3000, console.log('Rodando servidor'))

app.get('/Usuario', (req,res)=>{
    return res.json({Usuario: "Alysson"})
})