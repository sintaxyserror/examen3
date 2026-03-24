# Actividad Repaso

Aplicación web desarrollada con Angular 19 que funciona como herramienta interactiva para gestionar y visualizar información en distintos plazos temporales.

## Características

- **Interface amigable**: Navegación clara a través de un header y footer consistentes
- **Múltiples vistas**: Acceso a diferentes secciones según necesidades
  - Home: Página principal
  - Longterm: Gestión de objetivos a largo plazo
  - Shortterm: Seguimiento de tareas corto plazo
  - Game: Componente interactivo
- **Arquitectura modular**: Componentes reutilizables y bien organizados
- **Responsive design**: Adaptado para diferentes dispositivos

## Requisitos

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sintaxyserror/examen3.git
cd examen3

# Instalar dependencias
npm install
```

## Uso

### Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Construcción

Para crear una build optimizada para producción:

```bash
npm run build
```

### Pruebas

Ejecutar los tests:

```bash
npm test
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── banner/
│   │   ├── footer/
│   │   └── header/
│   ├── views/
│   │   ├── home/
│   │   ├── longterm/
│   │   ├── shortterm/
│   │   └── game/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
└── styles.css
```

## Tecnologías

- **Angular**: 19.0.0
- **TypeScript**: Lenguaje de programación
- **RxJS**: Manejo reactivo de datos
- **Angular Router**: Navegación entre vistas

## Licencia

Este proyecto forma parte de una actividad educativa.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
