const express = require('express')
const app = express()
const port = 3000

/* conexion a la base de datos */
const mongoose = require('mongoose');
const usuario = 'crisgstack6am';
const password = '9DtoUyxtgl4idgc';
const dbName = 'mascotas';

const uri = `mongodb+srv://${usuario}:${password}@cluster0.ile9mkh.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(uri)
  .then(()=> console.log('conectado a MongoDB')) 
  .catch(e=> console.log('error de conexión a MongoDB', e))

/* Establecemos el motor de plantillas */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* middleware para contenido estatico*/
app.use(express.static(__dirname + '/public'));

/* enrutamiento proyecto */
app.use('/', require('./router/rutasweb'));
app.use('/mascotas', require('./router/mascotas'));


/* direccionar a vista 404 cuando se presente el error 404 */
app.use((req, res, next)=>{
    res.status(404).render('404', {
      titulo: "Error 404",
      descripcion: "Página No Encontrada"
    });
  })

app.listen(port, () => {
    console.log(`Ejemplo aplicacion Node con Express escuchando en puerto ${port}`)
})