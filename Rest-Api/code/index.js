const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones utilizamos el puerto 3000
app.set('port', process.env.PORT || 3001);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/Metodos',require('./routes/Metodos')); 

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
   });
