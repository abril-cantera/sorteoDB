const express = require('express')
const app = express();


app.use(express.json())
app.use(require('./routes/index'))

app.listen(5000)
console.log('Server on port 5000')

