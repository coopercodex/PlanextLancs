const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000


app.use(express.json())
app.use(cors())

app.locals.tickets = [
  {id: 1,title: 'Basic', price: '1.1 Million BTC', duration: '7 Days', type: ['Views', 'Featured', 'Private Pod']},
  {id: 2,title: 'Premier', price: '3.1 Million BTC', duration: '21 Days', type: ['Views', 'Featured', 'Private Terra']},
  {id: 3,title: 'Lonsdaleite', price: '7.1 Million BTC', duration: '30 Days', type: ['Views Plus', 'Featured Plus', 'MDRS']}
]
app.get("/api/tickets", (req, res) => {
  res.status(200).json(app.locals.tickets)
})

app.listen(PORT, () => {console.log('Server started on port 4000')} )