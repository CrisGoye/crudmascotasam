const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.render('mascotas', {arrayMascotas: [
        {id: 'mas001', nombre: 'Kira', descripcion: "Perro Pastor Aleman"},
        {id: 'mas002', nombre: 'Bella', descripcion: "Gata Criolla"},
        {id: 'mas003', nombre: 'Niña', descripcion: "Perro French Poodle"}

    ]});
});


module.exports = router;