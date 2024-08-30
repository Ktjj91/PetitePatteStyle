
1. Introduction et Contexte du Projet
    Objectif du projet : Création du site ecommerce Petitepattestyle
2. Contexte : Le but du projet et la création d'un site ecommerce avec Next.js

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
