const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
sections.forEach((sec, idx) => {
  const id = (sec.match(/id=["']([^"']+)["']/) || [])[1];
  console.log(`\n=================== SECTION ${idx + 1}: ${id} ===================`);
  // print any img or svg or visual cards
  const imgs = sec.match(/<img[^>]+>/gi) || [];
  const svgUses = sec.match(/<use[^>]+>/gi) || [];
  console.log('Images:', imgs);
  console.log('SVG uses count:', svgUses.length);
  // print first 400 chars of non-tag text or sample html
  console.log(sec.slice(0, 400).replace(/\s+/g, ' '));
});
