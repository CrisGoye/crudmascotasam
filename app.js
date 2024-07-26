const express = require('express')
const app = express()
const port = 3000

/* Establecemos el motor de plantillas */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* middleware para contenido estatico*/
app.use(express.static(__dirname + '/public'));


/*enrutamiento*/
app.get('/', (req, res) => {
    // res.send('!!!!Hello World!')
    res.render('index', {titulo: "Bienvenido a Node.js con Express y con EJS"});
})

/*ejemplo de enrutamiento */
app.get("/servicios", (req, res) => {
    //res.send("Bienvenido a la pagina de servicios");
    res.render('index', {titulo: "Nuestros servicios Dinamicos"});
});

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