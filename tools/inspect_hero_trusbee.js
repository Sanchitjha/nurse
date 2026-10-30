const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

const heroIdx = html.indexOf('class="hero"');
console.log(html.slice(heroIdx, heroIdx + 3000));
