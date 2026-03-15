# WS-Service Standards - Apex20 🔌

Este documento define as convenções específicas para o serviço de WebSocket.

## 🧪 Estratégia de Testes
- **Localização:** Testes lado-a-lado (`*_test.go`).
- **Foco:** Validação de concorrência e integridade de broadcast (Redis Pub/Sub).

## 🏗️ Arquitetura Hexagonal
- **Inbound Adapter:** Gerencia conexões WebSocket e Upgrades HTTP.
- **Outbound Adapter:** Gerencia a comunicação com Redis para escalonamento horizontal (ADR-019).

## 🚀 Performance
- **Streaming:** Uso de Protobuf binário para minimizar latência (ADR-007).
- **Concorrência:** Uso extensivo de Goroutines e Channels para lidar com milhares de conexões simultâneas.
