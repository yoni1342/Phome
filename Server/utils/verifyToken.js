const jwt = require('jsonwebtoken')

module.exports = {
    auth: (req,res,next)=>{
        const token = req.header("access_token")
        if(!token) return res.status(401).send('Access Denied')
        
        try{
            const verfied = jwt.verify(token, process.env.JWT)
            req.user = verfied
            next()
        } catch(err){
            res.status(400).send("Invalid Token"); 
        }
    },
}