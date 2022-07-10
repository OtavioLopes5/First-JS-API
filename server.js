
const express = require("express"); //1
const app = express();

const data = require("./data.json"); //4

app.use(express.json()); //5

//3
app.get("/clients", function(req,res) { 
    res.json(data);
});

app.get("/clients/:id", function(req,res) { //7
    const { id } = req.params;
    const clients = data.find(cli => cli.id == id);

    if (!clients) return res.status(204).json(); //8

    res.json(clients);
});

app.post("/clients", function(req,res) { //9
    const {name,email} = req.body;

    //salvar
    res.json({name,email});
});

app.put("/clients/:id", function(req,res) { //10
    const { id } = req.params;
    const clients = data.find(cli => cli.id == id);

    if (!clients) return res.status(204).json(); //8

    const {name} = req.body;
    clients.name = name;

    res.json(clients);
});

app.delete("/clients/:id", function(req,res) { //11
    const { id } = req.params;
    const clients = data.filter(cli => cli.id != id);

    res.json(clients);
});

app.listen(3000, function() { //2
   console.log('O servidor está rodando!') ;
});