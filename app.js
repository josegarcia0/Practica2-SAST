const express = require("express");
const app = express();

app.get("/usuario", (req, res) => {

    // Entrada controlada por el usuario
    const usuario = req.query.username;

    // Vulnerabilidad intencional: Code Injection
    eval(usuario);

    res.send("Usuario procesado");
});

app.listen(3000);
