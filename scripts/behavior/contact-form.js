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
      if (nameInput.value.trim().length < 2) {
        setStatus(status, "Please add your name.", false);
        nameInput.focus();
        return;
      }
      if (!validEmail(emailInput.value.trim())) {
        setStatus(status, "Please check the email format.", false);
        emailInput.focus();
        return;
      }
      if (messageInput.value.trim().length < 10) {
        setStatus(status, "Tell me a little more about the account.", false);
        messageInput.focus();
        return;
      }
      setStatus(status, "Thank you. Your request is noted, I will reply within two working days.", true);
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
