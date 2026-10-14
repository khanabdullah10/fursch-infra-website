import ffmpegPath from 'ffmpeg-static';
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const desktopDir = path.join('public', 'images', 'hero', 'doors', 'd');
const mobileDir = path.join('public', 'images', 'hero', 'doors', 'm');

// Clean existing frames
fs.rmSync(desktopDir, { recursive: true, force: true });
fs.rmSync(mobileDir, { recursive: true, force: true });
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log('Extracting desktop frames (1920x1080 cover)...');
// Desktop: scale to cover 1920x1080, high quality webp
// Total ~120 frames across 4.93s = fps 24.32
const desktopArgs = [
  '-i', 'public/doors.mp4',
  '-vf', 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080',
  '-vcodec', 'libwebp',
  '-quality', '85',
  path.join(desktopDir, '%03d.webp')
];

const resD = spawnSync(ffmpegPath, desktopArgs, { stdio: 'inherit' });
if (resD.error) console.error('Desktop error:', resD.error);

console.log('Extracting mobile frames (1080x1920 portrait centered)...');
const mobileArgs = [
  '-i', 'public/doors.mp4',
  '-vf', 'scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920:x=(in_w-out_w)/2:y=(in_h-out_h)/2',
  '-vcodec', 'libwebp',
  '-quality', '80',
  path.join(mobileDir, '%03d.webp')
];

const resM = spawnSync(ffmpegPath, mobileArgs, { stdio: 'inherit' });
if (resM.error) console.error('Mobile error:', resM.error);

// Rename 001.webp -> 000.webp so indices are 0-based
function renumberFrames(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort();
  console.log(`Extracted ${files.length} frames in ${dir}`);
  
  // FFmpeg outputs %03d starting at 001.webp
  // Rename so it starts at 000.webp
  files.forEach((file, index) => {
    const oldPath = path.join(dir, file);
    const newName = String(index).padStart(3, '0') + '.webp';
    const tempPath = path.join(dir, 'temp_' + newName);
    fs.renameSync(oldPath, tempPath);
  });

  const tempFiles = fs.readdirSync(dir).filter(f => f.startsWith('temp_')).sort();
  tempFiles.forEach(tempFile => {
    const finalName = tempFile.replace('temp_', '');
    fs.renameSync(path.join(dir, tempFile), path.join(dir, finalName));
  });

  return files.length;
}

const countD = renumberFrames(desktopDir);
const countM = renumberFrames(mobileDir);
console.log(`Total Desktop Frames: ${countD}`);
console.log(`Total Mobile Frames: ${countM}`);
