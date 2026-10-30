const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

const idx = html.indexOf('TB_SCENE_IMG');
console.log('Index of TB_SCENE_IMG in html:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 50, idx + 800));
}
