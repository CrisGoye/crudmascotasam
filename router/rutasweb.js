const express = require('express')
const router = express.Router();

/*enrutamiento*/
router.get('/', (req, res) => {
    res.render('index', {titulo: "Bienvenido a Node.js con Express y con EJS"});
})

/*ejemplo de enrutamiento */
router.get("/servicios", (req, res)=>{
    res.render('servicios', {titulo: "Nuestros servicios Dinamicos"});
});

module.exports = router;