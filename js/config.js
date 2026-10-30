/* ==========================================================================
   SITE CONFIG: change these values, then run  node tools/build.js
   Name and logo are from the client. Everything marked PLACEHOLDER must be
   replaced before going live. While placeholders remain, the build marks the
   whole site "noindex" so Google does not index dummy details; the moment all
   of them are real, the build switches indexing on by itself.
   ========================================================================== */
window.SITE = {
  brand: "Sewa Saathi",            // business name
  tagline: "Home Care",            // small line under the name
  legalName: "Sewa Saathi Home Care", // full name used in titles and structured data

  url: "https://www.example.com",  // PLACEHOLDER: the live address of the site, no trailing slash
  city: "Your City",               // PLACEHOLDER: city you operate in
  region: "",                      // state, e.g. "Bihar"
  phone: "+91 98765 43210",        // PLACEHOLDER: number shown on the page
  whatsapp: "919876543210",        // PLACEHOLDER: WhatsApp number: country code + number, digits only
  email: "hello@example.com",      // PLACEHOLDER
  address: {                       // PLACEHOLDER: used in the footer and in Google's business data
    street: "Your street address",
    locality: "Your City",
    postalCode: "",
  },
  geo: null,                       // optional, e.g. { lat: 25.5941, lng: 85.1376 }
  serviceAreas: [],                // neighbourhoods you serve, e.g. ["Boring Road", "Kankarbagh"]. Great for local SEO

  /* profiles that point to this business. They become "sameAs" links in the
     structured data and the footer. Leave empty ("") what does not exist yet. */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
    googleBusiness: "",            // your Google Business Profile / Maps link
    justdial: "",
  },

  googleVerification: "",          // content of Google Search Console's verification meta tag
  bingVerification: "",            // content of Bing Webmaster Tools' verification meta tag

  gst: 0,                          // GST % to add on top of the rate list. 0 = prices exactly as in the rate list
  defaultMessage: "Hi, I would like to know more about your home care services.",
};
