const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const morgan = require('morgan');
const cors = require('cors');  // It seems like you are using cors but didn't require it.
const comidaRouter = require('./routers/comidaRouter');

// Middleware
app.use(cors());
app.use(express.static('public'));

// To use the public folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/Api', comidaRouter);

app.use((req, res) =>{
    res.status(404).send({message: 'Ruta no encontrda'});
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
