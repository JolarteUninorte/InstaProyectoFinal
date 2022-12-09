let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let userSchema = require('../models/User')

// CRUD

// Create
//localhost:5000/users/create
router.route('/create').post((req, res, next) => {
    console.log(req.body)
    userSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Login Users
//localhost:5000/users/login
router.route('/login').post((req, res, next) => {
    userSchema.find({
        userName: req.body.userName,
        password: req.body.password
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router