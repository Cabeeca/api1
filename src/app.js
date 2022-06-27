const express = require('express')
const app = express()
const routers = require('./routes/routes')

app.use(express.json())
app.use('/', routers)

app.listen(8080, () => {
  console.log('Servidor iniciado em http://localhost:8080')
})
