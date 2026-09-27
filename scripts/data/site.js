(function () {
  "use strict";

  var ns = window.lueurStudio;

  ns.data.site = {
    brand: "Lueur",
    brandSuffix: "studio",
    tagline: "Design that revives quiet accounts.",
    hero: {
      eyebrow: "Social media design, done calmly",
      titleLead: "Soft design for small and sleeping accounts.",
      description: "A calm, premium refresh for pages that lost their glow. Feeds, highlights, covers and templates made to bring them back to life and grow with intention.",
      primaryCta: "Start a project",
      secondaryCta: "See the services"
    },
    servicesIntro: "Focused offers, no noise. Each one is delivered as ready-to-post files, sized for mobile first.",
    workIntro: "Selected revivals from the studio. Names shared with permission, numbers kept honest.",
    resultsIntro: "A few numbers from recent revivals. Quiet accounts, visible results.",
    about: {
      eyebrow: "About",
      title: "The studio behind the glow.",
      paragraphs: [
        "Lueur is a one-person design studio working with small brands, creators and local businesses whose pages stopped feeling like them.",
        "Every project starts with a simple question: what should a visitor feel in the first three seconds? From there the feed becomes coherent, calm and recognisable at any screen size.",
        "No trend chasing, no clutter. Only clean, premium visuals that make a quiet account look established and easy to trust."
      ],
      valuesTitle: "How the work feels",
      values: ["Clean and airy", "Consistent grid", "Mobile first", "Delivered fast"]
    },
    contactIntro: "Tell me about the account you want to revive. I answer within two working days.",
    nav: [
      { id: "home", label: "Home", href: "#hero" },
      { id: "services", label: "Services", href: "#services" },
      { id: "work", label: "Work", href: "#work" },
      { id: "about", label: "About", href: "#about" },
      { id: "results", label: "Results", href: "#results" },
      { id: "contact", label: "Contact", href: "#contact" }
    ],
    secondaryNav: [
      { id: "privacy", label: "Privacy policy", href: "privacy.html" },
      { id: "terms", label: "Terms of service", href: "terms.html" }
    ],
    homeHref: "index.html",
    sidebar: {
      showLabel: "Show menu",
      hideLabel: "Hide menu"
    }
  };
})();
