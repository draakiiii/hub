# Draakiiii HUB

Un centro de control moderno para acceder a todas las aplicaciones de Draakiiii desde un solo lugar.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y responsive con Tailwind CSS
- **Acceso Centralizado**: Todas las aplicaciones en un solo lugar
- **Navegación Intuitiva**: Clic en cualquier aplicación para abrirla en nueva pestaña
- **Efectos Visuales**: Animaciones suaves y efectos hover
- **Responsive**: Funciona perfectamente en desktop, tablet y móvil

## 📱 Aplicaciones Incluidas

### Aplicación Principal
- **Draakiiii Store** (`draakiiii.com`) - Tienda de figuras de resina

### Otras Aplicaciones
- **Books** (`books.draakiiii.com`) - Gestión de librería con sistema de puntos
- **Gestión** (`gestion.draakiiii.com`) - Gestión de pedidos de figuras
- **Remigio** (`remigio.draakiiii.com`) - Calculadora de puntos para baraja española
- **Lists** (`lists.draakiiii.com`) - Gestión de listas con categorías
- **Movies** (`movies.draakiiii.com`) - Watchlists de Letterboxd y selección de películas

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesamiento de CSS

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd draakiiii-hub

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
draakiiii-hub/
├── public/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales con Tailwind
├── index.html
├── package.json
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
└── README.md
```

## 🎨 Personalización

### Añadir Nueva Aplicación
Para añadir una nueva aplicación, edita el array `applications` en `src/App.jsx`:

```javascript
{
  id: 'nueva-app',
  name: 'Nueva App',
  description: 'Descripción de la nueva aplicación',
  domain: 'nueva-app.draakiiii.com',
  icon: IconComponent, // Importar de lucide-react
  color: 'bg-color-500',
  hoverColor: 'bg-color-600'
}
```

### Cambiar Colores
Los colores se pueden personalizar en `tailwind.config.js` y en el array de aplicaciones.

## 🌐 Despliegue

El proyecto está optimizado para despliegue en cualquier plataforma:

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastrar la carpeta `dist` después de `npm run build`
- **GitHub Pages**: Configurar GitHub Actions
- **Servidor propio**: Subir la carpeta `dist` al servidor web

## 📝 Licencia

© 2024 Draakiiii HUB - Todos los derechos reservados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para cualquier pregunta o sugerencia, contacta con Draakiiii.
