const fs = require('fs');
const path = require('path');
const { pbkdf2Sync, randomBytes, createCipheriv } = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const PBKDF2_ITERATIONS = 600_000;
const SALT_BYTES = 16;
const IV_BYTES = 12;
const KEY_BYTES = 32;

function fail(msg) {
  console.error(`encrypt-data: ${msg}`);
  process.exit(1);
}

const password = process.env.PORTFOLIO_PASSWORD;
if (!password) fail('set PORTFOLIO_PASSWORD env var to the unlock phrase');
if (password.length < 8) fail('password must be at least 8 characters');

const work = JSON.parse(fs.readFileSync(path.join(ROOT, 'data-source/work.json'), 'utf8'));
const funStuff = JSON.parse(fs.readFileSync(path.join(ROOT, 'data-source/fun-stuff.json'), 'utf8'));
const plaintext = Buffer.from(JSON.stringify({ work, funStuff }), 'utf8');

const salt = randomBytes(SALT_BYTES);
const iv = randomBytes(IV_BYTES);
const key = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_BYTES, 'sha256');

const cipher = createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
const authTag = cipher.getAuthTag();

// Format: salt(16) || iv(12) || ciphertext || authTag(16). Web Crypto AES-GCM
// expects ciphertext||tag concatenated when calling decrypt(), so we lay it out
// that way.
const out = Buffer.concat([salt, iv, ciphertext, authTag]);

const outDir = path.join(ROOT, 'public/data');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'protected.bin');
fs.writeFileSync(outPath, out);

console.log(`encrypt-data: wrote ${out.length} bytes to ${path.relative(ROOT, outPath)}`);
console.log(`               iterations=${PBKDF2_ITERATIONS} salt=${SALT_BYTES}B iv=${IV_BYTES}B key=${KEY_BYTES * 8}-bit AES-GCM`);
