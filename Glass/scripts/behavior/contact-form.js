(function () {
  "use strict";

  var ns = window.lueurStudio;

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  function setStatus(node, text, ok) {
    node.textContent = text;
    node.classList.toggle("ok", !!ok);
    node.classList.toggle("error", !ok);
  }

  function bind() {
    var form = document.getElementById("contact-form");
    if (!form) {
      return;
    }
    var status = document.getElementById("form-status");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!status) {
        return;
      }
      var copy = ns.lang.t();
      if (nameInput.value.trim().length < 2) {
        setStatus(status, copy.contact.errorName, false);
        nameInput.focus();
        return;
      }
      if (!validEmail(emailInput.value.trim())) {
        setStatus(status, copy.contact.errorEmail, false);
        emailInput.focus();
        return;
      }
      if (messageInput.value.trim().length < 10) {
        setStatus(status, copy.contact.errorMessage, false);
        messageInput.focus();
        return;
      }
      setStatus(status, copy.contact.success, true);
      form.reset();
    });
  }

  ns.behavior.contactForm = bind;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
