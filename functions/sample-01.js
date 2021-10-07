/**
 * Funções devem expressar uma ação, sempre com o objetivo de ser reutilizável.
 */

// ruim 👎
function pesquisaCliente(id) {}

function listarClientes() {}

function atualizaCliente(id, data) {}

// bom 😃
// Retornar um objeto cliente
function getCustomerById(id) {}

// Retornar um objeto cliente
function getManyCustomers(filters) {}

// Atualiza um cliente
function updateCustomer(data) {}
