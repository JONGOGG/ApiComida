const express = require("express")
const app = express()
const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.json({mensaje: "Aplicacion Funcionando Correctamente"})
})

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})