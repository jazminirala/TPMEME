//paquetes necesarios para el proyecto//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');


// creando ruta raíz //

//define que la CARPETA public tenga sus recursos estáticos, como css, imágenes etc//
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res){
    console.log("Entrega mi ruta raíz");
    //entrega el html//
    res.sendFile(path.join(__dirname, "../public/index.html"));

})

// Rutas de mi JSON para MEMESS. colocamos nuestra dependencia nueva fs. //

app.get("/infoMemes", function (req, res){
    fs.readFile(path.join(__dirname,"infomemes.json"), function(error, data){
        if(error == undefined)
        {
            var memesOk = JSON.parse(data);
            res.send(memesOk);
        }
    })
})


// JS propios
const login = require('./index');


// Manejo de sesión en Express con opciones basatante default, que no interesa
// ahora profundizar, que definen el comportamiento ante ciertas ocasiones, más
// bien orientadas a cuestiones de seguridad.
app.use(expressSession({
  secret: 'mucho ruido y pocas nueces',
  resave: false, //especifica que la sesión se vuelve a guardar. False no se vuelve a guardar
  saveUninitialized: false //indica que si la sesión debe guardarse. False reduce el espacio...
}))

// Middleware de body-parser para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para recursos estáticos.
app.use(express.static(path.join(__dirname, '../public')));


// GET /
app.get('/', (req, res) => {
  console.log(req.session.userId);
  // Responde con la página index.html
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// POST /login
app.post('/index', (req, res) => {
  
  if (req.body.user !== undefined && req.body.password !== undefined) {

    if (login.validarUsuario(req.body.user, req.body.password)) {
      // Si validó bien, guardo la sesión y voy al home
      req.session.userId = req.body.user;
      res.redirect('/index');
    } else {
      // Si validó mal, destruyo la sesión (por si la hubiera) y recargo página inicial
      req.session.destroy();
      res.redirect('/');
    }

  } else {
    // Lo mismo si el usuario o clave no fueron enviados
    req.session.destroy();
    res.redirect('/');
  }
  
});



// GET /home
app.get('/index', (req, res) => {

  // Cuando quiere ir a home, valido sesión.
  if (req.session.userId !== undefined) {
    // Responde con la página home.html
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } else {
    // Si mi usuarix tipeó "localhost:3000/home" en la barra de direcciones del navegador y
    // no tenía una sesión activa, lo redirijo a la página que tiene el login.
    res.redirect("/");
  }

});


// GET logout
app.get('/logout', (req, res) => {

  // Destruyo sesión y redirijo al login.
  req.session.destroy();
  res.redirect("/");

});





//indica en qué puerto estamos trabajando//
app.listen(8000, function(){
    console.log("Escuchando puerto 8000");
})


