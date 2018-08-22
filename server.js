const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('./mongooseClient');

const PORT = process.env.PORT || 3000;

var cors = require("cors");
app.use(cors());

const Alumno = require('./alumnoModel');

//CREATE

app.post('/api/v1',(req,res) => {
    const {nombre,apellido,edad} = req.body;

    let nuevoAlumno = Alumno({
        nombre,
        apellido,
        edad
    });

    nuevoAlumno.save((error,success) =>{ //success es el objeto alumno
        if(error) throw error;
        res.status(201).send(success);
    });
});

//READ ALL
app.get('/api/v1', (req,res) => {
    Alumno.find().exec()
    .then(alumnos => {
        res.status(200).send(alumnos);
    })
    .catch(error => {
        res.status(404).send(error);
    });
});

//READ BY ID
app.get('/api/v1/:aid',(req,res) =>{
        let {aid} = req.params;
        Alumno.findById(aid).exec()
        .then(alumno => {
            res.status(200).send(alumno);
        })
        .catch(error => {
            res.status(404).send(error);
        })
});

//UPDATE
app.put('/api/v1/:aid', (req,res) =>{
    let {aid} = req.params;
    const {nombre,apellido,edad, email,ciudad} = req.body;
    
    let alumnoActualizado = {
        nombre,
        apellido,
        edad,
        email,
        ciudad
    };

    Alumno.findByIdAndUpdate(aid,alumnoActualizado, {new:true}).exec()
    .then(alumno_actualizado => {
        res.status(200).send(alumno_actualizado);
    })
    .catch(error => {
        res.status(404).send(error);
    });

});

//DELETE
app.delete('/api/v1/:aid',(req,res) => {
    let {aid} = req.params;
    Alumno.findByIdAndRemove(aid).exec()
    .then(alumno => {
        res.status(200).send(alumno);
    })
    .catch(error => {
        res.status(404).send(error);
    });
});

app.listen(PORT, () => {
    console.log("Escuchando puerto :" + PORT);
})


