const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.render('mascotas', {titulo: "Pagina de Mascotas"});
});


module.exports = router;