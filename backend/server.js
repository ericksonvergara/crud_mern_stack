const express = require('express')
const app = express()

//IMPORTAR CONEXION MONGODB
const archivoBD = require('./conexion')

//Importacion del archivo de rutas y modelo de usuario
const rutausuarios = require('../rutas/usuario')

//Importacion de body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

//prueba
app.use('/api/usuario', rutausuarios)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js Corrriendo...')
})

//CONFIGIRAR SERVER BASICO
app.listen(5000, function () {
    console.log('El servidor NODE esta corriendo correctamente')
})