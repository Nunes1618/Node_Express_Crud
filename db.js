const costumers = [{
    id: 1,
    nome: "Wesley",
    idade: 27,
    uf: "SP"
}];

function selectCustomers(){
    return costuclsmers;
}

function selectCustomer(id){
    return costumers.find(c => c.id === id);
}
// Função criada referente a rota de cadastro
function insertCustomer(customer) {
    costumers.push(customer);
}
// Função criada referente a rota de atualização
function updateCustomer(id, customerData) {
    const customer = costumers.find(c => c.id === id);
    if (!customer) return;
    customer.nome = customerData.nome;
    customer.idade = customerData.idade;
    customer.uf = customerData.uf;
}
// Função de delete criada assim como as demais
function deleteCustomer(id){
    const index = costumers.findIndex(c => c.id === id);
    costumers.splice(index, 1);
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}