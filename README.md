# OmniSFX 🎧⚡

> **Universal Audio & SFX Engine for AI Coding Agents, Modern Web & Motion Design.**  
> 🇧🇷 **Projeto Brasileiro Open-Source** desenvolvido para ecossistemas de agentes de IA (Antigravity, Claude Code, Cursor, Windsurf) e desenvolvimento web contemporâneo.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Origin: Brazil](https://img.shields.io/badge/Made%20in-Brazil%20%F0%9F%87%A7%F0%9F%87%B7-green.svg)](#-projeto-brasileiro-open-source)
[![Skill: Antigravity](https://img.shields.io/badge/Skill-Antigravity-orange.svg)](#antigravity--gemini-cli)
[![Compatible: Claude Code](https://img.shields.io/badge/Compatible-Claude%20Code-purple.svg)](#claude-code)
[![Compatible: Cursor](https://img.shields.io/badge/Compatible-Cursor%20%2F%20Windsurf-teal.svg)](#cursor-ide)
[![NPM Version](https://img.shields.io/badge/NPM-v1.0.0-red.svg)](https://www.npmjs.com/package/omni-sfx)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](#)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-100%25_Native-orange.svg)](#)

Transforme interfaces comuns em experiências táteis e dinâmicas com feedback sonoro instantâneo (**0 KB de download via Web Audio API procedural**), sincronize áudios no frame exato para Motion Design e busque em mais de **5 milhões de efeitos sonoros livres (CC0)** do Openverse, Kenney e Freesound com um único comando.

---

## 🇧🇷 Projeto Brasileiro Open-Source

O **OmniSFX** nasceu no Brasil para eliminar o "vazio acústico" das aplicações modernas e das animações geradas por IA (Remotion, Claude Code, Antigravity), onde os gráficos são impressionantes mas o som é ausente ou artificial.

Criado e mantido por [LimaEdu-7x](https://github.com/LimaEdu-7x), o projeto prioriza:
- **Zero Latência (<2ms) & 0 KB de Rede:** Efeitos gerados matematicamente em tempo real via síntese procedural no navegador (Web Audio API).
- **Democratização & Áudio Livre:** Conexão nativa e gratuita com acervos públicos (Openverse, Kenney Audio, Freesound) sob licenças CC0 e Domínio Público.
- **Ativação em 1 Linha:** Sem configurações complexas — adicione atributos `data-sfx="click"` no HTML existente e o site ganha vida.
- **Multi-AI Agent Native:** Instalador interativo para injetar a Skill automaticamente no Antigravity, Claude Code, Cursor e Windsurf.

---

## 🎯 O que é o OmniSFX?

A maioria dos desenvolvedores e agentes de IA ignora o áudio por conta de três grandes dores:
1. **O Vazio Acústico:** Interfaces parecem estáticas e frias sem micro-feedback tátil.
2. **A Latência dos Arquivos:** Fazer requisições de `.mp3` para um simples clique de botão gera um atraso perceptível de centenas de milissegundos.
3. **Bloqueios de Autoplay:** Navegadores bloqueiam áudio automático caso não haja interação prévia do usuário.

O **OmniSFX** resolve tudo de ponta a ponta:
- 🚀 **Síntese Procedural Embutida:** Frequências, osciladores e envelopes matemáticos afinados para cliques de alta precisão, pops de bolha, toggles e chimes de checkout.
- 🪄 **Event Delegation Global:** Gerencia o desbloqueio do `AudioContext` na primeira interação do usuário de forma transparente e compatível com todas as políticas de navegadores.
- 🎨 **Paletas Sonoras Afuniladas:** Presets acústicos prontos (Tech/SaaS estilo Linear/Vercel, Cyberpunk, Retro 8-bit, Orgânico, Gamer e Cinematográfico).
- 🤖 **Wizard Interativo com Pergunta Personalizada:** Mapeia a identidade acústica e gera a configuração exata para qualquer framework.

---

## 🎛️ Paletas Sonoras & Presets Embutidos

Alterne instantaneamente a vibe acústica do seu projeto com `omniSfx.setPreset('cyberpunk')`:

| Preset | Identidade Sonora | Frequências & Ondas | Ideal Para |
|---|---|---|---|
| `tech` *(Padrão)* | Micro-cliques táteis limpos, feedback sutil e alta definição | Sine decay (1.2kHz → 400Hz) | SaaS, Dashboards, Fintechs, estilo Linear/Vercel |
| `cyberpunk` | Bips digitais cortantes, sintetizadores futuristas e scanners | Square & Sawtooth harmônicas | Interfaces Sci-Fi, Dark Mode, Web3, IA |
| `retro` | Ondas quadradas chiptune e nostalgia pura de arcade | 8-Bit Square Wave | Jogos retrô, portfólios lúdicos, apps criativos |
| `organic` | Toques amadeirados, gotas d'água suaves e sinos relaxantes | Sine suave & Triad Pentatônica | Apps de meditação, saúde, bem-estar, natureza |
| `playful` | Pops elásticos estilo bolha, moedas e fanfarras alegres | Modulação de Pitch dinâmica | E-commerces jovens, educação infantil, gamificação |
| `cinematic` | Whooshes graves, transições profundas e impactos sub-graves | Sub-bass & Bandpass Noise | Lançamentos de produtos, trailers, motion graphics |

---

## 🔊 Tabela de Efeitos Sonoros Disponíveis

| Efeito | Descrição Acústica | Gatilho Recomendado |
|---|---|---|
| `click` | Transiente rápido de alta precisão (sine decay tátil) | Botões primários, seletores, abas |
| `pop` | Ressonância elástica suave com modulação ascendente | Likes, reações, toggles de tags |
| `switch` | Flip de dois tons complementares | Switches liga/desliga, checkboxes, modo escuro |
| `hover` | Micro-tick filtrado em volume quase inaudível (`gain: 0.04`) | Hover em cards e links importantes |
| `success` | Arpeggio harmônico maior ascendente (C5-E5-G5-C6) | Checkout concluído, formulário salvo, toast positivo |
| `error` | Glissando descendente com onda triangular/sawtooth | Validação com falha, bloqueio de rota, exclusão |
| `notification` | Sino duplo de atenção suave | Chegada de nova mensagem ou push notification |
| `whoosh` | Varredura de ruído branco com filtro passa-faixa procedural | Abertura de drawer lateral, troca de aba/página |

---

## 🚀 Como Integrar a um Site Já Existente

### Opção 1: HTML Vanilla / Sites Estáticos / Webflow / WordPress (1 Linha)

Cole uma única tag `<script>` no final do `<body>` ou dentro do `<head>`:

```html
<!-- Importação via CDN com Inicialização Automática -->
<script src="https://unpkg.com/omni-sfx" data-auto-init data-preset="tech"></script>

<!-- Adicione atributos data-sfx aos seus elementos HTML existentes: -->
<button data-sfx="click">Salvar Alterações</button>
<button data-sfx="pop">Favoritar ❤️</button>
<button data-sfx="success">Comprar Agora</button>

<!-- Micro-feedback no Hover -->
<a href="/dashboard" data-sfx-hover="hover">Acessar Painel</a>

<!-- Switches e Checkboxes -->
<input type="checkbox" data-sfx="switch">
```

---

### Opção 2: React & Next.js (App Router ou Pages)

#### 1. Instalação do Pacote:
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
    // Liga o escutador em todo o DOM (inclui elementos renderizados dinamicamente)
    omniSfx.attachToDOM({ preset: 'tech', volume: 0.8 });
  }, []);

  return (
    <html lang="pt-BR">
      <body>{children}</body>
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
      omniSfx.play('success'); // Toca o arpeggio de sucesso
    } catch (err) {
      omniSfx.play('error');   // Toca aviso discreto de erro
    }
  };

  return (
    <button onClick={handlePayment} data-sfx="click" className="btn-primary">
      Finalizar Pedido
    </button>
  );
}
```

---

### Opção 3: JavaScript Universal (Vue, Vite, Svelte, Astro)

```javascript
import { omniSfx } from 'omni-sfx';

// Ativa em todo o DOM:
omniSfx.attachToDOM({ preset: 'cyberpunk' });

// Ou dispare manualmente onde desejar:
omniSfx.play('click');
omniSfx.play('whoosh');
```

---

## 📦 Como Instalar nas Suas IAs (Agent Skill)

O `omni-sfx` inclui instalador interativo idêntico ao ecossistema `omni-rsm`.

### 1. Instalador Interativo via Terminal (Recomendado)
Execute `npx omni-sfx install` para abrir o menu com caixas de seleção. Use as **Setas** para mover, **Espaço** para marcar/desmarcar e **Enter** para confirmar:

```bash
npx omni-sfx install
```

```text
🎧 omni-sfx Installer
? Em quais IAs você deseja instalar a Skill omni-sfx? (Setas: mover | Espaço: marcar | Enter: confirmar)
 ❯ [✓] 🪐 Antigravity / Gemini CLI (~/.gemini/config/skills/omni-sfx/SKILL.md)
   [✓] 🟣 Claude Code (~/.claude/skills/omni-sfx/SKILL.md)
   [✓] ⚡ Cursor IDE (.cursor/rules/omni-sfx.mdc)
   [ ] 🌊 Windsurf (.windsurfrules)
   [ ] 📁 Projeto Local (./SKILL.md)
```

#### Instalação Direta sem Menu (Headless):
```bash
# Instalar em todas as IAs suportadas de uma vez:
npx omni-sfx install all

# Instalar em IAs específicas:
npx omni-sfx install antigravity claude cursor

# Ou diretamente do GitHub:
npx github:LimaEdu-7x/omni-sfx install
```

---

### 2. Instalação Manual nas IAs

#### 🪐 Antigravity & Gemini CLI (AGY)
```bash
# Windows (PowerShell)
mkdir -p "$HOME\.gemini\config\skills\omni-sfx"
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-sfx/main/SKILL.md -o "$HOME\.gemini\config\skills\omni-sfx\SKILL.md"

# Linux / macOS
mkdir -p ~/.gemini/config/skills/omni-sfx
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-sfx/main/SKILL.md -o ~/.gemini/config/skills/omni-sfx/SKILL.md
```

#### 🟣 Claude Code
```bash
mkdir -p ~/.claude/skills/omni-sfx
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-sfx/main/SKILL.md -o ~/.claude/skills/omni-sfx/SKILL.md
```

#### ⚡ Cursor IDE
```bash
mkdir -p .cursor/rules
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-sfx/main/SKILL.md -o .cursor/rules/omni-sfx.mdc
```

#### 🌊 Windsurf
```bash
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-sfx/main/SKILL.md >> .windsurfrules
```

---

## 🧙‍♂️ Wizard de Identidade Sonora & Setup do Projeto

Para configurar a paleta sonora ideal e obter o snippet de código do seu framework, execute:

```bash
npx omni-sfx init
```

O assistente guiará você por:
1. **Stack do Projeto** (React/Next.js, HTML Vanilla, Vue, Vite, Astro)
2. **Paleta Sonora** (Tech, Cyberpunk, Retro, Orgânico, Playful, Cinematográfico)
3. **Engine de Áudio** (Síntese Procedural 0KB vs Híbrido com Openverse)
4. **[Pergunta Personalizada Aberta]** Descreva a vibe, referências acústicas ou detalhes específicos do seu produto:
   > *"Cliques de alumínio estilo teclado mecânico, Stripe checkout chimes e feedback sutil para app financeiro"*

Ao final, é gerado o arquivo `omni-sfx.config.json` e os exemplos exatos de código para colar no seu projeto!

---

## 🌐 Integração com Bibliotecas Abertas (+5M de Áudios)

Além da síntese matemática local, o `omni-sfx` se conecta a grandes bibliotecas abertas:

```javascript
import { omniSfx } from 'omni-sfx';

// Busca áudios abertos sob licença CC0 na API do Openverse:
const results = await omniSfx.searchOpenverse('whoosh', { license: 'cc0', pageSize: 3 });

if (results.length > 0) {
  // Reproduz o áudio com cache inteligente em memória
  omniSfx.playUrl(results[0].url);
}
```

- **[Openverse Audio API](https://api.openverse.org/v1/audio/):** +5 milhões de faixas e efeitos indexados (Freesound, Jamendo, Wikimedia).
- **[Kenney Audio Assets](https://kenney.nl/assets/series:Audio):** Padrão mundial de pacotes sonoros 100% Domínio Público (CC0, sem necessidade de créditos).
- **[Freesound API](https://freesound.org/):** Catálogo aberto com filtros de parâmetros espectrais e acústicos.

---

## 📦 Como Publicar no NPM (Passo a Passo)

```bash
cd omni-sfx

# 1. Login na sua conta NPM
npm login

# 2. Confirme o usuário
npm whoami

# 3. Publique o pacote publicamente
npm publish --access public
```

---

## 🏆 Créditos & Referências

O **OmniSFX** homenageia e referencia ferramentas, projetos e mentes brilhantes que inspiraram esta arquitetura:

- **[Web Audio API (W3C)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** — A especificação que tornou o processamento de áudio em tempo real viável no navegador.
- **[Openverse / WordPress Foundation](https://openverse.org/)** — A biblioteca universal aberta de arquivos de áudio e mídia sob Creative Commons.
- **[Kenney.nl](https://kenney.nl/)** — A referência definitiva em assets CC0 limpos para jogos e interfaces.
- **[Earshot (`leonxlnx/earshot`)](https://github.com/Leonxlnx/earshot)** — O pioneiro em dar "ouvidos" e síntese de áudio para coding agents.
- **[Remotion](https://www.remotion.dev/)** — O ecossistema de referência máxima para vídeo e áudio programável em código.
- **[Gustavo / @gustagoat.ai](https://www.instagram.com/gustagoat.ai/)** — O insight provocador que disparou a criação desta stack unificada.
- **[OmniRSM (`LimaEdu-7x/omni-rsm`)](https://github.com/LimaEdu-7x/omni-rsm)** — A arquitetura de inteligência, CLI e ecossistema de skills brasileiro.
- **[Maestri](https://maestri.app)** — A plataforma visual em canvas para orquestração de múltiplos agentes de IA.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.  
Feito com 💚 e 💛 no Brasil por [LimaEdu-7x](https://github.com/LimaEdu-7x).
