# 🏢 Sistema de Inventario FOC - Frontend

## 📖 Descripción
Frontend completo y funcional para el Sistema de Gestión de Inventario . Desarrollado con Vite + TypeScript, proporciona una interfaz moderna y responsive para gestionar almacenes, áreas, productos, usuarios y más.

**🔗 Backend Compatible:** [foc_api](https://github.com/Isis1312/foc_api.git)

## 🚀 Características

### ✅ Módulos Implementados y Funcionales
- **📊 Test** - Registros de prueba del sistema
- **👥 Roles** - Gestión de roles de usuario
- **👤 Usuarios** - Administración de usuarios del sistema
- **🏭 Almacenes** - Gestión de almacenes/warehouses
- **📦 Categorías** - Categorización de productos
- **📍 Áreas** - Áreas internas de los almacenes
- **🛍️ Productos** - Inventario de productos completo

### 🎨 Interfaz de Usuario
- **Tema oscuro** moderno y profesional
- **Diseño responsive** adaptable a cualquier dispositivo
- **Navegación SPA** (Single Page Application) fluida
- **Indicadores de carga** y estados de error
- **Tablas optimizadas** para mejor visualización de datos

## 🛠️ Tecnologías Utilizadas

### Dependencias Principales
```json
{
  "vite": "^5.0+",
  "typescript": "^5.0+",
  "axios": "^1.6+"
}

## 🛠️ Tecnologías Utilizadas

### Dependencias Principales
```json
{
  "vite": "^5.0+",
  "typescript": "^5.0+",
  "axios": "^1.6+"
}
Dependencias de Desarrollo
json
{
  "@types/node": "^20.0+",
  "typescript": "^5.0+"
}
📥 Instalación y Configuración
Prerrequisitos
Node.js 18+ (recomendado 20+)

npm 9+ o yarn 1.22+

Backend FOC API ejecutándose (Repositorio)

🎯 Pasos de Instalación
Clonar el repositorio


git clone <url-del-repositorio-frontend>
cd foc-frontend
Instalar dependencias


npm install
Configurar variables de entorno


# Crear archivo .env en la raíz del proyecto
cp .env.example .env
Editar el archivo .env:

env
VITE_API_URL=http://localhost:3800/api/v1

Ejecutar el backend (requerido)

# En una terminal separada, clonar y ejecutar el backend
git clone https://github.com/Isis1312/foc_api.git
cd foc_api
npm install
npm run dev

Ejecutar el frontend
npm run dev

Uso del Sistema
Acceso a la Aplicación
URL local: http://localhost:5173

API Backend: http://localhost:3800/api/v1

foc-frontend/
├── src/
│   ├── modules/           # Módulos de la aplicación
│   │   ├── test.module.ts
│   │   ├── roles.module.ts
│   │   ├── users.module.ts
│   │   ├── warehouses.module.ts
│   │   ├── categories.module.ts
│   │   ├── areas.module.ts
│   │   └── products.module.ts
│   ├── services/          # Servicios de API
│   │   ├── http.service.ts
│   │   ├── test.service.ts
│   │   ├── roles.service.ts
│   │   ├── users.service.ts
│   │   ├── warehouses.service.ts
│   │   ├── categories.service.ts
│   │   ├── areas.service.ts
│   │   └── products.service.ts
│   ├── main.ts           # Punto de entrada
│   └── style.css         # Estilos globales
├── index.html
├── package.json
├── vite.config.ts
└── .env.example