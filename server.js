require('dotenv').config; 
const express = require('express');
const MoveRouter = require('./controllers/move');
const UserRouter = require('./routes/user');
const methodOverride = require('method-override');
const registerControllers = require('./utils/registercontrollers');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// REGISTER APP OBJECT
const app = express();

// REGISTER MIDDLEWARE
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false
}))
app.use(express.static('public'))
app.use(express.urlencoded());
app.use(methodOverride('_method'))
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// REGISTER ROUTES/CONTROLLERS
registerControllers(app);

// LISTENER //
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })