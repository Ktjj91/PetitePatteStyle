
1. Introduction et Contexte du Projet
    Objectif du projet : Création du site ecommerce Petitepattestyle
## CONTEXT 
   Introduction PetitePatteStyle est un projet de site e-commerce spécialisé dans la vente de vêtements et d'accessoires pour chiens de petite taille. Le site a été conçu pour répondre aux besoins spécifiques des propriétaires de petits chiens en leur offrant une variété de produits stylés et fonctionnels.

Fonctionnalités Principales

Catalogue de Produits:

Présentation des Produits: Chaque produit est affiché avec des images haute résolution, une description détaillée, le prix, et les options de taille. Les produits sont classés en catégories pour faciliter la navigation, comme les vêtements (t-shirts, pulls) et les accessoires (colliers, harnais).
Détails des Produits: Une page dédiée pour chaque produit fournit des informations complètes sur le produit, y compris les matériaux, les tailles disponibles, et des recommandations d'entretien.
Gestion des Utilisateurs:

Comptes Utilisateurs: Les clients peuvent créer et gérer leurs comptes, consulter leur historique de commandes, et enregistrer des produits dans une liste de souhaits pour un achat ultérieur.
Authentification: Le site utilise un système d'authentification sécurisé pour la connexion des utilisateurs.
Gestion du Panier:

Ajout au Panier: Les utilisateurs peuvent ajouter des produits à leur panier, ajuster les quantités, et retirer des articles avant de passer à la caisse.
Visualisation du Panier: Le panier est accessible à tout moment pour visualiser le contenu, vérifier les produits sélectionnés, et voir le montant total de la commande.
Passage de Commande:

Finalisation des Achats: Les clients peuvent finaliser leurs achats en saisissant leurs informations de paiement et en choisissant les options de livraison.
Options de Paiement: PetitePatteStyle intègre plusieurs méthodes de paiement, y compris Stripe pour des transactions sécurisées.
Système de Paiement et Sécurité:

Sécurité des Transactions: Les transactions sont sécurisées grâce à l'utilisation de protocoles HTTPS et de certificats SSL/TLS. Le site respecte les meilleures pratiques en matière de sécurité des données, y compris la protection contre les injections SQL et les attaques par force brute.
Gestion des Commandes:

Historique des Achats: Les utilisateurs peuvent consulter leurs commandes passées, suivre l'état de leurs commandes actuelles, et réimprimer des reçus si nécessaire.
Service Client: Un formulaire de contact est disponible pour permettre aux utilisateurs de poser des questions ou de faire des réclamations.
Optimisation et Marketing:

Optimisation SEO: Le site est optimisé pour le référencement, avec un contenu adapté pour les moteurs de recherche, ce qui améliore sa visibilité en ligne.
Intégration avec les Réseaux Sociaux: PetitePatteStyle permet le partage de produits sur les réseaux sociaux, renforçant ainsi sa présence en ligne et atteignant un public plus large.
Technologies Utilisées

Next.js: Pour le développement front-end, offrant des performances optimisées et un meilleur référencement SEO.
Tailwind CSS: Pour le design, permettant une personnalisation rapide et cohérente des éléments visuels.
TypeScript: Utilisé pour renforcer la sécurité et la lisibilité du code.
Google Cloud Platform: Utilisé pour l'hébergement, garantissant une infrastructure scalable et performante.

## ARCHITECTURE 


Architecture de PetitePatteStyle

L'architecture de PetitePatteStyle est conçue pour être à la fois robuste, scalable et orientée vers la performance, tout en offrant une expérience utilisateur fluide et sécurisée. Voici les principaux composants de cette architecture :

1. Front-End (Côté Client)
   Framework Utilisé : Next.js
   Rendu Server-Side (SSR) : Next.js est utilisé pour générer des pages côté serveur, ce qui améliore à la fois les performances et le SEO. Cela permet de livrer du contenu rapidement et efficacement aux utilisateurs.
   Static Site Generation (SSG) : Certaines pages, telles que les pages produits, sont pré-générées en tant que contenu statique, ce qui optimise encore plus la vitesse de chargement.
   Gestion des États : Zustand
   Utilisé pour gérer l'état de l'application de manière simple et efficace, particulièrement pour les composants qui nécessitent de partager des données entre eux.
   Style et UI : Tailwind CSS et Shadn/UI
   Tailwind CSS est un framework CSS basé sur des utilitaires qui permet un développement rapide avec un design cohérent et réactif.
   Shadn/UI est utilisé pour créer des composants UI réutilisables, élégants et performants, adaptés à l'expérience utilisateur sur différents appareils.
   Accessibilité :
   L'architecture front-end respecte les normes WCAG 2.0 pour assurer l'accessibilité du site aux personnes en situation de handicap, avec des éléments comme des textes alternatifs pour les images.
2. Back-End (Côté Serveur)
   Framework Utilisé : Next.js (API Routes)
   Next.js est également utilisé pour gérer le back-end, en particulier les API routes qui permettent de créer des API RESTful pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les données.
   Base de Données :
   SQL (géré via Prisma ORM) est utilisé pour stocker les données relatives aux utilisateurs, aux produits, aux commandes, et aux sessions.
   Modélisation de la Base de Données :
   User : Contient les informations des utilisateurs, y compris les identifiants, les détails du compte, et les sessions actives.
   OrderStripe : Gère les commandes effectuées par les utilisateurs, avec une relation directe avec les produits commandés (via OrderItemStripe).
   Products : Stocke les détails des produits disponibles sur le site, tels que le nom, la description, le prix, et les catégories associées.
   Categories : Organise les produits en différentes catégories pour faciliter la navigation et le filtrage sur le site.
   Sécurité :
   Authentification : Utilisation de JWT (JSON Web Tokens) pour l'authentification sécurisée des utilisateurs.
   Protocole HTTPS : Toutes les communications entre le client et le serveur sont sécurisées par SSL/TLS, garantissant ainsi la confidentialité des données transmises.
   Protection contre les Attaques : Mise en place de mesures contre les injections SQL, les attaques par force brute, et la validation des données utilisateurs pour prévenir les failles de sécurité.
3. Services et Intégrations
   Système de Paiement : Stripe
   Stripe est intégré pour gérer les paiements sécurisés sur le site, permettant aux utilisateurs de payer par carte bancaire en toute sécurité.
   Hébergement et Infrastructure : Google Cloud Platform (GCP)
   Le site et ses services sont hébergés sur GCP, assurant une infrastructure fiable et scalable qui peut s'adapter aux variations du trafic.
   Conteneurisation : L'utilisation de Docker permet de conteneuriser l'application, facilitant ainsi le déploiement et la gestion de l'infrastructure.
   Suivi et Analyse :
   Google Analytics et Google Search Console sont utilisés pour suivre le trafic du site, analyser les comportements des utilisateurs, et optimiser le référencement SEO.
   Gestion des Emails : Resend
   Service utilisé pour la gestion des emails transactionnels, comme les confirmations de commande et les réinitialisations de mot de passe.
4. Sécurité et Conformité
   Journalisation et Monitoring :
   Un système de journalisation est mis en place pour capturer les logs d'application, facilitant ainsi le diagnostic des problèmes et la surveillance continue de l'application.
   Les journaux sont centralisés et analysés pour détecter les anomalies ou les événements critiques.
   Conformité RGPD :
   Le site est conforme au RGPD, avec une gestion stricte des données personnelles, incluant des options de consentement pour les utilisateurs et des mécanismes pour demander l'accès ou la suppression des données personnelles.
5. Déploiement et Maintenance
   Intégration Continue / Déploiement Continu (CI/CD) :
   Utilisation de GitHub pour la gestion du code source, avec des pipelines CI/CD automatisés pour tester et déployer les modifications en production.
   Environnement de Pré-Production :
   Avant toute mise en production, un environnement de pré-production est utilisé pour tester les nouvelles fonctionnalités et assurer leur stabilité.



2. Architecture du Système

.Vue d'ensemble : Pour la technologie Petitepattestyle utilise Next.js et sa technologie Api route et pour la bdd psql et Prisma.
Environnement de Développement: 
```bash
npm run dev
```

## TESTER SON CODE :
```bash
npm run lint
npm run test
```

## Docker
Commande Docker pour build le project :

```bash
docker compose build
docker compose up -d 
```

## Env 
Changez les variable du point env pour vos provider ...

AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
DATABASE_URL
AUTH_FACEBOOK_ID=
AUTH_FACEBOOK_SECRET=
STRIPE_SECRET_KEY=
AUTH_TRUST_HOST=
RESEND_API_KEY=
DNS=

## Deploy on Production

Avec un simple push deployez directement le code sur la production grâce au Github Action

## DOCUMENTATION API 

La documentation de l’API est générée avec Swagger et est accessible via la route /api-doc.
