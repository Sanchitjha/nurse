const fs = require('fs');
const html = fs.readFileSync('hospital_assist.html', 'utf8');

const re = /["'(\s]([^\s"'()]+\.(?:png|jpe?g|webp|svg))/gi;
let m;
const found = new Set();
while ((m = re.exec(html)) !== null) {
  found.add(m[1]);
}
console.log('All image-like paths in hospital_assist.html:');
console.log(Array.from(found));

const scripts = html.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
console.log('\nScripts count:', scripts.length);
scripts.forEach((s, i) => console.log(i, s.slice(0, 150)));
