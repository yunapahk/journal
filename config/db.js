////////////////////////
// Setup - Import deps 
////////////////////////
const mongoose = require('mongoose')

// MongoDB & Mongoose 
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + "Me no work... fix me!"))
db.on('connected', () => console.log('Mongoose connected'))
db.on('disconnected', () => console.log('Mongoose disconnected'))