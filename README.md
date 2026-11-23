# Portafolio — María Fernanda Moncada Molina

Sitio en Next.js 16 (App Router) + TypeScript, sin librerías de estilos: todo el diseño está en `app/globals.css`.

## Estructura

```
app/
  layout.tsx      → fuentes (Instrument Serif + Inter), título y vista previa para redes
  page.tsx        → la página: hero, trabajos, trayectoria, sobre mí, contacto
  globals.css     → todos los estilos; colores en las variables de :root
components/
  WorkGrid.tsx    → tarjetas de trabajos con filtro (único componente cliente)
data/
  content.ts      → TODO el texto: perfil, trabajos, experiencia, herramientas
public/images/    → fotos de los trabajos
```

Para cambiar textos o agregar un trabajo solo se toca `data/content.ts`.

## Correr en local (PowerShell)

```powershell
npm install
npm run dev
```

Abrir http://localhost:3000

## Subir a Vercel

1. Crear un repositorio en GitHub y subir esta carpeta:
   ```powershell
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/<usuario>/maria-moncada-portafolio.git
   git push -u origin main
   ```
2. En vercel.com → **Add New… → Project** → importar el repositorio.
3. Vercel detecta Next.js solo. Clic en **Deploy**. No necesita variables de entorno.
4. Cada `git push` a `main` vuelve a publicar el sitio.

Dominio propio (opcional): en el proyecto de Vercel → **Settings → Domains**.

## Pendientes

- Retrato: guardar como `public/images/retrato.jpg` y en `data/content.ts` poner `portrait: "/images/retrato.jpg"`.
- Confirmar con ella su rol en la crónica del terremoto y en el video.
- Las fotos actuales son capturas (~1400 px); si se consiguen los originales, reemplazarlas con el mismo nombre.
