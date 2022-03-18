const express = require('express')
const app = express()
const port = 8081

// Our express REST API, which we use to serve our hello world text to the frontend

app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})