const entryRoutes = require('../routes/entry')
const userRoutes = require('../routes/user')

function registerControllers(app) {
    app.use('/entry', entryRoutes);
    app.use('/user', userRoutes);
}

module.exports = registerControllers;