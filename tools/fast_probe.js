const candidates = [
  'female', 'female-bee', 'female-bees', 'female-caregiver', 'woman',
  'patient', 'patient-care', 'patient-bedside', 'bedside',
  'baby', 'baby-care', 'infant', 'mother',
  'critical', 'critical-care', 'icu', 'home-icu',
  'alzheimer', 'alzheimers', 'alzheimers-care',
  'parkinson', 'parkinsons', 'parkinson-care',
  'tracheostomy', 'procedures', 'nurse', 'nursing', 'attendant',
  'hero', 'hero-bg', 'banner', 'about', 'care', 'caregiver', 'caregivers',
  'sahara', 'sahara-bee', 'care-bee', 'rapid-bee', 'saathi-bee',
  'patna', 'patna-care', 'safety', 'trust', 'promise', 'founder', 'founders', 'team',
  'hospital-assist-port', 'hospital-assist-land', 'elderly-care-port', 'elderly-care-land',
  'hospital-assist-600', 'elderly-care-600', 'hospital-assist-400', 'elderly-care-400'
];

const dirs = [
  'https://trusbee.in/assets/img/scenes/',
  'https://trusbee.in/assets/img/',
  'https://trusbee.in/assets/img/app/'
];

const exts = ['.webp', '.jpg', '.png'];

async function runFastProbe() {
  const tasks = [];
  for (const d of dirs) {
    for (const c of candidates) {
      for (const ext of exts) {
        const url = d + c + ext;
        tasks.push(
          fetch(url, { method: 'HEAD' })
            .then(res => {
              if (res.status === 200) {
                console.log(`FOUND: ${url} (${res.headers.get('content-length')} bytes, ${res.headers.get('content-type')})`);
              }
            })
            .catch(() => {})
        );
      }
    }
  }
  await Promise.all(tasks);
  console.log('Fast probe finished');
}

runFastProbe();
