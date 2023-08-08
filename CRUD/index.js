//config inicial
const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()

// leitura do JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

  res.json({ message: 'express home', teste: "123" })

})

// porta
mongoose.connect(process.env.KEY)
  .then(() => {
    console.log("Conexão realizada")
    app.listen(3000)
  })
  .catch((err) => console.log(err))



