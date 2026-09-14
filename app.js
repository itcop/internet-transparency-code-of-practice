const i18n = {
  en: {
    meta: {
      title: "ITCoP 2028 | Campaign for a Digital Transparency Charter",
    },
    brand: {
      homeLabel: "Return to the top of the ITCoP page",
      lockupAlt: "ITCOP, Internet Transparency Code of Practice, fir canopy and signpost lockup",
    },
    nav: {
      language: "Language selection",
    },
    lang: {
      english: "English",
      french: "Français",
    },
    hero: {
      eyebrow: "The ITCoP 2028 Campaign",
      headline: "A call for a Digital Transparency Charter",
      subhead:
        "The Internet Transparency Code of Practice, ITCoP, reframes the Charter of the Forest for the digital age. It protects notice, transparency, and consent across the digital commons, especially where ungoverned AI turns public life into extraction. The goal: a Digital Transparency Charter by 2028.",
      ctaPetition: "Sign up for the transparency signal badge",
      ctaBadge: "See the directory",
    },
    gateway: {
      label: "The Digital Forest",
      heading: "The sign before you enter",
      bodyOne:
        "In a forest, a sign at the edge of the trail tells you what you are walking into before you take a step. Whether the land is private or open, who holds it, what the rules are. It is notice, posted before entry.",
      bodyTwo:
        "Online, that sign is missing. You enter digital spaces, the digital forest, with no way to see where your data is going or who is identifying you until you are already inside. Transparency is that sign restored: a notice before you enter, so you can see who holds the space and how you are identified before you cross the threshold. This is the digital consent gateway, and the 0PN Badge is the sign that marks it.",
    },
    story: {
      label: "The Charter Story",
      heading: "From the Charter of the Forest to the digital commons",
      bodyOne:
        "In 1217, the Charter of the Forest restored shared rights against enclosure. It recognized that common resources require rules, limits, and public accountability.",
      bodyTwo:
        "ITCoP carries that logic into the digital commons through a CoE (TbD, Transparency by Default) approach grounded in Trustparency: evidence-based, inspectable transparency strong enough to support notice receipts, independent review, and enforcement, not assertion or compliance theater.",
    },
    petition: {
      label: "Public Support",
      heading: "Sign the ITCoP Petition",
      intro:
        "Support for the Code is inclusive. You can sign with the details you choose to provide, or you can add your support without being required to identify yourself.",
      form: {
        nameLabel: "Name, optional",
        emailLabel: "Email, optional",
        submit: "Sign the petition",
        supportWithoutIdentifying: "Add your support without identifying",
        confirmation:
          "Thank you, your support is recorded once the notice receipt backend goes live.",
      },
      notice: {
        title: "Trustparency Notice",
        collected: "What is collected: only what you choose to enter.",
        purpose: "Purpose: to demonstrate public support for the Code.",
        storage: "Where it goes: a Canadian server, under PIPEDA jurisdiction.",
        receipt: "Notice receipt: a receipt is issued when the backend goes live.",
      },
    },
    whitepaper: {
      label: "Report",
      heading: "Clean AI Receipts",
      byline: "Operational governance for secure knowledge models. TCIEG external review draft, version 0.1.",
      bodyOne: "Dirty AI asks for trust. Clean AI carries evidence. Clean AI is not a claim that a model is safe or lawful; it is an operating condition under which the authority, purpose, provenance, and accountable participants behind the use of data and knowledge can be inspected and tested.",
      bodyTwo: "The report walks through a working demonstration: governance represented as a machine readable receipt for a defined AI lifecycle activity, issued through the receipt gate on this site. Reading it presents a first notice and returns an anonymous knowledge reuse receipt; the report downloads as a PDF.",
      notice: "Licensed under CC BY 4.0. Machine reuse is additionally subject to the 0PN Machine Reuse Terms 1.0, version reference 0pn-mrt-1.0-2026-08-31.",
      cta: "Read the report",
    },
    badge: {
      label: "Blue Register",
      heading: "Sign up for the ITCoP Transparency Signal Badge",
      provenance: "A project of the Transparency and Consent Interoperability Group (TCIEG).",
      bodyOne:
        "The ITCoP Transparency Signal Badge is a self-asserted transparency signal to enhance trust, issued from itcop.org. It marks an organisation's willingness to make notice, transparency, and consent inspectable in practice. It is not a certification or a verified seal.",
      bodyTwo:
        "Signing up supports the campaign for Digital-ID Consent Online. You will be among the first to receive the ITCoP Transparency Signal Badge once notice receipts are live.",
      imageAlt: "ITCoP Transparency Signal Badge, an open navy ring with a green public-notice chevron and a white node",
      gateway: {
        title: "Transparency Gateway for Consent Online",
        continue: "Continue",
      },
      notice: {
        title: "0PN Notice",
        intro: "Before you sign up, here is what this collection involves.",
        controller: "Controller: Global Privacy Rights (did:web:globalprivacyrights.org), the party accountable for this collection.",
        collected: "What is collected: only the email address you enter.",
        purpose: "Purpose: badge signup and support for the ITCoP 2028 campaign for Digital-ID Consent Online.",
        newsletter: "If you turn on campaign updates: your email is also used to send you TCIEG campaign updates, with TCIEG UK as recipient, until you unsubscribe.",
        basis: "Lawful basis: your consent, given by submitting this form.",
        storage: "Where it is stored: a Canadian server, under PIPEDA jurisdiction.",
        rights: "Your rights: you can withdraw consent or ask to remove your entry at any time, as easily as you gave it, by writing to info@itcop.org.",
        receipt: "Notice receipt: a receipt is issued to you on signup.",
      },
      form: {
        firstNameLabel: "First name",
        emailLabel: "Email",
        newsletterLabel: "Follow the campaign, send me TCIEG campaign updates.",
        registerLabel: "Register your transparency badge to broadcast the transparency signal.",
        registerNote:
          "Be the first to test the Internet Transparency Signal by registering to broadcast digital transparency. We will send you an email to verify your entry and your organisation's active legal status, and we will add you to the signaling test waitlist, to activate the badge's online transparency signal.",
        submit: "Continue",
        empty: "Enter an email address to register interest.",
        confirmation:
          "Thank you, your request is recorded once the notice receipt backend goes live.",
      },
      receipt: {
        heading: "Your notice receipt",
        idLabel: "Receipt ID",
        noticeLabel: "Notice reference",
        issuedLabel: "Issued at",
        download: "Download badge",
        copyEmbed: "Copy embed",
        embedCopied: "Embed snippet copied to your clipboard.",
        embedFailed: "Could not copy automatically. Select and copy the snippet manually.",
        disclaimer:
          "This is a client-side demo receipt for the campaign phase. The anchored, hash-chained notice-event receipt (nel:<hash>, concat-delim-v3) is issued by the backend when it goes live.",
      },
      register: {
        pending: "Your directory entry and Level 1 organisation details are queued.",
        note:
          "Your self-asserted listing and the Level 1 organisation details are added to the public 0PN Directory when the 0PN backend goes live. Nothing is published, validated, or activated yet, this confirms your entry is queued for publication.",
      },
      org: {
        levelTag: "Level 1, for organisations",
        title: "Register your organisation",
        notice: {
          title: "0PN Notice, Level 1",
          intro: "Level 1 is the next rung above Level 0. It records a full inspectable controller entry for an organisation.",
          controller: "Controller: Global Privacy Rights (did:web:globalprivacyrights.org), accountable for this organisation record.",
          collected: "What is collected: last name, country, organisation website, privacy contact, and an online access point URL if you have one.",
          purpose: "Purpose: to activate the transparency signal and add it to your badge.",
          validation: "Validation: the organisation's valid legal status is checked against a public registry when the backend is live.",
          storage: "Where it is stored: a Canadian server, under PIPEDA jurisdiction, until the UK registry node is live.",
          rights: "Your rights: you can withdraw or ask to remove this organisation record at any time, as easily as you gave it, by writing to info@itcop.org.",
        },
        form: {
          lastNameLabel: "Last name",
          countryLabel: "Country",
          websiteLabel: "Organisation website",
          privacyContactLabel: "Privacy contact",
          accessPointLabel: "Online access point URL (optional)",
          submit: "Validate your information and check the organisation's valid legal status",
          empty: "Enter your last name, country, and organisation website to continue.",
        },
        pending: {
          title: "Validation pending.",
          note:
            "Legal-status validation and signal activation run server-side when the 0PN backend goes live. Your details are collected, nothing is validated or activated yet, and no result is claimed until the check runs.",
        },
      },
    },
    directory: {
      label: "0PN Directory",
      heading: "Organisations with the transparency signal badge",
      intro:
        "The directory is open and inspectable, with no login required. It is a broadcasting directory: absence from it is never a judgement, only a sign that nothing has been published there yet.",
      empty: "No badges have been published yet. Sign up above to be among the first to be listed.",
      loading: "Loading the directory.",
    },
    footer: {
      accountability: "Internet Transparency Code of Practice, an initiative of the Transparency and Consent Interoperability Group (TCIEG).",
      contactLabel: "Contact: ",
      email: "info@itcop.org",
    },
  },
  fr: {
    meta: {
      title: "ITCoP 2028 | Campagne pour une charte de la transparence numérique",
    },
    brand: {
      homeLabel: "Retour au haut de la page ITCoP",
      lockupAlt: "ITCOP, Code de pratique pour la transparence sur Internet, emblème sapin et poteau indicateur",
    },
    nav: {
      language: "Choix de la langue",
    },
    lang: {
      english: "English",
      french: "Français",
    },
    hero: {
      eyebrow: "La campagne ITCoP 2028",
      headline: "Un appel pour une charte de la transparence numérique",
      subhead:
        "Le Code de pratique pour la transparence sur Internet, l'ITCoP, transpose la Charte de la forêt à l'ère numérique. Il protège l'avis, la transparence et le consentement dans les communs numériques, surtout lorsque des systèmes d'IA sans garde-fous transforment la vie publique en terrain d'extraction. L'objectif : une charte de la transparence numérique d'ici 2028.",
      ctaPetition: "Inscrivez-vous pour le badge de signal de transparence",
      ctaBadge: "Voir le répertoire",
    },
    gateway: {
      label: "La forêt numérique",
      heading: "Le panneau avant d'entrer",
      bodyOne:
        "En forêt, un panneau au bord du sentier vous indique où vous mettez les pieds avant de faire un pas. Le terrain est-il privé ou ouvert, à qui appartient-il, quelles sont les règles. C'est un avis, affiché avant l'entrée.",
      bodyTwo:
        "En ligne, ce panneau manque. Vous entrez dans des espaces numériques, la forêt numérique, sans pouvoir voir où vont vos données ni qui vous identifie avant d'être déjà à l'intérieur. La transparence, c'est ce panneau rétabli : un avis avant d'entrer, pour voir qui tient l'espace et comment vous êtes identifié avant de franchir le seuil. C'est la passerelle de consentement numérique, et le badge 0PN est le panneau qui la signale.",
    },
    story: {
      label: "Le récit de la Charte",
      heading: "De la Charte de la forêt aux communs numériques",
      bodyOne:
        "En 1217, la Charte de la forêt a rétabli des droits d'usage face aux appropriations des biens communs. Elle affirmait que les ressources partagées exigent des règles, des limites et une responsabilité publique.",
      bodyTwo:
        "L'ITCoP prolonge cette logique dans les communs numériques par une approche CoE (TbD, Transparency by Default) fondée sur la Trustparency, c'est-à-dire une transparence probante et vérifiable, assez solide pour étayer des reçus d'avis, un contrôle indépendant et une mise en application réelle, plutôt que de simples déclarations ou un théâtre de conformité.",
    },
    petition: {
      label: "Soutien public",
      heading: "Signer la pétition ITCoP",
      intro:
        "Le soutien au Code se veut inclusif. Vous pouvez signer avec les renseignements que vous choisissez de fournir, ou ajouter votre soutien sans être tenu de vous identifier.",
      form: {
        nameLabel: "Nom, facultatif",
        emailLabel: "Courriel, facultatif",
        submit: "Signer la pétition",
        supportWithoutIdentifying: "Ajouter votre soutien sans vous identifier",
        confirmation:
          "Merci, votre soutien sera enregistré dès que le service de reçu d'avis sera en ligne.",
      },
      notice: {
        title: "Avis de Trustparency",
        collected: "Ce qui est recueilli : uniquement ce que vous choisissez d'inscrire.",
        purpose: "Finalité : démontrer l'appui du public au Code.",
        storage: "Destination : un serveur canadien, sous juridiction de la LPRPDE.",
        receipt: "Reçu d'avis : un reçu sera émis lorsque le service sera en ligne.",
      },
    },
    whitepaper: {
      label: "Rapport",
      heading: "Clean AI Receipts",
      byline: "Gouvernance opérationnelle pour des modèles de connaissance sécurisés. Projet de révision externe TCIEG, version 0.1.",
      bodyOne: "L'IA sale demande la confiance. L'IA propre apporte des preuves. L'IA propre n'affirme pas qu'un modèle est sûr ou licite ; c'est une condition d'exploitation sous laquelle l'autorité, la finalité, la provenance et les participants responsables derrière l'usage des données et des connaissances peuvent être inspectés et testés.",
      bodyTwo: "Le rapport décrit une démonstration concrète : la gouvernance représentée comme un reçu lisible par machine pour une activité définie du cycle de vie de l'IA, délivré au moyen de l'accès à reçu de ce site. Sa lecture présente d'abord un avis et renvoie un reçu anonyme de réutilisation de connaissances ; le rapport se télécharge en PDF.",
      notice: "Sous licence CC BY 4.0. La réutilisation machine est en outre soumise aux 0PN Machine Reuse Terms 1.0, référence de version 0pn-mrt-1.0-2026-08-31.",
      cta: "Lire le rapport",
    },
    badge: {
      label: "Registre bleu",
      heading: "Inscrivez-vous pour le badge de signal de transparence ITCoP",
      provenance: "Un projet du Transparency and Consent Interoperability Group (TCIEG).",
      bodyOne:
        "Le badge de signal de transparence ITCoP est un signal de transparence auto-déclaré pour renforcer la confiance, émis par itcop.org. Il indique qu'une organisation accepte de rendre l'avis, la transparence et le consentement vérifiables dans la pratique. Ce n'est ni une certification ni un sceau vérifié.",
      bodyTwo:
        "Votre inscription soutient la campagne pour le consentement à l'identité numérique en ligne. Vous serez parmi les premiers à recevoir le badge de signal de transparence ITCoP dès que les reçus d'avis seront en service.",
      imageAlt: "Badge de signal de transparence ITCoP, un anneau ouvert bleu marine avec un chevron d'avis public vert et un nœud blanc",
      gateway: {
        title: "Passerelle de transparence pour le consentement en ligne",
        continue: "Continuer",
      },
      notice: {
        title: "Avis 0PN",
        intro: "Avant votre inscription, voici en quoi consiste cette collecte.",
        controller: "Responsable du traitement : Global Privacy Rights (did:web:globalprivacyrights.org), la partie responsable de cette collecte.",
        collected: "Ce qui est recueilli : uniquement l'adresse courriel que vous saisissez.",
        purpose: "Finalité : l'inscription au badge et le soutien à la campagne ITCoP 2028 pour le consentement à l'identité numérique en ligne.",
        newsletter: "Si vous activez les nouvelles de la campagne : votre courriel sert aussi à vous envoyer les nouvelles de la campagne TCIEG, avec TCIEG UK comme destinataire, jusqu'à votre désabonnement.",
        basis: "Base légale : votre consentement, donné en soumettant ce formulaire.",
        storage: "Où c'est stocké : un serveur canadien, sous juridiction de la LPRPDE.",
        rights: "Vos droits : vous pouvez retirer votre consentement ou demander le retrait de votre inscription à tout moment, aussi facilement que vous l'avez donné, en écrivant à info@itcop.org.",
        receipt: "Reçu d'avis : un reçu vous est émis à l'inscription.",
      },
      form: {
        firstNameLabel: "Prénom",
        emailLabel: "Courriel",
        newsletterLabel: "Suivez la campagne, envoyez-moi les nouvelles de la campagne TCIEG.",
        registerLabel: "Inscrivez votre badge de transparence pour diffuser le signal de transparence.",
        registerNote:
          "Soyez le premier à tester le signal de transparence Internet en vous inscrivant pour diffuser la transparence numérique. Nous vous enverrons un courriel pour vérifier votre inscription et le statut juridique actif de votre organisation, et nous vous ajouterons à la liste d'attente du test de signalisation, afin d'activer le signal de transparence en ligne du badge.",
        submit: "Continuer",
        empty: "Saisissez une adresse courriel pour enregistrer votre intérêt.",
        confirmation:
          "Merci, votre demande sera enregistrée dès que le service de reçu d'avis sera en ligne.",
      },
      receipt: {
        heading: "Votre reçu d'avis",
        idLabel: "Identifiant du reçu",
        noticeLabel: "Référence de l'avis",
        issuedLabel: "Émis le",
        download: "Télécharger le badge",
        copyEmbed: "Copier le code d'intégration",
        embedCopied: "Le code d'intégration a été copié dans votre presse-papiers.",
        embedFailed: "Copie automatique impossible. Sélectionnez et copiez le code manuellement.",
        disclaimer:
          "Ceci est un reçu de démonstration côté client pour la phase de campagne. Le reçu d'événement d'avis ancré et chaîné par empreinte (nel:<hash>, concat-delim-v3) est émis par le service lorsqu'il entre en ligne.",
      },
      register: {
        pending: "Votre inscription au répertoire et les détails de l'organisation de niveau 1 sont en file.",
        note:
          "Votre fiche auto-déclarée et les détails de l'organisation de niveau 1 sont ajoutés au répertoire public 0PN lorsque le service 0PN entre en ligne. Rien n'est encore publié, validé ni activé, ceci confirme que votre fiche est mise en file pour publication.",
      },
      org: {
        levelTag: "Niveau 1, pour les organisations",
        title: "Inscrire votre organisation",
        notice: {
          title: "Avis 0PN, niveau 1",
          intro: "Le niveau 1 est l'échelon suivant après le niveau 0. Il enregistre une fiche de responsable complète et vérifiable pour une organisation.",
          controller: "Responsable du traitement : Global Privacy Rights (did:web:globalprivacyrights.org), responsable de cette fiche d'organisation.",
          collected: "Ce qui est recueilli : nom de famille, pays, site Web de l'organisation, contact vie privée et une URL de point d'accès en ligne le cas échéant.",
          purpose: "Finalité : activer le signal de transparence et l'ajouter à votre badge.",
          validation: "Validation : le statut juridique valide de l'organisation est vérifié auprès d'un registre public lorsque le service est en ligne.",
          storage: "Où c'est stocké : un serveur canadien, sous juridiction de la LPRPDE, jusqu'à la mise en service du nœud de registre du Royaume-Uni.",
          rights: "Vos droits : vous pouvez retirer cette fiche d'organisation ou en demander le retrait à tout moment, aussi facilement que vous l'avez donnée, en écrivant à info@itcop.org.",
        },
        form: {
          lastNameLabel: "Nom de famille",
          countryLabel: "Pays",
          websiteLabel: "Site Web de l'organisation",
          privacyContactLabel: "Contact vie privée",
          accessPointLabel: "URL du point d'accès en ligne (optionnel)",
          submit: "Validez vos renseignements et vérifiez le statut juridique valide de l'organisation",
          empty: "Saisissez votre nom de famille, votre pays et le site Web de l'organisation pour continuer.",
        },
        pending: {
          title: "Validation en attente.",
          note:
            "La validation du statut juridique et l'activation du signal s'exécutent côté serveur lorsque le service 0PN entre en ligne. Vos renseignements sont recueillis, rien n'est encore validé ni activé, et aucun résultat n'est affirmé avant l'exécution de la vérification.",
        },
      },
    },
    directory: {
      label: "Répertoire 0PN",
      heading: "Organisations détenant le badge de signal de transparence",
      intro:
        "Le répertoire est ouvert et vérifiable, sans identifiant requis. C'est un répertoire de diffusion : l'absence n'y est jamais un jugement, seulement le signe que rien n'y a encore été publié.",
      empty: "Aucun badge n'a encore été publié. Inscrivez-vous ci-dessus pour figurer parmi les premiers.",
      loading: "Chargement du répertoire.",
    },
    footer: {
      accountability: "Internet Transparency Code of Practice, une initiative du Transparency and Consent Interoperability Group (TCIEG).",
      contactLabel: "Contact : ",
      email: "info@itcop.org",
    },
  },
};

// TODO: wire to WHC Montreal box (PIPEDA). No live storage until backend + notice receipt are live.
const BADGE_ENDPOINT = "/api/badge";

const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") === "fr" ? "fr" : "en";
};

const getValue = (language, key) =>
  key.split(".").reduce((value, part) => (value ? value[part] : ""), i18n[language]);

const applyTextTranslations = (language) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getValue(language, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });
};

const applyAttributeTranslations = (language) => {
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getValue(language, element.dataset.i18nAlt);
    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(language, element.dataset.i18nAriaLabel);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });
};

const syncLanguageControls = (language) => {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateLanguageUrl = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState({}, "", url);
};

const setLanguage = (language) => {
  document.documentElement.lang = language;
  document.title = getValue(language, "meta.title");
  applyTextTranslations(language);
  applyAttributeTranslations(language);
  syncLanguageControls(language);
  updateLanguageUrl(language);
};

const showStatus = (element, message) => {
  element.textContent = message;
  element.hidden = false;
};

// Petition handlers removed 2026-08-30 (Conrad): the petition section was cut
// from index.html when the flow became the 3-step badge gateway. The petition
// i18n strings are retained as inert data pending a decision on whether the
// petition surface returns (open item — Mark's call, see DEVBOOK resolutions).

// --- Demo receipt helpers -------------------------------------------------
// file:// is not a secure context, so crypto.subtle and crypto.randomUUID may
// be unavailable. We prefer crypto when present and fall back to a small pure-JS
// implementation so the demo receipt ID + notice version hash still generate.

// FNV-1a 32-bit hash, returned as an 8-char lowercase hex string. Pure JS,
// works everywhere; used only for the client-side demo notice reference.
const fnv1aHex = (input) => {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    // hash *= 16777619, kept in 32-bit unsigned range without BigInt
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
};

const randomHex = (length) => {
  const cryptoObj = typeof crypto !== "undefined" ? crypto : null;
  if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
    const bytes = new Uint8Array(length);
    cryptoObj.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  }
  return out;
};

// Receipt ID format: itcop-1fn-<YYYYMMDD>-<12 hex chars>
// e.g. itcop-1fn-20260830-9f3a7c1b2e08
const generateReceiptId = (issuedAt) => {
  const cryptoObj = typeof crypto !== "undefined" ? crypto : null;
  const datePart = issuedAt.slice(0, 10).replace(/-/g, "");
  let entropy;
  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    entropy = cryptoObj.randomUUID().replace(/-/g, "").slice(0, 12);
  } else {
    entropy = randomHex(6);
  }
  return `itcop-1fn-${datePart}-${entropy}`;
};

// Notice reference: 0pn-notice-<lang>-v<8 hex>, hashing the rendered notice
// text so the reference is stable per language + notice content.
const NOTICE_KEYS = ["title", "intro", "controller", "collected", "purpose", "newsletter", "basis", "storage", "rights", "receipt"];

const buildNoticeText = (language) =>
  NOTICE_KEYS.map((key) => getValue(language, `badge.notice.${key}`)).join("\n");

const generateNoticeReference = (language) =>
  `0pn-notice-${language}-v${fnv1aHex(buildNoticeText(language))}`;

let lastReceipt = null;

// Step 3 download control downloads the BADGE artifact (SVG), not the receipt
// JSON. We serve the self-backed badge (white rounded backing) so it renders
// on any host background, light or dark, and the signatory walks away with the
// mark itself.
const BADGE_SVG_URL = "assets/0pn-badge-embed.svg";

const downloadBadge = async () => {
  let anchor;
  try {
    const response = await fetch(BADGE_SVG_URL, { cache: "no-store" });
    const svgText = await response.text();
    const blob = new Blob([svgText], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "itcop-transparency-signal-badge.svg";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  } catch (error) {
    // file:// or fetch blocked: fall back to opening the badge asset directly.
    if (anchor && anchor.parentNode) {
      document.body.removeChild(anchor);
    }
    window.open(BADGE_SVG_URL, "_blank", "noopener");
  }
};

// Embed snippet: a self-contained <a>+<img> that links the badge to the
// itcop.org directory. Copied to the clipboard so an organisation can paste
// it into their own site.
const buildEmbedSnippet = () =>
  [
    '<a href="https://itcop.org/#directory" rel="noopener">',
    '  <img src="https://itcop.org/assets/0pn-badge-embed.svg"',
    '       alt="ITCoP Transparency Signal Badge" width="120" height="120" />',
    "</a>",
  ].join("\n");

const copyEmbedSnippet = async (language) => {
  const status = document.querySelector("#badge-embed-status");
  const snippet = buildEmbedSnippet();
  let copied = false;
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(snippet);
      copied = true;
    }
  } catch (error) {
    copied = false;
  }
  if (!copied) {
    // Fallback for file:// / non-secure contexts where the Clipboard API is
    // unavailable: use a temporary textarea + execCommand.
    try {
      const textarea = document.createElement("textarea");
      textarea.value = snippet;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      copied = document.execCommand("copy");
      document.body.removeChild(textarea);
    } catch (error) {
      copied = false;
    }
  }
  if (status) {
    const key = copied ? "badge.receipt.embedCopied" : "badge.receipt.embedFailed";
    showStatus(status, getValue(language, key));
  }
};

const renderReceipt = (language, receipt) => {
  const idValue = document.querySelector("#receipt-id-value");
  const noticeValue = document.querySelector("#receipt-notice-value");
  const issuedValue = document.querySelector("#receipt-issued-value");
  const receiptPanel = document.querySelector("#badge-receipt");
  if (idValue) idValue.textContent = receipt.receipt_id;
  if (noticeValue) noticeValue.textContent = receipt.notice_reference;
  if (issuedValue) issuedValue.textContent = receipt.issued_at;
  if (receiptPanel) receiptPanel.hidden = false;
  const badgeForm = document.querySelector("#badge-form");
  if (badgeForm) badgeForm.hidden = true;
  const heroIcon = document.querySelector("#badge-hero-icon");
  if (heroIcon) heroIcon.src = "assets/activated-icon.png";
};

const handleBadgeSubmit = (event, language) => {
  event.preventDefault();
  const status = document.querySelector("#badge-status");
  const emailInput = document.querySelector("#badge-email");
  const firstNameInput = document.querySelector("#badge-first-name");
  const newsletterInput = document.querySelector("#badge-newsletter");
  const registerInput = document.querySelector("#badge-register-toggle");

  if (!status || !emailInput) {
    return;
  }

  if (!emailInput.value.trim()) {
    showStatus(status, getValue(language, "badge.form.empty"));
    return;
  }

  const registerOptIn = registerInput ? registerInput.checked : false;

  // If the register toggle is on, capture the Level 1 organisation details
  // through this same form submit. No client-side validation/activation is
  // ever claimed, the fields are simply collected for the queued entry.
  const orgFieldValue = (id) => {
    const input = document.querySelector(id);
    return input ? input.value.trim() : "";
  };
  const organisation = registerOptIn
    ? {
        last_name: orgFieldValue("#org-last-name"),
        country: orgFieldValue("#org-country"),
        website: orgFieldValue("#org-website"),
        privacy_contact: orgFieldValue("#org-privacy-contact"),
        access_point: orgFieldValue("#org-access-point"),
      }
    : null;

  const issuedAt = new Date().toISOString();
  lastReceipt = {
    type: "itcop-transparency-signal-badge-signup",
    receipt_id: generateReceiptId(issuedAt),
    notice_reference: generateNoticeReference(language),
    issued_at: issuedAt,
    subject_first_name: firstNameInput ? firstNameInput.value.trim() : "",
    subject_email: emailInput.value.trim(),
    newsletter_opt_in: newsletterInput ? newsletterInput.checked : false,
    register_opt_in: registerOptIn,
    organisation,
    language,
    demo: true,
    note:
      "Client-side demo receipt for the campaign phase. The anchored, hash-chained notice-event receipt (nel:<hash>, concat-delim-v3) is issued by the backend when it goes live.",
  };

  showStatus(status, getValue(language, "badge.form.confirmation"));
  renderReceipt(language, lastReceipt);

  // Show the queued directory + Level 1 confirmation inside the receipt only
  // when the register toggle was on. Nothing is published/validated/activated.
  const registerConfirm = document.querySelector("#receipt-register-confirm");
  if (registerConfirm) {
    registerConfirm.hidden = !registerOptIn;
  }
};

// The UK node holds the registrants. The Canada node is the Level 0 sandbox and
// its register currently contains only a test fixture, which was being shown here
// as though it were an entry.
const REGISTRY_INDEX_URL = "https://uk1.0pn.org/registry/index.json";
let directoryControllers = null;

const setDirectoryNote = (container, text) => {
  const note = document.createElement("p");
  note.textContent = text;
  container.replaceChildren(note);
};

const renderDirectory = (language) => {
  const container = document.querySelector("#directory-list");
  if (!container) {
    return;
  }
  if (Array.isArray(directoryControllers) && directoryControllers.length > 0) {
    const list = document.createElement("ul");
    list.className = "directory-entries";
    directoryControllers.forEach((entry) => {
      const item = document.createElement("li");
      item.textContent =
        entry.controller_name || entry.name || entry.domain || entry.controller_id || "";
      list.appendChild(item);
    });
    container.replaceChildren(list);
  } else {
    setDirectoryNote(container, getValue(language, "directory.empty"));
  }
};

const loadDirectory = async (language) => {
  const container = document.querySelector("#directory-list");
  if (!container) {
    return;
  }
  setDirectoryNote(container, getValue(language, "directory.loading"));
  try {
    const response = await fetch(REGISTRY_INDEX_URL, { cache: "no-store" });
    const data = await response.json();
    directoryControllers = Array.isArray(data.controllers) ? data.controllers : [];
  } catch (error) {
    directoryControllers = [];
  }
  renderDirectory(language);
};

document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = getInitialLanguage();

  const badgeForm = document.querySelector("#badge-form");
  const languageButtons = document.querySelectorAll("[data-lang-switch]");

  setLanguage(currentLanguage);
  loadDirectory(currentLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = button.dataset.langSwitch === "fr" ? "fr" : "en";
      setLanguage(currentLanguage);
      renderDirectory(currentLanguage);
      // If a receipt is already on screen, re-render it in the new language so
      // its dynamic values match (the notice reference is language-bound, and
      // the status line is set in JS, not via data-i18n).
      if (lastReceipt) {
        lastReceipt.notice_reference = generateNoticeReference(currentLanguage);
        lastReceipt.language = currentLanguage;
        renderReceipt(currentLanguage, lastReceipt);
        const badgeStatus = document.querySelector("#badge-status");
        if (badgeStatus && !badgeStatus.hidden) {
          showStatus(badgeStatus, getValue(currentLanguage, "badge.form.confirmation"));
        }
      }
    });
  });

  if (badgeForm) {
    badgeForm.dataset.endpoint = BADGE_ENDPOINT;
    badgeForm.addEventListener("submit", (event) => {
      handleBadgeSubmit(event, currentLanguage);
    });
  }

  const badgeContinue = document.querySelector("#badge-continue");
  if (badgeContinue && badgeForm) {
    badgeContinue.addEventListener("click", () => {
      badgeContinue.hidden = true;
      const badgeNotice = document.querySelector("#badge-notice");
      if (badgeNotice) badgeNotice.hidden = true;
      const heroIcon = document.querySelector("#badge-hero-icon");
      if (heroIcon) heroIcon.src = "assets/grey-check.png";
      badgeForm.hidden = false;
      const emailInput = badgeForm.querySelector("#badge-email");
      if (emailInput) {
        emailInput.focus();
      }
    });
  }

  // Register toggle: reveal/hide the inline Level 1 organisation fields inside
  // the step-2 form. Fields are only captured on submit when this is on.
  const registerToggle = document.querySelector("#badge-register-toggle");
  const orgFields = document.querySelector("#badge-org-fields");
  if (registerToggle && orgFields) {
    registerToggle.addEventListener("change", () => {
      orgFields.hidden = !registerToggle.checked;
      registerToggle.setAttribute("aria-expanded", String(registerToggle.checked));
    });
  }

  const receiptDownloadButton = document.querySelector("#receipt-download");
  if (receiptDownloadButton) {
    receiptDownloadButton.addEventListener("click", downloadBadge);
  }

  const copyEmbedButton = document.querySelector("#receipt-copy-embed");
  if (copyEmbedButton) {
    copyEmbedButton.addEventListener("click", () => {
      copyEmbedSnippet(currentLanguage);
    });
  }
});
