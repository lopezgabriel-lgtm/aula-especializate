# Guia de edicion del aula (template reutilizable)

Casi todo el contenido del aula se edita en **un solo archivo: `course.config.js`**.
Las pantallas se arman solas a partir de el. **No hay que editar HTML por modulo ni por unidad.**

> Regla de oro: para cambiar contenido, editas `course.config.js`. La logica (desbloqueos, XP, insignias)
> vive en `progress.js` y normalmente **no se toca**.

---

## 0. Como sacar el ID de un video de YouTube
En `https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`, el ID es lo que va despues de `v=` -> `dQw4w9WgXcQ`.
En la config se carga solo el ID (no la URL completa).

## 1. Estructura de `course.config.js`
```js
window.COURSE_CONFIG = {
  name: "Introduccion a la IA",              // nombre del curso (breadcrumb, titulos)
  logo: "img/especializate-logo-blanco.png", // logo del sidebar (fondo oscuro)

  links: {                                   // accesos del sidebar
    rutas:    "inicio.html",
    progreso: "progreso.html",
    badges:   "badges.html"
  },

  intro: { ... },      // "Inicio y bienvenida": los 3 contenidos iniciales
  modules: [ ... ],    // los 5 modulos (con sus unidades y recursos)
  final: { ... }       // evaluacion final + certificacion
};
```

## 2. Editar los 3 contenidos iniciales (`intro`)
```js
intro: {
  label: "Inicio y bienvenida",
  href:  "inicio.html",
  eyebrow: "Bienvenida",
  title:   "Inicio y bienvenida",
  description: "Texto de bienvenida...",
  resources: [
    { step: "intro.especializate", label: "Sobre especIAlizate", kind: "video",
      youtubeId: "1XwQ2nPGTQ8", description: "..." },
    { step: "intro.programa", label: "Programa del curso", kind: "pdf",
      url: "https://.../programa.pdf", description: "..." },
    { step: "intro.introduccion", label: "Introduccion al curso", kind: "video",
      youtubeId: "wO51weDN_cM", description: "..." }
  ]
}
```
- `kind: "video"` -> mostra un video de YouTube (`youtubeId`). `kind: "pdf"` -> boton para abrir el `url`.
- **No cambies los `step`** (`intro.especializate`, `intro.programa`, `intro.introduccion`): conectan con la logica.
- Cada uno suma **50 XP** al marcarse como completado; los tres completos abren el Modulo 1 y dan la insignia Iniciante.

## 3. Editar un MODULO (lo mas habitual)
Cada objeto dentro de `modules`:
```js
{
  n: 1,                                  // numero de modulo (NO cambiar el orden)
  title: "Fundamentos de IA",
  description: "Texto de introduccion del modulo.",
  href: "modulo.html?m=1",               // NO cambiar
  estimatedTime: "Aprox. 3 hs",          // chip de tiempo (texto libre)
  video: { youtubeId: "F7B3tS6uvAE", duration: null },  // video de intro del modulo
  quizUrl: "https://.../mod/quiz/view.php?id=979580",   // cuestionario del modulo (Moodle)
  objectives: [                          // lista "Que vas a aprender?" (opcional)
    "Objetivo 1...",
    "Objetivo 2..."
  ],
  units: [ ... ]                         // 4 unidades (ver punto 4)
}
```
- `video.duration`: texto opcional (ej. `"2:45 min"`). Si es `null`, no se muestra.
- `objectives`: si la dejas vacia (`[]`), la seccion "Que vas a aprender?" no aparece.
- El XP del modulo (200) se calcula solo (4 unidades x 40 + cuestionario 40).

## 4. Editar una UNIDAD y sus RECURSOS
Cada unidad, dentro de `units`:
```js
{
  n: 1,
  title: "Historia y evolucion de la IA",
  description: null,                     // opcional: texto de contexto de la unidad
  video: { youtubeId: "UY23hIPulFk" },   // video introductorio de la unidad
  resources: [                           // <- los accesos de la unidad (cantidad y tipo libres)
    { id: "m1u1-material", category: "Material de estudio",
      type: "Presentacion (Gamma)", label: "Presentacion del tema",
      required: true,  url: "https://gamma.app/docs/..." },

    { id: "m1u1-doc", category: "Material complementario",
      type: "Documento PDF", label: "Guia practica",
      required: false, url: "https://drive.google.com/..." },

    { id: "m1u1-check", category: "Comprueba tus conocimientos",
      type: "Actividad interactiva", label: "Actividad de repaso",
      required: false, url: "https://view.genially.com/..." }
  ]
}
```
Cada **recurso**:
- `id`: identificador unico (usa el patron `m<MODULO>u<UNIDAD>-<algo>`). **Debe ser unico y estable**: es lo que
  guarda el estado "realizado" del recurso. Si lo cambias, se pierde ese registro.
- `category`: el titulo del bloque (Material de estudio, Material complementario, Promptbook, Sandbox, etc.).
  Podes agrupar varios recursos en la misma categoria: se muestran juntos.
- `type`: subtitulo/tipo (texto libre).
- `label`: nombre del recurso.
- `required`: `true` = **obligatorio** para poder marcar la unidad como completada. `false` = opcional.
  - Por defecto, "Material de estudio" es obligatorio (preserva la regla original: hay que abrirlo).
  - Podes marcar como obligatorio cualquier recurso que quieras.
- `url`: enlace del recurso (se abre en pesta;a nueva y queda marcado como realizado).

> **Cantidad y tipo de recursos**: no todas las unidades necesitan los mismos. Agregas/sacas objetos del array
> `resources` y la pantalla se adapta sola.

## 5. Editar la EVALUACION FINAL y la certificacion (`final`)
```js
final: {
  label: "Evaluacion final",
  href:  "final.html",
  description: "...",
  quizUrl: "",   // enlace al cuestionario final en Moodle  (CARGAR)
  certUrl: ""    // enlace para descargar el certificado en Moodle  (CARGAR)
}
```
- Mientras `quizUrl`/`certUrl` esten vacios, la pantalla muestra un aviso de "falta cargar el enlace".
- Al aprobar la evaluacion final se suma **500 XP** y se activa la certificacion (100% / 1650 XP).

## 6. Cuestionarios y Moodle (importante)
- Los cuestionarios (de modulo y final) se rinden en **Moodle**; el estudiante debe estar **logueado**.
- El aula **no conoce la nota**: el estudiante marca el cuestionario como aprobado para registrar su avance.
- La secuencia real (7 o mas; no acceder al cuestionario siguiente sin aprobar el anterior) la controla **Moodle**
  (no hay integracion web<->Moodle todavia). El tour del cuestionario ya explica esto al estudiante.

## 7. Clonar el aula a OTRO curso
1. Copia toda la carpeta.
2. Edita `course.config.js`: `name`, `logo`, los 3 recursos de `intro`, los `modules` (titulos, videos, quizUrl,
   objetivos y las `units` con sus `resources`) y el `final`.
3. Reemplaza las imagenes de `img/` si corresponde (logo e insignias).
4. Listo: las pantallas se arman solas con el contenido nuevo.

> El template asume **5 modulos x 4 unidades**. Cambiar esa cantidad implica ajustar tambien la logica en
> `progress.js` (XP y desbloqueos); no se resuelve solo desde la config.

## 8. Que NO tocar (y como reiniciar)
- **`progress.js`** (logica), **`shell.js`** (sidebar/header) y **`screens.js`** (render) no se editan para cambiar
  contenido. Solo se tocan para cambiar comportamiento o disenio.
- Reiniciar para probar de cero (consola del navegador, F12 -> Console):
  ```js
  AulaProgress.reset(); location.reload();   // borra progreso + reinicia el tour
  AulaTour.reset();                          // reinicia solo el tour
  ```

## 9. Checklist antes de publicar
- [ ] `name`, `logo` y los 3 recursos de `intro` cargados (videos/PDF reales, no placeholders).
- [ ] Cada modulo: `title`, `description`, `video.youtubeId`, `quizUrl` y (opcional) `objectives`.
- [ ] Cada unidad: `title`, `video.youtubeId` y sus `resources` (con `url` reales y `required` correcto).
- [ ] `final.quizUrl` y `final.certUrl` cargados.
- [ ] Probar el recorrido completo con un servidor local (`python3 -m http.server 8000` -> `inicio.html`).
- [ ] Revisar que ningun recurso quede con `url` vacia o de ejemplo.
