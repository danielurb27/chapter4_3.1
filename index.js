const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello from CI/CD pipeline v2!</h1>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})