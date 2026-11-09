# Mamma Mia Pizza — Plataforma Web Frontend

Sitio web comercial para restaurante de comida rápida especializado en pizzas artesanales de masa madre horneadas en piedra. Diseñado y maquetado con tecnologías nativas bajo estándares de accesibilidad WCAG AA, enfoque Mobile-First y arquitectura frontend desacoplada.

---

## 1. Características Principales

* **HTML5 Semántico y Accesible:** Estructura basada en elementos semánticos estándar (`<header>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<dialog>`, `<footer>`), con atributos ARIA y enlace de salto (`skip-link`) para navegación accesible por teclado.
* **Diseño Mobile-First con CSS Moderno:** Utiliza variables nativas de CSS (`:root`), Flexbox y CSS Grid adaptable sin librerías externas ni sobrecarga de dependencias.
* **Catálogo Interactivo con Variantes de Tamaño:** Cálculo y actualización en tiempo real de los precios en moneda colombiana (`$ COP`) al seleccionar los tamaños Personal (25 cm), Mediana (35 cm) o Familiar (45 cm).
* **Ordenamiento Dinámico en el DOM:** Reorganización reactiva de las tarjetas de producto mediante JavaScript nativo por popularidad, disponibilidad y rango de precios.
* **Modal Nativo de Pedido Ítem por Ítem:** Interfaz modal construida sobre el elemento nativo `<dialog>`, permitiendo capturar datos de entrega a domicilio o enlazar llamadas directas de manera inmediata.
* **Formulario de Retroalimentación Validado:** Validación en cliente de campos obligatorios con retroalimentación en pantalla y prevención de envíos inválidos.

---

## 2. Estructura de Archivos del Proyecto

```text
mamma-mia-pizza/
├── index.html                  # Marcado estructural y semántico WCAG AA
├── style.css                   # Sistema de diseño, tokens CSS y media queries
├── app.js                      # Lógica de interacción en JavaScript Vanilla (ES6+)
├── README.md                   # Documentación general y guía de ejecución
└── README_PREGUNTAS_TALLER.md  # Resolución detallada del taller y preguntas de IA
```

---

## 3. Identidad Visual y Sistema de Diseño

La interfaz emplea una paleta análoga nocturna con contrastes verificados:

| Rol de Diseño | Color HEX | Uso en Interfaz | Contraste (WCAG) |
| :--- | :--- | :--- | :--- |
| **Fondo Principal** | `#0F0C20` | Superficie general del sitio | Base oscura |
| **Superficie de Tarjetas** | `#1E1838` | Fondo de cards, contenedores y modales | Superficie elevada |
| **Color Primario (CTA)** | `#8B5CF6` | Botones principales y bordes activos | > 4.5:1 |
| **Color Secundario** | `#2563EB` | Badges de disponibilidad y enlaces secundarios | > 4.5:1 |
| **Destacado / Reseña** | `#F59E0B` | Distintivo de Pizza Napolitana (Mejor Review) | Alto contraste |
| **Texto Principal** | `#F8FAFC` | Titulares y precios en COP | 14.8:1 (AAA) |
| **Texto Secundario** | `#C4B5FD` | Descripciones e información operativa | > 7:1 (AAA) |
| **Foco Accesible** | `#38BDF8` | Contorno visible (`:focus-visible`) | Delineado visible |

* **Tipografía:** `Helvetica, Arial, sans-serif`
* **Interlineado base:** `1.5rem` aplicado al texto de lectura para comodidad visual.

---

## 4. Guía de Ejecución y Pruebas Locales

No requiere compiladores, preprocesadores ni instalación de paquetes Node.js:

1. Clona o descarga los archivos en una carpeta local de tu equipo.
2. Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Para simular el entorno de producción móvil, abre las herramientas para desarrolladores (`F12` o `Ctrl + Shift + I`), activa la barra de dispositivos y prueba los anchos diana:
   * **Móvil pequeño:** `360px` – `480px`
   * **Tableta:** `768px`
   * **Escritorio:** `1024px` y `1200px` o superior.

---

## 5. Pruebas de Interacción Recomendadas

* **Selector de variantes:** En cualquiera de las 4 especialidades de pizza, selecciona "Personal", "Mediana" o "Familiar"; comprueba que el valor numérico en `$ COP` se modifique en pantalla de forma inmediata.
* **Ordenamiento de catálogo:** Utiliza el menú desplegable para ordenar de mayor a menor precio; verifica que las tarjetas cambien de posición en el DOM sin recargar la página.
* **Pedido directo:** Haz clic en "Pedir Ítem" en cualquier tarjeta; se abrirá el modal con los datos exactos del producto seleccionado para confirmar la dirección de entrega o iniciar la llamada.
* **Navegación por teclado:** Presiona la tecla `Tab` para verificar la aparición del `skip-link` y el contorno cyan (`#38BDF8`) en todos los elementos interactivos.