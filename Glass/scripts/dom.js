(function () {
  "use strict";

  var ns = window.lueurStudio;

  function query(selector, scope) {
    var base = scope || document;
    return base.querySelector(selector);
  }

  function queryAll(selector, scope) {
    var base = scope || document;
    return Array.from(base.querySelectorAll(selector));
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined && text !== null) {
      node.textContent = text;
    }
    return node;
  }

  function section(id) {
    return document.getElementById(id);
  }

  ns.dom.query = query;
  ns.dom.queryAll = queryAll;
  ns.dom.el = el;
  ns.dom.section = section;
})();
