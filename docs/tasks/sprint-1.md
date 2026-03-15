# Detalhamento Técnico: Sprint 1 🛠️

**Objetivo:** Estabelecer a base do monorepo, contratos de comunicação e infraestrutura inicial.
**Status Atual:** 🔴 Não Iniciado

---

## 1. Fundação do Monorepo (Turborepo + pnpm)
- [x] Criar `pnpm-workspace.yaml` definindo `apps/*` e `packages/*`.
- [x] Inicializar `package.json` na raiz com scripts de orquestração.
- [x] Configurar `turbo.json` com pipelines de `build`, `lint`, `test` e `dev`.
- [x] Configurar TypeScript Base (`packages/config-typescript`) para compartilhamento de regras.
- [x] Configurar ESLint e Prettier globais integrados ao Turborepo.

## 2. Contratos e Serialização (Protobuf)
- [x] Configurar `packages/contracts` com a ferramenta **Buf**.
- [ ] Definir `handshake.proto` (Autenticação e Inicialização).
- [ ] Definir `chat.proto` (Mensageria em tempo real).
- [ ] Definir `grid_events.proto` (Movimentação e Estados do mapa).
- [ ] Implementar scripts de geração de código para Go e TypeScript.

## 3. Scaffold de Infraestrutura e Backend
- [ ] Criar `docker-compose.yml` (PostgreSQL 16, Redis 7, Prometheus).
- [ ] Configurar `apps/backend` com estrutura de **Arquitetura Hexagonal**.
- [ ] Configurar `apps/ws-service` com estrutura de **Arquitetura Hexagonal**.
- [ ] Inicializar ferramenta de migração **Tern** e configuração do **sqlc**.

## 4. Pacotes Compartilhados (Core)
- [ ] Setup de `packages/i18n` com suporte inicial a EN e PT-BR.
- [ ] Setup de `packages/ui` com **Storybook** e componentes base **shadcn/ui**.
- [ ] Configurar `packages/sensors` (Sensor Abstraction Layer - ADR-020).

## 5. Validação de Integração Inicial
- [ ] Implementar teste de "Ping-Pong" entre `backend` e `ws-service` via Redis.
- [ ] Validar pipeline de CI rodando os primeiros testes de infraestrutura.

---
**Critério de Aceite da Sprint:** O comando `apex20 dev` deve subir todos os serviços e o comando `apex20 test` deve passar com 100% de cobertura nos boilerplates.
