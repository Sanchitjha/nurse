const fs = require('fs');
const catalog = fs.readFileSync('trusbee_catalog.js', 'utf8');

const cardFuncIdx = catalog.indexOf('cardHtml') !== -1 ? catalog.indexOf('cardHtml') : catalog.indexOf('renderCard');
if (cardFuncIdx !== -1) {
  console.log(catalog.slice(cardFuncIdx, cardFuncIdx + 1500));
} else {
  // search for card template
  const idx = catalog.indexOf('class="svc-card') !== -1 ? catalog.indexOf('class="svc-card') : catalog.indexOf('svc-card');
  console.log('Card template:', catalog.slice(Math.max(0, idx - 100), idx + 1000));
}
