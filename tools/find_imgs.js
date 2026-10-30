const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

const re = /["'(\s]([^\s"'()]+\.(?:png|jpe?g|webp|svg))/gi;
let m;
const found = new Set();
while ((m = re.exec(html)) !== null) {
  found.add(m[1]);
}
console.log('All image-like paths in trusbee.html:');
console.log(Array.from(found));
