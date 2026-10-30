/* ==========================================================================
   SEO CONTENT for the build (not shipped to visitors as a file).
   One landing page per service. Every text is { en, hi }.
   Tokens: {city} {brand} are filled from js/config.js.
           {from} = lowest hourly rate of the service, {foley} {iv} {im} {icu} = rates from js/content.js.
   Keep each page unique: the text below is what Google reads for that page.
   ========================================================================== */
module.exports = {
  /* short intro shown on the home page under the hero (helps the page rank for "home care in {city}") */
  home: {
    h2: { en: "Home care services in {city}", hi: "{city} में होम केयर सेवाएँ" },
    p: [
      {
        en: "{brand} Home Care brings trained nurses, caregivers and attendants to your home in {city}. Whether a parent needs daily support, a patient is recovering after surgery, or a newborn needs gentle care, our team looks after your loved ones in the comfort of their own home.",
        hi: "{brand} होम केयर {city} में आपके घर पर प्रशिक्षित नर्स, केयरगिवर और अटेंडेंट भेजता है। चाहे माता-पिता को रोज़ की मदद चाहिए हो, कोई मरीज़ ऑपरेशन के बाद ठीक हो रहा हो, या नवजात को कोमल देखभाल चाहिए, हमारी टीम आपके अपनों का ध्यान उनके अपने घर में रखती है।",
      },
      {
        en: "Our services include patient care, elder care, critical care, Alzheimer's care, Parkinson's care, tracheostomy care, baby care and attendant services, along with nursing procedures such as Foley catheter, IV and IM injections, and complete Home ICU Setup. Every care service has clear rates: hourly, 8 hours, day care and 24 hours.",
        hi: "हमारी सेवाओं में मरीज़ की देखभाल, बुज़ुर्ग देखभाल, क्रिटिकल केयर, अल्ज़ाइमर देखभाल, पार्किंसन देखभाल, ट्रेकियोस्टोमी देखभाल, बेबी केयर और अटेंडेंट शामिल हैं। साथ में फ़ॉली कैथेटर, IV और IM इंजेक्शन जैसी नर्सिंग प्रक्रियाएँ और पूरा होम ICU सेटअप भी। हर देखभाल सेवा की साफ़ दरें हैं: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे।",
      },
    ],
  },

  /* per-service landing pages */
  services: {
    patient: {
      slug: "patient-care",
      alt: { en: "Nurse caring for a patient resting in bed at home", hi: "घर पर बिस्तर पर आराम कर रहे मरीज़ की देखभाल करती नर्स" },
      desc: { en: "Trained patient care at home in {city} for bedridden, post-surgery and recovering patients. Hourly, 8-hour, day and 24-hour care from {from}.", hi: "{city} में घर पर बिस्तर पर, ऑपरेशन के बाद और ठीक हो रहे मरीज़ों की प्रशिक्षित देखभाल। प्रति घंटा, 8 घंटे, डे और 24 घंटे की सेवा {from} से।" },
      intro: { en: "When someone you love is bedridden, recovering from surgery or too unwell to manage alone, the hospital is not the only place to heal. Our trained caregivers look after the patient at home, so recovery happens among family, in a familiar room.", hi: "जब आपका कोई अपना बिस्तर पर हो, ऑपरेशन के बाद ठीक हो रहा हो या अकेले संभल न पा रहा हो, तो ठीक होने की जगह सिर्फ़ अस्पताल नहीं है। हमारे प्रशिक्षित केयरगिवर मरीज़ की देखभाल घर पर करते हैं, ताकि सेहत अपनों के बीच, जानी-पहचानी जगह में सुधरे।" },
      more: { en: ["Turning and positioning to help prevent bedsores", "Help with toileting, dressing and personal hygiene"], hi: ["बेडसोर से बचाव के लिए करवट बदलवाना और सही स्थिति में रखना", "शौच, कपड़े पहनाने और सफ़ाई में मदद"] },
      who: { en: "Families of bedridden patients, people recovering after surgery or a hospital stay, and anyone who needs steady help with daily activities.", hi: "बिस्तर पर पड़े मरीज़ों के परिवार, ऑपरेशन या अस्पताल के बाद ठीक हो रहे लोग, और वे सभी जिन्हें रोज़ के कामों में लगातार मदद चाहिए।" },
      faq: [
        { q: { en: "Can the caregiver stay overnight?", hi: "क्या केयरगिवर रात में रुक सकता है?" }, a: { en: "Yes. Choose the 24-hour or day care rate, or book an 8-hour shift for the night. Tell us the schedule when you book.", hi: "हाँ। 24 घंटे या डे केयर की दर चुनें, या रात के लिए 8 घंटे की शिफ़्ट बुक करें। बुकिंग के समय अपना शेड्यूल बताएँ।" } },
        { q: { en: "Does the caregiver give medicines?", hi: "क्या केयरगिवर दवा देता है?" }, a: { en: "They remind and assist with medicines exactly as prescribed by your doctor. Clinical procedures are done only on a doctor's prescription.", hi: "वे आपके डॉक्टर के पर्चे के अनुसार दवा की याद दिलाते और मदद करते हैं। चिकित्सकीय प्रक्रियाएँ केवल डॉक्टर के पर्चे पर होती हैं।" } },
      ],
    },

    elder: {
      slug: "elder-care",
      alt: { en: "Caregiver walking with an elderly woman in a park", hi: "पार्क में बुज़ुर्ग महिला के साथ टहलती केयरगिवर" },
      desc: { en: "Compassionate elder care at home in {city}: companionship, daily support and medicine reminders for senior citizens. Care from {from} per hour.", hi: "{city} में घर पर बुज़ुर्गों की स्नेहपूर्ण देखभाल: साथ, रोज़ की मदद और दवा की याद। देखभाल {from} प्रति घंटा से।" },
      intro: { en: "Growing older should not mean giving up the comfort of home. Our elder care caregivers give seniors company, daily-living support and gentle supervision, so they stay safe, active and cheerful in their own surroundings.", hi: "बुढ़ापे का मतलब घर का आराम छोड़ना नहीं होना चाहिए। हमारे बुज़ुर्ग देखभाल केयरगिवर साथ, रोज़ की मदद और कोमल निगरानी देते हैं, ताकि बुज़ुर्ग अपने ही माहौल में सुरक्षित, सक्रिय और खुश रहें।" },
      more: { en: ["Walks, light exercise and conversation", "Help with meals, bathing and dressing"], hi: ["सैर, हल्का व्यायाम और बातचीत", "भोजन, नहाने और कपड़े पहनने में मदद"] },
      who: { en: "Senior citizens living alone, elders whose children live in another city, and families who need relief from round-the-clock caregiving.", hi: "अकेले रहने वाले बुज़ुर्ग, वे बुज़ुर्ग जिनके बच्चे दूसरे शहर में हैं, और वे परिवार जिन्हें चौबीसों घंटे की देखभाल से राहत चाहिए।" },
      faq: [
        { q: { en: "Can you send the same caregiver every day?", hi: "क्या रोज़ वही केयरगिवर आ सकता है?" }, a: { en: "We try to keep one caregiver with each family so the elder gets to know and trust them. Tell us this when you book.", hi: "हम कोशिश करते हैं कि हर परिवार के साथ एक ही केयरगिवर रहे, ताकि बुज़ुर्ग उन्हें जानें और भरोसा करें। बुकिंग के समय बताएँ।" } },
        { q: { en: "What if my parent has memory problems?", hi: "अगर मेरे माता-पिता को याददाश्त की समस्या है तो?" }, a: { en: "We also offer dedicated Alzheimer's care with a routine built for memory loss. Ask us and we will suggest the right service.", hi: "हमारे पास याददाश्त की कमी के लिए बनी दिनचर्या वाली अल्ज़ाइमर देखभाल भी है। हमसे पूछें, हम सही सेवा सुझाएँगे।" } },
      ],
    },

    critical: {
      slug: "critical-care",
      alt: { en: "Nurse monitoring a patient's vitals at home", hi: "घर पर मरीज़ के वाइटल्स की निगरानी करती नर्स" },
      desc: { en: "Skilled critical care nursing at home in {city}: close monitoring and care as advised by your doctor. Hourly, 8-hour, day and 24-hour rates from {from}.", hi: "{city} में घर पर कुशल क्रिटिकल केयर नर्सिंग: नज़दीकी निगरानी और डॉक्टर की सलाह अनुसार देखभाल। प्रति घंटा, 8 घंटे, डे और 24 घंटे की दरें {from} से।" },
      intro: { en: "Some patients need close monitoring even after leaving the hospital. Our critical care support brings skilled nursing attention home, so the patient is watched carefully and the family is kept informed, always under your treating doctor's advice.", hi: "कुछ मरीज़ों को अस्पताल से लौटने के बाद भी नज़दीकी निगरानी चाहिए। हमारी क्रिटिकल केयर सहायता कुशल नर्सिंग ध्यान घर ले आती है, ताकि मरीज़ पर बारीकी से नज़र रहे और परिवार को जानकारी मिलती रहे, हमेशा आपके इलाज करने वाले डॉक्टर की सलाह के अनुसार।" },
      more: { en: ["Regular checks of pulse, blood pressure and oxygen level", "Prompt alert to the family and the doctor if something changes"], hi: ["नब्ज़, ब्लड प्रेशर और ऑक्सीजन लेवल की नियमित जाँच", "कुछ बदलने पर परिवार और डॉक्टर को तुरंत सूचना"] },
      who: { en: "Patients discharged from the ICU or hospital who still need close monitoring, and families who want skilled supervision at home.", hi: "ICU या अस्पताल से छुट्टी पाए वे मरीज़ जिन्हें अभी भी नज़दीकी निगरानी चाहिए, और वे परिवार जो घर पर कुशल निगरानी चाहते हैं।" },
      faq: [
        { q: { en: "Is this the same as Home ICU Setup?", hi: "क्या ये होम ICU सेटअप जैसा ही है?" }, a: { en: "No. Critical care is skilled nursing support for monitoring at home. Home ICU Setup is a complete ICU arrangement with two nursing staff and a GDA. We will help you choose.", hi: "नहीं। क्रिटिकल केयर घर पर निगरानी के लिए कुशल नर्सिंग सहायता है। होम ICU सेटअप दो नर्सिंग स्टाफ़ और एक GDA के साथ पूरा ICU इंतज़ाम है। चुनने में हम मदद करेंगे।" } },
        { q: { en: "Do you give emergency treatment?", hi: "क्या आप आपातकालीन इलाज देते हैं?" }, a: { en: "No. In an emergency call 102 or 108 first. We provide care at home as advised by your doctor.", hi: "नहीं। आपातकाल में पहले 102 या 108 पर कॉल करें। हम आपके डॉक्टर की सलाह अनुसार घर पर देखभाल देते हैं।" } },
      ],
    },

    alzheimer: {
      slug: "alzheimers-care",
      alt: { en: "Caregiver sitting with an elderly woman and a puzzle", hi: "बुज़ुर्ग महिला के साथ पहेली खेलती केयरगिवर" },
      desc: { en: "Patient, memory-friendly Alzheimer's and dementia care at home in {city}: steady routine, safety and calm company. Rates from {from} per hour.", hi: "{city} में घर पर धैर्य से अल्ज़ाइमर और डिमेंशिया देखभाल: तय दिनचर्या, सुरक्षा और शांत साथ। दरें {from} प्रति घंटा से।" },
      intro: { en: "Caring for someone with Alzheimer's or dementia takes patience, routine and a calm voice. Our caregivers build a gentle daily rhythm, keep the home safe and offer company that reassures instead of rushes.", hi: "अल्ज़ाइमर या डिमेंशिया के मरीज़ की देखभाल में धैर्य, दिनचर्या और शांत आवाज़ चाहिए। हमारे केयरगिवर कोमल दिनचर्या बनाते हैं, घर को सुरक्षित रखते हैं और ऐसा साथ देते हैं जो भरोसा दिलाए, जल्दबाज़ी न करे।" },
      more: { en: ["Reminders for meals, medicines and daily routine", "Calm redirection and gentle activities such as puzzles and music"], hi: ["भोजन, दवा और दिनचर्या की याद दिलाना", "शांति से ध्यान बँटाना और पहेली, संगीत जैसी हल्की गतिविधियाँ"] },
      who: { en: "Families of people living with Alzheimer's, dementia or age-related memory loss, including those who need a break from constant supervision.", hi: "अल्ज़ाइमर, डिमेंशिया या उम्र से जुड़ी याददाश्त की कमी वाले लोगों के परिवार, खासकर वे जिन्हें लगातार निगरानी से थोड़ा आराम चाहिए।" },
      faq: [
        { q: { en: "Can the caregiver prevent wandering?", hi: "क्या केयरगिवर मरीज़ को भटकने से रोक सकता है?" }, a: { en: "They stay alert, keep doors and surroundings safe and gently guide the person back, but the family's awareness is still important. We will talk through a safety plan with you.", hi: "वे सतर्क रहते हैं, दरवाज़ों और आसपास को सुरक्षित रखते हैं और धीरे से मरीज़ को वापस ले आते हैं, फिर भी परिवार की सतर्कता ज़रूरी है। हम आपके साथ सुरक्षा योजना पर बात करेंगे।" } },
        { q: { en: "Is 24-hour care available?", hi: "क्या 24 घंटे की देखभाल मिलती है?" }, a: { en: "Yes. Choose the 24-hour rate, or day care for the daytime only.", hi: "हाँ। 24 घंटे की दर चुनें, या सिर्फ़ दिन के लिए डे केयर।" } },
      ],
    },

    parkinson: {
      slug: "parkinsons-care",
      alt: { en: "Caregiver helping an elderly man walk with a walker", hi: "वॉकर के सहारे चलते बुज़ुर्ग की मदद करती केयरगिवर" },
      desc: { en: "Parkinson's care at home in {city}: help with movement, medicines on time and fall prevention. Hourly, 8-hour, day and 24-hour care from {from}.", hi: "{city} में घर पर पार्किंसन देखभाल: चलने-फिरने में मदद, समय पर दवा और गिरने से बचाव। प्रति घंटा, 8 घंटे, डे और 24 घंटे की देखभाल {from} से।" },
      intro: { en: "Parkinson's can make everyday movement slow and unsteady. Our caregivers give steady support while walking, getting up and managing the day, and make sure medicines are taken on time as prescribed.", hi: "पार्किंसन में रोज़ का चलना-फिरना धीमा और अस्थिर हो सकता है। हमारे केयरगिवर चलने, उठने और दिन के कामों में स्थिर सहारा देते हैं और पर्चे के अनुसार समय पर दवा सुनिश्चित करते हैं।" },
      more: { en: ["Support with transfers, such as getting out of bed or a chair", "Help with exercises suggested by the physiotherapist"], hi: ["बिस्तर या कुर्सी से उठने-बैठने में सहारा", "फ़िज़ियोथेरेपिस्ट द्वारा बताए व्यायाम में मदद"] },
      who: { en: "People living with Parkinson's, and families who worry about falls and missed medicine times.", hi: "पार्किंसन के मरीज़, और वे परिवार जिन्हें गिरने और दवा का समय चूकने की चिंता रहती है।" },
      faq: [
        { q: { en: "Can the caregiver help with physiotherapy exercises?", hi: "क्या केयरगिवर फ़िज़ियोथेरेपी के व्यायाम में मदद कर सकता है?" }, a: { en: "They can assist with exercises your physiotherapist or doctor has advised. They do not replace a physiotherapist.", hi: "आपके फ़िज़ियोथेरेपिस्ट या डॉक्टर ने जो व्यायाम बताए हैं, उनमें वे मदद कर सकते हैं। वे फ़िज़ियोथेरेपिस्ट की जगह नहीं लेते।" } },
        { q: { en: "Do you help with medicine timing?", hi: "क्या आप दवा के समय में मदद करते हैं?" }, a: { en: "Yes. They remind and assist as per the doctor's prescription, which matters a lot with Parkinson's medicines.", hi: "हाँ। वे डॉक्टर के पर्चे के अनुसार याद दिलाते और मदद करते हैं, जो पार्किंसन की दवाओं में बहुत मायने रखता है।" } },
      ],
    },

    trach: {
      slug: "tracheostomy-care",
      alt: { en: "Nurse providing tracheostomy care at the bedside", hi: "बिस्तर के पास ट्रेकियोस्टोमी देखभाल करती नर्स" },
      desc: { en: "Trained tracheostomy care at home in {city}: tube care, cleaning and suction as advised by your doctor. Hourly, 8-hour, day and 24-hour rates from {from}.", hi: "{city} में घर पर प्रशिक्षित ट्रेकियोस्टोमी देखभाल: ट्यूब की देखभाल, सफ़ाई और सक्शन, डॉक्टर की सलाह अनुसार। प्रति घंटा, 8 घंटे, डे और 24 घंटे की दरें {from} से।" },
      intro: { en: "A tracheostomy tube needs careful, regular attention. Our trained staff handle tube care, cleaning and suction at home, and watch for signs that need the doctor, so the patient can recover in comfort.", hi: "ट्रेकियोस्टोमी ट्यूब को सावधानी और नियमित ध्यान चाहिए। हमारा प्रशिक्षित स्टाफ़ घर पर ट्यूब की देखभाल, सफ़ाई और सक्शन संभालता है और डॉक्टर की ज़रूरत वाले संकेतों पर नज़र रखता है, ताकि मरीज़ आराम से ठीक हो सके।" },
      more: { en: ["Cleaning of the tube and the skin around it", "Suction when needed, as advised by your doctor"], hi: ["ट्यूब और आसपास की त्वचा की सफ़ाई", "ज़रूरत पड़ने पर सक्शन, डॉक्टर की सलाह अनुसार"] },
      who: { en: "Patients with a tracheostomy who are going home, and families who are not confident handling the tube alone.", hi: "घर लौट रहे ट्रेकियोस्टोमी वाले मरीज़, और वे परिवार जो अकेले ट्यूब संभालने में आश्वस्त नहीं हैं।" },
      faq: [
        { q: { en: "Will the nurse work as per my doctor's instructions?", hi: "क्या नर्स मेरे डॉक्टर के निर्देश अनुसार काम करेगी?" }, a: { en: "Yes. All clinical care follows your treating doctor's advice and prescription.", hi: "हाँ। सारी चिकित्सकीय देखभाल आपके इलाज करने वाले डॉक्टर की सलाह और पर्चे के अनुसार होती है।" } },
        { q: { en: "Do I need 24-hour care?", hi: "क्या मुझे 24 घंटे की देखभाल चाहिए?" }, a: { en: "That depends on the patient's condition and your doctor's advice. We offer hourly, 8-hour, day and 24-hour options.", hi: "ये मरीज़ की हालत और आपके डॉक्टर की सलाह पर निर्भर है। हम प्रति घंटा, 8 घंटे, डे और 24 घंटे के विकल्प देते हैं।" } },
      ],
    },

    baby: {
      slug: "baby-care",
      alt: { en: "Caregiver gently holding a newborn baby in a nursery", hi: "नर्सरी में नवजात को गोद में लिए केयरगिवर" },
      desc: { en: "Gentle, trained baby care at home in {city} for newborns and infants: feeding, bathing and sleep routine. Care from {from} per hour.", hi: "{city} में घर पर नवजात और शिशुओं की कोमल, प्रशिक्षित देखभाल: दूध, नहलाना और सोने की दिनचर्या। देखभाल {from} प्रति घंटा से।" },
      intro: { en: "The first weeks with a baby are joyful and exhausting. Our baby care caregivers look after the little one with gentle, safe handling, so parents can sleep, recover and enjoy the time.", hi: "बच्चे के साथ शुरुआती हफ़्ते खुशी के भी होते हैं और थका देने वाले भी। हमारे बेबी केयर केयरगिवर नन्हे बच्चे को कोमल और सुरक्षित तरीक़े से संभालते हैं, ताकि माता-पिता सो सकें, ठीक हो सकें और इस समय का आनंद ले सकें।" },
      more: { en: ["Safe handling, burping and settling the baby to sleep", "Cleaning and sterilising feeding items"], hi: ["सुरक्षित तरीक़े से उठाना, डकार दिलाना और सुलाना", "दूध की बोतल और सामान की सफ़ाई"] },
      who: { en: "New parents, mothers recovering after delivery, and families with a newborn or infant who need trained help by day or by night.", hi: "नए माता-पिता, डिलीवरी के बाद ठीक हो रही माँएँ, और नवजात या शिशु वाले परिवार जिन्हें दिन या रात में प्रशिक्षित मदद चाहिए।" },
      faq: [
        { q: { en: "Can a caregiver stay at night?", hi: "क्या केयरगिवर रात में रुक सकता है?" }, a: { en: "Yes. Choose the 8-hour night shift or the 24-hour rate.", hi: "हाँ। रात की 8 घंटे की शिफ़्ट या 24 घंटे की दर चुनें।" } },
        { q: { en: "Is the caregiver trained for newborns?", hi: "क्या केयरगिवर नवजात के लिए प्रशिक्षित है?" }, a: { en: "Our baby care caregivers are trained in safe handling and hygiene. Tell us the baby's age and any medical needs when you book.", hi: "हमारे बेबी केयर केयरगिवर सुरक्षित तरीक़े से संभालने और सफ़ाई में प्रशिक्षित हैं। बुकिंग के समय बच्चे की उम्र और कोई चिकित्सकीय ज़रूरत बताएँ।" } },
      ],
    },

    attendant: {
      slug: "attendant",
      alt: { en: "Attendant assisting a patient in a wheelchair at a hospital", hi: "अस्पताल में व्हीलचेयर पर बैठे मरीज़ की मदद करता अटेंडेंट" },
      desc: { en: "Reliable patient attendants at home or hospital in {city}: staying with the patient, moving, fetching and daily tasks. Rates from {from} per hour.", hi: "{city} में घर या अस्पताल में भरोसेमंद पेशेंट अटेंडेंट: मरीज़ के साथ रहना, उठाना-बिठाना, सामान लाना और रोज़ के काम। दरें {from} प्रति घंटा से।" },
      intro: { en: "A patient should never be left alone, but family cannot always be there. Our attendants stay with the patient at home or in the hospital, help with moving and fetching, and call you when anything is needed.", hi: "मरीज़ को कभी अकेला नहीं छोड़ना चाहिए, पर परिवार हर समय साथ नहीं रह सकता। हमारे अटेंडेंट घर या अस्पताल में मरीज़ के साथ रहते हैं, उठाने-बिठाने और सामान लाने में मदद करते हैं, और कुछ भी ज़रूरत हो तो आपको फ़ोन करते हैं।" },
      more: { en: ["Help with moving, sitting up and getting to the washroom", "Fetching medicines, reports and everyday items"], hi: ["उठाने-बिठाने और शौचालय तक ले जाने में मदद", "दवा, रिपोर्ट और रोज़ का सामान लाना"] },
      who: { en: "Families with a patient in hospital or at home who need an extra pair of hands, by day or by night.", hi: "वे परिवार जिनका मरीज़ अस्पताल या घर पर है और जिन्हें दिन या रात में एक अतिरिक्त सहारा चाहिए।" },
      faq: [
        { q: { en: "Can an attendant stay in the hospital?", hi: "क्या अटेंडेंट अस्पताल में रुक सकता है?" }, a: { en: "Yes, subject to the hospital's rules for attendants. Tell us the hospital and ward when you book.", hi: "हाँ, अस्पताल के अटेंडेंट नियमों के अनुसार। बुकिंग के समय अस्पताल और वार्ड बताएँ।" } },
        { q: { en: "What is the difference between an attendant and a nurse?", hi: "अटेंडेंट और नर्स में क्या फ़र्क है?" }, a: { en: "An attendant helps with daily tasks and stays with the patient. Nursing procedures such as injections are done by trained nursing staff on a doctor's prescription.", hi: "अटेंडेंट रोज़ के कामों में मदद करता है और मरीज़ के साथ रहता है। इंजेक्शन जैसी नर्सिंग प्रक्रियाएँ प्रशिक्षित नर्सिंग स्टाफ़ डॉक्टर के पर्चे पर करता है।" } },
      ],
    },

    procedures: {
      slug: "nursing-procedures",
      alt: { en: "Nurse preparing an injection for a patient at home", hi: "घर पर मरीज़ के लिए इंजेक्शन तैयार करती नर्स" },
      desc: { en: "Foley catheter, IV and IM injections at home in {city} by trained staff, on your doctor's prescription. Foley {foley}, IV {iv}, IM {im}.", hi: "{city} में घर पर प्रशिक्षित स्टाफ़ द्वारा फ़ॉली कैथेटर, IV और IM इंजेक्शन, आपके डॉक्टर के पर्चे पर। फ़ॉली {foley}, IV {iv}, IM {im}।" },
      intro: { en: "Sometimes a patient only needs a nursing procedure, not a full shift. Our trained staff come to your home for a Foley catheter, an IV injection or an IM injection, strictly on your doctor's prescription.", hi: "कभी-कभी मरीज़ को पूरी शिफ़्ट नहीं, सिर्फ़ एक नर्सिंग प्रक्रिया चाहिए होती है। हमारा प्रशिक्षित स्टाफ़ फ़ॉली कैथेटर, IV या IM इंजेक्शन के लिए आपके घर आता है, सख़्ती से आपके डॉक्टर के पर्चे पर।" },
      points: { en: ["Foley catheter, IV injection and IM injection", "Clean, careful technique and safe disposal", "Clear explanation to the patient and family"], hi: ["फ़ॉली कैथेटर, IV इंजेक्शन और IM इंजेक्शन", "साफ़-सुथरा, सावधान तरीक़ा और सुरक्षित निपटान", "मरीज़ और परिवार को साफ़ जानकारी"] },
      who: { en: "Patients who have been prescribed injections or a catheter and would rather not travel to a clinic or hospital.", hi: "वे मरीज़ जिन्हें इंजेक्शन या कैथेटर का पर्चा मिला है और जो क्लिनिक या अस्पताल जाने से बचना चाहते हैं।" },
      faq: [
        { q: { en: "Do I need a prescription?", hi: "क्या पर्चा ज़रूरी है?" }, a: { en: "Yes. We carry out procedures only as prescribed by your treating doctor. Please keep the prescription ready.", hi: "हाँ। हम प्रक्रियाएँ केवल आपके इलाज करने वाले डॉक्टर के पर्चे अनुसार करते हैं। कृपया पर्चा तैयार रखें।" } },
        { q: { en: "How much do the procedures cost?", hi: "प्रक्रियाओं का शुल्क कितना है?" }, a: { en: "Foley catheter {foley}, IV injection {iv} and IM injection {im}, as per our rate list. Our team confirms the final amount when you book.", hi: "फ़ॉली कैथेटर {foley}, IV इंजेक्शन {iv} और IM इंजेक्शन {im}, हमारी रेट लिस्ट के अनुसार। बुकिंग के समय हमारी टीम अंतिम राशि बताती है।" } },
      ],
    },

    icu: {
      slug: "home-icu-setup",
      alt: { en: "ICU bed, monitor and nursing staff set up at home", hi: "घर पर ICU बेड, मॉनिटर और नर्सिंग स्टाफ़ का सेटअप" },
      desc: { en: "Complete Home ICU Setup in {city} with 2 nursing staff and 1 GDA, fully set up, for patients who need ICU-level care at home. Price {icu}.", hi: "{city} में 2 नर्सिंग स्टाफ़ और 1 GDA के साथ पूरा होम ICU सेटअप, उन मरीज़ों के लिए जिन्हें घर पर ICU जैसी देखभाल चाहिए। कीमत {icu}।" },
      intro: { en: "When a patient needs ICU-level care but the family wants them at home, a complete home ICU can be arranged. We set up the care area with the required equipment and provide trained nursing staff and a general duty assistant.", hi: "जब मरीज़ को ICU जैसी देखभाल चाहिए पर परिवार उन्हें घर पर रखना चाहता है, तो पूरा होम ICU तैयार किया जा सकता है। हम ज़रूरी उपकरणों के साथ देखभाल की जगह तैयार करते हैं और प्रशिक्षित नर्सिंग स्टाफ़ और एक जनरल ड्यूटी असिस्टेंट देते हैं।" },
      points: { en: ["2 nursing staff and 1 GDA", "A fully set-up ICU care area at home", "Our team explains the details before you decide"], hi: ["2 नर्सिंग स्टाफ़ और 1 GDA", "घर पर पूरी तरह तैयार ICU देखभाल की जगह", "फ़ैसले से पहले हमारी टीम सारी जानकारी समझाती है"] },
      who: { en: "Families whose doctor has advised ICU-level care and who want the patient to be looked after at home.", hi: "वे परिवार जिनके डॉक्टर ने ICU जैसी देखभाल की सलाह दी है और जो मरीज़ को घर पर रखना चाहते हैं।" },
      faq: [
        { q: { en: "What does Home ICU Setup include?", hi: "होम ICU सेटअप में क्या शामिल है?" }, a: { en: "It includes 2 nursing staff and 1 GDA with a fully set-up ICU at home. Message us and our team will explain exactly what is included for your case.", hi: "इसमें घर पर पूरे तैयार ICU के साथ 2 नर्सिंग स्टाफ़ और 1 GDA शामिल हैं। हमें मैसेज करें, हमारी टीम आपके मामले में क्या-क्या शामिल है, ठीक-ठीक बताएगी।" } },
        { q: { en: "Is a doctor's advice required?", hi: "क्या डॉक्टर की सलाह ज़रूरी है?" }, a: { en: "Yes. Home ICU care should be planned with your treating doctor. We work within your doctor's instructions.", hi: "हाँ। होम ICU देखभाल आपके इलाज करने वाले डॉक्टर के साथ तय होनी चाहिए। हम आपके डॉक्टर के निर्देशों के भीतर काम करते हैं।" } },
      ],
    },
  },

  /* extra questions for the dedicated rate-list page */
  rateFaq: [
    { q: { en: "What are your home care rates?", hi: "आपकी होम केयर दरें क्या हैं?" }, a: { en: "Every care service has four rates: hourly, 8 hours, day care and 24 hours. Care starts from {from} per hour. Nursing procedures and Home ICU Setup have their own rates, all listed on this page.", hi: "हर देखभाल सेवा की चार दरें हैं: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे। देखभाल {from} प्रति घंटा से शुरू होती है। नर्सिंग प्रक्रियाओं और होम ICU सेटअप की अपनी दरें हैं, सब इसी पेज पर।" } },
    { q: { en: "Is there a travel charge?", hi: "क्या यात्रा शुल्क लगता है?" }, a: { en: "Travel charge is ₹7.80 per km above 5 km.", hi: "5 किमी से ऊपर ₹7.80 प्रति किमी यात्रा शुल्क लगता है।" } },
    { q: { en: "How do I pay?", hi: "भुगतान कैसे करूँ?" }, a: { en: "Our team confirms the final amount and the payment method on WhatsApp or phone before the care begins.", hi: "देखभाल शुरू होने से पहले हमारी टीम WhatsApp या फ़ोन पर अंतिम राशि और भुगतान का तरीक़ा पक्का करती है।" } },
  ],
};
