# QA – Mapa Interactivo Accesible CFP N.º 7

## Objetivo

La presente estructura tiene como objetivo centralizar los artefactos iniciales de QA utilizados para validar funcionalidades del MVP del proyecto:

**Mapa Interactivo Accesible – CFP N.º 7**

La organización propuesta busca facilitar:

* testing funcional
* trazabilidad entre requerimientos y pruebas
* automatización progresiva
* colaboración entre QA, Frontend, Backend y UX/UI
* validación temprana mediante datos simulados (Mock Data)

---

# Estructura QA

```text
qa/

├── features/
├── step-definitions/
├── test-data/
└── README.md
```

## Features

Contiene escenarios escritos en formato Gherkin.

Objetivo:

* describir comportamientos esperados
* documentar funcionalidades
* servir como base para automatización

Ejemplos:

* buscar espacios
* visualizar recorridos
* acceder a fichas descriptivas
* reportar incidencias

---

## Step Definitions

Contiene la implementación técnica asociada a escenarios Gherkin.

Objetivo:

* conectar escenarios con automatización
* permitir evolución hacia WebdriverIO / Cucumber
* reutilizar pasos comunes

---

## Test Data

Contiene datos utilizados para ejecutar escenarios QA.

Ejemplos:

* espacios válidos
* recorridos
* datos simulados
* reportes

Estos datos pueden evolucionar junto al producto.

---

# Relación con Mock Data

El proyecto utiliza estructuras JSON simuladas para desacoplar QA del desarrollo Frontend y Backend.

Flujo esperado:

```text
Mock Data

↓

Test Data

↓

Features (Gherkin)

↓

Step Definitions

↓

Automatización
```

---

# Alcance Inicial QA

Actualmente se contemplan validaciones iniciales relacionadas con:

* búsqueda de espacios
* recorridos accesibles
* fichas descriptivas
* reportes
* accesibilidad
* mobile
* offline
* usabilidad

---

# Observaciones

La presente estructura representa una implementación inicial evolutiva.

Podrá modificarse según:

* nuevas validaciones
* refinamiento funcional
* decisiones técnicas
* evolución del MVP

El objetivo principal es facilitar la colaboración interdisciplinaria y construir una base inicial reutilizable para testing manual y automatizado.
