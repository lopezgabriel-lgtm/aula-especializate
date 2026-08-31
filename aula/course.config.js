/* =========================================================================
   course.config.js — FUENTE ÚNICA DE CONTENIDO / NAVEGACIÓN del curso.
   La consumen shell.js (sidebar + header) y screens.js (pantallas).
   Para clonar a otro curso, en principio alcanza con editar este archivo.

   Estados (bloqueado/disponible/en progreso/completado) NO se definen acá:
   se derivan de progress.js (fuente de verdad de la lógica).

   MÓDULO (editable): description, estimatedTime, video.duration, objectives.
   UNIDAD (editable): description, video, y su lista de recursos.
     Cada recurso: { id, category, type, label, required, url }
       - required:true  => es OBLIGATORIO para poder completar la unidad.
       - Por defecto "Material de estudio" es obligatorio (preserva la regla
         actual: hay que abrirlo). Podés marcar otros como obligatorios.
       - La cantidad y el tipo de recursos dependen de lo que cargues acá:
         no todas las unidades necesitan los mismos.
   ========================================================================= */
window.COURSE_CONFIG = {
  "name": "Introducción a la IA",
  "logo": "img/especializate-logo-blanco.png",
  "links": {
    "rutas": "inicio.html",
    "progreso": "progreso.html",
    "badges": "badges.html"
  },
  "intro": {
    "label": "Inicio y bienvenida",
    "href": "inicio.html",
    "eyebrow": "Bienvenida",
    "title": "Inicio y bienvenida",
    "description": "Antes de comenzar, conocé especIAlizate, el programa del curso y una introducción al recorrido. Al completar estos tres contenidos se habilita el Módulo 1.",
    "resources": [
      {
        "step": "intro.especializate",
        "required": true,
        "label": "Sobre especIAlizate",
        "kind": "video",
        "youtubeId": "1XwQ2nPGTQ8",
        "description": "Mirá este video para conocer qué es especIAlizate, cómo está organizado el programa y qué vas a encontrar durante el recorrido."
      },
      {
        "step": "intro.programa",
        "required": true,
        "label": "Programa del curso",
        "kind": "pdf",
        "url": "https://drive.google.com/file/d/19hbj1rzgdW8mM5mOw3sCXJp3Mv1mKA2v/view?usp=sharing",
        "description": "Consultá el programa para conocer la propuesta formativa, los objetivos, la estructura del recorrido, los aprendizajes esperados y la modalidad de cursada."
      },
      {
        "step": "intro.introduccion",
        "required": true,
        "label": "Introducción al curso",
        "kind": "video",
        "youtubeId": "wO51weDN_cM",
        "description": "En este video vas a conocer la propuesta del curso y cómo se organiza el recorrido a lo largo de los cinco módulos."
      }
    ]
  },
  "modules": [
    {
      "n": 1,
      "title": "Fundamentos de IA",
      "description": "Antes de comenzar, mirá este video para conocer los temas que vas a trabajar en el módulo: cómo surgió la Inteligencia Artificial, de qué manera aprende, qué la diferencia de la automatización y cuáles son los principales tipos de IA que encontramos en la actualidad.",
      "href": "modulo.html?m=1",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "F7B3tS6uvAE",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979580",
      "objectives": [
        "Conocer cómo surgió y evolucionó la inteligencia artificial.",
        "Distinguir la inteligencia artificial de la automatización.",
        "Comprender de qué manera aprende una IA.",
        "Identificar los principales tipos de inteligencia artificial."
      ],
      "units": [
        {
          "n": 1,
          "title": "Historia y evolución de la inteligencia artificial",
          "description": null,
          "video": {
            "youtubeId": "UY23hIPulFk"
          },
          "resources": [
            {
              "id": "m1u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-11-Historia-y-evolucion-de-la-Inteligencia-Artificial-o4ennqi5yr8ejmn"
            },
            {
              "id": "m1u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1dTN6UOHuNKhiX7aELkRr0mODLJFDprDQ/preview"
            },
            {
              "id": "m1u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/693874f3a6862cabf5b0f272"
            }
          ]
        },
        {
          "n": 2,
          "title": "Automatización vs. inteligencia artificial",
          "description": null,
          "video": {
            "youtubeId": "_MNXmMzhs44"
          },
          "resources": [
            {
              "id": "m1u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-12-Automatizacion-vs-Inteligencia-Artificial-3znorac4kp1nd5t"
            },
            {
              "id": "m1u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1uvenyhIYwy3ahtlEpzRiGwKyPLO7EbFS/preview"
            },
            {
              "id": "m1u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6939ba545ece3c509329397b"
            }
          ]
        },
        {
          "n": 3,
          "title": "¿Cómo aprende una IA?",
          "description": null,
          "video": {
            "youtubeId": "hac3BV_eCTo"
          },
          "resources": [
            {
              "id": "m1u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-13-Como-aprende-una-IA-owwvxtye8cra81k"
            },
            {
              "id": "m1u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/15NjOUJTzH8khu0zN0FFYiRizOk7vUkpr/preview"
            },
            {
              "id": "m1u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/693c27dd024f33e6fc93033a"
            }
          ]
        },
        {
          "n": 4,
          "title": "Tipos de inteligencia artificial",
          "description": null,
          "video": {
            "youtubeId": "LJHv3-o5fqI"
          },
          "resources": [
            {
              "id": "m1u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-14-Tipos-de-Inteligencia-Artificial-wpso4wisfiacqjc"
            },
            {
              "id": "m1u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1iQSEBnIqdWo9nx-F6oaUDg0DtOZfuXIv/preview"
            },
            {
              "id": "m1u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/696645e53e2d95a27671c34b"
            }
          ]
        }
      ]
    },
    {
      "n": 2,
      "title": "Herramientas de IA generativa",
      "description": "En este módulo vas a descubrir cómo funcionan las herramientas capaces de generar textos, imágenes, audios y código. Mirá el video para conocer el recorrido y comenzar a trabajar con prompts, reformulación de contenidos y estrategias para detectar y corregir posibles errores.",
      "href": "modulo.html?m=2",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "EljUqjpuaxg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979584",
      "objectives": [
        "Entender qué es un modelo generativo y cómo produce texto, imágenes y audio.",
        "Escribir prompts claros para obtener mejores resultados.",
        "Reformular y mejorar contenidos con la ayuda de la IA.",
        "Detectar y corregir errores frecuentes en las respuestas."
      ],
      "units": [
        {
          "n": 1,
          "title": "Qué es un modelo generativo",
          "description": null,
          "video": {
            "youtubeId": "g7BEgtQ2Edw"
          },
          "resources": [
            {
              "id": "m2u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-21-Que-es-un-modelo-generativo--37hn0kdcm4dt0l8"
            },
            {
              "id": "m2u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1XM-P_8xPtWoOz3-916Dwun8UKNGGVi-0/preview"
            },
            {
              "id": "m2u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6943fb7265757a3ec8fdf246"
            }
          ]
        },
        {
          "n": 2,
          "title": "Cómo escribir prompts efectivos",
          "description": null,
          "video": {
            "youtubeId": "Fgun010qBkE"
          },
          "resources": [
            {
              "id": "m2u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/xzb5g3adztubf07"
            },
            {
              "id": "m2u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/16eldpbRfbW7hQxz0oT1yc5Uiz7FaHoTy/preview"
            },
            {
              "id": "m2u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694403ee9c4929bb14ff80e8"
            }
          ]
        },
        {
          "n": 3,
          "title": "Reformulación y mejora de contenidos con IA",
          "description": null,
          "video": {
            "youtubeId": "hMYLXHxxdIQ"
          },
          "resources": [
            {
              "id": "m2u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/e1qsbr8jbjbuire"
            },
            {
              "id": "m2u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1sPZfRZeq3M8DdMwyee2mM3GA-WwRwMQl/preview"
            },
            {
              "id": "m2u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694424c42550409543683456"
            }
          ]
        },
        {
          "n": 4,
          "title": "Detección y corrección de errores",
          "description": null,
          "video": {
            "youtubeId": "AC4oJvLt_PY"
          },
          "resources": [
            {
              "id": "m2u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/ob2lbkgq8dkewo1"
            },
            {
              "id": "m2u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1j_p_qIiAqAHirDUhcsggjxYP4fvLOW5h/preview"
            },
            {
              "id": "m2u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/69442b861d9a2403caae193c"
            }
          ]
        }
      ]
    },
    {
      "n": 3,
      "title": "Datos, análisis y decisiones con IA",
      "description": "Los resultados de una IA dependen en gran parte de la información que recibe. En este video vas a conocer cómo se abordarán la calidad de los datos, el análisis de patrones y tendencias, y la interpretación crítica de los resultados para aplicarlos en situaciones reales.",
      "href": "modulo.html?m=3",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "2TWYeIEnKeI",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979583",
      "objectives": [
        "Reconocer qué es un dato y por qué importan su calidad y sus fuentes.",
        "Analizar datos con ayuda de IA para detectar patrones y tendencias.",
        "Interpretar los resultados de un análisis para tomar decisiones.",
        "Explorar aplicaciones de la IA en distintos ámbitos de trabajo."
      ],
      "units": [
        {
          "n": 1,
          "title": "Qué es un dato: calidad, fuentes y problemas frecuentes",
          "description": null,
          "video": {
            "youtubeId": "o0EFyKQQirU"
          },
          "resources": [
            {
              "id": "m3u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-31-Que-es-un-dato-Calidad-fuentes-y-problemas-frecuentes-yk80xbao0gdgpg9"
            },
            {
              "id": "m3u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1zyFPsA4xXpN9Z68Gp-KMGkYtJdtuQgZN/preview"
            },
            {
              "id": "m3u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694433be0f3acb89fb77e82c"
            }
          ]
        },
        {
          "n": 2,
          "title": "Análisis asistido por IA: clasificación, patrones y tendencias",
          "description": null,
          "video": {
            "youtubeId": "BsDhSLqutLs"
          },
          "resources": [
            {
              "id": "m3u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-32-Analisis-asistido-por-IA-clasificacion-patrones-y-tende-mcoidb995ssto2x"
            },
            {
              "id": "m3u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1I0Gkull9VMNJVTFwq8n30n-ESLvGEi9G/preview"
            },
            {
              "id": "m3u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695cf649251ed5fe005f30ec"
            }
          ]
        },
        {
          "n": 3,
          "title": "Interpretación de resultados",
          "description": null,
          "video": {
            "youtubeId": "QWAF_B2MfGo"
          },
          "resources": [
            {
              "id": "m3u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-33-Interpretacion-de-resultados-oportunidades-riesgos-y--dwe2v4p1oxrp01m"
            },
            {
              "id": "m3u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/16FgP8C5W5othkMnrFsxl5qtaXFDCgXHn/preview"
            },
            {
              "id": "m3u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695d188d7925b4e1781da35b"
            }
          ]
        },
        {
          "n": 4,
          "title": "IA y trabajo: aplicaciones transversales",
          "description": null,
          "video": {
            "youtubeId": "rCjMZZ3d5wM"
          },
          "resources": [
            {
              "id": "m3u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-34-IA-y-trabajo-aplicaciones-transversales-mbezuzo8sh9xgmt"
            },
            {
              "id": "m3u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1TNwjjBDfyte_tkwutr2ZayqjB79B1uQV/preview"
            },
            {
              "id": "m3u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695d1f35930571d7cba2213f"
            }
          ]
        }
      ]
    },
    {
      "n": 4,
      "title": "Comunicación y organización con IA",
      "description": "En este módulo vas a explorar cómo utilizar la IA para ordenar información, organizar tareas y comprender mejor distintos procesos de trabajo. Mirá el video para conocer cómo transformar datos e ideas desordenadas en estructuras claras y útiles, sin perder tu propio criterio.",
      "href": "modulo.html?m=4",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "0m_GOgnDgzg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979582",
      "objectives": [
        "Estructurar información con IA en listas, pasos y tablas.",
        "Pensar en términos de datos operativos.",
        "Identificar tareas repetitivas y procesos que se puedan optimizar.",
        "Usar la IA como apoyo para organizar y pensar mejor."
      ],
      "units": [
        {
          "n": 1,
          "title": "Cómo estructurar información con IA: listas, pasos y tablas",
          "description": null,
          "video": {
            "youtubeId": "9tQHGTa8tmk"
          },
          "resources": [
            {
              "id": "m4u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-41-Como-estructurar-informacion-con-IA-listas-pasos-y-ta-wqar5pvfudz3fhj"
            },
            {
              "id": "m4u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/12rBs0XJupjTncoiAByXN8XT29MLgvIwp/preview"
            },
            {
              "id": "m4u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://gamma.app/docs/Unidad-41-Como-estructurar-informacion-con-IA-listas-pasos-y-ta-wqar5pvfudz3fhj"
            }
          ]
        },
        {
          "n": 2,
          "title": "Pensar en datos operativos",
          "description": null,
          "video": {
            "youtubeId": "ylt4sv3_kb8"
          },
          "resources": [
            {
              "id": "m4u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-42-Pensar-en-datos-operativos-fu67g3tbs5j810m"
            },
            {
              "id": "m4u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1RMjoyXkif_Srj5DXH1emtqCPL8NH-5yR/preview"
            },
            {
              "id": "m4u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://gamma.app/docs/Unidad-42-Pensar-en-datos-operativos-fu67g3tbs5j810m"
            }
          ]
        },
        {
          "n": 3,
          "title": "Identificación de tareas repetitivas y procesos",
          "description": null,
          "video": {
            "youtubeId": "adDZkBzB4v8"
          },
          "resources": [
            {
              "id": "m4u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-43-Identificacion-de-tareas-repetitivas-y-procesos-vhue3ukk0y25kjv"
            },
            {
              "id": "m4u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1O2LTD76wRWrKPhTZ741bqAONMTwGSWeG/preview"
            },
            {
              "id": "m4u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://gamma.app/docs/Unidad-43-Identificacion-de-tareas-repetitivas-y-procesos-vhue3ukk0y25kjv"
            }
          ]
        },
        {
          "n": 4,
          "title": "IA como apoyo para pensar mejor",
          "description": null,
          "video": {
            "youtubeId": "DkVUkzc7r0s"
          },
          "resources": [
            {
              "id": "m4u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-44-IA-como-apoyo-para-pensar-mejor-crc7m2fsmxr41bt"
            },
            {
              "id": "m4u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1Nyg1OD0X0lC_0bnp9cRBAqyG_ziJ4CfA/preview"
            },
            {
              "id": "m4u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://gamma.app/docs/Unidad-44-IA-como-apoyo-para-pensar-mejor-crc7m2fsmxr41bt"
            }
          ]
        }
      ]
    },
    {
      "n": 5,
      "title": "Ética, riesgos y uso responsable",
      "description": "Usar Inteligencia Artificial también implica comprender sus riesgos y tomar decisiones responsables. En este video vas a conocer los temas del módulo: sesgos y discriminación algorítmica, protección de datos personales, deepfakes, desinformación y marcos para un uso seguro y crítico de estas tecnologías.",
      "href": "modulo.html?m=5",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "dZfWEbNffHg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979581",
      "objectives": [
        "Reconocer riesgos, sesgos y discriminación algorítmica.",
        "Identificar deepfakes y desinformación, y valorar la verificación humana.",
        "Conocer marcos regulatorios y criterios de uso responsable de la IA."
      ],
      "units": [
        {
          "n": 1,
          "title": "Riesgos, sesgos y discriminación algorítmica",
          "description": null,
          "video": {
            "youtubeId": "8ztw34gxAG4"
          },
          "resources": [
            {
              "id": "m5u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-51-Riesgos-sesgos-y-discriminacion-algoritmica-qdvegcaetgkvyyo"
            },
            {
              "id": "m5u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1xswpF6xKTxlKxTV9YI0Y-y_3AXJd_0-L/preview"
            },
            {
              "id": "m5u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/69610f887d863f2876232615"
            }
          ]
        },
        {
          "n": 2,
          "title": "Riesgos, sesgos y discriminación algorítmica (II)",
          "description": null,
          "video": {
            "youtubeId": "_Uv7__FvvtM"
          },
          "resources": [
            {
              "id": "m5u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-52-Riesgos-sesgos-y-discriminacion-algoritmica-pm7k4ti8oyi4whm"
            },
            {
              "id": "m5u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1896yaw8-v7u_-vm81ZTti5GSTJTYDMRG/preview"
            },
            {
              "id": "m5u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6961155a186419c336d77b7b"
            }
          ]
        },
        {
          "n": 3,
          "title": "Deepfakes, desinformación y verificación humana",
          "description": null,
          "video": {
            "youtubeId": "7mXtgPC1xEE"
          },
          "resources": [
            {
              "id": "m5u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-53-Deepfakes-desinformacion-y-verificacion-humana-1acn1heh00oy6ub"
            },
            {
              "id": "m5u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/11dqV_uTdPJ7b1i1O4sc3CoeUbxMdyHxN/preview"
            },
            {
              "id": "m5u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6964fccfcd476f768300aa4a"
            }
          ]
        },
        {
          "n": 4,
          "title": "Marcos regulatorios y uso responsable de la IA",
          "description": null,
          "video": {
            "youtubeId": "-1U3yI1CJyA"
          },
          "resources": [
            {
              "id": "m5u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-54-Marcos-regulatorios-y-uso-responsable-de-la-IA-ka6g0e7fpjyaseq"
            },
            {
              "id": "m5u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1qy_ZWmIpm_tnCrGANGHa1VBRZKKcoPFS/preview"
            },
            {
              "id": "m5u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/696522f945556f85282a7da1"
            }
          ]
        }
      ]
    }
  ],
  "final": {
    "label": "Evaluación final",
    "href": "final.html",
    "description": "La evaluación final integra todo el recorrido. Se habilita al completar los cinco módulos y, al aprobarla, activás tu certificación.",
    "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979585",
    "certUrl": ""
  }
};
