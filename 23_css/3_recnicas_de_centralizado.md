# 3 formas de centralizar cajas

# opcion 1

```css
/* Tailwind: */
<div className="flex items-center justify-center">
  <div>Contenido centrado</div>
</div>

/* CSS puro: */
.padre {
  display: flex;
  align-items: center; /* vertical */
  justify-content: center; /* horizontal */
}
```

# opcion 2

```css
/* Tailwind: */
<div className="grid place-items-center">
  <div>Contenido centrado</div>
</div>

/* CSS puro: */
.padre {
  display: grid;
  place-items: center; /* ¡Una sola línea! */
}
```

# opcion 3

```css
/* Tailwind: */
<div className="mx-auto">
  <div>Centrado horizontal</div>
</div>

/* CSS puro: */
.hijo {
  margin-left: auto;
  margin-right: auto;
}
```
