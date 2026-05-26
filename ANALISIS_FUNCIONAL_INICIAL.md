# Análisis Funcional Inicial

## Proyecto: Mapa Interactivo Accesible – CFP N.º 7

### Versión Inicial Evolutiva – Sujeta a Iteración y Validación del Cliente

> Documento inicial propuesto como base colaborativa para alinear criterios funcionales entre las distintas áreas del proyecto.  
> Su contenido podrá evolucionar y ajustarse en función de nuevas validaciones, relevamientos y decisiones del equipo y del cliente.

---

# 1. Introducción

El presente documento tiene como objetivo centralizar una primera interpretación funcional del proyecto “Mapa Interactivo Accesible – CFP N.º 7”, tomando como base:

- el brief inicial del proyecto,
- la reunión de relevamiento realizada con autoridades del CFP N.º 7,
- los aportes preliminares de los distintos subgrupos de trabajo,
- y las necesidades funcionales detectadas hasta el momento.

Este documento no busca reemplazar ni invalidar el trabajo realizado por otros roles del equipo, sino servir como una base funcional inicial y evolutiva que permita alinear criterios entre UX/UI, Frontend, Backend, QA y Data a medida que el proyecto avance y se obtenga nueva información por parte del cliente.

---

# 2. Contexto General del Proyecto

El CFP N.º 7 funciona dentro de un predio educativo compartido con múltiples instituciones y propuestas formativas orientadas a la inclusión educativa y accesibilidad.

La institución posee una importante diversidad de usuarios:

- estudiantes ingresantes,
- personas con discapacidad motriz,
- personas con discapacidad cognitiva,
- adultos mayores,
- docentes,
- visitantes,
- estudiantes de formación profesional,
- estudiantes de terminalidad secundaria,
- y usuarios externos.

El edificio presenta complejidades reales de orientación y circulación debido a:

- múltiples accesos,
- distribución física compleja,
- reutilización de espacios institucionales,
- señalización insuficiente,
- y diversidad de necesidades de accesibilidad.

---

# 3. Objetivo del Producto

Desarrollar una solución digital accesible e intuitiva que permita a estudiantes, docentes y visitantes orientarse dentro del CFP N.º 7 de forma autónoma, clara y simple, reduciendo la desorientación y facilitando el acceso a los diferentes espacios institucionales.

El producto busca:

- mejorar la experiencia de circulación,
- facilitar la orientación física,
- promover la autonomía,
- reducir barreras cognitivas y físicas,
- y brindar acceso rápido a información contextual relevante.

---

# 4. Alcance Inicial del MVP

El MVP contempla inicialmente:

## Navegación y orientación

- mapa interactivo del CFP N.º 7,
- visualización de sectores y espacios,
- recorridos básicos entre puntos clave,
- rutas accesibles,
- identificación de accesos y rampas.

## Información contextual

- fichas descriptivas de espacios,
- referencias visuales básicas,
- indicaciones simples de orientación,
- historias sociales iniciales.

## Accesibilidad

- diseño responsive,
- navegación clara,
- lenguaje simple,
- buena legibilidad,
- accesibilidad cognitiva básica,
- compatibilidad mobile.

## Interacción del usuario

- búsqueda de sectores y aulas,
- visualización de recorridos,
- consulta de información,
- reporte de incidencias o barreras.

---

# 5. Alcance Excluido Inicialmente del MVP

En esta primera etapa no se contempla:

- gestión académica avanzada,
- personalización compleja de usuarios,
- integración con sistemas institucionales,
- geolocalización indoor avanzada,
- navegación en tiempo real,
- administración dinámica completa de aulas,
- autenticación obligatoria para navegación básica.

Estas funcionalidades podrían evaluarse en futuras iteraciones según viabilidad técnica y necesidades institucionales.

---

# 6. Usuarios Identificados

## Usuarios principales

### Estudiantes ingresantes

Usuarios que desconocen la estructura física del edificio y requieren orientación clara.

### Personas con discapacidad motriz

Usuarios que necesitan identificar accesos accesibles, rampas y recorridos adaptados.

### Personas con discapacidad cognitiva

Usuarios que requieren instrucciones simples, referencias claras y reducción de carga cognitiva.

### Docentes y personal institucional

Usuarios que necesitan desplazarse rápidamente entre sectores.

### Visitantes externos

Usuarios que ingresan ocasionalmente al edificio y no conocen su distribución.

### Adultos mayores

Usuarios que pueden requerir navegación simplificada y mejor legibilidad visual.

---

# 7. Problemáticas Detectadas

Durante el relevamiento inicial se identificaron las siguientes problemáticas:

- dificultad para encontrar aulas y sectores,
- desorientación dentro del edificio,
- accesos múltiples poco claros,
- señalización insuficiente o confusa,
- dependencia de terceros para ubicarse,
- dificultad para identificar recorridos accesibles,
- diversidad de perfiles de usuario,
- limitaciones de conectividad móvil,
- necesidad de información simple y rápida,
- ansiedad o frustración ante recorridos complejos.

---

# 8. Requerimientos Funcionales Iniciales

## RF01 – Visualización del mapa interactivo

El sistema deberá permitir visualizar un mapa digital simplificado del CFP N.º 7.

## RF02 – Búsqueda de espacios

El usuario deberá poder buscar aulas, oficinas y sectores relevantes.

## RF03 – Visualización de recorridos

El sistema deberá mostrar recorridos básicos entre el punto de acceso y el destino seleccionado.

## RF04 – Identificación de accesos accesibles

El sistema deberá indicar accesos con rampas y recorridos adaptados.

## RF05 – Fichas descriptivas

Cada sector deberá contar con información descriptiva básica.

## RF06 – Historias sociales

El sistema deberá contemplar indicaciones simples y contextualizadas para acompañar el ingreso y circulación de usuarios que lo requieran.

## RF07 – Reporte de incidencias

El usuario podrá reportar barreras físicas o incidencias relacionadas con accesibilidad y circulación.

## RF08 – Uso responsive

La plataforma deberá adaptarse correctamente a dispositivos móviles.

## RF09 – Acceso simplificado

El acceso al mapa y navegación principal deberá mantenerse simple y rápida, evitando flujos innecesarios.

## RF10 – Disponibilidad parcial offline

Se evaluará la posibilidad de acceso parcial a información previamente cargada sin conexión constante.

---

# 9. Requerimientos No Funcionales

## Accesibilidad

- contraste adecuado,
- tipografía legible,
- iconografía simple,
- compatibilidad con lectores de pantalla,
- navegación clara,
- reducción de carga cognitiva.

## Rendimiento

- tiempos de carga bajos,
- experiencia fluida en dispositivos móviles.

## Usabilidad

- navegación intuitiva,
- reducción de pasos innecesarios,
- mensajes simples y comprensibles.

## Compatibilidad

- compatibilidad con dispositivos móviles y navegadores modernos.

---

# 10. Flujos Funcionales Iniciales

## Flujo principal de orientación

```text
Usuario ingresa
↓
Selecciona o busca un sector
↓
Visualiza ubicación del espacio
↓
Consulta recorrido sugerido
↓
Accede a referencias contextuales
↓
Llega al destino
```

## Flujo de reporte

```text
Usuario identifica incidencia
↓
Accede al formulario de reporte
↓
Describe problema o barrera
↓
Envía reporte
```

---

# 11. Riesgos Iniciales Detectados

- dependencia excesiva de conexión a internet,
- sobrecarga visual del mapa,
- exceso de pasos para navegar,
- dificultad de comprensión en usuarios con discapacidad cognitiva,
- inconsistencias entre información física y digital,
- actualización manual de espacios,
- recorridos poco claros,
- diferencias de interpretación entre equipos técnicos y funcionales.

---

# 12. Dependencias Pendientes del Cliente

El proyecto aún requiere información adicional por parte de la institución:

- croquis y mapas oficiales,
- nomenclatura definitiva de sectores,
- documentación de señalética,
- historias sociales,
- validación de accesos accesibles,
- fotografías reales de espacios,
- definición final de sectores y aulas.

---

# 13. Observaciones Finales

El presente documento representa una interpretación funcional inicial basada en la información disponible hasta el momento.

Se considera un documento evolutivo sujeto a:

- iteraciones,
- validaciones,
- nuevos relevamientos,
- y aportes interdisciplinarios del equipo y del cliente.

El objetivo principal es facilitar una comprensión compartida del producto y contribuir a una construcción más alineada entre las diferentes áreas del proyecto.
