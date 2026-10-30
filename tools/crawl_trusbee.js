const pages = [
  'https://trusbee.in/',
  'https://trusbee.in/services/',
  'https://trusbee.in/services/hospital-assist/',
  'https://trusbee.in/services/elderly-care/',
  'https://trusbee.in/services/urgent-assist/',
  'https://trusbee.in/services/personal-assist/',
  'https://trusbee.in/services/compassion-support/',
  'https://trusbee.in/services/event-assist/',
  'https://trusbee.in/services/driver-assist/',
  'https://trusbee.in/private-hospital-attendant-patna/',
  'https://trusbee.in/elderly-care-at-home-patna/',
  'https://trusbee.in/bees/',
  'https://trusbee.in/pricing/'
];

async function scan() {
  const allImages = new Set();
  for (const url of pages) {
    try {
      const res = await fetch(url);
      const html = await res.text();
      const matches = html.match(/(?:src|href)=["']([^"']+\.(?:png|jpe?g|webp|svg|gif|avif))["']/gi) || [];
      matches.forEach(m => {
        const src = m.replace(/^(?:src|href)=["']/, '').replace(/["']$/, '');
        allImages.add(src);
      });
      // also check css or data attributes
      const dataImgs = html.match(/data-[a-z-]+=["']([^"']+\.(?:png|jpe?g|webp|svg|gif|avif))["']/gi) || [];
      dataImgs.forEach(m => {
        const src = m.replace(/^data-[a-z-]+=["']/, '').replace(/["']$/, '');
        allImages.add(src);
      });
    } catch (e) {
      console.error(url, e.message);
    }
  }
  console.log('Found images across pages:');
  console.log(Array.from(allImages));
}

scan();
