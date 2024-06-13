const express = require("express");
const router = express.Router();

router.get('/comida', (req, res) => {
    return res.json({
        mensaje: 'Hola router'
    });
});

module.exports = router;
