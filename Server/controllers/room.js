const Room  = require('../models/Room')

module.exports = {
    createRoom: async(req, res, next)=>{
        const room = new Room({
            name: req.body.name,
            user: req.user._id,
        })
        try{
            const savedRoom = await room.save()
            res.status(200).json(savedRoom)
        } catch(err){
            res.status(400).json({message: err})
        }
    },
    getRooms: async(req, res, next)=>{
        try{
            const rooms = await Room.find({user: req.user._id})
            res.status(200).json(rooms)
        } catch(err){
            res.status(400).json({message: err})
        }
    },
    getRoom: async(req, res, next)=>{
        try{
            const room = await Room.findById(req.params.roomId)
            res.status(200).json(room)
        } catch(err){
            res.status(400).json({message: err})
        }
    },
    updateRoom: async(req, res, next)=>{
        try{
            const room = await Room.updateOne({_id: req.params.roomId}, {$set: {name: req.body.name}})
            res.status(200).json(room)
        } catch(err){
            res.status(400).json({message: err})
        }
    },
    deleteRoom: async(req, res, next)=>{
        try{
            const room = await Room.remove({_id: req.params.roomId})
            res.status(200).json(room)
        } catch(err){
            res.status(400).json({message: err})
        }
    }
}