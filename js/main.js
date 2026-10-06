/* ==========================================================================
   Site behaviour: config fill, language toggle, section rendering,
   plans dialog, WhatsApp chat demo, header/menu, scroll reveal.
   Content lives in content.js, settings in config.js.
   ========================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE;
  const DATA = window.CONTENT;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = "en";
  try { lang = localStorage.getItem("lang") === "hi" ? "hi" : "en"; } catch (e) { /* storage blocked */ }

  /* ---------- UI strings used by generated markup ---------- */
  const UI = {
    en: {
      live: "LIVE", soon: "COMING SOON", from: "from", perHour: "/ hour", plansDetails: "Plans & details",
      pricingLaunch: "Pricing at launch", notify: "Notify me", service: "Service", hour: "Per hour",
      hours: "hours", save: "Save", best: "BEST VALUE", book: "Book {name} on WhatsApp",
      bookMsg: "Hi, I would like to book {name}.", notifyMsg: "Hi, please tell me when {name} launches.",
      leadLive: "{n} services are live in {city}. Book by the hour, or take a fixed-price plan and pay less. Open any card to see the plans and what each one saves.",
      fee: "Fixed-price plans from <b>₹{min}</b>, up to <b>{pct}% less</b> than the hourly meter.", seePlans: "See plans and pricing",
      gst: "+ {gst}% GST", you: "Included",
    },
    hi: {
      live: "उपलब्ध", soon: "जल्द आ रहा है", from: "शुरू", perHour: "/ घंटा", plansDetails: "प्लान और जानकारी",
      pricingLaunch: "लॉन्च पर कीमत", notify: "मुझे बताएँ", service: "सेवा", hour: "प्रति घंटा",
      hours: "घंटे", save: "बचत", best: "सबसे किफ़ायती", book: "WhatsApp पर {name} बुक करें",
      bookMsg: "नमस्ते, मैं {name} बुक करना चाहता/चाहती हूँ।", notifyMsg: "नमस्ते, {name} शुरू होने पर मुझे बताएँ।",
      leadLive: "{city} में {n} सेवाएँ उपलब्ध हैं। घंटे के हिसाब से बुक करें, या फ़िक्स्ड प्लान लेकर कम दें। हर कार्ड खोलकर प्लान और बचत देखें।",
      fee: "फ़िक्स्ड प्लान <b>₹{min}</b> से शुरू, घंटे की दर से <b>{pct}% तक कम</b>।", seePlans: "प्लान और कीमतें देखें",
      gst: "+ {gst}% GST", you: "शामिल",
    },
  };
  const ui = (k, vars) => fmt(UI[lang][k], vars);

  /* ---------- helpers ---------- */
  function fmt(str, vars) {
    let out = String(str).replace(/\{brand\}/g, SITE.brand).replace(/\{city\}/g, SITE.city).replace(/\{gst\}/g, SITE.gst);
    if (vars) for (const k in vars) out = out.split("{" + k + "}").join(vars[k]);
    return out;
  }
  const tx = (o) => fmt(o[lang] || o.en);
  const planPrice = (hourly, p) => Math.round((hourly * p.hours * (1 - p.off)) / 10) * 10;
  const planSave = (hourly, p) => Math.round((1 - planPrice(hourly, p) / (hourly * p.hours)) * 100);
  const live = () => DATA.services.filter((s) => s.live);
  const waLink = (text) => "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text || SITE.defaultMessage);
  const icon = (id) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (DATA.icons[id] || "") + "</svg>";

  /* ---------- config + static translation ---------- */
  function fillConfig() {
    $$("[data-brand]").forEach((e) => (e.textContent = SITE.brand));
    $$("[data-city]").forEach((e) => (e.textContent = SITE.city));
    $$("[data-phone]").forEach((e) => (e.textContent = SITE.phone));
    $$("[data-email]").forEach((e) => (e.textContent = SITE.email));
    $$("[data-address]").forEach((e) => (e.textContent = SITE.address));
    $$("[data-gst]").forEach((e) => (e.textContent = SITE.gst));
    $$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));
    $$("[data-wa]").forEach((e) => {
      e.href = waLink(e.dataset.waText);
      e.target = "_blank";
      e.rel = "noopener";
    });
    $$("[data-tel]").forEach((e) => (e.href = "tel:" + SITE.phone.replace(/[^+\d]/g, "")));
    $$("[data-mail]").forEach((e) => (e.href = "mailto:" + SITE.email));
    $$("[data-insta]").forEach((e) => { e.href = SITE.instagram; if (SITE.instagram !== "#") { e.target = "_blank"; e.rel = "noopener"; } });
    document.title = fmt(lang === "hi" ? "{brand} | भरोसेमंद देखभाल और सहायता | WhatsApp पर बुक करें" : "{brand} | Trusted Care and Assistance | Book on WhatsApp");
  }

  function applyStatic() {
    $$("[data-hi]").forEach((el) => {
      const html = el.hasAttribute("data-html");
      if (!("en" in el.dataset)) el.dataset.en = html ? el.innerHTML : el.textContent;
      const val = lang === "hi" ? fmt(el.dataset.hi) : el.dataset.en;
      if (html) el.innerHTML = val; else el.textContent = val;
    });
  }

  /* ---------- generated sections ---------- */
  const stagger = ["", "d1", "d2"];

  function renderServices() {
    const liveCount = live().length;
    $("#svcLead").textContent = ui("leadLive", { n: liveCount });

    const prices = live().map((s) => planPrice(s.hourly, DATA.plans[0]));
    const maxSave = Math.max(...live().flatMap((s) => DATA.plans.map((p) => planSave(s.hourly, p))));
    $("#feeBanner").innerHTML = "<span>" + ui("fee", { min: Math.min(...prices), pct: maxSave }) + '</span> <a class="link-u" href="#pricing">' + ui("seePlans") + "</a>";

    $("#svcGrid").innerHTML = DATA.services.map((s, i) => {
      const name = tx(s.name);
      const foot = s.live
        ? '<div class="price">' + ui("from") + " <b>₹" + s.hourly + "</b> " + ui("perHour") + "<small>" + ui("gst") + '</small></div><button type="button" class="btn btn-outline" data-plans="' + s.id + '">' + ui("plansDetails") + "</button>"
        : '<div class="price"><b style="font-size:20px">' + ui("pricingLaunch") + '</b></div><a class="btn btn-outline" data-wa data-wa-text="' + ui("notifyMsg", { name }) + '" href="#">' + ui("notify") + "</a>";
      return (
        '<article class="svc ' + (s.live ? "" : "soon") + " reveal " + stagger[i % 3] + '">' +
        '<div class="svc-img"><img src="images/' + s.img + '" alt="" loading="lazy" width="800" height="500">' +
        '<div class="svc-cap"><b>' + name + "</b><span>" + tx(s.cap) + "</span></div></div>" +
        '<div class="svc-body"><div class="svc-top"><span class="ico">' + icon(s.id) + '</span><span class="pill ' + (s.live ? "live" : "soon") + '">' + (s.live ? ui("live") : ui("soon")) + "</span></div>" +
        "<h3>" + name + "</h3><p>" + tx(s.desc) + "</p>" + foot + "</div></article>"
      );
    }).join("");
  }

  function renderPricing() {
    $("#priceHead").innerHTML =
      "<th>" + ui("service") + "</th><th>" + ui("hour") + "</th>" +
      DATA.plans.map((p) => "<th>" + tx(p.label) + " · " + p.hours + " " + ui("hours") + "</th>").join("");
    $("#priceBody").innerHTML = live().map((s) => {
      const cells = DATA.plans.map((p) =>
        '<td data-label="' + tx(p.label) + " · " + p.hours + " " + ui("hours") + '">₹' + planPrice(s.hourly, p) + "<small>" + ui("save") + " " + planSave(s.hourly, p) + "%</small></td>").join("");
      return '<tr><td>' + tx(s.name) + '</td><td data-label="' + ui("hour") + '">₹' + s.hourly + "</td>" + cells + "</tr>";
    }).join("");
  }

  function renderList(target, items, tpl) { $(target).innerHTML = items.map(tpl).join(""); }

  function renderHow() {
    renderList("#howSteps", DATA.how, (x, i) => '<div class="step reveal ' + stagger[i % 3] + '"><h3>' + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderTrust() {
    renderList("#trustGrid", DATA.trust, (x, i) => '<div class="tstep reveal ' + stagger[i % 3] + '"><span class="n">0' + (i + 1) + "</span><h3>" + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderSafety() {
    renderList("#safetyGrid", DATA.safety, (x, i) => '<div class="scard ' + (x.alert ? "alert " : "") + "reveal " + stagger[i % 3] + '"><span class="ico">' + icon(x.i) + "</span><h3>" + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderReviews() {
    renderList("#reviewGrid", DATA.reviews, (x) => '<figure class="review reveal" style="margin:0 0 22px"><div class="stars" aria-label="5 stars">★★★★★</div><p>“' + tx(x.q) + '”</p><footer><span>' + tx(x.w) + '</span><span class="sample-tag">Sample</span></footer></figure>');
  }
  function renderFaq() {
    renderList("#faqList", DATA.faq, (x) => "<details><summary>" + tx(x.q) + "</summary><p>" + tx(x.a) + "</p></details>");
  }
  function renderFooter() {
    $("#footServices").innerHTML = live().map((s) => '<li><a href="#services" data-plans="' + s.id + '">' + tx(s.name) + "</a></li>").join("");
  }

  /* ---------- plans dialog ---------- */
  const dlg = $("#plansDlg");
  function openPlans(id) {
    const s = DATA.services.find((x) => x.id === id);
    if (!s || !dlg) return;
    const name = tx(s.name);
    $("#dlgImg").src = "images/" + s.img;
    $("#dlgTitle").textContent = name;
    $("#dlgDesc").textContent = tx(s.desc);
    $("#dlgPlans").innerHTML = DATA.plans.map((p) =>
      '<div class="plan' + (p.best ? ' best" data-badge="' + ui("best") : "") + '"><small>' + tx(p.label) + " · " + p.hours + " " + ui("hours") +
      "</small><b>₹" + planPrice(s.hourly, p) + "</b><em>" + ui("save") + " " + planSave(s.hourly, p) + "%</em></div>").join("");
    $("#dlgList").innerHTML = (s.points ? s.points[lang] || s.points.en : []).map((p) => "<li>" + p + "</li>").join("");
    $("#dlgBookTxt").textContent = ui("book", { name });
    const book = $("#dlgBook");
    book.dataset.waText = ui("bookMsg", { name });
    book.href = waLink(book.dataset.waText);
    book.target = "_blank";
    book.rel = "noopener";
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-plans]");
    if (trigger) { e.preventDefault(); openPlans(trigger.dataset.plans); return; }
    if (e.target === dlg || e.target.closest("#dlgX")) dlg.close();
  });

  /* ---------- WhatsApp chat demo ---------- */
  const SCRIPT = [
    { w: "out", en: "Hi", hi: "नमस्ते" },
    { w: "in", en: "Namaste! 🙏 Welcome to <b>{brand}</b>. Please choose your language:", hi: "नमस्ते! 🙏 <b>{brand}</b> में आपका स्वागत है। अपनी भाषा चुनें:", qr: ["English", "हिंदी"] },
    { w: "out", en: "English", hi: "हिंदी" },
    { w: "in", en: "How can we help you today?", hi: "आज हम आपकी क्या मदद करें?", qr: ["Hospital Assist", "Elderly Care", "Home Nursing"] },
    { w: "out", en: "Hospital Assist", hi: "अस्पताल सहायता" },
    { w: "in", en: "Tap <b>Book your Saathi</b> and fill a short form. You will see the price first.", hi: "<b>साथी बुक करें</b> दबाएँ और छोटा फ़ॉर्म भरें। कीमत पहले दिखेगी।", qr: ["Book your Saathi"] },
    { w: "in", card: true },
    { w: "out", en: "Confirm ✅", hi: "कन्फ़र्म ✅" },
    { w: "in", en: "Booked! 🎉 <b>Rohit S.</b> (ID SS-2041) is on the way, arriving in 18 min. Share your Start PIN <span class=\"pin\">4291</span> only at the door.", hi: "बुक हो गया! 🎉 <b>रोहित एस.</b> (ID SS-2041) रास्ते में हैं, 18 मिनट में पहुँचेंगे। स्टार्ट PIN <span class=\"pin\">4291</span> सिर्फ़ दरवाज़े पर दें।" },
  ];
  const CARD = {
    en: [["Service", "Hospital Assist"], ["When", "Today, 4:00 PM"], ["Where", "City Hospital OPD"], ["Price", "₹219/hr + GST"]],
    hi: [["सेवा", "अस्पताल सहायता"], ["कब", "आज, शाम 4:00"], ["कहाँ", "सिटी हॉस्पिटल OPD"], ["कीमत", "₹219/घंटा + GST"]],
  };
  const chat = $("#chat");
  let runId = 0;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function bubble(step, minute) {
    const el = document.createElement("div");
    el.className = "msg " + step.w;
    let html = "";
    if (step.card) {
      html = "<b>" + (lang === "hi" ? "बुकिंग सारांश" : "Booking summary") + '</b><div class="card">' + CARD[lang].map((r) => "<div><span>" + r[0] + "</span><span>" + r[1] + "</span></div>").join("") + "</div>";
    } else {
      html = fmt(step[lang]);
      if (step.qr) html += '<div class="qr">' + step.qr.map((q) => "<span>" + q + "</span>").join("") + "</div>";
    }
    el.innerHTML = html + "<time>9:" + String(minute).padStart(2, "0") + "</time>";
    return el;
  }

  async function playChat() {
    if (!chat) return;
    const my = ++runId;
    chat.innerHTML = "";
    let minute = 40;
    for (let i = 0; i < SCRIPT.length; i++) {
      const step = SCRIPT[i];
      if (!reduceMotion) {
        if (step.w === "in") {
          const typing = document.createElement("div");
          typing.className = "typing";
          typing.innerHTML = "<i></i><i></i><i></i>";
          chat.appendChild(typing);
          await wait(750);
          if (my !== runId) return;
          typing.remove();
        } else {
          await wait(900);
          if (my !== runId) return;
        }
      }
      if (i % 3 === 2) minute++;
      chat.appendChild(bubble(step, minute));
      if (!reduceMotion) { await wait(450); if (my !== runId) return; }
    }
  }
  const replayBtn = $("#replay");
  if (replayBtn) replayBtn.addEventListener("click", playChat);

  /* ---------- header, menu, language ---------- */
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger");
  const nav = $("#nav");
  const closeMenu = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- scroll reveal ---------- */
  let io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  function observeReveals() {
    $$(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }

  /* ---------- boot ---------- */
  function renderAll() {
    renderServices(); renderPricing(); renderHow(); renderTrust(); renderSafety(); renderReviews(); renderFaq(); renderFooter();
  }
  function setLang(next, initial) {
    lang = next === "hi" ? "hi" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ }
    document.documentElement.lang = lang;
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    applyStatic();
    renderAll();
    fillConfig();
    observeReveals();
    playChat();
  }
  setLang(lang, true);
})();
