const express = require('express');

const app = express();

app.post('/quiz', (req, res) => {
    let body = req.body;
    let correctas = 0;
    if (body.q1 === 'p1') correctas++;
    if (body.q2 === 'p2') correctas++;
    console.log(body);
    res.json({
        ok: true,
        calificacion: correctas,
        resultados: {
            pregunta1: `Respuesta Correcta: q1, respuesta del alumno: ${body.q1}`,
            pregunta2: `Respuesta Correcta: q2, respuesta del alumno: ${body.q2}`,
        }
    });
});


module.exports = app;