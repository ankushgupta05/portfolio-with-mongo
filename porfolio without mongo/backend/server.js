const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    console.log(__dirname)
    console.log('Get req ..')
    res.send('Hello World! get')
})

app.post('/', (req, res) => {
    console.log('post req ..')
  res.send('Hello World! post')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})