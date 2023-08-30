const express = require('express')
const calc = require('./util/calculadora')

const app = express();

const PORT = 8080;


app.get("/somar/:a/:b", function(req, res){
    let a = req.params.a
    let b = req.params.b
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.listen(PORT, function(){
    console.log("app funcional na porta: " + PORT);
})