//paquetes necesarios para el proyecto//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const expressSession = require('express-session');




// JS propios
const login = require('./login');


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






//indica en qué puerto estamos trabajando//
app.listen(8000, function(){
    console.log("Escuchando puerto 8000");
})

/*----lOGUIN express-session------*/

