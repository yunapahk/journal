const Entry = require('../../models/entry');

async function destroy(req, res) {
    const id = req.params.id;
    await Entry.findByIdAndRemove(id); 
    res.redirect('/entry');
    }

module.exports = destroy;