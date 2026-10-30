const fs = require('fs');
const catalog = fs.readFileSync('trusbee_catalog.js', 'utf8');
const site = fs.readFileSync('trusbee_site.js', 'utf8');

function findOccurrences(str, term) {
  const res = [];
  let pos = 0;
  while ((pos = str.indexOf(term, pos)) !== -1) {
    res.push(pos);
    pos += term.length;
  }
  return res;
}

console.log('Occurrences of svcGrid in site.js:', findOccurrences(site, 'svcGrid'));
console.log('Occurrences of svcGrid in catalog.js:', findOccurrences(catalog, 'svcGrid'));

findOccurrences(catalog, 'svcGrid').forEach(p => {
  console.log('--- in catalog.js at ' + p + ' ---');
  console.log(catalog.slice(p - 100, p + 500));
});
findOccurrences(site, 'svcGrid').forEach(p => {
  console.log('--- in site.js at ' + p + ' ---');
  console.log(site.slice(p - 100, p + 500));
});
