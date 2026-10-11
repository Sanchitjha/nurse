(function(){
  const FLOWS={
   en:{sub:"online",s:[
    ["out","Hi"],
    ["typing"],["in","Hi! 👋 Welcome to <b>Trusbee</b> 🐝<br><br>Need a <b>trusted hand</b> for someone you love in Patna? Police-verified ✅, trained Bees for elder care 🧓, hospital help 🏥 and urgent support 🆘.<br><br>⚡ At your door in as little as <b>20 minutes</b>.<br><br>Please choose your language 👇",["English","हिन्दी","भोजपुरी"]],
    ["out","English"],
    ["typing"],["in","<b>Trusbee</b> — Trusted Care. Anywhere. Always.<br><br>We are currently serving Patna.<br><br><b>What can we do for your family today?</b> 💛"],
    ["rows",["🏥 Hospital Assist — ₹219/hr + GST","🆘 24×7 Urgent Assist — ₹269/hr + GST","🤝 Elderly Care — ₹199/hr + GST","🧰 Personal Assist — ₹199/hr + GST","🎉 Event Assist — ₹249/hr + GST","🕊️ Compassion Support — ₹219/hr + GST","🚗 Driver Assist — ₹219/hr + GST","🛡️ Security Assist — coming soon","🐾 Pet Care — coming soon"]],
    ["out","🏥 Hospital Assist"],
    ["typing"],["in","Great choice — <b>Hospital Assist</b>.<br>What exactly do you need? 👇"],
    ["rows",["Doctor consultation","Hospital admission","Hospital discharge","Diagnostic tests","Patient attendant","Report collection","Medicine pickup","Overnight support"]],
    ["out","Patient attendant"],
    ["typing"],["in","📅 When do you need the Bee?<br><br>⚡ <b>Instant</b> — a trusted Bee at your door in as little as 20 minutes, subject to availability.",["Now","Today","Tomorrow"]],
    ["out","Tomorrow"],
    ["typing"],["in","⏰ What time should the Bee arrive?",["9:00 AM","11:00 AM","Other time"]],
    ["out","9:00 AM"],
    ["typing"],["in","⏳ <b>How many hours do you need?</b><br><br>From 3 hours we apply a <b>fixed care plan</b> — one price for the block, and it is less than the hourly meter.",["2 hours","6 hours · Half Day Care","9 hours · Extended Care","12 hours · Full Shift Care"]],
    ["out","6 hours · Half Day Care"],
    ["typing"],["in","📍 Where should the Bee arrive? Please share the full address with a nearby landmark.<br><br><i>Example: B-14, East Lohanipur, Kadamkuan, near SBI ATM.</i>"],
    ["out","PMCH, Ashok Rajpath, Patna"],
    ["typing"],["in","📍 <b>Where should the Bee complete the service?</b><br><br>🔁 Same as arrival location — free<br>➡️ Different location — ₹49",["🔁 Same as arrival","➡️ Different"]],
    ["out","🔁 Same as arrival"],
    ["typing"],["in","👤 Who should our Bee contact on arrival? Please share a <b>name and phone number</b>.<br><br><i>Example: Sunil Kumar, 98765 43210</i>"],
    ["out","Sunil Kumar, 98765 43210"],
    ["typing"],["in","📋 <b>Please confirm your booking</b><br><br>🏥 Hospital Assist<br>📌 Patient attendant<br>👤 Contact: Sunil Kumar, 98765 43210<br>📅 Tomorrow ⏰ 9:00 AM ⏳ 6 hours<br>📍 PMCH, Ashok Rajpath, Patna<br><br>💰 Half Day Care · 6h: <b>₹849</b><br>➕ 18% GST, shown as CGST 9% + SGST 9%<br>🐝 Bee Arrival Fee ₹0–99, confirmed when your Bee is assigned<br>🔁 Return support: free, same as arrival",["✅ Confirm","❌ Cancel"]],
    ["out","✅ Confirm"],
    ["typing"],["in","✅ <b>Booking received!</b> ID <b>TB0042</b><br><br>Our team will assign a verified Bee and share their name and photo ID shortly.<br><br>🔄 Need to change or cancel? Type <b>modify</b> or <b>cancel</b> here."],
    ["typing"],["in","🔐 <b>Your service PINs — keep these safe</b><br><br>▶️ <b>Start PIN 4821</b> — give this to the Bee only when they arrive.<br>⏹️ <b>End PIN 7390</b> — give this only when the work is done.<br><br><i>The clock, and your bill, start only when the Start PIN is entered.</i>"],
    ["typing"],["in","🏥 <b>Patient attendant — good to know</b><br>✅ Share the patient's routine: food, toilet and medicine timings.<br>🚫 Bees do not give injections, change dressings or do any nursing task.<br>👩 Female Bees are available 9 AM – 6 PM — reply <b>female Bee</b> if you would prefer one."],
    ["typing"],["in","🐝 <b>Your Bee is assigned!</b><br>👤 Ravi Kumar<br>🪪 Verified ID: BEE-04<br>⏰ Arrival: 9:00 AM<br><br>Your Bee carries a Trusbee photo ID. Please check it on arrival."],
    ["typing"],["in","📞 <b>Your Bee for this visit:</b> Ravi Kumar<br>Call or message on WhatsApp.<br><br>🆘 Bee not answering, or any concern? Call Trusbee right away on <b>+91 92881 81211</b>."],
    ["typing"],["in","🛵 Your Bee is on the way and will reach you in about 15 minutes."],
    ["typing"],["in","🚶 Your Bee has arrived (8:58 AM). Please check the photo ID, then give your <b>Start PIN</b> — the service and the clock begin only then."],
    ["out","4821"],
    ["typing"],["in","🕐 Your service has started (9:02 AM). Your Bee is now with you. The clock is running."],
    ["typing"],["in","🧾 <b>Your Trusbee bill — TB0042</b><br><br>🏥 Patient attendant<br>🕐 9:02 AM to 3:05 PM<br>⏳ Time billed: 6h <i>(free 15-minute cushion)</i><br>📦 Half Day Care · 6h: <b>₹849</b><br>➕ 18% GST, as CGST 9% + SGST 9%<br>🐝 Bee Arrival Fee: ₹29<br>🔁 Return support: free<br><br>Pay by UPI using the QR below 👇"],
    ["typing"],["in","🧾 Tax invoice TB/2026-27/0042 — GST invoice for your records."],
    ["out","📸 Payment screenshot"],
    ["typing"],["in","✅ Payment received — thank you! 💛<br><br>🐝 Quick question — <b>how was the overall service?</b>",["⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐"]]
   ]},
   hi:{sub:"ऑनलाइन",s:[
    ["out","Hi"],
    ["typing"],["in","नमस्ते! 👋 <b>Trusbee</b> में आपका स्वागत है 🐝<br><br>पटना में अपने किसी प्रियजन के लिए <b>भरोसेमंद साथी</b> चाहिए? पुलिस-सत्यापित ✅, प्रशिक्षित Bees — बुज़ुर्गों की देखभाल 🧓, अस्पताल में मदद 🏥 और तत्काल सहायता 🆘।<br><br>⚡ आपके दरवाज़े पर सिर्फ़ <b>20 मिनट</b> में।<br><br>कृपया अपनी भाषा चुनें 👇",["English","हिन्दी","भोजपुरी"]],
    ["out","हिन्दी"],
    ["typing"],["in","<b>Trusbee</b> — भरोसेमंद देखभाल। कहीं भी। हमेशा।<br><br>हम अभी पटना में सेवा दे रहे हैं।<br><br><b>आपके परिवार के लिए हम क्या करें?</b> 💛"],
    ["rows",["🏥 अस्पताल सहायता — ₹219/घंटा + GST","🆘 24×7 तत्काल सहायता — ₹269/घंटा + GST","🤝 बुज़ुर्गों की देखभाल — ₹199/घंटा + GST","🧰 व्यक्तिगत सहायता — ₹199/घंटा + GST","🎉 कार्यक्रम सहायता — ₹249/घंटा + GST","🕊️ संवेदना सहयोग — ₹219/घंटा + GST","🚗 ड्राइवर सहायता — ₹219/घंटा + GST","🛡️ सुरक्षा सहायता — जल्द आ रहा है","🐾 पेट केयर — जल्द आ रहा है"]],
    ["out","🏥 अस्पताल सहायता"],
    ["typing"],["in","बढ़िया — <b>अस्पताल सहायता</b>।<br>आपको ठीक-ठीक क्या चाहिए? 👇"],
    ["rows",["डॉक्टर कंसल्टेशन","हॉस्पिटल भर्ती","हॉस्पिटल डिस्चार्ज","डायग्नोस्टिक टेस्ट","मरीज़ अटेंडेंट","रिपोर्ट कलेक्शन","दवाई पिकअप","रात भर सहायता"]],
    ["out","मरीज़ अटेंडेंट"],
    ["typing"],["in","📅 Bee कब चाहिए?<br><br>⚡ <b>तुरंत</b> — भरोसेमंद Bee आपके दरवाज़े पर, उपलब्धता के आधार पर सिर्फ़ 20 मिनट में।",["अभी","आज","कल"]],
    ["out","कल"],
    ["typing"],["in","⏰ Bee को कितने बजे आना चाहिए?",["सुबह 9:00","सुबह 11:00","कोई और समय"]],
    ["out","सुबह 9:00"],
    ["typing"],["in","⏳ <b>आपको कितने घंटे चाहिए?</b><br><br>3 घंटे से हम <b>तय केयर प्लान</b> लगाते हैं — पूरे ब्लॉक की एक क़ीमत, और प्रति घंटा मीटर से कम।",["2 घंटे","6 घंटे · हाफ़ डे केयर","9 घंटे · एक्सटेंडेड केयर","12 घंटे · फ़ुल शिफ़्ट केयर"]],
    ["out","6 घंटे · हाफ़ डे केयर"],
    ["typing"],["in","📍 Bee कहाँ पहुँचे? कृपया नज़दीकी लैंडमार्क के साथ पूरा पता भेजें।<br><br><i>उदाहरण: B-14, ईस्ट लोहानीपुर, कदमकुआँ, SBI ATM के पास।</i>"],
    ["out","PMCH, अशोक राजपथ, पटना"],
    ["typing"],["in","📍 <b>Bee सेवा कहाँ पूरी करे?</b><br><br>🔁 आगमन स्थान पर ही — मुफ़्त<br>➡️ अलग स्थान पर — ₹49",["🔁 आगमन स्थान","➡️ अलग स्थान"]],
    ["out","🔁 आगमन स्थान"],
    ["typing"],["in","👤 पहुँचने पर हमारा Bee किससे संपर्क करे? कृपया <b>नाम और फ़ोन नंबर</b> बताएँ।<br><br><i>उदाहरण: सुनील कुमार, 98765 43210</i>"],
    ["out","सुनील कुमार, 98765 43210"],
    ["typing"],["in","📋 <b>कृपया अपनी बुकिंग की पुष्टि करें</b><br><br>🏥 अस्पताल सहायता<br>📌 मरीज़ अटेंडेंट<br>👤 संपर्क: सुनील कुमार, 98765 43210<br>📅 कल ⏰ सुबह 9:00 ⏳ 6 घंटे<br>📍 PMCH, अशोक राजपथ, पटना<br><br>💰 हाफ़ डे केयर · 6 घंटे: <b>₹849</b><br>➕ 18% GST, CGST 9% + SGST 9% के रूप में<br>🐝 Bee आगमन शुल्क ₹0–99, Bee तय होने पर पुष्ट<br>🔁 वापसी सहयोग: मुफ़्त, आगमन स्थान पर",["✅ पुष्टि करें","❌ रद्द करें"]],
    ["out","✅ पुष्टि करें"],
    ["typing"],["in","✅ <b>बुकिंग मिल गई!</b> ID <b>TB0042</b><br><br>हमारी टीम सत्यापित Bee नियुक्त कर उनका नाम और फ़ोटो ID जल्द भेजेगी।<br><br>🔄 बदलना या रद्द करना है? यहीं <b>modify</b> या <b>cancel</b> लिखें।"],
    ["typing"],["in","🔐 <b>आपके सर्विस PIN — सुरक्षित रखें</b><br><br>▶️ <b>Start PIN 4821</b> — Bee के आने पर ही यह PIN दें।<br>⏹️ <b>End PIN 7390</b> — काम पूरा होने पर ही यह PIN दें।<br><br><i>घड़ी और आपका बिल तभी शुरू होते हैं जब Start PIN डाला जाता है।</i>"],
    ["typing"],["in","🏥 <b>मरीज़ अटेंडेंट — ज़रूरी बातें</b><br>✅ मरीज़ की दिनचर्या बताएँ: खाना, शौच और दवाई का समय।<br>🚫 Bee इंजेक्शन, ड्रेसिंग या नर्सिंग का कोई काम नहीं करती।<br>👩 महिला Bees सुबह 9 – शाम 6 उपलब्ध हैं — चाहें तो <b>female Bee</b> लिखें।"],
    ["typing"],["in","🐝 <b>आपके लिए Bee नियुक्त हो गई!</b><br>👤 रवि कुमार<br>🪪 सत्यापित ID: BEE-04<br>⏰ आगमन: सुबह 9:00<br><br>आपकी Bee के पास Trusbee फ़ोटो ID होगी। आने पर ज़रूर देखें।"],
    ["typing"],["in","📞 <b>इस विज़िट के लिए आपकी Bee:</b> रवि कुमार<br>WhatsApp पर कॉल या संदेश करें।<br><br>🆘 Bee जवाब नहीं दे रही, या कोई चिंता? तुरंत <b>+91 92881 81211</b> पर कॉल करें।"],
    ["typing"],["in","🛵 आपकी Bee रास्ते में हैं और लगभग 15 मिनट में पहुँच जाएँगी।"],
    ["typing"],["in","🚶 आपकी Bee पहुँच गई हैं (सुबह 8:58)। फ़ोटो ID जाँचें, फिर अपना <b>Start PIN</b> दें — तभी सेवा और घड़ी शुरू होगी।"],
    ["out","4821"],
    ["typing"],["in","🕐 आपकी सेवा शुरू हो गई है (सुबह 9:02)। Bee अब आपके साथ हैं। घड़ी चालू है।"],
    ["typing"],["in","🧾 <b>आपका Trusbee बिल — TB0042</b><br><br>🏥 मरीज़ अटेंडेंट<br>🕐 सुबह 9:02 से दोपहर 3:05<br>⏳ बिल किया समय: 6 घंटे <i>(15 मिनट की मुफ़्त छूट)</i><br>📦 हाफ़ डे केयर · 6 घंटे: <b>₹849</b><br>➕ 18% GST, CGST 9% + SGST 9% के रूप में<br>🐝 Bee आगमन शुल्क: ₹29<br>🔁 वापसी सहयोग: मुफ़्त<br><br>नीचे दिए QR से UPI पर भुगतान करें 👇"],
    ["typing"],["in","🧾 टैक्स इनवॉइस TB/2026-27/0042 — आपके रिकॉर्ड के लिए GST इनवॉइस।"],
    ["out","📸 भुगतान का स्क्रीनशॉट"],
    ["typing"],["in","✅ भुगतान मिल गया — धन्यवाद! 💛<br><br>🐝 एक छोटा सवाल — <b>सेवा कुल मिलाकर कैसी रही?</b>",["⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐"]]
   ]},
   bho:{sub:"ऑनलाइन",s:[
    ["out","Hi"],
    ["typing"],["in","प्रणाम! 👋 <b>Trusbee</b> में रउआ के स्वागत बा 🐝<br><br>पटना में आपन कवनो अपना खातिर <b>भरोसेमंद साथी</b> चाहीं? पुलिस-सत्यापित ✅, प्रशिक्षित Bees — बुजुर्गन के देखभाल 🧓, अस्पताल में मदद 🏥 आ तुरंते सहायता 🆘।<br><br>⚡ रउआ दुआर पर खाली <b>20 मिनट</b> में।<br><br>कृपया आपन भाषा चुनीं 👇",["English","हिन्दी","भोजपुरी"]],
    ["out","भोजपुरी"],
    ["typing"],["in","<b>Trusbee</b> — भरोसेमंद देखभाल। कहीं भी। हमेशा।<br><br>हमनी अबही पटना में सेवा देत बानी।<br><br><b>रउआ परिवार खातिर हमनी का करीं?</b> 💛"],
    ["rows",["🏥 अस्पताल सहायता — ₹219/घंटा + GST","🆘 24×7 तुरंत सहायता — ₹269/घंटा + GST","🤝 बुजुर्गन के देखभाल — ₹199/घंटा + GST","🧰 निजी सहायता — ₹199/घंटा + GST","🎉 कार्यक्रम सहायता — ₹249/घंटा + GST","🕊️ संवेदना सहयोग — ₹219/घंटा + GST","🚗 ड्राइवर सहायता — ₹219/घंटा + GST","🛡️ सुरक्षा सहायता — जल्दिये आवत बा","🐾 पेट केयर — जल्दिये आवत बा"]],
    ["out","🏥 अस्पताल सहायता"],
    ["typing"],["in","बढ़िया — <b>अस्पताल सहायता</b>।<br>रउआ के ठीक-ठीक का चाहीं? 👇"],
    ["rows",["डॉक्टर कंसल्टेशन","हॉस्पिटल भर्ती","हॉस्पिटल डिस्चार्ज","डायग्नोस्टिक टेस्ट","मरीज अटेंडेंट","रिपोर्ट कलेक्शन","दवाई पिकअप","रात भर सहायता"]],
    ["out","मरीज अटेंडेंट"],
    ["typing"],["in","📅 Bee कब चाहीं?<br><br>⚡ <b>तुरंते</b> — भरोसा वाला Bee रउआ दुआर पर, उपलब्धता के हिसाब से खाली 20 मिनट में।",["अबही","आज","बिहान"]],
    ["out","बिहान"],
    ["typing"],["in","⏰ Bee के कतना बजे आवे के चाहीं?",["सबेरे 9:00","सबेरे 11:00","कवनो अउरी समय"]],
    ["out","सबेरे 9:00"],
    ["typing"],["in","⏳ <b>रउआ के कतना घंटा चाहीं?</b><br><br>3 घंटा से हमनी <b>तय केयर प्लान</b> लगावेनी — पूरा ब्लॉक के एगो दाम, आ प्रति घंटा मीटर से कम।",["2 घंटा","6 घंटा · हाफ़ डे केयर","9 घंटा · एक्सटेंडेड केयर","12 घंटा · फ़ुल शिफ़्ट केयर"]],
    ["out","6 घंटा · हाफ़ डे केयर"],
    ["typing"],["in","📍 Bee कहाँ पहुँचे? कृपया नजदीकी लैंडमार्क संगे पूरा पता भेजीं।<br><br><i>उदाहरण: B-14, ईस्ट लोहानीपुर, कदमकुआँ, SBI ATM के लगे।</i>"],
    ["out","PMCH, अशोक राजपथ, पटना"],
    ["typing"],["in","📍 <b>Bee सेवा कहाँ पूरा करे?</b><br><br>🔁 आगमन जगह पर ही — मुफ़्त<br>➡️ अलग जगह पर — ₹49",["🔁 आगमन जगह","➡️ अलग जगह"]],
    ["out","🔁 आगमन जगह"],
    ["typing"],["in","👤 पहुँचला पर हमार Bee केकरा से संपर्क करे? कृपया <b>नाम आ फोन नंबर</b> बताईं।<br><br><i>उदाहरण: सुनील कुमार, 98765 43210</i>"],
    ["out","सुनील कुमार, 98765 43210"],
    ["typing"],["in","📋 <b>आपन बुकिंग के पुष्टि करीं</b><br><br>🏥 अस्पताल सहायता<br>📌 मरीज अटेंडेंट<br>👤 संपर्क: सुनील कुमार, 98765 43210<br>📅 बिहान ⏰ सबेरे 9:00 ⏳ 6 घंटा<br>📍 PMCH, अशोक राजपथ, पटना<br><br>💰 हाफ़ डे केयर · 6 घंटा: <b>₹849</b><br>➕ 18% GST, CGST 9% + SGST 9% के रूप में<br>🐝 Bee आगमन शुल्क ₹0–99, Bee तय होखला पर पुष्ट<br>🔁 वापसी सहयोग: मुफ़्त, आगमन जगह पर",["✅ पक्का करीं","❌ रद्द करीं"]],
    ["out","✅ पक्का करीं"],
    ["typing"],["in","✅ <b>बुकिंग मिल गइल!</b> ID <b>TB0042</b><br><br>हमार टीम सत्यापित Bee तय क के उनकर नाम आ फोटो ID जल्दी भेजी।<br><br>🔄 बदले भा रद्द करे के बा? एहिजे <b>modify</b> भा <b>cancel</b> लिखीं।"],
    ["typing"],["in","🔐 <b>रउआ के सर्विस PIN — सम्हार के राखीं</b><br><br>▶️ <b>Start PIN 4821</b> — Bee के आवे पर ही ई PIN दीं।<br>⏹️ <b>End PIN 7390</b> — काम पूरा भइला पर ही ई PIN दीं।<br><br><i>घड़ी आ रउआ बिल तबे शुरू होला जब Start PIN डालल जाला।</i>"],
    ["typing"],["in","🏥 <b>मरीज अटेंडेंट — जरूरी बात</b><br>✅ मरीज के दिनचर्या बताईं: खाना, शौच आ दवाई के समय।<br>🚫 Bee इंजेक्शन, ड्रेसिंग भा नर्सिंग के कवनो काम ना करे।<br>👩 महिला Bee सबेरे 9 – साँझ 6 उपलब्ध बाड़ी — चाहीं त <b>female Bee</b> लिखीं।"],
    ["typing"],["in","🐝 <b>रउआ खातिर Bee तय हो गइल!</b><br>👤 रवि कुमार<br>🪪 सत्यापित ID: BEE-04<br>⏰ पहुँचे के समय: सबेरे 9:00<br><br>रउआ Bee लगे Trusbee फोटो ID रही। आवे पर जरूर देख लीं।"],
    ["typing"],["in","📞 <b>एह विज़िट खातिर रउआ Bee:</b> रवि कुमार<br>WhatsApp पर कॉल भा संदेश करीं।<br><br>🆘 Bee जवाब ना देत बाड़न, भा कवनो चिंता? तुरंते <b>+91 92881 81211</b> पर कॉल करीं।"],
    ["typing"],["in","🛵 रउआ Bee रस्ता में बाड़न आ करीब 15 मिनट में पहुँच जइहें।"],
    ["typing"],["in","🚶 रउआ Bee पहुँच गइल बाड़न (सबेरे 8:58)। फोटो ID देख लीं, फेर आपन <b>Start PIN</b> दीं — तबे सेवा आ घड़ी शुरू होई।"],
    ["out","4821"],
    ["typing"],["in","🕐 रउआ सेवा शुरू हो गइल बा (सबेरे 9:02)। Bee अब रउआ साथे बाड़न। घड़ी चालू बा।"],
    ["typing"],["in","🧾 <b>रउआ के Trusbee बिल — TB0042</b><br><br>🏥 मरीज अटेंडेंट<br>🕐 सबेरे 9:02 से दुपहरिया 3:05<br>⏳ बिल कइल समय: 6 घंटा <i>(15 मिनट के मुफ़्त छूट)</i><br>📦 हाफ़ डे केयर · 6 घंटा: <b>₹849</b><br>➕ 18% GST, CGST 9% + SGST 9% के रूप में<br>🐝 Bee आगमन शुल्क: ₹29<br>🔁 वापसी सहयोग: मुफ़्त<br><br>नीचे दिहल QR से UPI पर भुगतान करीं 👇"],
    ["typing"],["in","🧾 टैक्स इनवॉइस TB/2026-27/0042 — रउआ रिकॉर्ड खातिर GST इनवॉइस।"],
    ["out","📸 भुगतान के स्क्रीनशॉट"],
    ["typing"],["in","✅ भुगतान मिल गइल — धन्यवाद! 💛<br><br>🐝 एगो छोट सवाल — <b>सेवा कुल मिलाके कइसन रहल?</b>",["⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐"]]
   ]}
  };
  /* 5 Oct 2026: the booking part is now the "Book your Bee 🐝" form (demo-form.js); the visit story after ✅ Confirm is unchanged */
  if(window.TBForm)["en","hi","bho"].forEach(L=>{const s=FLOWS[L].s;FLOWS[L].s=s.slice(0,4).concat([["typing"],["cta"],["menu3"],["form"],["typing"],["sum"],["sumbtn"]],s.slice(32));});
  const PRESET={en:{addr:"PMCH, Ashok Rajpath, Patna",land:"Near the main gate",name:"Sunil Kumar"},
    hi:{addr:"PMCH, अशोक राजपथ, पटना",land:"मुख्य गेट के पास",name:"सुनील कुमार"},bho:{addr:"PMCH, अशोक राजपथ, पटना",land:"मेन गेट के लगे",name:"सुनील कुमार"}};
  let runTok=0,lastForm=null;
  const chat=document.getElementById("pchat"),statusEl=document.getElementById("pstatus"),playBtn=document.getElementById("demoPlay");
  let lang="en",i=0,playing=false,timer=null,typingEl=null,mi=0;
  function setBtn(state){playBtn.classList.toggle("playing", state==="pause");}
  function setLang(l){lang=l;document.querySelectorAll(".demoLang").forEach(x=>x.classList.toggle("on",x.dataset.lang===l));}
  document.querySelectorAll(".demoLang").forEach(x=>x.addEventListener("click",()=>{stop();setLang(x.dataset.lang);reset();play();}));
  function add(dir,html,btns,rows){
    const d=document.createElement("div");d.className="pmsg "+(dir==="in"?"pin":"pout");
    let s=html||"";if(rows)s+=rows.map(r=>`<div class="prow">${r}</div>`).join("");
    if(btns&&btns.length)s+='<div class="pbtns">'+btns.map(b=>`<div class="pb">${b}</div>`).join("")+"</div>";
    s+=`<div class="pmeta">9:4${mi++%10} ✓✓</div>`;d.innerHTML=s;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;
  }
  function showTyping(){statusEl.textContent="typing…";typingEl=document.createElement("div");typingEl.className="pmsg pin";typingEl.textContent="• • •";chat.appendChild(typingEl);chat.scrollTop=chat.scrollHeight;}
  function hideTyping(){statusEl.textContent=FLOWS[lang].sub;if(typingEl){typingEl.remove();typingEl=null;}}
  function step(){
    if(!playing)return;const sc=FLOWS[lang].s;
    if(i>=sc.length){playing=false;setBtn("play");return;}
    const [kind,a,b]=sc[i++];
    if(kind==="typing"){showTyping();timer=setTimeout(step,700);return;}
    hideTyping();
    const F=window.TBForm;
    if(kind==="cta"){add("in",F.ctaHtml(lang),["↗ "+F.t("cta_btn",lang)]);chat.lastChild.querySelector(".pb").classList.add("cta");timer=setTimeout(step,1700);return;}
    if(kind==="menu3"){add("in",F.t("menu3",lang).replace(/\n/g,"<br>").replace(/\*([^*\n]+?)\*/g,"<b>$1</b>"),[F.t("b_urgent",lang),F.t("b_chat",lang),F.t("b_help",lang)]);timer=setTimeout(step,1200);return;}
    if(kind==="form"){runForm();return;}
    if(kind==="sum"){add("in",F.summaryHtml(lastForm,lang));timer=setTimeout(step,1800);return;}
    if(kind==="sumbtn"){add("in",F.t("sum_btn",lang),[F.t("b_yes",lang),F.t("b_edit",lang),F.t("b_no",lang)]);timer=setTimeout(step,1300);return;}
    if(kind==="rows")add("in","",null,a);
    else add(kind,a,b);
    const delay=kind==="out"?800:1150+Math.min((a||"").length*4,900);
    timer=setTimeout(step,delay);
  }
  /* the form opens in the phone and fills itself in, like a family would */
  function runForm(){
    const F=window.TBForm,tok=++runTok,P=PRESET[lang],host=document.querySelector("#demo .pscreen");
    const cta=[...chat.querySelectorAll(".pb.cta")].pop();if(cta)cta.style.background="#e7f3ee";
    const gate=()=>new Promise(res=>{(function w(){if(tok!==runTok)return;playing?res():setTimeout(w,150);})();});
    const tomorrow=F.dates(lang)[1].v;
    const f=F.open(host,lang,{onSend:d=>{if(tok!==runTok)return;lastForm=d;if(cta)cta.style.background="";timer=setTimeout(step,500);}});
    f.auto([{wait:900},{tap:'[data-svc="hospital"]'},{wait:900},{tap:'[data-task="h_attendant"]'},{wait:350},{tap:"#tbfGo"},{wait:700},
      {tap:'[data-date="'+tomorrow+'"]'},{wait:250},{tap:'[data-time="09:00"]'},{wait:250},{tap:'[data-plan="t6"]'},{wait:700},{tap:"#tbfGo"},{wait:600},
      {type:["#tbf_addr",P.addr]},{type:["#tbf_land",P.land]},{type:["#tbf_name",P.name]},{type:["#tbf_ph","9876543210"]},{wait:300},{tap:"#tbfGo"},
      {wait:1500},{scroll:".tbf-price"},{wait:1800},{tap:"#tbfGo"},{wait:1500},{tap:"#tbfOpenWa"}],gate);
  }
  function play(){if(playing)return;if(i>=FLOWS[lang].s.length)reset();playing=true;setBtn("pause");step();}
  function stop(){playing=false;clearTimeout(timer);setBtn("play");}
  function reset(){clearTimeout(timer);runTok++;if(window.TBForm)window.TBForm.close();i=0;mi=0;chat.innerHTML="";hideTyping();}
  playBtn.addEventListener("click",()=>{playing?stop():play();});
  document.getElementById("demoReplay").addEventListener("click",()=>{stop();reset();play();});
  // auto-play once when scrolled into view
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting&&i===0){play();io.disconnect();}}),{threshold:.4});
  io.observe(document.getElementById("demo"));
})();

/* ---------- INTERACTIVE "TRY IT LIVE" BOT (same phone, real flow logic) ---------- */
(function(){
  const chat=document.getElementById("pchat");
  const statusEl=document.getElementById("pstatus");
  const staticBar=document.getElementById("pinputStatic");
  const liveBar=document.getElementById("pinputLive");
  const inp=document.getElementById("liveInp");
  const liveSend=document.getElementById("liveSend");
  const liveBtn=document.getElementById("demoLive");
  const playBtn=document.getElementById("demoPlay");
  const replayBtn=document.getElementById("demoReplay");
  const WA="https://wa.me/919288181212?text=Hi";
  const GST_RATE=0.18, GST_ON=true;
    function GSTCALC(base){const b=Math.round(base); if(!GST_ON) return {base:b,gst:0,total:b}; const g=Math.round(b*GST_RATE); return {base:b,gst:g,total:b+g};}
    /* Services, rates and live flags come from the catalogue the bot uses, so the demo can
       never disagree with the real bot about what is bookable. The literal below is only a
       fallback if the catalogue file fails to load. */
    const FALLBACK_SERVICES={hospital:["🏥","Hospital Assist",219,true],urgent:["🆘","24×7 Urgent Assist",269,true],elderly:["🤝","Elderly Care",199,true],personal:["🧰","Personal Assist",199,true],event:["🎉","Event Assist",249,true],compassion:["🕊️","Compassion Support",219,true],driver:["🚗","Driver Assist",219,true],bouncer:["🛡️","Security Assist",299,false],pet:["🐾","Pet Care",199,false]};
    const SERVICES=(function(){
      const cat=(window.TB_CAT&&window.TB_CAT.services)||null;
      if(!cat) return FALLBACK_SERVICES;
      const out={};
      Object.keys(cat).forEach(function(k){
        const c=cat[k], fb=FALLBACK_SERVICES[k]||[];
        out[k]=[c.emoji||fb[0]||"🐝",(c.name&&c.name.en)||fb[1]||k,c.rate,!!c.live];
      });
      return Object.keys(out).length?out:FALLBACK_SERVICES;
    })();
  // Catalogue-backed helpers for the demo
  function cSubs(svc){return (window.TB_CAT.subs[svc]||[]);}
  function cSub(svc,id){return cSubs(svc).find(x=>x.id===id)||null;}
  function cArr(km){km=+km;if(isNaN(km))return 0;for(const s of window.TB_CAT.fees.arrival){if(km<=s.maxKm)return s.fee;}return 99;}
  function cEnd(svc,id,lang){const s=cSub(svc,id);return s?(window.TB_CAT.end[s.tpl][lang]||window.TB_CAT.end[s.tpl].en):'';}
  function cNeedEnd(svc,id){const s=cSub(svc,id);return !!s;} /* P10 */
  const SUBS={
    hospital:[["OPD / appointment","Bee takes patient for OPD, manages queue & reports"],["Admission / discharge","Bee handles admission/discharge paperwork"],["Reports & pharmacy","Bee collects reports/medicines & delivers them"],["Bedside attendant","Bee stays beside the patient"],["Other","Tell us what you need"]],
    elderly:[["Companionship visit","Bee spends time & talks with your elder"],["Medicine reminder","Bee reminds medicines on time"],["Doctor visit accompany","Bee takes elder to check-up & back"],["Daily care & meals","Bee helps with meals & gentle care"],["Help with technology","Bee patiently teaches phone, WhatsApp & video calls"],["Other","Tell us what you need"]],
    urgent:[["Urgent hospital admission","Bee rushes to help with a night admission"],["Accompany to ER","Bee accompanies to ER — call 102 first"],["Car breakdown & accident assist","Bee assists at scene — call 102/100 FIRST"],["Other urgent help","Tell us the urgent situation"]],
  };
  const EMG="⚠️ For a medical emergency, call an ambulance / 102 FIRST, then us. We provide a trusted person by your side — not medical treatment.";
  const CANCELLED="No problem at all — nothing is booked. 🙏 Thank you for considering Trusbee 🐝 Type <b>hi</b> anytime to book again. 💛";
  // ---- Interactive demo translations (en/hi/bho) ----
  const DSVC={
    hospital:{en:"Hospital Assist",hi:"अस्पताल सहायता",bho:"अस्पताल सहायता"},
    elderly:{en:"Elderly Care",hi:"बुजुर्ग देखभाल",bho:"बुजुर्ग देखभाल"},
    urgent:{en:"24×7 Urgent Assist",hi:"24×7 अर्जेंट सहायता",bho:"24×7 अर्जेंट सहायता"},
    driver:{en:"Driver Assist",hi:"ड्राइवर सहायता",bho:"ड्राइवर सहायता"},
    personal:{en:"Personal Assist",hi:"पर्सनल सहायता",bho:"पर्सनल सहायता"},
    event:{en:"Event Assist",hi:"इवेंट सहायता",bho:"इवेंट सहायता"},
    bouncer:{en:"Security Assist",hi:"सुरक्षा सहायता",bho:"सुरक्षा सहायता"},
    compassion:{en:"Compassion Support",hi:"करुणा सहारा",bho:"करुणा सहारा"},
    pet:{en:"Pet Care",hi:"पेट देखभाल",bho:"पेट देखभाल"}
  };
  const DSUB={
    hospital:[
      {en:"OPD / appointment",hi:"OPD / अपॉइंटमेंट",bho:"OPD / अपॉइंटमेंट",d_en:"Bee takes patient for OPD, manages queue & reports",d_hi:"Bee मरीज़ को OPD ले जाते हैं, लाइन व रिपोर्ट संभालते हैं",d_bho:"Bee मरीज के OPD ले जालें, लाइन आ रिपोर्ट संभालेलें"},
      {en:"Admission / discharge",hi:"भर्ती / डिस्चार्ज",bho:"भर्ती / डिस्चार्ज",d_en:"Bee handles admission/discharge paperwork",d_hi:"Bee भर्ती/डिस्चार्ज की कागज़ी कार्रवाई संभालते हैं",d_bho:"Bee भर्ती/डिस्चार्ज के कागजी काम संभालेलें"},
      {en:"Reports & pharmacy",hi:"रिपोर्ट व दवाई",bho:"रिपोर्ट आ दवाई",d_en:"Bee collects reports/medicines & delivers them",d_hi:"Bee रिपोर्ट/दवाई लाकर पहुँचाते हैं",d_bho:"Bee रिपोर्ट/दवाई लाके पहुँचावेलें"},
      {en:"Bedside attendant",hi:"बेडसाइड अटेंडेंट",bho:"बेडसाइड अटेंडेंट",d_en:"Bee stays beside the patient",d_hi:"Bee मरीज़ के पास रहते हैं",d_bho:"Bee मरीज के लगे रहेलें"},
      {en:"Other",hi:"अन्य",bho:"दोसर",d_en:"Tell us what you need",d_hi:"हमें बताएं आपको क्या चाहिए",d_bho:"हमरा के बताईं रउआ के का चाहीं"}
    ],
    elderly:[
      {en:"Companionship visit",hi:"साथ समय बिताना",bho:"साथ समय बितावल",d_en:"Bee spends time & talks with your elder",d_hi:"Bee आपके बुज़ुर्ग के साथ समय बिताते व बात करते हैं",d_bho:"Bee रउआ के बुजुर्ग संगे समय बितावेलें आ बतियावेलें"},
      {en:"Medicine reminder",hi:"दवा रिमाइंडर",bho:"दवा रिमाइंडर",d_en:"Bee reminds medicines on time",d_hi:"Bee समय पर दवा याद दिलाते हैं",d_bho:"Bee समय पर दवा याद दिआवेलें"},
      {en:"Doctor visit accompany",hi:"डॉक्टर के पास साथ जाना",bho:"डॉक्टर के इहाँ साथ जाईं",d_en:"Bee takes elder to check-up & back",d_hi:"Bee बुज़ुर्ग को जाँच के लिए ले जाते व वापस लाते हैं",d_bho:"Bee बुजुर्ग के जाँच खातिर ले जालें आ वापस लावेलें"},
      {en:"Daily care & meals",hi:"दैनिक देखभाल व भोजन",bho:"रोजाना देखभाल आ भोजन",d_en:"Bee helps with meals & gentle care",d_hi:"Bee भोजन व कोमल देखभाल में मदद करते हैं",d_bho:"Bee भोजन आ कोमल देखभाल में मदद करेलें"},
      {en:"Help with technology",hi:"तकनीक सीखने में मदद",bho:"तकनीक सीखे में मदद",d_en:"Bee patiently teaches phone, WhatsApp & video calls",d_hi:"Bee धैर्य से फ़ोन, WhatsApp व वीडियो कॉल सिखाते हैं",d_bho:"Bee धीरज से फोन, WhatsApp आ वीडियो कॉल सिखावेलें"},
      {en:"Other",hi:"अन्य",bho:"दोसर",d_en:"Tell us what you need",d_hi:"हमें बताएं आपको क्या चाहिए",d_bho:"हमरा के बताईं रउआ के का चाहीं"}
    ],
    urgent:[
      {en:"Urgent hospital admission",hi:"अर्जेंट अस्पताल भर्ती",bho:"अर्जेंट अस्पताल भर्ती",d_en:"Bee rushes to help with a night admission",d_hi:"Bee रात की भर्ती में तुरंत मदद के लिए पहुँचते हैं",d_bho:"Bee रात के भर्ती में तुरंत मदद खातिर पहुँचेलें"},
      {en:"Accompany to ER",hi:"इमरजेंसी में साथ जाना",bho:"इमरजेंसी में साथ जाईं",d_en:"Bee accompanies to ER — call 102 first",d_hi:"Bee इमरजेंसी तक साथ जाते हैं — पहले 102 पर कॉल करें",d_bho:"Bee इमरजेंसी तक साथ जालें — पहिले 102 पर कॉल करीं"},
      {en:"Car breakdown & accident assist",hi:"गाड़ी खराबी / एक्सीडेंट मदद",bho:"गाड़ी खराबी / एक्सीडेंट मदद",d_en:"Bee assists at scene — call 102/100 FIRST",d_hi:"Bee मौके पर मदद करते हैं — पहले 102/100 पर कॉल करें",d_bho:"Bee मौका पर मदद करेलें — पहिले 102/100 पर कॉल करीं"},
      {en:"Other urgent help",hi:"अन्य अर्जेंट मदद",bho:"दोसर अर्जेंट मदद",d_en:"Tell us the urgent situation",d_hi:"हमें अर्जेंट स्थिति बताएं",d_bho:"हमरा के अर्जेंट हालात बताईं"}
    ]
  };
  const DT={
    en:{
      menu:'How can we help today? Pick a service 👇<br><i>(type cancel anytime to stop)</i>',
      pickSvc:'👆 Please tap a service above, or type its name.<br><i>Example: Hospital Assist, Elderly Care, or 24×7 Urgent</i>',
      soonTag:' · soon', availNow:(p)=>`₹${p}/hr · available now`, soonNote:(p)=>`~₹${p}/hr · launching soon`,
      soon:(ic,nm)=>`${ic} <b>${nm}</b> is launching soon! 🚀 Everything marked <i>available now</i> in the menu can be booked today.`,
      emg:'🆘 <b>24×7 Urgent Assist</b><br><br>⚠️ For a medical emergency, call an ambulance / 102 FIRST, then us. We provide a trusted person by your side — not medical treatment.',
      subAsk:(nm)=>`Great choice — <b>${nm}</b>. What exactly do you need? 👇`,
      pickSub:'👆 Please tap an option above, or type its name.<br><i>Example: Companionship visit</i>',
      otherAsk:'✍️ <b>Please describe what you need</b> in a line or two.<br><i>Example: Need someone to sit with my father at Medanta during dialysis, around 4 hours.</i>',
      otherShort:'🤔 Please add a little more detail so we can help.<br><i>Example: Need a Bee to collect medical reports from PMCH and drop home.</i>',
      otherNote:'🙏 Thank you — got it. If your request is something our verified Bees can safely help with, we’ll assign the right Bee for you. If it’s outside what we can do, we’ll tell you honestly and, where possible, point you to someone who can. 💛<br><br>Let’s continue 👇',
      custom:'Custom request: ',
      dateAsk:'📅 Which date do you need the Bee?<br><i>Example: today, tomorrow, or 18 Aug</i>',
      dateBad:'🤔 I didn’t catch a date. <br><i>Example: today, tomorrow, or 18 Aug</i>',
      datePast:'📅 We can’t book a past date. Please choose today or a future date.<br><i>Example: today, tomorrow, or 18 Aug</i>',
      timeAsk:'⏰ What time should the Bee arrive?<br><i>Example: 9 am or 2:30 pm</i>',
      timeBad:'🤔 That doesn’t look like a time.<br><i>Example: 9 am, 2:30 pm, or evening</i>',
      hoursAsk:'⏳ <b>How many hours do you need?</b><br>Book what you expect — you only pay for the time your Bee actually works. Finish early, pay less. 💛<br><br><b>Example:</b> book 3 hrs, Bee works 2 → you pay for <b>2 hrs</b>, not 3.<br><br>• Free 15-min cushion past your booked time.<br>• For shorter bookings, the minimum charge is half your booked hours. For 4 hrs or more, we charge 75% — since we reserve a Bee just for you.<br><br><i>Type the number of hours, e.g. 2</i>',
      hoursBad:'🤔 Please reply with a number of hours (1–24).<br><i>Example: 2</i>',
      addrAsk:'📍 Where should the Bee arrive? Please share the full address with a nearby landmark.<br><i>Example: B-14, East Lohanipur, Kadamkuan, near SBI ATM.</i>',
      endLocAsk:'📍 <b>Where should the Bee complete the service?</b><br>🔁 Same as arrival location (FREE) · ➡️ Different location (+₹49)',
      endSameBtn:'🔁 Same as arrival location', endDiffBtn:'➡️ Different location (+₹49)',
      endAddrAsk:'📍 Please share the <b>service end address</b> with a landmark.<br><i>Example: Jai Prabha Medanta, Kankarbagh</i>',
      addrBad:'🤔 I need a bit more detail.<br><i>Example: B-14, Patliputra Colony, near SBI ATM</i>',
      contactAsk:'👤 Who should the Bee contact on arrival? Name &amp; phone.<br><i>Example: Sunil Kumar, 98765 43210</i>',
      contactBad:'🤔 Please share a name and a valid <b>10-digit mobile number</b>.<br><i>Example: Sunil Kumar, 98765 43210</i>',
      confirm:(sv,d)=>`Please confirm 👇<br><br>${sv[0]} <b>${d.svcName}</b> — ${d.sub}<br>📅 ${d.date} ⏰ ${d.time}<br>⏳ ${d.hours} hour(s)<br>📍 ${d.addr}<br>${d.endChoice==="diff"&&d.endAddr?`📍 Service end: ${d.endAddr}<br>`:''}👤 ${d.contact}<br>${d.startsT?`🟢 Service Starts: ${d.startsT}<br>`:''}${d.endsT?`🔴 Service Ends: ${d.endsT}<br>`:''}${d.eta?`⏱ Est. arrival: ~${d.eta} min<br>`:''}<br>💰 Service: <b>₹${d.amt}</b> (₹${sv[2]}/hr × ${d.hours})<br>➕ GST 18%: ₹${d.gst}<br>🐝 Bee Arrival Charge: <b>₹0–₹99</b> (confirmed after Bee assignment)${d.ret>0?`<br>➡️ Bee Return Support Fee: <b>₹${d.ret}</b>`:''}<br>💳 <b>Total (excl. arrival): ₹${d.total}</b><br><br><i>📝 Note: Pay after the service via UPI/QR. GST is shown separately. Bee Arrival Charge (₹0–₹99) is confirmed after Bee assignment based on the nearest Bee's availability. Any additional time beyond the booked hours will be charged at the applicable hourly rate.</i>`,
      confirmBtn:'✅ Confirm', cancelBtn:'✖️ Cancel',
      booked:(d)=>`🎉 <b>Booking confirmed — ${d.id}</b><br><br>A <b>verified Bee</b> is assigned: <b>Ravi K.</b> 🐝 (ID #TB-114). You’ll get his photo &amp; live location on the real bot.<br><br>🔐 <b>Your service PINs — keep these safe:</b><br>▶️ <b>Start PIN: ${d.startOtp}</b> — give this to the Bee <i>only when he arrives</i>.<br>⏹️ <b>End PIN: ${d.endOtp}</b> — give this <i>only when the work is done</i>.<br><br><i>The PIN proves the Bee was really there. The clock — and the bill — only start when the Start PIN is entered.</i>`,
      arrivedBtn:'▶️ Bee has arrived (demo)',
      arrived:(d)=>`🐝 <b>Ravi has arrived.</b><br><br>He asks you for the <b>Start PIN</b>. In the real flow he types it into his own Bee app — here, enter your Start PIN to begin.<br><br><i>(Your Start PIN is ${d.startOtp})</i>`,
      startOk:(t)=>`✅ <b>Start PIN verified!</b><br>⏱️ Service started at <b>${t}</b>. The clock is now running automatically — Trusbee is timing the visit, not you or the Bee.<br><br><i>(This demo can’t wait hours, so the next step lets you fast-forward the system clock.)</i>`,
      doneBtn:'⏹️ Ravi marks: work done',
      startBad:(d)=>`❌ That PIN doesn’t match. Please share the <b>Start PIN</b> exactly as sent.<br><i>(Hint for this demo: ${d.startOtp})</i>`,
      doneMsg:'🐝 <b>Ravi tapped “work done”</b> in his Bee app. You’ve been notified.<br><br>The system clock has been running since the Start PIN. <i>To demo elapsed time without waiting, fast-forward the clock:</i>',
      simEl:(h)=>`⏩ ${h} hr elapsed`, simOver:(h)=>`⏩ ${h} hr (Ravi ran over)`, simUnder:(h)=>`⏩ ${h} hr (job finished sooner)`,
      simMsg:(d)=>`⏱️ System clock shows <b>${d.simElapsed} hr</b> elapsed since Start.<br><br>To close the visit, the customer gives the <b>End PIN</b> to Ravi (he enters it in his app). Enter your End PIN to confirm the stop.<br><i>(Your End PIN is ${d.endOtp})</i>`,
      needSim:'⏩ First fast-forward the system clock above to set elapsed time, then enter the End PIN.',
      noteCushion:(b)=>`<i>You booked ${b}, ran a little over — the free 15-min cushion covers it. 💛</i><br>`,
      noteFloor:(b,a,f)=>`<i>You booked ${b}, worked ${a} — the minimum charge is ${f} (shown at booking). 👍</i><br>`,
      noteEarly:(b,a)=>`<i>You booked ${b} but only ${a} was worked — you pay only for actual time. 👍</i><br>`,
      bill:(sv,d)=>`✅ <b>End PIN verified!</b><br>⏱️ Ended at <b>${d.t}</b> · <b>${d.actualH} measured</b>.<br><br>🧾 <b>Bill — ${d.id}</b><br>${sv[0]} ${d.svcName}<br>⏳ Time billed: <b>${d.billH}</b> × ₹${sv[2]}/hr<br>${d.note}💰 Service: <b>₹${d.amt}</b><br>➕ 18% GST, shown as CGST 9% + SGST 9% on your invoice<br><br>📩 <i>This bill has been sent to your WhatsApp &amp; SMS.</i><br><br>Pay now via UPI/QR 👇`,
      payBtn:(amt)=>`💳 Pay ₹${amt} (demo)`,
      endBad:(d)=>`❌ That PIN doesn’t match. Please share the <b>End PIN</b> exactly as sent.<br><i>(Hint for this demo: ${d.endOtp})</i>`,
      paid:(d)=>`🎉 <b>Payment received — booking ${d.id} complete!</b> 💛<br><br>🐝 Quick question — <b>how was the overall service?</b><br><i>Tap a rating (1 = poor, 5 = excellent).</i>`,
      rateBee:'Thank you! 🙏<br><br>And <b>how was your Bee (Ravi K.)</b> — polite, on-time and helpful?<br><i>Tap a rating below.</i>',
      rateComment:'One last thing! 💬<br>If you’d like, share a few words about <b>Ravi K.</b> or your experience — just type your message and send it. Or tap <b>Skip</b> to finish.',
      skipBtn:'Skip',
      thanks:(d)=>`🙏 <b>Thank you so much — truly.</b> 💛<br><br>You rated:<br>• Service: ${d.svcStars} (${d.svcRating}/5)<br>• Ravi K.: ${d.beeStars} (${d.beeRating}/5)${d.cLine}<br><br>It means a lot that you trusted Trusbee to care for your loved one. Your feedback reaches our team right away — it helps our Bees grow and makes sure good work is recognised. 🐝<br><br>We’re always just a message away whenever you need us. Take care! 💛<br><br><i>👉 This was a demo — tap below to book for real on WhatsApp.</i>`,
      waBtn:'🐝 Book for real on WhatsApp',
      again:'Type <b>hi</b> to start again, or book for real on WhatsApp 🐝',
      cancelled:'No problem at all — nothing is booked. 🙏 Thank you for considering Trusbee 🐝 Type <b>hi</b> anytime to book again. 💛'
    },
    hi:{
      menu:'आज हम कैसे मदद कर सकते हैं? एक सेवा चुनें 👇<br><i>(रोकने के लिए कभी भी cancel टाइप करें)</i>',
      pickSvc:'👆 कृपया ऊपर से कोई सेवा चुनें, या उसका नाम टाइप करें।',
      soonTag:' · जल्द', availNow:(p)=>`₹${p}/घंटा · अभी उपलब्ध`, soonNote:(p)=>`~₹${p}/घंटा · जल्द आ रही`,
      soon:(ic,nm)=>`${ic} <b>${nm}</b> जल्द शुरू हो रही है! 🚀 मेनू में जिन पर <i>अभी उपलब्ध</i> लिखा है, वे आज बुक हो सकती हैं।`,
      emg:'🆘 <b>24×7 अर्जेंट सहायता</b><br><br>⚠️ मेडिकल इमरजेंसी में पहले एम्बुलेंस / 102 पर कॉल करें, फिर हमें। हम आपके साथ एक भरोसेमंद व्यक्ति देते हैं — मेडिकल इलाज नहीं।',
      subAsk:(nm)=>`बढ़िया चुनाव — <b>${nm}</b>। आपको ठीक क्या चाहिए? 👇`,
      pickSub:'👆 कृपया ऊपर से कोई विकल्प चुनें, या उसका नाम टाइप करें।',
      otherAsk:'✍️ <b>कृपया एक-दो पंक्ति में बताएं कि आपको क्या चाहिए</b>।<br><i>उदाहरण: पिताजी के डायलिसिस के दौरान मेदांता में साथ बैठने के लिए किसी की ज़रूरत, करीब 4 घंटे।</i>',
      otherShort:'🤔 कृपया थोड़ा और विवरण जोड़ें ताकि हम मदद कर सकें।',
      otherNote:'🙏 धन्यवाद — समझ गए। अगर आपका अनुरोध ऐसा है जिसमें हमारी वेरिफाइड Bees सुरक्षित रूप से मदद कर सकती हैं, तो हम सही Bee भेज देंगे। अगर यह हमारी सेवा के बाहर है, तो हम ईमानदारी से बता देंगे। 💛<br><br>आगे बढ़ें 👇',
      custom:'अनुरोध: ',
      dateAsk:'📅 किस तारीख़ को Bee चाहिए?<br><i>उदाहरण: आज, कल, या 18 अगस्त</i>',
      dateBad:'🤔 तारीख़ समझ नहीं आई। <br><i>उदाहरण: आज, कल, या 18 अगस्त</i>',
      datePast:'📅 बीती तारीख़ पर बुकिंग नहीं हो सकती। कृपया आज या आगे की तारीख़ चुनें।',
      timeAsk:'⏰ Bee को कितने बजे पहुँचना चाहिए?<br><i>उदाहरण: 9 am या 2:30 pm</i>',
      timeBad:'🤔 यह समय जैसा नहीं लगता।<br><i>उदाहरण: 9 am, 2:30 pm, या शाम</i>',
      hoursAsk:'⏳ <b>आपको कितने घंटे चाहिए?</b><br>जितना अनुमान हो उतना बुक करें — आप केवल Bee के वास्तविक काम के समय का भुगतान करते हैं। जल्दी खत्म, कम भुगतान। 💛<br><br><b>उदाहरण:</b> 3 घंटे बुक, Bee ने 2 घंटे काम किया → आप <b>2 घंटे</b> का भुगतान करेंगे, 3 का नहीं।<br><br>• बुक समय के बाद 15 मिनट की छूट मुफ़्त।<br>• छोटी बुकिंग पर न्यूनतम शुल्क आधे घंटे का है। 4 घंटे या अधिक पर हम 75% लेते हैं — क्योंकि हम आपके लिए एक Bee आरक्षित करते हैं।<br><br><i>घंटों की संख्या टाइप करें, जैसे 2</i>',
      hoursBad:'🤔 कृपया घंटों की संख्या बताएं (1–24)।<br><i>उदाहरण: 2</i>',
      addrAsk:'📍 Bee कहाँ पहुँचे? कृपया नज़दीकी लैंडमार्क के साथ पूरा पता बताएं।<br><i>उदाहरण: B-14, ईस्ट लोहानीपुर, कदमकुआँ, SBI ATM के पास।</i>',
      endLocAsk:'📍 <b>Bee सेवा कहाँ पूरी करे?</b><br>🔁 आगमन स्थान पर ही (मुफ्त) · ➡️ अलग स्थान पर (+₹49)',
      endSameBtn:'🔁 आगमन स्थान', endDiffBtn:'➡️ अलग स्थान (+₹49)',
      endAddrAsk:'📍 कृपया <b>सेवा समाप्ति का पता</b> लैंडमार्क के साथ बताएं।<br><i>उदाहरण: जय प्रभा मेदांता, कंकड़बाग</i>',
      addrBad:'🤔 थोड़ा और विवरण चाहिए।<br><i>उदाहरण: B-14, पाटलिपुत्र कॉलोनी, SBI ATM के पास</i>',
      contactAsk:'👤 पहुँचने पर Bee किससे संपर्क करे? नाम व फ़ोन।<br><i>उदाहरण: सुनील कुमार, 98765 43210</i>',
      contactBad:'🤔 कृपया एक नाम और सही <b>10 अंकों का मोबाइल नंबर</b> भेजें।<br><i>उदाहरण: सुनील कुमार, 98765 43210</i>',
      confirm:(sv,d)=>`कृपया पुष्टि करें 👇<br><br>${sv[0]} <b>${d.svcName}</b> — ${d.sub}<br>📅 ${d.date} ⏰ ${d.time}<br>⏳ ${d.hours} घंटे<br>📍 ${d.addr}<br>${d.endChoice==="diff"&&d.endAddr?`📍 सेवा समाप्ति: ${d.endAddr}<br>`:''}👤 ${d.contact}<br>${d.startsT?`🟢 सेवा शुरू: ${d.startsT}<br>`:''}${d.endsT?`🔴 सेवा समाप्त: ${d.endsT}<br>`:''}${d.eta?`⏱ अनुमानित आगमन: ~${d.eta} मिनट<br>`:''}<br>💰 सेवा शुल्क: <b>₹${d.amt}</b> (₹${sv[2]}/घंटा × ${d.hours})<br>➕ GST 18%: ₹${d.gst}<br>🐝 Bee आगमन शुल्क: <b>₹0–₹99</b> (Bee तय होने पर पुष्टि)${d.ret>0?`<br>➡️ Bee रिटर्न सपोर्ट शुल्क: <b>₹${d.ret}</b>`:''}<br>💳 <b>कुल (आगमन शुल्क छोड़कर): ₹${d.total}</b><br><br><i>📝 नोट: सेवा के बाद UPI/QR से भुगतान करें। GST अलग से दिखाया गया है। Bee आगमन शुल्क (₹0–₹99) नज़दीकी Bee की उपलब्धता के आधार पर Bee तय होने के बाद पुष्टि होगा। बुक किए गए घंटों से अधिक समय पर लागू प्रति-घंटा दर से शुल्क लगेगा।</i>`,
      confirmBtn:'✅ पुष्टि', cancelBtn:'✖️ रद्द',
      booked:(d)=>`🎉 <b>बुकिंग पक्की — ${d.id}</b><br><br>एक <b>वेरिफाइड Bee</b> नियुक्त: <b>रवि के.</b> 🐝 (ID #TB-114)। असली बॉट पर आपको उनकी फोटो व लाइव लोकेशन मिलेगी।<br><br>🔐 <b>आपके सर्विस PIN — सुरक्षित रखें:</b><br>▶️ <b>Start PIN: ${d.startOtp}</b> — Bee को <i>तभी दें जब वह पहुँचे</i>।<br>⏹️ <b>End PIN: ${d.endOtp}</b> — <i>काम पूरा होने पर ही दें</i>।<br><br><i>PIN साबित करता है कि Bee सचमुच वहाँ था। घड़ी — और बिल — तभी शुरू होती है जब Start PIN दर्ज हो।</i>`,
      arrivedBtn:'▶️ Bee पहुँच गया (डेमो)',
      arrived:(d)=>`🐝 <b>रवि पहुँच गए।</b><br><br>वह आपसे <b>Start PIN</b> माँगते हैं। असली प्रक्रिया में वह इसे अपने Bee ऐप में डालते हैं — यहाँ, शुरू करने के लिए अपना Start PIN दर्ज करें।<br><br><i>(आपका Start PIN है ${d.startOtp})</i>`,
      startOk:(t)=>`✅ <b>Start PIN सत्यापित!</b><br>⏱️ सेवा <b>${t}</b> पर शुरू हुई। घड़ी अब अपने आप चल रही है — Trusbee समय गिन रहा है, आप या Bee नहीं।<br><br><i>(यह डेमो घंटों इंतज़ार नहीं कर सकता, इसलिए अगला कदम घड़ी को आगे बढ़ाने देता है।)</i>`,
      doneBtn:'⏹️ रवि: काम पूरा',
      startBad:(d)=>`❌ यह PIN मेल नहीं खाता। कृपया ठीक वैसा ही <b>Start PIN</b> भेजें।<br><i>(डेमो संकेत: ${d.startOtp})</i>`,
      doneMsg:'🐝 <b>रवि ने अपने ऐप में “काम पूरा” दबाया।</b> आपको सूचित कर दिया गया।<br><br>Start PIN से घड़ी चल रही थी। <i>बिना इंतज़ार किए समय दिखाने के लिए घड़ी आगे बढ़ाएं:</i>',
      simEl:(h)=>`⏩ ${h} घंटे बीते`, simOver:(h)=>`⏩ ${h} घंटे (रवि को ज़्यादा लगा)`, simUnder:(h)=>`⏩ ${h} घंटे (काम जल्दी खत्म)`,
      simMsg:(d)=>`⏱️ घड़ी दिखाती है कि Start से <b>${d.simElapsed} घंटे</b> बीते।<br><br>विज़िट बंद करने के लिए ग्राहक रवि को <b>End PIN</b> देता है। रोकने की पुष्टि के लिए अपना End PIN दर्ज करें।<br><i>(आपका End PIN है ${d.endOtp})</i>`,
      needSim:'⏩ पहले ऊपर घड़ी आगे बढ़ाएं, फिर End PIN दर्ज करें।',
      noteCushion:(b)=>`<i>आपने ${b} बुक किया, थोड़ा ज़्यादा चला — 15 मिनट की मुफ़्त छूट इसे कवर करती है। 💛</i><br>`,
      noteFloor:(b,a,f)=>`<i>आपने ${b} बुक किया, ${a} काम हुआ — न्यूनतम शुल्क ${f} है (बुकिंग पर बताया गया)। 👍</i><br>`,
      noteEarly:(b,a)=>`<i>आपने ${b} बुक किया पर केवल ${a} काम हुआ — आप केवल वास्तविक समय का भुगतान करते हैं। 👍</i><br>`,
      bill:(sv,d)=>`✅ <b>End PIN सत्यापित!</b><br>⏱️ <b>${d.t}</b> पर समाप्त · <b>${d.actualH} मापा गया</b>।<br><br>🧾 <b>बिल — ${d.id}</b><br>${sv[0]} ${d.svcName}<br>⏳ बिल किया समय: <b>${d.billH}</b> × ₹${sv[2]}/घंटा<br>${d.note}💰 सेवा शुल्क: <b>₹${d.amt}</b><br>➕ 18% GST, आपके इनवॉइस पर CGST 9% + SGST 9%<br><br>📩 <i>यह बिल आपके WhatsApp व SMS पर भेज दिया गया।</i><br><br>अब UPI/QR से भुगतान करें 👇`,
      payBtn:(amt)=>`💳 ₹${amt} भुगतान (डेमो)`,
      endBad:(d)=>`❌ यह PIN मेल नहीं खाता। कृपया ठीक वैसा ही <b>End PIN</b> भेजें।<br><i>(डेमो संकेत: ${d.endOtp})</i>`,
      paid:(d)=>`🎉 <b>भुगतान प्राप्त — बुकिंग ${d.id} पूरी!</b> 💛<br><br>🐝 एक छोटा सवाल — <b>सेवा कुल मिलाकर कैसी रही?</b><br><i>रेटिंग चुनें (1 = ख़राब, 5 = बढ़िया)।</i>`,
      rateBee:'धन्यवाद! 🙏<br><br>और <b>आपकी Bee (रवि के.)</b> कैसी रही — विनम्र, समय पर और मददगार?<br><i>नीचे रेटिंग चुनें।</i>',
      rateComment:'बस एक आख़िरी बात! 💬<br>अगर आप चाहें तो <b>रवि के.</b> या अपने अनुभव के बारे में कुछ शब्द लिखकर भेजें। या ख़त्म करने के लिए <b>Skip</b> दबाएं।',
      skipBtn:'Skip',
      thanks:(d)=>`🙏 <b>आपका बहुत-बहुत धन्यवाद।</b> 💛<br><br>आपने रेट किया:<br>• सेवा: ${d.svcStars} (${d.svcRating}/5)<br>• रवि के.: ${d.beeStars} (${d.beeRating}/5)${d.cLine}<br><br>आपने अपने प्रियजन की देखभाल के लिए Trusbee पर भरोसा किया — यह हमारे लिए बहुत मायने रखता है। आपका फीडबैक तुरंत हमारी टीम तक पहुँचता है। 🐝<br><br>जब भी ज़रूरत हो, हम बस एक संदेश दूर हैं। अपना ख्याल रखें! 💛<br><br><i>👉 यह एक डेमो था — असली बुकिंग के लिए नीचे WhatsApp पर टैप करें।</i>`,
      waBtn:'🐝 WhatsApp पर असली बुकिंग करें',
      again:'फिर से शुरू करने के लिए <b>hi</b> टाइप करें, या WhatsApp पर असली बुकिंग करें 🐝',
      cancelled:'कोई बात नहीं — कुछ भी बुक नहीं हुआ। 🙏 Trusbee पर विचार करने के लिए धन्यवाद 🐝 दोबारा बुक करने के लिए कभी भी <b>hi</b> टाइप करें। 💛'
    },
    bho:{
      menu:'आज हम कइसे मदद कर सकीले? एगो सेवा चुनीं 👇<br><i>(रोके खातिर कबो cancel टाइप करीं)</i>',
      pickSvc:'👆 कृपया ऊपर से कवनो सेवा चुनीं, भा ओकर नाम टाइप करीं।',
      soonTag:' · जल्दिये', availNow:(p)=>`₹${p}/घंटा · अभी उपलब्ध`, soonNote:(p)=>`~₹${p}/घंटा · जल्दिये आई`,
      soon:(ic,nm)=>`${ic} <b>${nm}</b> जल्दिये शुरू होखे वाला बा! 🚀 मेनू में जवना पर <i>अभी उपलब्ध</i> लिखल बा, ऊ आजे बुक हो सकेला।`,
      emg:'🆘 <b>24×7 अर्जेंट सहायता</b><br><br>⚠️ मेडिकल इमरजेंसी में पहिले एम्बुलेंस / 102 पर कॉल करीं, फेर हमरा के। हम रउआ साथ एगो भरोसेमंद आदमी देवेनी — मेडिकल इलाज ना।',
      subAsk:(nm)=>`बढ़िया चुनाव — <b>${nm}</b>। रउआ के ठीक का चाहीं? 👇`,
      pickSub:'👆 कृपया ऊपर से कवनो विकल्प चुनीं, भा ओकर नाम टाइप करीं।',
      otherAsk:'✍️ <b>कृपया एक-दू लाइन में बताईं कि रउआ के का चाहीं</b>।<br><i>उदाहरण: बाबूजी के डायलिसिस के दौरान मेदांता में साथ बइठे खातिर केहू के जरूरत, करीब 4 घंटा।</i>',
      otherShort:'🤔 कृपया थोड़ा आउर जानकारी जोड़ीं ताकि हम मदद कर सकीं।',
      otherNote:'🙏 धन्यवाद — समझ गइनी। अगर रउआ के अनुरोध अइसन बा जेमे हमार वेरिफाइड Bees सुरक्षित तरीका से मदद कर सकेली, त हम सही Bee भेज देब। अगर ई हमार सेवा के बाहर बा, त हम ईमानदारी से बता देब। 💛<br><br>आगे बढ़ीं 👇',
      custom:'अनुरोध: ',
      dateAsk:'📅 कवना तारीख के Bee चाहीं?<br><i>उदाहरण: आज, बिहान, भा 18 अगस्त</i>',
      dateBad:'🤔 तारीख समझ में ना आइल। <br><i>उदाहरण: आज, बिहान, भा 18 अगस्त</i>',
      datePast:'📅 बीतल तारीख पर बुकिंग ना हो सके। कृपया आज भा आगे के तारीख चुनीं।',
      timeAsk:'⏰ Bee के कतना बजे पहुँचे के चाहीं?<br><i>उदाहरण: 9 am भा 2:30 pm</i>',
      timeBad:'🤔 ई समय जइसन ना लागत बा।<br><i>उदाहरण: 9 am, 2:30 pm, भा साँझ</i>',
      hoursAsk:'⏳ <b>रउआ के कतना घंटा चाहीं?</b><br>जतना अनुमान होखे ओतना बुक करीं — रउआ खाली Bee के असली काम के समय के भुगतान करीलें। जल्दी खतम, कम भुगतान। 💛<br><br><b>उदाहरण:</b> 3 घंटा बुक, Bee 2 घंटा काम कइलें → रउआ <b>2 घंटा</b> के भुगतान करब, 3 के ना।<br><br>• बुक समय के बाद 15 मिनट के छूट मुफ्त।<br>• छोट बुकिंग पर न्यूनतम शुल्क आधा घंटा के बा। 4 घंटा भा अधिका पर हम 75% लेईले — काहे कि हम रउआ खातिर एगो Bee आरक्षित करीले।<br><br><i>घंटा के संख्या टाइप करीं, जइसे 2</i>',
      hoursBad:'🤔 कृपया घंटा के संख्या बताईं (1–24)।<br><i>उदाहरण: 2</i>',
      addrAsk:'📍 Bee कहाँ पहुँचे? कृपया नजदीकी लैंडमार्क संगे पूरा पता बताईं।<br><i>उदाहरण: B-14, ईस्ट लोहानीपुर, कदमकुआँ, SBI ATM के लगे।</i>',
      endLocAsk:'📍 <b>Bee सेवा कहाँ पूरा करे?</b><br>🔁 आगमन जगह पर ही (मुफ्त) · ➡️ अलग जगह पर (+₹49)',
      endSameBtn:'🔁 आगमन जगह', endDiffBtn:'➡️ अलग जगह (+₹49)',
      endAddrAsk:'📍 कृपया <b>सेवा खतम होखे के पता</b> लैंडमार्क संगे बताईं।<br><i>उदाहरण: जय प्रभा मेदांता, कंकड़बाग</i>',
      addrBad:'🤔 थोड़ा आउर जानकारी चाहीं।<br><i>उदाहरण: B-14, पाटलिपुत्र कॉलोनी, SBI ATM के लगे</i>',
      contactAsk:'👤 पहुँचला पर Bee केकरा से संपर्क करे? नाम आ फोन।<br><i>उदाहरण: सुनील कुमार, 98765 43210</i>',
      contactBad:'🤔 कृपया एगो नाम आ सही <b>10 अंक के मोबाइल नंबर</b> भेजीं।<br><i>उदाहरण: सुनील कुमार, 98765 43210</i>',
      confirm:(sv,d)=>`कृपया पुष्टि करीं 👇<br><br>${sv[0]} <b>${d.svcName}</b> — ${d.sub}<br>📅 ${d.date} ⏰ ${d.time}<br>⏳ ${d.hours} घंटा<br>📍 ${d.addr}<br>${d.endChoice==="diff"&&d.endAddr?`📍 सेवा खतम: ${d.endAddr}<br>`:''}👤 ${d.contact}<br>${d.startsT?`🟢 सेवा शुरू: ${d.startsT}<br>`:''}${d.endsT?`🔴 सेवा खतम: ${d.endsT}<br>`:''}${d.eta?`⏱ अनुमानित आगमन: ~${d.eta} मिनट<br>`:''}<br>💰 सेवा शुल्क: <b>₹${d.amt}</b> (₹${sv[2]}/घंटा × ${d.hours})<br>➕ GST 18%: ₹${d.gst}<br>🐝 Bee आगमन शुल्क: <b>₹0–₹99</b> (Bee तय होखला पर पुष्टि)${d.ret>0?`<br>➡️ Bee रिटर्न सपोर्ट शुल्क: <b>₹${d.ret}</b>`:''}<br>💳 <b>कुल (आगमन शुल्क छोड़ के): ₹${d.total}</b><br><br><i>📝 नोट: सेवा के बाद UPI/QR से भुगतान करीं। GST अलग से देखावल गइल बा। Bee आगमन शुल्क (₹0–₹99) नजदीकी Bee के उपलब्धता के आधार पर Bee तय होखला के बाद पुष्टि होई। बुक कइल घंटा से अधिक समय पर लागू प्रति-घंटा दर से शुल्क लागी।</i>`,
      confirmBtn:'✅ पुष्टि', cancelBtn:'✖️ रद्द',
      booked:(d)=>`🎉 <b>बुकिंग पक्की — ${d.id}</b><br><br>एगो <b>वेरिफाइड Bee</b> लगावल गइल: <b>रवि के.</b> 🐝 (ID #TB-114)। असली बॉट पर रउआ के ओकर फोटो आ लाइव लोकेशन मिली।<br><br>🔐 <b>रउआ के सर्विस PIN — सुरक्षित राखीं:</b><br>▶️ <b>Start PIN: ${d.startOtp}</b> — Bee के <i>तबे दीं जब ऊ पहुँचे</i>।<br>⏹️ <b>End PIN: ${d.endOtp}</b> — <i>काम पूरा होखला पर ही दीं</i>।<br><br><i>PIN साबित करेला कि Bee सचमुच ओहिजा रहलें। घड़ी — आ बिल — तबे शुरू होखेला जब Start PIN दर्ज होखे।</i>`,
      arrivedBtn:'▶️ Bee पहुँच गइलें (डेमो)',
      arrived:(d)=>`🐝 <b>रवि पहुँच गइलें।</b><br><br>ऊ रउआ से <b>Start PIN</b> माँगत बानी। असली प्रक्रिया में ऊ एकरा के आपन Bee ऐप में डालेलें — इहाँ, शुरू करे खातिर आपन Start PIN दर्ज करीं।<br><br><i>(रउआ के Start PIN बा ${d.startOtp})</i>`,
      startOk:(t)=>`✅ <b>Start PIN सत्यापित!</b><br>⏱️ सेवा <b>${t}</b> पर शुरू भइल। घड़ी अब अपने आप चलत बा — Trusbee समय गिनत बा, रउआ भा Bee ना।<br><br><i>(ई डेमो घंटन इंतजार ना कर सके, एसे अगिला कदम घड़ी के आगे बढ़ावे देला।)</i>`,
      doneBtn:'⏹️ रवि: काम पूरा',
      startBad:(d)=>`❌ ई PIN मेल ना खात बा। कृपया ठीक ओइसने <b>Start PIN</b> भेजीं।<br><i>(डेमो संकेत: ${d.startOtp})</i>`,
      doneMsg:'🐝 <b>रवि आपन ऐप में “काम पूरा” दबवलें।</b> रउआ के सूचित कर दिहल गइल।<br><br>Start PIN से घड़ी चलत रहल। <i>बिना इंतजार कइले समय देखावे खातिर घड़ी आगे बढ़ाईं:</i>',
      simEl:(h)=>`⏩ ${h} घंटा बीतल`, simOver:(h)=>`⏩ ${h} घंटा (रवि के जादा लागल)`, simUnder:(h)=>`⏩ ${h} घंटा (काम जल्दी खतम)`,
      simMsg:(d)=>`⏱️ घड़ी देखावत बा कि Start से <b>${d.simElapsed} घंटा</b> बीतल।<br><br>विजिट बंद करे खातिर ग्राहक रवि के <b>End PIN</b> देला। रोके के पुष्टि खातिर आपन End PIN दर्ज करीं।<br><i>(रउआ के End PIN बा ${d.endOtp})</i>`,
      needSim:'⏩ पहिले ऊपर घड़ी आगे बढ़ाईं, फेर End PIN दर्ज करीं।',
      noteCushion:(b)=>`<i>रउआ ${b} बुक कइनी, थोड़ा जादा चलल — 15 मिनट के मुफ्त छूट एकरा के कवर करेला। 💛</i><br>`,
      noteFloor:(b,a,f)=>`<i>रउआ ${b} बुक कइनी, ${a} काम भइल — न्यूनतम शुल्क ${f} बा (बुकिंग पर बतावल गइल)। 👍</i><br>`,
      noteEarly:(b,a)=>`<i>रउआ ${b} बुक कइनी बाकिर खाली ${a} काम भइल — रउआ खाली असली समय के भुगतान करीलें। 👍</i><br>`,
      bill:(sv,d)=>`✅ <b>End PIN सत्यापित!</b><br>⏱️ <b>${d.t}</b> पर खतम · <b>${d.actualH} मापल गइल</b>।<br><br>🧾 <b>बिल — ${d.id}</b><br>${sv[0]} ${d.svcName}<br>⏳ बिल कइल समय: <b>${d.billH}</b> × ₹${sv[2]}/घंटा<br>${d.note}💰 सेवा शुल्क: <b>₹${d.amt}</b><br>➕ 18% GST, आपके इनवॉइस पर CGST 9% + SGST 9%<br><br>📩 <i>ई बिल रउआ के WhatsApp आ SMS पर भेज दिहल गइल।</i><br><br>अब UPI/QR से भुगतान करीं 👇`,
      payBtn:(amt)=>`💳 ₹${amt} भुगतान (डेमो)`,
      endBad:(d)=>`❌ ई PIN मेल ना खात बा। कृपया ठीक ओइसने <b>End PIN</b> भेजीं।<br><i>(डेमो संकेत: ${d.endOtp})</i>`,
      paid:(d)=>`🎉 <b>भुगतान मिलल — बुकिंग ${d.id} पूरा!</b> 💛<br><br>🐝 एगो छोट सवाल — <b>सेवा कुल मिलाके कइसन रहल?</b><br><i>रेटिंग चुनीं (1 = खराब, 5 = बढ़िया)।</i>`,
      rateBee:'धन्यवाद! 🙏<br><br>आ <b>रउआ के Bee (रवि के.)</b> कइसन रहली — विनम्र, समय पर आ मददगार?<br><i>नीचे रेटिंग चुनीं।</i>',
      rateComment:'बस एगो आख़िरी बात! 💬<br>अगर रउआ चाहीं त <b>रवि के.</b> भा आपन अनुभव के बारे में कुछ शब्द लिखके भेजीं। भा खतम करे खातिर <b>Skip</b> दबाईं।',
      skipBtn:'Skip',
      thanks:(d)=>`🙏 <b>रउआ के बहुत-बहुत धन्यवाद।</b> 💛<br><br>रउआ रेट कइनी:<br>• सेवा: ${d.svcStars} (${d.svcRating}/5)<br>• रवि के.: ${d.beeStars} (${d.beeRating}/5)${d.cLine}<br><br>रउआ आपन प्रियजन के देखभाल खातिर Trusbee पर भरोसा कइनी — ई हमरा खातिर बहुत मायने राखेला। रउआ के फीडबैक तुरंत हमार टीम तक पहुँचेला। 🐝<br><br>जब भी जरूरत होखे, हम बस एगो संदेस दूर बानी। आपन ख्याल राखीं! 💛<br><br><i>👉 ई एगो डेमो रहल — असली बुकिंग खातिर नीचे WhatsApp पर टैप करीं।</i>`,
      waBtn:'🐝 WhatsApp पर असली बुकिंग करीं',
      again:'फेर से शुरू करे खातिर <b>hi</b> टाइप करीं, भा WhatsApp पर असली बुकिंग करीं 🐝',
      cancelled:'कवनो बात ना — कुछुओ बुक ना भइल। 🙏 Trusbee पर विचार करे खातिर धन्यवाद 🐝 दोबारा बुक करे खातिर कबो <b>hi</b> टाइप करीं। 💛'
    }
  };

  let S={state:"OFF",data:{}},mi=0;

  function bubble(dir,html,btns,opts){
    const d=document.createElement("div");d.className="pmsg "+(dir==="in"?"pin":"pout");
    let s=html||"";
    if(opts)s+='<div class="liveOpts">'+opts.map(o=>`<div class="liveOpt" data-v="${o.v}"><div class="lo-t">${o.t}</div>${o.d?`<div class="lo-d">${o.d}</div>`:""}</div>`).join("")+"</div>";
    if(btns)s+='<div class="pbtns">'+btns.map(b=>`<div class="pb liveBtn" data-v="${b.v}">${b.t}</div>`).join("")+"</div>";
    s+=`<div class="pmeta">9:4${mi++%10} ✓✓</div>`;d.innerHTML=s;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;
    d.querySelectorAll(".liveOpt,.liveBtn").forEach(el=>el.addEventListener("click",()=>{if(el.dataset.v==="qf:open"){handle("qf:open");return;}say(el.dataset.v,el.querySelector(".lo-t")?el.querySelector(".lo-t").textContent:el.textContent);}));
    if(btns&&btns.some(b=>b.v==="qf:open"))d.querySelector('[data-v="qf:open"]').classList.add("cta");
  }
  const inMsg=(h,btns,opts)=>bubble("in",h,btns,opts);
  const esc=(t)=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const outMsg=(t)=>bubble("out",esc(t));
  function say(val,label){outMsg(label||val);handle(val);}
  function start(){
    chat.innerHTML="";mi=0;S={state:"LANG",data:{},lang:"en"};statusEl.textContent="online";
    inMsg("🐝 <b>Welcome to Trusbee</b> — Trusted Care. Anywhere. Always.<br><br>Please choose your language 👇",[{t:"English",v:"setlang:en"},{t:"हिन्दी",v:"setlang:hi"},{t:"भोजपुरी",v:"setlang:bho"}]);
  }
  function tt(){return DT[S.lang]||DT.en;}
  function svcName(k){return (DSVC[k]&&DSVC[k][S.lang])||SERVICES[k][1];}
  function subName(svc,id){const s=cSub(svc,id);return s?(s.name[S.lang]||s.name.en):'';}
  function subDesc(svc,id){const s=cSub(svc,id);return s?(s.short[S.lang]||s.short.en):'';}
  function subDescFull(svc,id){const s=cSub(svc,id);return s?(s.desc[S.lang]||s.desc.en):'';}
  function subStarts(svc,id){const s=cSub(svc,id);return s?(s.starts[S.lang]||s.starts.en):'';}
  function menu(){S.state="MENU";const tl=tt();
    inMsg(tl.menu,null,
      Object.keys(SERVICES).map(k=>({t:`${SERVICES[k][0]} ${svcName(k)}${SERVICES[k][3]?"":tl.soonTag}`,d:SERVICES[k][3]?tl.availNow(SERVICES[k][2]):tl.soonNote(SERVICES[k][2]),v:"svc:"+k})));
  }
  function subs(svc){S.state="SUB";S.data.svc=svc;
    inMsg(tt().subAsk(svcName2(svc)),null,
      cSubs(svc).map(s=>({t:subName(svc,s.id),d:subDesc(svc,s.id),v:"sub:"+s.id})));
  }
  function svcName2(svc){return svcName(svc);}
  /* 5 Oct 2026: after the language — the "Book your Bee 🐝" message + 3 buttons, as the real bot sends */
  function ctaMenu(){S.state="MENU";const F=window.TBForm;if(!F){menu();return;}
    inMsg(F.ctaHtml(S.lang),[{t:"↗ "+F.t("cta_btn",S.lang),v:"qf:open"}]);
    inMsg(wa2(F.t("menu3",S.lang)),[{t:F.t("b_urgent",S.lang),v:"qf:urgent"},{t:F.t("b_chat",S.lang),v:"qf:chat"},{t:F.t("b_help",S.lang),v:"qf:help"}]);}
  const wa2=s=>String(s).replace(/\n/g,"<br>").replace(/\*([^*\n]+?)\*/g,"<b>$1</b>");
  function openForm(edit){const F=window.TBForm,host=document.querySelector("#demo .pscreen");
    F.open(host,S.lang,{answers:edit&&S.qf?S.qf.answers:null,step:edit&&S.qf?5:1,onSend:d=>{
      S.qf=d;S.data={svc:d.svc,svcName:d.svcName,sub:d.task,subId:d.answers.task,hours:d.hours,date:d.date,time:d.time,addr:d.addr,endChoice:d.end,endAddr:d.endAddr,
        contact:d.name+", "+d.ph,amt:d.base,gst:d.gst,ret:d.ret,total:d.total,planBase:d.fixed?d.base:0,plan:d.plan};
      inMsg(F.summaryHtml(d,S.lang));
      inMsg(F.t("sum_btn",S.lang),[{t:F.t("b_yes",S.lang),v:"yes"},{t:F.t("b_edit",S.lang),v:"qf:edit"},{t:F.t("b_no",S.lang),v:"cancel"}]);
      S.state="CONFIRM";}});}
  // validators
  const okDate=s=>/(today|tomorrow|tom|aaj|kal|आज|कल)/i.test(s)||/\d{1,2}\s*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(s)||/\b\d{1,2}[\/\-.]\d{1,2}/.test(s);
  const pastDate=s=>/(yesterday|kal\s*tha|बीता|कल था)/i.test(s);
  const okTime=s=>/\d{1,2}(:\d{2})?\s*(am|pm|baje|बजे)?/.test(s)||/(morning|evening|noon|subah|shaam|सुबह|शाम)/i.test(s);
  const okHours=s=>{const h=parseInt(s,10);return h>=1&&h<=24;};
  const okAddr=s=>s.trim().length>=8;
  const okContact=s=>{const digits=s.replace(/\D/g,"");return digits.length===10 && /^[6-9]/.test(digits) && /[a-zA-Z\u0900-\u097F]/.test(s);};
  function matchSvc(q){q=q.toLowerCase();const k=Object.keys(SERVICES);
    let s=k.find(x=>SERVICES[x][1].toLowerCase()===q)||k.find(x=>q.length>=4&&SERVICES[x][1].toLowerCase().includes(q));
    if(!s&&/(urgent|emergency|accident|breakdown|asap|turant|जल्दी)/.test(q))s="urgent";
    if(!s&&/(hospital|opd|admit|भर्ती)/.test(q))s="hospital";
    if(!s&&/(elder|parent|mother|father|maa|papa|old|बुजुर्ग|देखभाल)/.test(q))s="elderly";
    if(!s&&/(driver|car|drive)/.test(q))s="driver";
    if(!s&&/(pet|dog|cat)/.test(q))s="pet";
    if(!s&&/\b(help|madad|मदद)\b/.test(q))s="urgent";
    return s;}

  function handle(v){
    const txt=(""+v).trim(), low=txt.toLowerCase();
    if(["cancel","stop","रद्द","रुको","बंद","exit"].includes(low)){inMsg(tt().cancelled);S={state:"DONE",data:{},lang:S.lang};return;}
    if(v&&v.startsWith&&v.startsWith("setlang:")){S.lang=v.slice(8);ctaMenu();return;}
    if(["hi","hello","menu","start"].includes(low)){ctaMenu();return;}
    if(v==="qf:open"){openForm(false);return;}
    if(v==="qf:edit"){openForm(true);return;}
    if(v==="qf:chat"){menu();return;}
    if(v==="qf:urgent"){inMsg(tt().emg);subs("urgent");return;}
    if(v==="qf:help"){inMsg(window.TBForm.howtoHtml(S.lang));return;}
    if(["help","faq","madad","मदद"].includes(low)){inMsg({en:"❓ <b>Help &amp; FAQ</b><br>In the real chat you get a list: prices, payment, safety, areas, night &amp; emergencies, change or cancel, and talk to a person.",
      hi:"❓ <b>मदद और सवाल</b><br>असली चैट में आपको सूची मिलती है: कीमत, भुगतान, सुरक्षा, इलाके, रात व इमरजेंसी, बदलें या रद्द करें, और व्यक्ति से बात।",
      bho:"❓ <b>मदद आ सवाल</b><br>असली चैट में रउआ के सूची मिलेला: दाम, भुगतान, सुरक्षा, इलाका, रात आ इमरजेंसी, बदलीं भा रद्द करीं, आ आदमी से बात।"}[S.lang]||"");return;}
    const t=tt();
    switch(S.state){
      case "LANG": ctaMenu(); return;
      case "MENU":{
        let svc=v.startsWith&&v.startsWith("svc:")?v.slice(4):matchSvc(txt);
        if(!svc){inMsg(t.pickSvc);return;}
        if(!SERVICES[svc][3]){inMsg(t.soon(SERVICES[svc][0],svcName(svc)));setTimeout(menu,500);return;}
        if(svc==="urgent")inMsg(t.emg);
        subs(svc);return;}
      case "SUB":{
        let sid=null;
        if(v.startsWith&&v.startsWith("sub:")){sid=v.slice(4);}
        else{const list=cSubs(S.data.svc);let m=list.find(s=>(s.name.en||"").toLowerCase()===low)||list.find(s=>low.length>=4&&(s.name.en||"").toLowerCase().includes(low));if(m)sid=m.id;}
        if(!sid){inMsg(t.pickSub);return;}
        S.data.subId=sid;S.data.sub=subName(S.data.svc,sid);S.data.beeDesc=subDescFull(S.data.svc,sid);S.data.startsT=subStarts(S.data.svc,sid);S.data.endsT=cEnd(S.data.svc,sid,S.lang);
        if(/custom/i.test(sid)){S.state="SUB_OTHER";inMsg(t.otherAsk);return;}
        S.state="DATE";inMsg(t.dateAsk);return;}
      case "SUB_OTHER":{
        if(txt.trim().length<6){inMsg(t.otherShort);return;}
        S.data.sub=t.custom+txt.trim();
        inMsg(t.otherNote);
        S.state="DATE";inMsg(t.dateAsk);return;}
      case "DATE":
        if(!okDate(txt)){inMsg(t.dateBad);return;}
        if(pastDate(txt)){inMsg(t.datePast);return;}
        S.data.date=txt;S.data.isToday=/(today|aaj|आज)/i.test(low);S.state="TIME";inMsg(t.timeAsk);return;
      case "TIME":
        if(!okTime(txt)){inMsg(t.timeBad);return;}
        S.data.time=txt;S.state="HOURS";inMsg(t.hoursAsk);return;
      case "HOURS":
        if(!okHours(txt)){inMsg(t.hoursBad);return;}
        S.data.hours=parseInt(txt,10);S.state="ADDR";inMsg(t.addrAsk);return;
      case "ADDR":
        if(!okAddr(txt)){inMsg(t.addrBad);return;}
        S.data.addr=txt;
        if(cNeedEnd(S.data.svc,S.data.subId)){S.state="ENDLOC";inMsg(t.endLocAsk,[{t:t.endSameBtn,v:"end:same"},{t:t.endDiffBtn,v:"end:diff"}]);return;}
        S.data.endChoice="same";S.state="CONTACT";inMsg(t.contactAsk);return;
      case "ENDLOC":{
        if(v==="end:same"){S.data.endChoice="same";S.data.endAddr="";S.state="CONTACT";inMsg(t.contactAsk);return;}
        if(v==="end:diff"){S.data.endChoice="diff";S.state="ENDADDR";inMsg(t.endAddrAsk);return;}
        inMsg(t.endLocAsk,[{t:t.endSameBtn,v:"end:same"},{t:t.endDiffBtn,v:"end:diff"}]);return;}
      case "ENDADDR":{
        if((txt||"").length<4){inMsg(t.endAddrAsk);return;}
        S.data.endAddr=txt;S.state="CONTACT";inMsg(t.contactAsk);return;}
      case "CONTACT":{
        if(!okContact(txt)){inMsg(t.contactBad);return;}
        S.data.contact=txt;S.state="CONFIRM";const sv=SERVICES[S.data.svc];const amt=sv[2]*S.data.hours;
        const gC=GSTCALC(amt);
        const ret=(S.data.endChoice==="diff"&&cNeedEnd(S.data.svc,S.data.subId))?window.TB_CAT.fees.retDiff:0;
        S.data.svcName=svcName(S.data.svc);S.data.amt=amt;S.data.gst=gC.gst;S.data.ret=ret;S.data.total=gC.total+ret;
        inMsg(t.confirm(sv,S.data),[{t:t.confirmBtn,v:"yes"},{t:t.cancelBtn,v:"cancel"}]);return;}
      case "CONFIRM":
        if(low==="yes"){const id="TB"+String(Math.floor(Math.random()*900)+100);
          S.data.id=id;
          S.data.startOtp=String(Math.floor(Math.random()*9000)+1000);
          S.data.endOtp=String(Math.floor(Math.random()*9000)+1000);
          inMsg(t.booked(S.data),[{t:t.arrivedBtn,v:"arrived"}]);
          S.state="OTP_START";return;}
        return;
      case "OTP_START":{
        if(low==="arrived"){inMsg(t.arrived(S.data));return;}
        if(txt.replace(/\s/g,"")===S.data.startOtp){
          S.data.startClock=new Date();
          S.data.simElapsed=null;
          const tm=S.data.startClock.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
          inMsg(t.startOk(tm),[{t:t.doneBtn,v:"done"}]);
          S.state="OTP_END";return;}
        inMsg(t.startBad(S.data));return;}
      case "OTP_END":{
        if(low==="done"){
          inMsg(t.doneMsg,
            [{t:t.simEl(S.data.hours),v:"sim:"+S.data.hours},{t:t.simOver(S.data.hours+1),v:"sim:"+(S.data.hours+1)},{t:t.simUnder(Math.max(0.5,S.data.hours-0.5)),v:"sim:"+Math.max(0.5,S.data.hours-0.5)}]);
          return;}
        if(v&&v.startsWith&&v.startsWith("sim:")){
          S.data.simElapsed=parseFloat(v.slice(4));
          inMsg(t.simMsg(S.data));return;}
        if(txt.replace(/\s/g,"")===S.data.endOtp){
          if(S.data.simElapsed==null){inMsg(t.needSim);return;}
          const end=new Date();
          const tm=end.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
          const sv=SERVICES[S.data.svc];
          const booked=S.data.hours;
          const CUSHION=0.25;
          const FLOOR = booked>=4 ? booked*0.75 : booked*0.5;
          const actual=S.data.simElapsed;
          let billable=actual;
          if(actual>booked && actual<=booked+CUSHION) billable=booked;
          if(billable<FLOOR) billable=FLOOR;
          billable=Math.round(billable*100)/100;
          if(S.data.planBase){
            const extra=actual>booked+CUSHION?Math.round((actual-booked)*sv[2]):0, F=window.TBForm, g=F.gst2(S.data.planBase+extra), tot=S.data.planBase+extra+g+(S.data.ret||0);
            S.data.t=tm;S.data.total=tot;
            inMsg("✅ <b>End PIN</b> ✓ · "+tm+"<br><br>"+F.planBillHtml({id:S.data.id,plan:S.data.plan,hours:booked,base:S.data.planBase,ret:S.data.ret},S.lang,extra),[{t:t.payBtn(tot),v:"pay"}]);
            S.state="PAID";return;}
          const amt=Math.round(sv[2]*billable);
          const hhmm=(h)=>{const m=Math.round(h*60),H=Math.floor(m/60),M=m%60;return H&&M?H+"h "+M+"m":H?H+"h":M+"m";};
          let note="";
          if(actual>booked && billable===booked){ note=t.noteCushion(hhmm(booked)); }
          else if(actual<FLOOR){ note=t.noteFloor(hhmm(booked),hhmm(actual),hhmm(FLOOR)); }
          else if(billable<booked){ note=t.noteEarly(hhmm(booked),hhmm(actual)); }
          const gB=GSTCALC(amt);
          S.data.t=tm;S.data.actualH=hhmm(actual);S.data.billH=hhmm(billable);S.data.amt=amt;S.data.gst=gB.gst;S.data.total=gB.total;S.data.note=note;S.data.svcName=svcName(S.data.svc);
          inMsg(t.bill(sv,S.data),[{t:t.payBtn(gB.total),v:"pay"}]);
          S.state="PAID";return;}
        inMsg(t.endBad(S.data));return;}
      case "PAID":
        if(low==="pay"){inMsg(t.paid(S.data),
          [{t:"⭐⭐⭐⭐⭐",v:"svc5"},{t:"⭐⭐⭐⭐",v:"svc4"},{t:"⭐⭐⭐",v:"svc3"},{t:"⭐⭐",v:"svc2"},{t:"⭐",v:"svc1"}]);
          S.state="RATE_SVC";return;}
        return;
      case "RATE_SVC":
        if(v&&v.startsWith&&v.startsWith("svc")){
          S.data.svcRating=v.replace("svc","");
          inMsg(t.rateBee,
            [{t:"⭐⭐⭐⭐⭐",v:"bee5"},{t:"⭐⭐⭐⭐",v:"bee4"},{t:"⭐⭐⭐",v:"bee3"},{t:"⭐⭐",v:"bee2"},{t:"⭐",v:"bee1"}]);
          S.state="RATE_BEE";return;}
        return;
      case "RATE_BEE":
        if(v&&v.startsWith&&v.startsWith("bee")){
          S.data.beeRating=v.replace("bee","");
          inMsg(t.rateComment,[{t:t.skipBtn,v:"skipc"}]);
          S.state="RATE_COMMENT";return;}
        return;
      case "RATE_COMMENT":{
        const comment = (low==="skipc") ? "" : txt;
        const stars=(n)=>"⭐".repeat(parseInt(n,10));
        S.data.svcStars=stars(S.data.svcRating);S.data.beeStars=stars(S.data.beeRating);
        S.data.cLine = comment ? `<br>• <i>"${comment}"</i>` : "";
        inMsg(t.thanks(S.data),[{t:t.waBtn,v:"wa"}]);
        S.state="DONE";return;}
      case "DONE":
        if(low==="wa"){window.open(WA,"_blank");return;}
        inMsg(t.again);return;
    }
  }
  // wire input
  function send(){const v=inp.value.trim();if(!v)return;inp.value="";say(v);}
  if(liveSend) liveSend.addEventListener("click",send);
  if(inp) inp.addEventListener("keydown",e=>{if(e.key==="Enter")send();});

  // toggle live mode on
  let liveOn=false;
  liveBtn.addEventListener("click",()=>{
    liveOn=!liveOn;
    if(liveOn){
      // stop any auto-play
      playBtn.click&&playBtn.textContent.indexOf("Pause")>-1&&playBtn.click();
      staticBar.style.display="none";liveBar.style.display="flex";
      liveBtn.textContent="✕ Close live demo";liveBtn.style.background="#B3261E";liveBtn.style.borderColor="#B3261E";
      playBtn.style.display="none";replayBtn.style.display="none";
      start();
    }else{
      liveBar.style.display="none";staticBar.style.display="flex";
      liveBtn.textContent="🖐 Try it live";liveBtn.style.background="#25D366";liveBtn.style.borderColor="#25D366";
      playBtn.style.display="";replayBtn.style.display="";
      chat.innerHTML="";S={state:"OFF",data:{}};if(window.TBForm)window.TBForm.close();
    }
  });
})();
