# Portafolio — Jean Gutiérrez

Portafolio personal hecho con **Vite** y JavaScript vanilla (sin frameworks).
Tema oscuro minimalista, responsivo.

## Cómo editarlo

Toda tu información está en un solo archivo:

```
src/data/content.js
```

Ahí cambias tu presentación, tecnologías, proyectos y enlaces de contacto.
Los valores marcados con `// TODO` son placeholders que debes reemplazar
(usuario de GitHub, LinkedIn, y las URLs de demo/repo de cada proyecto).

## Correrlo en tu máquina

Necesitas [Node.js](https://nodejs.org) instalado. Luego, en la carpeta del proyecto:

```bash
npm install     # solo la primera vez
npm run dev     # arranca en http://localhost:5173
```

Cada vez que guardas un archivo, la página se recarga sola.

## Publicarlo en Vercel (gratis)

1. Sube esta carpeta a un repositorio en tu GitHub.
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub.
3. "Add New… → Project", elige tu repositorio.
4. Vercel detecta Vite automáticamente. Dale "Deploy".
5. En un minuto tendrás una URL tipo `jean-gutierrez.vercel.app`.

Cada `git push` vuelve a desplegar el sitio solo.

### Dominio propio (opcional)

Si compras un dominio (ej. `jeandev.com`), en el panel del proyecto en
Vercel: Settings → Domains → agrega tu dominio y sigue las instrucciones
de DNS. El HTTPS es automático.

## Estructura

```
index.html            página base
src/main.js           arma la página con tus datos
src/data/content.js   ← TU INFORMACIÓN (edita aquí)
src/styles/main.css   estilos y colores
vercel.json           config de despliegue + cabeceras de seguridad
```
