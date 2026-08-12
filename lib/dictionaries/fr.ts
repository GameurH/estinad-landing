import type { Dictionary } from "./types";
import { en } from "./en";
import { deepFill } from "./deep-fill";

const frRaw = {
  "meta": {
    "title": "ESTINAD — Produits logiciels pour les opérations réelles",
    "titleTemplate": "%s · ESTINAD",
    "description": "ESTINAD est une société produit qui lance avec ESTINAD Retail, avec d'autres produits en développement sur la plateforme ESTINAD. Conçu en Algérie.",
    "ogTitle": "ESTINAD — Produits logiciels pour les opérations réelles",
    "ogDescription": "Lancement avec ESTINAD Retail ; Restaurant, Inventory, Invoices, Workforce, Clinic et Central font partie du portefeuille ESTINAD en développement."
  },
  "lang": {
    "switchLabel": "Langue",
    "en": "English",
    "fr": "Français",
    "ar": "العربية"
  },
  "theme": {
    "toggleLabel": "Changer de thème",
    "light": "Clair",
    "dark": "Sombre"
  },
  "common": {
    "requestDemo": "Demander une démo",
    "requestDemoArrow": "Demander une démo →",
    "seePlatform": "Voir la plateforme",
    "explorePlatform": "Explorer la plateforme →",
    "viewPricing": "Voir les tarifs",
    "talkToTeam": "Parler à l'équipe",
    "talkSales": "Contacter le commercial",
    "exploreProducts": "Explorer les produits",
    "exploreProductsArrow": "Explorer les produits →",
    "exploreServices": "Explorer les services →",
    "exploreServicesPlain": "Explorer les services",
    "discussProject": "Discuter de votre projet →",
    "discussProjectPlain": "Discuter de votre projet",
    "seeAllCaseStudies": "Voir toutes les études de cas →",
    "seeAllCaseStudiesPlain": "Voir toutes les études de cas",
    "explore": "Explorer →",
    "readMore": "Lire la suite →",
    "readCaseStudy": "Lire l'étude de cas →",
    "backHome": "Retour à l'accueil →",
    "backToPlatform": "Retour à la plateforme",
    "allSolutions": "Toutes les solutions",
    "allProducts": "Tous les produits",
    "allServices": "Tous les services",
    "pricing": "Tarifs",
    "viewSolution": "Voir la solution →",
    "seeCaseStudies": "Voir les études de cas →",
    "viewService": "Voir le service →",
    "becomePartner": "Devenir partenaire →",
    "applyPartner": "Postuler comme partenaire →",
    "seeOpenRoles": "Voir les postes ouverts ↓",
    "applyOrIntroduce": "Postuler ou se présenter →",
    "readApi": "Lire la référence API →",
    "recommended": "Recommandé",
    "notSureTitle": "Vous hésitez sur le niveau adapté ?",
    "notSureBody": "Indiquez-nous votre nombre de points de vente et vos outils actuels. Nous dimensionnerons le plan adapté à votre échelle.",
    "consentLabel": "J'accepte la politique de confidentialité.",
    "consentNote": "Nous utilisons vos informations uniquement pour répondre à cette demande.",
    "errorRetry": "Un problème est survenu. Veuillez réessayer.",
    "illustrativeLabel": "Exemple illustratif",
    "plannedLabel": "Prévu",
    "inDevelopmentLabel": "En développement",
    "explorePlatformArrow": "Explorer la plateforme →",
    "sellOrImplement": "Vendre ou implémenter",
    "requestQuote": "Demander un devis",
    "requestQuoteArrow": "Demander un devis →",
    "availableLabel": "Disponible",
    "comingSoonLabel": "Bientôt disponible",
    "registerInterest": "Manifestez votre intérêt →"
  },
  "nav": {
    "home": "Accueil",
    "products": "Produits",
    "solutions": "Solutions",
    "services": "Services",
    "platform": "Plateforme",
    "partners": "Partenaires",
    "caseStudies": "Études de cas",
    "resources": "Ressources",
    "company": "Société",
    "contact": "Contact",
    "requestDemo": "Demander une démo",
    "megaOs": "Le système d'exploitation partagé",
    "megaArchitecture": "Une plateforme, pas des applications juxtaposées",
    "megaSecurity": "La discipline par défaut",
    "megaDeployment": "Local-first, enrichi par le cloud",
    "megaProductsIntro": "ESTINAD Retail est disponible aujourd'hui. D'autres produits sont en développement dans le portefeuille ESTINAD.",
    "softwareProducts": "Produits logiciels",
    "certifiedHardware": "Matériel certifié",
    "compareSolutions": "Comparer les solutions",
    "megaHardwareIntro": "Sélectionné et testé — prêt pour ESTINAD.",
    "megaHardware": {
      "eyebrow": "Matériel certifié",
      "title": "Du matériel qui mérite sa place.",
      "body": "Une sélection ciblée pour les déploiements ESTINAD — pas un catalogue interminable dans le menu.",
      "categoriesLabel": "Catégories clés",
      "featuredLabel": "À la une",
      "viewCatalog": "Voir le catalogue complet",
      "catalogHref": "/hardware/catalog",
      "requestQuote": "Demander un devis",
      "quoteHref": "/hardware/quote",
      "checkCompatibility": "Vérifier la compatibilité",
      "compatibilityHref": "/hardware/compatibility",
      "emptyHint": "Ouvrez le catalogue matériel complet pour parcourir tous les produits disponibles.",
      "kitCategories": {
        "retail-counter-kit": "Matériel d’encaissement",
        "restaurant-counter-kit": "Matériel de service",
        "inventory-kit": "Matériel d’inventaire",
        "multi-site-rollout": "Matériel de déploiement"
      }
    },
    "megaGroupRetail": "Opérations commerce",
    "megaGroupRestaurant": "Opérations restauration",
    "megaGroupAdmin": "Administration",
    "megaGroupWorkforce": "RH & effectifs",
    "megaGroupInvoicing": "Facturation",
    "megaSolutionsIntro": "Des solutions adaptées à votre type et structure d'entreprise.",
    "megaServicesIntro": "Livraison logicielle sur mesure — bâtie de bout en bout.",
    "megaPlatformIntro": "Architecture hybride, local-first.",
    "megaPartnersIntro": "Vendez, déployez, accompagnez ou intégrez ESTINAD.",
    "megaCaseIntro": "Travaux clients réels, par secteur et résultat.",
    "hardware": "Catalogue",
    "requestQuote": "Demander un devis",
    "currentLabel": "Actuel",
    "megaResourcesIntro": "Guides, documentation et réponses."
  },
  "footer": {
    "ctaEyebrow": "Produits ESTINAD",
    "ctaTitle": "Commencez avec ESTINAD Retail. Explorez le portefeuille.",
    "ctaPrimary": "Demander un devis",
    "ctaSecondary": "Explorer les produits",
    "ctaTertiary": "Parler à l'équipe",
    "tagline": "ESTINAD est une société produit qui lance avec ESTINAD Retail, avec d'autres produits en développement sur la plateforme ESTINAD.",
    "builtLine": "Conçus en Algérie, selon des standards internationaux.",
    "builtBadge": "Conçu en Algérie",
    "helpTitle": "Besoin d'aide ?",
    "helpBody": "Nous sommes là pour vous accompagner.",
    "helpCta": "Nous contacter",
    "social": {
      "linkedin": "LinkedIn",
      "x": "X",
      "email": "E-mail"
    },
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/company/estinad",
      "x": "https://x.com/estinad",
      "email": "mailto:hello@estinad.com"
    },
    "rights": "Tous droits réservés.",
    "cols": {
      "products": "Produits",
      "solutions": "Solutions",
      "services": "Services",
      "platform": "Plateforme",
      "partners": "Partenaires",
      "caseStudies": "Études de cas",
      "resources": "Ressources",
      "company": "Société",
      "hardware": "Matériel"
    },
    "solutionLinks": [
      {
        "label": "Pour le Commerce",
        "href": "/solutions/retail"
      },
      {
        "label": "Pour la Restauration",
        "href": "/solutions/restaurants"
      },
      {
        "label": "Pour les Cliniques",
        "href": "/solutions/clinics"
      },
      {
        "label": "Pour les PME",
        "href": "/solutions/smes"
      },
      {
        "label": "Pour le multi-sites",
        "href": "/solutions/multi-branch"
      }
    ],
    "serviceLinks": [
      {
        "label": "Logiciel sur mesure",
        "href": "/services/custom-software"
      },
      {
        "label": "Création de sites web",
        "href": "/services/websites"
      },
      {
        "label": "Écosystèmes de bout en bout",
        "href": "/services/ecosystems"
      },
      {
        "label": "Intégrations",
        "href": "/services/integrations"
      },
      {
        "label": "Conseil & architecture",
        "href": "/services/consulting"
      }
    ],
    "caseStudyLinks": [
      {
        "label": "Toutes les études de cas",
        "href": "/case-studies"
      },
      {
        "label": "Travaux commerce",
        "href": "/case-studies?industry=retail"
      },
      {
        "label": "Travaux restauration",
        "href": "/case-studies?industry=restaurants"
      },
      {
        "label": "Logiciel sur mesure",
        "href": "/case-studies?type=custom"
      }
    ],
    "platformLinks": [
      {
        "label": "ESTINAD OS",
        "href": "/platform"
      },
      {
        "label": "Architecture",
        "href": "/platform/architecture"
      },
      {
        "label": "Sécurité",
        "href": "/platform/security"
      },
      {
        "label": "Déploiement",
        "href": "/platform/deployment"
      }
    ],
    "partnerLinks": [
      {
        "label": "Programme partenaires",
        "href": "/partners"
      },
      {
        "label": "Revendeurs",
        "href": "/partners/resellers"
      },
      {
        "label": "Intégrateurs",
        "href": "/partners/implementers"
      },
      {
        "label": "Partenaires technologiques",
        "href": "/partners/technology"
      },
      {
        "label": "Postuler",
        "href": "/partners/apply"
      }
    ],
    "hardwareLinks": [
      {
        "label": "Catalogue",
        "href": "/hardware/catalog"
      },
      {
        "label": "Matériel certifié",
        "href": "/hardware"
      },
      {
        "label": "Demander un devis",
        "href": "/hardware/quote"
      },
      {
        "label": "Vérifier la compatibilité",
        "href": "/hardware/compatibility"
      }
    ]
  },
  "notFound": {
    "code": "404",
    "title": "Cette page n'est pas sur la plateforme.",
    "body": "Le chemin que vous avez suivi n'existe pas. Revenons à quelque chose qui existe.",
    "cta1": "Retour à l'accueil →",
    "cta2": "Explorer les produits"
  },
  "homeV2": {
    "hero": {
      "eyebrow": "ESTINAD / LOGICIELS MÉTIERS FIABLES",
      "title": "Des logiciels conçus avec précision. Une fiabilité sur laquelle compter.",
      "titleLine1": "Des logiciels conçus avec",
      "titleLine2": "précision.",
      "titleTail": "Une fiabilité sur laquelle compter.",
      "sub": "Des logiciels métiers prêts à l'emploi, conçus pour répondre aux exigences de votre activité — avec des solutions sur mesure lorsque vos besoins vont au-delà du prêt à l'emploi.",
      "cta1": "Demander une démo",
      "cta2": "Découvrir les produits",
      "supporting": "Des produits conçus avec précision · Une ingénierie pensée pour durer · Depuis l'Algérie"
    },
    "whoWeAre": {
      "title": "Les logiciels font partie de votre activité.",
      "body": "C'est pourquoi nous les concevons selon ce principe : une performance fiable, une expérience claire, et une ingénierie pensée pour durer."
    },
    "products": {
      "title": "Produits ESTINAD",
      "body": "Des produits logiciels pour les entreprises, chacun avec une étape clairement définie dans son parcours de développement.",
      "cta": "Explorer tous les produits →"
    },
    "why": {
      "eyebrow": "ESTINAD / Qualité dès la conception",
      "title": "La qualité n’est pas une fonctionnalité. C’est le fondement.",
      "body": "Chaque produit ESTINAD est conçu pour les opérations réelles — fiable aujourd’hui, en amélioration continue demain, et pensé pour fonctionner comme un système connecté.",
      "visualLabel": "Une base connectée",
      "pillars": [
        {
          "title": "Conçu pour le travail réel",
          "body": "Des produits pensés autour des réalités du quotidien des entreprises."
        },
        {
          "title": "Fiable en production",
          "body": "Des performances stables sur lesquelles les entreprises peuvent compter chaque jour."
        },
        {
          "title": "En évolution continue",
          "body": "Chaque version améliore le produit sans perturber l’exploitation."
        },
        {
          "title": "Une base technologique commune",
          "body": "Une technologie partagée pour que chaque produit ESTINAD fonctionne naturellement avec les autres."
        }
      ],
      "trust": [
        "Conçu en interne",
        "Pensé pour le quotidien",
        "Amélioré en continu",
        "Une plateforme connectée"
      ]
    },
    "finalCta": {
      "eyebrow": "ESTINAD / Logiciels métiers",
      "title": "Vous voulez voir ce que nous construisons dans votre contexte ?",
      "body": "Découvrez comment les produits ESTINAD sont conçus pour accompagner vos opérations au quotidien — d’un seul site à plusieurs implantations.",
      "cta1": "Demander une démo",
      "cta2": "Découvrir les produits"
    }
  },
  "platform": {
    "overview": {
      "eyebrow": "Plateforme / ESTINAD OS",
      "title": "Le système d'exploitation derrière chaque produit ESTINAD.",
      "intro": "ESTINAD OS est une fondation hybride local-first. Chaque produit repose sur le même modèle : un serveur local auto-hébergé dédié comme source de vérité autoritaire, des appareils connectés au LAN pour un travail local rapide, et une couche cloud qui synchronise les données sélectionnées pour l'accès à distance et la gestion centrale.",
      "cta1": "Demander une démo →",
      "cta2": "Voir les produits",
      "pillarsEyebrow": "Ce que la plateforme apporte",
      "pillarsTitle": "Trois choses dont chaque produit hérite.",
      "pillarsIntro": "Chaque produit vertical est une couche concentrée au-dessus d'ESTINAD OS. Aucun ne réinvente la fondation — tous s'appuient dessus.",
      "pillars": [
        {
          "t": "Opérations local-first",
          "d": "Un serveur local auto-hébergé dédié et une base de données locale constituent la source de vérité principale à chaque site — entièrement capable de fonctionner hors ligne."
        },
        {
          "t": "Appareils connectés au LAN",
          "d": "Ordinateurs, portables, tablettes et smartphones fonctionnent sur le réseau local pour des performances à faible latence, proches du natif."
        },
        {
          "t": "Synchronisation enrichie par le cloud",
          "d": "Les données sélectionnées se synchronisent en ligne pour l'accès à distance, la visibilité multi-sites, l'analytique, les sauvegardes et la future IA — sans rendre le cloud une dépendance."
        }
      ],
      "stackEyebrow": "La stack",
      "stackTitle": "Vertical sur partagé. De la précision là où ça compte.",
      "stackVertical": "Produits verticaux",
      "stackShared": "Services partagés",
      "stackOs": "ESTINAD OS",
      "stackServices": [
        "Identité",
        "Catalogue",
        "Documents",
        "Reporting"
      ],
      "stackOsLine": "Un registre · Un moteur de synchro · Un modèle d'accès",
      "deepEyebrow": "Aller plus loin",
      "deepTitle": "Comment la plateforme est construite.",
      "deepCta": "Demander une démo →"
    },
    "sub": {
      "architecture": {
        "eyebrow": "Plateforme / Architecture",
        "title": "Hybride edge + cloud. Autorité locale.",
        "intro": "Chaque produit ESTINAD suit la même architecture de déploiement hybride : des serveurs locaux auto-hébergés pour la fiabilité et la propriété, avec une couche de synchronisation cloud pour l'accès à distance et la gestion centrale — pas une base opérationnelle SaaS partagée.",
        "principles": [
          {
            "t": "Local-first & offline-first",
            "d": "Chaque site possède un serveur local auto-hébergé dédié et une base de données locale. Les opérations métier essentielles continuent sans internet."
          },
          {
            "t": "Enrichi par le cloud, pas dépendant du cloud",
            "d": "Le cloud synchronise les modules sélectionnés pour l'accès à distance, l'usage mobile hors LAN, l'analytique, les tableaux de bord, les notifications, les sauvegardes et les futurs services IA."
          },
          {
            "t": "Isolation stricte des tenants",
            "d": "Chaque tenant dispose d'un serveur local dédié, d'une base de données locale dédiée et d'un espace cloud dédié — isolation complète des autres clients."
          }
        ],
        "details": [
          {
            "heading": "Serveur local auto-hébergé",
            "body": "Le serveur local est la source de vérité autoritaire. Les appareils communiquent via le LAN pour une exploitation rapide, fluide et à faible latence."
          },
          {
            "heading": "Couche de synchronisation cloud",
            "body": "La synchronisation cloud s'exécute automatiquement lorsque la connexion est disponible. Elle ne remplace jamais le serveur local pour les opérations quotidiennes."
          },
          {
            "heading": "Support multi-sites",
            "body": "Chaque site physique possède son propre serveur local et sa base de données indépendants. Le cloud consolide les données synchronisées pour que le siège puisse superviser et piloter l'organisation."
          }
        ]
      },
      "security": {
        "eyebrow": "Plateforme / Sécurité",
        "title": "Propriété par conception. Isolation par défaut.",
        "intro": "ESTINAD n'est pas un SaaS opérationnel multi-tenant partagé. Chaque client possède une infrastructure locale dédiée et un espace cloud dédié, avec configuration, licences et synchronisation maintenues indépendamment.",
        "principles": [
          {
            "t": "Infrastructure dédiée par tenant",
            "d": "Un serveur local auto-hébergé, une base de données locale et un espace cloud par tenant — pas de base opérationnelle partagée entre clients."
          },
          {
            "t": "Périmètres d'accès",
            "d": "L'accès par rôles limite ce que chaque personne voit et fait, par site et fonction, lorsque configuré."
          },
          {
            "t": "Configuration et licences indépendantes",
            "d": "La configuration, les licences et le périmètre de synchronisation de chaque tenant sont indépendants de tout autre tenant."
          }
        ],
        "details": [
          {
            "heading": "Isolation des données",
            "body": "Les données d'un tenant ne partagent jamais une base opérationnelle avec d'autres clients. Les espaces locaux et cloud restent dédiés."
          },
          {
            "heading": "Protection des données",
            "body": "Les contrôles de protection, les dispositifs de sauvegarde et les procédures de reprise sont définis par le produit déployé et le périmètre commercial."
          },
          {
            "heading": "Revue de déploiement",
            "body": "L'infrastructure locale, le réseau et les exigences de traitement des données sont examinés lors de l'implémentation."
          }
        ]
      },
      "deployment": {
        "eyebrow": "Plateforme / Déploiement",
        "title": "Auto-hébergé par défaut. Cloud quand il apporte de la valeur.",
        "intro": "La connectivité en Algérie et dans la région MENA est une contrainte de conception. ESTINAD déploie un serveur local auto-hébergé comme système principal à chaque site, le cloud servant de couche de synchronisation, d'accès à distance et de gestion.",
        "principles": [
          {
            "t": "Auto-hébergé par défaut",
            "d": "Chaque site client exécute un serveur local dédié comme déploiement principal — possédé et exploité pour cette entreprise."
          },
          {
            "t": "Communication LAN rapide",
            "d": "Ordinateurs, portables, tablettes et smartphones se connectent localement pour des flux à faible latence, proches du natif, sans exiger internet."
          },
          {
            "t": "Synchronisation automatique",
            "d": "Lorsque internet est disponible, les données sélectionnées se synchronisent vers l'espace cloud du tenant pour un accès à distance sécurisé et une gestion centrale."
          }
        ],
        "details": [
          {
            "heading": "Continuité locale",
            "body": "Commandes, ventes, rendez-vous et autres flux essentiels continuent via le serveur local pendant les interruptions de connectivité."
          },
          {
            "heading": "Gestion centrale",
            "body": "ESTINAD Cloud est une couche de gestion synchronisée pour les utilisateurs autorisés — analytique, tableaux de bord, notifications, sauvegardes et accès à distance — pas un remplacement du serveur local."
          },
          {
            "heading": "Déploiement progressif",
            "body": "Les nouveaux sites se déploient avec leur propre serveur local et configuration de synchronisation — expansion progressive, pas risque de big-bang."
          }
        ]
      }
    },
    "moreEyebrow": "Plus sur la plateforme",
    "moreTitle": "Continuer l'exploration.",
    "subLabels": {
      "principlesEyebrow": "Principes",
      "principlesTitle": "Ce que cette partie de la plateforme défend.",
      "detailEyebrow": "En détail",
      "detailTitle": "Comment ça marche en pratique."
    }
  },
  "products": {
    "index": {
      "eyebrow": "Produits ESTINAD",
      "title": "Produits ESTINAD",
      "description": "Des produits logiciels pour les entreprises, chacun avec une étape clairement définie dans son parcours de développement.",
      "statuses": {
        "available": "Disponible maintenant",
        "beta": "En phase de test",
        "development": "En développement",
        "coming_soon": "Bientôt disponible",
        "planned": "Prévu"
      },
      "cardDescriptions": {
        "retail": "Gestion retail tout-en-un pour magasins modernes. Caisse, stocks, commandes, clients et analytique — parfaitement synchronisés.",
        "restaurant": "Opérations restaurant pour la salle, la cuisine et les commandes — sur la plateforme ESTINAD.",
        "inventory": "Contrôle des stocks : réceptions, transferts et inventaires précis.",
        "central": "Synchronisation, accès distant et gestion centrale multi-sites.",
        "invoices": "Facturation claire pour les équipes qui ont besoin de documents nets et de suivi des encaissements.",
        "workforce": "Planification, présence et opérations d'équipe pour les entreprises multi-sites.",
        "clinic": "Planification clinique, dossiers et facturation sur la plateforme ESTINAD."
      },
      "exploreAll": "Explorer tous les produits →",
      "groupAvailable": "Disponible maintenant",
      "groupPortfolio": "Portefeuille produits",
      "viewProduct": "Voir le produit",
      "tagVertical": "Vertical",
      "tagDeploy": "Déploiement hybride",
      "tagPricing": "Tarifs dédiés",
      "tagAvailable": "Disponible",
      "tagComingSoon": "Bientôt disponible",
      "groupComingSoon": "Bientôt disponible",
      "comingSoonIntro": "Ces produits sont en développement sur la plateforme ESTINAD. Ils ne sont pas encore disponibles à l'achat ou au déploiement."
    },
    "items": {
      "retail": {
        "glyph": "ER",
        "vertical": "Commerce",
        "name": "ESTINAD Retail",
        "short": "Commerce",
        "oneLiner": "Le système d'exploitation du commerce de prêt-à-porter et multi-catégories — stocks, caisse et performance magasin dans un seul registre.",
        "positioning": "ESTINAD Commerce unifie la caisse, les stocks et l'analytique magasin dans un registre unique et fiable. Conçu pour les détaillants de prêt-à-porter et les magasins multi-catégories qui ont besoin d'un contrôle précis des stocks, d'une caisse rapide et d'une visibilité claire sur tous les points de vente.",
        "byline": "ESTINAD Retail par ESTINAD",
        "problem": {
          "eyebrow": "Le problème métier",
          "title": "Des opérations réparties entre plusieurs outils.",
          "body": "Les équipes peuvent avoir du mal à coordonner leurs flux lorsque les outils locaux et centraux sont déconnectés."
        },
        "localFirst": {
          "eyebrow": "Déploiement local-first",
          "title": "Gardez les opérations sur le réseau local.",
          "body": "Les flux locaux passent par le serveur du site et les appareils connectés au LAN.",
          "points": [
            "Flux de travail local",
            "Appareils connectés au réseau local",
            "Synchronisation cloud lorsque disponible"
          ]
        },
        "worksWith": {
          "eyebrow": "Fonctionne avec",
          "title": "Composants ESTINAD connectés.",
          "items": [
            {
              "name": "ESTINAD POS",
              "href": "/products/components/pos",
              "role": "Counter operations"
            },
            {
              "name": "ESTINAD Central",
              "href": "/products/central",
              "role": "Central visibility"
            },
            {
              "name": "ESTINAD Importer",
              "href": "/products/components/importer",
              "role": "Catalog migration"
            }
          ]
        },
        "multiLocation": {
          "eyebrow": "Multi-sites",
          "title": "Opérer localement, suivre de manière centralisée.",
          "body": "Chaque site garde son environnement local tandis que les données sélectionnées se synchronisent pour les équipes autorisées."
        },
        "implementation": {
          "eyebrow": "Implémentation",
          "title": "Un déploiement progressif.",
          "steps": [
            {
              "t": "Découverte",
              "d": "Cartographier les sites et les flux."
            },
            {
              "t": "Installation",
              "d": "Préparer le serveur local et les appareils."
            },
            {
              "t": "Configuration",
              "d": "Définir les rôles et règles opérationnelles."
            },
            {
              "t": "Formation",
              "d": "Former les équipes concernées."
            },
            {
              "t": "Support",
              "d": "Définir les modalités de support continu."
            }
          ]
        },
        "partnerCta": {
          "title": "Vous vendez ou implémentez des logiciels Retail ?",
          "body": "Travaillez avec ESTINAD pour présenter et déployer des opérations local-first.",
          "label": "Devenir partenaire ESTINAD",
          "href": "/partners"
        },
        "proof": {
          "eyebrow": "Références",
          "title": "Conçu pour les flux opérationnels.",
          "body": "Des exemples illustratifs présentent les résultats opérationnels que ce produit ESTINAD est conçu pour accompagner.",
          "label": "Exemple illustratif"
        },
        "icpTitle": "Pour qui",
        "icpHeader": "Pour les opérateurs qui sentent les limites de leurs outils.",
        "icp": [
          "Détaillants de prêt-à-porter et de mode",
          "Magasins multi-catégories de 1 à 20 points de vente",
          "Dirigeants remplaçant caisse + Excel + WhatsApp éparpillés"
        ],
        "useCasesTitle": "Cas d'usage principaux",
        "useCasesHeader": "Le travail qu'il remplace en premier.",
        "useCases": [
          "Stocks par variantes taille/couleur sur les saisons",
          "Caisse en magasin rapide avec reçus et retours",
          "Transferts de stock et inventaires multi-sites",
          "Réconciliation de caisse et rapports de poste par employé",
          "Commandes fournisseurs et réception d'achats"
        ],
        "visualEyebrow": "Concept visuel",
        "visualTitle": "Une console. Un registre. Une vue calme de l'opération.",
        "visualCaption": "Concept d'interface illustratif · ESTINAD Commerce",
        "visualSidebar": [
          "Tableau de bord",
          "Commerce",
          "Registre",
          "Rapports",
          "Points de vente",
          "Réglages"
        ],
        "visualKpis": [
          "Aujourd'hui",
          "Cette semaine",
          "MTD"
        ],
        "visualChart": "Performance",
        "workflowsEyebrow": "Flux clés",
        "workflowsTitle": "Trois flux qui font la journée.",
        "workflowsIntro": "La boucle cœur du métier, en séquence claire — pas un labyrinthe d'écrans.",
        "workflows": [
          {
            "title": "Vendre",
            "steps": [
              "Scanner ou chercher un produit à variante exacte",
              "Appliquer remise, client ou fidélité en un seul passage",
              "Clôturer la vente en espèces, carte ou paiement mixte",
              "Imprimer le reçu et poster dans le registre en direct"
            ]
          },
          {
            "title": "Réapprovisionner",
            "steps": [
              "Les alertes de stock bas remontent au tableau de bord",
              "Créer une commande d'achat au fournisseur",
              "Réceptionner les marchandises contre la commande avec écarts",
              "Le stock se met à jour sur tous les points de vente instantanément"
            ]
          },
          {
            "title": "Réconcilier",
            "steps": [
              "Clôturer le poste et compter la caisse",
              "Le système compare caisse attendue vs comptée",
              "Écart signalé pour revue",
              "Le dirigeant voit un récap quotidien propre par point de vente"
            ]
          }
        ],
        "featuresEyebrow": "Groupes de fonctionnalités",
        "featuresTitle": "Organisés par ce que fait l'entreprise, pas par listes de fonctions.",
        "featureClusters": [
          {
            "title": "Caisse",
            "description": "Un comptoir qui reste rapide sous pression.",
            "points": [
              "Caisse tolérante au hors ligne",
              "Grille produit par variantes (taille / couleur)",
              "Mises de côté, retours et échanges",
              "Paiements mixtes et divisés"
            ]
          },
          {
            "title": "Registre de stocks",
            "description": "Une source de vérité pour chaque unité.",
            "points": [
              "Mises à jour de stock synchronisées lorsque la connexion est disponible",
              "Transférer, recevoir et ajuster avec piste d'audit",
              "Seuils de stock bas et réapprovisionnement",
              "Traçabilité série/lot quand nécessaire"
            ]
          },
          {
            "title": "Performance magasin",
            "description": "Voir l'entreprise d'en haut.",
            "points": [
              "Ventes par site, catégorie et employé",
              "Analyse des marges et remises",
              "Meilleures et pires ventes du jour",
              "Rapports programmés par e-mail ou WhatsApp"
            ]
          }
        ],
        "deployEyebrow": "Déploiement hybride",
        "deployTitle": "Auto-hébergé en local. Enrichi par le cloud quand la connexion est là.",
        "deployment": [
          "Serveur local dédié et auto-hébergé à chaque point de vente",
          "Caisse et appareils opérationnels connectés au LAN",
          "Données sélectionnées synchronisées vers ESTINAD Cloud lorsque disponible"
        ],
        "integEyebrow": "Intégrations",
        "integTitle": "Se connecte au matériel et canaux que vous utilisez déjà.",
        "integrations": [
          "Imprimantes de reçus thermiques et A4",
          "Lecteurs de codes-barres et tiroirs-caisses",
          "Terminaux de paiement (acquéreurs locaux)",
          "Livraison de rapports via WhatsApp Business"
        ],
        "faqEyebrow": "FAQ",
        "faqTitle": "Les questions que se posent d'abord les dirigeants.",
        "faq": [
          {
            "q": "La caisse continue-t-elle si internet tombe ?",
            "a": "Oui. Le serveur local auto-hébergé est le système principal — la caisse reste active pendant les coupures. Les données sélectionnées se synchronisent vers le cloud au retour de la connexion."
          },
          {
            "q": "Puis-je gérer finement les variantes taille et couleur ?",
            "a": "Chaque produit porte une matrice de variantes complète. Stock, prix et reporting fonctionnent au niveau de la variante, pour des chiffres exacts."
          },
          {
            "q": "Combien de temps pour ouvrir un nouveau point de vente ?",
            "a": "Un site standard est opérationnel en une journée : configurer le catalogue, apparier le matériel, ouvrir le poste."
          },
          {
            "q": "Quelle infrastructure locale est requise ?",
            "a": "Chaque magasin est évalué pour un serveur local dédié, le réseau et les appareils opérationnels."
          },
          {
            "q": "Quels appareils fonctionnent avec Commerce ?",
            "a": "Caisses, scanners, imprimantes et appareils connectés compatibles sont examinés lors de l'implémentation."
          },
          {
            "q": "Comment les sites partagent-ils les informations ?",
            "a": "Les données opérationnelles sélectionnées se synchronisent vers le cloud lorsque la connexion est disponible."
          },
          {
            "q": "Comment se déroule l'implémentation ?",
            "a": "Découverte, installation, configuration, formation et support sont planifiés avec votre équipe."
          },
          {
            "q": "Comment sont gérés la tarification et la propriété ?",
            "a": "Les conditions commerciales dépendent des sites, de l'infrastructure, du périmètre d'implémentation et du support continu."
          }
        ],
        "ctaTitle": "Mettez ESTINAD Commerce sur vos opérations.",
        "landing": {
          "badge": "Disponible maintenant",
          "benefits": [
            "Opérations local-first",
            "Registre magasin unifié"
          ],
          "trustLabel": "Conçu pour le retail algérien — mode et magasins multi-catégories.",
          "trustMarks": [],
          "features": {
            "eyebrow": "ESTINAD RETAIL",
            "title": "De l’achat à la vente, dans un seul système.",
            "intro": "ESTINAD Retail suit le flux quotidien de votre activité — des achats et réceptions à la gestion des stocks, aux ventes et à la lecture de la performance.",
            "stagesNavLabel": "Étapes du parcours retail",
            "stages": [
              {
                "id": "purchase",
                "navLabel": "Achats",
                "title": "Acheter avec contrôle",
                "body": "Créez des bons de commande par variante avant l’arrivée — la réception part d’un enregistrement clair."
              },
              {
                "id": "receive",
                "navLabel": "Réception",
                "title": "Réceptionner avec précision",
                "body": "Confirmez ce qui est arrivé par taille et style, et alignez le stock sur la livraison."
              },
              {
                "id": "stock",
                "navLabel": "Stocks",
                "title": "Connaître votre stock",
                "body": "Voyez les quantités disponibles par variante et détectez le stock bas avant le rayon."
              },
              {
                "id": "sell",
                "navLabel": "Vente",
                "title": "Vendre plus vite",
                "body": "Encaissez avec recherche et code-barres — le stock se met à jour depuis le même registre."
              },
              {
                "id": "understand",
                "navLabel": "Comprendre",
                "title": "Comprendre votre activité",
                "body": "Consultez ventes du jour, mix de paiements et meilleures variantes dans une vue calme."
              }
            ],
            "supporting": {
              "title": "Plus de contrôle, intégré au système.",
              "items": [
                {
                  "id": "permissions",
                  "icon": "staff",
                  "title": "Équipe & permissions",
                  "body": "Contrôlez les accès et les actions sensibles."
                },
                {
                  "id": "offline",
                  "icon": "offline",
                  "title": "Fonctionnement hors ligne",
                  "body": "Continuez à travailler sans Internet."
                },
                {
                  "id": "backup",
                  "icon": "backup",
                  "title": "Sauvegarde & restauration",
                  "body": "Protégez les données opérationnelles et récupérez si besoin."
                },
                {
                  "id": "catalog",
                  "icon": "barcode",
                  "title": "Produits & codes-barres",
                  "body": "Maintenez le catalogue derrière chaque vente."
                }
              ]
            },
            "ui": {
              "appName": "ESTINAD Retail",
              "search": "Rechercher variantes, SKU…",
              "navPurchase": "Commandes",
              "navReceive": "Réception",
              "navStock": "Inventaire",
              "navSell": "Point de vente",
              "navUnderstand": "Rapports",
              "product": "Chemise Oxford · M",
              "secondaryProduct": "Chino slim · 32",
              "supplier": "Atlas Apparel",
              "poNumber": "PO-1042",
              "purchaseOrders": "Bons de commande",
              "supplierLabel": "Fournisseur",
              "products": "Variante",
              "qty": "Qté",
              "status": "Statut",
              "orderCreated": "Bon de commande créé",
              "draft": "Brouillon",
              "ordered": "Commandé",
              "receiving": "Réception",
              "orderedQty": "Commandé",
              "receivedQty": "Reçu",
              "inventoryUpdated": "Inventaire mis à jour",
              "inventory": "Inventaire",
              "onHand": "Disponible",
              "stockStatus": "Statut",
              "lowStock": "Stock bas",
              "ok": "OK",
              "pos": "Point de vente",
              "cart": "Panier",
              "barcodeScan": "Scanner le code-barres",
              "pay": "Encaisser",
              "receipt": "Reçu",
              "paid": "Payé",
              "total": "Total",
              "todaySales": "Ventes du jour",
              "payments": "Paiements",
              "topProducts": "Meilleures variantes",
              "shift": "Shift du matin",
              "cash": "Espèces",
              "card": "Carte",
              "performance": "Journée commerciale",
              "sizeLabel": "Taille",
              "skuLabel": "SKU"
            }
          },
          "operationalConfidence": {
            "eyebrow": "Confiance opérationnelle",
            "title": "Un système, dans tout votre magasin.",
            "intro": "Faites tourner ESTINAD Retail sur un serveur local et connectez terminaux POS, PC et appareils opérationnels approuvés dans votre magasin — avec des données opérationnelles partagées sur le système local.",
            "imageAlt":
              "ESTINAD Retail sur téléphone, ordinateur portable et tablette au comptoir — opérations magasin partagées sur les appareils connectés.",
            "principles": [
              {
                "id": "one-system",
                "number": "01",
                "title": "Données partagées sur les appareils connectés",
                "body": "Connectez votre POS, vos PC et vos appareils opérationnels approuvés à un seul système ESTINAD Retail local. Votre équipe travaille à partir du même enregistrement opérationnel dans le magasin."
              },
              {
                "id": "access",
                "number": "02",
                "title": "Le bon accès pour chaque rôle",
                "body": "Le personnel se connecte avec un code PIN. Les rôles et permissions contrôlent qui peut annuler, appliquer une remise ou ajuster le stock."
              },
              {
                "id": "data",
                "number": "03",
                "title": "Gardez vos données opérationnelles fiables",
                "body": "Maintenez un enregistrement opérationnel cohérent sur le système local, avec synchronisation cloud et sauvegardes planifiées. Le périmètre de sauvegarde est confirmé lors de la mise en œuvre."
              }
            ],
          },
          "builtForStore": {
            "eyebrow": "Conçu pour votre magasin",
            "title": "Le logiciel s’adapte à la façon dont votre magasin fonctionne.",
            "intro": "Connectez vos points de vente, postes de travail et appareils opérationnels approuvés via un système Retail local conçu pour le travail quotidien de votre équipe.",
            "imageAlt": "Illustration d’un comptoir ESTINAD Retail dans un magasin calme — pas une installation client réelle.",
            "contextsNavLabel": "Contextes d’exploitation du magasin",
            "contexts": [
              {
                "id": "checkout",
                "label": "Caisse",
                "title": "POS au comptoir",
                "body": "Finalisez les ventes rapidement avec une surface point de vente concentrée."
              },
              {
                "id": "management",
                "label": "Gestion",
                "title": "PC pour les opérations",
                "body": "Consultez stocks, commandes et performance du jour depuis un poste de travail."
              },
              {
                "id": "device",
                "label": "Appareil approuvé",
                "title": "Visibilité opérationnelle",
                "body": "Lorsque configuré, les appareils approuvés peuvent afficher les mêmes données opérationnelles du système local."
              }
            ],
            "ui": {
              "appName": "ESTINAD Retail",
              "cart": "Panier",
              "product": "Chemise Oxford · M",
              "secondaryProduct": "Chino slim · 32",
              "total": "Total",
              "pay": "Encaisser",
              "inventory": "Inventaire",
              "onHand": "Disponible",
              "reports": "Aujourd’hui",
              "sales": "Ventes",
              "stock": "Stock"
            }
          },
          "certifiedHardware": {
            "eyebrow": "Matériel certifié",
            "title": "Le bon matériel, prêt pour le Retail.",
            "intro": "Matériel sélectionné et testé pour la compatibilité avec ESTINAD Retail, avec un accompagnement pour l’installation, le déploiement et l’usage quotidien.",
            "hierarchy": {
              "software": "ESTINAD Retail",
              "hardware": "Matériel certifié",
              "support": "Accompagnement à la mise en œuvre"
            },
            "categories": [
              { "id": "terminal", "label": "Terminal POS" },
              { "id": "scanner", "label": "Scanner code-barres" },
              { "id": "printer", "label": "Imprimante de tickets" },
              { "id": "drawer", "label": "Tiroir-caisse" }
            ],
            "imageAlt": "Ensemble de référence Retail Counter Kit préparé pour ESTINAD Retail — terminal, scanner, imprimante et tiroir-caisse.",
            "scopeNote": "Les spécifications sont des configurations de référence illustratives. L’équipement final est confirmé lors du devis et de la revue de compatibilité. Le matériel est optionnel — l’équipement existant peut être utilisé s’il passe la vérification de compatibilité.",
            "primaryCta": "Explorer le matériel certifié",
            "secondaryCta": "Demander un devis"
          },
          "finalCta": {
            "eyebrow": "ESTINAD Retail",
            "title": "Prêt à parler de votre activité retail ?",
            "body": "Parlons d’ESTINAD Retail, du déploiement et de la configuration adaptée à votre magasin.",
            "primaryCta": "Demander un devis",
            "secondaryCta": "Parler à l’équipe"
          }
        }
      },
      "restaurant": {
        "glyph": "RS",
        "vertical": "Restauration",
        "name": "ESTINAD Restaurant",
        "short": "Restauration",
        "oneLiner": "Bientôt disponible — opérations restaurant pour salle, cuisine et commandes sur la plateforme ESTINAD.",
        "positioning": "ESTINAD Restauration coordonne la salle, la cuisine et la caisse comme un seul flux. Conçu pour les restaurants comptoir et à table qui ont besoin de vitesse au comptoir, de clarté en cuisine et de chiffres propres à la clôture.",
        "byline": "ESTINAD Restaurant par ESTINAD",
        "problem": {
          "eyebrow": "Le problème métier",
          "title": "Des opérations réparties entre plusieurs outils.",
          "body": "Les équipes peuvent avoir du mal à coordonner leurs flux lorsque les outils locaux et centraux sont déconnectés."
        },
        "localFirst": {
          "eyebrow": "Déploiement local-first",
          "title": "Gardez les opérations sur le réseau local.",
          "body": "Les flux locaux passent par le serveur du site et les appareils connectés au LAN.",
          "points": [
            "Flux de travail local",
            "Appareils connectés au réseau local",
            "Synchronisation cloud lorsque disponible"
          ]
        },
        "worksWith": {
          "eyebrow": "Fonctionne avec",
          "title": "Composants ESTINAD connectés.",
          "items": [
            {
              "name": "ESTINAD POS",
              "href": "/products/components/pos",
              "role": "Counter operations"
            },
            {
              "name": "ESTINAD Waiter",
              "href": "/products/components/waiter",
              "role": "Tableside ordering"
            },
            {
              "name": "ESTINAD KDS",
              "href": "/products/components/kds",
              "role": "Kitchen workflow"
            },
            {
              "name": "ESTINAD Central",
              "href": "/products/central",
              "role": "Central visibility"
            }
          ]
        },
        "multiLocation": {
          "eyebrow": "Multi-sites",
          "title": "Opérer localement, suivre de manière centralisée.",
          "body": "Chaque site garde son environnement local tandis que les données sélectionnées se synchronisent pour les équipes autorisées."
        },
        "implementation": {
          "eyebrow": "Implémentation",
          "title": "Un déploiement progressif.",
          "steps": [
            {
              "t": "Découverte",
              "d": "Cartographier les sites et les flux."
            },
            {
              "t": "Installation",
              "d": "Préparer le serveur local et les appareils."
            },
            {
              "t": "Configuration",
              "d": "Définir les rôles et règles opérationnelles."
            },
            {
              "t": "Formation",
              "d": "Former les équipes concernées."
            },
            {
              "t": "Support",
              "d": "Définir les modalités de support continu."
            }
          ]
        },
        "partnerCta": {
          "title": "Vous vendez ou implémentez des logiciels Restaurant ?",
          "body": "Travaillez avec ESTINAD pour présenter et déployer des opérations local-first.",
          "label": "Devenir partenaire ESTINAD",
          "href": "/partners"
        },
        "proof": {
          "eyebrow": "Références",
          "title": "Conçu pour les flux opérationnels.",
          "body": "Des exemples illustratifs présentent les résultats opérationnels que ce produit ESTINAD est conçu pour accompagner.",
          "label": "Exemple illustratif"
        },
        "icpTitle": "Pour qui",
        "icpHeader": "Pour les opérateurs qui sentent les limites de leurs outils.",
        "icp": [
          "Restaurateurs comptoir et à table",
          "Cafés et marques de restauration multi-sites",
          "Opérateurs remplaçant tickets papier et caisse déconnectée"
        ],
        "useCasesTitle": "Cas d'usage principaux",
        "useCasesHeader": "Le travail qu'il remplace en premier.",
        "useCases": [
          "Commande comptoir et service à table depuis une carte",
          "Affichage cuisine et routage des tickets",
          "Coût par modificateur et par recette",
          "Clôture de poste et réconciliation de caisse",
          "Contrôle central de la carte et des prix multi-sites"
        ],
        "visualEyebrow": "Concept visuel",
        "visualTitle": "Une console. Un registre. Une vue calme de l'opération.",
        "visualCaption": "Concept d'interface illustratif · ESTINAD Restauration",
        "visualSidebar": [
          "Tableau de bord",
          "Restauration",
          "Registre",
          "Rapports",
          "Points de vente",
          "Réglages"
        ],
        "visualKpis": [
          "Aujourd'hui",
          "Cette semaine",
          "MTD"
        ],
        "visualChart": "Performance",
        "workflowsEyebrow": "Flux clés",
        "workflowsTitle": "Trois flux qui font la journée.",
        "workflowsIntro": "La boucle cœur du métier, en séquence claire — pas un labyrinthe d'écrans.",
        "workflows": [
          {
            "title": "Commander",
            "steps": [
              "Prendre la commande au comptoir ou à table",
              "Appliquer modificateurs, menus et notes",
              "Envoyer les tickets au bon poste de cuisine",
              "Imprimer ou afficher instantanément en cuisine"
            ]
          },
          {
            "title": "Servir",
            "steps": [
              "La cuisine marque les plats prêts dans l'ordre",
              "La salle voit le statut sans quitter la table",
              "Ajouter, fusionner ou diviser des plats en service",
              "Le statut se synchronise au comptoir en temps réel"
            ]
          },
          {
            "title": "Clôturer",
            "steps": [
              "Régler l'addition par table ou au comptoir",
              "Réconcilier espèces et carte en fin de poste",
              "Coût matière et pertes saisis par recette",
              "Le dirigeant voit la marge, pas seulement le CA"
            ]
          }
        ],
        "featuresEyebrow": "Groupes de fonctionnalités",
        "featuresTitle": "Organisés par ce que fait l'entreprise, pas par listes de fonctions.",
        "featureClusters": [
          {
            "title": "Flux de commandes",
            "description": "De la commande à la cuisine sans friction.",
            "points": [
              "Modes comptoir et service à table",
              "Modificateurs, menus et commandes en attente",
              "Diviser, fusionner et transférer des tables",
              "Cadencement de plats et déclenchement à la demande"
            ]
          },
          {
            "title": "Cuisine",
            "description": "De la clarté sur la ligne, pas du bruit.",
            "points": [
              "Affichage cuisine ou tickets imprimés",
              "Routage par poste et files de préparation",
              "Signalements allergies et modificateurs",
              "Minutage des tickets et alertes de goulots"
            ]
          },
          {
            "title": "Coût et carte",
            "description": "Pilotez la marge depuis la recette.",
            "points": [
              "Coût matière par recette",
              "Carte et prix centraux sur tous les sites",
              "Suivi des pertes et annulations",
              "Rapports de mix produits et ingénierie de menu"
            ]
          }
        ],
        "deployEyebrow": "Déploiement hybride",
        "deployTitle": "Auto-hébergé en local. Enrichi par le cloud quand la connexion est là.",
        "deployment": [
          "Serveur local dédié et auto-hébergé à chaque site",
          "Caisse, serveur et appareils cuisine connectés au LAN",
          "Données sélectionnées synchronisées vers ESTINAD Cloud lorsque disponible"
        ],
        "integEyebrow": "Intégrations",
        "integTitle": "Se connecte au matériel et canaux que vous utilisez déjà.",
        "integrations": [
          "Systèmes d'affichage cuisine et imprimantes de tickets",
          "Tiroirs-caisses et écrans de commande",
          "Terminaux de paiement (acquéreurs locaux)",
          "Adaptateurs d'agrégateurs de livraison (selon disponibilité)"
        ],
        "faqEyebrow": "FAQ",
        "faqTitle": "Les questions que se posent d'abord les dirigeants.",
        "faq": [
          {
            "q": "La cuisine continue-t-elle pendant une coupure ?",
            "a": "Oui. Le flux de commandes et les tickets cuisine s'exécutent sur le serveur local auto-hébergé via le LAN. Les données sélectionnées se réconcilient vers le cloud au retour de la connexion."
          },
          {
            "q": "Puis-je contrôler une seule carte sur tous les sites ?",
            "a": "Cartes, prix et recettes sont gérés centralement et poussés vers chaque site, avec des dérogations locales où vous l'autorisez."
          },
          {
            "q": "Gérez-vous le comptoir et le service à table ?",
            "a": "Les deux. Un même site peut tenir comptoir et service à table côte à côte, sur une carte et un registre partagés."
          },
          {
            "q": "Que fonctionne localement dans un restaurant ?",
            "a": "Le serveur local et les appareils connectés au LAN prennent en charge les flux de commande, cuisine et caisse."
          },
          {
            "q": "Quels appareils peuvent se connecter ?",
            "a": "Terminaux de caisse, tablettes, imprimantes et écrans cuisine compatibles sont évalués lors de l'implémentation."
          },
          {
            "q": "Comment fonctionne la gestion multi-sites ?",
            "a": "Les sites fonctionnent localement tandis que les données sélectionnées peuvent se synchroniser pour une visibilité centrale autorisée."
          },
          {
            "q": "Comment se déroule l'implémentation ?",
            "a": "Découverte, installation, configuration, formation et support sont planifiés autour des horaires de service."
          },
          {
            "q": "Comment sont définis la tarification et le support ?",
            "a": "Les conditions dépendent des sites, appareils, périmètre d'implémentation et modalités de support."
          }
        ],
        "ctaTitle": "Mettez ESTINAD Restauration sur vos opérations."
      },
      "clinic": {
        "glyph": "CL",
        "vertical": "Clinique",
        "name": "ESTINAD Clinic",
        "short": "Clinique",
        "oneLiner": "Bientôt disponible — planification, dossiers et facturation clinique sur la plateforme ESTINAD.",
        "positioning": "ESTINAD Clinique réunit le planning, les dossiers patients et la facturation dans un système discipliné. Conçu pour les cliniques qui ont besoin d'un flux d'accueil calme, de dossiers fiables et d'un reporting financier propre, sans le bruit d'un logiciel générique.",
        "byline": "ESTINAD Clinic par ESTINAD",
        "problem": {
          "eyebrow": "Le problème métier",
          "title": "Des opérations réparties entre plusieurs outils.",
          "body": "Les équipes peuvent avoir du mal à coordonner leurs flux lorsque les outils locaux et centraux sont déconnectés."
        },
        "localFirst": {
          "eyebrow": "Déploiement local-first",
          "title": "Gardez les opérations sur le réseau local.",
          "body": "Les flux locaux passent par le serveur du site et les appareils connectés au LAN.",
          "points": [
            "Flux de travail local",
            "Appareils connectés au réseau local",
            "Synchronisation cloud lorsque disponible"
          ]
        },
        "worksWith": {
          "eyebrow": "Fonctionne avec",
          "title": "Composants ESTINAD connectés.",
          "items": [
            {
              "name": "ESTINAD Central",
              "href": "/products/central",
              "role": "Authorized central visibility"
            },
            {
              "name": "ESTINAD Core",
              "href": "/products/components/core",
              "role": "Shared platform foundation"
            }
          ]
        },
        "multiLocation": {
          "eyebrow": "Multi-sites",
          "title": "Opérer localement, suivre de manière centralisée.",
          "body": "Chaque site garde son environnement local tandis que les données sélectionnées se synchronisent pour les équipes autorisées."
        },
        "implementation": {
          "eyebrow": "Implémentation",
          "title": "Un déploiement progressif.",
          "steps": [
            {
              "t": "Découverte",
              "d": "Cartographier les sites et les flux."
            },
            {
              "t": "Installation",
              "d": "Préparer le serveur local et les appareils."
            },
            {
              "t": "Configuration",
              "d": "Définir les rôles et règles opérationnelles."
            },
            {
              "t": "Formation",
              "d": "Former les équipes concernées."
            },
            {
              "t": "Support",
              "d": "Définir les modalités de support continu."
            }
          ]
        },
        "partnerCta": {
          "title": "Vous vendez ou implémentez des logiciels Clinic ?",
          "body": "Travaillez avec ESTINAD pour présenter et déployer des opérations local-first.",
          "label": "Devenir partenaire ESTINAD",
          "href": "/partners"
        },
        "proof": {
          "eyebrow": "Références",
          "title": "Conçu pour les flux opérationnels.",
          "body": "Des exemples illustratifs présentent les résultats opérationnels que ce produit ESTINAD est conçu pour accompagner.",
          "label": "Exemple illustratif"
        },
        "icpTitle": "Pour qui",
        "icpHeader": "Pour les opérateurs qui sentent les limites de leurs outils.",
        "icp": [
          "Dirigeants et gestionnaires de cliniques",
          "Cliniques médicales et dentaires mono et multi-sites",
          "Opérateurs remplaçant dossiers papier et facturation fragmentée"
        ],
        "useCasesTitle": "Cas d'usage principaux",
        "useCasesHeader": "Le travail qu'il remplace en premier.",
        "useCases": [
          "Prise de rendez-vous et flux patients",
          "Dossiers patients et historique de visites",
          "Facturation des actes, factures et paiements",
          "Plannings des praticiens et occupation des salles",
          "Reporting patients et financier multi-sites"
        ],
        "visualEyebrow": "Concept visuel",
        "visualTitle": "Une console. Un registre. Une vue calme de l'opération.",
        "visualCaption": "Concept d'interface illustratif · ESTINAD Clinique",
        "visualSidebar": [
          "Tableau de bord",
          "Clinique",
          "Registre",
          "Rapports",
          "Points de vente",
          "Réglages"
        ],
        "visualKpis": [
          "Aujourd'hui",
          "Cette semaine",
          "MTD"
        ],
        "visualChart": "Performance",
        "workflowsEyebrow": "Flux clés",
        "workflowsTitle": "Trois flux qui font la journée.",
        "workflowsIntro": "La boucle cœur du métier, en séquence claire — pas un labyrinthe d'écrans.",
        "workflows": [
          {
            "title": "Planifier",
            "steps": [
              "Prendre le RDV avec praticien et salle",
              "Le patient reçoit une confirmation automatique",
              "L'accueil voit le flux du jour d'un coup d'œil",
              "Conflits et temps d'attente signalés tôt"
            ]
          },
          {
            "title": "Soigner",
            "steps": [
              "Ouvrir le dossier patient à l'arrivée",
              "Saisir notes de visite, diagnostic et traitement",
              "Joindre ordonnances et suivi",
              "Le dossier reste complet d'une visite à l'autre"
            ]
          },
          {
            "title": "Facturer",
            "steps": [
              "Actes et articles postés sur la facture",
              "Appliquer le règlement assurance ou patient",
              "Reçu et relevé émis",
              "Clôture financière quotidienne par praticien"
            ]
          }
        ],
        "featuresEyebrow": "Groupes de fonctionnalités",
        "featuresTitle": "Organisés par ce que fait l'entreprise, pas par listes de fonctions.",
        "featureClusters": [
          {
            "title": "Planning",
            "description": "Un accueil calme et prévisible.",
            "points": [
              "Agendas praticiens et salles",
              "Rappels patients automatisés",
              "Liste d'attente et rappels",
              "Vue de disponibilité multi-sites"
            ]
          },
          {
            "title": "Dossiers",
            "description": "Un historique patient fiable, prêt pour la visite.",
            "points": [
              "Notes de visite structurées et historique",
              "Ordonnances et plans de traitement",
              "Accès par rôles pour le personnel",
              "Piste d'audit sur chaque modification de dossier"
            ]
          },
          {
            "title": "Facturation",
            "description": "De l'argent propre, des dossiers propres.",
            "points": [
              "Facturation des actes et articles",
              "Règlement assurance et patient",
              "Relevés et suivi des impayés",
              "Reporting financier par praticien et site"
            ]
          }
        ],
        "deployEyebrow": "Déploiement hybride",
        "deployTitle": "Auto-hébergé en local. Enrichi par le cloud quand la connexion est là.",
        "deployment": [
          "Serveur local dédié et auto-hébergé à chaque clinique",
          "Appareils connectés au LAN pour les flux locaux",
          "Données sélectionnées synchronisées vers ESTINAD Cloud lorsque disponible"
        ],
        "integEyebrow": "Intégrations",
        "integTitle": "Se connecte au matériel et canaux que vous utilisez déjà.",
        "integrations": [
          "Imprimantes thermiques et A4 pour reçus et ordonnances",
          "Terminaux de paiement (acquéreurs locaux)",
          "Rappels SMS et WhatsApp",
          "Export d'agenda pour les praticiens"
        ],
        "faqEyebrow": "FAQ",
        "faqTitle": "Les questions que se posent d'abord les dirigeants.",
        "faq": [
          {
            "q": "Les données patients sont-elles privées et auditées ?",
            "a": "Les dossiers sont à accès par rôles et chaque modification est journalisée. Les options de déploiement permettent de garder les données dans le pays quand la résidence l'exige."
          },
          {
            "q": "Puis-je voir les disponibilités sur plusieurs cliniques ?",
            "a": "Oui. Le planning couvre tous les sites, l'accueil peut donc inscrire un patient chez le bon praticien et au bon endroit en une vue."
          },
          {
            "q": "Gérez-vous l'assurance et le paiement patient ?",
            "a": "Les factures gèrent le règlement assurance et patient, avec suivi des impayés et relevés propres pour chacun."
          },
          {
            "q": "Que se passe-t-il en cas de coupure internet ?",
            "a": "Les flux locaux de la clinique continuent via le serveur du site ; les données sélectionnées se synchronisent lorsque la connexion est disponible."
          },
          {
            "q": "Qu'est-ce qui est installé à chaque clinique ?",
            "a": "L'implémentation évalue le serveur local, le réseau, les appareils et les exigences d'exploitation pour chaque site."
          },
          {
            "q": "Comment fonctionne la gestion multi-cliniques ?",
            "a": "Les équipes autorisées peuvent consulter les informations synchronisées sélectionnées entre les sites."
          },
          {
            "q": "Comment se déroule l'implémentation ?",
            "a": "Découverte, installation, configuration, formation et support sont planifiés avec les équipes de la clinique."
          },
          {
            "q": "Comment sont gérés la tarification et la propriété ?",
            "a": "Les conditions commerciales dépendent des sites, de l'infrastructure, du périmètre d'implémentation et du support."
          }
        ],
        "ctaTitle": "Mettez ESTINAD Clinique sur vos opérations."
      },
      "inventory": {
        "name": "ESTINAD Inventory",
        "oneLiner": "Bientôt disponible — contrôle des stocks dédié pour réceptions, transferts et exactitude."
      },
      "invoices": {
        "name": "ESTINAD Invoices",
        "oneLiner": "Bientôt disponible — facturation pour les équipes qui ont besoin de documents et d'encaissements clairs."
      },
      "workforce": {
        "name": "ESTINAD Workforce",
        "oneLiner": "Bientôt disponible — planification, présence et opérations d'équipe multi-sites."
      },
      "central": {
        "name": "ESTINAD Central",
        "oneLiner": "Bientôt disponible — synchronisation, accès distant et gestion centrale sans remplacer les serveurs locaux."
      }
    }
  },
  "apps": {
    "index": {
      "eyebrow": "Écosystème",
      "title": "Une plateforme. Chaque application qui la fait tourner.",
      "intro": "ESTINAD, ce sont plus de quatre produits. En dessous se trouvent un moteur partagé, des applications compagnons qui étendent le flux restaurant, et les paquets qui donnent à chaque application sa vitesse, son apparence et sa fiabilité. Explorez chaque pièce de l'écosystème.",
      "groupProducts": "Produits grand public",
      "groupRestaurant": "Lignes produit restaurant",
      "groupPlatform": "Applications plateforme & compagnons",
      "groupPackages": "Paquets partagés",
      "groupRoadmap": "Feuille de route & interne",
      "tagCategory": "Catégorie",
      "tagStatus": "Statut",
      "statusShipped": "Livré",
      "statusBeta": "Bêta",
      "statusFrozen": "Gelé",
      "statusArchived": "Archivé",
      "statusPlanned": "Planifié",
      "statusRoadmap": "Sur la feuille de route",
      "viewApp": "Explorer",
      "explorePlatform": "Explorer la plateforme",
      "backToProducts": "Retour aux produits",
      "pricingNote": "Les lignes produit restaurant partagent la tarification ESTINAD Restaurant."
    },
    "items": {
      "restaurant-ecosystem": {
        "glyph": "RE",
        "name": "ESTINAD Restaurant — Écosystème complet",
        "short": "Écosystème restaurant",
        "category": "Ligne produit restaurant",
        "status": "shipped",
        "oneLiner": "La pile restaurant de bout en bout — POS caisse, tablettes de serveur et affichage cuisine, synchronisés en temps réel sur votre réseau local.",
        "positioning": "ESTINAD Restaurant Écosystème complet relie la caisse, la salle et la cuisine en un seul flux. POS caisse, tablettes de serveur en salle et tableau de cuisine vivant partagent une même base locale — les commandes voyagent de la table à la cuisine sans aucun ticket papier. Conçu pour les restaurants avec service, les cafés et le restauration rapide qui veulent des tickets numériques de la commande à l'assiette.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": [
            {
              "app": "ESTINAD POS",
              "role": "Caisse, back-office, hub de routage d'impression",
              "platform": "Windows / Linux"
            },
            {
              "app": "ESTINAD Waiter",
              "role": "Commande en salle sur tablettes",
              "platform": "Android"
            },
            {
              "app": "ESTINAD KDS",
              "role": "Tableau de tickets cuisine",
              "platform": "Android / Web"
            }
          ]
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Trois applications, un service connecté.",
        "capabilitiesIntro": "Chaque pièce est conçue pour son poste — et les trois dialoguent avec le même serveur local sur la machine POS. Aucun cloud requis pendant le service.",
        "capabilities": [
          {
            "title": "Gestion des tables",
            "description": "Plan de salle visuel avec statut des tables — liez les commandes aux tables et suivez le service sur place."
          },
          {
            "title": "Encaissement complet",
            "description": "Modificateurs, paiements partagés, pourboires et commandes en attente/rappel — pensé pour les tickets restaurant complexes."
          },
          {
            "title": "Routage d'impression multi-destination",
            "description": "Acheminez les articles vers les imprimantes cuisine, bar ou caisse — le hub qui alimente tickets papier et affichage cuisine."
          },
          {
            "title": "Commande en salle",
            "description": "Les serveurs prennent les commandes à table sur tablettes Android — les articles se synchronisent instantanément vers POS et cuisine."
          },
          {
            "title": "Plan des tables visuel",
            "description": "Statuts des tables codés couleur — libre, occupée, addition demandée — pour que l'équipe de salle sache où aller."
          },
          {
            "title": "Découverte auto du POS",
            "description": "Les tablettes trouvent la caisse sur le réseau via mDNS — connexion en secondes, sans saisie d'IP."
          },
          {
            "title": "Tickets cuisine en direct",
            "description": "Les commandes apparaissent à l'écran cuisine en temps réel — remplacez les tickets papier par un tableau numérique."
          },
          {
            "title": "Bump, rappel et minuteurs d'urgence",
            "description": "Marquez les tickets terminés, rappelant les erreurs, avec minuteurs vert → jaune → rouge pour ne rien laisser traîner."
          },
          {
            "title": "Filtres par poste & alertes sonores",
            "description": "Affichez uniquement les articles grill, bar ou froid et émettez un son à chaque nouvelle commande."
          }
        ],
        "workflows": {
          "eyebrow": "Flux de service",
          "title": "De la table à la cuisine, entièrement connecté.",
          "intro": "La commande voyage dans un sens — table, cuisine, caisse — sans aucun aller-retour.",
          "groups": [
            {
              "title": "Commander",
              "steps": [
                "Le serveur ouvre la table sur la tablette",
                "Construit la commande avec modificateurs et notes",
                "Une touche envoie vers POS et cuisine",
                "Les tickets apparaissent sur le KDS et les imprimantes"
              ]
            },
            {
              "title": "Servir",
              "steps": [
                "La cuisine voit les tickets avec minuteurs d'urgence",
                "Bump des articles quand ils quittent la ligne",
                "La salle voit le statut sans quitter la table",
                "Ajout ou fusion d'articles en cours de service"
              ]
            },
            {
              "title": "Clôturer",
              "steps": [
                "Réglez l'addition par table ou à la caisse",
                "Paiements partagés entre méthodes",
                "Rapprochement espèces et carte en fin de service",
                "Le dirigeant voit la marge, pas seulement le chiffre"
              ]
            }
          ]
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Fonctionne avec le matériel déjà en cuisine.",
        "integrations": [
          "Imprimantes thermiques ESC/POS",
          "Imprimantes de tickets cuisine (multi-postes)",
          "Tablettes Android (serveur & KDS)",
          "Tiroirs-caisses et écrans de commande",
          "Serveur PocketBase local sur la machine POS"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Où cela s'intègre dans ESTINAD.",
        "ecosystem": [
          {
            "t": "Construit sur ESTINAD POS",
            "d": "Le hub caisse et back-office est le même moteur POS qui alimente le retail et la ligne restaurant imprimante-only — configuré pour le service complet."
          },
          {
            "t": "Étendu par les applications compagnons",
            "d": "ESTINAD Waiter et ESTINAD KDS rejoignent uniquement ce bundle. Ils partagent une carte, un grand livre et une base locale avec le POS."
          },
          {
            "t": "Hors-ligne par conception",
            "d": "Les trois applications dialoguent avec le PocketBase local sur la machine POS. La perte d'internet n'arrête pas le service — la sync reprend au retour du réseau."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Temps réel, même sans internet.",
        "tech": "Les commandes transitent par PocketBase SSE sur votre réseau local, donc les mises à jour de tickets sont sub-seconde et le service ne dépend jamais du cloud.",
        "notIncluded": {
          "title": "Ce n'est pas ce qu'il vous faut ?",
          "intro": "Si vous n'avez besoin que d'une caisse avec imprimantes cuisine — sans tablettes, sans écran cuisine — il existe un bundle plus léger.",
          "items": [],
          "ctaLabel": "Voir ESTINAD Restaurant — POS avec imprimantes",
          "ctaHref": "/products/restaurant-pos"
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des exploitants.",
        "faq": [
          {
            "q": "Faut-il internet pendant le service ?",
            "a": "Non. Les trois applications se connectent à une instance PocketBase locale sur la machine POS. Le service tourne entièrement hors-ligne et se synchronise au cloud au retour de la connexion."
          },
          {
            "q": "Comment les tablettes trouvent-elles le POS ?",
            "a": "Le POS s'annonce sur le réseau local via mDNS, les tablettes le découvrent automatiquement — sans saisie d'IP sur la plupart des réseaux."
          },
          {
            "q": "L'affichage cuisine est-il prêt pour la production ?",
            "a": "ESTINAD KDS est en bêta. Il est livré dans le bundle aujourd'hui et fait déjà vivre des tickets ; nous le durcissons avec nos partenaires restaurants."
          }
        ],
        "ctaTitle": "Faites tourner votre restaurant sur l'écosystème complet.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Voir la tarification restaurant",
        "secondaryHref": "/products/restaurant/pricing"
      },
      "restaurant-pos": {
        "glyph": "RP",
        "name": "ESTINAD Restaurant — POS avec imprimantes",
        "short": "POS restaurant",
        "category": "Ligne produit restaurant",
        "status": "shipped",
        "oneLiner": "Une seule caisse qui route les commandes vers des imprimantes thermiques — sans tablettes, sans écran cuisine. Coût matériel réduit, même moteur hors-ligne.",
        "positioning": "Une configuration restaurant allégée pour les cafés, les points de vente rapides et les cuisines qui veulent une seule caisse routant les commandes vers des imprimantes thermiques. Conçu pour le service au comptoir et les petits restaurants qui reposent sur les tickets papier — sans l'empreinte matérielle des tablettes et des écrans cuisine.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": [
            {
              "app": "ESTINAD POS",
              "role": "Caisse, back-office, routage impression cuisine",
              "platform": "Windows / Linux"
            }
          ]
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Une borne, des tickets vers chaque poste.",
        "capabilitiesIntro": "Tout pour faire tourner un restaurant au comptoir depuis un seul PC — avec la possibilité de passer à l'écosystème complet plus tard.",
        "capabilities": [
          {
            "title": "Encaissement rapide",
            "description": "POS plein écran avec navigation par catégorie, modificateurs, attente/rappel et paiements partagés — réglé pour le comptoir et la table."
          },
          {
            "title": "Routage impression cuisine & bar",
            "description": "Envoyez chaque article vers la bonne imprimante — grill, bar, froid, caisse — pour que la ligne reçoive les tickets automatiquement."
          },
          {
            "title": "Impression de reçus thermiques",
            "description": "Imprimez les reçus clients et ouvrez le tiroir-caisse au paiement, avec du matériel ESC/POS compatible."
          },
          {
            "title": "Gestion des tables (optionnel)",
            "description": "Suivez les tables sur place et liez les commandes pour un contrôle de salle minimal sans tablettes."
          },
          {
            "title": "Carte avec modificateurs",
            "description": "Construisez catégories, produits et modificateurs — tailles, extras et personnalisations par article."
          },
          {
            "title": "Attente & rappel de commandes",
            "description": "Parquez un ticket au rush et reprenez-le plus tard dans le panier — sans ressaisie."
          },
          {
            "title": "Paiements multi-méthodes",
            "description": "Espèces, CIB, Edahabia et paiements partagés avec calcul automatique de la monnaie."
          },
          {
            "title": "Contrôle de caisse et de service",
            "description": "Ouvrez et fermez les services avec comptages, X-report et Z-report pour le rapprochement quotidien."
          },
          {
            "title": "Stock & alertes de rupture",
            "description": "Suivez le stock d'ingrédients et de produits avec ajustements et notifications de niveaux bas."
          },
          {
            "title": "Fidélité client",
            "description": "Programme de points avec gain et utilisation à l'encaissement — sans portail séparé."
          },
          {
            "title": "PIN, rôles & validation manager",
            "description": "Accès staff sécurisé avec permissions fines et validation pour les annulations et actions sensibles."
          },
          {
            "title": "Hors-ligne avec sync cloud",
            "description": "La base locale garde la caisse en activité sans internet ; sync et sauvegarde au retour de la connexion."
          }
        ],
        "workflows": {
          "eyebrow": "Flux de service",
          "title": "Encaisser, router, rapprocher — depuis une borne.",
          "intro": "La caisse est le hub. Chaque commande est routée vers la bonne imprimante à l'enregistrement.",
          "groups": [
            {
              "title": "Encaisser",
              "steps": [
                "Ouvrez le terminal POS et construitez la commande",
                "Appliquez modificateurs, formules et notes",
                "Mettre en attente ou rappeler au rush",
                "Envoyez les articles vers la bonne imprimante cuisine"
              ]
            },
            {
              "title": "Payer",
              "steps": [
                "Espèces, CIB, Edahabia ou paiement partagé",
                "Imprimez le reçu et ouvrez le tiroir",
                "Appliquez les points fidélité à l'encaissement",
                "Clôturez le ticket dans le grand livre"
              ]
            },
            {
              "title": "Rapprocher",
              "steps": [
                "Fermez le service et comptez le tiroir",
                "Lancez les X et Z reports du jour",
                "Écarts signalés pour revue",
                "Ventes et ventilation des paiements prêts"
              ]
            }
          ]
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Se connecte au matériel que vous utilisez déjà.",
        "integrations": [
          "Imprimantes thermiques ESC/POS",
          "Imprimantes de tickets cuisine multi-postes",
          "Scanners de codes-barres et tiroirs-caisses",
          "Terminaux de paiement (CIB, Edahabia, acquéreurs locaux)"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Où cela s'intègre dans ESTINAD.",
        "ecosystem": [
          {
            "t": "Même moteur POS",
            "d": "Tourne sur la même application ESTINAD POS que l'écosystème complet — simplement sans les devices waiter et KDS sur le réseau."
          },
          {
            "t": "Prêt à évoluer",
            "d": "Ajoutez des tablettes Waiter et un écran KDS plus tard en passant au bundle Écosystème complet. Même application POS, devices en plus — pas de remise de plateforme."
          },
          {
            "t": "Hors-ligne par conception",
            "d": "Le routage d'impression tourne depuis une seule borne Windows ou Linux, la cuisine reçoit les tickets même sans internet."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Une borne, tous les postes.",
        "tech": "Le routage d'impression envoie les commandes vers plusieurs imprimantes ESC/POS depuis une seule borne Windows ou Linux — sans logiciel cuisine séparé.",
        "notIncluded": {
          "title": "Vous voulez le flux complet salle-cuisine ?",
          "intro": "Passez au bundle Écosystème complet pour ajouter des tablettes de serveur et un affichage cuisine vivant.",
          "items": [],
          "ctaLabel": "Voir ESTINAD Restaurant — Écosystème complet",
          "ctaHref": "/products/restaurant"
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des exploitants.",
        "faq": [
          {
            "q": "Puis-je passer à l'écosystème complet plus tard ?",
            "a": "Oui. Waiter et KDS sont pilotés par drapeau fonctionnel selon le type de business, pas des codes distincts. Ajoutez tablettes et écran cuisine et passez au bundle complet — même application POS."
          },
          {
            "q": "Faut-il un ordinateur cuisine séparé ?",
            "a": "Non. Le routage d'impression pilote toutes les imprimantes cuisine et bar depuis la seule borne caisse sous Windows ou Linux."
          },
          {
            "q": "La caisse reste-t-elle active hors-ligne ?",
            "a": "Oui. La base locale garde la caisse en activité pendant les coupures, sync et sauvegarde reprennent au retour de la connexion."
          }
        ],
        "ctaTitle": "Faites tourner votre service au comptoir sur ESTINAD.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Voir la tarification restaurant",
        "secondaryHref": "/products/restaurant/pricing"
      },
      "pos": {
        "glyph": "PS",
        "name": "ESTINAD POS",
        "short": "POS",
        "category": "Application plateforme",
        "status": "shipped",
        "oneLiner": "Le moteur caisse et back-office partagé derrière chaque encaissement ESTINAD — un codebase qui alimente retail et restaurant.",
        "positioning": "ESTINAD POS est le moteur technique de l'écosystème : un seul codebase Flutter qui alimente plusieurs lignes produit, configuré à l'installation selon le type de business. Le retail masque tables, KDS et modules waiter ; le restaurant active le routage cuisine et optionnellement les applications de l'écosystème. Une application, plusieurs verticales — sans fork.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités plateforme",
        "capabilitiesTitle": "Tout ce que chaque ligne produit hérite.",
        "capabilitiesIntro": "Ces capacités sont livrées dans l'application pour toutes les lignes produit — certaines pilotées par type de business afin que chaque verticale ne voit que ce dont elle a besoin.",
        "capabilities": [
          {
            "title": "Tableau de bord",
            "description": "Ventes du jour, nombre de commandes et statut du service d'un coup d'œil — le premier écran de chaque borne."
          },
          {
            "title": "Boîte d'alertes",
            "description": "Une boîte dédiée remonte les alertes de stock, de sync et d'exploitation pour que rien n'échappe à l'équipe."
          },
          {
            "title": "Rapports & analytique",
            "description": "Ventes, produits phares et ventilation des paiements par point de vente et par période — le socle reporting back-office."
          },
          {
            "title": "Gestion du catalogue",
            "description": "Catégories, produits et variantes avec photos, références, codes-barres et prix sur un modèle cohérent."
          },
          {
            "title": "Import produit en masse",
            "description": "Chargez tout un catalogue depuis un CSV en un seul flux — idéal pour les ouvertures et les changements de saison."
          },
          {
            "title": "Suivi de stock",
            "description": "Niveaux de stock en temps réel, ajustements et alertes de rupture sur produits et variantes."
          },
          {
            "title": "Clients & fidélité",
            "description": "Une base clients avec contacts, historique d'achats et programme de points pour la rétention."
          },
          {
            "title": "Terminal de caisse",
            "description": "Un comptoir rapide et clavier-friendly pensé pour les volumes élevés, code-barres comme service à table."
          },
          {
            "title": "Contrôle de service",
            "description": "Ouvrez et fermez les services avec comptages, X-report et Z-report pour le rapprochement de fin de journée."
          },
          {
            "title": "PIN, rôles & permissions",
            "description": "Connexion staff par PIN ; permissions fines sur qui peut annuler, remiser ou ajuster le stock."
          },
          {
            "title": "Sync cloud & sauvegarde",
            "description": "Base locale hors-ligne avec sync cloud et sauvegardes planifiées — la caisse continue sans internet."
          },
          {
            "title": "Palette de commandes (Ctrl+K)",
            "description": "Trouvez produits, clients, commandes et réglages en millisecondes — pensé pour le comptoir."
          },
          {
            "title": "Assistant IA",
            "description": "Un assistant in-app lit le contexte commandes, clients et produits pour répondre en langage courant."
          }
        ],
        "workflows": {
          "eyebrow": "",
          "title": "",
          "intro": "",
          "groups": []
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Matériel et canaux connectés.",
        "integrations": [
          "Imprimantes thermiques et à étiquettes ESC/POS",
          "Scanners de codes-barres et tiroirs-caisses",
          "Terminaux de paiement (CIB, Edahabia, acquéreurs locaux)",
          "PocketBase (local) et Supabase (cloud)",
          "Livraison de rapports WhatsApp Business"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Le moteur sur lequel tourne chaque produit.",
        "ecosystem": [
          {
            "t": "Alimente les lignes produit",
            "d": "ESTINAD Retail et les deux lignes Restaurant sont cette même application, configurée par type de business à l'installation."
          },
          {
            "t": "Héberge les compagnons",
            "d": "Sur les réseaux restaurant, le POS est le hub que les tablettes Waiter et les écrans KDS découvrent et synchronisent."
          },
          {
            "t": "S'appuie sur les paquets partagés",
            "d": "ESTINAD Core, UI, Native et Importer vivent dans cette application — chaque verticale hérite de la même fondation."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Un codebase, plusieurs verticales.",
        "tech": "BusinessTypeFeatures active plus de 40 drapeaux fonctionnels afin qu'une application serve le retail et le restaurant avec service complet sans forker le dépôt.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des acheteurs techniques.",
        "faq": [
          {
            "q": "ESTINAD POS est-il un produit séparé de Retail et Restaurant ?",
            "a": "C'est l'application partagée en dessous. Vous n'achetez pas « POS » séparément — vous achetez une ligne produit, et ce moteur l'alimente."
          },
          {
            "q": "Une installation peut-elle changer de verticale ?",
            "a": "Les fonctions sont sélectionnées par type de business à l'installation. Changer de verticale est une décision de configuration, pas une réinstallation."
          },
          {
            "q": "Fonctionne-t-il hors-ligne ?",
            "a": "Oui. La base PocketBase locale est la source de vérité pendant le service ; la sync cloud est le backup et le pont multi-sites, pas une dépendance dure."
          }
        ],
        "ctaTitle": "Voyez ce que le moteur peut faire pour votre activité.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "waiter": {
        "glyph": "WT",
        "name": "ESTINAD Waiter",
        "short": "Waiter",
        "category": "Application compagnon",
        "status": "shipped",
        "oneLiner": "L'application de commande en salle pour tablettes Android — partie de l'écosystème ESTINAD Restaurant complet uniquement.",
        "positioning": "ESTINAD Waiter met la carte dans les mains du serveur. Conçu pour tablettes Android et pour la salle, il permet de parcourir la carte, de construire la commande à table et de l'envoyer directement à la cuisine et au POS — sans configuration serveur manuelle sur la plupart des réseaux. Disponible uniquement dans le bundle Écosystème complet.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Pensé pour la salle, pas pour le comptoir.",
        "capabilitiesIntro": "Chaque fonction est réglée pour le travail en salle pendant un service chargé — rapide, tactile et toujours synchronisé avec le POS.",
        "capabilities": [
          {
            "title": "Découverte auto du POS",
            "description": "L'application trouve votre ESTINAD POS sur le réseau local via mDNS — connexion en secondes sans saisir d'IP."
          },
          {
            "title": "Connexion manuelle",
            "description": "Si la découverte auto échoue, le staff peut saisir l'adresse du serveur POS manuellement en repli."
          },
          {
            "title": "Connexion PIN",
            "description": "Les serveurs se connectent avec le même PIN que le POS pour des passages de service rapides et sûrs."
          },
          {
            "title": "Verrouillage auto",
            "description": "Après inactivité, la tablette se verrouille et exige le PIN — protégeant les tables ouvertes quand le serveur s'éloigne."
          },
          {
            "title": "Plan des tables visuel",
            "description": "Toutes les tables sur un plan codé couleur — libre, occupée, addition demandée — pour savoir où aller."
          },
          {
            "title": "Filtre par zone",
            "description": "Filtrez la vue par zone — terrasse, salle principale, VIP — pour vous concentrer sur une section aux heures d'affluence."
          },
          {
            "title": "Ouvrir & gérer les tables",
            "description": "Touchez une table libre pour l'ouvrir, ou une table occupée pour voir l'addition et ajouter des articles."
          },
          {
            "title": "Navigation & commande",
            "description": "Parcourez catégories et produits avec choix de variantes et modificateurs — la même carte que le POS, optimisée tactile."
          },
          {
            "title": "Panier en salle",
            "description": "Construisez la commande localement avec quantités, notes et total en direct avant l'envoi cuisine."
          },
          {
            "title": "Envoyer en cuisine",
            "description": "Une touche envoie la commande au POS et à la cuisine — les articles apparaissent sur le KDS et les imprimantes."
          },
          {
            "title": "Bandeau de connexion",
            "description": "Un indicateur clair signale la perte de contact avec le POS, et l'envoi est bloqué jusqu'au retour du lien."
          }
        ],
        "workflows": {
          "eyebrow": "Flux de salle",
          "title": "De la table à la cuisine en une touche.",
          "intro": "Le serveur ne quitte jamais la table — la commande voyage seule vers la cuisine et la caisse.",
          "groups": [
            {
              "title": "Connecter",
              "steps": [
                "La tablette découvre le POS via mDNS",
                "Le serveur se connecte par PIN",
                "Le plan de salle se charge avec le statut des tables",
                "Choisir une zone ou une table pour démarrer"
              ]
            },
            {
              "title": "Commander",
              "steps": [
                "Ouvrir la table et parcourir la carte",
                "Ajouter articles avec variantes et modificateurs",
                "Revoir le panier et le total",
                "Ajouter des notes pour la cuisine"
              ]
            },
            {
              "title": "Envoyer",
              "steps": [
                "Une touche envoie au POS et au KDS",
                "Les tickets s'impriment aux bons postes",
                "Le statut de la table passe à occupée",
                "Ajouter des articles en cours de service"
              ]
            }
          ]
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Joue avec le reste de l'écosystème.",
        "integrations": [
          "ESTINAD POS (serveur local)",
          "ESTINAD KDS (tickets cuisine)",
          "Tablettes Android",
          "PocketBase local sur la machine POS"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Partie de l'écosystème complet uniquement.",
        "ecosystem": [
          {
            "t": "Écosystème restaurant uniquement",
            "d": "ESTINAD Waiter n'est pas inclus dans ESTINAD Retail ni le bundle POS avec imprimantes. Il rejoint uniquement l'Écosystème complet."
          },
          {
            "t": "Partage la carte du POS",
            "d": "Le serveur voit la même carte, modificateurs et prix que la caisse — un catalogue, maintenu une fois."
          },
          {
            "t": "Temps réel avec la salle",
            "d": "Les mises à jour de statut via les abonnements PocketBase gardent le plan de salle synchronisé avec le POS."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Salle temps réel, sans config serveur.",
        "tech": "Les mises à jour de statut des tables via les abonnements PocketBase gardent le plan de salle synchronisé avec le POS au fil des commandes.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des exploitants.",
        "faq": [
          {
            "q": "Puis-je utiliser Waiter avec ESTINAD Retail ?",
            "a": "Non. Waiter fait partie de l'écosystème Restaurant complet uniquement — les types de business retail désactivent le module waiter."
          },
          {
            "q": "Et si la découverte auto ne trouve pas le POS ?",
            "a": "Le staff peut saisir manuellement l'adresse du serveur POS depuis l'écran de découverte."
          },
          {
            "q": "Que se passe-t-il en perte de connexion ?",
            "a": "Un bandeau signale l'état déconnecté et l'envoi est bloqué jusqu'au retour du lien POS, aucune commande n'est perdue silencieusement."
          }
        ],
        "ctaTitle": "Mettez la commande en salle sur votre plan.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "kds": {
        "glyph": "KD",
        "name": "ESTINAD KDS",
        "short": "KDS",
        "category": "Application compagnon",
        "status": "beta",
        "oneLiner": "L'affichage cuisine — un tableau numérique vivant qui remplace les tickets papier. Partie de l'écosystème complet uniquement.",
        "positioning": "ESTINAD KDS transforme la ligne de cuisine en tableau vivant. Les nouvelles commandes apparaissent dès que les serveurs et caissiers les valident, avec minuteurs d'urgence, filtres par poste et alertes sonores pour ne rien laisser traîner. Tourne sur tablettes Android, téléviseurs ou écrans muraux — partie de l'écosystème Restaurant complet, actuellement en bêta.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Chaque commande visible, rien d'oublié.",
        "capabilitiesIntro": "La cuisine voit un tableau propre et priorisé au lieu d'une pile de tickets papier — et reste synchronisée avec le POS en temps réel.",
        "capabilities": [
          {
            "title": "Tickets en direct",
            "description": "Les nouvelles lignes apparaissent à l'écran en temps réel à la validation — sans délai d'impression ni ticket perdu."
          },
          {
            "title": "Bump pour terminer",
            "description": "Touchez pour marquer un ticket terminé et l'effacer de la file active — une vue propre de ce qui cuisine encore."
          },
          {
            "title": "Rappel des tickets bumpés",
            "description": "Bumpé trop tôt ? Ouvrez le mode rappel pour remettre les tickets récents sur le tableau."
          },
          {
            "title": "Minuteurs d'urgence couleur",
            "description": "Chaque ticket affiche le temps écoulé en vert → jaune → rouge pour savoir ce qui attend le plus."
          },
          {
            "title": "Alertes sonores",
            "description": "Émettez un son à chaque nouvelle commande pour l'entendre même sans regarder l'écran."
          },
          {
            "title": "Filtre par poste",
            "description": "Affichez uniquement les tickets de votre poste — grill, bar, froid — selon le routage d'impression du POS."
          },
          {
            "title": "Affichage permanent",
            "description": "L'écran reste éveillé en mode immersif pendant le service pour que les tickets soient toujours visibles."
          },
          {
            "title": "Reconnexion auto",
            "description": "Si le lien avec le POS tombe, le KDS se reconnecte automatiquement avec statut visible — pas de redémarrage manuel."
          },
          {
            "title": "Réglages serveur & affichage",
            "description": "Configurez l'URL PocketBase, les filtres de poste, le son et la langue depuis un écran de réglages."
          }
        ],
        "workflows": {
          "eyebrow": "Flux cuisine",
          "title": "Voir, cuire, bumper.",
          "intro": "Le tableau mémorise — la ligne cuisine dans l'ordre et bump quand un ticket est prêt.",
          "groups": [
            {
              "title": "Recevoir",
              "steps": [
                "Un nouveau ticket apparaît instantanément",
                "Alerte sonore pour les commandes entrantes",
                "Le minuteur d'urgence démarre",
                "Le filtre de poste montre uniquement vos articles"
              ]
            },
            {
              "title": "Cuire",
              "steps": [
                "Tickets triés par temps d'attente et statut",
                "La couleur passe vert → jaune → rouge",
                "Rappeler un ticket en cas d'erreur",
                "Rester concentré sur son poste"
              ]
            },
            {
              "title": "Bumper",
              "steps": [
                "Toucher pour marquer terminé",
                "Le ticket sort de la file active",
                "La salle et le POS voient la mise à jour",
                "Vue propre de ce qui reste à cuire"
              ]
            }
          ]
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Joue avec le reste de l'écosystème.",
        "integrations": [
          "ESTINAD POS (destinations de routage)",
          "ESTINAD Waiter (source des commandes)",
          "Tablettes Android, téléviseurs et écrans muraux",
          "PocketBase local sur la machine POS"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Partie de l'écosystème complet uniquement.",
        "ecosystem": [
          {
            "t": "Écosystème restaurant uniquement",
            "d": "KDS n'est pas inclus dans ESTINAD Retail ni le bundle POS avec imprimantes — ceux-ci utilisent des imprimantes thermiques."
          },
          {
            "t": "Lit le routage du POS",
            "d": "Les filtres de poste suivent les destinations configurées sur le POS, grill, bar et froid voient chacun leurs articles."
          },
          {
            "t": "Actuellement en bêta",
            "d": "ESTINAD KDS est en bêta et fait déjà vivre des tickets. Il est livré dans le bundle complet et durci avec nos partenaires restaurants."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Tickets sub-seconde sur le réseau local.",
        "tech": "Double abonnement SSE aux commandes et lignes de commande avec cache local assure des mises à jour sub-seconde sur le réseau local.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des exploitants.",
        "faq": [
          {
            "q": "ESTINAD KDS est-il prêt pour la production ?",
            "a": "Il est en bêta. L'affichage live, le bump/rappel, les minuteurs d'urgence et les filtres de poste sont implémentés et actifs ; nous le durcissons avec nos partenaires."
          },
          {
            "q": "Puis-je utiliser tickets papier et KDS ensemble ?",
            "a": "Oui. Le POS route les articles vers imprimantes et KDS, la cuisine peut tourner un tableau numérique à côté des tickets papier pendant la transition."
          },
          {
            "q": "Sur quel matériel le KDS tourne-t-il ?",
            "a": "Toute tablette Android, écran TV ou afficheur mural qui peut joindre le serveur POS sur le réseau local."
          }
        ],
        "ctaTitle": "Apportez un tableau vivant à votre cuisine.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "core": {
        "glyph": "CR",
        "name": "ESTINAD Core",
        "short": "Core",
        "category": "Paquet partagé",
        "status": "shipped",
        "oneLiner": "La bibliothèque fondation partagée de l'écosystème — un cerveau qui alimente chaque application ESTINAD.",
        "positioning": "ESTINAD Core est la fondation partagée sur laquelle tournent chaque POS, waiter et cuisine : les mêmes modèles métier, le même accès aux données et le même moteur de sync. Les commandes, le stock et les clients restent cohérents entre appareils parce qu'ils parlent la même langue en dessous.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Le cerveau partagé de l'écosystème.",
        "capabilitiesIntro": "Core est l'endroit où les promesses de la plateforme — un grand livre, une identité, un moteur de sync — vivent réellement dans le code.",
        "capabilities": [
          {
            "title": "Modèles métier unifiés",
            "description": "Commandes, produits, clients, paiements, services, tables et fidélité partagent un schéma — les données ont le même sens partout."
          },
          {
            "title": "Couche repository",
            "description": "Accès aux données prêt à l'emploi pour commandes, stock, clients, paiements, services et tables — les apps font l'UI, pas la plomberie."
          },
          {
            "title": "Moteur de sync hors-ligne",
            "description": "Sync bidirectionnelle entre PocketBase local et Supabase avec file, gestion des conflits et reprise par point de contrôle."
          },
          {
            "title": "Découverte réseau auto",
            "description": "mDNS/Bonjour permet aux appareils compagnons de trouver le POS sur le LAN sans configuration manuelle."
          },
          {
            "title": "Provisioning multi-tenant",
            "description": "Onboarding d'appareils par licence, empreinte matérielle et configuration par tenant pour des déploiements hybrides isolés — serveurs locaux dédiés et espaces cloud dédiés, pas une base opérationnelle partagée."
          },
          {
            "title": "Mises à jour auto",
            "description": "Vérifiez, téléchargez et appliquez les mises à jour avec gestion de version — gardez les bornes à jour sereinement."
          },
          {
            "title": "Moteur de routage d'impression",
            "description": "Routez reçus et tickets cuisine vers la bonne imprimante ou le bon poste selon le produit — partagé par POS et KDS."
          },
          {
            "title": "Permissions par rôle",
            "description": "Définitions de permissions fines pour un contrôle d'accès cohérent entre caisse, manager et admin."
          },
          {
            "title": "Contexte IA métier",
            "description": "Des fournisseurs de contexte structurent les données commandes, clients et produits pour l'assistant IA in-app."
          },
          {
            "title": "Schémas d'import produit",
            "description": "Schémas d'import CSV déclaratifs et sinks PocketBase/Supabase pour le chargement de catalogues en masse."
          },
          {
            "title": "Journalisation d'erreurs",
            "description": "Capturez et conservez les erreurs applicatives dans la base locale pour le support et le diagnostic."
          }
        ],
        "workflows": {
          "eyebrow": "",
          "title": "",
          "intro": "",
          "groups": []
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "La couche de données connectée.",
        "integrations": [
          "PocketBase (source de vérité locale)",
          "Supabase (sync cloud & multi-sites)",
          "mDNS / Bonjour (découverte LAN)",
          "Routage d'impression ESC/POS"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "La fondation que chaque application hérite.",
        "ecosystem": [
          {
            "t": "Dans chaque application",
            "d": "ESTINAD POS, Waiter, KDS et Clinic lient Core — ils partagent modèles, sync et permissions par construction, pas par convention."
          },
          {
            "t": "Garde les données cohérentes",
            "d": "Un schéma unique sur l'écosystème : un client ou un paiement a le même sens au comptoir, en salle et à la cuisine."
          },
          {
            "t": "Pensé hors-ligne",
            "d": "PocketBase local est la source de vérité pendant le service ; la sync cloud est le backup et le pont multi-sites, pas une dépendance dure."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Un grand livre, par construction.",
        "tech": "Pensé hors-ligne : PocketBase local est la source de vérité pendant le service ; la sync cloud est le backup et le pont multi-sites, pas une dépendance dure.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des acheteurs techniques.",
        "faq": [
          {
            "q": "ESTINAD Core est-il un produit que j'achète ?",
            "a": "Non. Core est un paquet partagé dans la plateforme. Vous achetez une ligne produit, et chaque produit hérite des modèles, sync et permissions de Core."
          },
          {
            "q": "Comment la sync gère-t-elle une connexion instable ?",
            "a": "Le moteur de sync file les changements localement, gère les conflits et utilise une reprise par point de contrôle — les coupures ne deviennent jamais des transactions perdues."
          },
          {
            "q": "Core impose-t-il le contrôle d'accès ?",
            "a": "Oui. Les définitions de permissions et de rôles dans Core alimentent un contrôle d'accès cohérent dans chaque application qui le lie."
          }
        ],
        "ctaTitle": "Voyez la fondation sous chaque produit.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "ui": {
        "glyph": "UI",
        "name": "ESTINAD UI",
        "short": "UI",
        "category": "Paquet partagé",
        "status": "shipped",
        "oneLiner": "Le design system ESTINAD — une bibliothèque de composants style Linear pour un rendu cohérent, dense et clavier-friendly.",
        "positioning": "ESTINAD UI est le design system derrière chaque application de l'écosystème : une bibliothèque de composants style Linear pensée pour les longs services à la caisse et au back-office. Thèmes sombre et clair, un shell applicatif et des composants denses gardent les interfaces rapides et cohérentes entre POS, waiter et clinic.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Des interfaces pro qui ne se mettent pas en travers.",
        "capabilitiesIntro": "Des composants opinionnés pour les écrans qui comptent pendant un service — tableaux de bord, listes, formulaires et tables back-office à fort volume.",
        "capabilities": [
          {
            "title": "Thèmes sombre & clair",
            "description": "Thèmes clair et sombre prêts pour la production, palette zinc, typographie Inter et espacement cohérent — changez de mode sans redessiner."
          },
          {
            "title": "Shell applicatif",
            "description": "Navigation latérale, barre supérieure, zone à onglets et layout repliable — le cadre standard des applications desktop ESTINAD."
          },
          {
            "title": "Boutons & champs",
            "description": "Boutons et champs optimisés tactile et clavier pour la saisie rapide pendant le service."
          },
          {
            "title": "Cartes & surfaces",
            "description": "Cartes compactes et conteneurs pour tableaux de bord, réglages et vues détaillées sans élévation Material lourde."
          },
          {
            "title": "Tables & grilles",
            "description": "Tables triables et grilles de données pour listes de produits, clients, historique de service et back-office à fort volume."
          },
          {
            "title": "Barre de filtres",
            "description": "Chips, listes déroulantes et recherche composables pour les pages de liste — le pattern d'inventaire, clients et rapports."
          },
          {
            "title": "Modales & sheets",
            "description": "Dialogues et bottom sheets pour confirmations, éditions rapides et actions mobile sans casser le flux."
          },
          {
            "title": "États de page liste",
            "description": "États vide, chargement et erreur intégrés pour que chaque liste gère les cas limites de façon cohérente."
          },
          {
            "title": "Barre de sauvegarde",
            "description": "Une barre collante sauvegarder/annuler pour les formulaires — le staff sait toujours quand des modifications ne sont pas validées."
          },
          {
            "title": "Palette de commandes",
            "description": "Items de commande recherchables et infrastructure de palette alimentant le Ctrl+K d'ESTINAD POS."
          },
          {
            "title": "Assistants multi-étapes",
            "description": "Scaffolding de wizards pour les flux de configuration guidés comme l'import de produits."
          }
        ],
        "workflows": {
          "eyebrow": "",
          "title": "",
          "intro": "",
          "groups": []
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Où il est livré.",
        "integrations": [
          "ESTINAD POS (shell & composants complets)",
          "ESTINAD Waiter (écrans tactiles)",
          "ESTINAD KDS (tableau immersif)",
          "Flutter (la plateforme sur laquelle il est construit)"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Un rendu unique sur toutes les applications.",
        "ecosystem": [
          {
            "t": "Partagé par toutes",
            "d": "POS, Waiter, KDS et Clinic s'appuient sur ESTINAD UI — le staff qui change d'appareil retrouve les mêmes patterns partout."
          },
          {
            "t": "Réglé pour les services",
            "d": "Densité, raccourcis clavier et animations retenues sont pensés pour des heures de saisie rapide, pas pour la navigation occasionnelle."
          },
          {
            "t": "Anti-patterns par politique",
            "d": "Pas de menus hamburger ni d'ombres lourdes — des interfaces rapides et denses, plus proches de Linear ou Raycast que des apps Material classiques."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Dense par conception, rapide par défaut.",
        "tech": "Des anti-patterns opinionnés — pas de menus hamburger, pas d'ombres lourdes — gardent les interfaces rapides et denses, plus proches de Linear ou Raycast que des apps Material classiques.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des acheteurs techniques.",
        "faq": [
          {
            "q": "ESTINAD UI s'achète-t-il séparément ?",
            "a": "Non. C'est le design system partagé dans la plateforme. Chaque produit hérite de ses composants et de ses thèmes."
          },
          {
            "q": "Gère-t-il le clair et le sombre ?",
            "a": "Oui — les deux sont prêts pour la production, palette zinc cohérente et typographie Inter, et les écrans changent de mode sans redessiner."
          },
          {
            "q": "Optimisé tactile ou clavier ?",
            "a": "Les deux. Les composants sont réglés pour le tactile au comptoir et le clavier au back-office, avec la palette Ctrl+K intégrée."
          }
        ],
        "ctaTitle": "Voyez le langage d'interface de la plateforme.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "native": {
        "glyph": "NV",
        "name": "ESTINAD Native",
        "short": "Native",
        "category": "Paquet partagé",
        "status": "shipped",
        "oneLiner": "Une couche FFI native qui accélère les opérations Windows critiques d'ESTINAD POS — connexions plus rapides, sécurité renforcée.",
        "positioning": "ESTINAD Native est une bibliothèque FFI native qui accélère les opérations qui comptent sur une borne Windows : identité du device, cycle de vie de la base locale et gestion sécurisée des fichiers. L'utilisateur final gagne en vitesse de connexion et en fiabilité locale ; les développeurs disposent d'une couche de performance prête à l'emploi.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "La couche de performance sous le POS.",
        "capabilitiesIntro": "Du code natif pour les quelques opérations où l'écart de vitesse et de sécurité avec les approches shell compte vraiment.",
        "capabilities": [
          {
            "title": "Empreinte instantanée",
            "description": "Identifiez et liez chaque borne à sa licence en millisecondes au lieu de secondes — provisioning plus rapide, copies non autorisées bloquées."
          },
          {
            "title": "Démarrage base fiable",
            "description": "Démarrez et arrêtez le serveur PocketBase embarqué avec les Windows Job Objects — la base ne tourne jamais orpheline après la fermeture du POS."
          },
          {
            "title": "Dossiers de données sécurisés",
            "description": "Créez des dossiers locaux accessibles au seul utilisateur — les données sensibles ne sont pas exposées aux autres comptes de la machine."
          },
          {
            "title": "Copies vérifiées",
            "description": "Copiez les exécutables avec vérification de signature Authenticode avant lancement — réduit le risque de fichiers locaux altérés."
          },
          {
            "title": "Écritures atomiques",
            "description": "Enregistrez config et états atomiquement — un crash en cours d'écriture ne corrompt jamais la base ou les réglages."
          },
          {
            "title": "Parsing CSV haute vitesse",
            "description": "Tokenisation CSV native et empreinte de lignes accélèrent les imports en masse sur les gros catalogues."
          }
        ],
        "workflows": {
          "eyebrow": "",
          "title": "",
          "intro": "",
          "groups": []
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Où il se branche.",
        "integrations": [
          "ESTINAD POS (bornes Windows)",
          "PocketBase (cycle de vie base locale)",
          "ESTINAD Importer (parsing CSV natif)",
          "Windows FFI / DLL native"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "La couche vitesse et sécurité pour Windows.",
        "ecosystem": [
          {
            "t": "Dans ESTINAD POS",
            "d": "Native accélère l'empreinte, le cycle de vie de la base et la gestion des fichiers sur les bornes Windows — le matériel le plus courant dans les comptoirs algériens."
          },
          {
            "t": "Alimente l'importer",
            "d": "Quand la DLL native est présente, ESTINAD Importer bascule sur le chemin CSV natif rapide ; un repli pure Dart garde les imports ailleurs."
          },
          {
            "t": "Repli pure Dart",
            "d": "Sans la DLL native, l'écosystème bascule en pure Dart — les fonctions marchent, sans l'accélération."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Des vérifications de licence imperceptibles.",
        "tech": "L'empreinte matérielle tourne environ 100× plus vite que les approches shell legacy — ~5 ms contre ~500 ms — rendant les vérifications de licence imperceptibles à la connexion.",
        "notIncluded": {
          "title": "",
          "intro": "",
          "items": [],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des acheteurs techniques.",
        "faq": [
          {
            "q": "ESTINAD Native est-il requis pour le POS ?",
            "a": "Non. Sans la DLL native, la plateforme bascule en pure Dart — les fonctions marchent, sans l'accélération."
          },
          {
            "q": "Quelles plateformes en profitent le plus ?",
            "a": "Les bornes Windows : empreinte plus rapide à la connexion, cycle de vie PocketBase fiable et dossiers locaux sécurisés."
          },
          {
            "q": "Améliore-t-il aussi les imports ?",
            "a": "Oui. La tokenisation CSV native accélère les imports en masse sur les gros catalogues quand la DLL est présente."
          }
        ],
        "ctaTitle": "Voyez la couche de performance de la plateforme.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      },
      "importer": {
        "glyph": "IM",
        "name": "ESTINAD Importer",
        "short": "Importer",
        "category": "Paquet partagé",
        "status": "shipped",
        "oneLiner": "Un moteur d'import CSV haute performance — chargez tout un catalogue en un seul flux, sans figer la caisse.",
        "positioning": "ESTINAD Importer est le moteur d'import CSV de l'écosystème. Restaurants et retailers migrant depuis un tableur ou un autre POS peuvent charger tout un catalogue en un seul flux — validation, déduplication et progression en direct — pendant que la caisse continue de tourner.",
        "bundle": {
          "title": "Ce qui est dans le bundle",
          "appHeader": "Application",
          "roleHeader": "Rôle",
          "platformHeader": "Plateforme",
          "rows": []
        },
        "capabilitiesEyebrow": "Capacités",
        "capabilitiesTitle": "Gros catalogues, importés proprement.",
        "capabilitiesIntro": "Pensé pour le vrai moment de migration — des milliers de références depuis un tableur ou un POS legacy, chargées sans arrêter le comptoir.",
        "capabilities": [
          {
            "title": "Streaming des gros fichiers",
            "description": "Lisez des CSV de toute taille par passages fragmentés — la mémoire reste bornée même sur un million de lignes."
          },
          {
            "title": "Validation par schéma",
            "description": "Des schémas déclaratifs forcent les types, valident les champs et dédupliquent les lignes avant l'écriture en base."
          },
          {
            "title": "Progression en direct",
            "description": "Chaque job expose un flux de progression — lignes lues, débit et statut — visible dans l'écran d'import du POS."
          },
          {
            "title": "Imports annulables",
            "description": "Les jobs longs peuvent être annulés en cours sans laisser la base dans un état incohérent."
          },
          {
            "title": "Sink produit PocketBase",
            "description": "Les lignes validées s'écrivent directement dans le catalogue local — déjà câblé dans l'import produit d'ESTINAD POS."
          },
          {
            "title": "Parsing accéléré natif",
            "description": "Quand la DLL native est là, parsing et hachage prennent le chemin natif rapide ; le repli pure Dart marche partout ailleurs."
          },
          {
            "title": "Validation parallèle (option)",
            "description": "La validation multi-isolate s'active pour les schémas lourds — désactivée par défaut pour les imports POS courants."
          }
        ],
        "workflows": {
          "eyebrow": "Flux d'import",
          "title": "Du tableur au catalogue live en minutes.",
          "intro": "Un job guidé en flux — valider, dédupliquer, écrire — avec la progression visible du début à la fin.",
          "groups": [
            {
              "title": "Préparer",
              "steps": [
                "Exportez votre catalogue en CSV depuis un tableur ou un POS legacy",
                "Mappez les colonnes au schéma produit ESTINAD",
                "Le schéma déclaratif force les types et valide",
                "Les doublons sont signalés avant l'import"
              ]
            },
            {
              "title": "Importer",
              "steps": [
                "Le flux garde la mémoire bornée sur les gros fichiers",
                "Le flux de progression montre lignes lues et débit",
                "Le parsing natif accélère le job si disponible",
                "Annuler en cours sans corrompre les données"
              ]
            },
            {
              "title": "Passer live",
              "steps": [
                "Les lignes validées s'écrivent dans le catalogue PocketBase",
                "Les produits apparaissent immédiatement dans le POS",
                "La caisse continue de tourner",
                "Revue des lignes rejetées après le job"
              ]
            }
          ]
        },
        "integrationsEyebrow": "Intégrations",
        "integrationsTitle": "Où il se branche.",
        "integrations": [
          "ESTINAD POS (écran d'import produit)",
          "PocketBase (catalogue produit local)",
          "ESTINAD Native (parsing CSV rapide)",
          "Sources CSV / tableurs"
        ],
        "ecosystemEyebrow": "Place dans l'écosystème",
        "ecosystemTitle": "Le moteur de migration de la plateforme.",
        "ecosystem": [
          {
            "t": "Câblé dans le POS",
            "d": "L'écran d'import produit d'ESTINAD POS utilise Importer directement — nouvelles boutiques et changements de saison à un job près."
          },
          {
            "t": "Accéléré par Native",
            "d": "Quand la DLL native est présente, parsing et hachage prennent le chemin natif ; sinon un repli pure Dart garde les imports actifs."
          },
          {
            "t": "Sur les schémas Core",
            "d": "Les schémas CSV déclaratifs et les sinks PocketBase/Supabase viennent d'ESTINAD Core, pour des règles d'import cohérentes dans l'écosystème."
          }
        ],
        "techEyebrow": "Point technique",
        "techTitle": "Des centaines de milliers de lignes par seconde.",
        "tech": "Mesuré à environ 390 000 lignes par seconde en mode série sur le matériel de dev pour des schémas produit à 5 champs — les migrations de gros catalogues se font en secondes, pas en heures.",
        "notIncluded": {
          "title": "Sur la feuille de route",
          "intro": "Deux capacités d'Importer sont planifiées mais pas encore livrées.",
          "items": [
            "Sink en masse Supabase (SupabaseBulkSink, phase 4)",
            "Assistant ESTINAD Import Wizard dans ESTINAD UI (phase 3)"
          ],
          "ctaLabel": "",
          "ctaHref": ""
        },
        "faqEyebrow": "FAQ",
        "faqTitle": "Les premières questions des exploitants.",
        "faq": [
          {
            "q": "L'import va-t-il figer ma caisse ?",
            "a": "Non. Importer traite par passages fragmentés à mémoire bornée, le POS continue de servir pendant le chargement."
          },
          {
            "q": "Puis-je annuler un job en cours ?",
            "a": "Oui. Les jobs longs peuvent être annulés en cours sans laisser la base dans un état incohérent."
          },
          {
            "q": "Comment sont gérées les mauvaises lignes ?",
            "a": "Un schéma déclaratif valide les types et déduplique les lignes avant écriture, moins de mauvais enregistrements à nettoyer ensuite."
          }
        ],
        "ctaTitle": "Déplacez votre catalogue en un seul job.",
        "ctaPrimary": "Demander une démo →",
        "ctaSecondary": "Explorer la plateforme",
        "secondaryHref": "/platform"
      }
    },
    "roadmap": {
      "ecosystem-admin": {
        "name": "ESTINAD Ecosystem Admin",
        "status": "archived",
        "summary": "Une console web Next.js pour l'exploitation opérationnelle des tenants sur la plateforme hybride ESTINAD — onboarding des tenants, contrôle des licences et visibilité d'audit. Actuellement archivée et considérée comme outil interne, pas comme produit client."
      },
      "loyalty-portal": {
        "name": "ESTINAD Loyalty Portal",
        "status": "planned",
        "summary": "Un portail web mobile-first planifié où les clients consultent leurs points fidélité et leur historique depuis un QR code sur le reçu. Spécifié par un PRD uniquement — aucun code applicatif n'existe encore. Le gain et l'utilisation des points fonctionnent déjà dans ESTINAD POS."
      }
    }
  },
  "pricing": {
    "logicNote": "Les tarifs suivent le nombre de points de vente, pas le nombre de comptes. Chaque niveau tourne sur la même plateforme — vous ne la dépasserez jamais.",
    "includedTitle": "Inclus à tous les niveaux",
    "included": [
      "La plateforme ESTINAD OS complète en dessous",
      "Synchro tolérante au hors ligne et sauvegarde continue",
      "Accès par rôles et piste d'audit",
      "Reporting par site et consolidé"
    ],
    "payingTitle": "Ce pour quoi vous payez",
    "paying": [
      "Une plateforme qui tient quand ça compte",
      "Des chiffres qui concordent entre sites et produits",
      "Une voie claire pour ajouter sites et produits",
      "Un contrôle entreprise quand la croissance l'exige"
    ],
    "faqEyebrow": "FAQ tarifs",
    "faqTitle": "Comment fonctionnent les tarifs ESTINAD.",
    "faqs": [
      {
        "q": "Les tarifs sont-ils par site ou par organisation ?",
        "a": "La plupart des produits ESTINAD sont facturés par point de vente (ou site/clinique), mensuellement. ESTINAD Cloud est inclus avec toute offre multi-sites et propose des niveaux par organisation pour les opérateurs plus importants."
      },
      {
        "q": "Que se passe-t-il quand j'ajoute un point de vente ?",
        "a": "Vous ajoutez le site dans ESTINAD Cloud et il hérite de votre offre. La facturation s'ajuste par site au cycle suivant — sans re-platformer, sans nouveau contrat."
      },
      {
        "q": "Proposez-vous des contrats annuels ?",
        "a": "Oui. Les niveaux Entreprise sont annuels et incluent résidence, SSO et onboarding dédié. Les offres multi-sites peuvent être facturées mensuellement ou annuellement."
      },
      {
        "q": "Existe-t-il une version d'essai ?",
        "a": "Nous proposons des démos guidées et des pilotes cadrés plutôt que des inscriptions ouvertes, afin de caler la plateforme sur vos opérations avant tout engagement."
      }
    ],
    "tiers": {
      "retail": [
        {
          "name": "Boutique unique",
          "price": "4 900 DZD",
          "cadence": "/ mois · par boutique",
          "positioning": "Pour un commerce qui quitte des outils dispersés.",
          "features": [
            "1 boutique, caisses illimitées",
            "POS + ledger stock",
            "Matrice de variantes (taille / couleur)",
            "Rapports quotidiens",
            "Support e-mail"
          ],
          "cta": "Demander un devis",
          "emphasized": false
        },
        {
          "name": "Multi-boutiques",
          "price": "9 900 DZD",
          "cadence": "/ mois · par boutique",
          "positioning": "Pour les commerçants qui grandissent.",
          "features": [
            "Tout le niveau Boutique unique",
            "Transferts de stock entre boutiques",
            "Catalogue et prix centraux",
            "Reporting personnel et shifts",
            "Support prioritaire"
          ],
          "cta": "Demander un devis",
          "emphasized": true
        },
        {
          "name": "Entreprise",
          "price": "Sur mesure",
          "cadence": "contrat annuel",
          "positioning": "Pour les groupes qui ont besoin de contrôle et de résidence.",
          "features": [
            "Tout le niveau Multi-boutiques",
            "Options de contrôle organisationnel",
            "Contrôles de résidence et rétention",
            "SSO et exports d'audit",
            "Onboarding dédié"
          ],
          "cta": "Contacter le commercial",
          "emphasized": false
        }
      ]
    }
  },
  "solutions": {
    "index": {
      "eyebrow": "Solutions",
      "title": "Conçu pour la façon dont votre entreprise fonctionne réellement.",
      "intro": "ESTINAD rejoint chaque opérateur là où il en est — par secteur, par taille, par structure. Une plateforme, adaptée à votre réalité."
    },
    "items": {
      "retail": {
        "name": "Pour le Commerce",
        "audience": "Détaillants de prêt-à-porter et multi-catégories",
        "summary": "Arrêtez de réconcilier caisse, Excel et WhatsApp à la main. ESTINAD donne au commerce un registre sur tous les points de vente.",
        "painsLabel": "Ce qui est difficile aujourd'hui",
        "shiftsLabel": "Ce qui change avec ESTINAD",
        "pains": [
          "Un stock par variantes qui ne correspond jamais au rayon",
          "Aucune vue d'ensemble des points de vente",
          "Clôture lente, réconciliation de caisse manuelle",
          "Des remises et marges que personne ne peut auditer"
        ],
        "shifts": [
          "Un registre exact par variantes en temps réel",
          "Performance des sites et employés en une vue",
          "Clôture quotidienne propre avec signalements d'écarts",
          "Analyse des marges et remises à la demande"
        ],
        "relatedEyebrow": "Produits recommandés",
        "relatedTitle": "Les produits ESTINAD sur lesquels cette solution s'appuie.",
        "related": [
          "retail",
          "central"
        ]
      },
      "restaurants": {
        "name": "Pour la Restauration",
        "audience": "Opérateurs comptoir et service à table",
        "summary": "Remplacez tickets papier et caisse déconnectée par un flux calme, de la commande à la cuisine jusqu'à la clôture.",
        "painsLabel": "Ce qui est difficile aujourd'hui",
        "shiftsLabel": "Ce qui change avec ESTINAD",
        "pains": [
          "Tickets cuisine perdus ou mal routés",
          "Dérive de la carte entre sites",
          "Aucune visibilité sur le coût matière et les pertes",
          "Clôture de poste lente et error-prone"
        ],
        "shifts": [
          "Routage fiable des tickets au bon poste",
          "Contrôle central de la carte et des prix",
          "Coût par recette et suivi des pertes",
          "Clôture de poste rapide et réconciliée"
        ],
        "relatedEyebrow": "Produits recommandés",
        "relatedTitle": "Les produits ESTINAD sur lesquels cette solution s'appuie.",
        "related": [
          "restaurant",
          "central"
        ]
      },
      "clinics": {
        "name": "Pour les Cliniques",
        "audience": "Dirigeants et gestionnaires de cliniques",
        "summary": "Réunissez planning, dossiers et facturation dans un système discipliné et auditable, que votre personnel peut confiance.",
        "painsLabel": "Ce qui est difficile aujourd'hui",
        "shiftsLabel": "Ce qui change avec ESTINAD",
        "pains": [
          "Dossiers papier et historique manquant",
          "Praticiens et salles en double réservation",
          "Facturation fragmentée et suivi des impayés",
          "Aucun contrôle sur qui voit quoi"
        ],
        "shifts": [
          "Dossiers patients prêts pour la visite, d'une visite à l'autre",
          "Planning praticiens et salles sans conflits",
          "Facturation propre avec assurance et règlement patient",
          "Accès par rôles et piste d'audit complète"
        ],
        "relatedEyebrow": "Produits recommandés",
        "relatedTitle": "Les produits ESTINAD sur lesquels cette solution s'appuie.",
        "related": [
          "clinic",
          "central"
        ]
      },
      "smes": {
        "name": "Pour les PME",
        "audience": "Dirigeants de PME en Algérie",
        "summary": "De la discipline de grade entreprise sans la complexité entreprise. ESTINAD est le système sur lequel une PME sérieuse s'appuie.",
        "painsLabel": "Ce qui est difficile aujourd'hui",
        "shiftsLabel": "Ce qui change avec ESTINAD",
        "pains": [
          "Des outils qui ne se parlent pas",
          "Des dirigeants portant toute l'opération dans leur tête",
          "Un logiciel qui semble conçu pour quelqu'un d'autre",
          "Aucune voie claire pour ajouter sites ou produits"
        ],
        "shifts": [
          "Une plateforme sur les produits et points de vente",
          "Des tableaux de bord clairs qui remplacent la mémoire",
          "Conçu pour les opérations algériennes, prêt pour le MENA",
          "Ajouter un site ou un produit sans re-platformer"
        ],
        "relatedEyebrow": "Produits recommandés",
        "relatedTitle": "Les produits ESTINAD sur lesquels cette solution s'appuie.",
        "related": [
          "retail",
          "restaurant",
          "clinic",
          "central"
        ]
      },
      "multi-branch": {
        "name": "Pour les multi-points de vente",
        "audience": "Opérateurs gérant deux sites ou plus",
        "summary": "Gérez chaque site sur un registre, avec contrôle central, reporting consolidé et déploiements contrôlés.",
        "painsLabel": "Ce qui est difficile aujourd'hui",
        "shiftsLabel": "Ce qui change avec ESTINAD",
        "pains": [
          "Chaque site sur ses propres outils",
          "Aucune vue consolidée du parc",
          "Catalogue, carte ou prix incohérents",
          "Aucun moyen contrôlé d'ajouter des sites"
        ],
        "shifts": [
          "Chaque site sur une plateforme partagée",
          "Reporting consolidé sur toute l'organisation",
          "Contrôle central du catalogue, de la carte et des prix",
          "Ajouter des sites en minutes avec accès limité"
        ],
        "relatedEyebrow": "Produits recommandés",
        "relatedTitle": "Les produits ESTINAD sur lesquels cette solution s'appuie.",
        "related": [
          "central",
          "retail",
          "restaurant",
          "clinic"
        ]
      }
    }
  },
  "services": {
    "index": {
      "eyebrow": "Services",
      "title": "Logiciel sur mesure, sites web et écosystèmes — bâtis de bout en bout.",
      "intro": "ESTINAD est aussi une entreprise de livraison logicielle sur mesure. Quand un produit prêt ne suffit pas, nous concevons et bâtissons l'application, le site ou le système numérique complet dont votre entreprise a besoin — avec la même discipline d'ingénierie que nos produits.",
      "productsNoteEyebrow": "Produits vs. services",
      "productsNoteTitle": "Deux façons de travailler avec ESTINAD.",
      "productsNoteBody": "Adoptez un produit prêt de notre catalogue, ou commandez un build sur mesure. Beaucoup de clients font les deux — nos produits là où ils conviennent, et nous bâtissons ce qui leur est propre.",
      "ctaTitle": "Un projet en tête ?",
      "ctaBody": "Dites-nous ce que vous devez bâtir. Nous le cadrerons et proposerons la bonne voie.",
      "cta": "Discuter de votre projet →"
    },
    "items": {
      "custom-software": {
        "glyph": "CS",
        "name": "Développement logiciel sur mesure",
        "short": "Logiciel sur mesure",
        "oneLiner": "Des applications métier sur mesure bâties pour vos flux, vos utilisateurs et votre échelle.",
        "positioning": "Quand aucun produit prêt ne convient, ESTINAD conçoit et bâtis un logiciel sur mesure adapté à votre opération — des outils internes et tableaux de bord opérationnels aux applications métier complètes. Bâti avec la même discipline d'ingénierie que nos produits : stable, sécurisé et fait pour durer.",
        "forTitle": "Pour qui",
        "forHeader": "Pour les entreprises qui ont besoin de quelque chose qui n'existe pas encore.",
        "forList": [
          "Entreprises avec des flux qu'aucun produit du marché ne couvre",
          "Opérateurs qui ont dépassé les tableurs et les outils génériques",
          "Sociétés qui ont besoin d'un système adapté à leur façon de travailler"
        ],
        "capabilitiesTitle": "Ce que nous bâtissons",
        "capabilities": [
          "Applications métier internes et outils opérationnels",
          "Systèmes de gestion multi-sites et multi-rôles",
          "Flux, validations et circuits de documents sur mesure",
          "Tableaux de bord et reporting bâtis sur vos données réelles"
        ],
        "processEyebrow": "Comment nous livrons",
        "processTitle": "Du cahier des charges au support — une seule équipe responsable.",
        "process": [
          {
            "t": "Découverte & cahier des charges",
            "d": "Nous cartographions le problème, les utilisateurs et les contraintes — et écrivons un cahier des charges clair avant tout code."
          },
          {
            "t": "Architecture & conception",
            "d": "Nous concevons le modèle de données, les flux et l'interface — validés avec vous avant le build."
          },
          {
            "t": "Build & itération",
            "d": "Nous bâtissons en cycles courts et revus, pour voir un logiciel fonctionnel tôt et souvent."
          },
          {
            "t": "Déploiement & support",
            "d": "Nous livrons, formons votre équipe et restons — support et évolution du système après le lancement."
          }
        ],
        "techEyebrow": "Comment nous bâtissons",
        "techTitle": "De la discipline d'ingénierie, pas de l'improvisation.",
        "tech": [
          "Stacks modernes et maintenables, choisies pour le problème",
          "Sécurisé par conception — contrôle d'accès, audit et chiffrement",
          "Tolérant au hors ligne là où l'opération l'exige",
          "Documenté, versionné et bâti pour être transmis"
        ],
        "ctaTitle": "Dites-nous ce que vous devez bâtir."
      },
      "websites": {
        "glyph": "WB",
        "name": "Création de sites web",
        "short": "Sites web",
        "oneLiner": "Des sites web premium, rapides et multilingues — de la présence d'entreprise aux plateformes complexes.",
        "positioning": "ESTINAD conçoit et bâtis des sites web à la hauteur de l'entreprise derrière. De la présence d'entreprise à un site marketing multilingue ou une plateforme transactionnelle complexe, nous livrons rapide, propre et évolutif — en arabe, français et anglais avec un vrai RTL.",
        "forTitle": "Pour qui",
        "forHeader": "Pour les entreprises qui ont besoin d'un site web qui signifie du sérieux.",
        "forList": [
          "Sociétés qui ont besoin d'une présence web premium et professionnelle",
          "Marques qui exigent l'arabe, le français et l'anglais avec un vrai RTL",
          "Entreprises qui ont besoin de plus qu'un prospectus — une vraie plateforme"
        ],
        "capabilitiesTitle": "Ce que nous bâtissons",
        "capabilities": [
          "Sites d'entreprise et de marque",
          "Sites multilingues (AR / FR / EN) avec support RTL complet",
          "Catalogues, capture de leads et portails clients",
          "Rapides, orientés SEO et éditables par votre équipe"
        ],
        "processEyebrow": "Comment nous livrons",
        "processTitle": "Concevoir, bâtir et lancer — sans le désordre habituel.",
        "process": [
          {
            "t": "Stratégie & structure",
            "d": "Nous définissons le message, l'audience et l'architecture d'information avant le design."
          },
          {
            "t": "Design",
            "d": "Nous concevons une interface distinctive et premium — pas un template générique."
          },
          {
            "t": "Build",
            "d": "Nous bâtissons rapide, accessible, multilingue et facile à maintenir."
          },
          {
            "t": "Lancer & évoluer",
            "d": "Nous lançons, mesurons et gardons le site à jour au fil de la croissance."
          }
        ],
        "techEyebrow": "Comment nous bâtissons",
        "techTitle": "Moderne, rapide et maintenable.",
        "tech": [
          "Frameworks web modernes avec d'excellents core web vitals",
          "Activé CMS pour que votre équipe édite le contenu",
          "Multilingue et RTL natif, pas rajouté",
          "SEO, analytique et performance intégrés"
        ],
        "ctaTitle": "Un site web à bâtir ?"
      },
      "ecosystems": {
        "glyph": "EC",
        "name": "Écosystèmes numériques de bout en bout",
        "short": "Écosystèmes",
        "oneLiner": "Des systèmes numériques complets qui connectent produits, builds sur mesure et outils en un tout cohérent.",
        "positioning": "ESTINAD bâtis des écosystèmes numériques complets — le type de système où un produit, une application sur mesure, un site web et vos outils existants fonctionnent comme un seul. Nous connectons les briques, unifions les données et donnons à l'entreprise un système cohérent au lieu d'un patchwork. C'est là que notre double identité paie : nous pouvons à la fois utiliser nos produits et bâtir ce qui manque.",
        "forTitle": "Pour qui",
        "forHeader": "Pour les opérateurs qui ont besoin du système entier, pas d'une app.",
        "forList": [
          "Opérateurs multi-sites se consolidant sur un seul système",
          "Entreprises avec un mix de produits, d'outils sur mesure et de travail manuel",
          "Sociétés en pleine transformation numérique"
        ],
        "capabilitiesTitle": "Ce que nous bâtissons",
        "capabilities": [
          "Un système unifié sur sites, produits et builds sur mesure",
          "Une source de vérité pour les données de toute l'opération",
          "Intégrations avec paiements, comptabilité, livraison et plus",
          "Une plateforme que l'entreprise étend au lieu de remplacer"
        ],
        "processEyebrow": "Comment nous livrons",
        "processTitle": "Nous connectons les briques — et possédons le résultat.",
        "process": [
          {
            "t": "Cartographier le parc",
            "d": "Nous inventorions vos sites, outils, données et lacunes — et concevons le système cible."
          },
          {
            "t": "Connecter & unifier",
            "d": "Nous déployons les produits là où ils conviennent, bâtissons ce qui manque et intégrons le reste."
          },
          {
            "t": "Migrer & déployer",
            "d": "Nous déplaçons données et gens par étapes contrôlées — sans risque de big-bang."
          },
          {
            "t": "Opérer & grandir",
            "d": "Nous exploitons, surveillons et étendons l'écosystème au fil de la croissance."
          }
        ],
        "techEyebrow": "Comment nous bâtissons",
        "techTitle": "Un système, pas un patchwork.",
        "tech": [
          "Un modèle de données partagé sur produits et builds sur mesure",
          "Intégrations par API, webhooks et synchro programmée",
          "Accès par rôles couvrant tout l'écosystème",
          "Conçu pour la connectivité instable et les conditions réelles"
        ],
        "ctaTitle": "Plus qu'une app à bâtir ? Parlons systèmes."
      },
      "integrations": {
        "glyph": "IG",
        "name": "Intégrations",
        "short": "Intégrations",
        "oneLiner": "Connectez ESTINAD à vos outils existants — paiements, comptabilité, livraison et plus.",
        "positioning": "ESTINAD s'intègre aux outils que votre entreprise utilise déjà. Que vous adoptiez nos produits ou lanciez un build sur mesure, nous connectons paiements, comptabilité, agrégateurs de livraison, messagerie et reporting pour que votre logiciel fonctionne comme un seul système au lieu d'îlots isolés.",
        "forTitle": "Pour qui",
        "forHeader": "Pour les entreprises qui ont déjà des outils qui doivent se parler.",
        "forList": [
          "Opérateurs connectant la caisse à la comptabilité et aux paiements",
          "Entreprises routant les données vers la livraison et la messagerie",
          "Sociétés remplaçant l'export/import manuel par une vraie intégration"
        ],
        "capabilitiesTitle": "Ce que nous connectons",
        "capabilities": [
          "Terminaux de paiement et acquéreurs locaux",
          "Logiciels de comptabilité et de facturation",
          "Agrégateurs de livraison et outils logistiques",
          "WhatsApp, e-mail et pipelines de reporting"
        ],
        "processEyebrow": "Comment nous livrons",
        "processTitle": "Connecter, tester et maintenir.",
        "process": [
          {
            "t": "Auditer",
            "d": "Nous cartographions les outils que vous utilisez et les données qui devraient circuler entre eux."
          },
          {
            "t": "Bâtir",
            "d": "Nous bâtissons les intégrations avec des API documentées et une synchro robuste."
          },
          {
            "t": "Tester",
            "d": "Nous testons sur des données réelles et les cas limites avant la mise en production."
          },
          {
            "t": "Maintenir",
            "d": "Nous surveillons et maintenons les intégrations au fil de l'évolution des outils."
          }
        ],
        "techEyebrow": "Comment nous bâtissons",
        "techTitle": "Robuste, documenté et surveillé.",
        "tech": [
          "API REST et webhooks, versionnés et documentés",
          "Synchro programmée pour les outils sans API temps réel",
          "Gestion d'erreurs et retry pour ne rien perdre silencieusement",
          "Supervision pour le savoir avant vous"
        ],
        "ctaTitle": "Connectez vos outils en un seul système."
      },
      "consulting": {
        "glyph": "CO",
        "name": "Conseil & architecture",
        "short": "Conseil",
        "oneLiner": "Stratégie, architecture et feuille de route — avant de bâtir ou d'acheter.",
        "positioning": "ESTINAD aide les entreprises à prendre les bonnes décisions logicielles avant de dépenser. Nous auditons vos outils actuels, concevons l'architecture cible et recommandons une feuille de route build-vs-buy — pour que vous investissiez dans un logiciel adapté à votre opération et votre échelle, pas un logiciel que vous dépasserez ou abandonnerez.",
        "forTitle": "Pour qui",
        "forHeader": "Pour les dirigeants qui décident quoi bâtir, acheter ou remplacer.",
        "forList": [
          "Dirigeants et cadres planifiant un investissement logiciel",
          "Entreprises incertaines entre acheter un produit ou bâtir sur mesure",
          "Sociétés qui ont besoin d'une architecture et d'une feuille de route claires"
        ],
        "capabilitiesTitle": "Ce que nous livrons",
        "capabilities": [
          "Audit de l'état actuel des outils, données et flux",
          "Architecture cible et conception du système",
          "Recommandations build-vs-buy et feuille de route",
          "Aide à la sélection de produits et de prestataires"
        ],
        "processEyebrow": "Comment nous livrons",
        "processTitle": "De la réflexion claire avant des décisions coûteuses.",
        "process": [
          {
            "t": "Auditer",
            "d": "Nous étudions votre opération, vos outils et vos points de douleur en profondeur."
          },
          {
            "t": "Concevoir",
            "d": "Nous concevons l'architecture cible et le chemin pour y arriver."
          },
          {
            "t": "Recommander",
            "d": "Nous donnons une recommandation build-vs-buy claire et honnête."
          },
          {
            "t": "Planifier",
            "d": "Nous produisons une feuille de route par phases avec un périmètre et un coût réalistes."
          }
        ],
        "techEyebrow": "Comment nous bâtissons",
        "techTitle": "Une architecture qui résiste à la réalité.",
        "tech": [
          "Des conceptions qui tiennent compte de la connectivité, de l'échelle et du coût",
          "Sécurité et accès modélisés dès le départ",
          "Build-vs-buy ancré dans vos contraintes réelles",
          "Des feuilles de route réalisables, pas aspiratives"
        ],
        "ctaTitle": "Vous décidez quoi bâtir ou acheter ?"
      }
    }
  },
  "caseStudies": {
    "index": {
      "eyebrow": "Études de cas",
      "title": "Produits adoptés. Systèmes bâtis. Écosystèmes livrés.",
      "intro": "Travaux clients réels et adoption produit réelle — des applications sur mesure et des sites web aux écosystèmes numériques complets bâtis de bout en bout. ESTINAD est une entreprise logicielle avec des preuves des deux côtés.",
      "illustrativeLabel": "Illustrative example",
      "filterAll": "Tout",
      "filterIndustry": "Par secteur",
      "filterType": "Par type de projet",
      "industries": [
        "Commerce",
        "Restauration",
        "Pharmacies",
        "Cliniques",
        "PME",
        "Multi-sites"
      ],
      "types": [
        "Adoption produit",
        "Logiciel sur mesure",
        "Sites web",
        "Écosystèmes",
        "Transformation numérique"
      ],
      "ctaTitle": "Votre projet pourrait être le prochain.",
      "ctaBody": "Que vous vouliez un produit prêt ou un build sur mesure, nous voulons en entendre parler.",
      "cta": "Discuter de votre projet →"
    },
    "items": {
      "retail-six-branches": {
        "glyph": "R1",
        "title": "Détaillant de prêt-à-porter · 6 sites sur un seul registre",
        "industry": "Commerce",
        "type": "Adoption produit",
        "meta": "Commerce · −83 % temps de clôture",
        "excerpt": "Un détaillant multi-sites a abandonné trois installs de caisse et une réconciliation Excel nocturne en passant à ESTINAD Commerce et ESTINAD Cloud.",
        "contextTitle": "Le contexte",
        "context": "Un détaillant de prêt-à-porter opérant six sites tournait sur trois systèmes de caisse différents et une réconciliation Excel nocturne. Les stocks ne correspondaient jamais au rayon, le dirigeant portait l'opération dans sa tête, et la clôture quotidienne prenait 90 minutes.",
        "needTitle": "Le besoin",
        "need": "Un seul système fiable sur tous les sites — des stocks exacts par variantes, une caisse rapide et une clôture quotidienne propre sans réconciliation manuelle.",
        "approachTitle": "L'approche",
        "approach": "Nous avons déployé un serveur local auto-hébergé dédié sur chacun des six sites, avec ESTINAD Cloud comme couche de synchronisation et de gestion. Catalogue, prix et rôles ont été configurés pour une visibilité centrale ; chaque caisse a continué de fonctionner localement pendant les coupures.",
        "resultTitle": "Le résultat",
        "result": "La clôture quotidienne est passée de 90 à 15 minutes, les stocks par variantes sont devenus exacts en temps réel, et le dirigeant a gagné une vue unique de la performance des sites et des employés — la mémoire remplacée par un tableau de bord.",
        "outcomes": [
          {
            "metric": "−83 %",
            "label": "temps de clôture quotidienne"
          },
          {
            "metric": "6",
            "label": "sites sur un registre"
          },
          {
            "metric": "0",
            "label": "réconciliation Excel manuelle"
          }
        ],
        "relatedEyebrow": "Bâti sur",
        "related": [
          "retail",
          "central"
        ]
      },
      "restaurant-four-locations": {
        "glyph": "R2",
        "title": "Groupe de restauration · 4 sites, une carte",
        "industry": "Restauration",
        "type": "Adoption produit",
        "meta": "Restauration · 1 carte, 4 sites",
        "excerpt": "Une marque a unifié la carte et le coût matière sur quatre sites, remplaçant tickets papier et caisses déconnectées par un seul flux.",
        "contextTitle": "Le contexte",
        "context": "Un groupe de restauration rapide avec quatre sites tournait sur tickets cuisine papier et une caisse différente par site. La dérive de la carte entre sites rendait les marges impossibles à suivre et la cuisine sujette aux erreurs.",
        "needTitle": "Le besoin",
        "need": "Contrôle central de la carte et des prix, routage cuisine fiable, et une vraie visibilité sur le coût matière et les pertes sur tous les sites.",
        "approachTitle": "L'approche",
        "approach": "Nous avons déployé ESTINAD Restauration avec support d'affichage cuisine sur chaque site et une carte centrale gérée depuis ESTINAD Cloud. Le coût par recette a été configuré pour que la marge devienne une variable contrôlée, pas une estimation.",
        "resultTitle": "Le résultat",
        "result": "Une carte sur quatre sites, un routage fiable des tickets, et une visibilité de marge que le dirigeant n'avait jamais eue — avec une clôture de poste rapide et réconciliée.",
        "outcomes": [
          {
            "metric": "1 menu",
            "label": "sur tous les sites"
          },
          {
            "metric": "4",
            "label": "sites unifiés"
          },
          {
            "metric": "Live",
            "label": "visibilité du coût matière"
          }
        ],
        "relatedEyebrow": "Bâti sur",
        "related": [
          "restaurant",
          "central"
        ]
      },
      "custom-operations-sme": {
        "glyph": "C1",
        "title": "Plateforme opérationnelle sur mesure pour une PME multi-sites",
        "industry": "PME",
        "type": "Logiciel sur mesure",
        "meta": "Build sur mesure · livré de bout en bout",
        "excerpt": "Nous avons conçu et bâtis une plateforme opérationnelle sur mesure pour une PME multi-sites dont les besoins n'étaient couverts par aucun produit du marché — du cahier des charges au lancement au support.",
        "contextTitle": "Le contexte",
        "context": "Une PME multi-sites avait des flux opérationnels qu'aucun produit prêt du marché ne couvrait. Elle tournait sur un mix de tableurs, de messageries et d'un outil générique qui ne correspondait pas à sa façon de travailler.",
        "needTitle": "Le besoin",
        "need": "Un système opérationnel sur mesure bâti autour de ses vrais flux — multi-sites, multi-rôles, et fait pour durer au fil de la croissance.",
        "approachTitle": "L'approche",
        "approach": "Nous avons mené une découverte et un cahier des charges complets, conçu le modèle de données et les flux avec le client, puis bâtis la plateforme en cycles revus — déployée progressivement sur les sites avec formation et support.",
        "resultTitle": "Le résultat",
        "result": "Une plateforme opérationnelle sur mesure qui correspond exactement à l'entreprise, remplaçant un patchwork d'outils par un seul système responsable — et un partenaire resté après le lancement.",
        "outcomes": [
          {
            "metric": "De bout en bout",
            "label": "bâti & supporté"
          },
          {
            "metric": "1",
            "label": "système remplaçant plusieurs"
          },
          {
            "metric": "En cours",
            "label": "support & évolution"
          }
        ],
        "relatedEyebrow": "Services utilisés",
        "related": [
          "custom-software"
        ]
      },
      "pharmacy-network": {
        "glyph": "P1",
        "title": "Réseau de pharmacies · stocks et conformité",
        "industry": "Pharmacies",
        "type": "Adoption produit",
        "meta": "Pharmacie · stocks & conformité",
        "excerpt": "Un réseau de pharmacies a gagné des stocks exacts, le suivi des péremptions et des dossiers conformes sur tous les sites avec ESTINAD.",
        "contextTitle": "Le contexte",
        "context": "Un réseau de pharmacies en croissance luttait avec l'exactitude des stocks, le suivi des péremptions et la cohérence des dossiers entre sites — critiques pour la marge comme pour la conformité réglementaire.",
        "needTitle": "Le besoin",
        "need": "Des stocks exacts par site avec suivi des lots et péremptions, un accès contrôlé et des dossiers auditables sur le réseau.",
        "approachTitle": "L'approche",
        "approach": "Nous avons déployé ESTINAD avec le suivi des variantes et des lots configuré pour les stocks pharmaceutiques, l'accès par rôles pour le personnel, et un reporting central depuis ESTINAD Cloud.",
        "resultTitle": "Le résultat",
        "result": "Des stocks en temps réel exacts avec visibilité des péremptions, des dossiers conformes et auditables, et une vue consolidée sur le réseau — les sites restant en vie pendant les coupures.",
        "outcomes": [
          {
            "metric": "Live",
            "label": "suivi lots & péremptions"
          },
          {
            "metric": "Auditable",
            "label": "dossiers sur tous les sites"
          },
          {
            "metric": "1",
            "label": "registre pour le réseau"
          }
        ],
        "relatedEyebrow": "Bâti sur",
        "related": [
          "retail",
          "central"
        ]
      },
      "clinic-three-locations": {
        "glyph": "C2",
        "title": "Cabinet multi-cliniques · dossiers et facturation unifiés",
        "industry": "Cliniques",
        "type": "Adoption produit",
        "meta": "Clinique · 0 dossier perdu",
        "excerpt": "Un cabinet a numérisé planning, dossiers et facturation avec accès par rôles et résidence des données sensibles.",
        "contextTitle": "Le contexte",
        "context": "Un cabinet multi-cliniques tournait sur dossiers papier et facturation fragmentée. L'historique patient était dur à retrouver, les praticiens en double réservation, et les impayés difficiles à suivre.",
        "needTitle": "Le besoin",
        "need": "Des dossiers patients prêts pour la visite, un planning sans conflits, une facturation propre avec assurance et règlement patient, et un accès contrôlé aux données sensibles.",
        "approachTitle": "L'approche",
        "approach": "Nous avons déployé ESTINAD Clinique sur trois sites avec planning praticiens et salles, accès aux dossiers par rôles et piste d'audit complète — avec options de résidence pour les données sensibles.",
        "resultTitle": "Le résultat",
        "result": "Des dossiers patients complets d'une visite à l'autre, plus de double réservation, une facturation propre et zéro dossier papier perdu — avec un accès contrôlé et chaque modification journalisée.",
        "outcomes": [
          {
            "metric": "0",
            "label": "dossier papier perdu"
          },
          {
            "metric": "3",
            "label": "cliniques sur un système"
          },
          {
            "metric": "Audité",
            "label": "chaque modification de dossier"
          }
        ],
        "relatedEyebrow": "Bâti sur",
        "related": [
          "clinic",
          "central"
        ]
      },
      "brand-website-multilingual": {
        "glyph": "W1",
        "title": "Site web de marque multilingue pour une société régionale",
        "industry": "PME",
        "type": "Sites web",
        "meta": "Site web · AR / FR / EN · RTL",
        "excerpt": "Nous avons conçu et bâtis un site web d'entreprise trilingue premium avec un vrai RTL arabe — rapide, éditable et orienté SEO.",
        "contextTitle": "Le contexte",
        "context": "Une société régionale avait besoin d'une présence web à la hauteur de son sérieux — en arabe, français et anglais — que son équipe puisse maintenir sans un développeur à chaque modification.",
        "needTitle": "Le besoin",
        "need": "Un site web premium et multilingue avec un vrai RTL, de fortes performances, et un CMS que son équipe puisse éditer.",
        "approachTitle": "L'approche",
        "approach": "Nous avons mené une phase de stratégie et d'architecture d'information, conçu une interface distinctive, et bâtis le site avec un CMS, un vrai RTL arabe, et SEO et analytique intégrés.",
        "resultTitle": "Le résultat",
        "result": "Un site web trilingue premium et rapide que l'équipe édite elle-même — présentant la société avec crédibilité sur les marchés régionaux et internationaux.",
        "outcomes": [
          {
            "metric": "3",
            "label": "langues, RTL complet"
          },
          {
            "metric": "CMS",
            "label": "éditable par l'équipe"
          },
          {
            "metric": "Rapide",
            "label": "core web vitals"
          }
        ],
        "relatedEyebrow": "Services utilisés",
        "related": [
          "websites"
        ]
      },
      "ecosystem-mixed-group": {
        "glyph": "E1",
        "title": "Groupe mixte · écosystème commerce + restauration",
        "industry": "Multi-sites",
        "type": "Écosystèmes",
        "meta": "Écosystème · une plateforme, deux marques",
        "excerpt": "Un opérateur gérant des marques commerce et restauration s'est consolidé sur ESTINAD avec un reporting consolidé par entité via la synchronisation cloud.",
        "contextTitle": "Le contexte",
        "context": "Un opérateur gérait une marque commerce et une marque restauration sur des systèmes séparés, sans vue consolidée du parc et des données incohérentes entre entités.",
        "needTitle": "Le besoin",
        "need": "Un système cohérent couvrant deux marques et plusieurs sites — avec un reporting consolidé et un contrôle central.",
        "approachTitle": "L'approche",
        "approach": "Nous avons déployé ESTINAD Commerce et ESTINAD Restauration avec des serveurs locaux dédiés à chaque site, synchronisé les données sélectionnées vers ESTINAD Cloud, unifié les entités et rôles, et connecté la comptabilité pour une visibilité cohérente — chaque site restant sa propre source de vérité opérationnelle.",
        "resultTitle": "Le résultat",
        "result": "Deux marques sur une plateforme, un reporting exécutif consolidé, et un système que le groupe étend au lieu de remplacer — un véritable écosystème de bout en bout.",
        "outcomes": [
          {
            "metric": "1",
            "label": "plateforme, deux marques"
          },
          {
            "metric": "Consolidé",
            "label": "reporting de groupe"
          },
          {
            "metric": "Évolutif",
            "label": "ajouter marques & sites"
          }
        ],
        "relatedEyebrow": "Bâti sur",
        "related": [
          "central",
          "retail",
          "restaurant"
        ]
      }
    }
  },
  "resources": {
    "index": {
      "eyebrow": "Ressources",
      "title": "Stratégie, guides pratiques et preuves.",
      "intro": "Tout ce que nous publions sur la gestion d'entreprises opérationnelles sur une plateforme disciplinée.",
      "nav": [
        {
          "label": "Blog",
          "desc": "Stratégie et réflexion produit."
        },
        {
          "label": "Guides",
          "desc": "Guides pratiques pour les opérateurs."
        },
        {
          "label": "Documentation",
          "desc": "Installation, API et opérations."
        },
        {
          "label": "FAQ",
          "desc": "Réponses aux questions courantes."
        }
      ]
    },
    "sidebar": {
      "title": "Ressources",
      "ctaTitle": "Voyez-le sur vos opérations",
      "ctaBody": "Une démonstration adaptée à votre entreprise.",
      "cta": "Demander une démo →"
    },
    "blog": {
      "eyebrow": "Ressources / Blog",
      "title": "Stratégie et réflexion produit.",
      "intro": "Comment nous concevons l'infrastructure pour les entreprises opérationnelles — et ce que cela signifie pour ceux qui les dirigent.",
      "items": [
        {
          "title": "Pourquoi une caisse n'est pas un système d'exploitation",
          "meta": "Stratégie · 6 min",
          "excerpt": "La différence entre vendre à un comptoir et gérer une entreprise sur un registre — et pourquoi ça compte quand vous ajoutez des sites.",
          "tag": "Stratégie"
        },
        {
          "title": "Concevoir pour une connectivité instable",
          "meta": "Ingénierie · 8 min",
          "excerpt": "Comment le moteur de synchro d'ESTINAD garde les sites en vie hors ligne et se réconcilie proprement au retour de la connexion.",
          "tag": "Ingénierie"
        },
        {
          "title": "Le principe du registre unique",
          "meta": "Produit · 5 min",
          "excerpt": "Pourquoi chaque produit alimente un registre unique et fiable — et le coût opérationnel de vivre sans.",
          "tag": "Produit"
        },
        {
          "title": "De l'Algérie au MENA : construire pour la région",
          "meta": "Vision · 7 min",
          "excerpt": "Ce que signifie construire un logiciel de grade infrastructure d'abord pour les opérateurs algériens, puis pour la région.",
          "tag": "Vision"
        },
        {
          "title": "La marge est un système, pas un chiffre",
          "meta": "Opérations · 6 min",
          "excerpt": "Comment une discipline des stocks et du coût matière transforme la marge d'une estimation en variable contrôlé.",
          "tag": "Opérations"
        },
        {
          "title": "Ce que veulent vraiment les acheteurs entreprise",
          "meta": "Vente · 5 min",
          "excerpt": "Contrôle d'accès, audit, résidence et SSO — les contrôles qui signalent la maturité avant toute présentation.",
          "tag": "Entreprise"
        }
      ]
    },
    "guides": {
      "eyebrow": "Ressources / Guides",
      "title": "Guides pratiques pour opérateurs.",
      "intro": "Des guides pas à pas pour faire passer votre entreprise sur une plateforme disciplinée — par secteur et par étape.",
      "items": [
        {
          "title": "Migrer un commerce sur un seul registre",
          "meta": "Commerce · 12 min",
          "excerpt": "Un guide pas à pas pour consolider caisse, stocks et reporting sur plusieurs sites.",
          "tag": "Commerce"
        },
        {
          "title": "Mettre en route un restaurant sur ESTINAD",
          "meta": "Restauration · 10 min",
          "excerpt": "De la carte au routage cuisine et à la clôture — un plan de déploiement calme pour les restaurateurs.",
          "tag": "Restauration"
        },
        {
          "title": "Numériser une clinique sans perturber les soins",
          "meta": "Clinique · 11 min",
          "excerpt": "Un déploiement planning, dossiers et facturation qui garde l'accueil calme et les praticiens concentrés.",
          "tag": "Clinique"
        },
        {
          "title": "Ajouter un second site de la bonne façon",
          "meta": "Multi-sites · 9 min",
          "excerpt": "Comment étendre un site unique à plusieurs sites sans re-platformer.",
          "tag": "Multi-sites"
        },
        {
          "title": "Planifier la connectivité pour les sites algériens",
          "meta": "Opérations · 8 min",
          "excerpt": "Choisir cloud, on-premise ou hybride par site — selon les conditions locales réelles.",
          "tag": "Déploiement"
        }
      ]
    },
    "caseStudies": {
      "eyebrow": "Ressources / Études de cas",
      "title": "Des opérateurs qui ont arrêté de réconcilier et se sont mis à gérer.",
      "intro": "Des résultats illustratifs du type d'entreprises pour lesquelles ESTINAD est conçu. Tous suivent le même schéma : consolider, automatiser, puis grandir.",
      "cta": "Demander une démo →",
      "items": [
        {
          "title": "Détaillant de prêt-à-porter · 6 sites",
          "meta": "Commerce · −83 % temps de clôture",
          "excerpt": "Un détaillant multi-sites a abandonné trois installs de caisse et une réconciliation Excel nocturne en passant à ESTINAD Commerce et ESTINAD Cloud.",
          "tag": "Commerce"
        },
        {
          "title": "Groupe de restauration · 4 sites",
          "meta": "Restauration · 1 carte, 4 sites",
          "excerpt": "Une marque a unifié la carte et le coût matière sur quatre sites, remplaçant tickets papier et caisse déconnectée par un seul flux.",
          "tag": "Restauration"
        },
        {
          "title": "Cabinet multi-cliniques · 3 sites",
          "meta": "Clinique · 0 dossier perdu",
          "excerpt": "Un cabinet a numérisé planning, dossiers et facturation avec accès par rôles et résidence des données sensibles.",
          "tag": "Clinique"
        },
        {
          "title": "Groupe mixte · commerce + restauration",
          "meta": "Multi-marques · une plateforme",
          "excerpt": "Un opérateur gérant des marques commerce et restauration s'est consolidé sur ESTINAD Cloud avec un reporting consolidé par entité.",
          "tag": "Multi-marques"
        }
      ]
    },
    "documentation": {
      "eyebrow": "Ressources / Documentation",
      "title": "Installation, opérations et API.",
      "intro": "Tout ce qu'il faut pour mettre ESTINAD en route, le faire tourner au quotidien et l'intégrer au reste de votre stack.",
      "sections": [
        {
          "title": "Premiers pas",
          "items": [
            "Configuration du compte et de l'organisation",
            "Ajouter votre premier site",
            "Inviter des utilisateurs et attribuer des rôles",
            "Connecter le matériel (imprimantes, lecteurs, terminaux)"
          ]
        },
        {
          "title": "Produits",
          "items": [
            "Configuration d'ESTINAD Commerce",
            "Configuration d'ESTINAD Restauration",
            "Configuration d'ESTINAD Clinique",
            "Contrôle organisationnel ESTINAD Cloud"
          ]
        },
        {
          "title": "Opérations",
          "items": [
            "Mode hors ligne et synchro",
            "Sauvegarde et restauration",
            "Piste d'audit et exports",
            "Résidence et rétention"
          ]
        },
        {
          "title": "Développeurs",
          "items": [
            "Référence API REST",
            "Webhooks",
            "Formats d'export de données",
            "Configuration SSO"
          ]
        }
      ],
      "apiTag": "API",
      "apiLine": "REST + webhooks · stable, versionné, documenté.",
      "readApi": "Lire la référence API →"
    },
    "faq": {
      "eyebrow": "Ressources / FAQ",
      "title": "Réponses aux questions courantes.",
      "intro": "Les questions que se posent les dirigeants avant de demander une démo.",
      "groups": [
        {
          "title": "Général",
          "faqs": [
            {
              "q": "ESTINAD est-il juste une caisse ?",
              "a": "Non. ESTINAD est un système d'exploitation métier partagé. La caisse est une fonctionnalité au sein de produits verticaux (Commerce, Restauration, Clinique) qui tournent tous sur la plateforme ESTINAD OS."
            },
            {
              "q": "Où ESTINAD est-il disponible ?",
              "a": "ESTINAD est conçu en Algérie et pensé pour le MENA et les marchés mondiaux. Les options de déploiement prennent en charge la connectivité locale et les exigences de résidence des données."
            },
            {
              "q": "Ai-je besoin des quatre produits ?",
              "a": "Non. Commencez par le produit adapté à votre activité. Ajoutez-en d'autres en grandissant — ils partagent une plateforme, donc pas de re-platforming."
            }
          ]
        },
        {
          "title": "Fiabilité",
          "faqs": [
            {
              "q": "Que se passe-t-il quand internet tombe ?",
              "a": "Le serveur du site continue de prendre en charge les flux locaux. Les données sélectionnées se synchronisent vers le cloud au retour de la connexion."
            },
            {
              "q": "Mes données sont-elles sauvegardées ?",
              "a": "Oui. ESTINAD Cloud assure une sauvegarde chiffrée continue avec restauration à un instant t sur tous les produits."
            }
          ]
        },
        {
          "title": "Tarifs & déploiement",
          "faqs": [
            {
              "q": "Comment sont structurés les tarifs ?",
              "a": "Chaque produit a ses propres tarifs, généralement par site, par clinique ou par point de vente. ESTINAD Cloud est inclus avec les offres multi-sites. Des conditions entreprise existent."
            },
            {
              "q": "Quelle vitesse pour être opérationnel ?",
              "a": "Un site standard est opérationnel en une journée. Les déploiements multi-sites se font par étapes avec accès contrôlé pour limiter le risque."
            }
          ]
        }
      ],
      "stillTitle": "D'autres questions ?",
      "stillBody": "Nous calerons la plateforme sur votre entreprise et répondrons en contexte.",
      "cta": "Demander une démo →"
    }
  },
  "partners": {
    "eyebrow": "Partners",
    "title": "Build recurring business with ESTINAD.",
    "intro": "Join a program for companies that sell, deploy, support, or integrate business software for restaurants, retail businesses, clinics, and multi-location organizations.",
    "earlyNote": "We are building our founding partner network. Selected partners receive early access to enablement and direct collaboration. Partner terms are agreed based on role, territory, and customer segment.",
    "cta": "Apply to partner",
    "applyHref": "/partners/apply",
    "tracks": {
      "referral": {
        "t": "Referral partners",
        "d": "Introduce qualified operators to ESTINAD.",
        "who": "Advisors and local business networks.",
        "does": "Make introductions and support discovery.",
        "provides": "Sales material and direct collaboration.",
        "revenue": "Referral terms agreed per opportunity.",
        "training": "Product overview and sales enablement.",
        "cta": "Explore referrals"
      },
      "resellers": {
        "t": "Resellers",
        "d": "Sell ESTINAD in your market.",
        "who": "Software and hardware resellers.",
        "does": "Develop opportunities and manage customer relationships.",
        "provides": "Enablement, materials, and implementation coordination.",
        "revenue": "Commercial terms agreed by role and territory.",
        "training": "Sales and product enablement.",
        "cta": "Explore resellers"
      },
      "implementers": {
        "t": "Founding implementer track",
        "d": "Deploy, configure, train, and support customer teams.",
        "who": "Implementation and IT service companies.",
        "does": "Deliver local rollout and customer support.",
        "provides": "Rollout guidance and technical collaboration.",
        "revenue": "Implementation and support terms agreed by scope.",
        "training": "Implementation partnership enablement.",
        "cta": "Explore implementers"
      },
      "technology": {
        "t": "Technology partners",
        "d": "Connect complementary tools and services.",
        "who": "Payment, accounting, delivery, and technology providers.",
        "does": "Build and maintain useful integrations.",
        "provides": "Integration collaboration and product context.",
        "revenue": "Terms agreed per integration and go-to-market model.",
        "training": "Technical and product collaboration.",
        "cta": "Explore technology partners"
      }
    },
    "howEyebrow": "How partnerships work",
    "howTitle": "Choose a role. Build a shared plan.",
    "howIntro": "We define customer segment, territory, enablement, delivery responsibilities, and commercial terms together.",
    "applyCta": "Apply to partner",
    "apply": {
      "eyebrow": "Partner application",
      "title": "Tell us how you work with operational businesses.",
      "intro": "We review applications for fit, market focus, and delivery capability.",
      "form": {
        "name": "Name",
        "company": "Company",
        "email": "Email",
        "phone": "Phone",
        "typeLabel": "Partner type",
        "types": [
          "Referral partner",
          "Reseller",
          "Implementer",
          "Technology partner"
        ],
        "territory": "Territory",
        "segment": "Customer segment",
        "message": "Tell us about your business",
        "submit": "Apply to partner",
        "sending": "Sending…",
        "sentTitle": "Application received",
        "sentBody": "Thank you. We will review your application and respond.",
        "privacyNote": "By submitting, you agree to our",
        "privacyLink": "privacy policy",
        "consentLabel": "I agree to the privacy policy."
      }
    },
    "sub": {}
  },
  "company": {
    "index": {
      "eyebrow": "Société",
      "title": "Une entreprise logicielle avec des produits et une livraison sur mesure.",
      "intro": "ESTINAD crée des produits logiciels prêts et livre des logiciels sur mesure, des sites web et des écosystèmes complets pour les clients — en démarrant en Algérie, pensée pour le MENA et les marchés mondiaux.",
      "nav": [
        {
          "label": "À propos",
          "desc": "Qui nous sommes et ce que nous bâtissons."
        },
        {
          "label": "Vision",
          "desc": "Où ESTINAD se dirige."
        },
        {
          "label": "Carrières",
          "desc": "Bâtir des logiciels pour les opérateurs."
        },
        {
          "label": "Contact",
          "desc": "Parler à l'équipe."
        }
      ]
    },
    "about": {
      "eyebrow": "Société / À propos",
      "title": "Une entreprise logicielle — produits sur le marché, builds sur mesure pour les clients.",
      "intro": "ESTINAD existe parce que les entreprises qui font tourner l'économie réelle méritent un logiciel aussi sérieux qu'elles. Nous bâtissons des produits prêts qu'elles peuvent adopter aujourd'hui, et nous bâtissons des systèmes sur mesure pour celles qui ont besoin de quelque chose qui n'existe pas encore.",
      "beliefsEyebrow": "Ce en quoi nous croyons",
      "beliefsTitle": "Le logiciel doit être une fondation, pas une corvée.",
      "beliefs": [
        "La plupart des entreprises opérationnelles de notre région vivent sur un patchwork : une caisse, un tableur, une messagerie et la mémoire du dirigeant. Chaque outil va bien seul. Ensemble, ils font perdre du temps, de la marge et de la confiance.",
        "ESTINAD est l'inverse du patchwork. Nous vendons des produits prêts bâtis sur une plateforme disciplinée — et quand un produit ne suffit pas, nous bâtissons le système sur mesure dont l'entreprise a réellement besoin. Une entreprise, les deux côtés, la même discipline d'ingénierie.",
        "Nous la bâtissons de grade infrastructure parce que les entreprises qui en dépendent ne peuvent pas se permettre qu'elle soit brillante. Elle doit être stable, précise et durable."
      ],
      "stats": [
        {
          "value": "2",
          "label": "Façons de travailler : produits & sur mesure"
        },
        {
          "value": "5+",
          "label": "Produits prêts sur le marché"
        },
        {
          "value": "Algérie → MENA",
          "label": "Conçu local, pensé pour passer à l'échelle"
        },
        {
          "value": "Produits · Sur mesure · Écosystèmes",
          "label": "Capacité logicielle complète"
        }
      ],
      "principlesEyebrow": "Comment nous construisons",
      "principlesTitle": "Des principes qui tiennent à un service chargé.",
      "principles": [
        {
          "t": "La stabilité d'abord",
          "d": "Si ça cède quand ça compte, rien d'autre ne compte."
        },
        {
          "t": "Une source de vérité",
          "d": "Un registre, une identité, une synchro — partout."
        },
        {
          "t": "Conditions réelles",
          "d": "Concevoir pour la connectivité instable, pas pour les salles idéales."
        },
        {
          "t": "Long terme",
          "d": "Conçu pour être le système sur lequel une entreprise grandit des années."
        }
      ],
      "cta": "Lire notre vision →"
    },
    "vision": {
      "eyebrow": "Société / Vision",
      "title": "Un système d'exploitation métier qui définit une catégorie.",
      "intro": "Nous bâtissons la plateforme sur laquelle les entreprises opérationnelles s'appuient durablement — en commençant là où nous comprenons le mieux les conditions, et en passant à l'échelle sur le mérite.",
      "trajectoryEyebrow": "La trajectoire",
      "trajectoryTitle": "Profondeur locale, puis régionale, puis mondiale.",
      "phases": [
        {
          "n": "01",
          "t": "L'Algérie d'abord",
          "d": "Gagner la confiance des PME opérationnelles en Algérie — commerce, restauration et cliniques sur une plateforme conçue pour les conditions locales."
        },
        {
          "n": "02",
          "t": "Le MENA ensuite",
          "d": "Étendre la plateforme dans la région, avec résidence, localisation et réseaux de partenaires adaptés à chaque marché."
        },
        {
          "n": "03",
          "t": "Standard mondial",
          "d": "Devenir un système d'exploitation métier qui définit une catégorie — un logiciel de grade infrastructure que les opérateurs choisissent partout sur le mérite."
        }
      ],
      "truthEyebrow": "Ce que nous voulons voir vrai",
      "truthTitle": "Le système sur lequel les entreprises s'appuient, pas dont elles fuient.",
      "truths": [
        "Quand un opérateur ajoute un site, une marque ou une nouvelle activité, la réponse ne doit jamais être de re-platformer. Ce doit être d'activer un autre produit sur la même fondation.",
        "Quand une entreprise évalue ESTINAD, les contrôles dont elle a besoin — accès, audit, résidence, SSO — doivent déjà être là, parce que nous les avons bâtis d'abord pour les opérateurs qui en avaient besoin.",
        "Et quand la connexion tombe sur un site chargé, l'entreprise doit continuer — parce que nous avons conçu pour cela avant toute autre chose."
      ],
      "cta": "Demander une démo →"
    },
    "partners": {
      "eyebrow": "Société / Partenaires",
      "title": "Bâtissez une pratique sur une plateforme conçue pour durer.",
      "intro": "ESTINAD grandit grâce à des partenaires qui connaissent leurs marchés. Revendre, implémenter ou intégrer — sur une infrastructure qui tient.",
      "cta": "Devenir partenaire →",
      "tracks": [
        {
          "t": "Revendeurs",
          "d": "Apportez ESTINAD aux opérateurs de votre marché — avec des marges, de l'enablement et une relation co-détenue.",
          "points": [
            "Partage de revenu sur chaque site",
            "Enablement commercial et supports",
            "Prospection co-brandée",
            "Options de territoire protégé"
          ]
        },
        {
          "t": "Intégrateurs",
          "d": "Mettez ESTINAD en place pour vos clients — matériel, réseau, déploiement et support sur le terrain.",
          "points": [
            "Parcours d'implémentation certifié",
            "Guides de déploiement",
            "Support technique prioritaire",
            "Revenus services récurrents"
          ]
        },
        {
          "t": "Partenaires technologiques",
          "d": "Intégrez la plateforme ESTINAD — paiements, livraison, comptabilité et au-delà.",
          "points": [
            "API REST documentée et webhooks",
            "Co-marketing pour les intégrations live",
            "Accès sandbox",
            "Contribution à la roadmap commune"
          ]
        }
      ],
      "howEyebrow": "Comment fonctionnent les partenariats",
      "howTitle": "Accompagnés, pas abandonnés.",
      "howIntro": "Nous investissons dans les partenaires qui investissent dans la plateforme — avec enablement, support et une relation qui dure au-delà de la première affaire.",
      "applyCta": "Postuler comme partenaire →"
    },
    "careers": {
      "eyebrow": "Société / Carrières",
      "title": "Bâtissez la plateforme dont dépendent les opérateurs.",
      "intro": "Nous recrutons pour le jugement, la retenue et un biais pour ce qui dure. Si vous préférez bâtir de l'infrastructure plutôt que courir après les modes, c'est ici.",
      "cta": "Voir les postes ouverts ↓",
      "howEyebrow": "Comment nous travaillons",
      "howTitle": "La stabilité est une fonctionnalité. Le goût aussi.",
      "how": [
        "Nous construisons pour les conditions réelles des opérateurs, pas pour les salles de démo. Cela signifie concevoir pour la connectivité instable, des marges réelles et des gens qui ne peuvent pas se payer un logiciel qui cède.",
        "Nous avançons avec discipline : des équipes petites et senior, des responsabilités claires, peu de réunions, des décisions durables.",
        "Nous sommes basés en Algérie et recrutons dans la région au fur et à mesure de notre croissance."
      ],
      "rolesEyebrow": "Postes ouverts",
      "rolesTitle": "Où nous recrutons.",
      "roles": [
        {
          "role": "Ingénieur plateforme (synchro & registre)",
          "loc": "Algérie · Remote-friendly",
          "team": "Ingénierie"
        },
        {
          "role": "Ingénieur produit — Commerce & Restauration",
          "loc": "Algérie · Remote-friendly",
          "team": "Ingénierie"
        },
        {
          "role": "Designer produit, systèmes & flux",
          "loc": "Algérie · Hybride",
          "team": "Produit"
        },
        {
          "role": "Responsable d'implémentation",
          "loc": "Algérie · Terrain",
          "team": "Go-to-market"
        },
        {
          "role": "Manager partenaires, MENA",
          "loc": "Remote · MENA",
          "team": "Go-to-market"
        }
      ],
      "applyCta": "Postuler ou se présenter →"
    },
    "contact": {
      "eyebrow": "Société / Contact",
      "title": "Parler à l'équipe.",
      "intro": "Que vous vouliez une démo, un partenariat ou juste comprendre la plateforme — nous lisons tout et répondons sous un jour ouvré.",
      "directTitle": "Direct",
      "emailLabel": "E-mail",
      "email": "hello@estinad.com",
      "basedLabel": "Basés en",
      "based": "Algérie · au service du MENA et du monde",
      "responseLabel": "Réponse",
      "response": "Sous un jour ouvré",
      "form": {
        "name": "Nom",
        "company": "Société",
        "email": "E-mail",
        "phone": "Téléphone",
        "reasonLabel": "Motif",
        "reasons": [
          "Démo",
          "Commercial",
          "Partenariat",
          "Support",
          "Carrières",
          "Autre"
        ],
        "messageLabel": "Message",
        "messagePlaceholder": "Comment pouvons-nous aider ?",
        "submit": "Envoyer le message →",
        "sending": "Envoi…",
        "sentTitle": "Message reçu",
        "sentBody": "Merci. Nous répondrons sous un jour ouvré.",
        "privacyNote": "En soumettant, vous acceptez notre",
        "privacyLink": "politique de confidentialité"
      }
    }
  },
  "demo": {
    "eyebrow": "Demander une démo",
    "title": "Voyez ESTINAD sur vos opérations.",
    "intro": "Parlez-nous de votre entreprise. Nous cartographierons vos points de vente, produits et flux sur la plateforme — et vous montrerons ce qui compte le plus pour vous.",
    "whatTitle": "Ce que vous obtenez",
    "what": [
      "Une démonstration adaptée à votre secteur et votre nombre de sites",
      "Un plan de déploiement réaliste pour votre connectivité",
      "Des tarifs dimensionnés à votre échelle réelle",
      "Une voie claire de vos outils actuels vers une plateforme"
    ],
    "preferTitle": "Préférez parler ?",
    "preferBody": "Contactez l'équipe directement à",
    "email": "hello@estinad.com",
    "form": {
      "name": "Nom complet",
      "business": "Nom de l'entreprise",
      "email": "E-mail",
      "phone": "Téléphone",
      "sectorLabel": "Secteur",
      "sectors": [
        "Commerce",
        "Restauration",
        "Clinique",
        "Multi-sites",
        "Autre"
      ],
      "branches": "Nombre de points de vente",
      "currentTools": "Outils actuels",
      "messageLabel": "Que voulez-vous résoudre ?",
      "messagePlaceholder": "Dites-nous ce qui est le plus dur à gérer aujourd'hui.",
      "submit": "Demander une démo →",
      "sending": "Envoi…",
      "sentTitle": "Demande reçue",
      "sentBody": "Merci. Nous reviendrons vers vous sous un jour ouvré pour planifier votre démonstration.",
      "privacyNote": "En soumettant, vous acceptez notre",
      "privacyLink": "politique de confidentialité"
    }
  },
  "hardware": {
    "meta": {
      "title": "Matériel certifié",
      "description": "Matériel certifié ESTINAD — kits de déploiement sélectionnés et testés, préparés pour fonctionner avec les produits ESTINAD. Demandez un devis pour votre exploitation."
    },
    "hero": {
      "eyebrow": "ESTINAD / MATÉRIEL CERTIFIÉ",
      "title": "Du matériel qui fonctionne avec ESTINAD.",
      "body": "Matériel sélectionné et testé pour des déploiements ESTINAD fiables — des postes d’encaissement aux opérations retail quotidiennes.",
      "primaryCta": "Voir le matériel",
      "secondaryCta": "Demander un devis",
      "supporting": "Le logiciel d’abord. Le matériel quand il aide."
    },
    "catalog": {
      "meta": {
        "title": "Catalogue matériel",
        "description": "Parcourez les kits et packs Matériel certifié ESTINAD — prix, compatibilité et comparaison simples."
      },
      "eyebrow": "Catalogue",
      "title": "Matériel",
      "intro": "Matériel professionnel pour votre point de vente.",
      "searchLabel": "Rechercher dans le catalogue",
      "searchPlaceholder": "Rechercher un matériel, modèle, marque…",
      "searchEmpty": "Aucun produit ne correspond à vos filtres.",
      "clearSearch": "Effacer la recherche",
      "storeLabel": "Boutique live",
      "storeUnavailable": "Le catalogue boutique n’est pas connecté. Définissez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      "storeError": "Impossible de charger les produits. Réessayez sous peu.",
      "productsHeading": "Produits",
      "productsIntro": "Inventaire live de la boutique matériel ESTINAD — nom, description, prix et détails clés.",
      "productsCountLabel": "produits",
      "productsCountExact": "{count} produits",
      "categoryFilterLabel": "Catégories",
      "availabilityFilterLabel": "Disponibilité",
      "filtersHeading": "Filtres",
      "filtersReset": "Tout réinitialiser",
      "filtersAllProducts": "Tout le matériel",
      "filtersAvailable": "En stock",
      "filtersUnavailable": "Sur commande",
      "priceFilterLabel": "Fourchette de prix",
      "priceUnder10k": "Moins de 10 000 DA",
      "price10to30": "10 000 – 30 000 DA",
      "price30to80": "30 000 – 80 000 DA",
      "price80to150": "80 000 – 150 000 DA",
      "priceOver150": "Plus de 150 000 DA",
      "readyBadge": "ESTINAD Ready",
      "inStock": "En stock",
      "quoteOnlyStatus": "Sur commande",
      "skuLabel": "SKU",
      "brandLabel": "Marque",
      "barcodeLabel": "Code-barres",
      "uncategorized": "Général",
      "quoteProduct": "Demander un devis",
      "quoteCta": "Demander un devis",
      "compareCta": "Comparer",
      "viewDetails": "Voir le produit",
      "addToCart": "Ajouter au panier",
      "addedToCart": "Ajouté",
      "sortLabel": "Trier par",
      "sortFeatured": "Recommandés",
      "sortPriceAsc": "Prix · croissant",
      "sortPriceDesc": "Prix · décroissant",
      "sortNameAsc": "Nom · A–Z",
      "activeFilterReady": "En stock uniquement",
      "kitsHeading": "Kits",
      "kitsIntro": "Configurations certifiées individuelles à acheter ou à devis.",
      "bundlesHeading": "Packs",
      "bundlesIntro": "Ensembles prêts pour un parcours plus clair du matériel au logiciel.",
      "compareLabel": "Comparer",
      "includesLabel": "Inclus",
      "hardwareTotal": "Total matériel",
      "deliveryEstimate": "Livraison (estimation)",
      "softwareLabel": "Logiciel",
      "retailIncluded": "ESTINAD Retail · Single Branch",
      "retailCadence": "/ mois · par magasin",
      "oneTime": "Unique",
      "monthly": "Mensuel",
      "viewKit": "Voir le kit",
      "buyBundle": "Ajouter les kits au panier",
      "quoteBundle": "Demander un devis",
      "exploreRetail": "Découvrir ESTINAD Retail",
      "filtersAll": "Tous les kits",
      "filtersBuyNow": "Achat immédiat",
      "filtersQuote": "Sur devis",
      "resultCount": "{count} résultats",
      "bundles": {
        "all-kits": {
          "name": "Tous les kits",
          "tagline": "Tous les kits certifiés standard dans un seul pack.",
          "body": "Kits Comptoir Retail, Comptoir Restaurant et Inventaire — achetés ensemble pour une base matériel complète.",
          "badge": "Pack matériel"
        },
        "all-kits-retail": {
          "name": "Tous les kits + ESTINAD Retail",
          "tagline": "Pack matériel avec le logiciel ESTINAD Retail.",
          "body": "L’ensemble des kits standard plus ESTINAD Retail Single Branch — matériel en paiement unique, logiciel facturé chaque mois.",
          "badge": "Matériel + logiciel"
        }
      }
    },
    "shopBySetup": {
      "eyebrow": "Choisir par usage",
      "title": "Conçu pour votre façon d’opérer.",
      "intro": "Partez de l’opération, pas d’une longue liste produits. Chaque usage correspond à une configuration ESTINAD ciblée.",
      "items": [
        {
          "slug": "retail-counter-kit",
          "title": "Comptoir retail",
          "body": "Tout le nécessaire pour un poste d’encaissement standard."
        },
        {
          "slug": "restaurant-counter-kit",
          "title": "Comptoir de service",
          "body": "Un comptoir préparé pour les points de service en restauration."
        },
        {
          "slug": "inventory-kit",
          "title": "Codes-barres & inventaire",
          "body": "Matériel pour le scan, l’étiquetage et les opérations stock."
        },
        {
          "slug": "multi-site-rollout",
          "title": "Déploiement multi-sites",
          "body": "Un standard matériel coordonné sur plusieurs sites."
        }
      ]
    },
    "featured": {
      "eyebrow": "Configuration mise en avant",
      "title": "Kit comptoir ESTINAD Retail",
      "body": "Une configuration d’encaissement complète autour d’ESTINAD Retail — une seule installation, des composants compatibles, un déploiement plus simple.",
      "note": "Tarifs de démonstration pour l’aperçu. Remplacez-les par des conditions commerciales vérifiées avant la production.",
      "primaryCta": "Voir la configuration",
      "secondaryCta": "Demander un devis",
      "componentsLabel": "Composants de référence"
    },
    "kitsSection": {
      "eyebrow": "Catalogue matériel",
      "title": "Configurations ciblées pour les déploiements ESTINAD.",
      "configuredLabel": "Configuré selon vos besoins",
      "viewDetails": "Voir le détail",
      "requestQuote": "Demander un devis",
      "buyNow": "Acheter",
      "talkToTeam": "Parler à notre équipe",
      "backToHardware": "Retour au matériel certifié",
      "includesLabel": "Ce qui est inclus",
      "includesIntro": "Un ensemble de déploiement préparé — sélectionné pour ESTINAD et confirmé lors de la configuration.",
      "useCaseLabel": "Usage principal",
      "galleryLabel": "Visuels de référence",
      "galleryIntro": "Références studio et de déploiement illustratives. L’équipement final est confirmé avec votre devis.",
      "specsLabel": "Spécifications clés",
      "worksWithLabel": "Compatible avec",
      "worksWithIntro": "Chaque configuration est préparée autour du produit ESTINAD qu’elle accompagne.",
      "compatibilityVerified": "Compatibilité vérifiée lors de la configuration",
      "availabilityLabel": "Disponibilité",
      "priceLabel": "Prix",
      "contactAvailability": "Contactez-nous pour la disponibilité",
      "requestQuoteAvailability": "Disponible sur devis",
      "availableLabel": "Disponible",
      "inStockLabel": "En stock",
      "scopeNote": "Les spécifications sont des configurations de référence. L’équipement final est confirmé lors du devis et de la revue de compatibilité."
    },
    "kits": {
      "retail-counter-kit": {
        "name": "ESTINAD Retail Counter Kit",
        "shortName": "Retail Counter Kit",
        "tagline": "Un poste d’encaissement complet, préparé avant d’arriver au comptoir.",
        "useCase": "Commerces de détail et caisses fixes.",
        "detailIntro": "Une configuration de comptoir fixe pour l’encaissement commerce — sélectionnée pour réduire l’incertitude à l’installation et en exploitation quotidienne.",
        "operationalFit": "Conçu pour les équipes commerce mono- ou multi-sites qui ont besoin d’un poste de caisse fiable sans improviser les périphériques au lancement.",
        "includes": [
          {
            "id": "terminal",
            "label": "Terminal POS prêt pour ESTINAD",
            "blurb": "Écran de comptoir préparé pour les flux ESTINAD Retail."
          },
          {
            "id": "scanner",
            "label": "Lecteur de codes-barres",
            "blurb": "Lecture de présentation ou portable pour la recherche produit."
          },
          {
            "id": "printer",
            "label": "Imprimante de tickets",
            "blurb": "Imprimante thermique pour la sortie comptoir."
          },
          {
            "id": "drawer",
            "label": "Tiroir-caisse",
            "blurb": "Tiroir standard aligné sur le chemin imprimante du kit."
          },
          {
            "id": "setup",
            "label": "Option d’installation",
            "blurb": "Configuration et installation disponibles sur demande."
          }
        ],
        "specGroups": [
          {
            "title": "Système",
            "specs": [
              {
                "label": "Terminal POS",
                "value": "Écran de comptoir avec option de préparation ESTINAD"
              },
              {
                "label": "Posture de déploiement",
                "value": "Poste de comptoir fixe pour l’encaissement commerce"
              }
            ]
          },
          {
            "title": "Périphériques",
            "specs": [
              {
                "label": "Lecteur de codes-barres",
                "value": "Lecteur portable ou de présentation pour la recherche produit"
              },
              {
                "label": "Imprimante de tickets",
                "value": "Imprimante thermique pour la sortie comptoir"
              },
              {
                "label": "Tiroir-caisse",
                "value": "Tiroir-caisse standard compatible avec le chemin imprimante du kit"
              }
            ]
          },
          {
            "title": "Périmètre de déploiement",
            "specs": [
              {
                "label": "Option d’installation",
                "value": "Installation et configuration disponibles sur demande"
              },
              {
                "label": "Configuration",
                "value": "Configuré selon vos besoins lors du devis"
              }
            ]
          }
        ],
        "media": {
          "hero": {
            "alt": "Configuration studio ESTINAD Retail Counter Kit sur un comptoir en pierre claire"
          },
          "detail": {
            "alt": "Gros plan du lecteur et de l’imprimante Retail Counter Kit",
            "caption": "Lecteur et imprimante positionnés pour un parcours de caisse coordonné."
          },
          "deployment": {
            "alt": "Déploiement illustratif Retail Counter Kit dans un commerce calme",
            "caption": "Référence de déploiement illustrative — pas une installation client réelle."
          },
          "included": {
            "alt": "Composants inclus Retail Counter Kit présentés en plan technique",
            "caption": "Ensemble de composants de référence pour devis et préparation."
          }
        },
        "cta": "Demander un devis"
      },
      "restaurant-counter-kit": {
        "name": "ESTINAD Restaurant Counter Kit",
        "shortName": "Restaurant Counter Kit",
        "tagline": "Un système de comptoir prêt pour le rythme de la restauration.",
        "useCase": "Restaurants, cafés et comptoirs food-service.",
        "detailIntro": "Une configuration de comptoir pour les points de service food-service — alignée sur les pratiques de déploiement ESTINAD Restauration.",
        "operationalFit": "Pensé pour les restaurants et cafés qui ont besoin d’un comptoir de service préparé, avec un flux ticket clair et une gestion de câbles soignée.",
        "includes": [
          {
            "id": "terminal",
            "label": "Terminal POS prêt pour ESTINAD",
            "blurb": "Terminal de comptoir préparé pour les flux ESTINAD Restauration."
          },
          {
            "id": "printer",
            "label": "Imprimante de tickets",
            "blurb": "Imprimante thermique pour tickets client et sortie proche cuisine."
          },
          {
            "id": "drawer",
            "label": "Tiroir-caisse",
            "blurb": "Tiroir standard pour l’encaissement comptoir."
          },
          {
            "id": "accessories",
            "label": "Accessoires de comptoir",
            "blurb": "Supports et accessoires de gestion de câbles selon accord."
          },
          {
            "id": "setup",
            "label": "Option d’installation",
            "blurb": "Configuration et installation disponibles sur demande."
          }
        ],
        "specGroups": [
          {
            "title": "Système",
            "specs": [
              {
                "label": "Terminal POS",
                "value": "Terminal de comptoir préparé pour les flux ESTINAD Restauration"
              },
              {
                "label": "Posture de déploiement",
                "value": "Poste de service pour les opérations hospitality"
              }
            ]
          },
          {
            "title": "Périphériques",
            "specs": [
              {
                "label": "Imprimante de tickets",
                "value": "Imprimante thermique pour tickets client et sortie proche cuisine"
              },
              {
                "label": "Tiroir-caisse",
                "value": "Tiroir-caisse standard pour l’encaissement comptoir"
              },
              {
                "label": "Accessoires de comptoir",
                "value": "Supports et accessoires de comptoir selon accord"
              }
            ]
          },
          {
            "title": "Périmètre de déploiement",
            "specs": [
              {
                "label": "Option d’installation",
                "value": "Installation et configuration disponibles sur demande"
              },
              {
                "label": "Configuration",
                "value": "Configuré selon vos besoins lors du devis"
              }
            ]
          }
        ],
        "media": {
          "hero": {
            "alt": "Système de comptoir hospitality ESTINAD Restaurant Counter Kit en lumière studio"
          },
          "detail": {
            "alt": "Gros plan de l’imprimante Restaurant Counter Kit et du rail de câbles",
            "caption": "Parcours d’impression et routage de câbles préparés pour un comptoir de service."
          },
          "deployment": {
            "alt": "Comptoir illustratif Restaurant Counter Kit dans un café contemporain",
            "caption": "Référence de déploiement hospitality illustrative avant service."
          },
          "included": {
            "alt": "Composants inclus Restaurant Counter Kit sur un plan technique",
            "caption": "Ensemble de référence pour devis de comptoir hospitality."
          }
        },
        "cta": "Demander un devis"
      },
      "inventory-kit": {
        "name": "ESTINAD Inventory Kit",
        "shortName": "Inventory Kit",
        "tagline": "Scanner, étiqueter et déplacer le stock avec un kit terrain préparé.",
        "useCase": "Flux d’inventaire, opérations stock et étiquetage.",
        "detailIntro": "Un kit orienté mobilité pour inventaires, réceptions et étiquetage — associé aux flux inventaire ESTINAD.",
        "operationalFit": "Pour les équipes qui ont besoin d’un poste inventaire portable pour les comptages, la réception et l’étiquetage rayon sur un ou plusieurs sites.",
        "includes": [
          {
            "id": "handheld",
            "label": "Lecteur de codes-barres portable",
            "blurb": "Lecteur pour allées et réserve."
          },
          {
            "id": "labelPrinter",
            "label": "Imprimante d’étiquettes",
            "blurb": "Imprimante pour étiquetage rayon et produit."
          },
          {
            "id": "device",
            "label": "Appareil inventaire",
            "blurb": "Option appareil portable ou tablette pour les tâches inventaire."
          },
          {
            "id": "setup",
            "label": "Accompagnement",
            "blurb": "Accompagnement à la mise en service disponible sur demande."
          }
        ],
        "specGroups": [
          {
            "title": "Système",
            "specs": [
              {
                "label": "Appareil inventaire",
                "value": "Option appareil portable ou tablette pour les tâches inventaire"
              },
              {
                "label": "Posture de déploiement",
                "value": "Kit terrain mobile pour les opérations stock"
              }
            ]
          },
          {
            "title": "Périphériques",
            "specs": [
              {
                "label": "Lecteur portable",
                "value": "Lecteur de codes-barres pour allées et réserve"
              },
              {
                "label": "Imprimante d’étiquettes",
                "value": "Imprimante pour étiquetage rayon et produit"
              }
            ]
          },
          {
            "title": "Périmètre de déploiement",
            "specs": [
              {
                "label": "Accompagnement",
                "value": "Accompagnement à la mise en service disponible sur demande"
              },
              {
                "label": "Configuration",
                "value": "Configuré selon vos besoins lors du devis"
              }
            ]
          }
        ],
        "media": {
          "hero": {
            "alt": "Kit mobile ESTINAD Inventory Kit avec lecteur, imprimante d’étiquettes et tablette"
          },
          "detail": {
            "alt": "Gros plan du lecteur portable et de l’imprimante d’étiquettes Inventory Kit",
            "caption": "Lecteur et parcours d’étiquettes préparés pour les flux de réserve."
          },
          "deployment": {
            "alt": "Station illustrative Inventory Kit dans une réserve organisée",
            "caption": "Référence de déploiement inventaire illustrative — pas un site réel."
          },
          "included": {
            "alt": "Composants inclus Inventory Kit présentés en plan technique",
            "caption": "Composants de référence du kit terrain pour devis."
          }
        },
        "cta": "Demander un devis"
      },
      "multi-site-rollout": {
        "name": "ESTINAD Multi-site Kit",
        "shortName": "Multi-site Kit",
        "tagline": "Un standard matériel, déployé de façon cohérente sur chaque site.",
        "useCase": "Organisations standardisant le matériel sur plusieurs sites.",
        "detailIntro": "Une approche de déploiement coordonnée pour les équipes qui standardisent des configurations certifiées sur plusieurs sites.",
        "operationalFit": "Pour les opérateurs multi-sites qui ont besoin d’un standard matériel préparé, d’une configuration site par site et d’une installation coordonnée.",
        "includes": [
          {
            "id": "plan",
            "label": "Plan de déploiement standardisé",
            "blurb": "Séquence partagée couvrant sites et responsabilités."
          },
          {
            "id": "configuration",
            "label": "Configuration site par site",
            "blurb": "Préparation matérielle par site alignée sur le plan."
          },
          {
            "id": "preparation",
            "label": "Préparation pré-déploiement",
            "blurb": "Préparation avant installation pour réduire l’incertitude sur site."
          },
          {
            "id": "coordination",
            "label": "Coordination du déploiement",
            "blurb": "Coordination de l’installation, de la formation et du lancement."
          }
        ],
        "specGroups": [
          {
            "title": "Système",
            "specs": [
              {
                "label": "Plan de déploiement",
                "value": "Plan partagé couvrant séquence, sites et responsabilités"
              },
              {
                "label": "Posture de déploiement",
                "value": "Déploiement matériel multi-sites standardisé"
              }
            ]
          },
          {
            "title": "Périphériques",
            "specs": [
              {
                "label": "Configuration par site",
                "value": "Configuration matérielle par site alignée sur le plan"
              },
              {
                "label": "Kits préparés",
                "value": "Configurations certifiées répétées sur les sites"
              }
            ]
          },
          {
            "title": "Périmètre de déploiement",
            "specs": [
              {
                "label": "Pré-déploiement",
                "value": "Préparation avant installation pour réduire l’incertitude sur site"
              },
              {
                "label": "Coordination du déploiement",
                "value": "Coordination de l’installation, de la formation et du lancement"
              }
            ]
          }
        ],
        "media": {
          "hero": {
            "alt": "Configurations de comptoir standardisées ESTINAD Multi-site Kit en studio"
          },
          "detail": {
            "alt": "Préparation pré-déploiement de configurations certifiées identiques",
            "caption": "Ensembles identiques préparés avant le déploiement site par site."
          },
          "deployment": {
            "alt": "Espace de staging illustratif Multi-site Kit avec systèmes répétés",
            "caption": "Référence de staging multi-sites illustrative — pas un entrepôt client."
          },
          "included": {
            "alt": "Artefacts de déploiement Multi-site Kit présentés en plan technique",
            "caption": "Ensemble de coordination de référence pour devis multi-sites."
          }
        },
        "cta": "Parler à notre équipe"
      }
    },
    "trust": {
      "eyebrow": "Pourquoi le matériel certifié",
      "title": "Conçu pour fonctionner ensemble.",
      "body": "Nous sélectionnons et testons le matériel autour de vrais déploiements ESTINAD, pour que logiciel et équipements opérationnels travaillent ensemble avec moins de questions de compatibilité.",
      "items": [
        {
          "title": "Matériel sélectionné",
          "body": "Un catalogue ciblé plutôt qu’une marketplace écrasante."
        },
        {
          "title": "Guidance de compatibilité",
          "body": "Savoir quel matériel convient à votre configuration ESTINAD."
        },
        {
          "title": "Support de déploiement",
          "body": "De l’aide pour configurer le matériel lorsque le déploiement l’exige."
        }
      ]
    },
    "purchasePath": {
      "eyebrow": "Achat simple",
      "title": "Achetez les kits standardisés lorsque le prix est confirmé.",
      "body": "Les configurations standardisées avec prix et disponibilité vérifiés peuvent être commandées en paiement à la livraison. Les déploiements complexes, multi-sites et configurations sur mesure restent sur devis.",
      "gatedNote": "Des tarifs de démonstration sont actifs pour les kits en aperçu. Multi-site Kit et les déploiements sur mesure restent sur devis.",
      "cartCta": "Voir le panier",
      "quoteCta": "Demander un devis"
    },
    "storeChrome": {
      "eyebrow": "Matériel",
      "catalog": "Catalogue",
      "overview": "Aperçu",
      "quote": "Devis",
      "cart": "Panier",
      "cartAria": "Panier matériel, {count} articles"
    },
    "productDetail": {
      "backToCatalog": "Retour au catalogue",
      "skuLabel": "SKU",
      "brandLabel": "Marque",
      "barcodeLabel": "Code-barres",
      "categoryLabel": "Catégorie",
      "availabilityLabel": "Disponibilité",
      "available": "Disponible",
      "quoteOnly": "Sur devis",
      "addToCart": "Ajouter au panier",
      "addedToCart": "Ajouté",
      "requestQuote": "Demander un devis",
      "detailsHeading": "Détails",
      "relatedHeading": "Dans la même catégorie"
    },
    "compatibility": {
      "eyebrow": "Compatibilité",
      "title": "Vous avez déjà du matériel ?",
      "body": "Demandez une vérification de compatibilité avant d’acheter ou de déployer votre équipement existant. Nous vous aiderons à déterminer s’il est pris en charge, pris en charge sous conditions, ou inadapté à votre configuration ESTINAD.",
      "cta": "Vérifier mon matériel",
      "metaTitle": "Vérification de compatibilité matériel",
      "metaDescription": "Demandez une revue de compatibilité ESTINAD pour votre équipement existant avant achat ou déploiement.",
      "pageTitle": "Vérifiez votre matériel.",
      "pageIntro": "Décrivez votre équipement actuel et le produit ESTINAD que vous souhaitez exploiter. Notre équipe examinera s’il est pris en charge, pris en charge sous conditions, ou inadapté.",
      "outcomesTitle": "Ce que vous saurez",
      "outcomes": [
        "Si votre équipement est pris en charge avec ESTINAD",
        "Si le support est conditionnel à une configuration ou des accessoires",
        "Si un kit certifié est une voie plus claire pour vos sites"
      ]
    },
    "finalCta": {
      "title": "Besoin d’aide pour choisir la bonne configuration ?",
      "body": "Dites-nous ce dont votre opération a besoin et nous vous aiderons à identifier le matériel ESTINAD adapté.",
      "cta": "Demander un devis",
      "secondaryCta": "Explorer ESTINAD Retail"
    },
    "quote": {
      "metaTitle": "Demander un devis matériel",
      "metaDescription": "Demandez un devis pour les configurations Matériel certifié ESTINAD pour vos sites.",
      "eyebrow": "Demander un devis",
      "title": "Parlez-nous de votre exploitation.",
      "intro": "Indiquez vos sites, postes et configuration préférée. Notre équipe examinera vos besoins et reviendra avec une recommandation.",
      "asideTitle": "Et ensuite",
      "aside": [
        "Nous examinons votre type d’activité et le nombre de sites",
        "Nous recommandons une configuration certifiée ou un parcours de compatibilité",
        "Nous confirmons le périmètre d’installation et de formation si besoin"
      ],
      "note": "Le matériel est optionnel. Les clients peuvent utiliser un équipement existant qui passe la vérification de compatibilité."
    },
    "cart": {
      "metaTitle": "Panier matériel",
      "metaDescription": "Vérifiez le matériel ESTINAD sélectionné avant le paiement.",
      "eyebrow": "Panier",
      "title": "Votre sélection matériel.",
      "emptyTitle": "Votre panier est vide.",
      "emptyBody": "L’achat en ligne est disponible uniquement pour les configurations avec prix et disponibilité vérifiés. Parcourez le catalogue ou demandez un devis.",
      "emptyCta": "Voir le matériel",
      "quoteCta": "Demander un devis",
      "quantity": "Quantité",
      "remove": "Retirer",
      "subtotal": "Sous-total",
      "checkoutCta": "Continuer vers le paiement",
      "unavailableTitle": "L’achat n’est pas encore ouvert.",
      "unavailableBody": "Les données commerciales vérifiées n’ont pas encore été publiées pour ces configurations. Demandez un devis pour confirmer le prix et la livraison.",
      "quoteCtaAlt": "Demander un devis"
    },
    "checkout": {
      "metaTitle": "Paiement matériel",
      "metaDescription": "Finalisez une commande simple en paiement à la livraison pour le matériel ESTINAD certifié.",
      "eyebrow": "Paiement",
      "title": "Coordonnées client et livraison.",
      "intro": "Paiement à la livraison. Nous confirmons la commande, puis organisons la livraison ou le retrait.",
      "sections": {
        "contact": "Informations client",
        "fulfillment": "Livraison / retrait",
        "review": "Récapitulatif",
        "payment": "Paiement"
      },
      "fullName": "Nom complet",
      "companyName": "Nom de l’entreprise",
      "email": "E-mail",
      "phone": "Numéro de téléphone",
      "country": "Pays",
      "city": "Ville",
      "address": "Adresse de livraison",
      "addressPlaceholder": "Rue, bâtiment et éventuelles indications d’accès",
      "fulfillmentMethod": "Mode de remise",
      "delivery": "Livraison",
      "pickup": "Retrait",
      "notes": "Notes de commande",
      "notesPlaceholder": "Tout élément utile sur le timing ou l’accès au site.",
      "paymentMethod": "Mode de paiement",
      "paymentCod": "Paiement à la livraison",
      "paymentCodNote": "Payez à la livraison ou au retrait. Pas de paiement carte en ligne dans ce parcours.",
      "consent": "J’accepte la politique de confidentialité et comprends qu’il s’agit d’une commande en paiement à la livraison.",
      "subtotal": "Sous-total",
      "deliveryCost": "Livraison",
      "total": "Total",
      "placeOrder": "Passer la commande COD",
      "placing": "Envoi de la commande…",
      "backToCart": "Retour au panier",
      "unavailableTitle": "Le paiement n’est pas encore disponible.",
      "unavailableBody": "Le paiement en ligne s’ouvre lorsque prix, disponibilité et règles de remise vérifiés sont publiés. Demandez un devis en attendant.",
      "quoteCta": "Demander un devis",
      "errors": {
        "required": "Ce champ est obligatoire.",
        "email": "Saisissez une adresse e-mail valide.",
        "empty": "Votre panier est vide.",
        "notPurchasable": "Un ou plusieurs articles ne peuvent pas encore être achetés en ligne.",
        "invalidQuantity": "Vérifiez la quantité de chaque article.",
        "fulfillment": "Sélectionnez un mode de remise.",
        "server": "Impossible de passer la commande. Réessayez ou demandez un devis."
      }
    },
    "confirmation": {
      "metaTitle": "Confirmation de commande",
      "metaDescription": "Votre commande matériel ESTINAD en paiement à la livraison a été enregistrée.",
      "eyebrow": "Confirmation",
      "title": "Commande enregistrée.",
      "body": "Merci. Votre commande en paiement à la livraison a été enregistrée. Notre équipe vous recontactera pour confirmer la remise.",
      "referenceLabel": "Référence de commande",
      "nextTitle": "Et ensuite",
      "next": [
        "Nous vérifions et confirmons la disponibilité",
        "Nous organisons la livraison ou le retrait",
        "Vous payez à la livraison ou au retrait"
      ],
      "shopCta": "Retour au matériel",
      "quoteCta": "Besoin d’une configuration sur mesure ? Demandez un devis",
      "missingTitle": "Aucune référence de commande trouvée.",
      "missingBody": "Si vous venez de passer commande, vérifiez l’e-mail de confirmation ou contactez notre équipe."
    },
    "form": {
      "sections": {
        "contact": "Contact",
        "operation": "Votre exploitation",
        "deployment": "Préférences de déploiement"
      },
      "fullName": "Nom complet",
      "companyName": "Nom de l’entreprise",
      "email": "E-mail",
      "phone": "Numéro de téléphone",
      "country": "Pays",
      "city": "Ville",
      "businessType": "Type d’activité",
      "businessTypes": [
        "Commerce",
        "Restauration",
        "Clinique",
        "Multi-sites",
        "Autre"
      ],
      "productInterest": "Produit ESTINAD concerné",
      "products": [
        "Commerce",
        "Restauration",
        "Clinique",
        "Cloud",
        "Pas encore décidé"
      ],
      "locations": "Nombre de sites",
      "counters": "Nombre de postes d’encaissement",
      "kit": "Kit de déploiement sélectionné",
      "kitPlaceholder": "Sélectionnez un kit",
      "existingHardware": "Statut du matériel existant",
      "existingOptions": [
        {
          "value": "none",
          "label": "Pas de matériel existant"
        },
        {
          "value": "needs-review",
          "label": "Besoin d’une revue de compatibilité"
        },
        {
          "value": "already-compatible",
          "label": "Déjà équipé en matériel compatible"
        }
      ],
      "installation": "Besoin d’installation et de formation",
      "installationOptions": [
        {
          "value": "yes",
          "label": "Oui — inclure installation et formation"
        },
        {
          "value": "no",
          "label": "Non — pack matériel uniquement"
        },
        {
          "value": "discuss",
          "label": "À discuter lors du suivi"
        }
      ],
      "equipmentSummary": "Résumé de l’équipement actuel",
      "equipmentPlaceholder": "Listez terminaux, imprimantes, lecteurs et interfaces connues.",
      "notes": "Notes",
      "notesPlaceholder": "Tout autre élément utile sur vos sites ou votre calendrier.",
      "submitQuote": "Envoyer la demande de devis",
      "submitCompatibility": "Envoyer la demande de compatibilité",
      "sending": "Envoi…",
      "sentTitle": "Demande enregistrée",
      "sentBody": "Votre demande a été enregistrée. Notre équipe examinera vos besoins et vous recontactera.",
      "privacyNote": "En soumettant, vous acceptez notre",
      "privacyLink": "politique de confidentialité",
      "errors": {
        "required": "Ce champ est obligatoire.",
        "email": "Saisissez une adresse e-mail valide.",
        "invalid": "Sélectionnez une option valide."
      }
    }
  },
  "legal": {
    "privacy": {
      "eyebrow": "Légal / Confidentialité",
      "title": "Politique de confidentialité",
      "intro": "Comment ESTINAD collecte, utilise et protège les données des entreprises qui en dépendent.",
      "blocks": [
        {
          "title": "1. Champ d'application",
          "body": "Cette politique couvre ESTINAD OS et ses produits — Commerce, Restauration, Clinique et Cloud — y compris les sites web, tableaux de bord et déploiements on-premise exploités par ESTINAD."
        },
        {
          "title": "2. Données traitées",
          "body": "Données de compte et d'organisation ; configuration des sites et utilisateurs ; enregistrements transactionnels (ventes, stocks, plannings, facturation) ; et journaux opérationnels nécessaires à l'audit et à la fiabilité. Les secteurs sensibles, comme les cliniques, bénéficient de contrôles supplémentaires décrits dans la documentation produit."
        },
        {
          "title": "3. Comment nous utilisons les données",
          "body": "Pour exploiter la plateforme, assurer le support, maintenir la fiabilité, prévenir la fraude et améliorer les produits. Nous ne vendons pas de données personnelles. Des métriques agrégées non identifiantes peuvent être utilisées pour l'analytique produit."
        },
        {
          "title": "4. Chiffrement et stockage",
          "body": "Les données sont chiffrées en transit et au repos, y compris les sauvegardes. La résidence régionale et le déploiement hybride sont disponibles quand la réglementation exige que les données restent dans le pays."
        },
        {
          "title": "5. Accès et contrôle",
          "body": "Les dirigeants contrôlent qui peut accéder à quoi via l'accès par rôles. Les personnes peuvent demander l'accès, la correction ou la suppression de leurs données personnelles, le cas échéant, en contactant ESTINAD."
        },
        {
          "title": "6. Rétention",
          "body": "Les données sont conservées tant que le compte est actif et selon les obligations légales, comptables ou d'audit. Les sauvegardes permettent une restauration à un instant t dans la fenêtre de rétention de la plateforme."
        },
        {
          "title": "7. Sous-traitants",
          "body": "ESTINAD utilise des prestataires d'infrastructure et de services vérifiés, sous accords de traitement de données. Une liste à jour des sous-traitants est disponible sur demande."
        },
        {
          "title": "8. Contact",
          "body": "Les questions sur cette politique ou les demandes de données peuvent être envoyées à privacy@estinad.com. Nous répondrons dans le délai requis par la loi applicable."
        }
      ]
    },
    "terms": {
      "eyebrow": "Légal / Conditions",
      "title": "Conditions d'utilisation",
      "intro": "Les conditions selon lesquelles les entreprises utilisent ESTINAD OS et ses produits.",
      "blocks": [
        {
          "title": "1. Acceptation",
          "body": "En accédant ou en utilisant ESTINAD, vous acceptez ces conditions au nom de votre organisation. Si vous n'acceptez pas, n'utilisez pas la plateforme."
        },
        {
          "title": "2. Licence",
          "body": "ESTINAD accorde à votre organisation une licence limitée, non exclusive et non transférable pour utiliser la plateforme et ses produits dans le cadre de votre offre active, sous réserve de ces conditions."
        },
        {
          "title": "3. Vos responsabilités",
          "body": "Vous êtes responsable de l'exactitude de vos données, de la conduite de vos utilisateurs et de la sécurité de vos identifiants. Vous acceptez d'utiliser la plateforme légalement et conformément à son usage prévu."
        },
        {
          "title": "4. Usage acceptable",
          "body": "Vous ne pouvez pas faire un mauvais usage de la plateforme, tenter de l'ingénierie inverse, la revendre sans autorisation, ou l'utiliser pour traiter des données en violation de la loi applicable."
        },
        {
          "title": "5. Tarifs et facturation",
          "body": "Les tarifs sont décrits sur la page tarifs de chaque produit et confirmés dans votre commande ou accord. Sauf accord contraire, les tarifs sont facturés par site, par clinique ou par point de vente, mensuellement ou annuellement."
        },
        {
          "title": "6. Fiabilité",
          "body": "ESTINAD est conçu pour la stabilité, y compris le fonctionnement hors ligne. Nous visons une haute disponibilité et assurons sauvegarde et restauration, mais aucun service n'est garanti sans interruption ni erreur."
        },
        {
          "title": "7. Confidentialité et données",
          "body": "Chaque partie protège les informations confidentielles de l'autre. Vos données restent vôtres ; ESTINAD les traite uniquement pour exploiter la plateforme, comme décrit dans la politique de confidentialité."
        },
        {
          "title": "8. Résiliation",
          "body": "Chaque partie peut résilier comme décrit dans votre accord. En cas de résiliation, ESTINAD rendra vos données exportables pendant une période définie, puis les supprimera selon la politique de rétention."
        },
        {
          "title": "9. Modifications",
          "body": "ESTINAD peut mettre à jour ces conditions et ses tarifs avec un préavis raisonnable. La poursuite de l'utilisation après l'entrée en vigueur vaut acceptation."
        },
        {
          "title": "10. Contact",
          "body": "Les questions sur ces conditions peuvent être envoyées à legal@estinad.com."
        }
      ]
    }
  },
  "quote": {
    "metaTitle": "Demander un devis",
    "metaDescription": "Demandez un devis pour ESTINAD Retail et le matériel certifié. Les autres produits ESTINAD arrivent bientôt.",
    "eyebrow": "Demander un devis",
    "title": "Obtenez un devis pour ESTINAD Retail et le matériel.",
    "intro": "Dites-nous ce dont vous avez besoin. Les devis couvrent aujourd'hui ESTINAD Retail et le matériel certifié. Les autres produits ESTINAD arrivent bientôt.",
    "asideTitle": "Ce que nous pouvons chiffrer aujourd'hui",
    "aside": [
      "Logiciel ESTINAD Retail pour une ou plusieurs boutiques",
      "Kits matériels certifiés préparés pour ESTINAD",
      "Cadrage d'implémentation et de déploiement",
      "Intérêt pour les produits ESTINAD à venir"
    ],
    "hardwareNote": "Besoin d'un devis matériel pour un kit précis ?",
    "hardwareLink": "Ouvrir le formulaire devis matériel →",
    "preferTitle": "Vous préférez parler ?",
    "preferBody": "Contactez l'équipe directement à",
    "email": "hello@estinad.com",
    "form": {
      "name": "Nom complet",
      "company": "Entreprise",
      "email": "E-mail",
      "phone": "Téléphone",
      "scopeLabel": "De quoi avez-vous besoin ?",
      "scopes": [
        "ESTINAD Retail",
        "Matériel certifié",
        "Retail et matériel",
        "Intérêt pour un produit à venir"
      ],
      "productLabel": "Produit concerné",
      "products": [
        "ESTINAD Retail (Disponible)",
        "ESTINAD Restaurant (Bientôt)",
        "ESTINAD Inventory (Bientôt)",
        "ESTINAD Invoices (Bientôt)",
        "ESTINAD Workforce (Bientôt)",
        "ESTINAD Clinic (Bientôt)",
        "ESTINAD Central (Bientôt)",
        "Pas encore sûr"
      ],
      "branches": "Nombre de sites / boutiques",
      "messageLabel": "Dites-nous en plus",
      "messagePlaceholder": "Partagez le nombre de sites, vos outils actuels, vos besoins matériels, ou le produit pour lequel vous voulez des infos.",
      "submit": "Demander un devis →",
      "sending": "Envoi…",
      "sentTitle": "Demande de devis reçue",
      "sentBody": "Merci. Nous vous répondrons sous un jour ouvré.",
      "privacyNote": "En envoyant, vous acceptez notre",
      "privacyLink": "politique de confidentialité"
    }
  }
};

export const fr: Dictionary = deepFill(en, frRaw);
