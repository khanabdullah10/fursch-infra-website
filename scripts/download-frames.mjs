/**
 * Helper utility to manage local cache of hero doors sequence frames.
 * The 128 frames for desktop (d) and mobile (m) are fully hosted under:
 * /public/images/hero/doors/{d|m}/{000..127}.webp
 */
import fs from 'fs';
import path from 'path';

function verifyLocalFrames() {
  const dPath = path.join('public', 'images', 'hero', 'doors', 'd');
  const mPath = path.join('public', 'images', 'hero', 'doors', 'm');

  const dCount = fs.existsSync(dPath) ? fs.readdirSync(dPath).filter(f => f.endsWith('.webp')).length : 0;
  const mCount = fs.existsSync(mPath) ? fs.readdirSync(mPath).filter(f => f.endsWith('.webp')).length : 0;

  console.log(`Verified local sequence assets:`);
  console.log(`- Desktop frames: ${dCount} / 128`);
  console.log(`- Mobile frames:  ${mCount} / 128`);
}

verifyLocalFrames();
