async function run() {
  const res = await fetch('https://trusbee.in/bees/');
  const html = await res.text();
  const re = /["'(\s]([^\s"'()]+\.(?:png|jpe?g|webp|svg))/gi;
  let m;
  const found = new Set();
  while ((m = re.exec(html)) !== null) found.add(m[1]);
  console.log('Bees page images:', Array.from(found));
}
run();
