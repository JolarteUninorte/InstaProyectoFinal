let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let orderSchema = require('../models/Order')

// CRUD

// Create
//localhost:5000/orders/create
router.route('/create').post((req, res, next) => {
    orderSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Orders
//localhost:5000/orders?userId=1234
router.route('/').get((req, res, next) => {
    orderSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Orders
//localhost:5000/orders/1
router.route('/:id').get((req, res, next) => {
    orderSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Orders
//localhost:5000/orders/edit/2
router.route('/edit/:id').put((req, res, next) => {
    orderSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Order updated successfully !')
            res.json(data)
        }
    })
})

// Delete Orders
//localhost:5000/orders/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router