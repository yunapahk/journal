////////////////////////
// Setup - Import deps 
////////////////////////
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const entrySchema = new Schema(
    {
        date: { type: Date, default: Date.now},
        category: { type: String, required: true },
        description: { type: String, required: true },
        tags: [String],
    }
);

const Entry = model("Entry", entrySchema);

//////////////////////
// Export
//////////////////////
module.exports = Entry;
