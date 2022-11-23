const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

let users = [
    {
        id: 1,
        name: "Alysson",
        age: 19,
        city: "São Paulo"
    }
]

app.listen(3000, console.log('Rodando servidor'))

app.get('/api', (req,res)=>{
    return res.json(users)
})

app.route('/api').post((req,res) =>{
    const lastId = users[users.length - 1].id;
    const newUser = {
        id: lastId + 1,
        nome: req.body.name,
        idade: req.body.age,
        cidade: req.body.city,
    }
})