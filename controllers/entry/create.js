const Entry = require('../../models/move');

async function create(req, res) {
    let newEntry = {
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        img: req.body.img
    }

    try {
        const entry = await Entry.create(newEntry)
        console.log(newEntry, req.body)
        res.redirect("/entry")
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = create