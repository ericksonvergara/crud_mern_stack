const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const Modelusuario = mongoose.model('usuarios', eschemausuario)

module.exports = router

//ruta de prueba
// router.get('/ejemplo', (req, res) => {
//     res.end('saludo carga desde ruta ejemplo')
// })

//Ruta para agregar el usuario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new Modelusuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todas los usuarios
router.get('/obtenerusuarios', (req, res) => {
    Modelusuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener la data de todos los usuarios
router.post('/obtenerdatausuario', (req, res) => {
    Modelusuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Actualizar  usuario
router.post('/actualizausuario', (req, res) => {
    Modelusuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('Usuario Actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar  usuario
router.post('/borrarusuario', (req, res) => {
    Modelusuario.findOneAndDelete({idusuario:req.body.idusuario}, (err)=>{
        if(!err){
            res.send('Usuario Borrado correctamente')
        }else{
            res.send(err)
        }
    })
})