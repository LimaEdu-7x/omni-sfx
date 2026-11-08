import omniSfx from './index.js';

export default omniSfx;
export const play = omniSfx.play.bind(omniSfx);
export const setPreset = omniSfx.setPreset.bind(omniSfx);
export const setVolume = omniSfx.setVolume.bind(omniSfx);
export const toggleMute = omniSfx.toggleMute.bind(omniSfx);
export const attachToDOM = omniSfx.attachToDOM.bind(omniSfx);
export const init = omniSfx.init.bind(omniSfx);
export const searchOpenverse = omniSfx.searchOpenverse.bind(omniSfx);
export const playUrl = omniSfx.playUrl.bind(omniSfx);
export { omniSfx };
