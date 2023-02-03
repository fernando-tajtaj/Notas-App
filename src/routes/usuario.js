const express = require('express');
const router = express.Router();

router.get('/usuario/registrar', (req, res) => {
    res.render('usuarios/registro');
});

router.get('/usuario/iniciarsesion', (req, res) => {
    res.render('usuarios/iniciarsesion');
});

module.exports = router;