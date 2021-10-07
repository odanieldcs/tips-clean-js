/**
 * Não use números ou strings mágicas
 */

// ruim 👎
setTimeout(doAnything, 1000);
user.role = "guest";

// bom 😃
const TIME_AWAIT = 1000;
const USER_ROLE = "guest";

setTimeout(doAnything, TIME_AWAIT);

user.role = USER_ROLE;
