Feature: Reportar incidencias y barreras

Como usuario del mapa interactivo

Quiero reportar problemas encontrados

Para mejorar la accesibilidad y orientación


Scenario: Enviar reporte exitosamente

Given que el usuario detecta una incidencia

When completa la información requerida

And envía el reporte

Then el sistema confirma recepción del reporte


Scenario: Validar campos obligatorios

Given que el usuario intenta enviar un reporte

When existen campos obligatorios vacíos

Then el sistema informa qué información falta completar