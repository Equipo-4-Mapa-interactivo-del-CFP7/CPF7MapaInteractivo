const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(

'que el usuario detecta una incidencia',

async ()=>{

console.log("incidencia detectada")

}

)

When(

'completa la información requerida',

async ()=>{

console.log("completar reporte")

}

)

When(

'envía el reporte',

async ()=>{

console.log("enviar reporte")

}

)

Then(

'el sistema confirma recepción del reporte',

async ()=>{

console.log("reporte enviado")

}

)

Given(

'que el usuario intenta enviar un reporte',

async ()=>{

console.log("validando campos")

}

)

When(

'existen campos obligatorios vacíos',

async ()=>{

console.log("faltan campos")

}

)

Then(

'el sistema informa qué información falta completar',

async ()=>{

console.log("mostrar validaciones")

}

)