/* Trusbee · shared behaviour (all pages) */
(function(){
  document.documentElement.classList.add('js');
  var $ = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };

  /* ---------- header: frosted after scroll ---------- */
  var header = $('.site-header');
  function onScroll(){ if (header) header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* ---------- mobile nav ---------- */
  var tog = $('.nav-toggle'), links = $('.nav-links');
  if (tog && links) {
    tog.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      tog.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', links).forEach(function(a){ a.addEventListener('click', function(){ links.classList.remove('open'); tog.setAttribute('aria-expanded','false'); }); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') { links.classList.remove('open'); tog.setAttribute('aria-expanded','false'); } });
  }

  /* ---------- legacy anchors (v5 links shared on WhatsApp / Instagram still work) ----------
     #app is deliberately absent: it now belongs to the Trusbee app section on this page. */
  var MOVED = { '#join':'/bees/', '#terms':'/terms/', '#privacy':'/privacy/', '#investor':'/investors/', '#complaint':'/help/#complaint', '#partners':'/partners/', '#bot':'/#how', '#booknow':'/#demo', '#abroad':'/#families', '#promise':'/#families', '#story':'/#promise', '#safety':'/#safety', '#serve':'/#services' };
  if (location.pathname === '/' || /index\.html$/.test(location.pathname)) {
    var h = location.hash; if (MOVED[h] && MOVED[h].indexOf('/#') !== 0) { location.replace(MOVED[h]); }
    else if (MOVED[h]) { location.replace(MOVED[h].slice(1)); }
  }

  /* ---------- i18n: EN default in markup, HI from window.TB_HI ---------- */
  var EN = {};
  function snapshot(){ $$('[data-i18n]').forEach(function(el){ var k = el.getAttribute('data-i18n'); if (EN[k] == null) EN[k] = el.innerHTML; });
                       $$('[data-i18n-ph]').forEach(function(el){ var k = 'ph:' + el.getAttribute('data-i18n-ph'); if (EN[k] == null) EN[k] = el.getAttribute('placeholder') || ''; });
                       $$('[data-i18n-aria]').forEach(function(el){ var k = 'aria:' + el.getAttribute('data-i18n-aria'); if (EN[k] == null) EN[k] = el.getAttribute('aria-label') || ''; }); }
  /* The Devanagari webfonts are the heaviest thing on the site. They are fetched the
     first time someone switches to Hindi, not on every English page view. */
  var HI_FONT = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@500;600;700&display=swap';
  function loadHindiFont(){
    if (document.getElementById('tbHiFont')) return;
    var l = document.createElement('link');
    l.id = 'tbHiFont'; l.rel = 'stylesheet'; l.href = HI_FONT;
    document.head.appendChild(l);
  }

  function applyLang(l){
    if (l === 'hi') loadHindiFont();
    snapshot(); var HI = window.TB_HI || {};
    $$('[data-i18n]').forEach(function(el){ var k = el.getAttribute('data-i18n'); var v = (l === 'hi') ? HI[k] : EN[k]; if (v != null) el.innerHTML = v; });
    $$('[data-i18n-ph]').forEach(function(el){ var k = el.getAttribute('data-i18n-ph'); var v = (l === 'hi') ? HI['ph:'+k] : EN['ph:'+k]; if (v != null) el.setAttribute('placeholder', v); });
    $$('[data-i18n-aria]').forEach(function(el){ var k = el.getAttribute('data-i18n-aria'); var v = (l === 'hi') ? HI['aria:'+k] : EN['aria:'+k]; if (v != null) el.setAttribute('aria-label', v); });
    $$('[data-setlang]').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-setlang') === l); b.setAttribute('aria-pressed', b.getAttribute('data-setlang') === l ? 'true' : 'false'); });
    document.documentElement.lang = (l === 'hi') ? 'hi' : 'en';
    try { localStorage.setItem('tb_lang', l); } catch(e){}
    window.__tbLang = l;
    document.dispatchEvent(new CustomEvent('tb:lang', {detail:{lang:l}}));
  }
  $$('[data-setlang]').forEach(function(b){ b.addEventListener('click', function(){ applyLang(b.getAttribute('data-setlang')); }); });
  snapshot();
  var saved = null; try { saved = localStorage.getItem('tb_lang'); } catch(e){}
  if (saved === 'hi') applyLang('hi'); else applyLang('en');
  window.TB_applyLang = applyLang;

  /* ---------- reveal on scroll ----------
     Content is never parked at opacity 0 waiting on JS: the CSS only hides an element
     once JS has armed it, and a failsafe reveals anything still armed after 1.2s. */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.1, rootMargin:'0px 0px -5% 0px'}) : null;
  function revealAll(){ $$('.reveal[data-armed]:not(.in)').forEach(function(el){ el.classList.add('in'); }); }
  function drawSteps(){
    var st = $('.steps'); if (!st) return;
    var b = st.getBoundingClientRect();
    if (b.top < innerHeight * 0.9 && b.bottom > 0) st.classList.add('drawn');
  }
  window.addEventListener('scroll', drawSteps, {passive:true});
  window.addEventListener('load', drawSteps);
  function observeReveal(){
    if (!io) { $$('.reveal').forEach(function(el){ el.classList.add('in'); }); return; }
    $$('.reveal:not([data-armed])').forEach(function(el, i){
      el.setAttribute('data-armed', '1');
      el.style.transitionDelay = ((i % 4) * 60) + 'ms';
      io.observe(el);
      var b = el.getBoundingClientRect();
      if (b.top < innerHeight && b.bottom > 0) el.classList.add('in');   /* already on screen */
    });
    setTimeout(revealAll, 1200);
    drawSteps();
  }
  window.TB_reveal = observeReveal;
  window.addEventListener('load', revealAll);

  /* ---------- catalogue-driven bits (cards, price table, selects, links) ---------- */
  function renderCatalog(){
    if (!window.TB || !TB.SERVICES) return;
    var lang = TB.lang(), hi = lang === 'hi';
    var T = function(en, hin){ return hi ? hin : en; };
    var inr = TB.inr, g = TB.gstOf;

    /* price pair: bold incl-GST over the small ex-GST line */
    /* The one place price display is defined: the price before GST, then "+ 18% GST".
       No total and no GST amount is ever printed anywhere on the site. */
    function pricePair(ex){ return '<b>' + inr(ex) + '</b><span class="gst">' + T('+ 18% GST','+ 18% GST') + '</span>'; }
    function saveTag(key, col){
      var v = TB.planSaving(key, col);
      return v > 0 ? '<span class="save">' + T('Save ','बचत ') + inr(v) + '</span>' : '';
    }
    function planLabel(col, key){ return key && TB.planLabelFor ? TB.planLabelFor(key, col) : TB.t(TB.COL_LABELS[col]); }

    /* ---------- plan tiles inside a service card ---------- */
    function plansHtml(s, big){
      if (!TB.card(s.key)) return '';
      return '<div class="' + (big ? 'plans-lg' : 'plans') + '">' + TB.PLAN_COLS.map(function(col){
        var ex = TB.planEx(s.key, col);
        return '<div class="plan' + (col === 'fdc' ? ' full' : '') + '"><span>' + planLabel(col, s.key) + '</span>' +
          pricePair(ex) + saveTag(s.key, col) +
          (big && TB.isLive(s.key) ? '<a class="btn btn-primary btn-sm" data-wa="plan-' + s.slug + '-' + col + '" target="_blank" rel="noopener" href="' + TB.waLink(TB.WA_BOOK, TB.planWa(s, col), 'via trusbee.in · ' + s.slug + ' · ' + col) + '">' + T('Book','बुक करें') + '</a>' : '') +
          '</div>';
      }).join('') + '</div>';
    }
    window.TB_plansHtml = plansHtml;

    var IMG = {hospital:'lead',elderly:'grocery',urgent:'tools',personal:'box',compassion:'phone',event:'flowers',driver:'camera',security:'security',pet:'pet'};

    /* ---------- service cards ---------- */
    var grid = $('#svcGrid');
    if (grid) {
      grid.innerHTML = TB.SERVICES.map(function(s){
        var live = TB.isLive(s.key), card = TB.card(s.key), img = TB.scene(s);
        var from = card ? inr(g(card.hourly).total) : '';
        if (!live) return '<details class="svc soon reveal" id="svc-' + s.slug + '">' +
          '<summary>' + img + '<div class="svc-top"><span class="ic"><svg class="i" aria-hidden="true"><use href="#i-' + s.icon + '"/></svg></span><span class="tag tag-soon">' + T('Coming soon','जल्द आ रहा है') + '</span></div>' +
          '<div><div class="svc-bee">' + s.bee + '</div><h3>' + TB.t(s.name) + '</h3></div><p>' + TB.t(s.desc) + '</p>' +
          '<div class="svc-foot"><div class="svc-price">' + T('Pricing at launch','लॉन्च पर क़ीमत') + '</div><span class="svc-more">' + T('Details','विवरण') + ' <svg class="i" aria-hidden="true"><use href="#i-chevron"/></svg></span></div></summary>' +
          '<div class="svc-body"><p class="plan-note">' + T('We are bringing this service to Patna. Leave your name to hear from us on launch day.','हम इस सेवा को पटना में ला रहे हैं। लॉन्च के दिन सुनने के लिए अपना नाम दर्ज करें।') + '</p>' +
          '<div class="row"><a class="btn btn-secondary btn-sm" data-wa="soon-' + s.slug + '" target="_blank" rel="noopener" href="' + TB.waLink(TB.WA_TEAM, TB.t(s.wa)) + '"><svg class="i" aria-hidden="true"><use href="#i-bell"/></svg>' + T('Tell me when it launches','लॉन्च पर बताएँ') + '</a></div></div></details>';
        return '<details class="svc reveal" id="svc-' + s.slug + '">' +
          '<summary>' + img + '<div class="svc-top"><span class="ic"><svg class="i" aria-hidden="true"><use href="#i-' + s.icon + '"/></svg></span><span class="tag tag-live">' + T('Live','लाइव') + '</span></div>' +
          '<div><div class="svc-bee">' + s.bee + '</div><h3>' + TB.t(s.name) + '</h3></div><p>' + TB.t(s.desc) + '</p>' +
          '<div class="svc-foot"><div class="svc-price">' + T('from ','से ') + inr(card.hourly) + ' <span>/ ' + T('hour','घंटा') + '</span><span class="gst">' + T('+ 18% GST','+ 18% GST') + '</span></div><span class="svc-more">' + T('Plans & details','प्लान और विवरण') + ' <svg class="i" aria-hidden="true"><use href="#i-chevron"/></svg></span></div></summary>' +
          '<div class="svc-body"><p class="plan-note">' + T('Fixed-price care plans, before GST. Finishing early does not change the plan price.','तय क़ीमत के केयर प्लान, GST से पहले। जल्दी ख़त्म होने पर प्लान की क़ीमत नहीं बदलती।') + '</p>' + plansHtml(s) +
          '<ul>' + TB.t(s.inc).map(function(x){ return '<li><svg class="i" aria-hidden="true"><use href="#i-check"/></svg><span>' + x + '</span></li>'; }).join('') + '</ul>' +
          (s.notes ? '<p class="cap">' + TB.t(s.notes) + '</p>' : '') +
          '<div class="row"><a class="btn btn-primary btn-sm" data-wa="card-' + s.slug + '" target="_blank" rel="noopener" href="' + TB.waLink(TB.WA_BOOK, TB.t(s.wa), 'via trusbee.in · ' + s.slug) + '"><svg class="i" aria-hidden="true"><use href="#i-chat"/></svg>' + T('Book on WhatsApp','WhatsApp पर बुक करें') + '</a>' +
          '<a class="textbtn" href="/services/' + s.slug + '/">' + T('Details','विवरण') + ' <svg class="i" aria-hidden="true"><use href="#i-arrow"/></svg></a>' + '</div></div></details>';
      }).join('');
    }

    /* ---------- named plan tiles (pricing page) ---------- */
    var pc = $('#planCards');
    if (pc) pc.innerHTML = TB.PLANS.filter(function(pl){ return pl.cols.some(function(c){ return TB.PLAN_COLS.indexOf(c) >= 0; }); }).map(function(pl){
      var fromEx = Infinity;
      TB.SERVICES.forEach(function(s){ if (TB.isLive(s.key)) pl.cols.forEach(function(col){
        if (TB.PLAN_COLS.indexOf(col) < 0) return;
        var ex = TB.planEx(s.key, col);
        if (ex && ex < fromEx) fromEx = ex;
      }); });
      return '<div class="plan-card reveal"><span class="plan-hours">' + pl.hours + T('h','घं') + '</span>' +
        '<h3>' + TB.t(TB.PLAN_NAMES[pl.key]) + '</h3><p>' + TB.t(TB.PLAN_TAGLINES[pl.key]) + '</p>' +
        '<div class="plan-from">' + T('from ','से ') + '<b>' + inr(isFinite(fromEx) ? fromEx : 0) + '</b><span class="gst">' + T('+ 18% GST','+ 18% GST') + '</span></div></div>';
    }).join('');

    /* ---------- arrival fee slabs (pricing page) ---------- */
    var asl = $('#arrivalSlabs');
    if (asl) asl.innerHTML = ((TB.FEES && TB.FEES.arrivalSlabs) || []).map(function(sl, i, all){
      /* The card stores English labels; Hindi is built from the kilometre bounds so it
         can never drift from the numbers. */
      var from = i ? all[i - 1].maxKm : 0;
      var slabLabel = T(sl.label, sl.maxKm == null ? from + ' किमी और उससे अधिक' : from + ' से ' + sl.maxKm + ' किमी');
      return '<tr><td>' + slabLabel + '</td><td class="r"><b>' + (sl.fee ? inr(sl.fee) : T('Free','निःशुल्क')) + '</b></td></tr>';
    }).join('') + '<tr><td>' + T('Return, ending somewhere else','वापसी, कहीं और समाप्त होने पर') + '</td><td class="r"><b>' + inr((TB.FEES && TB.FEES.returnDiff) || 49) + '</b></td></tr>';

    /* ---------- cancellation bands (pricing page) ---------- */
    var cr = $('#cancelRows');
    var CANCEL_HI = {
      'More than 12 hours before': 'शुरू होने से 12 घंटे से अधिक पहले',
      '4 to 12 hours before': 'शुरू होने से 4 से 12 घंटे पहले',
      'Less than 4 hours before': 'शुरू होने से 4 घंटे से कम पहले',
      'After the Bee reaches you': 'Bee के आपके पास पहुँचने के बाद',
      'Free': 'निःशुल्क'
    };
    if (cr) cr.innerHTML = (TB.CANCEL_BANDS || []).map(function(b){
      return '<tr><td>' + T(b.window, CANCEL_HI[b.window] || b.window) + '</td><td class="r"><b>' + T(b.charge, CANCEL_HI[b.charge] || b.charge) + '</b></td></tr>';
    }).join('');

    /* ---------- "plans from" promo line ---------- */
    $$('[data-plans-promo]').forEach(function(el){
      el.innerHTML = T('Fixed-price care plans from ', 'तय क़ीमत के केयर प्लान ') + '<b>' + inr(TB.cheapestPlanTotal()) + '</b>' +
        T(', up to ' + TB.maxPlanDiscountPct() + '% less than the hourly meter.', ' से, प्रति घंटा दर से ' + TB.maxPlanDiscountPct() + '% तक कम।');
    });
    $$('[data-hourly-from]').forEach(function(el){
      var m = Infinity; TB.SERVICES.forEach(function(sv){ if (TB.isLive(sv.key)) m = Math.min(m, TB.hourly(sv.key)); });
      el.textContent = inr(isFinite(m) ? m : 0);
    });
    $$('[data-plan-from]').forEach(function(el){ el.textContent = inr(TB.cheapestPlanTotal()); });
    $$('[data-live-count]').forEach(function(el){ el.textContent = TB.SERVICES.filter(function(s){ return TB.isLive(s.key); }).length; });

    /* ---------- monthly plans, service-page plan block ---------- */
    var monthly = $('#monthlyRows');
    if (monthly) monthly.innerHTML = TB.MONTHLY.map(function(m){ return '<tr><td>' + TB.t(m.name) + '</td><td>' + TB.t(m.visit) + '</td><td class="r">' + m.days + '</td><td class="r">' + pricePair(m.price) + '</td></tr>'; }).join('');
    var spPlans = $('#spPlans');
    if (spPlans) { var cur = TB.SERVICES.filter(function(x){ return x.slug === spPlans.getAttribute('data-slug'); })[0]; if (cur) spPlans.innerHTML = plansHtml(cur, true); }

    /* ---------- selects and prefilled links ---------- */
    $$('select[data-services]').forEach(function(sel){
      var keep = sel.value, mode = sel.getAttribute('data-services');
      var opts = TB.SERVICES.filter(function(s){ return mode === 'all' || TB.isLive(s.key); }).map(function(s){ return '<option value="' + s.slug + '">' + TB.t(s.name) + '</option>'; }).join('');
      var first = sel.querySelector('option[value=""]');
      sel.innerHTML = (first ? first.outerHTML : '') + opts + (mode === 'complaint' ? '<option value="other">' + T('Other / not sure','अन्य / पता नहीं') + '</option>' : '');
      if (keep) sel.value = keep;
    });
    $$('[data-wa-service]').forEach(function(a){ var s = TB.SERVICES.filter(function(x){ return x.slug === a.getAttribute('data-wa-service'); })[0]; if (s) a.href = TB.waLink(TB.WA_BOOK, TB.t(s.wa), 'via trusbee.in · ' + s.slug); });

    function fill(id, slugs, cls){ var el = $('#' + id); if (!el) return; el.innerHTML = slugs.map(function(sl){ var sv = TB.SERVICES.filter(function(x){ return x.slug === sl; })[0]; return sv ? TB.scene(sv, cls || '') : ''; }).join(''); }
    fill('famScenes', ['elderly-care','hospital-assist']); fill('beeScenes', ['hospital-assist','elderly-care','personal-assist']); fill('ptScenes', ['hospital-assist','compassion-support']); fill('invScenes', ['hospital-assist','elderly-care']);
    var safe = $('#safeScene'); if (safe) safe.innerHTML = TB.scene(TB.SERVICES.filter(function(x){ return x.key === 'urgent'; })[0], 'tall');
    var gh = $('#ghScene'); if (gh) gh.innerHTML = TB.scene(TB.SERVICES.filter(function(x){ return x.key === 'hospital'; })[0], 'wide');
    observeReveal();
  }

  try { renderCatalog(); } catch (err) { if (window.console) console.error('Trusbee catalogue:', err); }
  observeReveal();
  document.addEventListener('tb:lang', function(){ try { renderCatalog(); } catch (err) { if (window.console) console.error('Trusbee catalogue:', err); revealAll(); } });


  /* ---------- WhatsApp click analytics ---------- */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href*="wa.me"]'); if (!a) return;
    var sec = a.closest('section[id]'); var placement = a.getAttribute('data-wa') || ((sec && sec.id) || 'header/footer');
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({event:'wa_click', location:placement, page:location.pathname}); } catch(err){}
    if (typeof gtag === 'function') gtag('event','whatsapp_click',{link_url:a.href, placement:placement, page:location.pathname});
  }, true);

  /* ---------- mobile action bar / desktop fab: hide over footer and forms ---------- */
  var bar = $('.actionbar'), fab = $('.fab'), foot = $('.site-footer');
  function hideBars(h){ if (bar) bar.classList.toggle('hide', h); if (fab) fab.classList.toggle('hide', h); }
  if (foot && io) { var fio = new IntersectionObserver(function(es){ hideBars(es[0].isIntersecting); }, {threshold:.05}); fio.observe(foot); }
  document.addEventListener('focusin', function(e){ if (e.target.matches('input,select,textarea')) hideBars(true); });
  document.addEventListener('focusout', function(e){ if (e.target.matches('input,select,textarea')) setTimeout(function(){ if (!document.activeElement || !document.activeElement.matches('input,select,textarea')) hideBars(false); }, 150); });

  /* ---------- form helpers: inline validation, WhatsApp compose ---------- */
  function fieldOf(el){ return el.closest('.field'); }
  function setError(el, msg){ var f = fieldOf(el); if (!f) return; f.classList.toggle('invalid', !!msg); var e = $('.error', f); if (e) e.textContent = msg || ''; }
  /* Every value that comes from a visitor is capped in length and HTML-escaped before it
     is allowed anywhere near an HTML string. Nothing typed on this site is ever trusted. */
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function val(id){ var el = document.getElementById(id); return el ? (el.value || '').trim().slice(0, 600) : ''; }
  window.TB_esc = esc;
  function validPhone(p){ var d = p.replace(/\D/g,''); if (d.length === 12 && d.indexOf('91') === 0) d = d.slice(2); return (/^[6-9]\d{9}$/.test(d)) ? d : null; }
  var T = function(en, hi){ return TB.lang() === 'hi' ? hi : en; };
  $$('input,select,textarea').forEach(function(el){ el.addEventListener('input', function(){ setError(el, ''); }); });
  window.TB_forms = {
    city: function(){
      var name = val('ce_name'), city = val('ce_city'), cityEl = $('#ce_city');
      if (!city) { setError(cityEl, T('Please choose your city.','कृपया अपना शहर चुनें।')); cityEl.focus(); return; }
      var msg = 'Trusbee — City interest\n\n' + (name || 'Someone') + ' would like Trusbee in *' + city + '*.\n\nPlease tell me when you launch there.';
      window.open(TB.waLink(TB.WA_TEAM, msg), '_blank', 'noopener,noreferrer');
    },
    investor: function(){
      var name = val('inv_name'), phone = val('inv_phone'), amount = val('inv_amount'); var ok = true;
      if (!name) { setError($('#inv_name'), T('Please add your name.','कृपया अपना नाम लिखें।')); ok = false; }
      var d = validPhone(phone); if (!d) { setError($('#inv_phone'), T('Enter a valid 10-digit mobile number.','सही 10 अंकों का मोबाइल नंबर लिखें।')); ok = false; }
      if (!ok) return;
      var msg = 'Hello Trusbee team,\n\nI visited trusbee.in and would like to learn more about being part of the journey.\n\nName: ' + name + '\nPhone: ' + d + (amount ? '\nConsidering: ' + amount : '') + '\n\nLooking forward to connecting.';
      window.open(TB.waLink(TB.WA_TEAM, msg), '_blank', 'noopener,noreferrer');
    },
    complaint: function(e){
      if (e) e.preventDefault();
      var name = val('cf_name'), phone = val('cf_phone'), booking = val('cf_booking'), svcEl = $('#cf_service'), about = val('cf_type'), details = val('cf_details'); var ok = true;
      if (!name) { setError($('#cf_name'), T('Please add your name.','कृपया अपना नाम लिखें।')); ok = false; }
      if (!validPhone(phone)) { setError($('#cf_phone'), T('Enter a valid 10-digit mobile number.','सही 10 अंकों का मोबाइल नंबर लिखें।')); ok = false; }
      if (!about) { setError($('#cf_type'), T('Tell us what this is about.','बताएँ कि यह किस बारे में है।')); ok = false; }
      if (!details) { setError($('#cf_details'), T('Please describe what happened.','कृपया बताएँ कि क्या हुआ।')); ok = false; }
      if (!ok) return false;
      var svc = svcEl && svcEl.value ? svcEl.options[svcEl.selectedIndex].text : '';
      var msg = 'Trusbee — Feedback / Complaint\n\nName: ' + name + '\nPhone: ' + phone + (booking ? '\nBooking: ' + booking : '') + (svc ? '\nService: ' + svc : '') + '\nAbout: ' + about + '\n\n' + details;
      window.open(TB.waLink(TB.WA_TEAM, msg), '_blank', 'noopener,noreferrer'); return false;
    },
    partner: function(e){
      if (e) e.preventDefault();
      var org = val('pt_org'), name = val('pt_name'), phone = val('pt_phone'), type = val('pt_type'), need = val('pt_need'); var ok = true;
      if (!org) { setError($('#pt_org'), T('Please add your organisation.','कृपया संस्था का नाम लिखें।')); ok = false; }
      if (!name) { setError($('#pt_name'), T('Please add your name.','कृपया अपना नाम लिखें।')); ok = false; }
      if (!validPhone(phone)) { setError($('#pt_phone'), T('Enter a valid 10-digit mobile number.','सही 10 अंकों का मोबाइल नंबर लिखें।')); ok = false; }
      if (!ok) return false;
      var msg = 'Trusbee — Partnership enquiry\n\nOrganisation: ' + org + (type ? ' (' + type + ')' : '') + '\nContact: ' + name + ', ' + phone + (need ? '\n\nWhat we need: ' + need : '');
      window.open(TB.waLink(TB.WA_TEAM, msg), '_blank', 'noopener,noreferrer'); return false;
    },
    bee: function(e){
      if (e) e.preventDefault();
      var name = val('bee_name'), phone = val('bee_phone'), role = val('bee_role'), city = val('bee_city'),
          area = val('bee_area'), edu = val('bee_edu'), exp = val('bee_exp'), cur = val('bee_cur'),
          exps = val('bee_exp_sal'), join = val('bee_join'), shift = val('bee_shift'), about = val('bee_about');
      var ok = true;
      if (!name) { setError($('#bee_name'), T('Please add your name.','कृपया अपना नाम लिखें।')); ok = false; }
      var d = validPhone(phone);
      if (!d) { setError($('#bee_phone'), T('Enter a valid 10-digit mobile number.','सही 10 अंकों का मोबाइल नंबर लिखें।')); ok = false; }
      if (!role) { setError($('#bee_role'), T('Choose the role you are applying for.','जिस भूमिका के लिए आवेदन है, वह चुनें।')); ok = false; }
      if (!city) { setError($('#bee_city'), T('Please add your current city.','कृपया अपना मौजूदा शहर लिखें।')); ok = false; }
      if (!ok) return false;
      /* The application goes to hr@trusbee.in by email so the CV can be attached.
         Everything the form collects is written into the body; the person only attaches and sends. */
      var L = [
        T('Role applied for: ','आवेदित भूमिका: ') + role,
        T('Name: ','नाम: ') + name,
        T('Mobile: ','मोबाइल: ') + d,
        T('Current city: ','मौजूदा शहर: ') + city
      ];
      if (area) L.push(T('Area or locality: ','इलाक़ा: ') + area);
      if (edu)  L.push(T('Highest qualification: ','उच्चतम योग्यता: ') + edu);
      if (exp)  L.push(T('Work experience: ','कार्य अनुभव: ') + exp);
      if (cur)  L.push(T('Current monthly salary: ','मौजूदा मासिक वेतन: ') + cur);
      if (exps) L.push(T('Expected monthly salary: ','अपेक्षित मासिक वेतन: ') + exps);
      if (join) L.push(T('Can join: ','कब जुड़ सकते हैं: ') + join);
      if (shift) L.push(T('Preferred shift: ','पसंदीदा शिफ़्ट: ') + shift);
      if (about) L.push(T('About me: ','मेरे बारे में: ') + about);
      var subject = T('Application for a Bee role — ','Bee भूमिका के लिए आवेदन — ') + role + ' — ' + name;
      var body = T('Hello Trusbee team,\n\nI would like to apply for a role at Trusbee.\n\n',
                   'नमस्ते Trusbee टीम,\n\nमैं Trusbee में एक भूमिका के लिए आवेदन करना चाहता/चाहती हूँ।\n\n')
                 + L.join('\n')
                 + T('\n\nMy CV is attached.\n\nThank you,\n','\n\nमेरा CV संलग्न है।\n\nधन्यवाद,\n') + name;
      window.location.href = 'mailto:hr@trusbee.in?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      return false;
    }
  };

  /* Forms and buttons are wired here, not with inline onsubmit/onclick attributes,
     so the pages carry no inline event handlers at all. */
  $$('form[data-tbform]').forEach(function(f){
    f.addEventListener('submit', function(e){
      var fn = window.TB_forms[f.getAttribute('data-tbform')];
      if (typeof fn === 'function') { e.preventDefault(); fn(e); }
    });
  });
  $$('[data-tbaction]').forEach(function(b){
    b.addEventListener('click', function(e){
      var fn = window.TB_forms[b.getAttribute('data-tbaction')];
      if (typeof fn === 'function') { e.preventDefault(); fn(e); }
    });
  });

  /* ---------- Pass 3 · coverage check ---------- */
  var cov = $('#coverage');
  if (cov) {
    var cIn = $('#cov_q'), cOut = $('#cov_out'), cBtn = $('#cov_btn');
    function coverage(){
      var raw = (cIn.value || '').slice(0, 120).trim(), q = esc(raw);
      var r = TB.checkCoverage(raw); var hi = TB.lang() === 'hi'; cOut.className = 'tool-result'; cOut.hidden = false;
      var book = '<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" data-wa="coverage" href="'+esc(TB.waLink(TB.WA_BOOK, (hi?'नमस्ते, मैं ':'Hi, I am in ') + raw + (hi?' में हूँ, बुकिंग करनी है।':' and would like to book.'), 'via trusbee.in · coverage'))+'"><svg class="i" aria-hidden="true"><use href="#i-chat"/></svg>'+(hi?'WhatsApp पर बुक करें':'Book on WhatsApp')+'</a>';
      var tell = '<a class="btn btn-secondary btn-sm" target="_blank" rel="noopener" href="'+esc(TB.waLink(TB.WA_TEAM, 'Trusbee — City interest\n\nPlease bring Trusbee to: ' + raw))+'">'+(hi?'हमें बताएँ':'Tell us')+'</a>';
      var map = {
        empty:  ['', hi?'पिनकोड या इलाक़े का नाम लिखें।':'Type a pincode or a locality to check.', ''],
        invalid:['bad', hi?'यह पिनकोड जैसा नहीं दिखता।':'That does not look like a pincode.', hi?'6 अंक लिखें, जैसे 800001।':'Pincodes are six digits, like 800001.'],
        core:   ['ok', hi?'कवर किया गया · Bee आम तौर पर 20–40 मिनट में':'Covered · a Bee typically reaches you in 20–40 minutes', hi?'पटना का मुख्य क्षेत्र। आगमन शुल्क ज़्यादातर ₹0–₹29।':'Central Patna. Arrival charge is usually ₹0–₹29. Express slots depend on availability.'],
        outer:  ['ok', hi?'कवर किया गया · Bee आम तौर पर 40–60 मिनट में':'Covered · a Bee typically reaches you in 40–60 minutes', hi?'पटना का बाहरी इलाक़ा। दूरी के अनुसार आगमन शुल्क ₹49–₹99।':'Outer Patna. An arrival charge of ₹49–₹99 applies for the Bee\'s travel.'],
        bihar:  ['warn', hi?'अभी नहीं — पटना हमारा पहला Hive है':'Not yet. Patna is our first Hive', hi?'हम शहर-दर-शहर बढ़ रहे हैं। बताएँ, और आपकी रुचि गिनी जाएगी।':'We open one city at a time. Tell us, and your city moves up the list.'],
        india:  ['warn', hi?'अभी पटना में ही':'Patna only, for now', hi?'बिहार के बाहर विस्तार बाद में। हमें बताएँ।':'Expansion beyond Bihar comes later. Tell us where you are.'],
        unknown:['warn', hi?'पक्का नहीं — WhatsApp पर पूछें':'Not sure. Ask us on WhatsApp', hi?'हम मिनटों में पुष्टि कर देंगे।':'We confirm coverage in minutes, any hour.']
      };
      var m = map[r.state]; if (m[0]) cOut.classList.add(m[0]);
      var icon = m[0]==='ok' ? 'shieldcheck' : (m[0]==='bad' ? 'alert' : 'pin');
      cOut.innerHTML = '<h4><svg class="i" aria-hidden="true"><use href="#i-'+icon+'"/></svg>'+m[1]+'</h4><p class="small">'+m[2]+'</p>' + (r.state==='empty' ? '' : '<div class="row" style="margin-top:8px">'+((m[0]==='ok'||r.state==='unknown') ? book : tell)+'</div>');
    }
    cBtn.addEventListener('click', coverage); cIn.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); coverage(); } });
    document.addEventListener('tb:lang', function(){ if (!cOut.hidden) coverage(); });
  }

  /* ---------- promo bar dismiss ---------- */
  var promo = $('#promo'), promoX = $('#promoClose');
  try { if (localStorage.getItem('tb_promo_dismissed') === '1' && promo) promo.hidden = true; } catch(e){}
  if (promoX) promoX.addEventListener('click', function(){ promo.hidden = true; try { localStorage.setItem('tb_promo_dismissed','1'); } catch(e){} });

  /* ---------- current year ---------- */
  $$('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  /* Scene photography: flags itself when it loads and removes itself when it does not.
     Done with listeners, not inline onload/onerror attributes, so no inline handler is
     needed anywhere on the site. */
  document.addEventListener('load', function(e){
    var t = e.target; if (t && t.tagName === 'IMG' && t.hasAttribute('data-scene-img')) t.dataset.ok = 1;
  }, true);
  document.addEventListener('error', function(e){
    var t = e.target; if (t && t.tagName === 'IMG' && t.hasAttribute('data-scene-img')) t.remove();
  }, true);

})();
