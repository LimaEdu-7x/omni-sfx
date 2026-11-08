export type SoundType =
  | 'click'
  | 'pop'
  | 'switch'
  | 'hover'
  | 'success'
  | 'error'
  | 'notification'
  | 'whoosh'
  | string;

export type PresetName =
  | 'tech'
  | 'cyberpunk'
  | 'retro'
  | 'organic'
  | 'playful'
  | 'cinematic';

export interface SoundConfig {
  freq?: number;
  endFreq?: number;
  type?: OscillatorType;
  duration?: number;
  gain?: number;
  notes?: number[];
  step?: number;
}

export interface AttachOptions {
  preset?: PresetName;
  volume?: number;
}

export interface OpenverseItem {
  id: string;
  title: string;
  url: string;
  creator: string;
  license: string;
  duration: number;
}

export interface OmniSfxInstance {
  currentPreset: PresetName;
  masterVolume: number;
  isMuted: boolean;
  isAttached: boolean;
  getContext(): AudioContext | null;
  setPreset(presetName: PresetName): boolean;
  setVolume(vol: number): void;
  toggleMute(): boolean;
  play(soundType: SoundType, customOptions?: SoundConfig): void;
  playUrl(url: string, volume?: number): void;
  searchOpenverse(query: string, options?: { license?: string; pageSize?: number }): Promise<OpenverseItem[]>;
  attachToDOM(options?: AttachOptions): void;
  init(options?: AttachOptions): void;
}

declare const omniSfx: OmniSfxInstance;
export default omniSfx;
export const play: (soundType: SoundType, customOptions?: SoundConfig) => void;
export const setPreset: (presetName: PresetName) => boolean;
export const setVolume: (vol: number) => void;
export const toggleMute: () => boolean;
export const attachToDOM: (options?: AttachOptions) => void;
export const init: (options?: AttachOptions) => void;
export const searchOpenverse: (query: string, options?: { license?: string; pageSize?: number }) => Promise<OpenverseItem[]>;
export const playUrl: (url: string, volume?: number) => void;
