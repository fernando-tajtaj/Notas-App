const express = require('express');
const router = express.Router();

const Nota = require('../models/Notas');

router.get('/notas/agregarnota', (req, res) => {
    res.render('notas/agregarnota');
});

router.post('/notas/nuevanota', async (req, res) => {
    const { titulo, descripcion } = req.body;
    const errores = [];

    if (!titulo) {
        errores.push({ error: 'No ingreso ningun titulo' });
    };

    if (!descripcion) {
        errores.push({ error: 'No ingreso ninguna descripcion' });
    };

    if (errores.length > 0) {
        res.render('notas/agregarnota', {
            errores,
            titulo,
            descripcion
        });
        console.log(errores);
    } else {
        const nuevaNota = new Nota({ titulo, descripcion });
        await nuevaNota.save();
        res.redirect('/notas/notas');
    }
});

router.get('/notas/notas', async (req, res) => {
    const listadoNotas = await Nota.find().sort({ fechaCreacion: 'desc' });
    res.render('notas/notas', { listadoNotas });
});

module.exports = router;