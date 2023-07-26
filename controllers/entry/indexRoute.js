const Entry = require('../../models/entry');

async function index(req, res) {
  const entries = await Entry.find({});
  const user = req.user; 

  res.render('entry/index.ejs', { entries, user });
}

module.exports = index;