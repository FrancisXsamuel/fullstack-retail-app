# Fullstack Retail App 🛒

¡Bienvenido! Este es un proyecto de comercio electrónico Full Stack desarrollado con una arquitectura moderna y desacoplada, dividida en un backend robusto y un cliente SPA responsivo y reactivo.

## 🚀 Características Principales
- **Arquitectura Limpia:** Separación total entre el servidor de servicios y la interfaz de usuario.
- **Estado Global Reactivo:** Gestión del carrito de compras en el frontend utilizando **Angular Signals** (`computed`, `asReadonly`, e inmutabilidad con `.update()`).
- **Enrutamiento Dinámico:** Navegación fluida entre el catálogo y la vista de detalle mapeando parámetros en tiempo real con operadores asíncronos de **RxJS** (`switchMap`).

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 18+** (Componentes Standalone, Signals, Nuevo Flujo de Control `@for`/`@if`).
- **CSS3** (Diseño responsivo con Flexbox y CSS Variables para modo oscuro).

### Backend & Base de Datos
- **Node.js** con **Express** (Enrutamiento modular).
- **MongoDB** (Persistencia de datos y modelos de productos).

---

## 💻 Instrucciones para levantar el proyecto localmente

Sigue estos pasos para arrancar tanto el servidor como el cliente en tu entorno de desarrollo.

### 1. Clonar el repositorio
```bash
git clone [https://github.com/FrancisXsamuel/fullstack-retail-app.git](https://github.com/FrancisXsamuel/fullstack-retail-app.git)
cd fullstack-retail-app
