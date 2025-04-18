# Dragon Ball Z - Explorador de Personajes

![Dragon Ball Z Logo](public/dragon-ball-logo.png)

## 📖 Descripción

Esta aplicación web permite explorar y descubrir información detallada sobre los personajes del universo de Dragon Ball Z. Desarrollada con React y siguiendo principios de diseño modernos, ofrece una experiencia de usuario fluida y atractiva para los fans de la serie.

## ✨ Características

- **Exploración de personajes**: Navega por una colección completa de personajes de Dragon Ball Z
- **Búsqueda avanzada**: Encuentra personajes por nombre, raza, género o afiliación
- **Detalles completos**: Visualiza información detallada de cada personaje, incluyendo:
  - Datos básicos (raza, género, ki, planeta de origen)
  - Características físicas (altura, peso, poder máximo)
  - Transformaciones y habilidades especiales
  - Descripciones y biografías
- **Diseño responsive**: Experiencia optimizada para dispositivos móviles, tablets y escritorio
- **Interfaz Material Design**: Estética moderna y consistente siguiendo principios de Material Design
- **Animaciones sutiles**: Mejora la experiencia de usuario con transiciones y animaciones fluidas

## 🛠️ Tecnologías

- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **React Router**: Navegación entre páginas
- **React Query**: Gestión de estado del servidor y caché
- **CSS Modular**: Estilos organizados siguiendo la metodología BEM
- **Material Design**: Principios de diseño visual
- **API de Dragon Ball Z**: Fuente de datos para la información de personajes

## 🏗️ Arquitectura

La aplicación sigue una arquitectura modular y escalable:

### Estructura de directorios

src/
├── components/ # Componentes reutilizables
│ ├── CharacterCard.jsx
│ ├── DragonBallLogo.jsx
│ ├── ErrorMessage.jsx
│ ├── Layout.jsx
│ ├── LoadingSpinner.jsx
│ ├── Pagination.jsx
│ └── SearchBar.jsx
├── pages/ # Páginas principales
│ ├── CharacterDetail.jsx
│ └── CharacterList.jsx
├── services/ # Servicios y API
│ └── api.js
├── styles/ # Estilos CSS organizados por metodología BEM
│ ├── base/
│ │ ├── reset.css
│ │ ├── typography.css
│ │ └── variables.css
│ ├── components/
│ │ ├── button.css
│ │ ├── card.css
│ │ ├── error.css
│ │ ├── loading.css
│ │ ├── pagination.css
│ │ └── search.css
│ ├── layouts/
│ │ ├── footer.css
│ │ ├── grid.css
│ │ └── header.css
│ ├── pages/
│ │ ├── character-detail.css
│ │ └── character-list.css
│ └── main.css # Archivo principal que importa todos los estilos
├── App.jsx # Componente principal y rutas
└── main.jsx # Punto de entrada de la aplicación
)

### Patrones de diseño

- **Componentes funcionales**: Uso de React Hooks para la gestión de estado
- **Metodología BEM**: Block, Element, Modifier para nombrar clases CSS
- **Diseño atómico**: Componentes pequeños y reutilizables que se combinan para crear interfaces complejas
- **Separación de responsabilidades**: Componentes de presentación vs. lógica de negocio
- **Renderizado condicional**: Manejo elegante de estados de carga, error y datos vacíos

## 🚀 Instalación y uso

### Requisitos previos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior) o yarn (v1.22.0 o superior)

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/dragon-ball-z-explorer.git
   cd dragon-ball-z-explorer
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:5173`

### Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción localmente
- `npm run lint`: Ejecuta el linter para verificar la calidad del código
- `npm run test`: Ejecuta las pruebas unitarias

## 📱 Capturas de pantalla

### Lista de personajes
![Lista de personajes](screenshots/character-list.png)

### Detalle de personaje
![Detalle de personaje](screenshots/character-detail.png)

### Versión móvil
![Versión móvil](screenshots/mobile-view.png)

## 🎨 Principios de diseño

### Sistema de diseño

La aplicación implementa un sistema de diseño coherente basado en:

- **Paleta de colores**: Inspirada en Dragon Ball Z, con naranjas y azules como colores principales
- **Tipografía**: Fuentes legibles y jerárquicas para diferentes niveles de información
- **Espaciado**: Sistema de espaciado consistente basado en múltiplos de 4px
- **Elevación**: Uso de sombras para indicar jerarquía y profundidad
- **Bordes redondeados**: Esquinas suavizadas para una apariencia moderna
- **Animaciones**: Transiciones sutiles para mejorar la experiencia de usuario

### Accesibilidad

- Contraste de color adecuado para legibilidad
- Etiquetas ARIA para lectores de pantalla
- Navegación por teclado
- Textos alternativos para imágenes
- Estructura semántica HTML

## 🔄 Flujo de datos

1. **Solicitud de datos**: React Query gestiona las peticiones a la API
2. **Caché**: Los datos se almacenan en caché para mejorar el rendimiento
3. **Estado de carga**: Se muestra un spinner mientras se cargan los datos
4. **Manejo de errores**: Mensajes de error amigables en caso de problemas
5. **Renderizado**: Los datos se muestran en componentes React
6. **Interacción**: El usuario puede navegar, buscar y filtrar personajes

## 🧪 Pruebas

La aplicación incluye pruebas unitarias y de integración utilizando:
- Jest para pruebas unitarias
- React Testing Library para pruebas de componentes
- MSW (Mock Service Worker) para simular respuestas de API

## 🌐 Despliegue

La aplicación está optimizada para despliegue en plataformas como:
- Vercel
- Netlify
- GitHub Pages

## 🛣️ Roadmap

Características planeadas para futuras versiones:

- [ ] Modo oscuro
- [ ] Filtros avanzados por saga, poder, etc.
- [ ] Comparación de personajes
- [ ] Línea de tiempo de sagas
- [ ] Información sobre películas y episodios
- [ ] Soporte para múltiples idiomas

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Dragon Ball API](https://web.dragonball-api.com) por proporcionar los datos
- Akira Toriyama por crear el increíble universo de Dragon Ball
- La comunidad de React por sus herramientas y recursos

---

Desarrollado con ❤️ por [Tu Nombre](https://github.com/tu-usuario)

Este README.md proporciona una documentación completa y detallada de tu aplicación Dragon Ball Z Explorer. Incluye información sobre características, tecnologías utilizadas, arquitectura, instalación, capturas de pantalla, principios de diseño, flujo de datos, pruebas, despliegue, roadmap, contribución, licencia y agradecimientos.
Recuerda crear la carpeta screenshots en la raíz de tu proyecto y añadir las capturas de pantalla mencionadas para completar la documentación visual.

