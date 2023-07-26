require("dotenv").config() 
const mongoose = require("mongoose") 

const DATABASE_URL = process.env.DATABASE_URL 

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
    .on("open", () => {console.log("Connected")})
    .on("close", () => {console.log("Disonnected")})
    .on("error", (error) => { console.log(error) });

module.exports = mongoose