const Entry = require('../../models/entry');

async function update(req, res) {
    const id = req.params.id
    let updatedEntry = {
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        img: req.body.img
    }

    try {
        await Move.findByIdAndUpdate(id, updatedEntry)
        res.redirect("/entry")
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = update;
