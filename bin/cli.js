#!/usr/bin/env node

/**
 * omni-sfx CLI - Interactive Sound Profile Wizard
 * @author LimaEdu-7x
 * @license MIT
 */

const fs = require('fs');
const path = require('path');

async function runWizard() {
  console.log(`
\x1b[36m╔══════════════════════════════════════════════════════════════════╗
║                    🎧 OMNI-SFX SETUP WIZARD                      ║
║     Universal Audio & SFX Engine for the Web & AI Agents         ║
╚══════════════════════════════════════════════════════════════════╝\x1b[0m
`);

  let prompts;
  try {
    prompts = require('prompts');
  } catch (e) {
    console.log('Instalando dependência necessária (prompts)...');
    require('child_process').execSync('npm install prompts', { stdio: 'inherit' });
    prompts = require('prompts');
  }

  const questions = [
    {
      type: 'select',
      name: 'stack',
      message: '1. Qual é a tecnologia / stack do seu projeto?',
      choices: [
        { title: 'React / Next.js (App Router / Pages)', value: 'react' },
        { title: 'HTML5 Vanilla / Multi-page (sem bundler)', value: 'vanilla' },
        { title: 'Vue.js / Nuxt', value: 'vue' },
        { title: 'Vite / Single Page App (SPA)', value: 'vite' },
        { title: 'Astro / Svelte / Remix', value: 'astro' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'preset',
      message: '2. Qual paleta sonora representa a identidade do seu produto?',
      choices: [
        { title: '⚡ Tech / Minimalist SaaS (Cliques limpos, feedback sutil, estilo Linear/Vercel)', value: 'tech' },
        { title: '🤖 Cyberpunk / Sci-Fi (Bips digitais, scanners futuristas, sintetizadores)', value: 'cyberpunk' },
        { title: '🕹️ Retro 8-Bit / Arcade (Chiptune, ondas quadradas, nostalgia arcade)', value: 'retro' },
        { title: '🌿 Orgânico / Zen (Toques de madeira, gotas d\'água, sinos suaves)', value: 'organic' },
        { title: '🎈 Playful / Game (Pops elásticos, moedas, fanfarras animadas)', value: 'playful' },
        { title: '🎬 Cinematográfico / Epic (Whooshes graves, impactos profundos e risers)', value: 'cinematic' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'coverage',
      message: '3. Qual a intensidade de cobertura dos efeitos sonoros?',
      choices: [
        { title: 'Micro-feedback Essencial (Apenas botões de ação primária, switch e sucesso/erro)', value: 'essential' },
        { title: 'Interativo Completo (Hover sutil, cliques em tabs/links, modais e notificações)', value: 'full' },
        { title: 'Imersivo / Gamificado (Todos os gatilhos + transições de página e sons de fundo)', value: 'immersive' }
      ],
      initial: 1
    },
    {
      type: 'select',
      name: 'audioEngine',
      message: '4. Como você prefere renderizar os efeitos sonoros?',
      choices: [
        { title: 'Síntese Procedural Web Audio API (0 KB de download, zero latência, 100% código)', value: 'procedural' },
        { title: 'Híbrido (Síntese local para UI rápida + Openverse/Kenney para efeitos orgânicos)', value: 'hybrid' },
        { title: 'Apenas Áudios Reais (Arquivos MP3/WAV baixados de bibliotecas abertas)', value: 'assets' }
      ],
      initial: 0
    },
    {
      type: 'text',
      name: 'customVibe',
      message: '5. [PERGUNTA PERSONALIZADA] Descreva a vibe, referências sonoras ou detalhes específicos do seu projeto:\n   (Ex: "Cliques de alumínio estilo teclado mecânico", "Stripe checkout chimes", "Lo-fi relaxante para app de foco")',
      initial: 'Cliques táteis sutis e feedback acústico moderno'
    }
  ];

  const response = await prompts(questions, {
    onCancel: () => {
      console.log('\x1b[33mConfiguração cancelada pelo usuário.\x1b[0m');
      process.exit(0);
    }
  });

  const configContent = {
    version: '1.0.0',
    stack: response.stack,
    preset: response.preset,
    coverage: response.coverage,
    audioEngine: response.audioEngine,
    customVibe: response.customVibe,
    generatedAt: new Date().toISOString()
  };

  const configPath = path.join(process.cwd(), 'omni-sfx.config.json');
  fs.writeFileSync(configPath, JSON.stringify(configContent, null, 2), 'utf-8');

  console.log(`
\x1b[32m✔ Arquivo gerado com sucesso: omni-sfx.config.json\x1b[0m

\x1b[35m══════════════════════════════════════════════════════════════════
               📋 COMO INTEGRAR AO SEU PROJETO
══════════════════════════════════════════════════════════════════\x1b[0m
`);

  if (response.stack === 'vanilla') {
    console.log(`\x1b[33m▶ Opção 1: Via CDN em 1 Linha (Cole no <head> ou antes do </body>):\x1b[0m
\`\`\`html
<script src="https://unpkg.com/omni-sfx" data-auto-init data-preset="${response.preset}"></script>

<!-- Adicione atributos data-sfx aos seus elementos HTML existentes: -->
<button data-sfx="click">Salvar</button>
<button data-sfx="pop">Curtir</button>
<a href="#" data-sfx-hover="hover">Menu Link</a>
\`\`\`
`);
  } else if (response.stack === 'react') {
    console.log(`\x1b[33m▶ Opção 1: No seu layout (Next.js / React):\x1b[0m
\`\`\`tsx
// app/layout.tsx ou src/App.tsx
import { useEffect } from 'react';
import { omniSfx } from 'omni-sfx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa a escuta automática de atributos data-sfx no DOM
    omniSfx.attachToDOM({ preset: '${response.preset}', volume: 0.8 });
  }, []);

  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
\`\`\`

\x1b[33m▶ Opção 2: Disparo Programático em Componentes:\x1b[0m
\`\`\`tsx
import { omniSfx } from 'omni-sfx';

export function CheckoutButton() {
  const handleClick = () => {
    omniSfx.play('success'); // Toca o acorde de sucesso
    // ou omniSfx.play('click')
  };

  return <button onClick={handleClick}>Finalizar Compra</button>;
}
\`\`\`
`);
  } else {
    console.log(`\x1b[33m▶ Integração Universal JavaScript:\x1b[0m
\`\`\`javascript
import { omniSfx } from 'omni-sfx';

// Ativa em todo o DOM:
omniSfx.attachToDOM({ preset: '${response.preset}' });

// Ou dispare manualmente onde quiser:
omniSfx.play('click');
omniSfx.play('success');
omniSfx.play('whoosh');
\`\`\`
`);
  }

  console.log(`\x1b[36m🎯 Perfil Acústico Customizado Registrado:\x1b[0m
  • Paleta: \x1b[32m${response.preset}\x1b[0m
  • Vibe: \x1b[33m"${response.customVibe}"\x1b[0m
  • Engine: \x1b[34m${response.audioEngine}\x1b[0m

Pronto para rodar! Para testar em desenvolvimento, importe o omni-sfx no seu app.
`);
}

runWizard();
