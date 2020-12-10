const express = require('express')



// create an express application
const app = express()

app.get('/', (request, response) => {
  response.end("<h1>ASDM End Module Exam</h1> <p>Submitted by - 1139_Himani Bonde</p>")
})



app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})