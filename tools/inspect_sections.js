const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

// Let's inspect the hero section of trusbee.html
const heroMatch = html.match(/<section[^>]*hero[^>]*>[\s\S]*?<\/section>/i) || html.match(/<div[^>]*hero[^>]*>[\s\S]*?<\/div>/i);
if (heroMatch) {
  console.log('Hero section:', heroMatch[0].slice(0, 1000));
} else {
  console.log('No hero section found by regex');
}

// Check what sections exist
const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
console.log(`Total sections: ${sections.length}`);
sections.forEach((sec, idx) => {
  const id = (sec.match(/id=["']([^"']+)["']/) || [])[1];
  const cls = (sec.match(/class=["']([^"']+)["']/) || [])[1];
  console.log(`Section #${idx + 1}: id="${id}", class="${cls}"`);
});
