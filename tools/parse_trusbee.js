const fs = require('fs');
const html = fs.readFileSync('trusbee.html', 'utf8');

// Print title and meta description
const title = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', title ? title[1] : 'none');

// Look for svg tags or illustrations
const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log('SVG tags count:', svgMatches.length);

// Look for all sections or headings
const headings = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
console.log('Headings count:', headings.length);
headings.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
