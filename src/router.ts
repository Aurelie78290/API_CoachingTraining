import express from "express";
import { Router } from "express";

const router = express.Router();

// User-related routes
import userActions from "./modules/user/userActions";
router.get("/user", userActions.browse);
router.get("/user/:id", userActions.read);
router.post("/user", userActions.add);

// Auth-related routes
import authActions from "./modules/user/authActions";
router.post("/auth/login", authActions.login);
router.post("/auth/register", authActions.register);

// MainsList data-related routes

const mainsList = [
    {
  "id": 5680,
  "table": {
    "name": "Focus Main – Table 1",
    "maxPlayers": 6,
    "smallBlind": 1,
    "bigBlind": 2,
    "buttonSeat": 1,
    "smallBlindSeat": 2,
    "bigBlindSeat": 3,
  },
  "players": [
    { "id": 1, "name": "Hero", "seat": 1, "stack": 100, "cards": ["A♠", "Q♠"] },
    { "id": 2, "name": "Vilain 1", "seat": 2, "stack": 110, "cards": ["9♥", "9♦"] },
    { "id": 3, "name": "Vilain 2", "seat": 3, "stack": 95, "cards": ["K♣", "J♣"] },
    { "id": 4, "name": "Vilain 3", "seat": 4, "stack": 120, "cards": ["7♠", "7♣"] },
    { "id": 5, "name": "Vilain 4", "seat": 5, "stack": 80, "cards": ["5♥", "6♥"] },
    { "id": 6, "name": "Vilain 5", "seat": 6, "stack": 130, "cards": ["10♦", "8♦"] }
  ],
  "streets": [
    {
      "name": "preflop",
      "board": [],
      "actions": [
        { "playerId": 1, "action": "raise", "amount": 6 },
        { "playerId": 2, "action": "call", "amount": 6 },
        { "playerId": 3, "action": "fold" },
        { "playerId": 4, "action": "fold" },
        { "playerId": 5, "action": "call", "amount": 6 },
        { "playerId": 6, "action": "fold" }
      ]
    },
    {
      "name": "flop",
      "board": ["Q♦", "7♥", "2♣"],
      "actions": [
        { "playerId": 1, "action": "bet", "amount": 8 },
        { "playerId": 2, "action": "call", "amount": 8 },
        { "playerId": 5, "action": "fold" }
      ]
    },
    {
      "name": "turn",
      "board": ["Q♦", "7♥", "2♣", "4♠"],
      "actions": [
        { "playerId": 1, "action": "bet", "amount": 18 },
        { "playerId": 2, "action": "call", "amount": 18 }
      ]
    },
    {
      "name": "river",
      "board": ["Q♦", "7♥", "2♣", "4♠", "J♦"],
      "actions": [
        { "playerId": 1, "action": "check" },
        { "playerId": 2, "action": "check" }
      ]
    }
  ],
  "pot": 58,
  "winner": { "playerId": 1, "amount": 58 }
},
{
  "id": 5681,
  "table": {
    "name": "Focus Main – Table 2",
    "maxPlayers": 6,
    "smallBlind": 1,
    "bigBlind": 2,
    "buttonSeat": 2,
    "smallBlindSeat": 3,
    "bigBlindSeat": 4,
  },
  "players": [
    { "id": 1, "name": "Hero", "seat": 1, "stack": 100, "cards": ["8♠", "9♠"] },
    { "id": 2, "name": "Vilain1", "seat": 2, "stack": 105, "cards": ["A♦", "10♦"] },
    { "id": 3, "name": "Vilain2", "seat": 3, "stack": 90, "cards": ["Q♣", "Q♥"] },
    { "id": 4, "name": "Vilain3", "seat": 4, "stack": 110, "cards": ["6♣", "6♦"] },
    { "id": 5, "name": "Vilain4", "seat": 5, "stack": 85, "cards": ["K♠", "3♠"] },
    { "id": 6, "name": "Vilain5", "seat": 6, "stack": 125, "cards": ["J♣", "7♣"] }
  ],
  "streets": [
    {
      "name": "preflop",
      "board": [],
      "actions": [
        { "playerId": 1, "action": "raise", "amount": 5 },
        { "playerId": 2, "action": "call", "amount": 5 },
        { "playerId": 3, "action": "fold" },
        { "playerId": 4, "action": "fold" },
        { "playerId": 5, "action": "fold" },
        { "playerId": 6, "action": "fold" }
      ]
    },
    {
      "name": "flop",
      "board": ["K♥", "6♠", "2♦"],
      "actions": [
        { "playerId": 1, "action": "check" },
        { "playerId": 2, "action": "bet", "amount": 7 },
        { "playerId": 1, "action": "call", "amount": 7 }
      ]
    },
    {
      "name": "turn",
      "board": ["K♥", "6♠", "2♦", "5♠"],
      "actions": [
        { "playerId": 1, "action": "check" },
        { "playerId": 2, "action": "check" }
      ]
    },
    {
      "name": "river",
      "board": ["K♥", "6♠", "2♦", "5♠", "A♣"],
      "actions": [
        { "playerId": 1, "action": "bet", "amount": 30 },
        { "playerId": 2, "action": "fold" }
      ]
    }
  ],
  "pot": 61,
  "winner": { "playerId": 1, "amount": 61 }
},
];

const houses = [
  { id: 1, name: "griffondor" },
  { id: 2, name: "pouf" },
];

router.get("/", (req, res) => {
  console.log("tu es sur la route /");
  res.send("tu es sur la route /");
});

router.get("/mainsList", (req, res) => {
  res.json(mainsList);
});

router.get("/houses", (req, res) => {
  res.json(houses);
});

export default router;