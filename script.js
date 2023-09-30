const nombres = ["antonio", "bibiana", "carlos", "diana"];

// Funciones por expresion
console.log("From ForEach() function")
nombres.forEach( function (currenttValue) {
  console.log(currentValue);
});

// Funciones anonimas
letters.forEach (function () {
  console.log("un elemento");
});

//Funciones flecha
letters.forEach( (element) => console.log(element));

