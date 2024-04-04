require("dotenv").config();

const express = require("express");

const db = require("./db");

const app = express();

app.use(express.json());

// Rota para deletar o usuário
app.delete("/clientes/:id", (request, response) => {
    const id = parseInt(request.param.id);
    db.deleteCustomer(id);
    response.sendStatus(204);
})

// Rota de atualização de usuário
app.patch("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const customer = request.body;
    db.updateCustomer(id, customer);
    response.sendStatus(200);
})

// Rota de cadastro de usuário
app.post("/clientes", (request, response) => {
    const customer = request.body;
    db.insertCustomer(customer);
    response.sendStatus(201);
})

app.get("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    response.json(db.selectCostumer(id));
})

app.get("/clientes", (request, response) => {
    response.json(db.selectCustomers());
})

app.get("/", (request, response, next) => {
    response.json({
        message: "It´s alive!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App now is running!");
});