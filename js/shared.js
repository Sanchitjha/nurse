/* ==========================================================================
   Shared helpers used by the browser (main.js) AND by the build (tools/build.js):
   text formatting, rate labels and the booking estimate.
   ========================================================================== */
(function (root) {
  "use strict";

  const UI = {
    en: {
      hrsOpt: "{n} hours", hour1: "1 hour", service: "Service", rate: "Rate",
      estTitle: "Your estimate", estService: "Service", estDuration: "Duration", estRate: "Rate", estGst: "GST {gst}%",
      estTotal: "Estimated charge",
      estNote: "The final amount is confirmed by our team on WhatsApp.",
      estIcu: "Our team will call you to explain the setup and what is included.",
      errArea: "Please tell us where the care is needed.", errPhone: "Enter a valid 10-digit mobile number, or leave it blank.",
      optCare: "Care services", optProc: "Nursing procedures", optIcu: "Home ICU setup",
    },
    hi: {
      hrsOpt: "{n} घंटे", hour1: "1 घंटा", service: "सेवा", rate: "दर",
      estTitle: "आपका अनुमान", estService: "सेवा", estDuration: "अवधि", estRate: "दर", estGst: "GST {gst}%",
      estTotal: "अनुमानित शुल्क",
      estNote: "अंतिम राशि हमारी टीम WhatsApp पर पक्का करती है।",
      estIcu: "हमारी टीम आपको फ़ोन करके सेटअप और उसमें क्या शामिल है, समझाएगी।",
      errArea: "कृपया बताएँ कि देखभाल कहाँ चाहिए।", errPhone: "10 अंकों का सही मोबाइल नंबर लिखें, या खाली छोड़ दें।",
      optCare: "देखभाल सेवाएँ", optProc: "नर्सिंग प्रक्रियाएँ", optIcu: "होम ICU सेटअप",
    },
  };

  const DURATIONS = ["hourly:1", "hourly:2", "hourly:4", "hourly:6", "h8", "day", "h24"];

  function create(SITE, DATA, lang) {
    lang = lang === "hi" ? "hi" : "en";

    function fmt(str, vars) {
      let out = String(str)
        .replace(/\{brand\}/g, SITE.brand)
        .replace(/\{city\}/g, SITE.city)
        .replace(/\{gst\}/g, SITE.gst);
      if (vars) for (const k in vars) out = out.split("{" + k + "}").join(vars[k]);
      return out;
    }
    const tx = (o, vars) => fmt(o[lang] || o.en, vars);
    const ui = (k, vars) => fmt(UI[lang][k], vars);
    const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
    const hoursLabel = (n) => (n === 1 ? ui("hour1") : ui("hrsOpt", { n }));
    const gstOf = (n) => Math.round((n * (Number(SITE.gst) || 0)) / 100);

    function durationLabel(code) {
      if (code.indexOf("hourly:") === 0) return hoursLabel(Number(code.split(":")[1]));
      return tx(DATA.tiers.find((t) => t.key === code).label);
    }
    function durationPrice(s, code) {
      if (code.indexOf("hourly:") === 0) return s.p.hourly * Number(code.split(":")[1]);
      return s.p[code];
    }

    /* value = a care service id, "proc:<id>" or "icu"; code = one of DURATIONS */
    function selection(value, code) {
      if (value.indexOf("proc:") === 0) {
        const p = DATA.procedures.find((x) => "proc:" + x.id === value) || DATA.procedures[0];
        return { kind: "proc", name: p.name, price: p.price };
      }
      if (value === "icu") return { kind: "icu", name: DATA.setup.name, price: DATA.setup.price };
      const s = DATA.services.find((x) => x.id === value) || DATA.services[0];
      const c = code || "h8";
      return { kind: "care", name: s.name, price: durationPrice(s, c), code: c };
    }

    function estimateHtml(sel) {
      const gst = gstOf(sel.price);
      const total = sel.price + gst;
      return (
        "<h3>" + ui("estTitle") + '</h3><dl class="est-rows">' +
        "<div><dt>" + ui("estService") + "</dt><dd>" + tx(sel.name) + "</dd></div>" +
        (sel.kind === "care" ? "<div><dt>" + ui("estDuration") + "</dt><dd>" + durationLabel(sel.code) + "</dd></div>" : "") +
        "<div><dt>" + ui("estRate") + "</dt><dd>" + inr(sel.price) + "</dd></div>" +
        (gst ? "<div><dt>" + ui("estGst", { gst: SITE.gst }) + "</dt><dd>" + inr(gst) + "</dd></div>" : "") +
        '</dl><div class="est-total"><span>' + ui("estTotal") + "</span><b>" + inr(total) + "</b></div>" +
        (sel.kind === "icu" ? '<p class="est-tip">' + ui("estIcu") + "</p>" : "") +
        '<p class="est-note">' + ui("estNote") + " " + tx(DATA.distance) + "</p>"
      );
    }

    return { lang, fmt, tx, ui, inr, hoursLabel, gstOf, durationLabel, durationPrice, selection, estimateHtml, DURATIONS };
  }

  root.Shared = { create, UI, DURATIONS };
})(typeof module !== "undefined" && module.exports ? module.exports : window);
