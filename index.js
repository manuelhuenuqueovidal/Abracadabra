//Creación de servidor Express.
const express = require('express')
const app = express()
app.listen(3000, () => {console.log('El servidor está inicializado en el puerto 3000')
})

//Definir assets como carpeta pública del servidor
app.use(express.static("assets"));

app.get("/", (req, res) => {
res.sendFile(__dirname + '/index.html')
})

//Creación de objeto.
const usuarios = ["Juan", "Jocelyn", "Astrid", "María", "Ignacia", "Javier", "Brian"]

//Ruta usuarios.
app.get("/abracadabra/juego/:usuario", (req, res, next) => { 
    const usuario = req.params.usuario;
    usuarios.includes(usuario) ? res.sendFile(__dirname + '/index.html') : res.sendFile(__dirname + '/who.html');
});

app.get("/abracadabra/usuarios", function (req, res) {
res.send({ usuarios });
});

//Ruta abracadabra conejo o Voldemort.
app.get("/abracadabra/conejo/:n", (req, res) => {
    const n = Math.floor(Math.random() * 4);
    const numero = parseInt(req.params.n);
    if (numero === n) {
        res.sendFile(__dirname + '/conejo.html');
    } else {
        res.sendFile(__dirname +'/voldemort.html');
    }
});

//Lógica para página no encontrada al equivocarse en la ruta.
app.get("*", (req, res) => {
 res.sendFile(__dirname + '/noencontrada.html');});