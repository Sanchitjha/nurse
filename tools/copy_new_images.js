const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Sanchit\\.gemini\\antigravity\\brain\\14339c8d-796a-4ae9-ae61-4883ff6ce298';
const imagesDir = path.resolve(__dirname, '..', 'images');

const copies = [
  { src: 'procedures_1793389003044.jpg', dst: 'procedures.jpg' },
  { src: 'tracheostomy_care_1793389024309.jpg', dst: 'tracheostomy-care.jpg' },
  { src: 'baby_care_1793389041403.jpg', dst: 'baby-care.jpg' }
];

copies.forEach(({ src, dst }) => {
  const sPath = path.join(brainDir, src);
  const dPath = path.join(imagesDir, dst);
  if (fs.existsSync(sPath)) {
    fs.copyFileSync(sPath, dPath);
    console.log(`Copied ${src} -> images/${dst} (${fs.statSync(dPath).size} bytes)`);
  } else {
    console.error(`Source not found: ${sPath}`);
  }
});
