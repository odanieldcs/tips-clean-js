/**
 * Evite adicionar palavras desnecessárias
 */

// ruim 👎
const roles = {
  rolesUser: [{}],
  rolesGuest: [{}],
  roleManager: [{}],
};

// bom 😃
const roles = {
  user: [{}],
  guest: [{}],
  manager: [{}],
};
