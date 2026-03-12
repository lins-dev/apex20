# ADR-010: Estratégia de Pirâmide de Testes e QA (Playwright + Testcontainers) 🧪

**Data:** 2026-03-12
**Status:** Aceito

## Contexto
O Apex20 é um sistema complexo com lógica de tempo real e múltiplas integrações. Depender apenas de testes manuais é lento, caro e propenso a erros. Precisamos de uma estratégia de testes automatizados que garanta a integridade das regras de negócio, a correção das consultas SQL e a experiência do usuário final de forma contínua.

## Decisão
Adotar uma estratégia baseada na **Pirâmide de Testes**, priorizando a automação em diferentes níveis de isolamento.

1.  **Unit Tests (Go / Vitest)**:
    - Foco em funções puras, lógica de cálculo de fichas e componentes UI isolados.
    - Devem ser rápidos e executados a cada save.
2.  **Integration Tests (Go + Testcontainers)**:
    - Utilizar **Testcontainers** para subir instâncias reais de PostgreSQL e Redis durante os testes de repositório no Backend.
    - Garante que as consultas geradas pelo `sqlc` e a lógica de Pub/Sub funcionam contra bancos de dados reais, não mocks.
3.  **E2E - End-to-End Tests (Playwright)**:
    - Testar fluxos críticos do usuário (Login, Criação de Campanha, Movimentação no Grid).
    - Executar contra o ambiente completo (Frontend + Backend + WS) para garantir que a integração entre serviços está funcional.
4.  **Contract Testing (Protobuf)**:
    - Validar que as mensagens trocadas via ConnectRPC e WebSocket seguem rigorosamente os esquemas definidos em `packages/contracts`.

## Justificativa
- **Confiança (Integration)**: Testcontainers elimina o "funciona na minha máquina", testando contra a mesma versão de banco de dados usada em produção.
- **Resiliência (E2E)**: Playwright permite simular interações complexas no navegador, incluindo testes de latência e concorrência no WebSocket.
- **Eficiência**: A pirâmide garante que a maioria dos bugs seja capturada nos níveis inferiores (Unit/Integration), que são mais baratos e rápidos de executar.

## Consequências
- **Positivas**: Redução drástica de regressões; documentação viva do comportamento do sistema; facilidade em realizar refatorações seguras.
- **Negativas**: Maior tempo inicial de setup dos ambientes de teste (Docker necessário para Testcontainers); execução de testes E2E em CI/CD pode ser lenta e exigir recursos de hardware.

## Alternativas Consideradas
- **Mocks de Banco de Dados**: Rejeitado pois mocks frequentemente falham em replicar comportamentos específicos do PostgreSQL (triggers, JSONB, constraints).
- **Testes Manuais apenas**: Rejeitado pela impossibilidade de escalar e garantir qualidade em um sistema de alta performance.
