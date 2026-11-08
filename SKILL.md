---
name: sfx
description: Universal Audio & SFX Engine for the Web & AI Agents (/sfx). Provides zero-latency procedural UI sounds (0 KB downloads), Openverse/Kenney/Freesound open audio integration, frame-accurate motion design sync, and automated DOM binding. Use whenever the user invokes /sfx or wants to add sound effects, audio feedback, tactile UI audio, or sound design to websites, apps, or videos.
---

# 🎧 OmniSFX — Universal Web & Agentic Sound Design Engine

OmniSFX é o motor definitivo de design de som, áudio procedural e integração de efeitos sonoros para a web e agentes de IA (Antigravity, Claude Code, Cursor, Windsurf).

Ele resolve o maior gargalo de interfaces modernas e vídeos em código: **o vazio acústico** e a **latência de requisição de arquivos**. Com o OmniSFX, interfaces ganham feedback tátil instantâneo via **Web Audio API puro (0 KB de download)** ou buscam acervos abertos (+5M de áudios CC0 do Openverse, Kenney e Freesound).

---

## ⚡ Princípios de Ouro do Design de Som em UI

1. **Latência Zero:** Sons de interface (clique, pop, toggle) NUNCA podem ter delay de rede. Use a síntese procedural embutida para resposta acústica em <2ms.
2. **Subtileza e Volume Calibrado:** Sons de UI devem viver entre `-18 LUFS` e `-12 LUFS` (ganho entre `0.04` e `0.20`). Nunca assuste o usuário.
3. **Respeito à Autonomia:** Sempre forneça controle de mute / volume persistente.
4. **Desbloqueio de Autoplay:** O `AudioContext` do navegador exige interação prévia do usuário (clique ou toque). O OmniSFX gerencia isso automaticamente através de event delegation.

---

## 🛠️ Modos de Invocação pelo Agente

```text
/sfx [comando ou url]
```

### Comandos Rápidos:
- `npx omni-sfx`: Dispara o Wizard Interativo no terminal com as 5 perguntas de perfil sonoro.
- `omniSfx.attachToDOM()`: Ativa o escutador global de atributos `data-sfx` em 1 linha.
- `omniSfx.play('click')`: Executa um efeito procedural imediato.
- `omniSfx.searchOpenverse('whoosh')`: Busca assets reais CC0 diretamente na API do Openverse.

---

## 📋 Wizard Interativo de Estilos Sonoros

Sempre que o usuário solicitar a integração de áudio ou configurar a identidade sonora de um site, execute o fluxo de perguntas:

### 1. Perguntas de Múltipla Escolha:
1. **Stack do Projeto:**
   - `[ ]` React / Next.js (App Router ou Pages)
   - `[ ]` HTML5 Vanilla / Multi-page (sem bundler)
   - `[ ]` Vue.js / Nuxt
   - `[ ]` Vite / SPA (Svelte, Astro, Remix)
2. **Paleta Sonora (Presets):**
   - `[x] Tech / Minimalist SaaS` (Cliques de alumínio, feedback sutil estilo Linear/Vercel)
   - `[ ] Cyberpunk / Sci-Fi` (Bips digitais, scanners futuristas, ondas quadradas)
   - `[ ] Retro 8-Bit / Arcade` (Chiptune clássico, nostalgia de jogos antigos)
   - `[ ] Orgânico / Zen` (Toques amadeirados, gotas d'água, sinos e relaxamento)
   - `[ ] Playful / Game` (Pops elásticos de bolha, moedas, fanfarras animadas)
   - `[ ] Cinematográfico / Epic` (Whooshes graves, transições profundas e risers)
3. **Intensidade / Gatilhos:**
   - `[ ] Essencial:` Apenas botões de ação e modais/status de sucesso e erro.
   - `[x] Interativo Completo:` Micro-feedback em hover, cliques, switches e tabs.
   - `[ ] Imersivo:` Feedback total de interface + suporte a trilhas ambientes.
4. **Engine de Renderização:**
   - `[x] Síntese Procedural Web Audio API` (0 KB de download, 0ms de latência)
   - `[ ] Híbrido` (Síntese local para UI + Openverse/Kenney para efeitos orgânicos)
   - `[ ] Apenas Arquivos de Áudio Reais` (Download de MP3/WAV)

### 2. Pergunta Personalizada Aberta (Obrigatória):
> *"Qual a identidade sonora, referências ou vibe específica do seu projeto? (Ex: 'cliques táteis mecânicos', 'experiência hospitalar acolhedora', 'lo-fi relaxante para cafeteria', 'som de moedas caindo no checkout')?"*

Com as respostas em mãos, o agente gera o arquivo `omni-sfx.config.json` e ajusta os ganhos e frequências personalizadas.

---

## 🚀 Integração em Sites Já Existentes

### Caso 1: HTML Vanilla / Sites Estáticos / Webflow / WordPress
Insira uma única tag `<script>` no final do `<body>` ou no `<head>`:

```html
<!-- Importação via CDN com Auto-Init -->
<script src="https://unpkg.com/omni-sfx" data-auto-init data-preset="tech"></script>

<!-- Adicione atributos data-sfx aos seus elementos HTML existentes: -->
<button data-sfx="click">Enviar Mensagem</button>
<button data-sfx="pop">Favoritar</button>
<input type="checkbox" data-sfx="switch">
<a href="/sobre" data-sfx-hover="hover">Sobre Nós</a>
<div data-sfx="success">Pagamento Confirmado</div>
```

---

### Caso 2: React / Next.js (App Router & Pages)

#### 1. Instalação:
```bash
npm install omni-sfx
```

#### 2. Ativação Global no Layout (`app/layout.tsx`):
```tsx
'use client';
import { useEffect } from 'react';
import { omniSfx } from 'omni-sfx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Liga o escutador de data-sfx no DOM inteiro (incluindo componentes dinâmicos)
    omniSfx.attachToDOM({ preset: 'tech', volume: 0.8 });
  }, []);

  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
```

#### 3. Disparo Programático em Componentes:
```tsx
import { omniSfx } from 'omni-sfx';

export function CheckoutButton() {
  const handlePayment = async () => {
    try {
      await processPayment();
      omniSfx.play('success'); // Toca o acorde harmonioso de sucesso
    } catch (err) {
      omniSfx.play('error');   // Toca aviso discreto de erro
    }
  };

  return (
    <button 
      onClick={handlePayment} 
      data-sfx="click" 
      className="btn-primary"
    >
      Finalizar Pedido
    </button>
  );
}
```

---

## 📚 Bibliotecas Livres Integradas

O OmniSFX possui integração direta com os maiores acervos livres do mundo:

1. **[Openverse Audio API](https://api.openverse.org/v1/audio/):** +5M de áudios CC0/Creative Commons indexados do Freesound, Jamendo e Wikimedia Commons.
   ```javascript
   const audios = await omniSfx.searchOpenverse('whoosh', { license: 'cc0', pageSize: 3 });
   omniSfx.playUrl(audios[0].url);
   ```
2. **[Kenney Audio Assets](https://kenney.nl/assets/series:Audio):** Pacotes de som para UI, cliques e impactos 100% CC0 (Domínio Público, sem necessidade de atribuição).
3. **[Freesound API](https://freesound.org/):** Busca avançada por descritores espectrais e acústicos.

---

## 🎛️ Tabela de Sons Procedurais Embutidos (0 KB)

| Gatilho | Descrição Acústica | Quando Usar |
|---|---|---|
| `click` | Transiente rápido de alta definição (sine decay) | Botões primários, seletores, abas |
| `pop` | Ressonância elástica suave com modulação ascendente | Likes, badges, toggles de tags |
| `switch` | Flip de dois tons complementares | Switches liga/desliga, checkboxes, modo escuro |
| `hover` | Micro-tick filtrado em volume quase inaudível (`gain: 0.04`) | Hover em cards e links importantes |
| `success` | Arpeggio maior ascendente (C5-E5-G5-C6) | Checkout, conclusão de formulário, toast de sucesso |
| `error` | Glissando descendente com onda triangular/sawtooth | Validação com falha, bloqueio de rota, deleção |
| `notification` | Sino duplo de atenção suave | Chegada de nova mensagem ou alerta no topo |
| `whoosh` | Varredura de ruído branco com filtro passa-faixa | Abertura de drawer lateral, troca de tela |
