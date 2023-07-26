const Entry = require('../../models/entry')

async function edit(req, res) {
        const id = req.params.id;
        const entry = await Entry.findById(id); 
        res.render('entry/edit.ejs', { entry }) 
    }

module.exports = edit