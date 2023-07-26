const Entry = require('./entry');
const mongoose = require('./connection');
const entries = require('./seedData');

async function seed() { 
    await Move.deleteMany({});
   
    const createdEntries = await Entry.create(Entries); 
    console.log(createdEntries.length);
    console.log(createdEntries[0]);
}

mongoose.connection.on("open", () => {seed()}) 