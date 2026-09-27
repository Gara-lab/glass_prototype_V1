(function () {
  "use strict";

  var ns = window.lueurStudio;

  ns.data.i18n = {
    defaultLang: "fr",
    toggleLabel: {
      en: "Français",
      fr: "English"
    },
    en: {
      lang: "en",
      title: "Lueur studio. design that revives quiet accounts",
      description: "Lueur studio. Design that revives small and quiet accounts and pages.",
      brand: {
        text: "Lueur <em>studio</em>"
      },
      headerCta: "Start a project",
      menuButton: "Open menu",
      skipLink: "Skip to content",
      drawerMore: "More",
      sidebar: {
        showLabel: "Show menu",
        hideLabel: "Hide menu"
      },
      nav: {
        home: "Home",
        services: "Services",
        work: "Work",
        results: "Results",
        about: "About",
        contact: "Contact",
        privacy: "Privacy policy",
        terms: "Terms of service"
      },
      tabTop: "Top",
      hero: {
        eyebrow: "Social media design, done calmly",
        titleLead: "Soft design for small and sleeping accounts.",
        description: "A calm, premium refresh for pages that lost their glow. Feeds, highlights, covers and templates made to bring them back to life and grow with intention.",
        primaryCta: "Start a project",
        secondaryCta: "See the services",
        chips: ["Feeds", "Highlights", "Covers", "Templates"],
        badge: "New look in three weeks"
      },
      services: {
        eyebrow: "Services",
        heading: "What the studio revives.",
        intro: "Focused offers, no noise. Each one is delivered as ready-to-post files, sized for mobile first.",
        items: [
          {
            title: "Feed revival",
            description: "A full visual refresh of the grid: covers, tones and layout so an old account looks alive again in one scroll.",
            list: ["Nine-post grid design", "Tone and type guide", "Ready-to-post files"]
          },
          {
            title: "Page identity kit",
            description: "Logo use, palette, highlight icons and story templates that keep every post on brand without effort.",
            list: ["Palette and fonts", "Highlight icon set", "Story templates"]
          },
          {
            title: "Template library",
            description: "Editable layouts for posts, reels covers and carousels, built to stay consistent long after handover.",
            list: ["Post and reel covers", "Carousel frames", "Simple usage notes"]
          },
          {
            title: "Content relaunch",
            description: "A calm four-week plan with post ideas and visuals, made for accounts starting over with small teams.",
            list: ["Four-week calendar", "Twelve designed posts", "Caption starters"]
          }
        ]
      },
      work: {
        eyebrow: "Work",
        heading: "Recent revivals.",
        intro: "Selected revivals from the studio. Names shared with permission, numbers kept honest.",
        open: "View case",
        openAria: "Open the CASE case study",
        closeAria: "Close case study",
        items: [
          {
            niche: "Ceramic studio",
            title: "Atelier nord",
            state: "Dormant feed, no posts for eight months",
            summary: "A warm neutral grid built around the pieces themselves. Nine revival posts, highlight icons and a reusable carousel set.",
            result: "+210% reach in five weeks",
            tags: ["Feed revival", "Template library"]
          },
          {
            niche: "Skincare startup",
            title: "Maison vertu",
            state: "New page with no visual identity",
            summary: "Soft green palette, calm type pairing and story templates that made the launch look established from day one.",
            result: "First 500 followers in three weeks",
            tags: ["Page identity kit"]
          },
          {
            niche: "Neighborhood café",
            title: "Café lune",
            state: "Active page, scattered visuals",
            summary: "A checkerboard rhythm of product and place shots, plus reel covers so every video matches the feed.",
            result: "Two sold-out tasting evenings",
            tags: ["Feed revival", "Content relaunch"]
          },
          {
            niche: "Yoga teacher",
            title: "Studio sable",
            state: "Quiet account, inconsistent posting",
            summary: "A four-week relaunch calendar with twelve designed posts and caption starters she could keep using alone.",
            result: "Waiting list reopened for classes",
            tags: ["Content relaunch", "Template library"]
          },
          {
            niche: "Florist",
            title: "Fleur atelier",
            state: "Dead page, lost followers",
            summary: "Full identity refresh: palette, highlight icons and seasonal post frames that follow the flowers, not the trends.",
            result: "+64% follower growth in two months",
            tags: ["Page identity kit", "Feed revival"]
          },
          {
            niche: "Vintage furniture",
            title: "Objet unique",
            state: "Small shop, photos without system",
            summary: "A gallery-style grid where each piece gets breathing room, plus carousel layouts for restoration stories.",
            result: "Sold six pieces through direct messages",
            tags: ["Template library"]
          }
        ]
      },
      results: {
        eyebrow: "Results",
        heading: "Quiet accounts, visible results.",
        intro: "A few numbers from recent revivals. Quiet accounts, visible results.",
        items: [
          { value: "+180%", label: "average reach after a feed revival" },
          { value: "3 weeks", label: "from first call to a live new look" },
          { value: "40+", label: "quiet accounts brought back to life" },
          { value: "98%", label: "clients keep the templates after handover" }
        ]
      },
      about: {
        eyebrow: "About",
        title: "The studio behind the glow.",
        paragraphs: [
          "Lueur is a one-person design studio working with small brands, creators and local businesses whose pages stopped feeling like them.",
          "Every project starts with a simple question: what should a visitor feel in the first three seconds? From there the feed becomes coherent, calm and recognisable at any screen size.",
          "No trend chasing, no clutter. Only clean, premium visuals that make a quiet account look established and easy to trust."
        ],
        valuesTitle: "How the work feels",
        values: ["Clean and airy", "Consistent grid", "Mobile first", "Delivered fast"],
        panelLabel: "In every project",
        panelItems: [
          "A calm, premium visual direction",
          "Files sized for phone screens first",
          "A look you can keep posting for months"
        ]
      },
      contact: {
        eyebrow: "Contact",
        heading: "Let's revive your page.",
        intro: "Tell me about the account you want to revive. I answer within two working days.",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        messageLabel: "About the account",
        messagePlaceholder: "What feels off about the page today?",
        submit: "Send request",
        errorName: "Please add your name.",
        errorEmail: "Please check the email format.",
        errorMessage: "Tell me a little more about the account.",
        success: "Thank you. Your request is noted, I will reply within two working days.",
        infoEmail: "Email",
        infoStudio: "Studio",
        infoBased: "Based",
        infoStatus: "Status",
        email: "hello@lueur.studio",
        handle: "@lueur.studio",
        location: "Remote, working worldwide",
        availability: "Booking projects for next month",
        direct: "Write directly"
      },
      footer: {
        copyright: "© YEAR Lueur studio. All rights reserved.",
        backToTop: "Back to top"
      },
      legal: {
        eyebrow: "Legal",
        back: "Back to the studio",
        privacyTitle: "Privacy policy.",
        termsTitle: "Terms of service.",
        privacyDescription: "Privacy policy of Lueur studio. What data the website handles and how it is used.",
        termsDescription: "Terms of service of Lueur studio. How projects are run and what clients receive.",
        privacy: {
          updated: "Last updated: september 2026",
          intro: "This page explains what happens to the information you share when you visit this website or send a message through the contact form.",
          sections: [
            {
              heading: "No personal data stored",
              paragraphs: [
                "This website does not hold any personal data about you. There is no account system, no newsletter database and no client records kept by these pages.",
                "The contact form collects only what you choose to type: your name, your email address, the platform you want help with and a short description of your project.",
                "Until a storage solution is connected to this website, the form validates your message locally in your browser and does not transmit it anywhere. Nothing is sent until you also reach out by email."
              ]
            },
            {
              heading: "How information is used",
              paragraphs: [
                "Messages received by email are used for one purpose only: answering your project inquiry and preparing a quote.",
                "The email address you share will never be used to send advertisements, promotional offers or unsolicited messages. It is not added to any marketing list and is never sold or shared with third parties.",
                "Account details you share are treated as confidential. Screenshots and access credentials are never requested, and existing clients are always asked before any work is shown publicly."
              ]
            },
            {
              heading: "Cookies and tracking",
              paragraphs: [
                "This website does not use advertising trackers, social media pixels or third-party analytics scripts. No cookie banner is needed because no non-essential cookies are set.",
                "Only one technical preference is stored in your browser: the language you chose with the switch at the top right of each page. It stays on your device and is never transmitted."
              ]
            },
            {
              heading: "Hosting and security",
              paragraphs: [
                "The static pages are served by a hosting provider whose servers may log standard technical data such as IP addresses and browser types. These logs belong to the host and are not used to identify visitors."
              ]
            },
            {
              heading: "Your rights",
              paragraphs: [
                "You may ask at any time to see, correct or delete any information held about you. Requests are answered within thirty days.",
                "To exercise any of these rights, write to the contact email shown in the footer of this website."
              ]
            },
            {
              heading: "Ownership of delivered work",
              paragraphs: [
                "Everything delivered through the studio services becomes yours on final payment: templates, covers, feeds and any other product handed over.",
                "Once delivered, those products are your sole responsibility and ownership. The studio is not accountable for how they are published, edited or used afterwards."
              ]
            }
          ]
        },
        terms: {
          updated: "Last updated: september 2026",
          intro: "These terms describe how projects with Lueur studio are run, what is expected from both sides and what you receive at the end.",
          sections: [
            {
              heading: "Scope of work",
              paragraphs: [
                "Each project follows the offer chosen during the first exchange: feed revival, page identity kit, template library or content relaunch.",
                "Any request outside the agreed scope is quoted separately before work begins."
              ]
            },
            {
              heading: "Process and timeline",
              paragraphs: [
                "Projects usually run between one and four weeks after the discovery call, depending on the offer and on how quickly feedback arrives.",
                "Delays caused by missing feedback or files extend the timeline accordingly."
              ]
            },
            {
              heading: "Payment",
              paragraphs: [
                "A fifty percent deposit confirms the booking. The balance is due before final files are delivered.",
                "Prices quoted in writing remain valid for thirty days."
              ]
            },
            {
              heading: "Revisions",
              paragraphs: [
                "Two rounds of revisions are included in every offer. Additional rounds are billed at the hourly rate agreed in the quote."
              ]
            },
            {
              heading: "Ownership and usage",
              paragraphs: [
                "Everything given to you through the offered services is your sole property and your sole responsibility from the moment it is delivered.",
                "Final delivered files may be used by the client without time limit on the platforms covered by the project.",
                "Working files, fonts licenses and source documents remain the property of the studio unless a separate agreement states otherwise.",
                "With written permission, selected results may be shown in the studio portfolio."
              ]
            },
            {
              heading: "Cancellation",
              paragraphs: [
                "Projects may be cancelled before design work starts, in which case the deposit is refunded.",
                "Once design work has started, the deposit covers the hours already invested."
              ]
            },
            {
              heading: "Limitation of liability",
              paragraphs: [
                "Design improves how an account looks and reads. Growth depends on many factors outside the design itself, so no specific numerical result is guaranteed.",
                "Total liability of the studio for a project never exceeds the amount paid for that project."
              ]
            }
          ]
        }
      }
    },
    fr: {
      lang: "fr",
      title: "Lueur studio. le design qui réveille les comptes discrets",
      description: "Lueur studio. Un design qui redonne vie aux petits comptes et aux pages silencieuses.",
      brand: {
        text: "Lueur <em>studio</em>"
      },
      headerCta: "Démarrer un projet",
      menuButton: "Ouvrir le menu",
      skipLink: "Aller au contenu",
      drawerMore: "Plus",
      sidebar: {
        showLabel: "Afficher le menu",
        hideLabel: "Masquer le menu"
      },
      nav: {
        home: "Accueil",
        services: "Services",
        work: "Réalisations",
        results: "Résultats",
        about: "À propos",
        contact: "Contact",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation"
      },
      tabTop: "Haut",
      hero: {
        eyebrow: "Design pour réseaux sociaux, fait avec calme",
        titleLead: "Un design doux pour les petits comptes endormis.",
        description: "Un rafraîchissement calme et premium pour les pages qui ont perdu leur éclat. Feeds, stories à la une, couvertures et modèles pensés pour les faire revivre et grandir avec intention.",
        primaryCta: "Démarrer un projet",
        secondaryCta: "Voir les services",
        chips: ["Feeds", "Stories à la une", "Couvertures", "Modèles"],
        badge: "Un nouveau regard en trois semaines"
      },
      services: {
        eyebrow: "Services",
        heading: "Ce que le studio redonne vie.",
        intro: "Des offres ciblées, sans bruit. Chacune est livrée en fichiers prêts à publier, dimensionnés d'abord pour le mobile.",
        items: [
          {
            title: "Réveil de feed",
            description: "Un rafraîchissement visuel complet de la grille : couvertures, tons et mise en page pour qu'un ancien compte paraisse de nouveau vivant en un seul scroll.",
            list: ["Grille de neuf publications", "Guide des tons et typographies", "Fichiers prêts à publier"]
          },
          {
            title: "Kit d'identité de page",
            description: "Usage du logo, palette, icônes de stories à la une et modèles de stories pour garder chaque publication cohérente sans effort.",
            list: ["Palette et polices", "Jeu d'icônes de stories", "Modèles de stories"]
          },
          {
            title: "Bibliothèque de modèles",
            description: "Des mises en page modifiables pour publications, couvertures de reels et carrousels, pensées pour rester cohérentes longtemps après la livraison.",
            list: ["Couvertures de posts et reels", "Cadres de carrousels", "Notes d'utilisation simples"]
          },
          {
            title: "Relance de contenu",
            description: "Un plan calme de quatre semaines avec idées et visuels, conçu pour les comptes qui repartent avec de petites équipes.",
            list: ["Calendrier de quatre semaines", "Douze publications designées", "Amorces de légendes"]
          }
        ]
      },
      work: {
        eyebrow: "Réalisations",
        heading: "Réveils récents.",
        intro: "Sélection de réveils du studio. Noms partagés avec permission, chiffres honnêtes.",
        open: "Voir le cas",
        openAria: "Ouvrir l'étude de cas CASE",
        closeAria: "Fermer l'étude de cas",
        items: [
          {
            niche: "Atelier céramique",
            title: "Atelier nord",
            state: "Feed dormant, aucun publié pendant huit mois",
            summary: "Une grille neutre et chaude construite autour des pièces elles-mêmes. Neuf publications de réveil, icônes de stories et un jeu de carrousels réutilisable.",
            result: "+210 % de portée en cinq semaines",
            tags: ["Réveil de feed", "Bibliothèque de modèles"]
          },
          {
            niche: "Startup skincare",
            title: "Maison vertu",
            state: "Nouvelle page sans identité visuelle",
            summary: "Palette verte tout en douceur, association typographique calme et modèles de stories qui ont donné au lancement un air établi dès le premier jour.",
            result: "500 premiers abonnés en trois semaines",
            tags: ["Kit d'identité de page"]
          },
          {
            niche: "Café de quartier",
            title: "Café lune",
            state: "Page active, visuels éparpillés",
            summary: "Un rythme en damier entre produits et lieux, plus des couvertures de reels pour que chaque vidéo s'accorde au feed.",
            result: "Deux soirées dégustation complètes",
            tags: ["Réveil de feed", "Relance de contenu"]
          },
          {
            niche: "Professeure de yoga",
            title: "Studio sable",
            state: "Compte discret, publications irrégulières",
            summary: "Un calendrier de relance sur quatre semaines avec douze publications designées et des amorces de légendes qu'elle peut continuer seule.",
            result: "Liste d'attente des cours rouverte",
            tags: ["Relance de contenu", "Bibliothèque de modèles"]
          },
          {
            niche: "Fleuriste",
            title: "Fleur atelier",
            state: "Page morte, abonnés perdus",
            summary: "Identité entièrement rafraîchie : palette, icônes de stories et cadres saisonniers qui suivent les fleurs, pas les tendances.",
            result: "+64 % de croissance d'abonnés en deux mois",
            tags: ["Kit d'identité de page", "Réveil de feed"]
          },
          {
            niche: "Mobilier vintage",
            title: "Objet unique",
            state: "Petite boutique, photos sans système",
            summary: "Une grille façon galerie où chaque pièce respire, plus des mises en page carrousel pour raconter les restaurations.",
            result: "Six pièces vendues en messages privés",
            tags: ["Bibliothèque de modèles"]
          }
        ]
      },
      results: {
        eyebrow: "Résultats",
        heading: "Comptes discrets, résultats visibles.",
        intro: "Quelques chiffres de réveils récents. Comptes discrets, résultats visibles.",
        items: [
          { value: "+180 %", label: "de portée moyenne après un réveil de feed" },
          { value: "3 semaines", label: "du premier appel à un nouveau look en ligne" },
          { value: "40+", label: "comptes discrets ramenés à la vie" },
          { value: "98 %", label: "des clientes gardent les modèles après la livraison" }
        ]
      },
      about: {
        eyebrow: "À propos",
        title: "Le studio derrière l'éclat.",
        paragraphs: [
          "Lueur est un studio de design d'une seule personne, au service de petites marques, créateurs et commerces dont les pages ne leur ressemblaient plus.",
          "Chaque projet commence par une question simple : que doit ressentir un visiteur dans les trois premières secondes ? À partir de là, le feed devient cohérent, calme et reconnaissable sur tous les écrans.",
          "Sans course aux tendances, sans encombrement. Seulement des visuels propres et premium qui donnent à un compte discret une allure établie et facile à rassurer."
        ],
        valuesTitle: "La sensation du travail",
        values: ["Propre et aéré", "Grille cohérente", "Mobile d'abord", "Livraison rapide"],
        panelLabel: "Dans chaque projet",
        panelItems: [
          "Une direction visuelle calme et premium",
          "Des fichiers pensés d'abord pour l'écran du téléphone",
          "Un regard que vous pouvez publier pendant des mois"
        ]
      },
      contact: {
        eyebrow: "Contact",
        heading: "Redonnons vie à votre page.",
        intro: "Parlez-moi du compte que vous voulez réveiller. Je réponds sous deux jours ouvrés.",
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "E-mail",
        messageLabel: "À propos du compte",
        messagePlaceholder: "Qu'est-ce qui ne va plus sur la page aujourd'hui ?",
        submit: "Envoyer la demande",
        errorName: "Merci d'ajouter votre nom.",
        errorEmail: "Merci de vérifier le format de l'e-mail.",
        errorMessage: "Dites-m'en un peu plus sur le compte.",
        success: "Merci. Votre demande est notée, je réponds sous deux jours ouvrés.",
        infoEmail: "E-mail",
        infoStudio: "Studio",
        infoBased: "Base",
        infoStatus: "Statut",
        email: "bonjour@lueur.studio",
        handle: "@lueur.studio",
        location: "À distance, dans le monde entier",
        availability: "Agenda ouvert pour le mois prochain",
        direct: "Écrire directement"
      },
      footer: {
        copyright: "© YEAR Lueur studio. Tous droits réservés.",
        backToTop: "Retour en haut"
      },
      legal: {
        eyebrow: "Mentions légales",
        back: "Retour au studio",
        privacyTitle: "Politique de confidentialité.",
        termsTitle: "Conditions d'utilisation.",
        privacyDescription: "Politique de confidentialité de Lueur studio. Quelles données le site manipule et comment elles sont utilisées.",
        termsDescription: "Conditions d'utilisation de Lueur studio. Comment les projets se déroulent et ce que reçoivent les clientes.",
        privacy: {
          updated: "Dernière mise à jour : septembre 2026",
          intro: "Cette page explique ce que deviennent les informations que vous partagez en visitant ce site ou en envoyant un message via le formulaire de contact.",
          sections: [
            {
              heading: "Aucune donnée personnelle conservée",
              paragraphs: [
                "Ce site ne conserve aucune donnée personnelle vous concernant. Il n'existe pas de système de compte, pas de base d'inscription ni de dossier client tenu par ces pages.",
                "Le formulaire de collecte uniquement ce que vous choisissez de saisir : votre nom, votre adresse e-mail, la plateforme concernée et une courte description de votre projet.",
                "Tant qu'aucune solution de stockage n'est reliée à ce site, le formulaire valide votre message localement dans votre navigateur et ne l'envoie nulle part. Rien n'est transmis tant que vous ne contactez pas non plus par e-mail."
              ]
            },
            {
              heading: "Utilisation des informations",
              paragraphs: [
                "Les messages reçus par e-mail servent à un seul objectif : répondre à votre demande de projet et préparer un devis.",
                "L'adresse e-mail que vous partagez ne sera jamais utilisée pour envoyer des publicités, des offres promotionnelles ou des messages non sollicités. Elle n'est ajoutée à aucune liste marketing et n'est jamais vendue ni partagée avec des tiers.",
                "Les informations sur votre compte restent confidentielles. Aucun identifiant ni mot de passe n'est demandé, et chaque cliente est consultée avant toute publication d'un travail."
              ]
            },
            {
              heading: "Cookies et suivi",
              paragraphs: [
                "Ce site n'utilise pas de traceurs publicitaires, de pixels de réseaux sociaux ni d'outils d'analyse tiers. Aucun bandeau de cookies n'est nécessaire puisqu'aucun cookie non essentiel n'est déposé.",
                "Seule une préférence technique est enregistrée dans votre navigateur : la langue choisie avec le sélecteur en haut à droite de chaque page. Elle reste sur votre appareil et n'est jamais transmise."
              ]
            },
            {
              heading: "Hébergement et sécurité",
              paragraphs: [
                "Les pages statiques sont servies par un hébergeur dont les serveurs peuvent journaliser des données techniques standards telles que les adresses IP et les types de navigateur. Ces journaux appartiennent à l'hébergeur et ne servent pas à identifier les visiteurs."
              ]
            },
            {
              heading: "Vos droits",
              paragraphs: [
                "Vous pouvez demander à tout moment de consulter, corriger ou supprimer toute information vous concernant. Les demandes sont traitées sous trente jours.",
                "Pour exercer l'un de ces droits, écrivez à l'adresse de contact affichée en pied de page de ce site."
              ]
            },
            {
              heading: "Propriété des travaux livrés",
              paragraphs: [
                "Tout ce qui est livré au titre des services du studio devient votre propriété au paiement final : modèles, couvertures, feeds et tout autre produit remis.",
                "Une fois livrés, ces produits sont votre unique responsabilité et votre pleine propriété. Le studio n'est pas comptable de la façon dont ils sont publiés, modifiés ou utilisés ensuite."
              ]
            }
          ]
        },
        terms: {
          updated: "Dernière mise à jour : septembre 2026",
          intro: "Ces conditions décrivent comment se déroulent les projets avec Lueur studio, ce qui est attendu de chaque côté et ce que vous recevez à la fin.",
          sections: [
            {
              heading: "Périmètre du travail",
              paragraphs: [
                "Chaque projet suit l'offre choisie lors du premier échange : réveil de feed, kit d'identité de page, bibliothèque de modèles ou relance de contenu.",
                "Toute demande hors périmètre est chiffrée séparément avant le début du travail."
              ]
            },
            {
              heading: "Déroulé et délais",
              paragraphs: [
                "Les projets durent généralement entre une et quatre semaines après l'appel de découverte, selon l'offre et la rapidité des retours.",
                "Les retards causés par des retours ou des fichiers manquants prolongent le délai d'autant."
              ]
            },
            {
              heading: "Paiement",
              paragraphs: [
                "Un acompte de cinquante pour cent confirme la réservation. Le solde est dû avant la livraison des fichiers finaux.",
                "Les prix chiffrés par écrit restent valables trente jours."
              ]
            },
            {
              heading: "Révisions",
              paragraphs: [
                "Deux tours de révisions sont inclus dans chaque offre. Les tours supplémentaires sont facturés au tarif horaire convenu dans le devis."
              ]
            },
            {
              heading: "Propriété et usage",
              paragraphs: [
                "Tout ce qui vous est remis au titre des services proposés est votre pleine propriété et votre unique responsabilité dès le moment de la livraison.",
                "Les fichiers finaux livrés peuvent être utilisés par la cliente sans limite de durée sur les plateformes couvertes par le projet.",
                "Les fichiers de travail, licences de polices et documents sources restent la propriété du studio sauf accord séparé écrit.",
                "Avec permission écrite, certains résultats peuvent être présentés dans le portfolio du studio."
              ]
            },
            {
              heading: "Annulation",
              paragraphs: [
                "Un projet peut être annulé avant le début du travail de design, auquel cas l'acompte est remboursé.",
                "Une fois le travail de design commencé, l'acompte couvre les heures déjà investies."
              ]
            },
            {
              heading: "Limitation de responsabilité",
              paragraphs: [
                "Le design améliore l'apparence et la lecture d'un compte. La croissance dépend de nombreux facteurs extérieurs au design lui-même, aucun résultat chiffré précis n'est donc garanti.",
                "La responsabilité totale du studio pour un projet ne dépasse jamais le montant payé pour ce projet."
              ]
            }
          ]
        }
      }
    }
  };
})();
