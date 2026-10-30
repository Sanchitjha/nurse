const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

console.log('Sample SVG 1:', html.match(/<svg[\s\S]*?<\/svg>/i)[0]);

// Find <symbol> tags or <defs>
const symbols = html.match(/<symbol[\s\S]*?<\/symbol>/gi) || [];
console.log('Symbols count:', symbols.length);
symbols.forEach(s => {
  const id = (s.match(/id=["']([^"']+)["']/) || [])[1];
  console.log('Symbol ID:', id);
});
