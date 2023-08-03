////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
require('./config/db')
const express = require('express')
const middleware = require('./middleware/mid')
const JournalRouter = require('./routes/entries')

const app = express()
const PORT = process.env.PORT || 3001
//////////////////////
// Declare Middleware
//////////////////////
middleware(app)
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.use("/journal", JournalRouter)
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
