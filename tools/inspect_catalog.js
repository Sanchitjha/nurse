const fs = require('fs');
const catalog = fs.readFileSync('trusbee_catalog.js', 'utf8');
const lines = catalog.split('\n');
console.log(lines.slice(155, 260).join('\n'));
