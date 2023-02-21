const express  = require('express')
require("dotenv").config()
const color = require("colors")
const {connect_db} = require('./config/db')
const authRouter = require('./routes/auth')
const roomRouter = require('./routes/room')
const cors = require('cors')

const app = express()

app.use(cors());

app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/room',roomRouter)


app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})


app.listen(process.env.PORT, "192.168.8.100",() => {
    connect_db()
    console.log(`Server is running on port ${process.env.PORT}`)
})
