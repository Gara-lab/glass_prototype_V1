(function () {
  "use strict";

  var ns = window.lueurStudio;

  function infoRow(label, value) {
    var row = ns.dom.el("div", "info-row");
    row.appendChild(ns.dom.el("p", "info-label", label));
    row.appendChild(ns.dom.el("p", "info-value", value));
    return row;
  }

  function form() {
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

    box.appendChild(field("name", "Name", "text", "Your name"));

    var emailWrap = field("email", "Email", "email", "you@example.com");
    box.appendChild(emailWrap);

    var messageWrap = ns.dom.el("div", "field");
    var msgLabel = ns.dom.el("label", null, "About the account");
    msgLabel.htmlFor = "message";
    var textarea = ns.dom.el("textarea", "input textarea");
    textarea.id = "message";
    textarea.name = "message";
    textarea.rows = 4;
    textarea.placeholder = "What feels off about the page today?";
    messageWrap.appendChild(msgLabel);
    messageWrap.appendChild(textarea);
    box.appendChild(messageWrap);

    var submit = ns.dom.el("button", "btn btn-primary btn-block", "Send request");
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
    var data = ns.data.contact;
    var site = ns.data.site;
    if (!host || !data) {
      return;
    }
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", "Contact"));
    head.appendChild(ns.dom.el("h2", null, "Let's revive your page."));
    if (site) {
      head.appendChild(ns.dom.el("p", "lead", site.contactIntro));
    }
    host.appendChild(head);

    var wrap = ns.dom.el("div", "contact-wrap");

    var info = ns.dom.el("div", "contact-info glass reveal");
    info.appendChild(infoRow("Email", data.email));
    info.appendChild(infoRow("Studio", data.handle));
    info.appendChild(infoRow("Based", data.location));
    info.appendChild(infoRow("Status", data.availability));
    var mail = ns.dom.el("a", "btn btn-ghost mailto", "Write directly");
    mail.href = "mailto:" + data.email;
    info.appendChild(mail);

    var formBox = ns.dom.el("div", "contact-form-box reveal");
    formBox.id = "contact-form-box";
    formBox.dataset.intro = site ? site.contactIntro : "";
    formBox.appendChild(form());

    wrap.appendChild(formBox);
    wrap.appendChild(info);
    host.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderContact);
  } else {
    renderContact();
  }
})();
