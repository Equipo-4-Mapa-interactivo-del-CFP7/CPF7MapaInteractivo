const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(
'que el usuario se encuentra dentro del mapa interactivo',

async ()=>{

console.log("usuario dentro del mapa")

}

)

When(

'busca {string}',

async (espacio)=>{

console.log("buscando:", espacio)

}

)

Then(

'el sistema muestra resultados relacionados',

async ()=>{

console.log("resultado encontrado")

}

)

Then(

'el sistema informa que no existen resultados',

async ()=>{

console.log("sin resultados")

}

)