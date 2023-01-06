const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const ItemRoute = require('./routes/ItemRoutes')
const UserRoute = require('./routes/UserRoutes')
const CartRoute = require('./routes/CartRoutes')


const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/items', ItemRoute)
app.use('/user', UserRoute)
app.use('/cart', CartRoute)


app.listen(PORT, () => { 
    console.log(`Express listening on port ${PORT}`)
})