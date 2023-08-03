const express = require('express');
const app = express();
const routing = require('./layers/routing');

app.use('/', routing);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
