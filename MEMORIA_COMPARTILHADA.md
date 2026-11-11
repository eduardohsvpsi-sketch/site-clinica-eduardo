# Memória Compartilhada Entre os Chats do Antigravity

Este arquivo funciona como a ponte de comunicação em tempo real entre todos os chats abertos nas pastas `CONCURSO PSICÓLOGO CUBATÃO` e `Antig`.

---

## 🔗 Chats Conectados neste Workspace

| Papel do Chat | Conversation ID | Caminho do Histórico (`transcript.jsonl`) |
| :--- | :--- | :--- |
| **Chat 1 — Landing Page, Design & Deploy (GitHub/Cloudflare)** | `1ce55d27-c727-476f-b5f4-8dabf52948e8` | `C:\Users\Windows 11\.gemini\antigravity\brain\1ce55d27-c727-476f-b5f4-8dabf52948e8\.system_generated\logs\transcript.jsonl` |
| **Chat 2 — Teoria (Psicologia Histórico-Cultural), Documentos & Briefing** | `bd50fae7-4b40-47e3-b5eb-a45948d85529` | `C:\Users\Windows 11\.gemini\antigravity\brain\bd50fae7-4b40-47e3-b5eb-a45948d85529\.system_generated\logs\transcript.jsonl` |

---

## 📌 Estado Atual do Projeto (Última Sincronização: 10/11/2026)

1. **Abordagem Teórica Definitiva:**
   - **Psicologia Histórico-Cultural (PHC)** (Lev Vigotski / Instituto Veresk) integrada a ferramentas pragmáticas da **Terapia Cognitivo-Comportamental (TCC)**.
   - Textos da seção "Como Funciona a Terapia" e "Como eu trabalho" mesclados em 1ª pessoa, com a ilustração `phc-ilustracao.png`.
   - Documentos de referência na subpasta `Documentos básicos/` (`Lev/` e `Veresk/`).
2. **Público-Alvo Atual na Landing Page:**
   - **Adultos**, **Idosos** e **Pessoas LGBTQIAPN+** (removido atendimento para crianças e adolescentes).
3. **Regras de Exibição & Funcionalidades Ativas:**
   - **CRP 06/200229** exibido exclusivamente no rodapé definitivo do site.
   - Sem menção a reembolso de convênio / plano de saúde.
   - Nome em "Sobre Mim" exibido como **Eduardo Vieira**.
   - **Switch de Idioma `PT / EN` no Header:** Tradução instantânea Português/Inglês com bandeiras divididas em SVG (`Brasil/Portugal` em `PT` e `EUA/Reino Unido` em `EN`).
   - **Modalidade:** `100% Online • Atendimentos em português e inglês`.
   - **Contatos Diretos:** WhatsApp (`+55 13 98121-6248`), E-mail com mensagem pré-preenchida (`eduardohsv.psi@gmail.com`) e Instagram (`@culturaehistoriapsi`).
   - **Carrossel de Painéis Cinza em "Sobre Mim":**
     - Os dois painéis cinza escuro (`#353839`) em "Sobre Mim" funcionam juntos como um único carrossel de painéis (`01 • Apresentação & Formação` e `02 • Clínica, Arte & Histórias`), com setas `‹` / `›` e sem barra divisória abaixo dos switches numerados.
     - **Painel 1 (Apresentação & Formação):** Possui carrossel de fotos com `eduardo-foto.jpg` (retrato profissional em 1º lugar) e `eduardo-foto-2.jpg` (formatura em 2º lugar).
     - **Painel 2 (Clínica, Arte & Histórias):** Exibe `eduardo-foto-3.jpg` como foto estática (sem sub-carrossel na foto) acompanhada do texto autoral sobre clínica, cinema, literatura e quadrinhos (em PT e EN).
   - **Header Mobile com Todas as Informações Visíveis:** No celular, o Header exibe 100% das informações sem esconder nada em menu hambúrguer: Linha 1 com Foto, Nome (`Eduardo Vieira`), Subtítulo completo (`Psicólogo Clínico • 100% Online`), Switch `PT/EN` com bandeiras divididas e botão `Agendar uma sessão`; Linha 2 com todos os links de navegação (`Início`, `Como Funciona a Terapia`, `Para Quem É`, `Sobre Mim`) sempre visíveis.
4. **Repositório GitHub & Deploy (Git Push Automático):**
   - Repositório conectado: `https://github.com/eduardohsvpsi-sketch/site-clinica-eduardo.git` (branch `main`).
   - **Regra ativa:** Todas as atualizações devem ser enviadas automaticamente via `git push origin main --force`.
   - Pasta pronta para Cloudflare Pages: `cloudflare-deploy/`.
   - Servidor local: `agy-node server.mjs` em `http://localhost:3000`.
