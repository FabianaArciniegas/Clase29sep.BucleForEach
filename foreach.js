
const animales = ["oso", "perro", "gato", "loro", "caracol"]

// con funcion expresion
const lista = function (animal) {
  console.log (animal);
};
animales.forEach (lista);

// // con funcion anomina

animales.forEach (function (animal) {
console.log (animal);
});

// con funcion flecha
animales.forEach((listaanimal) => console.log (listaanimal));
