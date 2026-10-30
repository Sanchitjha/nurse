async function checkSitemap() {
  const res = await fetch('https://trusbee.in/sitemap.xml');
  const xml = await res.text();
  const urls = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  console.log(`Total URLs in sitemap: ${urls.length}`);
  
  const allImages = new Map();
  for (const u of urls) {
    try {
      const pageRes = await fetch(u);
      const html = await pageRes.text();
      const imgs = html.match(/(?:src|href)=["']([^"']+\.(?:png|jpe?g|webp|svg|gif|avif))["']/gi) || [];
      imgs.forEach(img => {
        const cleaned = img.replace(/^(?:src|href)=["']/, '').replace(/["']$/, '');
        if (!cleaned.includes('google') && !cleaned.includes('schema.org')) {
          if (!allImages.has(cleaned)) {
            allImages.set(cleaned, []);
          }
          if (allImages.get(cleaned).length < 3) {
            allImages.get(cleaned).push(u);
          }
        }
      });
    } catch (e) {
      console.error(u, e.message);
    }
  }

  console.log('\n--- ALL IMAGES ACROSS ENTIRE TRUSBEE SITE ---');
  for (const [img, pList] of allImages.entries()) {
    console.log(`${img} (found on: ${pList.join(', ')})`);
  }
}

checkSitemap();
