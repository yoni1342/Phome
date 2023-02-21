const mongoose = require('mongoose')
const Light = require('../models/Light')

const lightController = async (req, res) => {
    const {room, status, brightness, color} = req.body
    try {
        const light = new Light({
            room,
            status,
            brightness,
            color
        })
        await light.save()
        res.status(200).json({
            message: 'Light created successfully',
            light
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}