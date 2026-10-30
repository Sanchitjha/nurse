/* ==========================================================================
   CONTENT: services, rates, reviews, FAQ. Every text is { en, hi }.
   PRICES COME FROM THE CLIENT'S "Rate list.docx". Edit them here.
   Use {brand} and {city} inside text to pull values from config.js.
   ========================================================================== */
window.CONTENT = {
  /* the four price columns in the rate list, in order */
  tiers: [
    { key: "hourly", label: { en: "Hourly", hi: "प्रति घंटा" } },
    { key: "h8", label: { en: "8 hours", hi: "8 घंटे" } },
    { key: "day", label: { en: "Day care", hi: "डे केयर" } },
    { key: "h24", label: { en: "24 hours", hi: "24 घंटे" } },
  ],

  /* note shown under the rates (from the rate list: "above 5 km 7.80") */
  distance: {
    en: "Travel charge: ₹7.80 per km above 5 km.",
    hi: "यात्रा शुल्क: 5 किमी से ऊपर ₹7.80 प्रति किमी।",
  },

  icons: {
    patient: '<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11.5" r="1.7"/>',
    elder: '<circle cx="10" cy="5" r="2"/><path d="M10 8v6l-2.5 6M10 14l3 6M7 11l3-2 3 2M17 9v11"/>',
    critical: '<path d="M3 12h4l2.5-6 4 12 2.5-6H21"/>',
    alzheimer: '<path d="M10 4h4v3a2 2 0 1 1 0 4v3h-4v-3a2 2 0 1 0 0-4z"/><path d="M4 20h16"/>',
    parkinson: '<circle cx="13" cy="4.5" r="1.8"/><path d="M12 8l-2 5 3 3v5M12 8l4 3 2 3M10 13l-3 3"/>',
    trach: '<path d="M12 4v8M12 12c-2.5 0-4.5 1.5-5.500 4.500S6 21 8 21s3.500-2 4-4.500M12 12c2.500 0 4.500 1.500 5.500 4.500S18 21 16 21s-3.500-2-4-4.500"/>',
    baby: '<circle cx="12" cy="9" r="5"/><path d="M9.500 9.500h.01M14.500 9.500h.01M10 12c1 1 3 1 4 0M6 21c1-3.500 3.500-5 6-5s5 1.500 6 5"/>',
    attendant: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6M12 6v4M10 8h4"/>',
    procedures: '<path d="M15 4l5 5M13 6l5 5-8 8-3-1-3 3H3v-3l3-3-1-3 8-8z"/>',
    icu: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 10h3l1.500-3 2 6 1.500-3H17M9 20h6M12 16v4"/>',
    hospital: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    phone: '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    siren: '<path d="M7 18v-6a5 5 0 0 1 10 0v6M4 18h16M12 3v2M4.500 7l1.500 1.500M19.500 7 18 8.500"/>',
    female: '<circle cx="12" cy="8" r="4"/><path d="M12 12v8M9 17h6"/>',
    box: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
    doctor: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3M12 10v6M9 13h6"/>',
    home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>',
  },

  /* ---- care services: prices per column of the rate list (₹) ---- */
  services: [
    {
      id: "patient", img: "patient-care.svg", p: { hourly: 199, h8: 399, day: 499, h24: 699 },
      name: { en: "Patient Care", hi: "मरीज़ की देखभाल" },
      cap: { en: "Bedside care, at home", hi: "घर पर बिस्तर के पास देखभाल" },
      desc: { en: "Trained caregivers for bedridden, post-surgery and recovering patients: hygiene, feeding, movement and comfort.", hi: "बिस्तर पर, ऑपरेशन के बाद और ठीक हो रहे मरीज़ों के लिए प्रशिक्षित केयरगिवर: सफ़ाई, खाना, चलना-फिरना और आराम।" },
      points: { en: ["Bathing, hygiene, feeding and positioning", "Help with movement and exercises", "Regular updates to the family"], hi: ["नहलाना, सफ़ाई, खिलाना और करवट बदलवाना", "चलने-फिरने और व्यायाम में मदद", "परिवार को नियमित जानकारी"] },
    },
    {
      id: "elder", img: "elder-care.svg", p: { hourly: 299, h8: 499, day: 599, h24: 799 },
      name: { en: "Elder Care", hi: "बुज़ुर्ग देखभाल" },
      cap: { en: "Company, walks and daily support", hi: "साथ, सैर और रोज़ की मदद" },
      desc: { en: "Companionship, daily-living support, medicine reminders and gentle care for senior citizens in their own home.", hi: "बुज़ुर्गों के अपने घर में साथ, रोज़मर्रा की मदद, दवा की याद और स्नेहपूर्ण देखभाल।" },
      points: { en: ["Companionship, walks and conversation", "Medicine reminders as per the prescription", "Help with daily routine and meals"], hi: ["साथ, सैर और बातचीत", "पर्चे के अनुसार दवा की याद", "दिनचर्या और भोजन में मदद"] },
    },
    {
      id: "critical", img: "critical-care.svg", p: { hourly: 500, h8: 699, day: 899, h24: 1099 },
      name: { en: "Critical Care", hi: "क्रिटिकल केयर" },
      cap: { en: "Close monitoring at home", hi: "घर पर नज़दीकी निगरानी" },
      desc: { en: "Skilled nursing support for patients who need close monitoring at home, as advised by the treating doctor.", hi: "जिन मरीज़ों को घर पर नज़दीकी निगरानी चाहिए, उनके लिए कुशल नर्सिंग सहायता, इलाज करने वाले डॉक्टर की सलाह अनुसार।" },
      points: { en: ["Monitoring of vitals and condition", "Care as advised by your doctor", "Quick alert to family and doctor"], hi: ["वाइटल्स और हालत की निगरानी", "आपके डॉक्टर की सलाह अनुसार देखभाल", "परिवार और डॉक्टर को तुरंत सूचना"] },
    },
    {
      id: "alzheimer", img: "alzheimers-care.svg", p: { hourly: 299, h8: 499, day: 599, h24: 799 },
      name: { en: "Alzheimer's Care", hi: "अल्ज़ाइमर देखभाल" },
      cap: { en: "Patient, memory-friendly care", hi: "धैर्य से, याददाश्त का ध्यान रखकर" },
      desc: { en: "Patient, memory-friendly care: a steady routine, safety at home and calm company for people living with Alzheimer's or dementia.", hi: "धैर्य से, याददाश्त का ध्यान रखकर देखभाल: तय दिनचर्या, घर में सुरक्षा और शांत साथ, अल्ज़ाइमर या डिमेंशिया के मरीज़ों के लिए।" },
      points: { en: ["A calm, steady daily routine", "Safety and wandering prevention", "Gentle activities and company"], hi: ["शांत और तय दिनचर्या", "सुरक्षा और भटकने से बचाव", "हल्की गतिविधियाँ और साथ"] },
    },
    {
      id: "parkinson", img: "parkinson-care.svg", p: { hourly: 399, h8: 499, day: 599, h24: 899 },
      name: { en: "Parkinson's Care", hi: "पार्किंसन देखभाल" },
      cap: { en: "Steady support for movement", hi: "चलने-फिरने में सहारा" },
      desc: { en: "Help with movement, medicines on time, fall prevention and daily routines for people with Parkinson's.", hi: "पार्किंसन के मरीज़ों के लिए चलने-फिरने में मदद, समय पर दवा, गिरने से बचाव और दिनचर्या में सहयोग।" },
      points: { en: ["Support while walking and moving", "Medicines on time, as prescribed", "Fall prevention and daily routine help"], hi: ["चलने और उठने-बैठने में सहारा", "पर्चे अनुसार समय पर दवा", "गिरने से बचाव और दिनचर्या में मदद"] },
    },
    {
      id: "trach", img: "procedures.svg", p: { hourly: 799, h8: 899, day: 999, h24: 1299 },
      name: { en: "Tracheostomy Care", hi: "ट्रेकियोस्टोमी देखभाल" },
      cap: { en: "Skilled tube care at home", hi: "घर पर कुशल ट्यूब देखभाल" },
      desc: { en: "Trained support for tracheostomy tube care, cleaning and suction at home, as advised by your doctor.", hi: "घर पर ट्रेकियोस्टोमी ट्यूब की देखभाल, सफ़ाई और सक्शन में प्रशिक्षित सहायता, डॉक्टर की सलाह अनुसार।" },
      points: { en: ["Tube care, cleaning and suction", "Watching for signs that need a doctor", "Always as advised by your doctor"], hi: ["ट्यूब की देखभाल, सफ़ाई और सक्शन", "डॉक्टर की ज़रूरत वाले संकेतों पर नज़र", "हमेशा आपके डॉक्टर की सलाह अनुसार"] },
    },
    {
      id: "baby", img: "baby-care.svg", p: { hourly: 299, h8: 399, day: 599, h24: 799 },
      name: { en: "Baby Care", hi: "बेबी केयर" },
      cap: { en: "Gentle care for little ones", hi: "नन्हे बच्चों की कोमल देखभाल" },
      desc: { en: "Gentle, trained care for newborns and infants, so parents can rest and recover.", hi: "नवजात और शिशुओं की कोमल, प्रशिक्षित देखभाल, ताकि माता-पिता आराम कर सकें।" },
      points: { en: ["Feeding, bathing and sleep routine", "Hygiene and safe handling", "Support for new mothers"], hi: ["दूध, नहलाना और सोने की दिनचर्या", "सफ़ाई और सुरक्षित देखभाल", "नई माँ को सहारा"] },
    },
    {
      id: "attendant", img: "attendant.svg", p: { hourly: 299, h8: 499, day: 599, h24: 699 },
      name: { en: "Attendant", hi: "अटेंडेंट" },
      cap: { en: "A helping hand, at home or hospital", hi: "घर या अस्पताल में मददगार" },
      desc: { en: "An attendant to stay with the patient, help with moving, fetching and everyday tasks, at home or in hospital.", hi: "मरीज़ के साथ रहने, उठाने-बिठाने, सामान लाने और रोज़ के कामों में मदद के लिए अटेंडेंट, घर या अस्पताल में।" },
      points: { en: ["Stays with the patient", "Helps with moving and daily tasks", "At home or in the hospital"], hi: ["मरीज़ के साथ रहता है", "उठाने-बिठाने और रोज़ के कामों में मदद", "घर या अस्पताल में"] },
    },
  ],

  /* ---- single-rate nursing procedures ---- */
  procedures: [
    { id: "foley", price: 699, name: { en: "Foley catheter", hi: "फ़ॉली कैथेटर" } },
    { id: "iv", price: 299, name: { en: "IV injection", hi: "IV इंजेक्शन" } },
    { id: "im", price: 199, name: { en: "IM injection", hi: "IM इंजेक्शन" } },
  ],
  proceduresInfo: {
    name: { en: "Nursing Procedures", hi: "नर्सिंग प्रक्रियाएँ" },
    cap: { en: "Trained nurse, right at home", hi: "प्रशिक्षित नर्स, आपके घर पर" },
    desc: { en: "Foley catheter, IV and IM injections done by trained staff at home, on your doctor's prescription.", hi: "फ़ॉली कैथेटर, IV और IM इंजेक्शन घर पर प्रशिक्षित स्टाफ़ द्वारा, आपके डॉक्टर के पर्चे पर।" },
    img: "procedures.svg",
  },

  /* ---- home ICU setup ---- */
  setup: {
    id: "icu", price: 1030000, img: "critical-care.svg",
    name: { en: "Home ICU Setup", hi: "होम ICU सेटअप" },
    cap: { en: "Hospital-level care at home", hi: "घर पर अस्पताल जैसी देखभाल" },
    detail: { en: "2 nursing staff + 1 GDA, fully set up", hi: "2 नर्सिंग स्टाफ़ + 1 GDA, पूरा सेटअप" },
    desc: { en: "When a patient needs ICU-level care, we set up a complete ICU at home with trained nursing staff and a general duty assistant. Our team will walk you through what is included.", hi: "जब मरीज़ को ICU जैसी देखभाल चाहिए, हम घर पर पूरा ICU सेटअप करते हैं, प्रशिक्षित नर्सिंग स्टाफ़ और एक जनरल ड्यूटी असिस्टेंट के साथ। क्या-क्या शामिल है, हमारी टीम आपको समझाएगी।" },
  },

  who: [
    { i: "phone", s: "elder", t: { en: "Children living away", hi: "दूर रहने वाले बच्चे" }, d: { en: "You live in another city or country. A caregiver is with your parents, and you get updates on WhatsApp.", hi: "आप दूसरे शहर या देश में हैं। केयरगिवर आपके माता-पिता के पास रहता है और आपको WhatsApp पर जानकारी मिलती है।" } },
    { i: "patient", s: "patient", t: { en: "Families of bedridden patients", hi: "बिस्तर पर पड़े मरीज़ों का परिवार" }, d: { en: "Skilled help at home, so the family can rest, work and be there for the patient with a clear mind.", hi: "घर पर कुशल मदद, ताकि परिवार आराम कर सके, काम कर सके और मरीज़ के साथ बेहतर रह सके।" } },
    { i: "baby", s: "baby", t: { en: "New parents", hi: "नए माता-पिता" }, d: { en: "Trained help with a newborn, so parents can sleep, recover and enjoy the first weeks.", hi: "नवजात के साथ प्रशिक्षित मदद, ताकि माता-पिता सो सकें, ठीक हो सकें और शुरुआती हफ़्तों का आनंद ले सकें।" } },
    { i: "critical", s: "critical", t: { en: "After surgery or hospital stay", hi: "ऑपरेशन या अस्पताल के बाद" }, d: { en: "Continue recovery at home with nursing support, as advised by your doctor.", hi: "डॉक्टर की सलाह अनुसार नर्सिंग सहायता के साथ घर पर ही सेहत सुधारें।" } },
  ],

  how: [
    { t: { en: "Message or call us", hi: "मैसेज या कॉल करें" }, d: { en: "Tell us about the patient and the kind of care needed, on WhatsApp or by phone.", hi: "WhatsApp या फ़ोन पर मरीज़ और ज़रूरी देखभाल के बारे में बताएँ।" } },
    { t: { en: "Choose the care and the rate", hi: "देखभाल और दर चुनें" }, d: { en: "Pick hourly, 8 hours, day care or 24 hours. You see the rate before you confirm.", hi: "प्रति घंटा, 8 घंटे, डे केयर या 24 घंटे चुनें। कन्फ़र्म करने से पहले दर दिखती है।" } },
    { t: { en: "We match a caregiver", hi: "हम केयरगिवर तय करते हैं" }, d: { en: "We assign a trained caregiver and share their details with you before the visit.", hi: "हम प्रशिक्षित केयरगिवर तय करते हैं और आने से पहले उनकी जानकारी आपको देते हैं।" } },
    { t: { en: "Care begins at home", hi: "घर पर देखभाल शुरू" }, d: { en: "Your caregiver arrives, takes over and keeps the family updated. Extend or change any time by message.", hi: "केयरगिवर पहुँचकर देखभाल संभालता है और परिवार को जानकारी देता है। कभी भी मैसेज करके बढ़ाएँ या बदलें।" } },
  ],

  trust: [
    { t: { en: "Shortlisting", hi: "चयन" }, d: { en: "Matched to the experience each service needs.", hi: "हर सेवा के लिए ज़रूरी अनुभव के अनुसार।" } },
    { t: { en: "Interview", hi: "इंटरव्यू" }, d: { en: "Character, temperament and attitude to care.", hi: "चरित्र, स्वभाव और सेवा भाव की परख।" } },
    { t: { en: "Documentation", hi: "दस्तावेज़" }, d: { en: "Aadhaar, qualification certificates and photo ID.", hi: "आधार, योग्यता प्रमाणपत्र और फ़ोटो ID।" } },
    { t: { en: "Background check", hi: "बैकग्राउंड जाँच" }, d: { en: "Verification of identity and past work.", hi: "पहचान और पिछले काम की जाँच।" } },
    { t: { en: "Reference check", hi: "संदर्भ जाँच" }, d: { en: "Past work called and checked in {city}.", hi: "पिछले काम की {city} में फ़ोन पर जाँच।" } },
    { t: { en: "Training", hi: "प्रशिक्षण" }, d: { en: "Care, conduct, boundaries and emergency basics.", hi: "देखभाल, व्यवहार, सीमाएँ और आपात स्थिति की बुनियादी बातें।" } },
  ],

  safety: [
    { i: "phone", t: { en: "A real person answers", hi: "असली इंसान जवाब देता है" }, d: { en: "Call or WhatsApp and speak to our team directly. No scripts, no menus.", hi: "कॉल या WhatsApp करें और सीधे हमारी टीम से बात करें। कोई स्क्रिप्ट या मेन्यू नहीं।" } },
    { i: "user", t: { en: "Know who is coming", hi: "जानें कौन आ रहा है" }, d: { en: "You get the caregiver's name and details before the visit.", hi: "विज़िट से पहले केयरगिवर का नाम और जानकारी मिलती है।" } },
    { i: "doctor", t: { en: "Doctor's advice first", hi: "पहले डॉक्टर की सलाह" }, d: { en: "Clinical care and procedures are done only as prescribed by your treating doctor.", hi: "चिकित्सकीय देखभाल और प्रक्रियाएँ केवल आपके इलाज करने वाले डॉक्टर के पर्चे अनुसार।" } },
    { i: "box", t: { en: "Respect for your home", hi: "आपके घर का सम्मान" }, d: { en: "Our staff do not handle your cash, cards, OTPs or valuables.", hi: "हमारा स्टाफ़ आपका नकद, कार्ड, OTP या कीमती सामान नहीं छूता।" } },
    { i: "female", t: { en: "Your choice of caregiver", hi: "केयरगिवर आपकी पसंद का" }, d: { en: "Ask for a female or male caregiver when you book. We tell you what is available.", hi: "बुकिंग के समय महिला या पुरुष केयरगिवर माँगें। हम बताएँगे कि कौन उपलब्ध है।" } },
    { i: "siren", alert: true, t: { en: "Emergencies come first", hi: "आपातकाल पहले" }, d: { en: "For a medical emergency, call 102 / 108 (ambulance) FIRST. We provide care at home, not emergency treatment.", hi: "चिकित्सकीय आपातकाल में पहले 102 / 108 (एम्बुलेंस) पर कॉल करें। हम घर पर देखभाल देते हैं, आपातकालीन इलाज नहीं।" } },
  ],

  /* SAMPLE reviews. Replace them with real customer feedback and add  real: true  to each real one.
     While the site is not live they show with a "Sample" tag. Once the site is live, sample reviews
     are hidden automatically, so invented testimonials never go public. */
  reviews: [
    { q: { en: "My father needed care after his surgery and I was in another city. The caregiver was patient and kept me updated every day. It gave me real peace of mind.", hi: "ऑपरेशन के बाद पिताजी को देखभाल चाहिए थी और मैं दूसरे शहर में था। केयरगिवर धैर्यवान था और रोज़ जानकारी देता था। बहुत सुकून मिला।" }, w: { en: "Patient Care family", hi: "मरीज़ की देखभाल, परिवार" } },
    { q: { en: "My mother has Alzheimer's. The caregiver understood her routine and was always calm and kind with her.", hi: "माँ को अल्ज़ाइमर है। केयरगिवर ने उनकी दिनचर्या समझी और हमेशा शांत और स्नेह से पेश आया।" }, w: { en: "Alzheimer's Care family", hi: "अल्ज़ाइमर देखभाल, परिवार" } },
    { q: { en: "Punctual, polite and caring. The injections were done properly and everything was explained to us.", hi: "समय पर, विनम्र और परवाह करने वाले। इंजेक्शन ठीक से लगे और सब कुछ हमें समझाया गया।" }, w: { en: "Nursing Procedures customer", hi: "नर्सिंग प्रक्रियाएँ, ग्राहक" } },
    { q: { en: "We needed someone for the baby at night so we could rest. Gentle, trained and trustworthy.", hi: "रात में बच्चे के लिए किसी की ज़रूरत थी ताकि हम आराम कर सकें। कोमल, प्रशिक्षित और भरोसेमंद।" }, w: { en: "Baby Care family", hi: "बेबी केयर, परिवार" } },
    { q: { en: "Rates were clear from the start and there were no surprises. The team answered every call.", hi: "दरें शुरू से साफ़ थीं और कोई हैरानी नहीं हुई। टीम ने हर कॉल उठाई।" }, w: { en: "Elder Care family", hi: "बुज़ुर्ग देखभाल, परिवार" } },
    { q: { en: "Bahut achhi service. Ghar par hi poori dekhbhal mil gayi, hospital ke chakkar bach gaye.", hi: "बहुत अच्छी सेवा। घर पर ही पूरी देखभाल मिल गई, अस्पताल के चक्कर बच गए।" }, w: { en: "Critical Care family", hi: "क्रिटिकल केयर, परिवार" } },
  ],

  faq: [
    { q: { en: "How do I book?", hi: "बुकिंग कैसे करें?" }, a: { en: "Message or call us, or fill the short form on this page. You see the rate before you confirm, and our team confirms everything on WhatsApp.", hi: "हमें मैसेज या कॉल करें, या इस पेज का छोटा फ़ॉर्म भरें। कन्फ़र्म करने से पहले दर दिखती है और हमारी टीम WhatsApp पर सब पक्का करती है।" } },
    { q: { en: "How do your rates work?", hi: "आपकी दरें कैसे काम करती हैं?" }, a: { en: "Every care service has four rates: hourly, 8 hours, day care and 24 hours. Choose what fits the need. The full rate list is on this page.", hi: "हर देखभाल सेवा की चार दरें हैं: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे। ज़रूरत के हिसाब से चुनें। पूरी रेट लिस्ट इसी पेज पर है।" } },
    { q: { en: "Is there a travel charge?", hi: "क्या यात्रा शुल्क लगता है?" }, a: { en: "Travel charge is ₹7.80 per km above 5 km.", hi: "5 किमी से ऊपर ₹7.80 प्रति किमी यात्रा शुल्क लगता है।" } },
    { q: { en: "Can I ask for a female caregiver?", hi: "क्या महिला केयरगिवर मिल सकती है?" }, a: { en: "Yes. Tell us when you book and we will confirm who is available.", hi: "हाँ। बुकिंग के समय बताएँ, हम बताएँगे कि कौन उपलब्ध है।" } },
    { q: { en: "Do you give injections or place catheters?", hi: "क्या आप इंजेक्शन या कैथेटर लगाते हैं?" }, a: { en: "Yes. Foley catheter, IV and IM injections are done by trained staff at home, only on your doctor's prescription.", hi: "हाँ। फ़ॉली कैथेटर, IV और IM इंजेक्शन प्रशिक्षित स्टाफ़ घर पर लगाता है, केवल आपके डॉक्टर के पर्चे पर।" } },
    { q: { en: "What is Home ICU Setup?", hi: "होम ICU सेटअप क्या है?" }, a: { en: "A complete ICU set up at home with 2 nursing staff and 1 general duty assistant (GDA). Message us and our team will explain what is included.", hi: "घर पर पूरा ICU सेटअप, 2 नर्सिंग स्टाफ़ और 1 जनरल ड्यूटी असिस्टेंट (GDA) के साथ। हमें मैसेज करें, हमारी टीम बताएगी कि क्या-क्या शामिल है।" } },
    { q: { en: "Can I change or cancel a booking?", hi: "क्या बुकिंग बदल या रद्द कर सकते हैं?" }, a: { en: "Yes, just message us on WhatsApp. We will help you extend, change or stop the care.", hi: "हाँ, WhatsApp पर मैसेज करें। हम देखभाल बढ़ाने, बदलने या रोकने में मदद करेंगे।" } },
    { q: { en: "Which areas do you cover?", hi: "आप किन इलाक़ों में सेवा देते हैं?" }, a: { en: "We serve {city} and nearby areas. Message us your location and we will confirm.", hi: "हम {city} और आसपास के इलाक़ों में सेवा देते हैं। अपनी जगह मैसेज करें, हम पुष्टि करेंगे।" } },
  ],
};
