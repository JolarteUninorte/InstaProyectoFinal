const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema (
    {
        pickupDirection: {
            type: String,
            required: true,
        },
        pickupCity: {
            type: String,
            required: true,
        },
        receiverName: {
            type: String,
            required: true,
        },
        receiverID: {
            type: Number,
            required: true,
        },
        deliveryAddress: {
            type: String,
            required: true,
        },
        deliveryCity: {
            type: String,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        checkType: {
            type: Boolean,
            required: true,
        },
        pickupDate: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        pickupTime: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'User',
        }
    },{
        collection: 'orders'
    }
)

module.exports = mongoose.model('Order',orderSchema)