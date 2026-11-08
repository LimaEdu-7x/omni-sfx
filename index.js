/**
 * omni-sfx - Universal Audio & SFX Engine for the Web & AI Agents
 * @author LimaEdu-7x
 * @license MIT
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.omniSfx = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // Preset tuning parameters (frequencies, envelopes, oscillators)
  var PRESETS = {
    tech: {
      name: 'Tech / Minimalist SaaS',
      click: { freq: 1200, endFreq: 400, type: 'sine', duration: 0.035, gain: 0.18 },
      pop: { freq: 450, endFreq: 850, type: 'sine', duration: 0.06, gain: 0.22 },
      switch: { freq: 600, endFreq: 900, type: 'triangle', duration: 0.045, gain: 0.15 },
      hover: { freq: 800, endFreq: 1100, type: 'sine', duration: 0.015, gain: 0.04 },
      success: { notes: [523.25, 659.25, 783.99, 1046.50], type: 'sine', step: 0.06, gain: 0.16 }, // C5, E5, G5, C6
      error: { notes: [440, 370, 311], type: 'sawtooth', step: 0.08, gain: 0.12 },
      notification: { notes: [880, 1174.66], type: 'sine', step: 0.08, gain: 0.2 },
      whoosh: { duration: 0.18, freq: 1200, gain: 0.12 }
    },
    cyberpunk: {
      name: 'Cyberpunk / Sci-Fi',
      click: { freq: 2400, endFreq: 800, type: 'square', duration: 0.04, gain: 0.12 },
      pop: { freq: 800, endFreq: 1800, type: 'sawtooth', duration: 0.07, gain: 0.15 },
      switch: { freq: 1100, endFreq: 2200, type: 'square', duration: 0.05, gain: 0.1 },
      hover: { freq: 1600, endFreq: 2000, type: 'sine', duration: 0.02, gain: 0.06 },
      success: { notes: [587.33, 880, 1174.66, 1760], type: 'triangle', step: 0.05, gain: 0.18 },
      error: { notes: [330, 293.66, 220], type: 'square', step: 0.09, gain: 0.14 },
      notification: { notes: [1318.51, 1760], type: 'sawtooth', step: 0.06, gain: 0.15 },
      whoosh: { duration: 0.22, freq: 2400, gain: 0.16 }
    },
    retro: {
      name: 'Retro 8-Bit / Arcade',
      click: { freq: 900, endFreq: 300, type: 'square', duration: 0.05, gain: 0.2 },
      pop: { freq: 300, endFreq: 1200, type: 'square', duration: 0.08, gain: 0.22 },
      switch: { freq: 440, endFreq: 880, type: 'square', duration: 0.06, gain: 0.18 },
      hover: { freq: 1200, endFreq: 1200, type: 'square', duration: 0.02, gain: 0.05 },
      success: { notes: [261.63, 329.63, 392, 523.25, 659.25], type: 'square', step: 0.07, gain: 0.2 },
      error: { notes: [220, 196, 174.61, 146.83], type: 'sawtooth', step: 0.1, gain: 0.2 },
      notification: { notes: [659.25, 987.77], type: 'square', step: 0.09, gain: 0.2 },
      whoosh: { duration: 0.15, freq: 800, gain: 0.18 }
    },
    organic: {
      name: 'Organic / Zen',
      click: { freq: 650, endFreq: 220, type: 'sine', duration: 0.04, gain: 0.16 },
      pop: { freq: 320, endFreq: 640, type: 'sine', duration: 0.08, gain: 0.2 },
      switch: { freq: 500, endFreq: 750, type: 'triangle', duration: 0.05, gain: 0.14 },
      hover: { freq: 550, endFreq: 600, type: 'sine', duration: 0.02, gain: 0.04 },
      success: { notes: [440, 554.37, 659.25, 880], type: 'sine', step: 0.09, gain: 0.16 }, // A major pentatonic
      error: { notes: [330, 277.18, 220], type: 'triangle', step: 0.1, gain: 0.12 },
      notification: { notes: [659.25, 880], type: 'sine', step: 0.12, gain: 0.18 },
      whoosh: { duration: 0.25, freq: 800, gain: 0.12 }
    },
    playful: {
      name: 'Playful / Game',
      click: { freq: 1400, endFreq: 600, type: 'sine', duration: 0.045, gain: 0.22 },
      pop: { freq: 400, endFreq: 1100, type: 'sine', duration: 0.09, gain: 0.26 },
      switch: { freq: 700, endFreq: 1400, type: 'sine', duration: 0.06, gain: 0.2 },
      hover: { freq: 950, endFreq: 1200, type: 'sine', duration: 0.02, gain: 0.06 },
      success: { notes: [440, 554.37, 659.25, 880, 1108.73], type: 'triangle', step: 0.06, gain: 0.22 },
      error: { notes: [392, 349.23, 311.13, 261.63], type: 'sawtooth', step: 0.08, gain: 0.18 },
      notification: { notes: [783.99, 1046.50, 1318.51], type: 'sine', step: 0.07, gain: 0.22 },
      whoosh: { duration: 0.2, freq: 1600, gain: 0.18 }
    },
    cinematic: {
      name: 'Cinematic / Epic',
      click: { freq: 300, endFreq: 60, type: 'sine', duration: 0.08, gain: 0.3 },
      pop: { freq: 150, endFreq: 450, type: 'triangle', duration: 0.12, gain: 0.25 },
      switch: { freq: 220, endFreq: 110, type: 'sawtooth', duration: 0.08, gain: 0.18 },
      hover: { freq: 350, endFreq: 400, type: 'sine', duration: 0.03, gain: 0.05 },
      success: { notes: [220, 277.18, 329.63, 440], type: 'triangle', step: 0.12, gain: 0.26 },
      error: { notes: [146.83, 138.59, 110], type: 'sawtooth', step: 0.15, gain: 0.25 },
      notification: { notes: [440, 659.25], type: 'sine', step: 0.15, gain: 0.25 },
      whoosh: { duration: 0.35, freq: 600, gain: 0.25 }
    }
  };

  function OmniSfx() {
    this.audioCtx = null;
    this.currentPreset = 'tech';
    this.masterVolume = 1.0;
    this.isMuted = false;
    this.isAttached = false;
    this.audioCache = {};
    this.presets = PRESETS;
  }

  // Get or initialize AudioContext safely across browsers
  OmniSfx.prototype.getContext = function () {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  };

  // Set sound palette preset
  OmniSfx.prototype.setPreset = function (presetName) {
    if (this.presets[presetName]) {
      this.currentPreset = presetName;
      return true;
    }
    console.warn('[omni-sfx] Preset "' + presetName + '" not found. Using "' + this.currentPreset + '".');
    return false;
  };

  // Adjust volume (0.0 to 1.0)
  OmniSfx.prototype.setVolume = function (vol) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
  };

  // Mute / Unmute toggle
  OmniSfx.prototype.toggleMute = function () {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  };

  // Procedural Sound Generator (Web Audio API)
  OmniSfx.prototype.play = function (soundType, customOptions) {
    if (this.isMuted) return;
    var ctx = this.getContext();
    if (!ctx) return;

    var config = (this.presets[this.currentPreset] && this.presets[this.currentPreset][soundType])
      || this.presets.tech[soundType]
      || this.presets.tech.click;

    var opt = Object.assign({}, config, customOptions || {});
    var now = ctx.currentTime;
    var vol = (opt.gain || 0.15) * this.masterVolume;

    // Arpeggio / Multi-note sounds (success, error, notification)
    if (opt.notes && Array.isArray(opt.notes)) {
      var step = opt.step || 0.06;
      opt.notes.forEach(function (freq, index) {
        var noteStart = now + (index * step);
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();

        osc.type = opt.type || 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.001, noteStart);
        gain.gain.exponentialRampToValueAtTime(vol, noteStart + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + step * 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + step * 2);
      });
      return;
    }

    // Whoosh / Noise-based Sweep
    if (soundType === 'whoosh') {
      this.playWhoosh(opt, ctx, now, vol);
      return;
    }

    // Single Oscillator sounds (click, pop, switch, hover)
    var osc = ctx.createOscillator();
    var gainNode = ctx.createGain();

    osc.type = opt.type || 'sine';
    osc.frequency.setValueAtTime(opt.freq || 1000, now);

    if (opt.endFreq) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(10, opt.endFreq), now + opt.duration);
    }

    gainNode.gain.setValueAtTime(vol, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + (opt.duration || 0.04));

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + (opt.duration || 0.04) + 0.01);
  };

  // Filtered procedural noise whoosh
  OmniSfx.prototype.playWhoosh = function (opt, ctx, now, vol) {
    var bufferSize = ctx.sampleRate * (opt.duration || 0.2);
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);

    for (var i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    var noise = ctx.createBufferSource();
    noise.buffer = buffer;

    var filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(opt.freq || 1400, now + (opt.duration * 0.5));
    filter.frequency.exponentialRampToValueAtTime(100, now + opt.duration);
    filter.Q.value = 3.0;

    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(vol, now + (opt.duration * 0.4));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + opt.duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + opt.duration);
  };

  // Play audio file from URL with caching
  OmniSfx.prototype.playUrl = function (url, volume) {
    if (this.isMuted || typeof window === 'undefined') return;
    var ctx = this.getContext();
    if (!ctx) return;

    var targetVol = (volume !== undefined ? volume : 1.0) * this.masterVolume;
    var self = this;

    if (this.audioCache[url]) {
      var source = ctx.createBufferSource();
      source.buffer = this.audioCache[url];
      var gain = ctx.createGain();
      gain.gain.value = targetVol;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
      return;
    }

    fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return ctx.decodeAudioData(buf); })
      .then(function (decoded) {
        self.audioCache[url] = decoded;
        var source = ctx.createBufferSource();
        source.buffer = decoded;
        var gain = ctx.createGain();
        gain.gain.value = targetVol;
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start(0);
      })
      .catch(function (err) {
        console.error('[omni-sfx] Error loading audio URL:', url, err);
      });
  };

  // Query Openverse Free Audio API (+5M CC0/CC tracks)
  OmniSfx.prototype.searchOpenverse = function (query, options) {
    var opt = options || {};
    var license = opt.license || 'cc0';
    var pageSize = opt.pageSize || 5;
    var url = 'https://api.openverse.org/v1/audio/?q=' + encodeURIComponent(query) +
      '&license=' + encodeURIComponent(license) +
      '&page_size=' + pageSize;

    return fetch(url, { headers: { 'User-Agent': 'omni-sfx-client/1.0' } })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data || !data.results) return [];
        return data.results.map(function (item) {
          return {
            id: item.id,
            title: item.title,
            url: item.url,
            creator: item.creator,
            license: item.license,
            duration: item.duration
          };
        });
      });
  };

  // Auto-binding to DOM via data-attributes for existing sites
  OmniSfx.prototype.attachToDOM = function (options) {
    if (typeof document === 'undefined' || this.isAttached) return;
    var opt = options || {};
    var self = this;

    if (opt.preset) this.setPreset(opt.preset);
    if (opt.volume !== undefined) this.setVolume(opt.volume);

    // Event delegation on document to catch dynamic elements in SPAs
    document.addEventListener('click', function (e) {
      self.getContext(); // Unlock audio on user interaction
      var target = e.target.closest('[data-sfx]');
      if (target) {
        var sound = target.getAttribute('data-sfx') || 'click';
        self.play(sound);
      }
    }, true);

    document.addEventListener('mouseenter', function (e) {
      var target = e.target.closest('[data-sfx-hover]');
      if (target) {
        var sound = target.getAttribute('data-sfx-hover') || 'hover';
        self.play(sound);
      }
    }, true);

    document.addEventListener('focusin', function (e) {
      var target = e.target.closest('[data-sfx-focus]');
      if (target) {
        var sound = target.getAttribute('data-sfx-focus') || 'switch';
        self.play(sound);
      }
    }, true);

    this.isAttached = true;
    console.log('[omni-sfx] Auto-binding active. Palette: ' + this.currentPreset);
  };

  // Shortcut alias
  OmniSfx.prototype.init = function (options) {
    this.attachToDOM(options);
  };

  var instance = new OmniSfx();

  // Auto-initialize if running via CDN script tag with data-preset attribute
  if (typeof document !== 'undefined') {
    var script = document.currentScript;
    if (script && script.hasAttribute('data-auto-init')) {
      var preset = script.getAttribute('data-preset') || 'tech';
      instance.attachToDOM({ preset: preset });
    }
  }

  return instance;
}));
