# Replit.md

## Overview

This is a unified, mobile-first website for Dr. Dédé + incluu, serving as a professional portfolio and business website. The site showcases AI governance expertise, accessibility consulting services, and thought leadership content including a featured TEDx talk. Built as a full-stack web application with React frontend and Express backend, it emphasizes accessibility, performance, and dual-brand theming capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development tooling
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and React hooks for local state
- **Design System**: Dual-brand theming system supporting Dr. Dédé and incluu brands with dynamic theme switching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: In-memory storage with planned PostgreSQL migration
- **Development**: Vite middleware for HMR and development server integration

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM with schema-first approach
- **ORM**: Drizzle with Zod validation for type safety
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL for production

### Authentication and Authorization
- **Current**: Basic user schema with username/password fields
- **Storage**: In-memory implementation with interface for database migration
- **Security**: Planned session-based authentication with secure cookie management
- **Admin Access**: External admin dashboard link without local authentication storage

### Design and Accessibility Features
- **Accessibility Toolbar**: Custom implementation with font scaling, high contrast mode, and reduced motion preferences
- **Mobile-First Design**: Responsive layout with consistent spacing using Tailwind's design tokens
- **Component Library**: Comprehensive UI components following accessibility best practices
- **Brand System**: Dynamic theming with CSS custom properties for dual-brand support

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect

### UI and Component Libraries
- **Radix UI**: Comprehensive primitive components for accessibility (@radix-ui/*)
- **shadcn/ui**: Pre-built component system with consistent design tokens
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

### Development and Build Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type safety across frontend and backend
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation (@hookform/resolvers)
- **Zod**: Runtime type validation and schema definition

### Styling and Animation
- **Tailwind CSS**: Utility-first styling with custom design system
- **Class Variance Authority**: Component variant management
- **Custom CSS Variables**: Dynamic theming system for brand switching

### Media and Content
- **Embla Carousel**: Touch-friendly carousel component
- **Date-fns**: Date manipulation and formatting utilities
- **Video Embedding**: Custom video component supporting YouTube and Vimeo

### Deployment and Hosting
- **Replit**: Development and deployment platform
- **Express.js**: Production server with static file serving
- **Environment Variables**: Configuration management for database and external services