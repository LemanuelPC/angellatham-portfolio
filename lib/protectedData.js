const PBKDF2_ITERATIONS = 600_000;
const SALT_BYTES = 16;
const IV_BYTES = 12;

const STORAGE_KEY = 'portfolio.data';

export async function decryptProtected(password) {
  const buf = new Uint8Array(
    await fetch('/data/protected.bin', { cache: 'no-store' }).then((r) => {
      if (!r.ok) throw new Error(`fetch protected.bin: ${r.status}`);
      return r.arrayBuffer();
    })
  );

  const salt = buf.slice(0, SALT_BYTES);
  const iv = buf.slice(SALT_BYTES, SALT_BYTES + IV_BYTES);
  const ciphertextWithTag = buf.slice(SALT_BYTES + IV_BYTES);

  const baseKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );

  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertextWithTag);
  return JSON.parse(new TextDecoder().decode(plaintext));
}

export function loadCachedData() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function cacheData(data) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage full or disabled — non-fatal, just won't survive refresh
  }
}

export function clearCachedData() {
  sessionStorage.removeItem(STORAGE_KEY);
}
