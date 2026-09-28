(function () {
  "use strict";

  var ns = window.lueurStudio;

  function infoRow(label, value) {
    var row = ns.dom.el("div", "info-row");
    row.appendChild(ns.dom.el("p", "info-label", label));
    row.appendChild(ns.dom.el("p", "info-value", value));
    return row;
  }

  function form(copy) {
    var box = ns.dom.el("form", "contact-form glass reveal");
    box.id = "contact-form";
    box.noValidate = true;

    function field(id, label, type, placeholder) {
      var wrap = ns.dom.el("div", "field");
      var lab = ns.dom.el("label", null, label);
      lab.htmlFor = id;
      var input = ns.dom.el("input", "input");
      input.id = id;
      input.name = id;
      input.type = type;
      input.placeholder = placeholder;
      input.autocomplete = type === "email" ? "email" : "name";
      wrap.appendChild(lab);
      wrap.appendChild(input);
      return wrap;
    }

    box.appendChild(field("name", copy.contact.nameLabel, "text", copy.contact.namePlaceholder));

    var emailWrap = field("email", copy.contact.emailLabel, "email", "you@example.com");
    box.appendChild(emailWrap);

    var messageWrap = ns.dom.el("div", "field");
    var msgLabel = ns.dom.el("label", null, copy.contact.messageLabel);
    msgLabel.htmlFor = "message";
    var textarea = ns.dom.el("textarea", "input textarea");
    textarea.id = "message";
    textarea.name = "message";
    textarea.rows = 4;
    textarea.placeholder = copy.contact.messagePlaceholder;
    messageWrap.appendChild(msgLabel);
    messageWrap.appendChild(textarea);
    box.appendChild(messageWrap);

    var submit = ns.dom.el("button", "btn btn-primary btn-block", copy.contact.submit);
    submit.type = "submit";
    box.appendChild(submit);

    var status = ns.dom.el("p", "form-status");
    status.id = "form-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    box.appendChild(status);

    return box;
  }

  function renderContact() {
    var host = ns.dom.section("contact");
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    host.innerHTML = "";
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", copy.contact.eyebrow));
    head.appendChild(ns.dom.el("h2", null, copy.contact.heading));
    head.appendChild(ns.dom.el("p", "lead", copy.contact.intro));
    host.appendChild(head);

    var wrap = ns.dom.el("div", "contact-wrap");

    var info = ns.dom.el("div", "contact-info glass reveal");
    info.appendChild(infoRow(copy.contact.infoEmail, copy.contact.email));
    info.appendChild(infoRow(copy.contact.infoStudio, copy.contact.handle));
    info.appendChild(infoRow(copy.contact.infoBased, copy.contact.location));
    info.appendChild(infoRow(copy.contact.infoStatus, copy.contact.availability));
    var mail = ns.dom.el("a", "btn btn-ghost mailto", copy.contact.direct);
    mail.href = "mailto:" + copy.contact.email;
    info.appendChild(mail);

    var formBox = ns.dom.el("div", "contact-form-box reveal");
    formBox.id = "contact-form-box";
    formBox.appendChild(form(copy));

    wrap.appendChild(formBox);
    wrap.appendChild(info);
    host.appendChild(wrap);
  }

  ns.render.contact = renderContact;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderContact);
  } else {
    renderContact();
  }
})();
