/* ==========================================================================
   CONTENT — services, prices, plans, reviews, FAQ. Every text is { en, hi }.
   All prices, names and reviews below are PLACEHOLDERS: edit freely.
   Use {brand} and {city} inside text to pull values from config.js.
   ========================================================================== */
window.CONTENT = {
  /* hourly price (₹) is the base; plan prices are computed from it below */
  plans: [
    { key: "half", hours: 4, off: 0.2, label: { en: "Half Day", hi: "आधा दिन" } },
    { key: "full", hours: 8, off: 0.3, label: { en: "Full Day", hi: "पूरा दिन" }, best: true },
    { key: "night", hours: 12, off: 0.35, label: { en: "Night Shift", hi: "रात की शिफ्ट" } },
  ],

  icons: {
    hospital: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
    elderly: '<circle cx="10" cy="5" r="2"/><path d="M10 8v6l-2.5 6M10 14l3 6M7 11l3-2 3 2M17 9v11"/>',
    nursing: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"/><path d="M7.5 12H10l1.5-2.5 2 4 1.2-1.5h1.8"/>',
    urgent: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
    personal: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9zM9 14l2 2 4-4"/>',
    compassion: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
    event: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    driver: '<path d="M5 16v-5l2-5h10l2 5v5M3 16h18M7 16v2M17 16v2"/><circle cx="8" cy="13.5" r=".8"/><circle cx="16" cy="13.5" r=".8"/>',
    security: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    pet: '<circle cx="7" cy="10" r="1.8"/><circle cx="11" cy="6.5" r="1.8"/><circle cx="15.5" cy="7" r="1.8"/><circle cx="18" cy="11.5" r="1.8"/><path d="M8.5 18c0-3 2.5-5.5 5-5.5s4 2 3.5 4.5c-.5 2-3 2-4.5 1.5-2-.5-4-.5-4-.5z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    siren: '<path d="M7 18v-6a5 5 0 0 1 10 0v6M4 18h16M12 3v2M4.5 7l1.5 1.5M19.5 7 18 8.5"/>',
    female: '<circle cx="12" cy="8" r="4"/><path d="M12 12v8M9 17h6"/>',
    box: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
  },

  services: [
    {
      id: "hospital", img: "hospital-assist.svg", hourly: 219, live: true,
      name: { en: "Hospital Assist", hi: "अस्पताल सहायता" },
      cap: { en: "A Saathi at the OPD counter", hi: "OPD काउंटर पर आपका साथी" },
      desc: { en: "A trained Saathi beside your patient for OPD, admission, reports and bedside attending.", hi: "OPD, भर्ती, रिपोर्ट और मरीज़ के पास रहने के लिए प्रशिक्षित साथी।" },
      points: {
        en: ["Queues, registration and file handling", "Escort to tests, scans and consultations", "Bedside company and live updates to family"],
        hi: ["लाइन, पंजीकरण और फ़ाइल का काम", "जाँच, स्कैन और डॉक्टर तक साथ", "मरीज़ के पास रहना और परिवार को अपडेट"],
      },
    },
    {
      id: "elderly", img: "elderly-care.svg", hourly: 199, live: true,
      name: { en: "Elderly Care", hi: "बुज़ुर्ग देखभाल" },
      cap: { en: "An afternoon walk, medicines on time", hi: "दोपहर की सैर, समय पर दवा की याद" },
      desc: { en: "Companionship, medicine reminders, doctor visits and gentle daily care for elders.", hi: "साथ, दवा की याद, डॉक्टर के पास ले जाना और रोज़ की स्नेहपूर्ण देखभाल।" },
      points: {
        en: ["Companionship, walks and conversation", "Medicine reminders as per the prescription", "Doctor visits and daily routine support"],
        hi: ["साथ, सैर और बातचीत", "पर्चे के अनुसार दवा की याद", "डॉक्टर के पास ले जाना और दिनचर्या में मदद"],
      },
    },
    {
      id: "nursing", img: "home-nursing.svg", hourly: 349, live: true,
      name: { en: "Home Nursing", hi: "होम नर्सिंग" },
      cap: { en: "Trained nurse, right at home", hi: "प्रशिक्षित नर्स, आपके घर पर" },
      desc: { en: "Qualified nursing support at home: vitals, dressings and post-surgery care, as advised by your doctor.", hi: "घर पर योग्य नर्सिंग सहायता: वाइटल्स, ड्रेसिंग और ऑपरेशन के बाद की देखभाल, डॉक्टर की सलाह अनुसार।" },
      points: {
        en: ["Vitals, dressings and basic nursing tasks", "Post-surgery and bed-ridden patient care", "Always as advised by your treating doctor"],
        hi: ["वाइटल्स, ड्रेसिंग और बुनियादी नर्सिंग", "ऑपरेशन के बाद और बिस्तर पर मरीज़ की देखभाल", "हमेशा आपके डॉक्टर की सलाह अनुसार"],
      },
    },
    {
      id: "urgent", img: "urgent-assist.svg", hourly: 269, live: true,
      name: { en: "24×7 Urgent Assist", hi: "24×7 आपातकालीन सहायता" },
      cap: { en: "2 am at the emergency gate", hi: "रात 2 बजे इमरजेंसी गेट पर" },
      desc: { en: "Urgent non-medical help at any hour: night admissions, ER accompaniment, urgent medicine runs and pickups.", hi: "किसी भी समय तुरंत गैर-चिकित्सकीय मदद: रात में भर्ती, ER में साथ, दवा लाना।" },
      points: {
        en: ["Night admissions and ER accompaniment", "Urgent medicine and document runs", "Fast response, any hour of the day"],
        hi: ["रात में भर्ती और ER में साथ", "ज़रूरी दवा और काग़ज़ात लाना", "दिन-रात तेज़ प्रतिक्रिया"],
      },
    },
    {
      id: "personal", img: "personal-assist.svg", hourly: 199, live: true,
      name: { en: "Personal Assist", hi: "व्यक्तिगत सहायता" },
      cap: { en: "Queues, banks and errands, handled", hi: "लाइन, बैंक और काम, सब संभाला" },
      desc: { en: "Daily-needs runs, queue standing, a companion for the bank, office or shopping.", hi: "रोज़ के काम, लाइन में खड़े होना, बैंक, दफ़्तर या ख़रीदारी में साथ।" },
      points: {
        en: ["Standing in queues for you", "Bank, office and government-office visits", "Shopping and daily errands"],
        hi: ["आपकी जगह लाइन में खड़े होना", "बैंक, दफ़्तर और सरकारी दफ़्तर के काम", "ख़रीदारी और रोज़मर्रा के काम"],
      },
    },
    {
      id: "compassion", img: "compassion-support.svg", hourly: 219, live: true,
      name: { en: "Compassion Support", hi: "संवेदना सहयोग" },
      cap: { en: "A steady presence when it matters", hi: "कठिन समय में एक सहारा" },
      desc: { en: "A steady presence in bereavement: rites and arrangements, condolence visits, after-loss paperwork.", hi: "शोक के समय सहारा: अंतिम संस्कार की व्यवस्था, शोक-भेंट और काग़ज़ी काम।" },
      points: {
        en: ["Help with arrangements and coordination", "Company for the family at home", "After-loss paperwork and follow-ups"],
        hi: ["व्यवस्था और तालमेल में मदद", "घर पर परिवार के साथ रहना", "बाद के काग़ज़ी काम और फ़ॉलो-अप"],
      },
    },
    {
      id: "event", img: "event-assist.svg", hourly: 249, live: true,
      name: { en: "Event Assist", hi: "आयोजन सहायता" },
      cap: { en: "Elderly guests, cared for all evening", hi: "बुज़ुर्ग मेहमानों का पूरी शाम ध्यान" },
      desc: { en: "Guest management, setup coordination and dedicated care for elderly guests at your functions.", hi: "मेहमानों की व्यवस्था, सजावट में तालमेल और बुज़ुर्ग मेहमानों की ख़ास देखभाल।" },
      points: {
        en: ["Welcome and seating for guests", "Dedicated care for elderly guests", "Setup and vendor coordination"],
        hi: ["मेहमानों का स्वागत और बैठने की व्यवस्था", "बुज़ुर्ग मेहमानों की ख़ास देखभाल", "सजावट और वेंडर से तालमेल"],
      },
    },
    {
      id: "driver", img: "driver-assist.svg", hourly: 219, live: true,
      name: { en: "Driver Assist", hi: "ड्राइवर सहायता" },
      cap: { en: "A verified driver for your own car", hi: "आपकी अपनी गाड़ी के लिए ड्राइवर" },
      desc: { en: "A verified driver for your own car: hospital runs, school and office drops, airport transfers and a safe drive home at night.", hi: "आपकी गाड़ी के लिए सत्यापित ड्राइवर: अस्पताल, स्कूल-दफ़्तर, एयरपोर्ट और रात में सुरक्षित वापसी।" },
      points: {
        en: ["Hospital, school, office and airport trips", "A safe drive home at night", "You stay in your own comfortable car"],
        hi: ["अस्पताल, स्कूल, दफ़्तर और एयरपोर्ट", "रात में सुरक्षित घर वापसी", "आप अपनी ही गाड़ी में आराम से"],
      },
    },
    {
      id: "security", img: "security-assist.svg", live: false,
      name: { en: "Security Assist", hi: "सुरक्षा सहायता" },
      cap: { en: "Lawful security for events and gates", hi: "आयोजन और गेट के लिए सुरक्षा" },
      desc: { en: "Lawful security for events and gates.", hi: "आयोजन और गेट के लिए वैध सुरक्षा।" },
    },
    {
      id: "pet", img: "pet-care.svg", live: false,
      name: { en: "Pet Care", hi: "पेट केयर" },
      cap: { en: "Walks, feeding and vet visits", hi: "सैर, खाना और वेट विज़िट" },
      desc: { en: "Walks, feeding, sitting and vet visits.", hi: "सैर, खाना, देखभाल और वेट के पास ले जाना।" },
    },
  ],

  how: [
    { t: { en: "Say hi on WhatsApp", hi: "WhatsApp पर नमस्ते कहें" }, d: { en: "Message us and pick your language: English or Hindi.", hi: "हमें मैसेज करें और अपनी भाषा चुनें: अंग्रेज़ी या हिंदी।" } },
    { t: { en: "Tell us what you need", hi: "बताएँ क्या चाहिए" }, d: { en: "One short form: the service, time, place and who the Saathi meets. You see the price first.", hi: "एक छोटा फ़ॉर्म: सेवा, समय, जगह और साथी किससे मिलेगा। कीमत पहले ही दिखेगी।" } },
    { t: { en: "Your Saathi arrives", hi: "आपका साथी पहुँचता है" }, d: { en: "In uniform, with a photo ID. Share your Start PIN only when they are at the door.", hi: "यूनिफ़ॉर्म और फ़ोटो ID के साथ। स्टार्ट PIN तभी दें जब साथी दरवाज़े पर हो।" } },
    { t: { en: "Pay after the visit", hi: "सेवा के बाद भुगतान" }, d: { en: "Share the End PIN when the work is done. The bill comes on WhatsApp. Pay by UPI, never cash to the Saathi.", hi: "काम पूरा होने पर एंड PIN दें। बिल WhatsApp पर आएगा। UPI से भुगतान करें, साथी को नकद नहीं।" } },
  ],

  trust: [
    { t: { en: "Shortlisting", hi: "चयन" }, d: { en: "Matched to the experience each service needs.", hi: "हर सेवा के लिए ज़रूरी अनुभव के अनुसार।" } },
    { t: { en: "Interview", hi: "इंटरव्यू" }, d: { en: "Character, temperament and attitude to care.", hi: "चरित्र, स्वभाव और सेवा भाव की परख।" } },
    { t: { en: "Documentation", hi: "दस्तावेज़" }, d: { en: "Aadhaar, PAN, qualification certificates and photo ID.", hi: "आधार, पैन, योग्यता प्रमाणपत्र और फ़ोटो ID।" } },
    { t: { en: "Police verification", hi: "पुलिस सत्यापन" }, d: { en: "Background verification on record.", hi: "बैकग्राउंड सत्यापन रिकॉर्ड में।" } },
    { t: { en: "Local reference check", hi: "स्थानीय संदर्भ जाँच" }, d: { en: "Past work called and checked in {city}.", hi: "पिछले काम की {city} में फ़ोन पर जाँच।" } },
    { t: { en: "Training and onboarding", hi: "प्रशिक्षण" }, d: { en: "Care, conduct, boundaries and emergency basics.", hi: "देखभाल, व्यवहार, सीमाएँ और आपात स्थिति की बुनियादी बातें।" } },
  ],

  safety: [
    { i: "phone", t: { en: "A real person calls you", hi: "एक असली इंसान फ़ोन करता है" }, d: { en: "Urgent requests get a call back fast. Never a script, never a maze of menus.", hi: "ज़रूरी अनुरोध पर जल्दी कॉल-बैक। कोई स्क्रिप्ट या मेन्यू का जाल नहीं।" } },
    { i: "lock", t: { en: "You control the visit", hi: "विज़िट आपके नियंत्रण में" }, d: { en: "Name and photo ID before arrival. It starts on your Start PIN and ends on your End PIN.", hi: "आने से पहले नाम और फ़ोटो ID। आपके स्टार्ट PIN से शुरू, एंड PIN पर ख़त्म।" } },
    { i: "box", t: { en: "Your property is respected", hi: "आपके सामान का सम्मान" }, d: { en: "Saathis never handle your cash, cards, OTPs or valuables. Every Saathi signs these rules.", hi: "साथी आपका नकद, कार्ड, OTP या कीमती सामान नहीं छूते। हर साथी इन नियमों पर हस्ताक्षर करता है।" } },
    { i: "user", t: { en: "Clear rules for every Saathi", hi: "हर साथी के लिए साफ़ नियम" }, d: { en: "No medicines on their own, no medical decisions, no personal favours. Care and company, within limits.", hi: "अपनी मर्ज़ी से दवा नहीं, चिकित्सकीय फ़ैसले नहीं। सीमा में रहकर देखभाल और साथ।" } },
    { i: "female", t: { en: "Female Saathis on request", hi: "माँगने पर महिला साथी" }, d: { en: "Female Saathis are available 9 AM to 6 PM. Ask when you book.", hi: "महिला साथी सुबह 9 से शाम 6 बजे तक उपलब्ध। बुकिंग के समय बताएँ।" } },
    { i: "siren", alert: true, t: { en: "Emergencies come first", hi: "आपातकाल पहले" }, d: { en: "For medical emergencies, call 102 / 108 (ambulance) FIRST. We provide a person by your side, not medical treatment.", hi: "चिकित्सकीय आपातकाल में पहले 102 / 108 (एम्बुलेंस) पर कॉल करें। हम साथ रहने वाला व्यक्ति देते हैं, इलाज नहीं।" } },
  ],

  /* SAMPLE reviews — replace with real customer feedback before launch */
  reviews: [
    { q: { en: "I was stuck in another city when my father was admitted. The Saathi handled the queues and paperwork and kept me updated at every step. It gave me real peace of mind.", hi: "पिताजी भर्ती हुए तब मैं दूसरे शहर में था। साथी ने लाइन और काग़ज़ संभाले और हर कदम पर अपडेट दिया। बहुत सुकून मिला।" }, w: { en: "Hospital Assist family", hi: "अस्पताल सहायता, परिवार" } },
    { q: { en: "Punctual, polite and patient. Took my mother for her check-up and made the whole day stress-free.", hi: "समय पर, विनम्र और धैर्यवान। माँ को चेक-अप के लिए ले गए और पूरा दिन आसान कर दिया।" }, w: { en: "Doctor visit", hi: "डॉक्टर विज़िट" } },
    { q: { en: "My mother looked forward to her evening walks. Having someone kind and patient with her changed her mood completely.", hi: "माँ को शाम की सैर का इंतज़ार रहने लगा। एक स्नेही साथी के साथ उनका मन बदल गया।" }, w: { en: "Elderly Care family", hi: "बुज़ुर्ग देखभाल, परिवार" } },
    { q: { en: "Bank aur office ke kaam me poora saath diya. Time bachaya aur koi tension nahi hui.", hi: "बैंक और दफ़्तर के काम में पूरा साथ दिया। समय बचा और कोई टेंशन नहीं हुई।" }, w: { en: "Personal Assist customer", hi: "व्यक्तिगत सहायता, ग्राहक" } },
    { q: { en: "Help reached us late at night when we needed it most. Calm, quick and respectful.", hi: "जब सबसे ज़्यादा ज़रूरत थी, रात में मदद पहुँची। शांत, तेज़ और सम्मानपूर्ण।" }, w: { en: "Urgent Assist family", hi: "आपातकालीन सहायता, परिवार" } },
    { q: { en: "The nurse followed the doctor's instructions carefully and explained everything to us. Very professional.", hi: "नर्स ने डॉक्टर के निर्देश ध्यान से माने और हमें सब समझाया। बहुत पेशेवर।" }, w: { en: "Home Nursing family", hi: "होम नर्सिंग, परिवार" } },
  ],

  faq: [
    { q: { en: "How do I book?", hi: "बुकिंग कैसे करें?" }, a: { en: "Message us on WhatsApp, choose your language and fill the short booking form. You see the price before you confirm.", hi: "WhatsApp पर मैसेज करें, भाषा चुनें और छोटा बुकिंग फ़ॉर्म भरें। कन्फ़र्म करने से पहले कीमत दिखेगी।" } },
    { q: { en: "How is the price calculated?", hi: "कीमत कैसे तय होती है?" }, a: { en: "Per hour, or a fixed-price plan for half day, full day or night. GST is shown separately. A small arrival fee, based on distance, is confirmed when your Saathi is assigned.", hi: "प्रति घंटा, या आधे दिन/पूरे दिन/रात का फ़िक्स्ड प्लान। GST अलग दिखता है। दूरी के अनुसार छोटा आगमन शुल्क साथी तय होने पर बताया जाता है।" } },
    { q: { en: "When do I pay?", hi: "भुगतान कब करना है?" }, a: { en: "After the service, by UPI. The bill arrives on WhatsApp with GST shown. Please never pay cash to the Saathi.", hi: "सेवा के बाद UPI से। GST के साथ बिल WhatsApp पर आता है। साथी को कभी नकद न दें।" } },
    { q: { en: "Can I ask for a female Saathi?", hi: "क्या महिला साथी मिल सकती है?" }, a: { en: "Yes, between 9 AM and 6 PM. If none is free for your slot, we tell you before you confirm.", hi: "हाँ, सुबह 9 से शाम 6 बजे के बीच। अगर आपके समय कोई उपलब्ध न हो तो कन्फ़र्म करने से पहले बता देते हैं।" } },
    { q: { en: "Can I change or cancel a booking?", hi: "क्या बुकिंग बदल या रद्द कर सकते हैं?" }, a: { en: "Yes, just message us on WhatsApp. Changes made before the Saathi is on the way are free.", hi: "हाँ, WhatsApp पर मैसेज करें। साथी निकलने से पहले बदलाव मुफ़्त हैं।" } },
    { q: { en: "Do Saathis give medicines or medical treatment?", hi: "क्या साथी दवा या इलाज देते हैं?" }, a: { en: "Care and Elderly Saathis give company and reminders, not treatment. Home Nursing is done by qualified nurses strictly as advised by your doctor. For emergencies call 102 / 108 first.", hi: "देखभाल और बुज़ुर्ग साथी साथ और याद दिलाने का काम करते हैं, इलाज नहीं। होम नर्सिंग योग्य नर्स डॉक्टर की सलाह अनुसार करती हैं। आपातकाल में पहले 102 / 108 पर कॉल करें।" } },
    { q: { en: "How do I know the Saathi is genuine?", hi: "कैसे जानें कि साथी असली है?" }, a: { en: "You get the name and photo ID before arrival, and the visit only starts when you share the Start PIN at the door.", hi: "आने से पहले नाम और फ़ोटो ID मिलती है, और विज़िट तभी शुरू होती है जब आप दरवाज़े पर स्टार्ट PIN देते हैं।" } },
    { q: { en: "Which areas do you cover?", hi: "आप किन इलाक़ों में सेवा देते हैं?" }, a: { en: "We are live in {city} and expanding. Message us your area and we will confirm.", hi: "हम {city} में उपलब्ध हैं और बढ़ रहे हैं। अपना इलाक़ा मैसेज करें, हम पुष्टि करेंगे।" } },
  ],
};
