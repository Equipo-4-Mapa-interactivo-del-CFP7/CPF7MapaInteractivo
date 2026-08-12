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

Contiene ejemplos iniciales de implementación técnica asociados a los escenarios definidos en Gherkin.

Los archivos utilizan la estructura de `@wdio/cucumber-framework` para representar cómo los pasos definidos en los escenarios pueden vincularse posteriormente con código ejecutable.

Actualmente se trata de una implementación inicial de referencia, utilizada para establecer la estructura y relación entre:

Feature / Gherkin  
↓  
Step Definition  
↓  
Implementación automatizada

Los ejemplos permiten definir una estructura base para una futura automatización utilizando:

- WebdriverIO
- Cucumber
- JavaScript

La implementación de los pasos funcionales se encuentra en una etapa inicial. Los ejemplos actuales utilizan acciones simples como `console.log()` para representar el comportamiento esperado.

El objetivo es establecer una base reutilizable para evolucionar posteriormente hacia la automatización de los escenarios definidos en Gherkin.

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

---

# 🧪 Diseño de Casos de Prueba

Los casos de prueba fueron diseñados durante una etapa temprana del proyecto, **antes de la disponibilidad de una implementación funcional**, tomando como base los requerimientos, User Stories, escenarios y criterios de aceptación.

El objetivo fue definir anticipadamente qué comportamientos debían ser validados y establecer una estructura preparada para la posterior ejecución y seguimiento de las pruebas.

Los casos contemplan:

- identificación del caso de prueba
- Epic, Feature y User Story asociada
- escenario
- título y descripción
- prioridad
- tipo de prueba
- precondiciones
- pasos de ejecución
- resultado esperado
- resultado de ejecución
- estado
- evidencia
- comentarios

Los campos relacionados con la ejecución (`Result`, `Status`, `Evidence` y `Comments`) forman parte de la estructura preparada para la etapa posterior de ejecución y seguimiento.

## Trazabilidad

La relación entre los requerimientos y los casos de prueba se estructuró mediante:

Epic  
↓  
Feature  
↓  
User Story  
↓  
Scenario  
↓  
Test Case  
↓  
Acceptance Criteria  
↓  
Expected Result

Este enfoque permite mantener trazabilidad entre las necesidades funcionales del producto y las pruebas diseñadas.

---

# 🔄 Enfoque QA temprano / Shift-Left

El trabajo de QA se inició durante una etapa temprana del proyecto, participando en el análisis funcional y en el diseño de pruebas antes de contar con una implementación funcional.

### Flujo de trabajo

Requerimientos  
↓  
Análisis Funcional  
↓  
User Stories / Acceptance Criteria  
↓  
Diseño de escenarios  
↓  
Test Case Design  
↓  
Mock Data  
↓  
Implementación  
↓  
Ejecución de pruebas  
↓  
Re-testing  
↓  
Automatización progresiva

Este enfoque permite identificar criterios de validación de manera temprana y preparar los escenarios de prueba antes de la implementación.

---

# 📊 Cobertura inicial de QA

Los escenarios diseñados contemplan diferentes áreas de validación.

### Testing funcional

- Búsqueda de espacios
- Visualización de recorridos
- Fichas descriptivas
- Reportes de incidencias
- Validaciones de formularios

### Accesibilidad

- Recorridos accesibles
- Identificación de accesos adaptados
- Navegación cognitiva
- Compatibilidad con lectores de pantalla

### Responsive / UI

- Dispositivos móviles
- Tablets
- Adaptación de la interfaz
- Usabilidad

### Disponibilidad

- Funcionamiento offline
- Persistencia de información previamente cargada

---

# 🔐 Publicación de artefactos

Este repositorio contiene una selección de artefactos de QA preparados para portfolio.

No se incluyen:

- Evidencias reales de ejecución
- Capturas de pantalla del proyecto
- Reportes internos
- Tableros de seguimiento
- Comentarios internos
- Credenciales
- Datos personales
- Tokens
- Información sensible

El objetivo de esta publicación es demostrar el proceso de análisis, diseño y planificación de QA sin exponer información interna del proyecto colaborativo.

---

# 📌 Evolución

La documentación representa una implementación inicial y evolutiva de QA.

Los artefactos pueden modificarse según:

- Nuevos requerimientos
- Refinamiento funcional
- Cambios en el producto
- Nuevos escenarios de prueba
- Resultados de ejecución
- Decisiones técnicas
- Incorporación progresiva de automatización
