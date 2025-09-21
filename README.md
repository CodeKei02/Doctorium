# 🏥 Doctorium — Medical Management System

Modern web app to manage medical offices, patients, appointments, and reusable templates.

## Badges

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC)
![Zustand](https://img.shields.io/badge/State-Zustand-5.x-orange)
![MUI](https://img.shields.io/badge/UI-MUI_7.x-007FFF)
![TipTap](https://img.shields.io/badge/Editor-TipTap_2.x-purple)
![pnpm](https://img.shields.io/badge/pnpm-10.x-4A4A4A)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

Doctorium helps clinicians organize their practice:

- Manage medical offices (consultorios), contact info, and availability
- Track patients, quick summaries, and details
- Schedule and reschedule appointments with a calendar and drag-and-drop

## ✨ Features

- Offices (Consultorios)
  - Create, edit, and list offices
  - Contact and location details
  - Availability per day and duration settings
- Patients
  - Patient listing with hover quick-view (age, phone, last/next visit, status)
  - Patient detail page scaffold
- Appointments
  - Calendar page with drag-and-drop rescheduling (Pragmatic DnD)
- UI/UX
  - Responsive layout with Tailwind CSS and MUI components
  - Reusable UI primitives and icon system

## 🛠 Tech Stack

- Framework: Next.js 15, React 19, TypeScript 5
- Styling: Tailwind CSS v4, MUI v7
- State: Zustand v5 with a reusable generic CRUD store (`src/stores/crud.ts`)
- Forms: Formik
- Editor: TipTap v2 (StarterKit, Placeholder)
- Interactions: Framer Motion, Atlassian Pragmatic Drag and Drop
- Utilities: uuid
- Tooling: ESLint 9, pnpm 10

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20 recommended)
- pnpm 10+ (recommended)

Enable pnpm via Corepack (recommended):

```bash
corepack enable
corepack use pnpm@10.17.0
```

### Install

```bash
git clone https://github.com/tu-usuario/Doctorium.git
cd Doctorium
pnpm install
# or: npm install
# or: yarn install
```

### Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_APP_NAME=DocGuia
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional (if/when backend or database are added)
API_BASE_URL=
DATABASE_URL=
```

### Development

```bash
pnpm dev
# open http://localhost:3000
```

### Build and Run

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## 📁 Project Structure

```
src/
   components/
      dashboard/
      layout/
         TemplateEditor.tsx        # TipTap-based Notion-like editor
      ui/
   constants/
      patients-info.ts            # Patients mock data
      consultorio-items.ts        # Form config for offices
   pages/
      calendario.tsx              # Calendar + drag-and-drop reschedule
      consultorios/               # Offices: list/new/edit
      pacientes/                  # Patients list and detail
   stores/
      crud.ts                     # Reusable generic CRUD store helpers
      consultorio.ts              # Domain store that composes CRUD
      sidebar.ts                  # UI store
   styles/
      globals.css
```

## 🧩 Notable Modules

- `src/stores/crud.ts`: Generic CRUD helpers (add, update, remove, setAll, clear, getById) used to build domain stores.
- `src/components/layout/TemplateEditor.tsx`: TipTap editor with toolbar (bold, headings, bullet/ordered lists) and placeholder.
- `src/pages/pacientes/index.tsx`: Patients list with hover quick-view.
- `src/pages/calendario.tsx`: Calendar page integrating drag-and-drop rescheduling.

## 🔗 Useful Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

## Deployment

The project is compatible with Vercel. Ensure you:

- Set environment variables in the Vercel project
- Use the same package manager (`pnpm`) during deploy
- Clear build cache if you change package managers or major dependencies

## License

MIT. See the repository license if present.

# 🏥 Doctorium - Sistema de Gestión Médica

> Plataforma web para la gestión integral de consultorios médicos, pacientes y citas.

### 2. **Badges de Estado**

```markdown
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)
```

### 3. **Descripción Breve**

```markdown
## Descripción

DocGuia es una aplicación web moderna desarrollada con Next.js que permite a los médicos gestionar sus consultorios, pacientes y citas de manera eficiente. Incluye funcionalidades como:

- Gestión de consultorios médicos
- 👥 Administración de pacientes
- Sistema de citas y disponibilidad
- 📋 Historiales médicos
- 🔔 Notificaciones automáticas
```

### 5. **Características Principales**

```markdown
## ✨ Características

### Gestión de Consultorios

- Crear y editar consultorios
- Configurar horarios de atención
- Gestionar disponibilidad por día
- Información de contacto y ubicación

### 👥 Gestión de Pacientes

- Registro completo de pacientes
- Historiales médicos
- Diagnósticos y tratamientos
- Seguimiento de citas

### Sistema de Citas

- Agendar citas por consultorio
- Calendario interactivo

### 🎨 Interfaz de Usuario

- Diseño responsive y moderno
- Navegación intuitiva
- Componentes reutilizables
- Tema personalizable
```

### 6. **Tecnologías Utilizadas**

```markdown
## 🛠️ Tecnologías

### Frontend

- **[Next.js 15.3.5](https://nextjs.org/)** - Framework de React
- **[React 19.0.0](https://reactjs.org/)** - Biblioteca de UI
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Framework CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones

### Estado y Gestión

- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Gestión de estado
- **[React Redux](https://react-redux.js.org/)** - Integración con React

### Formularios

- **[Formik](https://formik.org/)** - Manejo de formularios
- **[Yup](https://github.com/jquense/yup)** - Validación de esquemas

### Utilidades

- **[UUID](https://github.com/uuidjs/uuid)** - Generación de IDs únicos
```

### 7. **Instalación y Configuración**

````markdown
## 🚀 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/docguia.git
   cd docguia
   ```
````

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env.local
   ```

   Edita `.env.local` con tus configuraciones.

4. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

````

### 8. **Estructura del Proyecto**
```markdown
##  Estructura del Proyecto

````

src/
├── components/ # Componentes reutilizables
│ ├── dashboard/ # Componentes del dashboard
│ ├── layout/ # Componentes de layout
│ └── ui/ # Componentes de UI básicos
├── contexts/ # Contextos de Redux
│ ├── consultorios/ # Estado de consultorios
│ └── sidebar/ # Estado del sidebar
├── hooks/ # Hooks personalizados
├── pages/ # Páginas de Next.js
│ ├── consultorios/ # Páginas de consultorios
│ └── pacientes/ # Páginas de pacientes
├── styles/ # Estilos globales
└── utils/ # Utilidades y helpers

````

### 9. **Scripts Disponibles**
```markdown
## 📜 Scripts Disponibles

```bash
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar en modo producción
npm run lint         # Ejecutar linter
npm run type-check   # Verificar tipos de TypeScript
````

````

### 10. **Configuración**
```markdown
## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Configuración de la aplicación
NEXT_PUBLIC_APP_NAME=DocGuia
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Configuración de la base de datos (si aplica)
DATABASE_URL=your_database_url

# Configuración de API (si aplica)
API_BASE_URL=your_api_url
````

### Configuración de Tailwind

El proyecto incluye breakpoints personalizados:

```js
screens: {
  'xs': '375px',
  '2xs': '500px',
  'sm': '640px',
  'md': '700px',
  '2md': '786px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

````

### 11. **Uso**
```markdown
## 💡 Uso

### Gestión de Consultorios

1. **Crear un consultorio**
   - Navega a "Consultorios" → "Nuevo Consultorio"
   - Completa la información básica
   - Configura horarios de atención

2. **Editar disponibilidad**
   - Selecciona un consultorio
   - Ve a "Editar Disponibilidad"
   - Marca los días y horarios disponibles

### Gestión de Pacientes

1. **Registrar paciente**
   - Navega a "Pacientes" → "Nuevo Paciente"
   - Completa la información personal
   - Agrega historial médico

2. **Ver detalles**
   - Haz clic en un paciente
   - Revisa información médica
   - Gestiona citas y tratamientos
````
