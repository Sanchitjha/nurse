const fs = require('fs');
const path = require('path');

const scenes = [
  'hospital-assist.webp',
  'elderly-care.webp',
  'urgent-assist.webp',
  'personal-assist.webp',
  'compassion-support.webp',
  'event-assist.webp',
  'driver-assist.webp'
];

async function downloadScenes() {
  const outDir = path.join(__dirname, 'trusbee_scenes');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const s of scenes) {
    const url = 'https://trusbee.in/assets/img/scenes/' + s;
    const res = await fetch(url);
    if (res.status === 200) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(outDir, s), buf);
      console.log(`Saved ${s} (${buf.length} bytes)`);
    } else {
      console.log(`Failed ${s}: ${res.status}`);
    }
  }
}

downloadScenes();
