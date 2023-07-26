const Entry = require('../../models/entry');

async function show(req, res) {
  const id = req.params.id
  const entry = await Entry.findById(id)
  res.render("entry/show.ejs", { entry })
}

module.exports = show;