const fs = require('fs');
const catalog = fs.readFileSync('trusbee_catalog.js', 'utf8');

const sceneIdx = catalog.indexOf('TB.scene =');
if (sceneIdx !== -1) {
  console.log(catalog.slice(sceneIdx, sceneIdx + 1200));
} else {
  const idx2 = catalog.indexOf('TB.scene');
  console.log(catalog.slice(idx2, idx2 + 1200));
}
