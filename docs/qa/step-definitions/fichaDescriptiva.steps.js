const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(

'el usuario selecciona un espacio válido',

async ()=>{

console.log("espacio válido")

}

)

When(

'accede a la ficha descriptiva',

async ()=>{

console.log("abrir ficha")

}

)

Then(

'el sistema muestra información contextual',

async ()=>{

console.log("mostrar información")

}

)

Then(

'el sistema muestra información de accesibilidad',

async ()=>{

console.log("mostrar accesibilidad")

}

)