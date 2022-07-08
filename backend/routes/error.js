const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(418).json({
        'message':'error',
    })
})
module.exports = router