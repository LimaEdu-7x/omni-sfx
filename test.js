const omniSfx = require('./index.js');
const assert = require('assert');

console.log('--- Testando omni-sfx ---');

// 1. Verifica existência da instância
assert.ok(omniSfx, 'A instância do omniSfx deve existir');

// 2. Verifica presets disponíveis
const presets = Object.keys(omniSfx.presets);
console.log('Presets disponíveis:', presets);
assert.deepStrictEqual(presets, ['tech', 'cyberpunk', 'retro', 'organic', 'playful', 'cinematic']);

// 3. Testa setPreset
assert.strictEqual(omniSfx.setPreset('cyberpunk'), true);
assert.strictEqual(omniSfx.currentPreset, 'cyberpunk');
assert.strictEqual(omniSfx.setPreset('invalid_preset'), false);
assert.strictEqual(omniSfx.currentPreset, 'cyberpunk');

// 4. Testa setVolume e mute
omniSfx.setVolume(0.5);
assert.strictEqual(omniSfx.masterVolume, 0.5);

assert.strictEqual(omniSfx.isMuted, false);
omniSfx.toggleMute();
assert.strictEqual(omniSfx.isMuted, true);
omniSfx.toggleMute();
assert.strictEqual(omniSfx.isMuted, false);

// 5. Testa API methods
assert.strictEqual(typeof omniSfx.play, 'function');
assert.strictEqual(typeof omniSfx.searchOpenverse, 'function');
assert.strictEqual(typeof omniSfx.attachToDOM, 'function');
assert.strictEqual(typeof omniSfx.playUrl, 'function');

console.log('✔ Todos os testes de unidade passaram com sucesso!');
