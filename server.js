const express = require('express');
const app = express();

//libera request em json
app.use(express.json());



//criando rota api
app.use('/api', require('./src/routes.js'));


//iniciando servidor
app.listen(3001, () =>{
    console.log('Servidor On');
})