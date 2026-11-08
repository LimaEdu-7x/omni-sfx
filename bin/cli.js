#!/usr/bin/env node

/**
 * omni-sfx CLI — Universal Audio & SFX Engine for AI Agents & Web
 * @author LimaEdu-7x
 * @license MIT
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const prompts = require('prompts');

const SKILL_SOURCE = path.resolve(__dirname, '..', 'SKILL.md');

function getHomeDir() {
  return os.homedir();
}

const TARGET_OPTIONS = [
  { title: '🪐 Antigravity / Gemini CLI', value: 'antigravity', selected: true, description: '~/.gemini/config/skills/sfx/SKILL.md' },
  { title: '🟣 Claude Code', value: 'claude', description: '~/.claude/skills/sfx/SKILL.md' },
  { title: '⚡ Cursor IDE', value: 'cursor', description: '.cursor/rules/sfx.mdc' },
  { title: '🌊 Windsurf', value: 'windsurf', description: '.windsurfrules' },
  { title: '📁 Projeto Local', value: 'local', description: './SKILL.md' }
];

function printHelp() {
  console.log(`
🎧 omni-sfx — Universal Audio & SFX Engine for AI Agents & Web

Comando nos Agentes:
  /sfx                           Dispara a skill no chat com a IA (Antigravity, Claude Code, Cursor)

Uso no Terminal (CLI):
  npx omni-sfx                   Menu interativo completo (Instalação em IAs + Setup do Projeto)
  npx omni-sfx install           Menu de seleção para instalar a skill em IAs
  npx omni-sfx install <alvos>   Instalação direta (ex: npx omni-sfx install antigravity claude)
  npx omni-sfx init              Wizard de identidade sonora e integração para sites web
  npx omni-sfx print             Imprime o SKILL.md bruto no stdout
  npx omni-sfx info              Exibe informações sobre presets e acervos

Alvos de IA Suportados:
  antigravity  Instala em ~/.gemini/config/skills/sfx/SKILL.md
  claude       Instala em ~/.claude/skills/sfx/SKILL.md
  cursor       Cria .cursor/rules/sfx.mdc no projeto
  windsurf     Adiciona regra ao .windsurfrules no projeto
  local        Copia SKILL.md no diretório atual
  all          Instala em todos os ambientes suportados
`);
}

function installToTarget(target) {
  if (!fs.existsSync(SKILL_SOURCE)) {
    console.error('Erro: Arquivo SKILL.md não encontrado.');
    process.exit(1);
  }

  const skillContent = fs.readFileSync(SKILL_SOURCE, 'utf8');
  let destDir = '';
  let destFile = '';

  const normalized = target.toLowerCase();

  switch (normalized) {
    case 'antigravity':
    case 'gemini':
      destDir = path.join(getHomeDir(), '.gemini', 'config', 'skills', 'sfx');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Antigravity] Instalado em: ${destFile}`);
      break;

    case 'claude':
      destDir = path.join(getHomeDir(), '.claude', 'skills', 'sfx');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Claude Code] Instalado em: ${destFile}`);
      break;

    case 'cursor':
      destDir = path.join(process.cwd(), '.cursor', 'rules');
      destFile = path.join(destDir, 'sfx.mdc');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Cursor IDE] Criado em: ${destFile}`);
      break;

    case 'windsurf':
      destFile = path.join(process.cwd(), '.windsurfrules');
      fs.appendFileSync(destFile, `\n\n# omni-sfx Skill (/sfx)\n${skillContent}`, 'utf8');
      console.log(`  ✓ [Windsurf] Adicionado a: ${destFile}`);
      break;

    case 'local':
    case '.':
      destDir = process.cwd();
      destFile = path.join(destDir, 'SKILL.md');
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Local] Arquivo salvo em: ${destFile}`);
      break;

    default:
      console.warn(`  ⚠ Alvo desconhecido ignorado: ${target}`);
  }
}

async function runSoundWizard() {
  console.log(`
\x1b[36m╔══════════════════════════════════════════════════════════════════╗
║               🎨 WIZARD DE CONTEXTO SONORO & SITE               ║
╚══════════════════════════════════════════════════════════════════╝\x1b[0m
`);

  const questions = [
    {
      type: 'select',
      name: 'stack',
      message: '1. Qual a stack / framework do seu projeto web?',
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
      message: '2. Qual paleta sonora melhor combina com seu produto?',
      choices: [
        { title: '⚡ Tech / Minimalist SaaS (Cliques limpos, feedback sutil, estilo Linear/Vercel)', value: 'tech' },
        { title: '🤖 Cyberpunk / Sci-Fi (Bips digitais, sintetizadores futuristas)', value: 'cyberpunk' },
        { title: '🕹️ Retro 8-Bit / Arcade (Chiptune, nostalgia de consoles)', value: 'retro' },
        { title: '🌿 Orgânico / Zen (Toques de madeira, gotas d\'água, sinos relaxantes)', value: 'organic' },
        { title: '🎈 Playful / Game (Pops elásticos, moedas, fanfarras animadas)', value: 'playful' },
        { title: '🎬 Cinematográfico / Epic (Whooshes graves, impactos profundos e risers)', value: 'cinematic' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'audioEngine',
      message: '3. Como você prefere renderizar os efeitos sonoros?',
      choices: [
        { title: 'Síntese Procedural Web Audio API (0 KB de download, zero latência, 100% código)', value: 'procedural' },
        { title: 'Híbrido (Síntese local para UI + Openverse/Kenney para efeitos orgânicos)', value: 'hybrid' },
        { title: 'Apenas Áudios Reais (Arquivos MP3/WAV de acervos livres)', value: 'assets' }
      ],
      initial: 0
    },
    {
      type: 'text',
      name: 'customVibe',
      message: '4. [PERGUNTA PERSONALIZADA] Descreva a vibe, referências ou contexto do seu projeto:\n   (Ex: "Cliques de alumínio estilo teclado mecânico", "Stripe checkout haptic", "Lo-fi relaxante para foco")',
      initial: 'Cliques táteis sutis e feedback acústico moderno'
    }
  ];

  const response = await prompts(questions, {
    onCancel: () => {
      console.log('\x1b[33mConfiguração sonoro cancelada.\x1b[0m');
      return;
    }
  });

  if (!response.stack) return;

  const configContent = {
    version: '1.0.0',
    stack: response.stack,
    preset: response.preset,
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
    console.log(`\x1b[33m▶ Via CDN em 1 Linha (Cole no <head> ou antes do </body>):\x1b[0m
\`\`\`html
<script src="https://unpkg.com/omni-sfx" data-auto-init data-preset="${response.preset}"></script>

<!-- Adicione atributos data-sfx aos seus elementos HTML existentes: -->
<button data-sfx="click">Salvar</button>
<button data-sfx="pop">Curtir</button>
<a href="#" data-sfx-hover="hover">Menu Link</a>
\`\`\`
`);
  } else if (response.stack === 'react') {
    console.log(`\x1b[33m▶ No seu layout (Next.js / React):\x1b[0m
\`\`\`tsx
import { useEffect } from 'react';
import { omniSfx } from 'omni-sfx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    omniSfx.attachToDOM({ preset: '${response.preset}', volume: 0.8 });
  }, []);

  return <div>{children}</div>;
}
\`\`\`
`);
  } else {
    console.log(`\x1b[33m▶ Universal JavaScript:\x1b[0m
\`\`\`javascript
import { omniSfx } from 'omni-sfx';

omniSfx.attachToDOM({ preset: '${response.preset}' });
omniSfx.play('click');
\`\`\`
`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] ? args[0].toLowerCase() : 'all';

  if (command === 'info' || command === 'help' || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  if (command === 'print') {
    if (fs.existsSync(SKILL_SOURCE)) {
      process.stdout.write(fs.readFileSync(SKILL_SOURCE, 'utf8'));
    } else {
      console.error('Erro: SKILL.md não encontrado.');
    }
    return;
  }

  if (command === 'init' || command === 'wizard') {
    await runSoundWizard();
    return;
  }

  console.log(`
\x1b[36m╔══════════════════════════════════════════════════════════════════╗
║                    🎧 OMNI-SFX INSTALLER                         ║
║     Universal Audio & SFX Engine for AI Agents and the Web       ║
╚══════════════════════════════════════════════════════════════════╝\x1b[0m
`);

  let targets = [];

  if (command === 'install') {
    const rawTargets = args.slice(1);
    if (rawTargets.length > 0) {
      targets = rawTargets.flatMap(t => t.toLowerCase() === 'all' ? TARGET_OPTIONS.map(o => o.value) : t.split(/[\s,]+/));
    }
  } else if (TARGET_OPTIONS.some(o => o.value === command)) {
    targets = [command];
  }

  if (targets.length === 0) {
    const response = await prompts(
      {
        type: 'multiselect',
        name: 'selected',
        message: 'Em quais IAs você deseja instalar a Skill omni-sfx?',
        choices: TARGET_OPTIONS,
        hint: '- [Espaço] para marcar/desmarcar. [Enter] para confirmar',
        instructions: false
      },
      {
        onCancel: () => {
          console.log('\nInstalação cancelada pelo usuário.');
          process.exit(0);
        }
      }
    );

    targets = response.selected || [];
    if (targets.length === 0) {
      console.log('Nenhuma IA selecionada. Usando Antigravity como padrão.');
      targets = ['antigravity'];
    }
  }

  console.log(`\nInstalando omni-sfx em [${targets.join(', ')}]...`);
  for (const target of targets) {
    installToTarget(target);
  }
  console.log(`\n🎉 Skill omni-sfx configurada com sucesso para seus agentes!\n`);

  // Pergunta se deseja rodar também o wizard de contexto sonoro do site
  const askWizard = await prompts({
    type: 'confirm',
    name: 'runWizard',
    message: 'Deseja configurar o perfil sonoro e a integração de um site agora?',
    initial: true
  });

  if (askWizard.runWizard) {
    await runSoundWizard();
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
