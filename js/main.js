/* ==========================================================================
   Site behaviour only: menu, header shadow, scroll reveal, nav highlight and
   the booking form with live estimate. All page content is pre-built by
   tools/build.js, so it is already in the HTML before this script runs.
   ========================================================================== */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const lang = document.documentElement.lang === "hi" ? "hi" : "en";

  /* ---------- header, menu ---------- */
  const header = $("#siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  const burger = $("#burger");
  const nav = $("#nav");
  if (burger && nav) {
    const closeMenu = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- scroll reveal ---------- */
  const reveals = $$(".reveal:not(.in)");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- nav highlight for the section in view (home page) ---------- */
  if ("IntersectionObserver" in window) {
    const links = new Map();
    $$(".nav a[href*='#']").forEach((a) => {
      const id = a.getAttribute("href").split("#")[1];
      if (id && document.getElementById(id)) links.set(id, a);
    });
    if (links.size) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const a = links.get(en.target.id);
          if (a) a.classList.toggle("active", en.isIntersecting);
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      links.forEach((_, id) => spy.observe(document.getElementById(id)));
    }
  }

  /* ---------- booking form + live estimate (home page only) ---------- */
  const form = $("#bookForm");
  if (!form || !window.SITE || !window.CONTENT || !window.Shared) return;

  const SITE = window.SITE;
  const DATA = window.CONTENT;
  const S = window.Shared.create(SITE, DATA, lang);
  const pad = (n) => String(n).padStart(2, "0");
  const waLink = (text) => "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text || SITE.defaultMessage);

  function setDefaultWhen() {
    const d = new Date();
    d.setMinutes(0, 0, 0);
    d.setHours(d.getHours() + 2);
    if (d.getHours() < 7 || d.getHours() >= 21) { // late night: suggest 9 AM instead
      if (d.getHours() >= 21) d.setDate(d.getDate() + 1);
      d.setHours(9);
    }
    const day = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    const today = new Date();
    $("#bkDate").min = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
    if (!$("#bkDate").value) $("#bkDate").value = day;
    if (!$("#bkTime").value) $("#bkTime").value = pad(d.getHours()) + ":00";
  }

  const selection = () => S.selection($("#bkService").value, $("#bkHours").value);

  function updateEstimate() {
    const sel = selection();
    $("#bkHoursField").hidden = sel.kind !== "care";
    $("#estimate").innerHTML = S.estimateHtml(sel);
  }

  ["#bkService", "#bkHours"].forEach((id) => $(id).addEventListener("change", updateEstimate));
  setDefaultWhen();
  updateEstimate();

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const err = $("#bkErr");
    const area = $("#bkArea"), phone = $("#bkPhone");
    [area, phone].forEach((f) => f.removeAttribute("aria-invalid"));
    err.hidden = true;
    const digits = phone.value.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
    let problem = null, field = null;
    if (!area.value.trim()) { problem = S.ui("errArea"); field = area; }
    else if (phone.value.trim() && digits.length !== 10) { problem = S.ui("errPhone"); field = phone; }
    if (problem) {
      err.textContent = problem; err.hidden = false;
      field.setAttribute("aria-invalid", "true"); field.focus();
      return;
    }
    const sel = selection();
    const gst = S.gstOf(sel.price);
    const when = new Date($("#bkDate").value + "T" + ($("#bkTime").value || "10:00"));
    const whenTxt = isNaN(when) ? "" : when.toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
    const en = window.Shared.create(SITE, DATA, "en"); // the message is always in English for our team
    const lines = [
      "Hi, I would like to book " + en.tx(sel.name) + ".",
      whenTxt && "Start: " + whenTxt,
      sel.kind === "care" && "Duration: " + en.durationLabel(sel.code),
      "Location: " + area.value.trim(),
      $("#bkName").value.trim() && "Patient: " + $("#bkName").value.trim(),
      digits && "Contact: " + digits,
      $("#bkFemale").checked && "Female caregiver: Yes",
      $("#bkNotes").value.trim() && "Notes: " + $("#bkNotes").value.trim(),
      "Rate: " + S.inr(sel.price) + (gst ? " + " + SITE.gst + "% GST = " + S.inr(sel.price + gst) : ""),
    ].filter(Boolean);
    const a = document.createElement("a");
    a.href = waLink(lines.join("\n"));
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  /* ---------- hero phone preview slideshow ---------- */
  (function () {
    const demo = $("#appDemo");
    if (!demo) return;
    const shots = $$(".ad-shot", demo);
    const dots = $$(".ad-dot");
    const cap = $("#adCap");
    if (!shots.length) return;

    let idx = 0;
    let timer = null;
    let paused = false;

    function setSlide(n) {
      idx = (n + shots.length) % shots.length;
      shots.forEach((el, i) => el.classList.toggle("on", i === idx));
      dots.forEach((el, i) => {
        el.classList.toggle("on", i === idx);
        el.setAttribute("aria-current", i === idx ? "step" : "false");
      });
      if (cap && dots[idx]) {
        cap.textContent = dots[idx].getAttribute("aria-label") || "";
      }
    }

    function next() {
      if (paused) return;
      setSlide(idx + 1);
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(next, 3400);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        setSlide(i);
        paused = true;
        clearInterval(timer);
        setTimeout(() => { paused = false; startTimer(); }, 8000);
      });
    });

    demo.addEventListener("mouseenter", () => { paused = true; });
    demo.addEventListener("mouseleave", () => { paused = false; });
    demo.addEventListener("click", () => { setSlide(idx + 1); startTimer(); });

    startTimer();
  })();
})();
