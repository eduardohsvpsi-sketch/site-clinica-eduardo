# Regras do Projeto `Antig` — Comunicação Entre Chats & Padrões da Landing Page

Este arquivo (`GEMINI.md`) é carregado automaticamente pelo Antigravity em **todos os chats** abertos nesta pasta e em suas subpastas.

## 1. Como os Chats se Conversam nesta Pasta
- **Quadro de Memória Compartilhada:** Sempre leia e atualize `@[MEMORIA_COMPARTILHADA.md](./MEMORIA_COMPARTILHADA.md)` ao iniciar ou concluir alterações relevantes.
- **Briefing Teórico e Clínico:** Consulte `@[BRIEFING_LANDING_PAGE.md](./BRIEFING_LANDING_PAGE.md)` e a pasta `Documentos básicos` (`Lev` e `Veresk`) para textos e conceitos da **Psicologia Histórico-Cultural (PHC)**.
- **Mensagens Diretas entre Chats (`send_message`) e Leitura de Histórico:**
  - **Chat 1 (Landing Page, UI & Deploy GitHub/Cloudflare):** `1ce55d27-c727-476f-b5f4-8dabf52948e8`
  - **Chat 2 (Teoria PHC, Resumos Clínicos & Briefing):** `bd50fae7-4b40-47e3-b5eb-a45948d85529`
  - Se o usuário pedir em um chat para usar informações de outro chat, leia `MEMORIA_COMPARTILHADA.md` ou os logs em `C:\Users\Windows 11\.gemini\antigravity\brain\<conversation-id>\.system_generated\logs\transcript.jsonl` e use `send_message` se precisar acionar o outro agente.

## 2. Diretrizes Fixas do Projeto (Eduardo Vieira — Psicólogo Clínico)
- **Abordagem:** **Psicologia Histórico-Cultural (PHC)** articulada a recursos práticos da **Terapia Cognitivo-Comportamental (TCC)** (nunca usar "Clínica Intercultural").
- **Credencial Ética (`CRP 06/200229`):** Manter visível conforme a versão atual aprovada no rodapé definitivo da página.
- **Públicos Atendidos:** Adultos, Idosos e Pessoas LGBTQIAPN+ (sem menção a atendimento infantil/crianças e sem menção a reembolso de convênio).
- **Arquivos Sincronizados & Git Push Automático:** Nunca sobrescreva `src/App.jsx`, `index.html` ou `cloudflare-deploy/index.html` com versões antigas; sempre leia o arquivo atual antes de editar, replique as mudanças nos 3 arquivos e execute automaticamente `git add . && git commit && git push origin main --force` a cada atualização.
