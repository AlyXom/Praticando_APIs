const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

let users = [
    {
        id: 1,
        name: "Alysson",
        age: 19,
        city: "São Paulo"
    }
]

app.listen(3000, console.log('Running Server'))

app.route('/api').get((req,res)=>res.json(users))

app.route('/api').post((req,res) =>{
    const lastId = users[users.length - 1].id;
    users.push({
        id: lastId + 1,
        nome: req.body.name,
        idade: req.body.age,
        cidade: req.body.city,
        
    })
    res.json('saved User')
})

app.route('/api/:id').get((req, res) => {
    const userId = req.params.id
  
    const user = users.find(user => Number(user.id) === Number(userId))
  
    if (!user) {
      return res.json('User nor found!')
    }
  
    res.json(user)
  })

  app.route('/api/:id').put((req, res) => {
    const userId = req.params.id
  
    const user = users.find(user => Number(user.id) === Number(userId))
  
    if (!user) {
      return res.json('User nor found!')
    }
})