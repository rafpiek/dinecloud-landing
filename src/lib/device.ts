export function isAndroid(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
}

export function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function isMacOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Macintosh/i.test(navigator.userAgent);
}
