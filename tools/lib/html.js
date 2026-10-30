/* ==========================================================================
   Tiny HTML processor for the build (no dependencies).
   Works on our own well-formed templates: tokenises tags, then lets a
   callback rewrite attributes and inner HTML of any element.
   ========================================================================== */
"use strict";

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

const TOKEN_RE = /<!--[\s\S]*?-->|<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+(?:[^>"']|"[^"]*"|'[^']*')*)?\s*\/?>|[^<]+|</g;

function tokenize(html) {
  const out = [];
  let m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(html))) {
    const s = m[0];
    if (s.startsWith("<!--")) out.push({ t: "comment", s });
    else if (s.length > 1 && s[0] === "<" && /[a-zA-Z/]/.test(s[1])) {
      const close = s[1] === "/";
      const name = s.match(/^<\/?([a-zA-Z0-9-]+)/)[1].toLowerCase();
      out.push({ t: close ? "close" : "open", name, s, self: !close && (/\/\s*>$/.test(s) || VOID.has(name)) });
    } else out.push({ t: "text", s });
  }
  return out;
}

const ATTR_RE = /([a-zA-Z_:@][-a-zA-Z0-9_:.@]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;

/* returns [{name, value|null}] in source order */
function parseAttrs(openTag) {
  const inner = openTag.replace(/^<[a-zA-Z0-9-]+/, "").replace(/\/?\s*>$/, "");
  const attrs = [];
  let m;
  ATTR_RE.lastIndex = 0;
  while ((m = ATTR_RE.exec(inner))) {
    const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : null;
    attrs.push({ name: m[1], value });
  }
  return attrs;
}

const escAttr = (v) => String(v).replace(/&(?!#?\w+;)/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escText = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildOpen(name, attrs, self) {
  const a = attrs.map((x) => (x.value === null ? x.name : x.name + '="' + escAttr(x.value) + '"')).join(" ");
  return "<" + name + (a ? " " + a : "") + (self && !VOID.has(name) ? " /" : "") + ">";
}

function findClose(tokens, i) {
  const name = tokens[i].name;
  let depth = 1;
  for (let j = i + 1; j < tokens.length; j++) {
    const t = tokens[j];
    if (t.name !== name) continue;
    if (t.t === "open" && !t.self) depth++;
    else if (t.t === "close" && --depth === 0) return j;
  }
  return -1;
}

/* fn(el) is called for every opening tag.
   el = { name, attrs, get(name), has(name) }
   fn returns null (leave as is) or { attrs?: newAttrs, inner?: htmlString } */
function transform(html, fn) {
  const tokens = tokenize(html);
  let out = "";
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.t !== "open") { out += t.s; continue; }
    const attrs = parseAttrs(t.s);
    const el = {
      name: t.name,
      attrs,
      get: (n) => { const a = attrs.find((x) => x.name === n); return a ? a.value : undefined; },
      has: (n) => attrs.some((x) => x.name === n),
    };
    const res = fn(el);
    if (!res) { out += t.s; continue; }
    const newAttrs = res.attrs || attrs;
    if (res.inner !== undefined && !t.self) {
      const j = findClose(tokens, i);
      if (j > i) {
        out += buildOpen(t.name, newAttrs, false) + res.inner + tokens[j].s;
        i = j;
        continue;
      }
    }
    out += res.attrs ? buildOpen(t.name, newAttrs, t.self) : t.s;
  }
  return out;
}

const setAttr = (attrs, name, value) => {
  const out = attrs.filter((a) => a.name !== name);
  out.push({ name, value });
  return out;
};
const dropAttrs = (attrs, pred) => attrs.filter((a) => !pred(a.name));

module.exports = { tokenize, parseAttrs, transform, setAttr, dropAttrs, escAttr, escText, VOID };
