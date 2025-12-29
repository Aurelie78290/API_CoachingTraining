# 🃏 Poker Training API

API REST dédiée à une plateforme d’entraînement au poker.
Elle fournit les données nécessaires au frontend pour rejouer des mains de poker pas à pas (joueurs, streets, actions, board).

Cette API est conçue comme un **backend pédagogique**, simple, lisible et facilement extensible.

---

## 🎯 Objectifs de l’API

- Fournir des données structurées pour un replayer de mains de poker
- Centraliser la logique métier liée aux mains, joueurs et actions
- Séparer clairement le frontend et le backend
- Proposer une API facile à faire évoluer

---

## 🛠️ Stack technique

- 🟢 **Node.js**
- 🚂 **Express**
- 📦 JSON comme format de données
- Architecture REST

---

## 📦 Modèle de données (simplifié)

### Exemple de main

```json
{
  "id": 5678,
  "table": {
    "name": "Poker Training Table",
    "maxPlayers": 6,
    "smallBlind": 1,
    "bigBlind": 2
  },
  "players": [
    { "id": 1, "name": "Alice", "seat": 1, "stack": 100, "cards": ["A♥", "K♦"] }
  ],
  "streets": [
    {
      "name": "flop",
      "board": ["2♥", "5♦", "K♦"],
      "actions": [
        { "playerId": 1, "action": "bet", "amount": 10 }
      ]
    }
  ],
  "pot": 63
}


## 🔗 Endpoints principaux
=> Récupérer toutes les mains
GET /mainsList

=> Récupérer une main par ID
GET /mainsList/:id

## Par défaut, l’API tourne sur :
http://localhost:4242

## 📁 Structure du projet
src/
 ├── routes/
 │   └── mains.routes.js
 ├── data/
 │   └── mains.json
 ├── controllers/
 └── app.js

## 🔄 Évolutions prévues

- Ajout d’exercices personnalisés
- Gestion des utilisateurs
- Authentification

##👩‍💻 Objectif personnel

Cette API fait partie d’un projet de reconversion vers le développement web, avec pour objectifs :

- comprendre la séparation frontend / backend
- concevoir une API REST cohérente
- modéliser une logique métier claire
