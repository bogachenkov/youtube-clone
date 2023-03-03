export function detectFullScreen() {
  // @ts-ignore
  return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
}