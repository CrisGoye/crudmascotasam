const express = require('express')
const router = express.Router();

const Mascota = require("../models/mascotas");


router.get("/", async (req, res)=>{
try {
    const arrayMascotas = await Mascota.find();
    console.log(arrayMascotas)
} catch (error) {
    console.log(error)
}

 //   res.render('mascotas', { arrayMascotas: [
//     {id: 'mas001', nombre: 'Kira', descripcion: "Perro Pastor Aleman"},
//        {id: 'mas002', nombre: 'Bella', descripcion: "Gata Criolla"},
//      {id: 'mas003', nombre: 'Niña', descripcion: "Perro French Poodle"},
//        {id: 'mas004', nombre: 'Hanna', descripcion: "Perro Labrador"}
//    ]});
});


module.exports = router;