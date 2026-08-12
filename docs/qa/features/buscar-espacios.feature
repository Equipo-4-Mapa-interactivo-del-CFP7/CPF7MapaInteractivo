Feature: Buscar espacios del CFP7

Como usuario del mapa interactivo

Quiero buscar espacios dentro de la institución

Para localizar rápidamente mi destino


Scenario: Buscar aula existente

Given que el usuario se encuentra dentro del mapa interactivo

When busca "Aula 1"

Then el sistema muestra resultados relacionados


Scenario: Buscar oficina existente

Given que el usuario se encuentra dentro del mapa interactivo

When busca "Secretaría y Dirección"

Then el sistema muestra resultados relacionados


Scenario: Buscar espacio inexistente

Given que el usuario se encuentra dentro del mapa interactivo

When busca "Aula 999"

Then el sistema informa que no existen resultados