const letters = ["antonio", "bibiana", "carlos", "diana"];

// Funciones por expresion
const f= function () {
  console.log("un elemento");
};
letters.forEach(f);

// Funciones anonimas
letters.forEach (function () {
  console.log("un elemento");
});

//Funciones flecha
letters.forEach( () => console.log("un elemento"));
