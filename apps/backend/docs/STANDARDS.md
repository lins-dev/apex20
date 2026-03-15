# Backend Standards - Apex20 🐹

Este documento define as convenções específicas para o serviço Go.

## 🧪 Estratégia de Testes
- **Localização:** Os testes devem residir na mesma pasta do código que testam (`Side-by-Side`).
- **Nomenclatura:** 
    - `*_test.go`: Para testes unitários e lógica interna.
    - `*_integration_test.go`: Para testes que exigem infraestrutura (DB, Rede).
- **Pacotes:** Utilizar o sufixo `_test` no nome do pacote do arquivo de teste (ex: `package http_test`) para garantir testes de "caixa preta" sempre que possível, a menos que o acesso a membros privados seja estritamente necessário.

## 🏗️ Arquitetura Hexagonal
- **Domain:** Proibido importar qualquer coisa de `internal/application` ou `internal/infrastructure`.
- **Application:** Orquestra os casos de uso. Pode importar `domain`.
- **Infrastructure:** Contém as implementações técnicas (Chi, Postgres, Redis).

## 🚀 Padrões Go
- **Versão:** 1.26.
- **Tratamento de Erros:** Sempre utilize a abordagem `if err != nil`. Proibido o uso de `panic` em lógica de negócio.
- **Documentação:** Uso mandatório de **Huma v2** para rotas REST, visando código limpo e OpenAPI automático.
