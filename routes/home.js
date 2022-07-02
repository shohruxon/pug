const { Router } = require('express')
const router = Router()



router.get("/", (req, res) => {
    // res.send("bosh sahifa");
    res.render('users',{
        title: 'home page'
    })
    
});

module.exports = router

