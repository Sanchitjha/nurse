/* Trusbee service catalogue · single source of truth for cards, pricing, estimator,
   complaint form and service pages. Prices in ₹ per hour, exclusive of 18% GST.       */
window.TB = window.TB || {};
TB.WA_BOOK = '919288181212';   // booking bot
TB.WA_TEAM = '919288181211';   // support / team
TB.GST = 0.18;
TB.ARRIVAL = [ {maxKm:3,fee:0,label:'0–3 km'},{maxKm:7,fee:29,label:'3–7 km'},{maxKm:12,fee:49,label:'7–12 km'},{maxKm:18,fee:79,label:'12–18 km'},{maxKm:999,fee:99,label:'18+ km'} ];
TB.RETURN_FEE = 49;
/* ===================== PRICING · card v2.6 ===================================
   Every price comes from window.TB_PRICING (generated from _source/pricing.json).
   Nothing here stores a rupee figure. GST is computed on the invoice line total:
   6 hours x 219 = 1314 taxable, then CGST 9% + SGST 9% each rounded on 1314.
   ========================================================================== */
TB.P = window.TB_PRICING || {};
TB.IGNORE_GOLIVE = true;   /* Driver Assist is launched: the dated gate is no longer applied */
TB.OFFER = { until:'30 Sep 2026', families:50, hourlyFirstHourFree:!!(TB.P.offers&&TB.P.offers.hourlyFirstHourFree), planCredit:(TB.P.offers&&TB.P.offers.planLaunchCredit)||0 };
TB.ADVANCE = { threshold_incl:3000, pct:20 };   /* first-time customers only */

/* GST on an ex-GST amount. Returns every component so bills can be itemised. */
TB.gstOf = function(ex){ var head = Math.round(ex * 0.09); return { ex:ex, cgst:head, sgst:head, gst:head*2, total:ex + head*2 }; };
TB.gst = function(ex){ return TB.gstOf(ex).gst; };
TB.inr = function(n){ return '₹' + Math.round(n).toLocaleString('en-IN'); };
TB.hydrate = function(){ (TB.SERVICES||[]).forEach(function(sv){ sv.live = TB.isLive(sv.key); sv.price = TB.hourly(sv.key); }); };          /* back-compat */

/* ---- plan metadata: which columns belong to which named plan, and their hours ---- */
TB.PLANS = (TB.P.plans || []);
TB.SHOW_FDC = false;   /* Full Day Care is priced in the card but not offered on the site */
/* App launch (12 Oct 2026, owner): fixed plan prices are shown only in the Trusbee app. The site shows each service's
   hourly "from" price and points to the app for plan prices. true brings every plan price back (cards, service pages,
   /pricing/). Fees, cancellation charges and the recurring discount stay on the site either way. */
TB.SHOW_PLAN_PRICES = window.TB_SHOW_PLAN_PRICES === true;   /* set by build.py from _source/launch.json → plan_prices_on_site */
TB.STORE = { play:'https://play.google.com/store/apps/details?id=in.trusbee.app', ios:'https://apps.apple.com/in/app/trusbee/id6817491323' };
/* the store for this phone, or null on a computer */
TB.storeFor = function(){ var ua = navigator.userAgent || ''; if (/android/i.test(ua)) return TB.STORE.play; if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1)) return TB.STORE.ios; return null; };
TB.storeBadges = function(cls, place){
  var hi = TB.lang() === 'hi', p = place ? ' data-place="' + place + '"' : '';
  return '<div class="store-badges ' + (cls || '') + '">' +
    '<a class="store-badge" href="' + TB.STORE.play + '" target="_blank" rel="noopener" data-store="play"' + p + ' aria-label="' + (hi ? 'Google Play पर पाएँ' : 'Get it on Google Play') + '"><svg class="sb-ic" aria-hidden="true"><use href="#i-gplay"/></svg><span><small>' + (hi ? 'इसे पाएँ' : 'GET IT ON') + '</small><b>Google Play</b></span></a>' +
    '<a class="store-badge" href="' + TB.STORE.ios + '" target="_blank" rel="noopener" data-store="ios"' + p + ' aria-label="' + (hi ? 'App Store से डाउनलोड करें' : 'Download on the App Store') + '"><svg class="sb-ic" aria-hidden="true"><use href="#i-apple"/></svg><span><small>' + (hi ? 'डाउनलोड करें' : 'Download on the') + '</small><b>App Store</b></span></a></div>';
};
TB.PLAN_COLS_ALL = ['t3','t6d','t6n','t9d','t9n','t12d','t12n','fdc'];
TB.PLAN_COLS = ['t3','t6d','t6n','t9d','t9n','t12d','t12n'];
TB.COL_HOURS = { t3:3, t6d:6, t6n:6, t9d:9, t9n:9, t12d:12, t12n:12, fdc:24 };
TB.COL_LABELS = {
  t3:  {en:'Quick Care · 3h',              hi:'क्विक केयर · 3 घंटे'},
  t6d: {en:'Half Day Care · 6h',           hi:'हाफ़ डे केयर · 6 घंटे'},
  t6n: {en:'Half Day Care · 6h night',     hi:'हाफ़ डे केयर · 6 घंटे रात'},
  t9d: {en:'Extended Care · 9h',           hi:'एक्सटेंडेड केयर · 9 घंटे'},
  t9n: {en:'Extended Care · 9h night',     hi:'एक्सटेंडेड केयर · 9 घंटे रात'},
  t12d:{en:'Full Shift Care · 12h',        hi:'फ़ुल शिफ़्ट केयर · 12 घंटे'},
  t12n:{en:'Full Shift Care · 12h night',  hi:'फ़ुल शिफ़्ट केयर · 12 घंटे रात'},
  fdc: {en:'Full Day Care · 24h, two Bees',hi:'फ़ुल डे केयर · 24 घंटे, दो Bees'}
};
TB.PLAN_NAMES = {
  t3:  {en:'Quick Care',      hi:'क्विक केयर'},
  t6:  {en:'Half Day Care',   hi:'हाफ़ डे केयर'},
  t9:  {en:'Extended Care',   hi:'एक्सटेंडेड केयर'},
  t12: {en:'Full Shift Care', hi:'फ़ुल शिफ़्ट केयर'},
  fdc: {en:'Full Day Care',   hi:'फ़ुल डे केयर'}
};
TB.PLAN_TAGLINES = {
  t3:  {en:'One errand, one appointment',                  hi:'एक काम, एक अपॉइंटमेंट'},
  t6:  {en:'A hospital day or a morning shift',            hi:'अस्पताल का एक दिन या सुबह की शिफ़्ट'},
  t9:  {en:'A long day, without the full shift',            hi:'लंबा दिन, पूरी शिफ़्ट के बिना'},
  t12: {en:'A full day or night beside the patient',        hi:'मरीज़ के साथ पूरा दिन या रात'},
  fdc: {en:'Round the clock, two Bees, 12h day plus 12h night', hi:'चौबीसों घंटे, दो Bees, 12 घंटे दिन और 12 घंटे रात'}
};

/* Plan names read differently per service: "Quick Care · 3h" suits a hospital visit but
   not a driver. Services listed here override the generic block names; anything not
   listed keeps the Care wording. The hours suffix and the night marker are added below. */
TB.PLAN_WORDS = {
  /* Mirrors FAM_NAMES in the bot's bot-shift.js: only driver, event and security get their
     own family of names. Every other service keeps the Care wording, exactly as the bot does. */
  driver:  { t3:{en:'Quick Drive',         hi:'क्विक ड्राइव'},       t6:{en:'Half Day Drive',         hi:'हाफ डे ड्राइव'},        t9:{en:'Extended Drive',         hi:'एक्सटेंडेड ड्राइव'},        t12:{en:'Full Shift Drive',         hi:'फुल शिफ्ट ड्राइव'} },
  event:   { t3:{en:'Quick Event Support', hi:'क्विक इवेंट सपोर्ट'}, t6:{en:'Half Day Event Support', hi:'हाफ डे इवेंट सपोर्ट'},  t9:{en:'Extended Event Support', hi:'एक्सटेंडेड इवेंट सपोर्ट'},  t12:{en:'Full Shift Event Support', hi:'फुल शिफ्ट इवेंट सपोर्ट'}, fdc:{en:'Full Day Event Support', hi:'फुल डे इवेंट सपोर्ट'} },
  bouncer: { t3:{en:'Quick Guard',         hi:'क्विक गार्ड'},        t6:{en:'Half Day Guard',         hi:'हाफ डे गार्ड'},         t9:{en:'Extended Guard',         hi:'एक्सटेंडेड गार्ड'},         t12:{en:'Full Shift Guard',         hi:'फुल शिफ्ट गार्ड'}, fdc:{en:'Full Day Guard',         hi:'फुल डे गार्ड'} }
};
TB.COL_BASE = { t3:'t3', t6d:'t6', t6n:'t6', t9d:'t9', t9n:'t9', t12d:'t12', t12n:'t12', fdc:'fdc' };
/* Label for a plan column in the context of one service. */
TB.planLabelFor = function(key, col){
  var words = TB.PLAN_WORDS[TB.cardKey ? TB.cardKey(key) : key];
  var base = TB.COL_BASE[col];
  if (!words || !words[base]) return TB.t(TB.COL_LABELS[col]);
  var hi = TB.lang() === 'hi';
  var hours = TB.COL_HOURS[col];
  var unit = hi ? ' घंटे' : 'h';
  var night = /n$/.test(col) ? (hi ? ' रात' : ' night') : '';
  return TB.t(words[base]) + ' · ' + hours + unit + night;
};

/* ---- lookups against the card ---- */
TB.cardKey = function(key){ return key === 'security' ? 'bouncer' : key; };   /* the bot calls Security Assist "bouncer" */
TB.card = function(key){ return (TB.P.services || {})[TB.cardKey(key)] || null; };
TB.hourly = function(key){ var c = TB.card(key); return c ? c.hourly : 0; };
TB.planEx = function(key, col){ var c = TB.card(key); return c && c[col] != null ? c[col] : 0; };
/* What a plan saves against the same hours on the hourly meter, both before GST so the
   figure reconciles against the prices actually shown on the page. Never negative. */
TB.planSaving = function(key, col){
  var c = TB.card(key); if (!c) return 0;
  return Math.max(0, c.hourly * TB.COL_HOURS[col] - c[col]);
};
/* A service is bookable only once its go-live date has passed. */
TB.isLive = function(key){
  var c = TB.card(key); if (!c || !c.live) return false;
  if (!c.goLive || TB.IGNORE_GOLIVE) return true;
  var d = new Date(c.goLive + 'T00:00:00'); return !isNaN(d) && new Date() >= d;
};
/* Every way to cover `hours` for a service, cheapest first.
   A plan shorter than the booking is offered as plan + hourly for the excess, which is
   exactly how the price promise bills it (Half Day Care + 1 hour, and so on). */
TB.bestFor = function(key, hours){
  var c = TB.card(key); if (!c || !(hours > 0)) return null;
  var opts = [{ kind:'hourly', col:null, covers:hours, extra:0, ex:c.hourly * hours }];
  TB.PLAN_COLS.forEach(function(col){
    var ph = TB.COL_HOURS[col], extra = Math.max(0, hours - ph);
    opts.push({ kind:'plan', col:col, covers:ph, extra:extra, ex:c[col] + c.hourly * extra });
  });
  opts.forEach(function(o){ var g = TB.gstOf(o.ex); o.gst = g.gst; o.total = g.total; });
  opts.sort(function(a,b){ return a.total - b.total || a.extra - b.extra; });
  return { options:opts, best:opts[0] };
};
/* The biggest plan discount across bookable services, floored, for the "up to X% less" line. */
TB.maxPlanDiscountPct = function(){
  var best = 0;
  (TB.SERVICES || []).forEach(function(sv){
    if (!TB.isLive(sv.key)) return;
    var c = TB.card(sv.key); if (!c) return;
    TB.PLAN_COLS.forEach(function(col){
      var hr = c.hourly * TB.COL_HOURS[col], pl = c[col];
      if (hr > 0) best = Math.max(best, (hr - pl) / hr * 100);
    });
  });
  return Math.floor(best);
};
/* Cheapest plan entry price across bookable services, before GST, for the "plans from" line. */
TB.cheapestPlanTotal = function(){
  var m = Infinity;
  (TB.SERVICES || []).forEach(function(sv){
    if (!TB.isLive(sv.key)) return;
    var c = TB.card(sv.key); if (!c) return;
    TB.PLAN_COLS.forEach(function(col){ m = Math.min(m, c[col]); });
  });
  return isFinite(m) ? m : 0;
};
TB.CANCEL_BANDS = (TB.P.cancellation || []);
TB.FEES = (TB.P.fees || {});
TB.NOTES = { female:TB.P.femaleBeeHours || '', medical:TB.P.medicalDisclaimer || '', night:TB.P.nightRule || '' };

/* Sahara monthly plans (Elderly Care) · Ops-managed, ask on WhatsApp · prices before GST */
TB.MONTHLY = [
  {name:{en:'Sahara Walk',hi:'Sahara Walk'},   visit:{en:'30-min walk + wellbeing check',hi:'30 मिनट की सैर + हाल-चाल'}, price:2999, days:26},
  {name:{en:'Sahara Visit',hi:'Sahara Visit'}, visit:{en:'60 min: walk, medicine reminder and company',hi:'60 मिनट: सैर, दवा की याद और साथ'}, price:4499, days:26},
  {name:{en:'Sahara Plus',hi:'Sahara Plus'},   visit:{en:'2 hours of daily care',hi:'रोज़ 2 घंटे की देखभाल'}, price:11999, days:26}
];

TB.SERVICES = [
  { slug:'hospital-assist', key:'hospital', icon:'hospital', bee:'Care Bee', 
    name:{en:'Hospital Assist',hi:'अस्पताल सहायता'},
    desc:{en:'A trained Bee beside your patient for OPD, admission, reports and bedside attending.',hi:'OPD, भर्ती, रिपोर्ट और बेडसाइड देखभाल के लिए आपके मरीज़ के साथ एक प्रशिक्षित Bee।'},
    inc:{en:["OPD and consultation company", "Diagnostic tests", "Admission and discharge assistance", "Report collection and pharmacy runs", "Patient attendant, overnight support", "Custom hospital task: tell us what you need, we confirm if a Bee can do it"],
         hi:["OPD और परामर्श में साथ", "डायग्नोस्टिक जाँच", "भर्ती और डिस्चार्ज में सहायता", "रिपोर्ट लाना और फ़ार्मेसी के काम", "मरीज़ अटेंडेंट, रात भर सहयोग", "कस्टम अस्पताल काम: बताइए आपको क्या चाहिए — हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं"]},
    wa:{en:"Hi, I'd like to book Hospital Assist.",hi:'नमस्ते, मुझे अस्पताल सहायता बुक करनी है।'} },
  { slug:'elderly-care', key:'elderly', icon:'elder', bee:'Sahara Bee', 
    name:{en:'Elderly Care',hi:'बुज़ुर्गों की देखभाल'},
    desc:{en:'Companionship, medicine reminders, doctor visits and gentle daily care for elders.',hi:'साथ, दवा की याद, डॉक्टर विज़िट और बुज़ुर्गों की रोज़मर्रा की कोमल देखभाल।'},
    inc:{en:["Companionship and walks", "Medicine reminders, no dosing", "Appointments", "Daily errands and grocery", "Tech help with phone and video calls", "Custom task: tell us what you need, we confirm if a Bee can do it"],
         hi:["साथ और सैर", "दवा की याद — खुराक नहीं", "अपॉइंटमेंट", "रोज़मर्रा के काम और किराना", "फ़ोन और वीडियो कॉल में मदद", "कस्टम काम: बताइए आपको क्या चाहिए — हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं"]},
    wa:{en:"Hi, I'd like to book Elderly Care.",hi:'नमस्ते, मुझे बुज़ुर्गों की देखभाल बुक करनी है।'} },
  { slug:'urgent-assist', key:'urgent', icon:'bolt', bee:'Rapid Bee', 
    name:{en:'24×7 Urgent Assist',hi:'24×7 तत्काल सहायता'},
    desc:{en:'Urgent non-medical help at any hour: night admissions, ER accompaniment, urgent medicine runs and pickups.',hi:'किसी भी समय तत्काल ग़ैर-चिकित्सीय मदद: रात की भर्ती, ER तक साथ, मौके पर सहारा।'},
    inc:{en:["Urgent non-medical help, any hour", "Night hospital admission company", "ER accompaniment", "Urgent medicine run", "Urgent pickup"],
         hi:["किसी भी समय तत्काल ग़ैर-चिकित्सीय मदद", "रात की अस्पताल भर्ती में साथ", "ER तक साथ", "तत्काल दवा लाना", "तत्काल पिकअप"]},
    wa:{en:'Hi, I need 24x7 Urgent Assist.',hi:'नमस्ते, मुझे तत्काल सहायता चाहिए।'} },
  { slug:'personal-assist', key:'personal', icon:'briefcase', bee:'Saathi Bee', 
    name:{en:'Personal Assist',hi:'व्यक्तिगत सहायता'},
    desc:{en:'Daily-needs runs, queue standing, a companion for the bank, office or shopping.',hi:'रोज़मर्रा के काम, कतार में खड़ा होना, बैंक, ऑफ़िस या खरीदारी में साथ।'},
    inc:{en:["Daily Needs Run: groceries, courier, document pick-up and drop, shopping with receipts", "Queue and token standing", "Bank and office companion: you transact, the Bee accompanies", "Shopping companion: payment stays in your hands", "Any other task: tell us what you need, we confirm if a Bee can do it"],
         hi:["डेली नीड्स रन: किराना, कूरियर, दस्तावेज़ लाना-पहुँचाना, रसीद के साथ खरीदारी", "कतार और टोकन में खड़ा होना", "बैंक और ऑफ़िस में साथ: लेन-देन आप करें, Bee साथ रहे", "खरीदारी में साथ: भुगतान आपके हाथ में", "कोई और काम: बताइए आपको क्या चाहिए — हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं"]},
    wa:{en:"Hi, I'd like to book Personal Assist.",hi:'नमस्ते, मुझे व्यक्तिगत सहायता बुक करनी है।'} },
  { slug:'compassion-support', key:'compassion', icon:'handheart', bee:'Shanti Bee', 
    name:{en:'Compassion Support',hi:'संवेदना सहयोग'},
    desc:{en:'A steady presence in bereavement: rites and arrangements, condolence visits, after-loss paperwork.',hi:'शोक की घड़ी में एक स्थिर साथ: क्रिया-कर्म और व्यवस्था, शोक-भेंट, बाद की कागज़ी कार्यवाही।'},
    inc:{en:["Bereavement presence", "Rites and arrangements assist", "Condolence visit companion", "Hospital vigil companion", "After-loss paperwork assist", "Other support: tell us what you need, we confirm if a Bee can do it"],
         hi:["शोक में साथ", "क्रिया-कर्म और व्यवस्था में सहायता", "शोक-भेंट में साथ", "अस्पताल में जागरण में साथ", "नुकसान के बाद कागज़ी कार्यवाही में सहायता", "अन्य सहयोग: बताइए आपको क्या चाहिए — हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं"]},
    wa:{en:"Hi, I'd like to book Compassion Support.",hi:'नमस्ते, मुझे संवेदना सहयोग बुक करना है।'} },
  { slug:'event-assist', key:'event', icon:'party', bee:'Event Bee', 
    name:{en:'Event Assist',hi:'कार्यक्रम सहायता'},
    desc:{en:'Guest management, setup and coordination, and dedicated care for elderly guests at your functions.',hi:'अतिथि प्रबंधन, व्यवस्था और समन्वय, और आपके समारोह में बुज़ुर्ग अतिथियों की विशेष देखभाल।'},
    inc:{en:["Guest management", "Setup and coordination help", "Elderly guest care", "Other event help: tell us what you need, we confirm if a Bee can do it"],
         hi:["अतिथि प्रबंधन", "व्यवस्था और समन्वय में मदद", "बुज़ुर्ग अतिथियों की देखभाल", "अन्य कार्यक्रम मदद: बताइए आपको क्या चाहिए — हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं"]},
    wa:{en:"Hi, I'd like to book Event Assist.",hi:'नमस्ते, मुझे कार्यक्रम सहायता बुक करनी है।'} },
  { slug:'driver-assist', key:'driver', icon:'car', bee:'Drive Bee',
    name:{en:'Driver Assist',hi:'ड्राइवर सहायता'},
    desc:{en:'A verified driver for your own car: hospital runs, school and office drops, airport transfers and a safe drive home at night.',hi:'आपकी अपनी कार के लिए सत्यापित ड्राइवर: अस्पताल, स्कूल और ऑफ़िस ड्रॉप, एयरपोर्ट ट्रांसफ़र और रात में सुरक्षित घर वापसी।'},
    inc:{en:['A police-verified driver for your own car','Hospital, school, office and airport runs','Safe drive home in the evening or at night','Elder errand drives and outstation day trips','You pay fuel, tolls and parking at actuals'],
         hi:['आपकी अपनी कार के लिए पुलिस-सत्यापित ड्राइवर','अस्पताल, स्कूल, ऑफ़िस और एयरपोर्ट के लिए','शाम या रात में सुरक्षित घर वापसी','बुज़ुर्गों के काम और आउटस्टेशन डे ट्रिप','ईंधन, टोल और पार्किंग आप वास्तविक लागत पर देते हैं']},
    reqs:[
      {n:{en:'Hourly driver, your car',hi:'प्रति घंटा ड्राइवर, आपकी कार'},d:{en:'A verified driver for as long as you need, in your own vehicle.',hi:'जितनी देर चाहिए, आपकी ही गाड़ी में सत्यापित ड्राइवर।'}},
      {n:{en:'Full-day driver',hi:'पूरे दिन का ड्राइवर'},d:{en:'One driver for the whole day, on a Full Shift Care plan.',hi:'पूरे दिन एक ड्राइवर, फ़ुल शिफ़्ट केयर प्लान पर।'}},
      {n:{en:'Hospital or clinic drop and wait',hi:'अस्पताल या क्लिनिक ड्रॉप और इंतज़ार'},d:{en:'Drive, park, wait through the appointment, drive back.',hi:'ले जाना, पार्क करना, अपॉइंटमेंट तक इंतज़ार, वापस लाना।'}},
      {n:{en:'Office or school drop and pick',hi:'ऑफ़िस या स्कूल ड्रॉप और पिक'},d:{en:'The daily run, on time, with the same driver where possible.',hi:'रोज़ का सफ़र, समय पर, जहाँ संभव हो वही ड्राइवर।'}},
      {n:{en:'Airport or station transfer',hi:'एयरपोर्ट या स्टेशन ट्रांसफ़र'},d:{en:'Early flights and late trains, luggage handled.',hi:'सुबह की फ़्लाइट और देर रात की ट्रेन, सामान संभाला हुआ।'}},
      {n:{en:'Safe drive home',hi:'सुरक्षित घर वापसी'},d:{en:'Evening or night: your car, driven home by a verified Bee.',hi:'शाम या रात: आपकी कार, सत्यापित Bee घर तक पहुँचाए।'}},
      {n:{en:'Elder errand drive',hi:'बुज़ुर्गों के काम की ड्राइव'},d:{en:'Bank, temple, market or a check-up, with patience.',hi:'बैंक, मंदिर, बाज़ार या जाँच, धैर्य के साथ।'}},
      {n:{en:'Outstation day trip',hi:'आउटस्टेशन डे ट्रिप'},d:{en:'Out and back in a day, on a Full Shift Care plan.',hi:'एक दिन में जाना और लौटना, फ़ुल शिफ़्ट केयर प्लान पर।'}},
      {n:{en:'Wedding or function driver',hi:'शादी या समारोह का ड्राइवर'},d:{en:'Guest pickups and drops through the event.',hi:'समारोह भर अतिथियों को लाना और पहुँचाना।'}},
      {n:{en:'Other driving help',hi:'अन्य ड्राइविंग मदद'},d:{en:'Car service, RTO work, shifting. Tell us what you need and we confirm if a Bee can do it.',hi:'कार सर्विस, RTO का काम, शिफ़्टिंग। बताइए आपको क्या चाहिए, हम कन्फर्म करेंगे कि Bee कर सकता है या नहीं।'}}
    ],
    notes:{en:'Trusbee provides the driver, not the vehicle. Your Bee drives your own car. Fuel, tolls and parking are paid by you at actuals.',hi:'Trusbee ड्राइवर देता है, गाड़ी नहीं। आपकी Bee आपकी ही कार चलाती है। ईंधन, टोल और पार्किंग आप वास्तविक लागत पर देते हैं।'},
    wa:{en:"Hi, I'd like to book Driver Assist.",hi:'नमस्ते, मुझे ड्राइवर सहायता बुक करनी है।'} },
  { slug:'security-assist', key:'security', icon:'shield', bee:'Guard Bee', 
    name:{en:'Security Assist',hi:'सुरक्षा सहायता'}, desc:{en:'Lawful security for events and gates.',hi:'कार्यक्रम और गेट के लिए वैध सुरक्षा।'}, inc:{en:[],hi:[]}, wa:{en:'Hi, tell me when Security Assist launches.',hi:'नमस्ते, सुरक्षा सहायता कब शुरू होगी?'} },
  { slug:'pet-care', key:'pet', icon:'paw', bee:'Paw Bee', 
    name:{en:'Pet Care',hi:'पेट केयर'}, desc:{en:'Walks, feeding, sitting and vet visits.',hi:'सैर, खाना, देखभाल और वेट विज़िट।'}, inc:{en:[],hi:[]}, wa:{en:'Hi, tell me when Pet Care launches.',hi:'नमस्ते, पेट केयर कब शुरू होगी?'} }
];

TB.SCENES = {
  hospital:{en:'A Bee at the OPD counter, Patna',hi:'पटना में OPD काउंटर पर एक Bee'}, elderly:{en:'An afternoon walk, medicines sorted',hi:'दोपहर की सैर, दवाएँ तैयार'},
  urgent:{en:'2 am at the emergency gate',hi:'रात 2 बजे इमरजेंसी गेट पर'}, personal:{en:'Queues, banks and errands, handled',hi:'कतार, बैंक और काम, संभाले हुए'},
  compassion:{en:'A steady presence when it matters',hi:'जब ज़रूरत हो, एक स्थिर साथ'}, event:{en:'Elderly guests, cared for all evening',hi:'बुज़ुर्ग अतिथि, पूरी शाम देखभाल में'},
  driver:{en:'A verified driver for your own car',hi:'आपकी कार के लिए सत्यापित ड्राइवर'}, security:{en:'Lawful security for events and gates',hi:'कार्यक्रम और गेट के लिए वैध सुरक्षा'}, pet:{en:'Walks, feeding and vet visits',hi:'सैर, खाना और वेट विज़िट'}
};
TB.SCENE_IMG = window.TB_SCENE_IMG || {};
TB.SCENE_SET = window.TB_SCENE_SET || {};   /* smaller copies for srcset (22 Oct 2026) */
/* 23 Oct 2026: frames wider than tall (the .wide 16:10 frames, and the service cards, which pass shape 'land') get the
   uncropped copies; the 4:5 frames and the 3:4 .tall frames get the 4:5 centre crops, which show the same part of the
   photo they showed before. sizes = how wide the frame is drawn, so the browser fetches no more pixels than it shows. */
TB.sceneSrcset = function(slug, extra, shape){
  var set = TB.SCENE_SET[slug]; if (!set) return '';
  var wide = /\bwide\b/.test(extra || ''), tall = /\btall\b/.test(extra || ''), land = wide || shape === 'land';
  var list = land ? set.land : (set.port || set.land); if (!list) return '';
  var sizes = wide ? '(max-width: 640px) 92vw, 600px' : tall ? '(max-width: 640px) 92vw, 440px' : '(max-width: 640px) 80vw, 340px';
  return ' srcset="' + list + '" sizes="' + sizes + '"';
};
TB.hasScene = function(slug){ return !!TB.SCENE_IMG[slug]; };
/* The photographs are square and the frames are landscape, so every frame crops the
   height. These are the vertical focal points, measured per photo, that keep faces in
   frame; the horizontal is centred everywhere. */
TB.SCENE_FOCUS = {
  'hospital-assist':    '50% 30%',
  'elderly-care':       '50% 28%',
  'urgent-assist':      '50% 34%',
  'personal-assist':    '50% 30%',
  'compassion-support': '50% 32%',
  'event-assist':       '50% 42%',
  'driver-assist':      '50% 34%',
  'security-assist':    '50% 26%',
  'pet-care':           '50% 38%'
};
TB.sceneFocus = function(slug){ return TB.SCENE_FOCUS[slug] || '50% 32%'; };

/* Photographs describe a real service, so they get a real alt line rather than alt="". */
TB.sceneAlt = function(s){
  var cap = TB.t(TB.SCENES[s.key] || {en:''});
  var txt = TB.t(s.name) + (cap ? ' \u2014 ' + cap : '');
  /* Several captions already name the city; do not say Patna twice. */
  if (!/Patna|पटना/.test(txt)) txt += (TB.lang() === 'hi' ? ', पटना' : ' in Patna');
  return txt.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
};
TB.scene = function(s, extra, shape){ var l = TB.lang(); return '<figure class="scene '+(extra||'')+'" data-scene="'+s.key+'">'+(TB.hasScene(s.slug) ? '<img src="/assets/img/scenes/'+TB.SCENE_IMG[s.slug]+'"'+TB.sceneSrcset(s.slug, extra, shape)+' alt="'+TB.sceneAlt(s)+'" style="object-position:'+TB.sceneFocus(s.slug)+'" loading="lazy" decoding="async" data-scene-img>' : '')+'<svg class="i scene-icon" aria-hidden="true"><use href="#i-'+s.icon+'"/></svg><span class="bars t"></span><span class="bars b"></span><figcaption><b>'+TB.t(s.name)+'</b><span>'+TB.t(TB.SCENES[s.key]||{en:''})+'</span></figcaption><span class="amber-line"></span></figure>'; };
TB.planWa = function(s, col){ var l = TB.lang(); return TB.t(s.wa) + ' ' + (l==='hi' ? 'प्लान: ' : 'Plan: ') + TB.planLabelFor(s.key, col) + '.'; };
TB.lang = function(){ return (document.documentElement.lang === 'hi') ? 'hi' : 'en'; };
TB.t = function(obj){ var l = TB.lang(); return (obj && (obj[l] || obj.en)) || ''; };
TB.waLink = function(number, text, tag){
  var t = text || 'Hi';
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(t + (tag ? '\n\n(' + tag + ')' : ''));
};
TB.arrivalFee = function(km){ for (var i=0;i<TB.ARRIVAL.length;i++){ if (km <= TB.ARRIVAL[i].maxKm) return TB.ARRIVAL[i].fee; } return 99; };

/* Coverage: Patna pincodes and localities. Pass 3 tool; extend the lists as Hives open. */
TB.COVERAGE = {
  core:  /^8000(0[1-9]|[12]\d|30)$/,                       // 800001–800030 · Patna GPO area
  outer: /^80(0031|1103|1105|1108|1503|1505|1506|1507|1109)$/, // Bihta, Khagaul, Danapur, Phulwari, Patna outskirts
  bihar: /^8[0-5]\d{4}$/,
  localities: {
    core:['kankarbagh','boring road','patliputra','rajendra nagar','bailey road','kumhrar','gardanibagh','ashok rajpath','exhibition road','frazer road','anisabad','kadamkuan','lohanipur','sri krishna puri','s k puri','buddha colony','kidwaipuri','pataliputra','kurji','digha','rajapur','mahendru','gulzarbagh','patna city','sultanganj','bhootnath','hanuman nagar','kankar bagh','sheikhpura','saguna','rukanpura','khajpura','jagdeo path','gola road','gandhi maidan','dak bungalow','bakerganj','langar toli','machhua toli','chitkohra','beur','jakkanpur','mithapur','punaichak','shastri nagar','indrapuri','ramnagri','ashiana','ashiyana','rajiv nagar','nehru nagar','aiims','pmch','igims','nmch','paras','ruban','ford','jaiprabha','patna junction','bihar museum'],
    outer:['danapur','phulwari','phulwari sharif','khagaul','bihta','saguna more','naubatpur','maner','fatuha','bakhtiyarpur','punpun','masaurhi','bihar sharif']
  }
};
TB.checkCoverage = function(q){
  q = (q||'').trim().toLowerCase();
  if (!q) return {state:'empty'};
  if (/^\d{6}$/.test(q)) {
    if (TB.COVERAGE.core.test(q)) return {state:'core'};
    if (TB.COVERAGE.outer.test(q)) return {state:'outer'};
    if (TB.COVERAGE.bihar.test(q)) return {state:'bihar'};
    if (/^\d{6}$/.test(q)) return {state:'india'};
  }
  if (/^\d+$/.test(q)) return {state:'invalid'};
  var L = TB.COVERAGE.localities;
  for (var i=0;i<L.core.length;i++) if (q.indexOf(L.core[i])>-1) return {state:'core'};
  for (var j=0;j<L.outer.length;j++) if (q.indexOf(L.outer[j])>-1) return {state:'outer'};
  if (q.indexOf('patna')>-1) return {state:'core'};
  return {state:'unknown'};
};

/* derive live-status and hourly rate from the card (runs once, after TB.SERVICES exists) */
TB.hydrate();
