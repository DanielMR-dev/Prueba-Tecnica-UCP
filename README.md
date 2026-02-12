# Rick & Morty Character Browser

Aplicación web para explorar personajes de Rick and Morty usando React + Vite + TailwindCSS.

## 🚀 Comandos de Inicio

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 3. Build para producción
```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── rickAndMorty.js          # Servicio de API con axios
├── hooks/
│   └── useCharacters.js         # Custom hook para fetch + estados
├── components/
│   ├── SearchBar.jsx            # Barra de búsqueda
│   ├── CharacterGrid.jsx        # Grid responsivo
│   ├── CharacterCard.jsx        # Tarjeta de personaje
│   ├── LoadingState.jsx         # Estado de carga
│   ├── ErrorState.jsx           # Estado de error
│   └── EmptyState.jsx           # Estado vacío
├── utils/
│   └── debounce.js              # Utilidad de debounce
├── App.jsx                      # Componente principal
├── main.jsx                     # Punto de entrada
└── index.css                    # Estilos base + Tailwind
```

## ✨ Características

- ✅ Lista de 20 personajes de Rick and Morty
- ✅ Búsqueda en tiempo real (filtrado local, sin spam a la API)
- ✅ Estados UI: Loading, Error, Empty
- ✅ Responsive (mobile-first)
- ✅ Accesible (ARIA labels, navegación por teclado)
- ✅ Manejo de errores robusto

## 🎯 Decisiones Técnicas

### Estrategia de Búsqueda: Filtrado Local

**¿Por qué filtrado local en lugar de búsqueda por API?**

- **Mejor UX**: Resultados instantáneos sin latencia de red
- **Menos complejidad**: No requiere debounce ni manejo de 404
- **Alcance apropiado**: Para 20 personajes, el filtrado local es óptimo
- **Sin spam a la API**: Una sola llamada inicial

**Alternativa considerada**: Búsqueda por API (`/?name=query`) con debounce
- Rechazada porque añade complejidad innecesaria para este caso de uso
- La utilidad `debounce.js` está incluida para escalabilidad futura

### Manejo de Errores

**Separación clara de estados**:
1. **Error de red/servidor** → ErrorState con botón "Reintentar"
2. **Sin resultados de búsqueda** → EmptyState (NO es un error)
3. **API 404** → Tratado como EmptyState

### Arquitectura de Componentes

**Principios de diseño atómico**:
- **Átomos**: CharacterCard, SearchBar, estados UI
- **Moléculas**: CharacterGrid
- **Organismos**: App (orquestación)

**Separación de responsabilidades**:
- `src/api/` - Llamadas puras a la API
- `src/hooks/` - Gestión de estado + efectos
- `src/components/` - Componentes presentacionales
- `src/utils/` - Utilidades reutilizables

## 🛠️ Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos utility-first
- **axios** - Cliente HTTP
- **JavaScript** - Sin TypeScript (según requerimiento)

## 📱 Responsive Design

- **Mobile**: 1 columna
- **Tablet (640px+)**: 2 columnas
- **Desktop (1024px+)**: 3 columnas
- **Large Desktop (1280px+)**: 4 columnas

## ♿ Accesibilidad

- Labels semánticos en inputs
- ARIA labels para iconos
- Navegación por teclado
- Imágenes con alt descriptivo
- Estados de foco visibles

## 🔧 Consideraciones de Desarrollo

### React 18 Strict Mode
El hook `useCharacters` incluye protección contra doble fetch en desarrollo usando `useRef` para evitar llamadas duplicadas.

### Optimizaciones
- `useMemo` para filtrado de personajes (evita re-cálculos innecesarios)
- Lazy loading de imágenes
- Transiciones CSS suaves

## 📝 API

**Endpoint**: `https://rickandmortyapi.com/api/character`

**Documentación**: https://rickandmortyapi.com/documentation

## 🎨 UI/UX

- Diseño limpio y moderno
- Gradiente de fondo sutil
- Cards con hover effect
- Badges de estado con código de colores:
  - 🟢 Vivo (verde)
  - 🔴 Muerto (rojo)
  - ⚪ Desconocido (gris)

---

**Desarrollado como prueba técnica con enfoque en arquitectura escalable y buenas prácticas.**
