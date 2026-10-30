const candidates = [
  'patient-care', 'elder-care', 'elderly-care', 'critical-care', 'baby-care', 'alzheimers-care',
  'alzheimers', 'parkinson-care', 'parkinson', 'attendant', 'procedures', 'nursing', 'nurse',
  'icu', 'home-icu', 'female-caregiver', 'hero', 'home', 'about', 'doctor', 'patient',
  'hospital-assist', 'urgent-assist', 'personal-assist', 'compassion-support', 'event-assist', 'driver-assist',
  'security-assist', 'pet-care', 'female-bee', 'female-bees', 'female', 'promise', 'trust', 'caregiver',
  'banner', 'og', 'cover', 'trusbee', 'trusbee-og', 'team', 'founder', 'founders', 'safety'
];

const dirs = [
  'https://trusbee.in/assets/img/scenes/',
  'https://trusbee.in/assets/img/',
  'https://trusbee.in/images/',
  'https://trusbee.in/img/'
];

const exts = ['.webp', '.jpg', '.png', '.jpeg', '.svg'];

async function probe() {
  const found = [];
  for (const d of dirs) {
    for (const c of candidates) {
      for (const ext of exts) {
        const url = d + c + ext;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.status === 200) {
            console.log('HIT:', url, 'Content-Length:', res.headers.get('content-length'), 'Content-Type:', res.headers.get('content-type'));
            found.push(url);
          }
        } catch (e) {}
      }
    }
  }
  console.log('Total found:', found.length);
}

probe();
