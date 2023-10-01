const animales = ["oso", "perro", "gato", "loro", "caracol"]

// con funcion expresion
const lista = function (animal) {
  console.log (animal);
};

// con funcion anomina
animales.foreach (function (animal) {
console.log (animal);
});

// con funcion flecha
animales.foreach((animal) => console.log (animal));
