const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
    //res.send("Funciona");
});

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});