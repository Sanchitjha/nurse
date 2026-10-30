const fs = require('fs');
const catalog = fs.readFileSync('trusbee_catalog.js', 'utf8');
const lines = catalog.split('\n');
lines.forEach((l, i) => {
  if (l.includes('TB.SERVICES') || l.includes('hospital-assist') || l.includes('elderly-care')) {
    console.log(`Line ${i+1}: ${l.slice(0, 100)}`);
  }
});
