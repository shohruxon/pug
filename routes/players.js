const { Router } = require('express')
const router = Router()



const foodball = [
    { name: "Messi", id: 1 },
    { name: "Ronaldo", id: 2 },
    { name: "Neymar", id: 3 },
];




router.get("/", (req, res) => {
    res.send(foodball);
});

module.exports = router