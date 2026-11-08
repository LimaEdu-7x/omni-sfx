# 🎧 omni-sfx

> **Universal Audio & SFX Engine for the Web & AI Agents.**  
> Procedural zero-latency UI sound synthesis (0 KB external downloads), Openverse/Kenney/Freesound open audio integration, frame-accurate motion design sync, and automated DOM binding.

[![npm version](https://img.shields.io/npm/v/omni-sfx.svg?style=flat-square&color=0070f3)](https://www.npmjs.com/package/omni-sfx)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg?style=flat-square)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?style=flat-square)](#)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-100%25_Native-orange.svg?style=flat-square)](#)

---

## ⚡ Por que omni-sfx?

A maioria dos sites modernos sofre de **vazio acústico**. Adicionar som costuma significar baixar arquivos `.mp3` pesados, sofrer com latência perceptível no clique e lidar com políticas restritivas de autoplay dos navegadores.

**`omni-sfx` resolve isso:**
- 🚀 **Zero Latência (<2ms):** Síntese procedural direta no navegador via Web Audio API. O som toca no exato momento do clique, sem download de arquivos.
- 📦 **0 KB de Assets de Rede:** Frequências, osciladores e envelopes matemáticos embutidos para cliques, pops, toggles e chimes.
- 🪄 **Integração em 1 Linha:** Ativação automática no DOM inteiro via atributos HTML simples (`data-sfx="click"`).
- 🌐 **Banco Aberto (+5M de Áudios):** Conexão nativa com a API do Openverse, Kenney e Freesound para buscar e tocar efeitos sonoros e músicas livres (CC0).
- 🤖 **Agent-First:** Skill oficial pronta para Claude Code, Cursor, Antigravity e Windsurf.

---

## 🚀 Instalação Rápida

### Via Gerenciador de Pacotes (NPM / PNPM / Yarn)
```bash
npm install omni-sfx
```

### Via CDN (Vanilla HTML / Webflow / WordPress)
```html
<script src="https://unpkg.com/omni-sfx" data-auto-init data-preset="tech"></script>
```

---

## 🪄 Como Integrar a um Site Existente

### Opção 1: Ativação Automática via HTML (Sem escrever JavaScript)

Basta adicionar atributos `data-sfx` aos botões, links ou inputs do seu HTML existente:

```html
<!-- Disparo no Clique -->
<button data-sfx="click">Salvar</button>
<button data-sfx="pop">Curtir ❤️</button>
<button data-sfx="success">Comprar Agora</button>

<!-- Disparo no Hover -->
<a href="/dashboard" data-sfx-hover="hover">Entrar no App</a>

<!-- Disparo no Foco / Switch -->
<input type="checkbox" data-sfx-focus="switch">
```

---

### Opção 2: React & Next.js (App Router ou Pages)

#### 1. Ativação Global no Layout (`app/layout.tsx`):
```tsx
'use client';
import { useEffect } from 'react';
import { omniSfx } from 'omni-sfx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Liga o escutador em todo o DOM (inclui elementos dinâmicos)
    omniSfx.attachToDOM({ preset: 'tech', volume: 0.8 });
  }, []);

  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

#### 2. Disparo Programático em Componentes:
```tsx
import { omniSfx } from 'omni-sfx';

export function CheckoutButton() {
  const handlePayment = async () => {
    try {
      await processPayment();
      omniSfx.play('success'); // Toca o arpeggio harmônico de sucesso
    } catch (err) {
      omniSfx.play('error');   // Toca aviso discreto de erro
    }
  };

  return (
    <button onClick={handlePayment} data-sfx="click">
      Finalizar Compra
    </button>
  );
}
```

---

### Opção 3: JavaScript Vanilla Puro

```javascript
import { omniSfx } from 'omni-sfx';

// Inicializa a escuta global:
omniSfx.attachToDOM({ preset: 'tech' });

// Ou dispare manualmente onde quiser:
document.querySelector('#my-button').addEventListener('click', () => {
  omniSfx.play('pop');
});
```

---

## 🎨 Paletas Sonoras Predefinidas (Presets)

Você pode alternar entre paletas de som completas a qualquer momento com `omniSfx.setPreset('cyberpunk')`:

| Preset | Identidade Sonora | Ideal Para |
|---|---|---|
| `tech` *(Padrão)* | Micro-cliques táteis limpos, feedback sutil e alta definição | SaaS, Dashboards, Fintechs, estilo Linear/Vercel |
| `cyberpunk` | Bips digitais cortantes, sintetizadores futuristas e frequências altas | Interfaces Sci-Fi, Dark Mode, Web3, IA |
| `retro` | Ondas quadradas chiptune e nostalgia de arcade 8-bit | Jogos retrô, portfólios lúdicos, apps criativos |
| `organic` | Toques amadeirados, gotas d'água suaves e sinos relaxantes | Apps de meditação, saúde, bem-estar, natureza |
| `playful` | Pops elásticos estilo bolha, moedas e fanfarras alegres | E-commerces jovens, educação infantil, gamificação |
| `cinematic` | Whooshes graves, transições profundas e impactos com sub-grave | Lançamentos de produtos, trailers, motion graphics |

---

## 🎛️ Efeitos Sonoros Disponíveis

| Som | Descrição Acústica |
|---|---|
| `click` | Transiente rápido de alta precisão (sine decay tátil) |
| `pop` | Ressonância elástica suave com modulação ascendente |
| `switch` | Flip de dois tons complementares |
| `hover` | Micro-tick filtrado em volume quase inaudível (`gain: 0.04`) |
| `success` | Arpeggio maior ascendente (C5-E5-G5-C6) |
| `error` | Glissando descendente de alerta |
| `notification` | Sino duplo de atenção suave |
| `whoosh` | Varredura com filtro passa-faixa procedural |

---

## 🌐 Integração com Bibliotecas Abertas (+5M de Sons)

O `omni-sfx` também permite buscar e reproduzir áudios reais de acervos públicos livres como o **Openverse**:

```javascript
import { omniSfx } from 'omni-sfx';

// Busca áudios CC0 diretamente na API do Openverse:
const results = await omniSfx.searchOpenverse('whoosh', { license: 'cc0', pageSize: 3 });

if (results.length > 0) {
  // Reproduz o áudio com cache automático na memória
  omniSfx.playUrl(results[0].url);
}
```

---

## 🧙‍♂️ CLI Interativo: Setup Wizard

Quer descobrir qual paleta e configuração sonoras combinam com seu produto? Execute no terminal:

```bash
npx omni-sfx
```

O assistente guiará você por:
1. **Stack do Projeto** (React, Vanilla, Vue, Vite, Astro, etc.)
2. **Paleta Sonora** (Tech, Cyberpunk, Retro, Orgânico, Playful, Cinematográfico)
3. **Intensidade de Cobertura** (Essencial, Interativo Completo ou Imersivo)
4. **Engine de Áudio** (Procedural Web Audio 0KB vs Híbrido com Openverse)
5. **[Pergunta Personalizada]** Breve acústico detalhado da sua marca ou projeto.

Ao final, o CLI gera o arquivo `omni-sfx.config.json` e os snippets prontos para copiar e colar!

---

## 📦 Como Publicar no NPM (Passo a Passo)

Caso você queira publicar este pacote no registro oficial do NPM com a sua conta:

### 1. Criar ou Acessar sua Conta NPM
Se ainda não tem login no terminal:
```bash
npm login
```
*(Digite seu usuário, senha, e-mail e código 2FA se solicitado).*

### 2. Verificar o Usuário Logado
```bash
npm whoami
```

### 3. Publicar o Pacote
No diretório do projeto (`omni-sfx`):
```bash
npm publish --access public
```

Pronto! Seu pacote estará imediatamente disponível globalmente em:  
`https://www.npmjs.com/package/omni-sfx` e via CDN em `https://unpkg.com/omni-sfx`.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.

Feito com ⚡ por **[LimaEdu-7x](https://github.com/LimaEdu-7x)**.
