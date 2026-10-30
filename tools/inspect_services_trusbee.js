const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

const sIdx = html.indexOf('id="services"');
console.log(html.slice(sIdx, sIdx + 4000));
