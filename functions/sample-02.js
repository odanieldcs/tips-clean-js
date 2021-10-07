/**
 * Use argumentos padrões no lugar de condicionais
 */

// ruim 👎
function printDefaultCountryOrArgument(country) {
  const newCountry = country || "Brasil";
  return newCountry;
}

console.log(printDefaultCountryOrArgument());

// bom 😃
function printDefaultCountryOrArgument(country = "Brasil") {
  return country;
}

console.log(printDefaultCountryOrArgument());
