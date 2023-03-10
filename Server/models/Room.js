const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    doors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Door',
    }],
    
    devices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Room', RoomSchema);