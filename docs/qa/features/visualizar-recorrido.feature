Feature: Visualizar recorridos del CFP7

Como usuario del mapa interactivo

Quiero visualizar recorridos

Para llegar fácilmente a mi destino


Scenario: Visualizar recorrido hacia aula

Given que el usuario seleccionó un destino válido

When solicita visualizar el recorrido

Then el sistema muestra una ruta visible


Scenario: Visualizar recorrido accesible

Given que existen múltiples alternativas de recorrido

When el usuario requiere accesibilidad física

Then el sistema prioriza recorridos accesibles