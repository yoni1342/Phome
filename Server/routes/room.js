const express = require('express');
const {createRoom,deleteRoom,getRoom,getRooms,updateRoom} =require('../controllers/room')
const router = express.Router();

router.post('/createRoom',createRoom);
router.get('/getRooms',getRooms);
router.get('/getRoom/:roomId',getRoom);
router.put('/updateRoom/:roomId',updateRoom);
router.delete('/deleteRoom/:roomId',deleteRoom);

module.exports = router;
