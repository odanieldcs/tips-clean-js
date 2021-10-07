/**
 * Use atribuição de variáveis via desestruturação
 */

// ruim 👎
const user = {
  firstName: "Daniel",
  lastName: "Castro",
  social: {
    site: "https://www.danieldcs.com",
    github: "https://github.com/danielcsrs",
  },
  skills: {
    frontend: {
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: ["React", "Next.js", "React Native"],
    },
    backend: {
      languages: ["JavaScript", "C#", "Go", "PHP"],
    },
  },
};

function summary() {
  console.log(`Nome completo: ${user.firstName} ${user.lastName}`);
  console.log(`Site: ${user.social.site}`);
  console.log(`Habilidades: ${user.skills.backend.languages}`);
}

summary();
// Output:
// Nome completo: Daniel Castro
// Site: https://www.danieldcs.com
// Habilidades: JavaScript,C#,PHP

// bom 😃
const user = {
  firstName: "Daniel",
  lastName: "Castro",
  age: 33,
};

const { firstName, lastName } = user;

console.log(`${firstName} ${lastName}`);
// Output:
// Daniel Castro
