const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
export const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
