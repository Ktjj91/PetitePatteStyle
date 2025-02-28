1. **Introduction et Contexte du Projet**  
   **Objectif du projet :** Création du site e-commerce PetitePatteStyle

## Contexte

**Introduction**  
PetitePatteStyle est un projet de site e-commerce spécialisé dans la vente de vêtements et d'accessoires pour chiens de petite taille. Le site a été conçu pour répondre aux besoins spécifiques des propriétaires de petits chiens en leur offrant une variété de produits à la fois stylés et fonctionnels.

**Fonctionnalités principales**

- **Catalogue de produits**  
  - **Présentation des produits :** Chaque produit est affiché avec des images en haute résolution, une description détaillée, le prix et les options de taille. Les produits sont classés par catégories pour faciliter la navigation (vêtements : t-shirts, pulls ; accessoires : colliers, harnais).  
  - **Détails des produits :** Une page dédiée pour chaque produit fournit des informations complètes, notamment les matériaux, les tailles disponibles et des recommandations d'entretien.

- **Gestion des utilisateurs**  
  - **Comptes utilisateurs :** Les clients peuvent créer et gérer leur compte, consulter leur historique de commandes et enregistrer des produits dans une liste de souhaits pour un achat ultérieur.  
  - **Authentification :** Le site utilise un système d'authentification sécurisé pour la connexion des utilisateurs.

- **Gestion du panier**  
  - **Ajout au panier :** Les utilisateurs peuvent ajouter des produits à leur panier, ajuster les quantités et retirer des articles avant de passer à la caisse.  
  - **Visualisation du panier :** Le panier est accessible à tout moment pour visualiser son contenu, vérifier les produits sélectionnés et consulter le montant total de la commande.

- **Passage de commande**  
  - **Finalisation des achats :** Les clients finalisent leurs achats en saisissant leurs informations de paiement et en choisissant les options de livraison.  
  - **Options de paiement :** PetitePatteStyle intègre plusieurs méthodes de paiement, notamment Stripe pour des transactions sécurisées.

- **Système de paiement et sécurité**  
  - **Sécurité des transactions :** Les transactions sont sécurisées grâce à l'utilisation des protocoles HTTPS et des certificats SSL/TLS. Le site respecte les meilleures pratiques en matière de sécurité des données, incluant la protection contre les injections SQL et les attaques par force brute.

- **Gestion des commandes**  
  - **Historique des achats :** Les utilisateurs peuvent consulter leurs commandes passées, suivre l'état des commandes en cours et réimprimer des reçus si nécessaire.  
  - **Service client :** Un formulaire de contact est disponible pour permettre aux utilisateurs de poser des questions ou de formuler des réclamations.

- **Optimisation et marketing**  
  - **Optimisation SEO :** Le site est optimisé pour le référencement, avec un contenu adapté aux moteurs de recherche, ce qui améliore sa visibilité en ligne.  
  - **Intégration avec les réseaux sociaux :** PetitePatteStyle permet le partage de produits sur les réseaux sociaux, renforçant ainsi sa présence en ligne et atteignant un public plus large.

**Technologies utilisées**

- **Next.js :** Pour le développement front-end, offrant des performances optimisées et un meilleur référencement SEO.  
- **Tailwind CSS :** Pour le design, permettant une personnalisation rapide et cohérente des éléments visuels.  
- **TypeScript :** Pour renforcer la sécurité et la lisibilité du code.  
- **Google Cloud Platform :** Pour l'hébergement, garantissant une infrastructure scalable et performante.

---

## Architecture

### Architecture de PetitePatteStyle

L'architecture de PetitePatteStyle est conçue pour être à la fois robuste, scalable et orientée vers la performance, tout en offrant une expérience utilisateur fluide et sécurisée. Voici les principaux composants :

1. **Front-End (côté client)**  
   - **Framework utilisé :** Next.js  
   - **Rendu côté serveur (SSR) :** Next.js génère des pages côté serveur, améliorant ainsi les performances et le SEO, et permettant de livrer le contenu rapidement aux utilisateurs.  
   - **Static Site Generation (SSG) :** Certaines pages (par exemple, les pages produits) sont pré-générées en contenu statique pour optimiser la vitesse de chargement.  
   - **Gestion des états :** Zustand est utilisé pour gérer l'état de l'application de manière simple et efficace, notamment pour les composants partageant des données.  
   - **Style et UI :**  
     - *Tailwind CSS* est un framework CSS basé sur des utilitaires, permettant un développement rapide avec un design cohérent et réactif.  
     - *Shadcn/UI* est utilisé pour créer des composants UI réutilisables, élégants et performants, adaptés à une expérience utilisateur optimale sur différents appareils.  
   - **Accessibilité :** L'architecture respecte les normes WCAG 2.0 afin d’assurer l’accessibilité du site aux personnes en situation de handicap (par exemple, textes alternatifs pour les images).

2. **Back-End (côté serveur)**  
   - **Framework utilisé :** Next.js (API Routes)  
     Next.js est également employé pour gérer le back-end, notamment via des API RESTful pour les opérations CRUD (Create, Read, Update, Delete) sur les données.  
   - **Base de données :**  
     - Utilisation de SQL (via Prisma ORM) pour stocker les données relatives aux utilisateurs, aux produits, aux commandes et aux sessions.  
   - **Modélisation de la base de données :**  
     - **User :** Contient les informations des utilisateurs (identifiants, détails du compte, sessions actives).  
     - **OrderStripe :** Gère les commandes effectuées par les utilisateurs, avec une relation directe avec les produits commandés (via OrderItemStripe).  
     - **Products :** Stocke les détails des produits disponibles (nom, description, prix, catégories associées).  
     - **Categories :** Organise les produits en différentes catégories pour faciliter la navigation et le filtrage.  
   - **Sécurité :**  
     - **Authentification :** Utilisation de JWT (JSON Web Tokens) pour sécuriser l’authentification des utilisateurs.  
     - **Protocole HTTPS :** Toutes les communications entre le client et le serveur sont sécurisées par SSL/TLS, garantissant la confidentialité des données.  
     - **Protection contre les attaques :** Mise en place de mesures contre les injections SQL, les attaques par force brute et validation rigoureuse des données pour prévenir les failles de sécurité.

3. **Services et intégrations**  
   - **Système de paiement :** Stripe est intégré pour gérer les paiements sécurisés, permettant aux utilisateurs de payer par carte bancaire en toute sécurité.  
   - **Hébergement et infrastructure :**  
     - Le site et ses services sont hébergés sur Google Cloud Platform (GCP), assurant une infrastructure fiable et scalable pouvant s’adapter aux variations de trafic.  
     - **Conteneurisation :** L’utilisation de Docker permet de conteneuriser l’application, facilitant ainsi le déploiement et la gestion de l’infrastructure.  
   - **Suivi et analyse :** Google Analytics et Google Search Console sont utilisés pour suivre le trafic, analyser le comportement des utilisateurs et optimiser le référencement SEO.  
   - **Gestion des emails :** Resend gère les emails transactionnels, comme les confirmations de commande et les réinitialisations de mot de passe.

4. **Sécurité et conformité**  
   - **Journalisation et monitoring :**  
     Un système de journalisation capture les logs d’application, facilitant le diagnostic des problèmes et la surveillance continue. Les journaux sont centralisés et analysés pour détecter toute anomalie ou événement critique.  
   - **Conformité RGPD :**  
     Le site est conforme au RGPD, avec une gestion stricte des données personnelles, incluant des options de consentement pour les utilisateurs et des mécanismes leur permettant de demander l'accès ou la suppression de leurs données personnelles.

5. **Déploiement et maintenance**  
   - **Intégration continue / Déploiement continu (CI/CD) :**  
     Utilisation de GitHub pour la gestion du code source, avec des pipelines CI/CD automatisés pour tester et déployer les modifications en production.  
   - **Environnement de pré-production :**  
     Avant toute mise en production, un environnement de pré-production est utilisé pour tester les nouvelles fonctionnalités et en assurer la stabilité.

---

2. **Architecture du Système**

- **Vue d'ensemble :**  
  PetitePatteStyle utilise Next.js et ses API Routes pour la partie applicative, et pour la base de données, PostgreSQL (psql) avec Prisma.

- **Environnement de développement :**  
  ```bash
  npm run dev
  ```

## Tester son code

```bash
npm run lint
npm run test
```

## Docker

**Commande Docker pour construire le projet :**

```bash
docker compose build
docker compose up -d 
```

## Environnement

Changez les variables du fichier `.env` pour vos providers :

```
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
DATABASE_URL=
AUTH_FACEBOOK_ID=
AUTH_FACEBOOK_SECRET=
STRIPE_SECRET_KEY=
AUTH_TRUST_HOST=
RESEND_API_KEY=
DNS=
```

## Déploiement en production

Avec un simple push, déployez directement le code en production grâce aux GitHub Actions.

## Documentation API

La documentation de l’API est générée avec Swagger et est accessible via la route `/api-doc`.
