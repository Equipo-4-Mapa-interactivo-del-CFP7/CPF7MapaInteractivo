Feature: Visualizar ficha descriptiva

Como usuario del mapa interactivo

Quiero acceder a información contextual

Para orientarme mejor dentro del CFP7


Scenario: Abrir ficha descriptiva de un sector

Given que el usuario selecciona un espacio válido

When accede a la ficha descriptiva

Then el sistema muestra información contextual


Scenario: Mostrar información accesible

Given que el espacio seleccionado posee accesibilidad

When visualiza la ficha descriptiva

Then el sistema muestra información de accesibilidad