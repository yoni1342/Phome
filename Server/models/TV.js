const mongoose = require('mongoose')

const TVSchema = mongoose.Schema({
    status: {
        type: Boolean,
        default: false
    }
})