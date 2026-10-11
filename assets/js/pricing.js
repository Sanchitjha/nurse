/* GENERATED from _source/pricing.json by build.py. Do not edit; edit the JSON and rebuild. */
window.TB_PRICING = {
  "cardVersion": "3.0",
  "effective": "2026-09-27",
  "_note": "Single source of truth for every price on trusbee.in. All amounts are EX-GST. Never store GST-inclusive figures; they are computed by TB.gstOf(). Edit here, then run: python3 _source/build.py",
  "_corrections": [
    "Urgent fdc 3549 -> 3499 and Event fdc 3299 -> 3249: as briefed, Full Day Care cost Rs 1 more than booking a 12h day plus a 12h night, so the 24h plan was never the cheapest way to buy 24 hours. Approved 12 Sep 2026.",
    "GST is computed on the invoice line total (6h x 219 = 1314, then GST on 1314), not per hour. Approved 12 Sep 2026; this is what the savings figures in the brief assume.",
    "Fees corrected 12 Sep 2026: the brief flattened the arrival fee to 'Rs 0-99'. Real slabs are 0-3 km free, 3-7 km 29, 7-12 km 49, 12-18 km 79, 18+ km 99. The Rs 49 return fee for a different end location stands (engine RETURN_SAME 0, RETURN_DIFF 49). Both fees are GST-exempt.",
    "26 Sep 2026: the price card was re-synced to the bot's catalogue (SHIFT.TIERS), at the user's instruction. This reverses the 12 Sep corrections to Urgent and Event Full Day Care, so those 24h plans are again ₹1 more than a 12h day plus a 12h night. Full Day Care is not advertised on the website, so the figure is not shown; if it is ever published, re-check it.",
    "27 Sep 2026 — card v3.0: 9-hour plan added to every service (Extended Care family names); Driver Assist repriced (3h 399, 6h 699/749, 9h 899/999, 12h 1149/1299) and its 24-hour plan removed, because one Bee drives and 12 hours is the maximum; recurring discount recorded (10% with 3+ visits a week, Rs 40 travel per visit).",
    "27 Sep 2026 — card v3.0 goes live on the website today rather than 1 Oct, on the founder's instruction; the bot must be on v3.0 from the same moment so the site and the WhatsApp quote never disagree."
  ],
  "gst": {
    "rate": 0.18,
    "note": "CGST 9% + SGST 9%, each rounded to the rupee, then added"
  },
  "plans": [
    {
      "key": "t3",
      "cols": [
        "t3"
      ],
      "name": "Quick Care",
      "hours": 3,
      "tagline": "One errand, one appointment"
    },
    {
      "key": "t6",
      "cols": [
        "t6d",
        "t6n"
      ],
      "name": "Half Day Care",
      "hours": 6,
      "tagline": "A hospital day or a morning shift"
    },
    {
      "key": "t9",
      "cols": [
        "t9d",
        "t9n"
      ],
      "name": "Extended Care",
      "hours": 9,
      "tagline": "A long day, without the full shift"
    },
    {
      "key": "t12",
      "cols": [
        "t12d",
        "t12n"
      ],
      "name": "Full Shift Care",
      "hours": 12,
      "tagline": "A full day or night beside the patient"
    },
    {
      "key": "fdc",
      "cols": [
        "fdc"
      ],
      "name": "Full Day Care",
      "hours": 24,
      "tagline": "Round the clock, two Bees, 12h day plus 12h night"
    }
  ],
  "services": {
    "hospital": {
      "name": "Hospital Assist",
      "live": true,
      "hourly": 219,
      "t3": 499,
      "t6d": 849,
      "t6n": 949,
      "t9d": 1099,
      "t9n": 1249,
      "t12d": 1349,
      "t12n": 1549,
      "fdc": 2849
    },
    "elderly": {
      "name": "Elderly Care",
      "live": true,
      "hourly": 199,
      "t3": 499,
      "t6d": 849,
      "t6n": 949,
      "t9d": 1099,
      "t9n": 1249,
      "t12d": 1349,
      "t12n": 1549,
      "fdc": 2849
    },
    "urgent": {
      "name": "24×7 Urgent Assist",
      "live": true,
      "hourly": 269,
      "t3": 599,
      "t6d": 1049,
      "t6n": 1099,
      "t9d": 1349,
      "t9n": 1449,
      "t12d": 1699,
      "t12n": 1849,
      "fdc": 3549
    },
    "personal": {
      "name": "Personal Assist",
      "live": true,
      "hourly": 199,
      "t3": 499,
      "t6d": 849,
      "t6n": 949,
      "t9d": 1099,
      "t9n": 1249,
      "t12d": 1349,
      "t12n": 1549,
      "fdc": 2849
    },
    "compassion": {
      "name": "Compassion Support",
      "live": true,
      "hourly": 219,
      "t3": 549,
      "t6d": 849,
      "t6n": 949,
      "t9d": 1099,
      "t9n": 1249,
      "t12d": 1349,
      "t12n": 1549,
      "fdc": 2849
    },
    "event": {
      "name": "Event Assist",
      "live": true,
      "hourly": 249,
      "t3": 599,
      "t6d": 949,
      "t6n": 1049,
      "t9d": 1249,
      "t9n": 1349,
      "t12d": 1599,
      "t12n": 1699,
      "fdc": 3299
    },
    "driver": {
      "name": "Driver Assist",
      "live": true,
      "goLive": "2026-09-14",
      "hourly": 219,
      "t3": 399,
      "t6d": 699,
      "t6n": 749,
      "t9d": 899,
      "t9n": 999,
      "t12d": 1149,
      "t12n": 1299
    },
    "bouncer": {
      "name": "Security Assist",
      "live": false,
      "hourly": 299,
      "t3": 649,
      "t6d": 1099,
      "t6n": 1199,
      "t9d": 1499,
      "t9n": 1599,
      "t12d": 1949,
      "t12n": 2049,
      "fdc": 3949
    },
    "pet": {
      "name": "Pet Care",
      "live": false,
      "hourly": 199,
      "t3": 499,
      "t6d": 849,
      "t6n": 949,
      "t9d": 1099,
      "t9n": 1249,
      "t12d": 1349,
      "t12n": 1549,
      "fdc": 2849
    }
  },
  "nightRule": "A block with 3 or more hours between 10 PM and 6 AM uses the night price.",
  "fees": {
    "gstExempt": true,
    "arrivalSlabs": [
      {
        "label": "0 to 3 km",
        "maxKm": 3,
        "fee": 0
      },
      {
        "label": "3 to 7 km",
        "maxKm": 7,
        "fee": 29
      },
      {
        "label": "7 to 12 km",
        "maxKm": 12,
        "fee": 49
      },
      {
        "label": "12 to 18 km",
        "maxKm": 18,
        "fee": 79
      },
      {
        "label": "18 km and beyond",
        "maxKm": null,
        "fee": 99
      }
    ],
    "returnSame": 0,
    "returnDiff": 49,
    "required": "Bee Arrival Fee ₹0–99 is confirmed when your Bee is assigned, based on distance. Return support is free when the visit ends where it started. If it ends somewhere else, a ₹49 return fee applies. GST does not apply to the arrival or return fee."
  },
  "femaleBeeHours": "Female Bees are available 9 AM to 6 PM.",
  "medicalDisclaimer": "For medical emergencies, call 102 / ambulance FIRST — we provide a person by your side, not medical treatment.",
  "offers": {
    "hourlyFirstHourFree": false,
    "planLaunchCredit": 0
  },
  "cancellation": [
    {
      "window": "More than 12 hours before",
      "charge": "Free"
    },
    {
      "window": "4 to 12 hours before",
      "charge": "25%"
    },
    {
      "window": "Less than 4 hours before",
      "charge": "50%"
    },
    {
      "window": "After the Bee reaches you",
      "charge": "100%"
    }
  ],
  "recurring": {
    "discountPct": 10,
    "minVisitsPerWeek": 3,
    "travelPerVisit": 40,
    "note": "10% off the service value per visit for custom recurring plans with 3 or more visits a week; travel Rs 40 and the arrival fee are never discounted; billed weekly"
  },
  "outstation": {
    "_note": "Driver Assist outstation packages, copied from outstation-core.js RATES (owner-approved 3 Oct 2026). Before GST. food/stay go to the driver at cost, no GST.",
    "pkg1": 1399,
    "pkg2": 2699,
    "pkg3": 3899,
    "pkg4": 4999,
    "pkg5": 5999,
    "extra": 1199,
    "ot": 219,
    "night": 150,
    "hill": 300,
    "food": 500,
    "stay": 900,
    "maxDays": 30
  }
};
window.TB_SCENE_IMG = {"compassion-support": "compassion-support.webp", "driver-assist": "driver-assist.webp", "elderly-care": "elderly-care.webp", "event-assist": "event-assist.webp", "hospital-assist": "hospital-assist.webp", "personal-assist": "personal-assist.webp", "pet-care": "pet-care.webp", "security-assist": "security-assist.webp", "urgent-assist": "urgent-assist.webp"};
