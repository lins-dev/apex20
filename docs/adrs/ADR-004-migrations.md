# ADR-004: Escolha de Ferramenta de Migração (Tern) 🐘

**Data:** 2026-03-12
**Status:** Aceito

## Contexto
O Apex20 utiliza o **PostgreSQL** como seu banco de dados relacional primário e o **sqlc** para gerar código Go tipado. Precisamos de uma ferramenta que gerencie a evolução do esquema do banco de dados (tabelas, índices, triggers, views) de forma versionada, segura e que se integre perfeitamente com o ecossistema Go e os recursos específicos do PostgreSQL (JSONB, Pub/Sub, tipos customizados).

## Decisão
Adotar o **Tern** como a ferramenta oficial de migração de banco de dados.

1.  **Especialização**: O Tern é focado exclusivamente no PostgreSQL, o que permite suporte nativo a recursos avançados sem as limitações de ferramentas agnósticas.
2.  **Integração com pgx**: Criado pelo mesmo autor do driver `pgx` (que usaremos para performance), o Tern garante compatibilidade total com as extensões e tipos do Postgres.
3.  **Abordagem SQL-first**: As migrações são escritas em SQL puro, facilitando a leitura por DBAs e a geração de código pelo `sqlc`.
4.  **Suporte a Go Templates**: Permite o uso de lógica de templates em arquivos SQL (ex: schemas dinâmicos ou variáveis de ambiente).

## Justificativa
- **Performance**: O Tern é extremamente leve e rápido, ideal para ambientes de CI/CD e containers.
- **Previsibilidade**: Diferente de ferramentas declarativas (como Atlas), o Tern segue o fluxo imperativo ("Up" e "Down"), garantindo controle total sobre a ordem de execução.
- **Sinergia com sqlc**: Como o `sqlc` lê arquivos `.sql` para gerar código Go, ter migrações em SQL puro simplifica o fluxo de desenvolvimento: `Escrever SQL -> Rodar Tern -> Rodar sqlc`.

## Consequências
- **Positivas**: Máximo aproveitamento dos recursos do PostgreSQL; integração nativa com o driver de banco de dados escolhido; simplicidade na escrita de migrações.
- **Negativas**: Exige a escrita manual de scripts "Down" para reverter mudanças; não possui o "linting" automático de esquemas que ferramentas como Atlas oferecem.

## Alternativas Consideradas
- **golang-migrate**: Rejeitado por ser generalista demais e não oferecer os recursos específicos de template do Tern.
- **Atlas**: Rejeitado pela complexidade adicional e abstração "declarativa" que pode esconder comportamentos do banco de dados em sistemas críticos.
