(function () {
  "use strict";

  var ns = window.lueurStudio;
  var storageKey = "lueur-lang";
  var supported = ["en", "fr"];

  function readSaved() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function save(code) {
    try {
      window.localStorage.setItem(storageKey, code);
    } catch (error) {
      window.document.cookie = storageKey + "=" + code + ";max-age=31536000;samesite=lax";
    }
  }

  function normalize(code) {
    if (supported.indexOf(code) !== -1) {
      return code;
    }
    return ns.data.i18n.defaultLang;
  }

  function resolve() {
    var saved = readSaved();
    if (saved) {
      return normalize(saved);
    }
    // French is the default language of this website.
    return ns.data.i18n.defaultLang;
  }

  var current = resolve();

  function getLang() {
    return current;
  }

  function setLang(code) {
    current = normalize(code);
    save(current);
  }

  function t() {
    return ns.data.i18n[current];
  }

  ns.lang = {
    getLang: getLang,
    setLang: setLang,
    t: t
  };
})();
