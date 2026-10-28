# Plataforma de estudio – Oposiciones Secundaria Inglés (Comunidad de Madrid)

## Qué es este proyecto

Plataforma personal para preparar las oposiciones al Cuerpo de Profesores de Enseñanza Secundaria, especialidad Inglés (0590-011), en la Comunidad de Madrid. La usa una sola persona (la opositora/el opositor). Su objetivo es entrenar en condiciones reales de examen y dar una nota lo más parecida posible a la del tribunal.

**Los materiales llegan poco a poco.** La preparadora envía apuntes de temas, *mock exams* y soluciones cada semana, así que el usuario NO tiene todo el temario al empezar. La plataforma debe ser útil desde el primer tema subido y crecer a medida que llega material nuevo. Los materiales llegan como **PDF** y como **fotos hechas con iPhone** (también las fotos de los exámenes que el usuario escribe a mano).

La plataforma trabaja sobre ese material: no inventa contenido del temario, lo extrae, lo organiza y lo usa para corregir y preguntar.

## Principios

- **Subida incremental.** Nunca se asume que el temario está completo. Cada función opera solo sobre lo que hay subido y muestra con claridad qué falta (p. ej. "tema 23: sin apuntes todavía").
- **Fidelidad al examen real.** Tiempos, número de bolas, pesos y penalizaciones salen de los criterios oficiales (ver abajo). Nunca se codifican a mano en la lógica: viven en archivos de configuración.
- **Configurable por convocatoria.** Todo lo que depende de la convocatoria (rúbricas, pesos, mínimos, penalizaciones, duraciones, nº de bolas) va en `config/convocatorias/madrid-2025.json` (y futuras versiones), con un selector de convocatoria activa.
- **Recuperación activa por encima de la relectura.** Las funciones de estudio priorizan recuperación, práctica espaciada e intercalado.
- **El examen es en inglés.** Todo el contenido de práctica y las correcciones del contenido son en inglés; la interfaz puede estar en español.
- **La corrección por IA siempre justifica.** Cada punto otorgado o restado cita el fragmento del texto del usuario y el indicador de la rúbrica correspondiente.
- **Los originales no se tocan.** Los archivos subidos se guardan tal cual; todo procesamiento trabaja sobre copias o sobre el texto extraído.

## Estructura del examen (Madrid, criterios 2025)

Fuente: "Criterios para la Evaluación y Calificación de las pruebas selectivas 2025 – 0590-011 Inglés", Comunidad de Madrid. **Verificar contra los criterios de la próxima convocatoria cuando se publiquen.**

### Criterios comunes a todas las pruebas
- Todo se realiza en inglés. Se valora la corrección, alcance y riqueza de la lengua.
- Penalizaciones en pruebas escritas (se aplican sobre la nota final de cada parte):
  - Error de escritura/ortografía que muestra desconocimiento del léxico (p. ej. "writting"): **−0,10** por error.
  - Error gramatical que NO impide la comprensión (p. ej. "listen the radio", "go to home", "I don't mind go"): **−0,25** por error.
  - Error gramatical que impide la comprensión: **anula la respuesta**.
  - Un error repetido en la misma palabra cuenta **una sola vez**.
- Ejercicios ilegibles o escritos íntegramente en mayúsculas: no se califican.
- Bibliografía y citas en estilo **MLA**.
- Examen a mano, bolígrafo azul/negro, sin corrector, sin material.

### Primera prueba – Parte A: Prueba práctica (0–10, máx. 3 h)
| Ejercicio | Duración | Peso |
|---|---|---|
| Comprensión oral | máx. 45 min | 3 |
| Comentario de texto | 75 min | 4,5 |
| Traducción (directa + inversa, ~150 palabras cada una, sin diccionario) | 60 min | 2,5 (1,25 + 1,25) |

- **Comprensión oral:** el audio se escucha dos veces seguidas con una pequeña pausa. Preguntas de comprensión directa e inferencial, resumen del audio y actividad de *gap filling*. Indicadores: comprensión oral (idea principal, detalles, hechos vs. opiniones, expresiones clave), expresión escrita (comprensión literal e inferencial, ajuste a instrucciones, repertorio y registro), capacidad de síntesis (resumen correcto con todos los puntos principales).
- **Comentario de texto:** texto en prosa actual, no exclusivamente literario. Preguntas sobre tipo y género textual, funciones comunicativas, recursos estilísticos, comprensión, aspectos fonéticos, morfosintácticos, léxicos o semánticos, *rephrasing* y otras. Indicadores: comprensión escrita (análisis morfosintáctico, léxico-semántico y pragmático; intención comunicativa; comprensión global y específica; rasgos socioculturales) y expresión escrita (repertorio, registro, ajuste a instrucciones, precisión morfosintáctica y semántica).
- **Traducción:** indicadores de comprensión escrita, expresión escrita (trasposición precisa del contenido léxico, sintáctico y pragmático; sin calcos, *false friends* ni contrasentidos) y rasgos socioculturales.

### Primera prueba – Parte B: Desarrollo de un tema (0–10, 2 h)
- Se eligen **1 de 4 temas** extraídos al azar del temario oficial de Inglés (**69 temas**).
- Rúbrica:
  - **Estructura del tema – 1 punto:** índice adecuado y secuenciado; introducción con justificación e importancia; desarrolla todos los apartados del título e índice; conclusión que relaciona los apartados; fuentes bibliográficas variadas y actualizadas.
  - **Expresión y presentación – 1 punto:** expresión correcta ortográfica y gramaticalmente, fluidez; documento limpio y claro; elaboración personal y original.
  - **Contenidos específicos – 8 puntos:** profundidad y actualización; cita autores, escuelas lingüísticas o corrientes metodológicas; valoración crítica fundamentada; ejemplos, esquemas, gráficos; secuencia lógica con conclusión; lenguaje técnico correcto; relación con la práctica docente y aplicación en el aula.

### Cálculo de la primera prueba
- Nota = Parte A × 0,7 + Parte B × 0,3.
- Hace falta **≥ 5** en total y **≥ 2,5 en cada parte antes de ponderar**.

### Segunda prueba (fuera del alcance de esta plataforma por ahora)
Programación didáctica (×0,3) + exposición de unidad didáctica/situación de aprendizaje (×0,7). No se implementa en esta fase.

## Subida de materiales (pieza central)

Todo lo demás depende de esto, así que se construye primero.

### Qué se puede subir
- **Formatos:** PDF, JPG, PNG y **HEIC** (formato por defecto de las fotos de iPhone; convertir automáticamente). Debe poder subirse desde el móvil.
- **Varias fotos = un documento.** Un examen fotografiado son varias páginas: permitir subir varias imágenes juntas, reordenarlas y guardarlas como un único documento. Corregir automáticamente la orientación de las fotos.
- **Tipos de documento** (el usuario elige al subir; la IA puede sugerirlo):
  - Apuntes de un tema (se asigna a uno de los 69 temas oficiales).
  - *Mock exam* práctico: enunciado de listening (con su audio), comentario de texto, traducción o IPA.
  - Solución de un *mock exam* (se vincula a su enunciado; puede subirse más tarde que el enunciado).
  - Mi respuesta a un *mock exam* o a un tema escrito en simulacro (normalmente fotos de mi manuscrito).
  - Audio de listening (MP3/M4A) vinculado a su enunciado.
- **Metadatos:** fecha de recepción / semana de la preparadora, notas libres.

### Procesamiento tras la subida
1. **Extracción de texto.** PDF con texto: extraer directamente. PDF escaneado o fotos: transcripción con un modelo de visión (incluida letra manuscrita).
2. **Revisión obligatoria de la transcripción de mis respuestas.** En mis manuscritos la transcripción debe ser **literal, sin corregir nada**, porque los errores ortográficos y gramaticales puntúan. Mostrar la foto junto al texto transcrito para que el usuario confirme o corrija errores de lectura antes de corregir. Marcar las palabras dudosas o ilegibles.
3. **Generación automática** (solo para apuntes de temas, y regenerable si llega una versión nueva): esquema/esqueleto, flashcards y entradas para el banco de citas.
4. **Versiones.** Si llegan apuntes nuevos de un tema que ya existe, guardar la nueva versión sin borrar la anterior y preguntar si regenerar esquema y flashcards.

### Biblioteca
- Vista de todos los materiales por tipo, tema y semana de recepción.
- Indicador de *mock exams* sin solución todavía, y de soluciones pendientes de vincular.
- Bandeja de "nuevo material sin procesar o sin revisar".

## Funcionalidades

### Fase 1 – MVP: subida + tema escrito
1. **Subida de materiales y biblioteca** (sección anterior), empezando por apuntes de temas y fotos de mis temas escritos.
2. **Temario oficial:** los 69 títulos oficiales precargados; cada tema muestra si tiene apuntes o no.
3. **Mapa de dominio:** cada tema con estado (sin apuntes / sin empezar / leído / esquematizado / escrito en simulacro), fecha del último repaso y última nota.
4. **Simulador de sorteo:** saca 4 bolas, el usuario elige una y arranca un cronómetro de 2 h. Dos modos: **"real"** (entre los 69 temas, como el día del examen) y **"solo mis temas"** (entre los que tienen apuntes). Al terminar, el usuario escribe en la plataforma o sube fotos de su manuscrito.
5. **Corrector del tema con la rúbrica oficial:** nota por bloque (1 + 1 + 8), feedback por indicador con citas del texto, lista de errores clasificados con su penalización, y "nota antes / después de penalizaciones". Compara con los apuntes del tema para detectar apartados ausentes, estructura, riqueza de vocabulario y uso de citas y bibliografía. Si el tema no tiene apuntes subidos, corrige solo con la rúbrica y lo avisa.

### Fase 2 – Estudio desde los apuntes
6. **Esquemas / esqueletos** de cada tema, generados al subir sus apuntes.
7. **Flashcards con repetición espaciada** (tipo Anki): autores, fechas, definiciones, citas clave. Las de cada tema nuevo se añaden al mazo cuando se suben sus apuntes.
8. **Banco de citas y bibliografía** en formato MLA (Krashen, Chomsky, Hymes, Canale & Swain…), con la cita y los temas donde usarla. Se alimenta automáticamente de los apuntes subidos.

### Fase 3 – Prueba práctica con *mock exams*
Flujo común: la preparadora envía el *mock exam* → lo subo → lo hago en la plataforma (con cronómetro) o en papel y subo fotos → cuando tengo la solución, la subo → la IA corrige comparando con la solución y la rúbrica oficial, aplicando penalizaciones. Si aún no hay solución, la IA puede corregir solo con la rúbrica y volver a corregir cuando llegue la solución.

9. **Comentario de texto:** 75 min; corrección por pregunta frente a la solución y nota sobre 4,5.
10. **Traducción directa e inversa:** 60 min; corrección frente a la traducción de la solución, alternativas válidas y detector de calcos y *false friends*; nota sobre 2,5 (1,25 + 1,25).
11. **Listening:** subo el audio, el enunciado y la solución. Modo examen: el audio suena dos veces con una pequeña pausa, sin poder pausar ni rebobinar, 45 min. Preguntas directas e inferenciales, resumen, *gap filling* y dictados. Nota sobre 3.
12. **Transcripción fonética (IPA)** con teclado de símbolos integrado; ejercicios de los *mock exams* subidos o de palabras y frases de los textos subidos; corrección símbolo a símbolo.
13. **Calculadora de la primera prueba:** combina notas de práctica y tema con la ponderación y los mínimos; indica qué nota necesito en una parte dada mi media en la otra.

### Fase 4 – Más adelante (opcional)
- Hoja en blanco, reconstruir el índice de memoria, técnica Feynman.
- Banco de errores personales convertido en flashcards.
- Calibración (predecir la nota antes de verla).
- Simulacro del día completo y tribunal de varios correctores.
- Planificador, repaso espaciado por tema, sesiones intercaladas, Pomodoro.
- Calculadora de bolas: 1 − C(69−k, 4) / C(69, 4), con k = temas dominados.
- Chat con los materiales y estadísticas.

## Pendiente de definir
- Proveedor de IA definitivo: se decidirá en el paso e transcribiendo la misma foto con Claude (Anthropic) y con Gemini de pago (Google AI Studio). La app se construye para que el proveedor sea un ajuste.
- Fecha prevista del examen.
- Erratas en el archivo del temario aportado (se han copiado tal cual hasta que la usuaria confirme): tema 46 "independendia", tema 64 "territoral", tema 60 "F.D. James" (¿P.D. James?).

## Decisiones tomadas
- **Stack:** Next.js (TypeScript) + Tailwind, desplegado en Vercel (plan gratuito Hobby). Web privada usable desde iPhone (se puede añadir a la pantalla de inicio) y ordenador.
- **Datos y archivos:** Supabase (base de datos, almacén privado de archivos y acceso con usuario/contraseña). Plan gratuito al principio (1 GB de archivos; se pausa tras 7 días sin uso); pasar a Pro (~25 $/mes) cuando haga falta espacio. Registro público desactivado: solo existe la cuenta de la usuaria.
- **Claves:** nunca en el código. En local van en `.env.local` (ignorado por git; plantilla en `.env.example`); en producción, en Vercel → Settings → Environment Variables.
- **Configuración:** criterios del examen en `config/convocatorias/madrid-2025.json`; convocatoria activa en `config/convocatoria-activa.json`; temario en `config/temarios/ingles-0590-011.json` (69 temas, del archivo `Temario_Ingles_Secundaria.docx` aportado). Validado con zod en `src/lib/config/`.
- **Penalizaciones (respuestas de la usuaria):**
  - Error gramatical que impide la comprensión: se anula **solo la frase** (se corrige como si no estuviera escrita).
  - La nota tras penalizaciones **no baja de 0**.
  - Se valora el bloque "Expresión y presentación" **y además** se restan penalizaciones.
  - "Error repetido en la misma palabra cuenta una vez" vale para **ortografía y gramática**.
- **Mapa de dominio:** "leído" y "esquematizado" los marca la usuaria a mano; "sin apuntes" y "escrito en simulacro" son automáticos.
- **Plan de la Fase 1 (aprobado):** a) base + acceso + 69 temas · b) subir apuntes y biblioteca · c) mapa de dominio · d) simulador de sorteo · e) manuscrito y transcripción literal · f1) cálculo de nota y penalizaciones con pruebas · f2) corrector con IA.
- **Pruebas automáticas:** vitest (`npm test`).

## Estado actual
- Paso **a** en curso: código hecho (configuración, temario, login, lista de temas, pruebas de la configuración). Falta: crear el repositorio en GitHub, el proyecto de Supabase y el despliegue en Vercel, y que la usuaria lo pruebe.
