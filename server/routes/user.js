const router = require('express').Router()
const { verifyToken } = require('../middleware/verifyToken')

router.put("/:id" , verifyToken , (req , res)=>{
    if(req.user.id === req.params.id){

    }
})

module.exports = router 