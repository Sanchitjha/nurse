const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'trusbee_scenes');
const dstDir = path.resolve(__dirname, '..', 'images');

const mapping = {
  'elder-care.webp': 'elderly-care.webp',
  'female-caregiver.webp': 'compassion-support.webp',
  'attendant.webp': 'hospital-assist.webp',
  'critical-care.webp': 'urgent-assist.webp',
  'patient-care.webp': 'event-assist.webp',
  'parkinson-care.webp': 'personal-assist.webp',
  'alzheimers-care.webp': 'compassion-support.webp'
};

for (const [dst, src] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, src);
  const dstPath = path.join(dstDir, dst);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`Copied ${src} -> images/${dst} (${fs.statSync(dstPath).size} bytes)`);
  } else {
    console.error(`Missing source: ${srcPath}`);
  }
}
