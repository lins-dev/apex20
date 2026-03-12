# Apex20 🎲 - High-Performance Virtual Tabletop (VTT)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: Turborepo](https://img.shields.io/badge/Stack-Turborepo-EF4444.svg)](https://turbo.build/)
[![Backend: Go Chi](https://img.shields.io/badge/Backend-Go_Chi-00ADD8.svg)](https://go-chi.io/)
[![Frontend: Next.js](https://img.shields.io/badge/Frontend-Next.js-000000.svg)](https://nextjs.org/)

**Apex20** é uma plataforma de VTT (Virtual Tabletop) de próxima geração, focada em performance extrema, imersão via Realidade Aumentada (AR) e automação inteligente através de Visão Computacional e IA.

## 🏗️ Estrutura do Monorepo

O projeto utiliza **Turborepo** para gerenciar as aplicações e pacotes compartilhados:

- `apps/backend`: Core API em Go utilizando Arquitetura Hexagonal.
- `apps/ws-service`: Serviço de WebSocket customizado em Go para sincronização em tempo real.
- `apps/web`: Aplicação Web principal em Next.js (App Router) + shadcn/ui.
- `apps/mobile`: App nativo com Expo + NativeWind (React Native).
- `packages/contracts`: Definições de contratos (Protobuf) e esquemas de banco de dados (sqlc).
- `packages/i18n`: Sistema de internacionalização (EN, PT-BR, ES, FR).
- `packages/ui`: Biblioteca de componentes compartilhada.

## 🚀 Recursos Avançados

- **Computer Vision (MediaPipe):** Detecção de gestos e leitura de dados de dados físicos.
- **Realidade Aumentada (WebXR):** Projeção de mapas e miniaturas em 3D.
- **IA Session Summaries:** Resumos automáticos de sessões baseados em logs de combate e roleplay.
- **Local-first & Optimistic UI:** Experiência fluida mesmo em conexões instáveis.
- **Foundry VTT Importer:** Migração simplificada de mundos e personagens.

## 🛠️ Orquestração e Setup

### Pré-requisitos
- [Go 1.22+](https://go.dev/)
- [Node.js 20+](https://nodejs.org/)
- [pnpm 9+](https://pnpm.io/)
- [Docker](https://www.docker.com/) (para Redis e PostgreSQL)

### Instalação
```bash
# Instalar dependências
pnpm install

# Subir infraestrutura (Redis, DB)
docker-compose up -d

# Gerar contratos e código sqlc
pnpm run generate

# Iniciar ambiente de desenvolvimento
pnpm dev
```

## 📖 Documentação Adicional

- [Arquitetura](./docs/ARCHITECTURE.md)
- [Product Requirements Document (PRD)](./docs/PRD.md)
- [Roadmap & Tasks](./docs/TASKS.md)
- [Style Guide & Standards](./docs/STANDARDS.md)
- [ADR Index](./docs/adrs/)

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
