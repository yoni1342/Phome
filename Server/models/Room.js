const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lights: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Light'
    }]
    
})