const {Router} = require('express');
const router = Router();

const metodos =require('../MetodosO.json');
console.log(metodos);

router.get('/', (req, res) =>{
    res.json(metodos);
});

module.exports= router;