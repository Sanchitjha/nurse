/* Trusbee "Book your Bee 🐝" form — website demo copy (homepage phone).
   Same screens, words, checks and prices as the real WhatsApp form (bot p20, book.trusbee.in):
   Service → Need → When → Where → Review → "Confirm on WhatsApp". Prices come from TB_PRICING (the site's price card,
   synced with the bot): base + 18% GST (CGST 9% + SGST 9%, each rounded), 2 hours capped at the 3-hour plan,
   night prices for 6/9/12-hour plans with 3+ hours between 10 PM and 6 AM, Driver plans named "… Drive".
   Nothing here books anything. window.TBForm = { open, auto, close, ctaHtml, summaryHtml, planBillHtml, howtoHtml, T }. */
(function () {
  "use strict";
  var DATA = {"desc":{"hospital":["Doctor visits, admission, tests","डॉक्टर, भर्ती, जाँच","डॉक्टर, भर्ती, जाँच"],"elderly":["Company and daily help for parents","माता-पिता के लिए साथ और रोज़ की मदद","माई-बाबूजी खातिर साथ आ रोज के मदद"],"personal":["Errands, offices, repairs, paperwork","काम-काज, दफ़्तर, रिपेयर, कागज़ी काम","काम-काज, दफ्तर, रिपेयर, कागजी काम"],"driver":["Your car, our trusted driver","आपकी कार, हमारा भरोसेमंद ड्राइवर","रउआ कार, हमनी के भरोसेमंद ड्राइवर"],"event":["Guests and function help","मेहमान और समारोह में मदद","मेहमान आ समारोह में मदद"],"compassion":["Support in times of loss","दुख की घड़ी में साथ","दुख के घड़ी में साथ"],"urgent":["Help fast, day or night — not medical care","दिन हो या रात, तुरंत मदद — इलाज नहीं","दिन होखे भा रात, तुरंत मदद — इलाज ना"]},"names":{"en":{"hospital":"Hospital Assist","elderly":"Elderly Care","urgent":"24×7 Urgent Assist","driver":"Driver Assist","personal":"Personal Assist","event":"Event Assist","bouncer":"Security Assist","compassion":"Compassion Support","pet":"Pet Care"},"hi":{"hospital":"अस्पताल सहायता","elderly":"बुज़ुर्ग देखभाल","urgent":"24×7 अर्जेंट असिस्ट","driver":"ड्राइवर सहायता","personal":"व्यक्तिगत सहायता","event":"इवेंट सहायता","bouncer":"सुरक्षा सहायता","compassion":"सहानुभूति सहायता","pet":"पेट केयर"},"bho":{"hospital":"अस्पताल सहायता","elderly":"बुजुर्ग देखभाल","urgent":"24×7 अर्जेंट असिस्ट","driver":"ड्राइवर सहायता","personal":"व्यक्तिगत सहायता","event":"इवेंट सहायता","bouncer":"सुरक्षा सहायता","compassion":"सहानुभूति सहायता","pet":"पेट केयर"}},"cta":["*Book your Bee* 🐝\n\nNamaste! 🙏 Welcome to *Trusbee* — trusted help for your family in Patna.\n\nOur police-verified Bees help with:\n🏥 Hospital visits & check-ups\n👵 Care & company for elders\n📝 Errands, bills & paperwork\n🚗 A driver for your own car\n🎉 Help at functions & events\n🤍 Support in times of loss\n🆘 Urgent help, day or night\n\nTap below — one short form, about a minute. You see the price first, then confirm here in WhatsApp. 💛\n\n📞 Have a question, or want help booking? Call us on *+91 92881 81211* — we'll happily book your Bee for you.\n\n{URG}","*अपना Bee बुक करें* 🐝\n\nनमस्ते! 🙏 *Trusbee* में आपका स्वागत है — पटना में आपके परिवार के लिए भरोसेमंद मदद।\n\nहमारे पुलिस-वेरिफाइड Bee मदद करते हैं:\n🏥 अस्पताल और डॉक्टर के पास साथ\n👵 बुज़ुर्गों की देखभाल और साथ\n📝 काम-काज, बिल और कागज़ी काम\n🚗 आपकी कार के लिए ड्राइवर\n🎉 शादी-समारोह में मदद\n🤍 दुख की घड़ी में साथ\n🆘 दिन हो या रात, तुरंत मदद\n\nनीचे टैप करें — छोटा सा फ़ॉर्म, लगभग एक मिनट। पहले कीमत देखें, फिर यहीं WhatsApp में कन्फर्म करें। 💛\n\n📞 कोई सवाल है या बुकिंग में मदद चाहिए? हमें *+91 92881 81211* पर कॉल करें — हम ख़ुशी से आपके लिए Bee बुक कर देंगे।\n\n{URG}","*आपन Bee बुक करीं* 🐝\n\nप्रणाम! 🙏 *Trusbee* में रउआ स्वागत बा — पटना में रउआ परिवार खातिर भरोसेमंद मदद।\n\nहमनी के पुलिस-वेरिफाइड Bee मदद करेलें:\n🏥 अस्पताल आ डॉक्टर लगे साथ\n👵 बुजुर्ग के देखभाल आ साथ\n📝 काम-काज, बिल आ कागजी काम\n🚗 रउआ कार खातिर ड्राइवर\n🎉 बियाह-समारोह में मदद\n🤍 दुख के घड़ी में साथ\n🆘 दिन होखे भा रात, तुरंत मदद\n\nनीचे टैप करीं — छोट फॉर्म, करीब एक मिनट। पहिले दाम देखीं, फेर एहिजे WhatsApp में कन्फर्म करीं। 💛\n\n📞 कवनो सवाल बा भा बुकिंग में मदद चाहीं? हमनी के *+91 92881 81211* पर फोन करीं — हमनी खुशी से रउआ खातिर Bee बुक कर देब।\n\n{URG}"]};
  var LI = { en: 0, hi: 1, bho: 2 };
  function L(a, lang) { return Array.isArray(a) ? (a[LI[lang] || 0] || a[0]) : a; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function inr(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }
  function gst2(x) { return 2 * Math.round(0.09 * x); }
  function wa(s) { return esc(s).replace(/\n/g, "<br>").replace(/\*([^*\n]+?)\*/g, "<b>$1</b>"); }

  var T = {
    steps: [["Service", "Need", "When", "Where", "Review"], ["सेवा", "ज़रूरत", "कब", "कहाँ", "जाँचें"], ["सेवा", "जरूरत", "कब", "कहाँ", "जाँचीं"]],
    stepOf: ["Step {n} of 5", "चरण {n} / 5", "चरण {n} / 5"],
    hello: ["Namaste 🙏", "नमस्ते 🙏", "प्रणाम 🙏"],
    intro: ["Tell us what you need — we'll send a trusted, police-verified Bee who cares the way you would.", "बताइए क्या चाहिए — हम एक भरोसेमंद, पुलिस-वेरिफाइड Bee भेजेंगे, जो उसी अपनेपन से ख़्याल रखेगा जैसे आप रखते।", "बताईं का चाहीं — हमनी एगो भरोसेमंद, पुलिस-वेरिफाइड Bee भेजब, जे ओही अपनापन से ख्याल राखी जइसे रउआ राखतीं।"],
    svc_h: ["Who should we send help for?", "किस काम के लिए Bee भेजें?", "कवना काम खातिर Bee भेजीं?"],
    from: ["from {p}/hr", "{p}/घंटा से", "{p}/घंटा से"],
    more: ["More ways to book", "बुकिंग के और तरीके", "बुकिंग के अउर तरीका"],
    plan_h: ["Daily / recurring visits", "रोज़ / नियमित विज़िट", "रोज / नियमित विज़िट"],
    plan_d: ["The same Bee, on the days you choose", "आपके चुने दिनों पर वही Bee", "रउआ चुनल दिन पर ओही Bee"],
    plan_from: ["from ₹100 a visit · billed weekly", "₹100/विज़िट से · हर हफ़्ते बिल", "₹100/विज़िट से · हर हफ्ता बिल"],
    os_h: ["Outstation trip", "आउटस्टेशन यात्रा", "आउटस्टेशन यात्रा"],
    os_d: ["1 to 30 days · your car, our verified driver", "1 से 30 दिन · आपकी कार, हमारा वेरिफाइड ड्राइवर", "1 से 30 दिन · रउआ कार, हमनी के वेरिफाइड ड्राइवर"],
    os_from: ["from ₹1,399 a day + GST", "₹1,399/दिन + GST से", "₹1,399/दिन + GST से"],
    more_demo: ["In WhatsApp this opens its own short form. This demo shows a one-time booking.", "WhatsApp में इसका अपना छोटा फ़ॉर्म खुलता है। यह डेमो एक बार की बुकिंग दिखाता है।", "WhatsApp में एकर आपन छोट फ़ॉर्म खुलेला। ई डेमो एक बेर के बुकिंग देखावेला।"],
    change: ["Change", "बदलें", "बदलीं"], edit: ["Edit", "बदलें", "बदलीं"],
    task_h: ["What exactly do you need?", "आपको ठीक-ठीक क्या चाहिए?", "रउआ के ठीक-ठीक का चाहीं?"],
    l_note: ["Tell us more", "थोड़ा और बताएँ", "तनी अउरी बताईं"],
    opt: ["optional", "वैकल्पिक", "मन होखे त"],
    when_h: ["When should the Bee come?", "Bee कब आए?", "Bee कब आवे?"],
    l_date: ["Date", "तारीख", "तारीख"], l_time: ["Start time", "शुरू होने का समय", "शुरू होखे के समय"],
    l_plan: ["How long do you need?", "कितनी देर के लिए?", "केतना देर खातिर?"],
    today: ["Today", "आज", "आज"], tomorrow: ["Tomorrow", "कल", "काल्ह"],
    now: ["⚡ Now — Bee in ~20 min", "⚡ अभी — ~20 मिनट में Bee", "⚡ अभी — ~20 मिनट में Bee"],
    hour1: ["1 hour", "1 घंटा", "1 घंटा"], hours: ["{n} hours", "{n} घंटे", "{n} घंटा"],
    hourly_d: ["billed for the time worked", "बिल असली समय पर", "बिल असली समय पर"],
    capped: ["billed as {p} — cheaper than hourly", "{p} के दाम पर — घंटे के हिसाब से सस्ता", "{p} के दाम पर — घंटा के हिसाब से सस्ता"],
    save: ["save {x} vs hourly", "प्रति-घंटा से {x} बचत", "प्रति-घंटा से {x} बचत"],
    most: ["⭐ Most booked", "⭐ सबसे ज़्यादा बुक", "⭐ सबसे जादे बुक"], best: ["💰 Best value", "💰 सबसे किफ़ायती", "💰 सबसे किफायती"],
    night: ["night rate", "रात की दर", "रात के दर"],
    plan_note: ["Prices are shown + 18% GST. The Bee arrival fee (₹0–99, by distance) is confirmed when your Bee is assigned.", "कीमतें + 18% GST के साथ दिखाई गई हैं। Bee आगमन शुल्क (₹0–99, दूरी के हिसाब से) Bee तय होने पर बताया जाएगा।", "दाम + 18% GST के साथ देखावल गइल बा। Bee आगमन शुल्क (₹0–99, दूरी के हिसाब से) Bee तय भइला पर बताई।"],
    where_h: ["Where should the Bee go?", "Bee कहाँ जाए?", "Bee कहाँ जाव?"],
    l_addr: ["Address", "पता", "पता"], h_addr: ["House / flat, street, area — in Patna", "मकान/फ़्लैट, गली, इलाका — पटना में", "मकान/फ्लैट, गली, इलाका — पटना में"],
    l_land: ["Landmark", "लैंडमार्क", "लैंडमार्क"], l_end: ["Visit ends", "विज़िट कहाँ खत्म होगी", "विज़िट कहाँ खतम होई"],
    end_same: ["At the same place — free", "उसी जगह — मुफ़्त", "ओही जगह — मुफ्त"], end_diff: ["Somewhere else — ₹{f} return fee", "किसी और जगह — ₹{f} वापसी शुल्क", "कवनो दोसर जगह — ₹{f} वापसी शुल्क"],
    l_endaddr: ["End address", "खत्म होने का पता", "खतम होखे के पता"],
    who_h: ["Who will the Bee meet?", "Bee किससे मिलेगा?", "Bee केकरा से मिली?"],
    l_name: ["Person's name", "व्यक्ति का नाम", "आदमी के नाम"], l_phone: ["Phone number", "फ़ोन नंबर", "फोन नंबर"],
    h_phone: ["10-digit mobile — the Bee calls this on arrival", "10 अंकों का मोबाइल — Bee पहुँचकर इसी पर कॉल करेगा", "10 अंक के मोबाइल — Bee पहुँच के एही पर फोन करी"],
    l_female: ["Prefer a female Bee (9 AM – 6 PM)", "महिला Bee चाहिए (सुबह 9 – शाम 6)", "महिला Bee चाहीं (सुबह 9 – साँझ 6)"],
    female_h: ["We'll try our best to send a female Bee.", "हम महिला Bee भेजने की पूरी कोशिश करेंगे।", "हमनी महिला Bee भेजे के पूरा कोशिश करब।"],
    rev_h: ["Check and confirm", "जाँचें और कन्फर्म करें", "जाँचीं आ कन्फर्म करीं"],
    r_when: ["When", "कब", "कब"], r_where: ["Where", "कहाँ", "कहाँ"], r_who: ["The Bee will meet", "Bee किससे मिलेगा", "Bee केकरा से मिली"],
    r_note: ["Note for the Bee", "Bee के लिए नोट", "Bee खातिर नोट"], r_land: ["Landmark", "लैंडमार्क", "लैंडमार्क"],
    r_same: ["Visit ends at the same place", "विज़िट उसी जगह खत्म होगी", "विज़िट ओही जगह खतम होई"], r_ends: ["Visit ends at", "विज़िट यहाँ खत्म होगी", "विज़िट इहाँ खतम होई"],
    r_female: ["Female Bee preferred", "महिला Bee चाहिए", "महिला Bee चाहीं"],
    r_price: ["Price", "कीमत", "दाम"], r_gst: ["GST (18%)", "GST (18%)", "GST (18%)"], r_ret: ["Ends at a different place", "अलग जगह पर समाप्ति", "अलग जगह पर खतम"],
    r_arr: ["Bee arrival fee", "Bee आगमन शुल्क", "Bee आगमन शुल्क"], r_arr_h: ["By distance — confirmed when your Bee is assigned", "दूरी के हिसाब से — Bee तय होने पर बताया जाएगा", "दूरी के हिसाब से — Bee तय भइला पर बताई"],
    r_total: ["Total", "कुल", "कुल"], r_total_h: ["incl. GST · arrival fee extra", "GST सहित · आगमन शुल्क अलग", "GST सहित · आगमन शुल्क अलग"],
    r_pay: ["Nothing to pay now — pay after the visit by UPI.", "अभी कुछ नहीं देना — भुगतान विज़िट के बाद UPI से।", "अभी कुछ ना देवे के बा — भुगतान विज़िट के बाद UPI से।"],
    hr: ["hr", "घंटा", "घंटा"], fixed: ["fixed price", "तय कीमत", "तय दाम"],
    next: ["Continue", "आगे बढ़ें", "आगे बढ़ीं"], review: ["Review booking", "बुकिंग देखें", "बुकिंग देखीं"], send: ["Confirm on WhatsApp", "WhatsApp पर कन्फर्म करें", "WhatsApp पर कन्फर्म करीं"],
    sendNote: ["Next: tap ✅ Confirm in WhatsApp to book your Bee", "अगला: Bee बुक करने के लिए WhatsApp में ✅ पुष्टि करें दबाएँ", "अगिला: Bee बुक करे खातिर WhatsApp में ✅ पक्का करीं दबाईं"],
    secure: ["🔒 Private link for your WhatsApp number", "🔒 आपके WhatsApp नंबर का निजी लिंक", "🔒 रउआ WhatsApp नंबर के निजी लिंक"],
    done_h: ["Sent to WhatsApp ✓", "WhatsApp पर भेज दिया ✓", "WhatsApp पर भेज दिहल ✓"],
    done_p: ["Go back to WhatsApp and tap ✅ Confirm to book your Bee.", "WhatsApp पर वापस जाएँ और Bee बुक करने के लिए ✅ पुष्टि करें दबाएँ।", "WhatsApp पर लवटीं आ Bee बुक करे खातिर ✅ पक्का करीं दबाईं।"],
    openWa: ["Open WhatsApp", "WhatsApp खोलें", "WhatsApp खोलीं"],
    demo: ["DEMO", "डेमो", "डेमो"],
    e_svc: ["Choose a service to continue.", "आगे बढ़ने के लिए सेवा चुनें।", "आगे बढ़े खातिर सेवा चुनीं।"],
    e_task: ["Choose what you need.", "क्या चाहिए, वह चुनें।", "का चाहीं, ऊ चुनीं।"],
    e_note: ["Describe the task in a line or two.", "काम एक-दो लाइन में बताएँ।", "काम एक-दू लाइन में बताईं।"],
    e_time: ["Choose a start time.", "शुरू होने का समय चुनें।", "शुरू होखे के समय चुनीं।"],
    e_plan: ["Choose how long you need the Bee.", "कितनी देर के लिए, वह चुनें।", "केतना देर खातिर, ऊ चुनीं।"],
    e_addr: ["Enter the full address — house, street and area.", "पूरा पता लिखें — मकान, गली और इलाका।", "पूरा पता लिखीं — मकान, गली आ इलाका।"],
    e_area: ["We serve Patna right now. We've noted your city and will reach you first.", "अभी हम पटना में सेवा देते हैं। आपका शहर नोट कर लिया है।", "अभी हमनी पटना में सेवा देत बानी। रउआ शहर नोट क लिहल गइल बा।"],
    e_land: ["Keep the landmark under 80 letters.", "लैंडमार्क 80 अक्षर से छोटा रखें।", "लैंडमार्क 80 अक्षर से छोट राखीं।"],
    e_endaddr: ["Enter where the visit ends.", "विज़िट कहाँ खत्म होगी, वह पता लिखें।", "विज़िट कहाँ खतम होई, ऊ पता लिखीं।"],
    e_name: ["Enter a name using letters only.", "नाम सिर्फ़ अक्षरों में लिखें।", "नाम खाली अक्षर में लिखीं।"],
    e_phone: ["Enter a 10-digit Indian mobile number (starts with 6–9).", "10 अंकों का मोबाइल नंबर लिखें (6–9 से शुरू)।", "10 अंक के मोबाइल नंबर लिखीं (6–9 से शुरू)।"],
    /* WhatsApp side */
    cta_foot: ["Private link · valid 30 minutes", "निजी लिंक · 30 मिनट तक मान्य", "निजी लिंक · 30 मिनट ले मान्य"],
    cta_btn: ["Book your Bee 🐝", "अपना Bee बुक करें 🐝", "आपन Bee बुक करीं 🐝"],
    urg_btn: ["Need help right now? Tap *🆘 Urgent help now* below.", "अभी तुरंत मदद चाहिए? नीचे *🆘 तुरंत मदद* दबाएँ।", "अभी तुरते मदद चाहीं? नीचे *🆘 तुरते मदद* दबाईं।"],
    menu3: ["Prefer to book by chat, need urgent help, or want to see how booking works? Tap below 👇\n❓ Questions? Type *help*.", "चैट से बुक करना है, तुरंत मदद चाहिए, या देखना है कि बुकिंग कैसे होती है? नीचे टैप करें 👇\n❓ कोई सवाल? *मदद* लिखें।", "चैट से बुक करे के बा, तुरते मदद चाहीं, भा देखे के बा कि बुकिंग कइसे होला? नीचे टैप करीं 👇\n❓ कवनो सवाल? *मदद* लिखीं।"],
    b_urgent: ["🆘 Urgent help now", "🆘 तुरंत मदद", "🆘 तुरते मदद"], b_chat: ["💬 Book on chat", "💬 चैट से बुक करें", "💬 चैट से बुक करीं"], b_help: ["🎬 How to book", "🎬 बुक कैसे करें", "🎬 बुक कइसे करीं"],
    sum_h: ["📋 *Please confirm your booking:*", "📋 *कृपया अपनी बुकिंग की पुष्टि करें:*", "📋 *कृपया आपन बुकिंग पक्का करीं:*"],
    s_contact: ["👤 Contact:", "👤 संपर्क:", "👤 संपर्क:"], s_pick: ["📍 Pickup:", "📍 पिकअप:", "📍 पिकअप:"], s_addr: ["📍 Address:", "📍 पता:", "📍 पता:"],
    s_end: ["🏁 Ends at:", "🏁 यहाँ खत्म:", "🏁 इहाँ खतम:"], s_hrs: ["{n} hr(s)", "{n} घंटे", "{n} घंटा"],
    s_svc: ["💰 Service:", "💰 सेवा शुल्क:", "💰 सेवा शुल्क:"], s_gst: ["➕ GST 18%:", "➕ GST 18%:", "➕ GST 18%:"],
    s_arr: ["🐝 Bee Arrival Fee: ₹0–99 · confirmed when your Bee is assigned", "🐝 Bee आगमन शुल्क: ₹0–99 · Bee तय होने पर पुष्टि", "🐝 Bee आगमन शुल्क: ₹0–99 · Bee तय भइला पर पक्का"],
    s_ret0: ["🔁 Bee Return Support Fee: FREE (same as arrival)", "🔁 Bee रिटर्न सपोर्ट शुल्क: मुफ्त (आगमन स्थान)", "🔁 Bee रिटर्न सपोर्ट शुल्क: मुफ्त (आवे वाला जगह)"],
    s_ret: ["🔁 Bee Return Support Fee:", "🔁 Bee रिटर्न सपोर्ट शुल्क:", "🔁 Bee रिटर्न सपोर्ट शुल्क:"],
    s_total: ["💳 Total (excl. arrival):", "💳 कुल (आगमन छोड़कर):", "💳 कुल (आगमन छोड़ के):"],
    s_pay: ["📝 Pay after the service via UPI/QR. GST is shown separately.", "📝 भुगतान सेवा के बाद UPI/QR से। GST अलग से दिखाया गया है।", "📝 भुगतान सेवा के बाद UPI/QR से। GST अलग से देखावल गइल बा।"],
    sum_btn: ["Please tap ✅ Confirm to book, ✏️ Change to edit, or ❌ Cancel 👇", "बुक करने के लिए ✅ पुष्टि करें, बदलने के लिए ✏️ बदलें, या ❌ रद्द करें दबाएँ 👇", "बुक करे खातिर ✅ पक्का करीं, बदले खातिर ✏️ बदलीं, भा ❌ रद्द करीं दबाईं 👇"],
    b_yes: ["✅ Confirm", "✅ पुष्टि करें", "✅ पक्का करीं"], b_edit: ["✏️ Change", "✏️ बदलें", "✏️ बदलीं"], b_no: ["❌ Cancel", "❌ रद्द करें", "❌ रद्द करीं"],
    howto: ["🎬 *How to book* — 4 easy steps 👆\n\n1️⃣ Say *Hi*\n2️⃣ Tap *Book your Bee* 🐝\n3️⃣ Fill one short form\n4️⃣ Tap *✅ Confirm*\n\n📞 Prefer to talk? Call *+91 92881 81211* — we'll happily book your Bee for you.",
      "🎬 *बुक कैसे करें* — 4 आसान स्टेप 👆\n\n1️⃣ *Hi* भेजें\n2️⃣ *अपना Bee बुक करें* 🐝 दबाएँ\n3️⃣ छोटा फ़ॉर्म भरें\n4️⃣ *✅ पुष्टि करें* दबाएँ\n\n📞 बात करना चाहें? कॉल करें *+91 92881 81211* — हम ख़ुशी से आपका Bee बुक कर देंगे।",
      "🎬 *बुक कइसे करीं* — 4 आसान स्टेप 👆\n\n1️⃣ *Hi* भेजीं\n2️⃣ *आपन Bee बुक करीं* 🐝 दबाईं\n3️⃣ छोट फ़ॉर्म भरीं\n4️⃣ *✅ पक्का करीं* दबाईं\n\n📞 बात करे के बा? कॉल करीं *+91 92881 81211* — हमनी खुशी से रउआ खातिर Bee बुक कर देब।"],
    pb_h: ["🧾 <b>Bill — {id}</b>", "🧾 <b>बिल — {id}</b>", "🧾 <b>बिल — {id}</b>"],
    pb_fixed: ["📦 {p} · fixed price: <b>{x}</b><br><i>The plan price is fixed for the block — finishing early does not lower it, and the free 15-minute cushion covers small overruns.</i>",
      "📦 {p} · तय कीमत: <b>{x}</b><br><i>प्लान की कीमत पूरे ब्लॉक के लिए तय है — जल्दी खत्म होने पर कम नहीं होती, और 15 मिनट तक की देरी मुफ़्त है।</i>",
      "📦 {p} · तय दाम: <b>{x}</b><br><i>प्लान के दाम पूरा ब्लॉक खातिर तय बा — जल्दी खतम भइला पर कम ना होला, आ 15 मिनट ले के देरी मुफ्त बा।</i>"],
    pb_extra: ["⏱️ Extra time beyond the plan: <b>{x}</b> (hourly rate)", "⏱️ प्लान से ज़्यादा समय: <b>{x}</b> (प्रति घंटा दर)", "⏱️ प्लान से जादे समय: <b>{x}</b> (प्रति घंटा दर)"],
    pb_end: ["➕ 18% GST, shown as CGST 9% + SGST 9% on your invoice: <b>{g}</b><br>💳 Total: <b>{t}</b><br><br>Pay now via UPI/QR 👇", "➕ 18% GST, इनवॉइस पर CGST 9% + SGST 9%: <b>{g}</b><br>💳 कुल: <b>{t}</b><br><br>अभी UPI/QR से भुगतान करें 👇", "➕ 18% GST, इनवॉइस पर CGST 9% + SGST 9%: <b>{g}</b><br>💳 कुल: <b>{t}</b><br><br>अबही UPI/QR से भुगतान करीं 👇"]
  };
  function t(k, lang, v) { var s = L(T[k], lang); if (v) for (var x in v) s = s.split("{" + x + "}").join(v[x]); return s; }

  /* ---------- prices (the site's price card = the bot's) ---------- */
  var ORDER = ["hospital", "urgent", "elderly", "personal", "driver", "event", "compassion"];
  function card(svc) { var P = window.TB_PRICING; return P && P.services && P.services[svc]; }
  function rateOf(svc) { var c = card(svc); return c ? c.hourly : 199; }
  var PNAME = { care: { t3: ["Quick Care", "क्विक केयर", "क्विक केयर"], t6: ["Half Day Care", "हाफ डे केयर", "हाफ डे केयर"], t9: ["Extended Care", "एक्सटेंडेड केयर", "एक्सटेंडेड केयर"], t12: ["Full Shift Care", "फुल शिफ्ट केयर", "फुल शिफ्ट केयर"], fdc: ["Full Day Care", "फुल डे केयर", "फुल डे केयर"] },
    drive: { t3: ["Quick Drive", "क्विक ड्राइव", "क्विक ड्राइव"], t6: ["Half Day Drive", "हाफ डे ड्राइव", "हाफ डे ड्राइव"], t9: ["Extended Drive", "एक्सटेंडेड ड्राइव", "एक्सटेंडेड ड्राइव"], t12: ["Full Shift Drive", "फुल शिफ्ट ड्राइव", "फुल शिफ्ट ड्राइव"] } };
  function pname(svc, key, lang) { return L((svc === "driver" ? PNAME.drive : PNAME.care)[key], lang); }
  function isNight(startMin, hrs) {   /* 3+ hours between 10 PM and 6 AM */
    if (startMin == null) return false; var ov = 0;
    for (var m = startMin; m < startMin + hrs * 60; m += 15) { var h = (m / 60) % 24; if (h >= 22 || h < 6) ov += 15; }
    return ov >= 180;
  }
  function plans(svc, startMin, lang) {
    var c = card(svc) || {}, r = c.hourly || 199, out = [], night = function (h) { return isNight(startMin, h); };
    out.push({ key: "h1", hours: 1, base: r, name: t("hour1", lang), sub: t("hourly_d", lang) });
    var two = 2 * r, capped = c.t3 && c.t3 < two;
    out.push({ key: "h2", hours: 2, base: capped ? c.t3 : two, name: t("hours", lang, { n: 2 }), sub: capped ? t("capped", lang, { p: pname(svc, "t3", lang) }) : t("hourly_d", lang), plan: capped ? pname(svc, "t3", lang) : "" });
    [["t3", 3, "t3", "t3"], ["t6", 6, "t6d", "t6n"], ["t9", 9, "t9d", "t9n"], ["t12", 12, "t12d", "t12n"], ["fdc", 24, "fdc", "fdc"]].forEach(function (p) {
      if (c[p[2]] == null) return; if (p[0] === "fdc" && svc === "driver") return;
      var n = p[0] !== "t3" && p[0] !== "fdc" && night(p[1]), base = n ? c[p[3]] : c[p[2]], sv = p[1] * r - base;
      out.push({ key: p[0], hours: p[1], base: base, name: pname(svc, p[0], lang) + " · " + p[1] + "h", plan: pname(svc, p[0], lang), night: n,
        sub: (sv > 0 && p[0] !== "fdc" ? t("save", lang, { x: inr(sv) }) : "") + (p[0] === "t3" ? " · " + t("most", lang) : p[0] === "t6" ? " · " + t("best", lang) : "") + (n ? " · " + t("night", lang) : "") });
    });
    return out;
  }

  /* ---------- dates / times ---------- */
  var MON = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फ़र", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सित", "अक्टू", "नव", "दिस"] };
  var DOW = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function dates(lang) {
    var o = [], now = new Date(), M = MON[lang === "en" ? "en" : "hi"], W = DOW[lang === "en" ? "en" : "hi"];
    for (var i = 0; i < 14; i++) { var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i), dm = d.getDate() + " " + M[d.getMonth()];
      o.push({ v: iso(d), short: dm, t: (i === 0 ? t("today", lang) : i === 1 ? t("tomorrow", lang) : W[d.getDay()]) + ", " + dm }); }
    return o;
  }
  function t12(m) { var h = Math.floor(m / 60), mm = m % 60; return (h % 12 || 12) + ":" + ("0" + mm).slice(-2) + " " + (h < 12 ? "AM" : "PM"); }
  function times(dateV) {
    var o = [], now = new Date(), today = dateV === iso(now), from = 6 * 60;
    if (today) { from = Math.max(from, Math.ceil((now.getHours() * 60 + now.getMinutes() + 60) / 30) * 30); o.push({ v: "now", m: now.getHours() * 60 + now.getMinutes() + 20 }); }
    for (var m = from; m <= 22 * 60; m += 30)   /* 6:00 AM – 10:00 PM, as the real form */ o.push({ v: ("0" + Math.floor(m / 60)).slice(-2) + ":" + ("0" + m % 60).slice(-2), m: m });
    return o;
  }

  /* ---------- CSS (the form's own look, sized for the homepage phone) ---------- */
  var CSS = ".tbf{position:absolute;inset:0;z-index:30;overflow:hidden;background:#F6F8FB;transform:translateY(102%);transition:transform .38s cubic-bezier(.2,.8,.2,1)}" +
    ".tbf.on{transform:none}.tbf-in{position:absolute;left:0;top:0;width:340px;transform-origin:0 0;display:flex;flex-direction:column;font:14px/1.42 Inter,system-ui,-apple-system,'Segoe UI',Roboto,'Noto Sans Devanagari',sans-serif;color:#0E1A2B;-webkit-font-smoothing:antialiased}" +
    ".tbf *{box-sizing:border-box}.tbf button{font:inherit;color:inherit}" +
    ".tbf-top{background:#1B2A4A;padding-top:30px;position:relative;flex:none}.tbf-top img{display:block;width:100%}.tbf-st{position:absolute;left:26px;right:24px;top:9px;display:flex;justify-content:space-between;color:#fff;font:600 12px/1 system-ui,sans-serif}" +
    ".tbf-demo{position:absolute;right:10px;bottom:8px;background:#F5B301;color:#0E1A2B;font:800 9px/1 system-ui,sans-serif;letter-spacing:.08em;padding:4px 6px;border-radius:6px}" +
    ".tbf-bar{flex:none;background:#fff;border-bottom:1px solid #EBEFF5;padding:8px 12px}.tbf-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(5,1fr);gap:5px}" +
    ".tbf-steps li{display:flex;flex-direction:column;gap:5px;min-width:0}.tbf-steps span{font-size:9.5px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#94A3B8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}" +
    ".tbf-steps i{display:block;height:4px;border-radius:4px;background:#EBEFF5}.tbf-steps .on span{color:#0E1A2B}.tbf-steps .on i{background:linear-gradient(90deg,#F5B301,#E8A400)}.tbf-steps .done span{color:#0E9F6E}.tbf-steps .done i{background:#0E9F6E}" +
    ".tbf-main{flex:1;overflow-y:auto;padding:12px 12px 16px;scrollbar-width:none;scroll-behavior:auto}.tbf-main::-webkit-scrollbar{width:0}" +
    ".tbf-card{background:#fff;border-radius:20px;padding:16px 14px;box-shadow:0 2px 6px rgba(14,26,43,.04),0 12px 32px rgba(14,26,43,.07);margin-bottom:12px}" +
    ".tbf-cap{font-size:10.5px;font-weight:800;color:#E8A400;text-transform:uppercase;letter-spacing:.08em}.tbf h1{font-size:19px;line-height:1.2;margin:4px 0 8px;letter-spacing:-.01em}.tbf h2{font-size:16px;margin:0 0 6px}.tbf .muted{color:#5C6B80;margin:0 0 10px;font-size:13px}.tbf .hello{font-weight:700;margin-top:2px}" +
    ".tbf-opt{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:#fff;border:1.5px solid #DFE6F0;border-radius:16px;padding:9px 10px;margin-bottom:7px;cursor:pointer;transition:border-color .15s,background .15s}" +
    ".tbf-opt img{width:42px;height:42px;border-radius:12px;flex:none;background:#FFF8E6;object-fit:cover}.tbf-opt .g{flex:1;min-width:0}.tbf-opt b{display:block;font-size:14px}.tbf-opt small{display:block;color:#5C6B80;font-size:11.5px;line-height:1.35}" +
    ".tbf-opt .tk{width:18px;height:18px;border-radius:50%;border:2px solid #DFE6F0;flex:none}.tbf-opt.on{border-color:#F5B301;background:#FFF8E6}.tbf-opt.on .tk{border:6px solid #F5B301}" +
    ".tbf-opt .emo{width:42px;height:42px;border-radius:12px;background:#1B2A4A;display:flex;align-items:center;justify-content:center;font-size:20px;flex:none}.tbf-opt .fr{color:#E8A400;font-weight:700}" +
    ".tbf-sec{font-size:10.5px;font-weight:800;letter-spacing:.08em;color:#94A3B8;text-transform:uppercase;margin:12px 2px 6px}.tbf-hint{font-size:11.5px;color:#5C6B80;background:#F2F5FA;border-radius:12px;padding:8px 10px;margin-top:4px}" +
    ".tbf-picked{display:flex;align-items:center;gap:10px;padding:8px 10px;background:#FFF8E6;border:1.5px solid #f6dc8f;border-radius:14px;margin:6px 0 10px}.tbf-picked img{width:34px;height:34px;border-radius:9px}.tbf-picked b{flex:1;font-size:14px}" +
    ".tbf-link{background:none;border:0;color:#E8A400;font-weight:800;font-size:12.5px;cursor:pointer;padding:4px}" +
    ".tbf-f{margin:10px 0 0}.tbf-f label{display:block;font-weight:700;font-size:13px;margin-bottom:5px}.tbf-f label i{font-style:normal;font-weight:500;color:#94A3B8;font-size:11.5px}" +
    ".tbf-f input,.tbf-f textarea{width:100%;border:1.5px solid #DFE6F0;border-radius:12px;padding:9px 11px;font:inherit;font-size:14px;background:#fff;color:#0E1A2B;outline:none}.tbf-f textarea{min-height:62px;resize:none}" +
    ".tbf-f input:focus,.tbf-f textarea:focus{border-color:#F5B301;box-shadow:0 0 0 3px rgba(245,179,1,.18)}.tbf-f .h{font-size:11px;color:#94A3B8;margin-top:3px}.tbf-f.bad input,.tbf-f.bad textarea{border-color:#E0443A;background:#FDF0EF}" +
    ".tbf-er{color:#E0443A;font-size:11.5px;font-weight:600;margin-top:4px;display:none}.tbf-er.show{display:block}" +
    ".tbf-chips{display:flex;gap:6px;overflow-x:auto;padding:2px 20px 4px 0;scrollbar-width:none}.tbf-chips::-webkit-scrollbar{height:0}" +
    ".tbf-chip{flex:none;border:1.5px solid #DFE6F0;background:#fff;border-radius:12px;padding:7px 11px;font-size:12.5px;cursor:pointer;white-space:nowrap}.tbf-chip.on{border-color:#F5B301;background:#FFF8E6;font-weight:800}.tbf-chip.now{background:#E9F8F1;border-color:#bfe8d6;color:#05603f;font-weight:700}.tbf-chip.now.on{border-color:#0E9F6E}" +
    ".tbf-seg{display:grid;grid-template-columns:1fr 1fr;gap:6px}.tbf-seg .tbf-chip{white-space:normal;text-align:center;line-height:1.3}" +
    ".tbf-plan{display:grid;grid-template-columns:1fr auto 18px;gap:1px 8px;align-items:center;width:100%;text-align:left;background:#fff;border:1.5px solid #DFE6F0;border-radius:14px;padding:8px 10px;margin-bottom:6px;cursor:pointer}" +
    ".tbf-plan b{font-size:13.5px}.tbf-plan .p{font-weight:800;text-align:right;font-variant-numeric:tabular-nums;font-size:13.5px}.tbf-plan .g{font-size:10.5px;color:#5C6B80;text-align:right;font-weight:700;grid-column:2}.tbf-plan small{grid-column:1;grid-row:2;font-size:10.5px;color:#5C6B80}" +
    ".tbf-plan .tk{grid-column:3;grid-row:1/3;width:16px;height:16px;border-radius:50%;border:2px solid #DFE6F0}.tbf-plan.on{border-color:#F5B301;background:#FFF8E6}.tbf-plan.on .tk{border:5px solid #F5B301}" +
    ".tbf-sw{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding:10px;border:1.5px solid #DFE6F0;border-radius:14px;cursor:pointer;font-size:12.5px}.tbf-sw small{display:block;color:#5C6B80;font-size:11px}" +
    ".tbf-sw .k{width:38px;height:22px;border-radius:20px;background:#DFE6F0;position:relative;flex:none}.tbf-sw .k:after{content:'';position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:left .2s}.tbf-sw.on{border-color:#F5B301;background:#FFF8E6}.tbf-sw.on .k{background:#F5B301}.tbf-sw.on .k:after{left:19px}" +
    ".tbf-hero{display:flex;align-items:center;gap:10px}.tbf-hero img{width:46px;height:46px;border-radius:12px;background:#FFF8E6}.tbf-hero .g{flex:1}.tbf-hero b{display:block;font-size:15px}.tbf-hero small{color:#5C6B80;font-size:12px}" +
    ".tbf-row{display:flex;gap:9px;padding:9px 0;border-bottom:1px solid #EBEFF5;align-items:flex-start}.tbf-row:last-child{border-bottom:0}.tbf-row .ic{width:28px;height:28px;border-radius:9px;background:#F2F5FA;display:flex;align-items:center;justify-content:center;flex:none;font-size:13px}" +
    ".tbf-row .tx{flex:1;min-width:0}.tbf-row .lb{font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#94A3B8}.tbf-row .vl{font-size:13px;font-weight:650;overflow-wrap:anywhere}.tbf-row .sb{font-size:11.5px;color:#5C6B80}" +
    ".tbf-pl{display:flex;justify-content:space-between;gap:10px;padding:5px 0;font-size:12.5px}.tbf-pl span:last-child{font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums}.tbf-pl small{display:block;color:#94A3B8;font-size:10.5px}" +
    ".tbf-tl{display:flex;justify-content:space-between;align-items:baseline;border-top:1.5px dashed #DFE6F0;margin-top:4px;padding-top:8px}.tbf-tl b{font-size:15px}.tbf-tl strong{font-size:20px}.tbf-tl small{display:block;color:#5C6B80;font-size:10.5px;font-weight:500}" +
    ".tbf-pay{background:#E9F8F1;color:#05603f;border-radius:12px;padding:8px 10px;margin-top:10px;font-weight:700;font-size:12px}" +
    ".tbf-dock{flex:none;background:rgba(255,255,255,.97);border-top:1px solid #EBEFF5;padding:8px 12px 10px}.tbf-dr{display:flex;gap:8px;align-items:center}" +
    ".tbf-back{width:44px;height:44px;border-radius:14px;border:0;background:#F2F5FA;cursor:pointer;font-size:18px;font-weight:800;color:#0E1A2B;flex:none}.tbf-back[hidden]{display:none}" +
    ".tbf-go{flex:1;height:44px;border:0;border-radius:14px;background:#F5B301;color:#0E1A2B;font-weight:800;font-size:14.5px;display:flex;align-items:center;justify-content:space-between;padding:0 6px 0 16px;cursor:pointer;box-shadow:0 8px 20px rgba(245,179,1,.35)}" +
    ".tbf-go.np{justify-content:center}.tbf-go .pc{background:#0E1A2B;color:#fff;border-radius:10px;padding:6px 9px;font-size:12.5px;white-space:nowrap;font-variant-numeric:tabular-nums}" +
    ".tbf-sf{font-size:9.5px;color:#94A3B8;text-align:center;margin-top:5px}" +
    ".tbf-done{text-align:center;padding:26px 16px}.tbf-done .big{font-size:44px}.tbf-done .btn{display:inline-block;margin-top:14px;background:#F5B301;border:0;border-radius:14px;padding:12px 22px;font-weight:800;cursor:pointer}" +
    ".tbf-note{font-size:11.5px;color:#5C6B80;background:#FFF8E6;border-radius:10px;padding:7px 9px;margin-top:6px}" +
    ".tbf-fg{position:absolute;left:0;top:0;width:0;height:0;z-index:40;pointer-events:none;transition:transform .45s cubic-bezier(.3,.7,.2,1),opacity .2s;opacity:0}" +
    ".tbf-fg i{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;background:rgba(255,255,255,.88);box-shadow:0 0 0 3px rgba(245,179,1,.9),0 6px 14px rgba(0,0,0,.25);transition:transform .12s}" +
    ".tbf-fg.press i{transform:scale(.82)}" +
    /* WhatsApp-side bits used by demo.js */
    ".pmsg img.wab{display:block;width:100%;border-radius:6px;margin-bottom:6px}.pmsg .waft{font-size:10.5px;color:#667781;margin-top:4px}.pb.cta{color:#027eb5}.pmsg img.howto{display:block;width:100%;border-radius:8px;margin-bottom:6px}";

  function injectCss() { if (document.getElementById("tbfCss")) return; var s = document.createElement("style"); s.id = "tbfCss"; s.textContent = CSS; document.head.appendChild(s); }

  /* ======================= the form ======================= */
  var CUR = null;   /* only one open at a time */
  function Form(host, lang, opts) {
    injectCss(); opts = opts || {};
    var self = this; this.lang = lang; this.opts = opts;
    var V = this.V = Object.assign({ svc: "", task: "", note: "", date: "", time: "", plan: "", addr: "", land: "", end: "same", endAddr: "", name: "", ph: "", female: false }, opts.answers || {});
    if (!V.date) V.date = dates(lang)[1].v;
    var root = this.root = document.createElement("div"); root.className = "tbf"; root.setAttribute("role", "dialog");
    root.innerHTML = '<div class="tbf-in"><div class="tbf-top"><div class="tbf-st"><span>9:41</span><span>●●● ▮</span></div><img alt="Trusbee" src="/assets/img/demo/form-banner.png"><span class="tbf-demo">' + t("demo", lang) + '</span></div>' +
      '<div class="tbf-bar"><ol class="tbf-steps"></ol></div><div class="tbf-main"></div>' +
      '<div class="tbf-dock"><div class="tbf-dr"><button type="button" class="tbf-back" aria-label="Back">‹</button><button type="button" class="tbf-go" id="tbfGo"><span class="lb"></span></button></div><div class="tbf-sf"></div></div>' +
      '<div class="tbf-fg"><i></i></div></div>';
    host.appendChild(root);
    this.inner = root.firstChild; this.main = root.querySelector(".tbf-main"); this.go = root.querySelector(".tbf-go"); this.back = root.querySelector(".tbf-back");
    this.fit(); this.step = opts.step || 1; this.render();
    root.addEventListener("click", function (e) { self.click(e); });
    root.addEventListener("input", function (e) { self.input(e); });
    this.back.addEventListener("click", function () { if (self.step > 1 && self.step <= 5) { self.step--; self.render(); } });
    this.go.addEventListener("click", function () { self.next(); });
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add("on"); }); });
    this._rs = function () { self.fit(); }; window.addEventListener("resize", this._rs);
    if (CUR && CUR !== this) CUR.close(true); CUR = this;
  }
  Form.prototype.fit = function () {
    var w = this.root.clientWidth || this.root.parentNode.clientWidth || 280, h = this.root.clientHeight || this.root.parentNode.clientHeight || 600, k = w / 340;
    this.k = k; this.inner.style.transform = "scale(" + k + ")"; this.inner.style.height = (h / k) + "px";
  };
  Form.prototype.close = function (now) {
    var r = this.root, self = this; window.removeEventListener("resize", this._rs); if (CUR === this) CUR = null;
    if (now) { r.remove(); return; }
    r.classList.remove("on"); setTimeout(function () { r.remove(); }, 420);
  };
  Form.prototype.err = function (id, msg) { var e = this.root.querySelector("#tbfe_" + id); if (e) { e.textContent = msg; e.classList.add("show"); var f = e.closest(".tbf-f"); if (f) f.classList.add("bad"); } return false; };
  Form.prototype.clearErr = function () { this.root.querySelectorAll(".tbf-er").forEach(function (e) { e.classList.remove("show"); }); this.root.querySelectorAll(".tbf-f.bad").forEach(function (e) { e.classList.remove("bad"); }); };
  Form.prototype.svcName = function (k) { return (DATA.names[this.lang] || DATA.names.en)[k] || k; };
  Form.prototype.task = function () { var C = window.TB_CAT, lang = this.lang, V = this.V; var s = C && C.subs[V.svc] && C.subs[V.svc].find(function (x) { return x.id === V.task; }); return s ? (s.name[lang] || s.name.en) : ""; };
  Form.prototype.plan = function () { var V = this.V, st = this.startMin(); return plans(V.svc, st, this.lang).find(function (p) { return p.key === V.plan; }) || null; };
  Form.prototype.startMin = function () { var V = this.V; if (!V.time) return null; if (V.time === "now") { var n = new Date(); return n.getHours() * 60 + n.getMinutes() + 20; } var a = V.time.split(":"); return +a[0] * 60 + +a[1]; };
  Form.prototype.money = function () {
    var p = this.plan(); if (!p) return null; var ret = this.V.end === "diff" ? ((window.TB_CAT && window.TB_CAT.fees.retDiff) || 49) : 0, g = gst2(p.base);
    return { base: p.base, gst: g, ret: ret, total: p.base + g + ret, plan: p };
  };
  Form.prototype.steps = function () {
    var names = t("steps", this.lang), s = this.step;
    this.root.querySelector(".tbf-steps").innerHTML = names.map(function (n, i) { var k = i + 1; return '<li class="' + (k < s ? "done" : k === s ? "on" : "") + '"><span>' + (k < s ? "✓ " : "") + n + "</span><i></i></li>"; }).join("");
  };
  Form.prototype.dock = function (label, price, noBack) {
    this.go.querySelector(".lb").textContent = label;
    var pc = this.go.querySelector(".pc"); if (price) { if (!pc) { pc = document.createElement("span"); pc.className = "pc"; this.go.appendChild(pc); } pc.textContent = price; this.go.classList.remove("np"); } else { if (pc) pc.remove(); this.go.classList.add("np"); }
    this.back.hidden = !!noBack;
    this.root.querySelector(".tbf-sf").textContent = this.step === 5 ? t("sendNote", this.lang) : t("secure", this.lang);
  };
  Form.prototype.render = function () {
    var lang = this.lang, V = this.V, s = this.step, self = this, h = "", icon = function (k) { return "/assets/img/demo/svc-" + k + ".png"; };
    this.root.querySelector(".tbf-dock").style.display = s === 6 ? "none" : "";
    if (s <= 5) this.steps(); else this.root.querySelector(".tbf-steps").innerHTML = "";
    if (s === 1) {
      h = '<section class="tbf-card"><div class="tbf-cap">' + t("stepOf", lang, { n: 1 }) + '</div><div class="hello">' + t("hello", lang) + '</div><h1>' + t("svc_h", lang) + '</h1><p class="muted">' + t("intro", lang) + "</p>" +
        ORDER.map(function (k) { var r = rateOf(k); return '<button type="button" class="tbf-opt' + (V.svc === k ? " on" : "") + '" data-svc="' + k + '"><img alt="" src="' + icon(k) + '"><span class="g"><b>' + esc(self.svcName(k)) + "</b><small>" + esc(L(DATA.desc[k], lang)) + " · " + t("from", lang, { p: inr(r) }) + '</small></span><span class="tk"></span></button>'; }).join("") +
        '<div class="tbf-sec">' + t("more", lang) + "</div>" +
        '<button type="button" class="tbf-opt" data-more="plan"><span class="emo">🔁</span><span class="g"><b>' + t("plan_h", lang) + "</b><small>" + t("plan_d", lang) + '</small><small class="fr">' + t("plan_from", lang) + '</small></span><span class="tk"></span></button>' +
        '<button type="button" class="tbf-opt" data-more="os"><span class="emo">🚗</span><span class="g"><b>' + t("os_h", lang) + "</b><small>" + t("os_d", lang) + '</small><small class="fr">' + t("os_from", lang) + '</small></span><span class="tk"></span></button>' +
        '<div class="tbf-er" id="tbfe_more"></div><div class="tbf-er" id="tbfe_svc"></div></section>';
      this.main.innerHTML = h; this.dock(t("next", lang), "", true);
    } else if (s === 2) {
      var subs = ((window.TB_CAT && window.TB_CAT.subs[V.svc]) || []).filter(function (x) { return x.id !== "d_outstation"; });
      h = '<section class="tbf-card"><div class="tbf-cap">' + t("stepOf", lang, { n: 2 }) + '</div><div class="tbf-picked"><img alt="" src="' + icon(V.svc) + '"><b>' + esc(this.svcName(V.svc)) + '</b><button type="button" class="tbf-link" data-go="1">' + t("change", lang) + "</button></div><h1>" + t("task_h", lang) + "</h1>" +
        subs.map(function (x) { return '<button type="button" class="tbf-opt' + (V.task === x.id ? " on" : "") + '" data-task="' + x.id + '"><span class="g"><b>' + esc(x.name[lang] || x.name.en) + "</b><small>" + esc((x.short && (x.short[lang] || x.short.en)) || "") + '</small></span><span class="tk"></span></button>'; }).join("") +
        '<div class="tbf-er" id="tbfe_task"></div><div class="tbf-f"><label>' + t("l_note", lang) + " <i>(" + t("opt", lang) + ')</i></label><textarea id="tbf_note" maxlength="300">' + esc(V.note) + '</textarea><div class="tbf-er" id="tbfe_note"></div></div></section>';
      this.main.innerHTML = h; this.dock(t("next", lang), "", false);
    } else if (s === 3) {
      var ds = dates(lang), ts = times(V.date), ps = plans(V.svc, this.startMin(), lang);
      if (V.time && !ts.some(function (x) { return x.v === V.time; })) V.time = "";
      h = '<section class="tbf-card"><div class="tbf-cap">' + t("stepOf", lang, { n: 3 }) + "</div><h1>" + t("when_h", lang) + '</h1>' +
        '<div class="tbf-f"><label>' + t("l_date", lang) + '</label><div class="tbf-chips">' + ds.map(function (d) { return '<button type="button" class="tbf-chip' + (V.date === d.v ? " on" : "") + '" data-date="' + d.v + '">' + esc(d.t) + "</button>"; }).join("") + "</div></div>" +
        '<div class="tbf-f"><label>' + t("l_time", lang) + '</label><div class="tbf-chips">' + ts.map(function (x) { return '<button type="button" class="tbf-chip' + (x.v === "now" ? " now" : "") + (V.time === x.v ? " on" : "") + '" data-time="' + x.v + '">' + (x.v === "now" ? t("now", lang) : t12(x.m)) + "</button>"; }).join("") + '</div><div class="tbf-er" id="tbfe_time"></div></div>' +
        '<div class="tbf-f"><label>' + t("l_plan", lang) + "</label>" + ps.map(function (p) { return '<button type="button" class="tbf-plan' + (V.plan === p.key ? " on" : "") + '" data-plan="' + p.key + '"><b>' + esc(p.name) + '</b><span class="p">' + inr(p.base) + '</span><span class="tk"></span><small>' + esc(p.sub.replace(/^ · /, "")) + '</small><span class="g">+ ' + inr(gst2(p.base)) + " GST</span></button>"; }).join("") +
        '<div class="tbf-er" id="tbfe_plan"></div><div class="tbf-hint">' + t("plan_note", lang) + "</div></div></section>";
      this.main.innerHTML = h; var m = this.money(); this.dock(t("next", lang), m ? inr(m.base) + " + GST" : "", false);
      this.root.querySelectorAll(".tbf-chips").forEach(function (row) { var on = row.querySelector(".on"); if (on) row.scrollLeft = Math.max(0, on.offsetLeft - 40); });
    } else if (s === 4) {
      var fee = (window.TB_CAT && window.TB_CAT.fees.retDiff) || 49;
      h = '<section class="tbf-card"><div class="tbf-cap">' + t("stepOf", lang, { n: 4 }) + "</div><h1>" + t("where_h", lang) + "</h1>" +
        '<div class="tbf-f"><label>' + t("l_addr", lang) + '</label><textarea id="tbf_addr" maxlength="300">' + esc(V.addr) + '</textarea><div class="h">' + t("h_addr", lang) + '</div><div class="tbf-er" id="tbfe_addr"></div></div>' +
        '<div class="tbf-f"><label>' + t("l_land", lang) + " <i>(" + t("opt", lang) + ')</i></label><input id="tbf_land" maxlength="90" value="' + esc(V.land) + '"><div class="tbf-er" id="tbfe_land"></div></div>' +
        '<div class="tbf-f"><label>' + t("l_end", lang) + '</label><div class="tbf-seg"><button type="button" class="tbf-chip' + (V.end === "same" ? " on" : "") + '" data-end="same">' + t("end_same", lang) + '</button><button type="button" class="tbf-chip' + (V.end === "diff" ? " on" : "") + '" data-end="diff">' + t("end_diff", lang, { f: fee }) + "</button></div></div>" +
        (V.end === "diff" ? '<div class="tbf-f"><label>' + t("l_endaddr", lang) + '</label><textarea id="tbf_endAddr" maxlength="300">' + esc(V.endAddr) + '</textarea><div class="tbf-er" id="tbfe_endAddr"></div></div>' : "") + "</section>" +
        '<section class="tbf-card"><h2>' + t("who_h", lang) + '</h2><div class="tbf-f"><label>' + t("l_name", lang) + '</label><input id="tbf_name" maxlength="60" value="' + esc(V.name) + '"><div class="tbf-er" id="tbfe_name"></div></div>' +
        '<div class="tbf-f"><label>' + t("l_phone", lang) + '</label><input id="tbf_ph" inputmode="numeric" maxlength="10" value="' + esc(V.ph) + '"><div class="h">' + t("h_phone", lang) + '</div><div class="tbf-er" id="tbfe_ph"></div></div>' +
        (V.svc === "urgent" ? "" : '<div class="tbf-sw' + (V.female ? " on" : "") + '" data-female="1"><span><b>' + t("l_female", lang) + "</b><small>" + t("female_h", lang) + '</small></span><span class="k"></span></div>') + "</section>";
      this.main.innerHTML = h; var m2 = this.money(); this.dock(t("review", lang), m2 ? inr(m2.base) + " + GST" : "", false);
    } else if (s === 5) {
      var mo = this.money(), d = dates(lang).find(function (x) { return x.v === V.date; }) || {}, st = this.startMin(), p = mo.plan;
      var row = function (ic, lb, vl, sb, go) { return '<div class="tbf-row"><span class="ic">' + ic + '</span><div class="tx"><div class="lb">' + lb + '</div><div class="vl">' + vl + "</div>" + (sb ? '<div class="sb">' + sb + "</div>" : "") + '</div><button type="button" class="tbf-link" data-go="' + go + '">' + t("edit", lang) + "</button></div>"; };
      h = '<section class="tbf-card"><div class="tbf-cap">' + t("stepOf", lang, { n: 5 }) + "</div><h1>" + t("rev_h", lang) + '</h1><div class="tbf-hero"><img alt="" src="' + icon(V.svc) + '"><div class="g"><b>' + esc(this.svcName(V.svc)) + "</b><small>" + esc(this.task()) + '</small></div><button type="button" class="tbf-link" data-go="1">' + t("edit", lang) + "</button></div>" +
        (V.note ? row("📝", t("r_note", lang), esc(V.note), "", 2) : "") +
        row("📅", t("r_when", lang), esc((d.t || "") + " · " + (V.time === "now" ? t("now", lang) : t12(st))), esc(p.plan ? p.plan + " · " + p.hours + " " + t("hr", lang) : p.name), 3) +
        row("📍", t("r_where", lang), esc(V.addr), (V.land ? esc(t("r_land", lang) + ": " + V.land) + "<br>" : "") + esc(V.end === "diff" ? t("r_ends", lang) + ": " + V.endAddr : t("r_same", lang)), 4) +
        row("👤", t("r_who", lang), esc(V.name + " · " + V.ph), V.female ? t("r_female", lang) : "", 4) + "</section>" +
        '<section class="tbf-card tbf-price"><h2>' + t("r_price", lang) + '</h2><div class="tbf-pl"><span>' + esc(p.plan ? p.plan + " (" + p.hours + "h)" : p.name) + "</span><span>" + inr(mo.base) + '</span></div><div class="tbf-pl"><span>' + t("r_gst", lang) + "</span><span>" + inr(mo.gst) + "</span></div>" +
        (mo.ret ? '<div class="tbf-pl"><span>' + t("r_ret", lang) + "</span><span>" + inr(mo.ret) + "</span></div>" : "") +
        '<div class="tbf-pl"><span>' + t("r_arr", lang) + "<small>" + t("r_arr_h", lang) + "</small></span><span>₹0–99</span></div>" +
        '<div class="tbf-tl"><span><b>' + t("r_total", lang) + "</b><small>" + t("r_total_h", lang) + "</small></span><strong>" + inr(mo.total) + '</strong></div><div class="tbf-pay">💳 ' + t("r_pay", lang) + "</div></section>";
      this.main.innerHTML = h; this.dock(t("send", lang), inr(mo.total), false);
    } else {
      h = '<section class="tbf-card tbf-done"><div class="big">✅</div><h1>' + t("done_h", lang) + '</h1><p class="muted">' + t("done_p", lang) + '</p><button type="button" class="btn" id="tbfOpenWa">' + t("openWa", lang) + "</button></section>";
      this.main.innerHTML = h;
    }
    this.main.scrollTop = 0;
  };
  Form.prototype.click = function (e) {
    var el = e.target.closest("[data-svc],[data-task],[data-date],[data-time],[data-plan],[data-end],[data-female],[data-go],[data-more],#tbfOpenWa"); if (!el || !this.root.contains(el)) return;
    var V = this.V, d = el.dataset, self = this;
    if (el.id === "tbfOpenWa") { this.finish(); return; }
    if (d.more) { var er = this.root.querySelector("#tbfe_more"); er.textContent = t("more_demo", this.lang); er.classList.add("show"); er.style.color = "#5C6B80"; return; }
    if (d.go) { this.step = +d.go; this.render(); return; }
    if (d.svc) { if (V.svc !== d.svc) { V.task = ""; V.plan = ""; } V.svc = d.svc; this.render(); setTimeout(function () { self.step = 2; self.render(); }, 180); return; }
    if (d.task) { V.task = d.task; this.root.querySelectorAll("[data-task]").forEach(function (x) { x.classList.toggle("on", x === el); }); this.clearErr(); return; }
    if (d.date) { V.date = d.date; this.keep(function () { self.render(); }); return; }
    if (d.time) { V.time = d.time; this.keep(function () { self.render(); }); return; }
    if (d.plan) { V.plan = d.plan; this.keep(function () { self.render(); }); return; }
    if (d.end) { this.read(); V.end = d.end; this.keep(function () { self.render(); }); return; }
    if (d.female) { V.female = !V.female; el.classList.toggle("on", V.female); return; }
  };
  Form.prototype.keep = function (fn) {   /* re-render without losing the scroll position */
    var y = this.main.scrollTop, rows = [].map.call(this.root.querySelectorAll(".tbf-chips"), function (r) { return r.scrollLeft; });
    fn(); this.main.scrollTop = y; this.root.querySelectorAll(".tbf-chips").forEach(function (r, i) { if (rows[i] != null) r.scrollLeft = rows[i]; });
  };
  Form.prototype.input = function (e) { this.read(); if (e.target.id === "tbf_ph") { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10); this.V.ph = e.target.value; } };
  Form.prototype.read = function () { var V = this.V, r = this.root; ["note", "addr", "land", "endAddr", "name", "ph"].forEach(function (k) { var el = r.querySelector("#tbf_" + k); if (el) V[k] = el.value; }); };
  Form.prototype.next = function () {
    var V = this.V, lang = this.lang, ok = true; this.read(); this.clearErr();
    if (this.step === 1) { if (!V.svc) return this.err("svc", t("e_svc", lang)); this.step = 2; }
    else if (this.step === 2) {
      if (!V.task) return this.err("task", t("e_task", lang));
      if (/custom/.test(V.task) && V.note.trim().length < 6) return this.err("note", t("e_note", lang)); this.step = 3;
    } else if (this.step === 3) {
      if (!V.time) ok = this.err("time", t("e_time", lang)) && ok; if (!V.plan) ok = this.err("plan", t("e_plan", lang)) && ok; if (!ok) return; this.step = 4;
    } else if (this.step === 4) {
      var a = V.addr.trim();
      if (a.length < 10 || !/[a-zऀ-ॿ]/i.test(a)) ok = this.err("addr", t("e_addr", lang)) && ok;
      else if (/\b(gaya|delhi|mumbai|kolkata|ranchi|bhagalpur|muzaffarpur|darbhanga|varanasi|lucknow|bangalore|bengaluru|pune|hyderabad|chennai)\b|गया|दिल्ली|मुंबई|कोलकाता|रांची/i.test(a)) ok = this.err("addr", t("e_area", lang)) && ok;
      if (V.land.length > 80) ok = this.err("land", t("e_land", lang)) && ok;
      if (V.end === "diff" && V.endAddr.trim().length < 6) ok = this.err("endAddr", t("e_endaddr", lang)) && ok;
      if (!/^[A-Za-zऀ-ॿ][A-Za-zऀ-ॿ .'-]{1,59}$/.test(V.name.trim())) ok = this.err("name", t("e_name", lang)) && ok;
      if (!/^[6-9]\d{9}$/.test(V.ph)) ok = this.err("ph", t("e_phone", lang)) && ok;
      if (!ok) { var f = this.root.querySelector(".tbf-er.show"); if (f) f.scrollIntoView({ block: "center" }); return; } this.step = 5;
    } else if (this.step === 5) { this.step = 6; this.render(); this.sent = this.data(); if (this.opts.onSent) this.opts.onSent(this.sent); return; }
    this.render();
  };
  Form.prototype.finish = function () { var d = this.sent || this.data(); this.close(); if (this.opts.onSend) this.opts.onSend(d); };
  Form.prototype.data = function () {
    var V = this.V, lang = this.lang, mo = this.money(), d = dates(lang).find(function (x) { return x.v === V.date; }) || {}, st = this.startMin();
    return { answers: JSON.parse(JSON.stringify(V)), lang: lang, svc: V.svc, svcName: this.svcName(V.svc), task: this.task(), date: d.short, dateLong: d.t, time: V.time === "now" ? t("now", lang) : t12(st),
      hours: mo.plan.hours, plan: mo.plan.plan || "", planKey: mo.plan.key, base: mo.base, gst: mo.gst, ret: mo.ret, total: mo.total, addr: V.addr, land: V.land, end: V.end, endAddr: V.endAddr,
      name: V.name.trim(), ph: V.ph, female: V.female, note: V.note, fixed: !!mo.plan.plan };
  };

  /* ---------- auto-play (for "Watch a booking") ---------- */
  Form.prototype.finger = function (el) {
    var fg = this.root.querySelector(".tbf-fg"), ir = this.inner.getBoundingClientRect(), r = el.getBoundingClientRect(), k = this.k;
    fg.style.opacity = 1; fg.style.transform = "translate(" + ((r.left + r.width * .62 - ir.left) / k) + "px," + ((r.top + r.height / 2 - ir.top) / k) + "px)";
  };
  Form.prototype.auto = function (acts, gate, done) {
    var self = this, i = 0, fg = this.root.querySelector(".tbf-fg");
    function wait(ms) { return new Promise(function (res) { var t0 = Date.now(), left = ms; (function tick() { gate().then(function () { left -= Math.min(60, left); if (left <= 0) res(); else setTimeout(tick, 60); }); })(); }); }
    function q(sel) { return self.root.querySelector(sel); }
    function show(el) { var m = self.main, er = el.getBoundingClientRect(), mr = m.getBoundingClientRect(); if (er.top < mr.top + 10 || er.bottom > mr.bottom - 10) m.scrollTop += (er.top - mr.top) - mr.height * .38; }
    async function tap(sel) { var el = q(sel); if (!el) return; if (!el.closest(".tbf-dock")) show(el); var row = el.closest(".tbf-chips"); if (row) row.scrollLeft = Math.max(0, el.offsetLeft - 60); await wait(260); self.finger(el); await wait(520); fg.classList.add("press"); await wait(130); fg.classList.remove("press"); el.click(); await wait(220); }
    async function type(sel, txt) { var el = q(sel); if (!el) return; show(el); await wait(200); self.finger(el); await wait(420); fg.style.opacity = 0; el.focus({ preventScroll: true }); for (var c = 1; c <= txt.length; c++) { el.value = txt.slice(0, c); el.dispatchEvent(new Event("input", { bubbles: true })); await wait(txt.length > 24 ? 28 : 55); } el.blur(); await wait(250); }
    (async function run() {
      for (; i < acts.length; i++) { var a = acts[i];
        if (a.wait) await wait(a.wait); else if (a.tap) await tap(a.tap); else if (a.type) await type(a.type[0], a.type[1]);
        else if (a.scroll) { var el = q(a.scroll); if (el) { var m = self.main, er = el.getBoundingClientRect(), mr = m.getBoundingClientRect(); var target = m.scrollTop + (er.top - mr.top) - 20, from = m.scrollTop; for (var s = 1; s <= 12; s++) { m.scrollTop = from + (target - from) * s / 12; await wait(30); } } }
      }
      fg.style.opacity = 0; if (done) done(self.sent || self.data());
    })();
  };

  /* ---------- WhatsApp-side html for demo.js ---------- */
  function ctaHtml(lang) { return '<img class="wab" alt="Trusbee" src="/assets/img/demo/wa-banner.jpg">' + wa(L(DATA.cta, lang).replace("{URG}", t("urg_btn", lang))) + '<div class="waft">' + esc(t("cta_foot", lang)) + "</div>"; }
  function summaryHtml(d, lang) {
    var ic = { hospital: "🏥", elderly: "🤝", urgent: "🆘", personal: "🧰", driver: "🚗", event: "🎉", compassion: "🕊️" }[d.svc] || "🐝";
    var L1 = [t("sum_h", lang), "", ic + " *" + d.svcName + "*", "📌 " + d.task];
    if (d.note) L1.push("📝 " + d.note);
    L1.push(t("s_contact", lang) + " " + d.name + ", " + d.ph);
    L1.push("📅 " + d.date + "  ⏰ " + d.time + "  ⏳ " + t("s_hrs", lang, { n: d.hours }));
    L1.push((d.svc === "driver" ? t("s_pick", lang) : t("s_addr", lang)) + " " + d.addr + (d.land ? " · Landmark: " + d.land : ""));
    if (d.end === "diff") L1.push(t("s_end", lang) + " " + d.endAddr);
    L1.push("", t("s_svc", lang) + " " + inr(d.base) + (d.plan ? " (" + d.plan + " (" + d.hours + "h) · " + t("fixed", lang) + ")" : ""), t("s_gst", lang) + " " + inr(d.gst), t("s_arr", lang),
      d.ret ? t("s_ret", lang) + " " + inr(d.ret) : t("s_ret0", lang), t("s_total", lang) + " *" + inr(d.total) + "*", "", t("s_pay", lang));
    return wa(L1.join("\n"));
  }
  function planBillHtml(d, lang, extra) { var g = gst2(d.base + (extra || 0)); return t("pb_h", lang, { id: d.id || "" }) + "<br>" + t("pb_fixed", lang, { p: d.plan + " (" + d.hours + "h)", x: inr(d.base) }) + (extra ? "<br>" + t("pb_extra", lang, { x: inr(extra) }) : "") + "<br>" + t("pb_end", lang, { g: inr(g), t: inr(d.base + (extra || 0) + g + (d.ret || 0)) }); }
  function howtoHtml(lang) { return '<img class="howto" alt="How to book" src="/assets/img/demo/how-to-book-' + (lang === "en" ? "en" : "hi") + '.jpg">' + wa(t("howto", lang)); }

  window.TBForm = {
    open: function (host, lang, opts) { return new Form(host, lang, opts); },
    close: function () { if (CUR) CUR.close(true); },
    ctaHtml: ctaHtml, summaryHtml: summaryHtml, planBillHtml: planBillHtml, howtoHtml: howtoHtml, t: t, inr: inr, gst2: gst2, plans: plans, dates: dates
  };
})();
