const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(

'el usuario seleccionó un destino válido',

async ()=>{

console.log("destino válido")

}

)

When(

'solicita visualizar el recorrido',

async ()=>{

console.log("mostrar recorrido")

}

)

Then(

'el sistema muestra una ruta visible',

async ()=>{

console.log("ruta visible")

}

)

Then(

'el sistema prioriza recorridos accesibles',

async ()=>{

console.log("ruta accesible")

}

)