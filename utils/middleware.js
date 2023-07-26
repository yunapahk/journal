const morgan = require('morgan')
const methodOverride = require('method-override')
const express = require('express')

function middleware(app) {
    // LOGGING //
    app.use(morgan('dev'))

    // METHOD OVERRIDE //
    app.use(methodOverride('_method'))

    // PUBLIC FOLDER AS STATIC SERVER //
    app.use(express.static('public'))

    // PARSE URLENCODED //
    app.use(express.urlencoded({ extended: false}))
}

module.exports = middleware