# Criterios de Aceptación Iniciales

**Proyecto:** Mapa Interactivo Accesible – CFP N.º 7

---

# 1. Introducción

El presente documento tiene como objetivo definir criterios de aceptación iniciales basados en el análisis funcional preliminar y la información relevada con la institución.

Estos criterios representan una primera aproximación evolutiva destinada a facilitar:

- alineación entre equipos
- definición funcional del MVP
- construcción de test cases
- validaciones QA
- futuras automatizaciones
- trazabilidad funcional

---

# 2. Buscar Espacio

## Objetivo

Permitir al usuario localizar rápidamente aulas, oficinas, sectores o espacios relevantes dentro del CFP N.º 7.

## Criterios de aceptación

### Escenario: búsqueda exitosa

**Dado** que el usuario se encuentra dentro de la aplicación

**Cuando** ingresa el nombre de un aula, oficina o sector válido

**Entonces** el sistema deberá mostrar resultados relacionados

**Y** permitir seleccionar el espacio buscado

---

### Escenario: búsqueda sin resultados

**Dado** que el usuario realiza una búsqueda

**Cuando** ingresa un nombre inexistente o inválido

**Entonces** el sistema deberá informar que no existen resultados

**Y** permitir realizar una nueva búsqueda

---

# 3. Visualizar Recorrido

## Objetivo

Permitir visualizar cómo llegar desde un punto de acceso hasta el destino seleccionado.

## Criterios de aceptación

### Escenario: visualización de recorrido

**Dado** que el usuario seleccionó un espacio válido

**Cuando** solicita visualizar el recorrido

**Entonces** el sistema deberá mostrar una ruta visible

**Y** destacar origen y destino

**Y** mostrar indicaciones simples para completar el recorrido

---

### Escenario: recorrido accesible

**Dado** que existen múltiples alternativas de recorrido

**Cuando** el usuario requiere accesibilidad física

**Entonces** el sistema deberá priorizar recorridos accesibles

**Y** mostrar accesos, rampas o alternativas disponibles

---

# 4. Acceder a Ficha Descriptiva

## Objetivo

Brindar información contextual relevante del espacio seleccionado.

## Criterios de aceptación

### Escenario: acceso exitoso a ficha descriptiva

**Dado** que el usuario selecciona un espacio

**Cuando** accede a la ficha descriptiva

**Entonces** deberá visualizar:

- nombre del sector
- ubicación
- información relevante
- accesibilidad disponible
- referencias visuales si existieran

---

# 5. Enviar Reporte de Incidencia o Barrera

## Objetivo

Permitir reportar problemas relacionados con orientación, circulación o accesibilidad.

## Criterios de aceptación

### Escenario: envío exitoso

**Dado** que el usuario detecta una incidencia

**Cuando** completa la información requerida

**Y** envía el reporte

**Entonces** el sistema deberá confirmar recepción del reporte

---

### Escenario: validación de campos obligatorios

**Dado** que el usuario intenta enviar un reporte

**Cuando** existen campos obligatorios vacíos

**Entonces** el sistema deberá informar qué información falta completar

---

# 6. Criterios Transversales de Accesibilidad

Los siguientes criterios aplican a todas las funcionalidades:

- Navegación clara y comprensible
- Lenguaje simple
- Buen contraste visual
- Compatible con dispositivos móviles
- Evitar exceso de pasos innecesarios
- Consistencia visual entre pantallas
- Soporte mínimo para lectores de pantalla
- Funcionalidad utilizable sin audio obligatorio
- Minimizar carga cognitiva

---

# 7. Observaciones Finales

Los presentes criterios representan una versión inicial basada en la información disponible al momento.

Se consideran criterios evolutivos sujetos a:

- nuevas iteraciones
- validaciones funcionales
- relevamientos posteriores
- feedback institucional
- refinamiento interdisciplinario del equipo

Su objetivo principal es facilitar una comprensión compartida sobre cuándo una funcionalidad puede considerarse funcionalmente aceptada.
