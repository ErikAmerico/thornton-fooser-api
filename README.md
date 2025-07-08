<p align="center">
  <img src="./public/assets/title.png" alt="Thornton Fooser Frontend banner" />
</p>

<br />
<p>
  <a href="https://foosball.life">
    <img src="https://img.shields.io/badge/🌐 Visit%20Live%20Site-0088ff?style=for-the-badge&logo=internet-explorer&logoColor=white" alt="Visit Live Site" />
  </a>
</p>
<br />

The **Thornton Fooser Backend** is a RESTful API built with **Node.js**, **Express**, and **Prisma**, using a **PostgreSQL** database. It handles everything from player data and tournament results to real-time chat and login authentication. It also includes a fun feature that generates AI-powered tournament summaries with OpenAI.

Designed to power the **Thornton Fooser Frontend** and keep all the foosball action running smoothly

### ✨ Features

- 🔐 **Secure Admin Authentication** (bcrypt hashed secrets)
- 🏆 **Tournament Management** (teams, match results, player rankings)
- 💬 **Real-time Chat Integration** (via Pusher)
- 🧠 **Humorous AI-generated Tournament Summaries** (via OpenAI)
- ⚡️ **Efficient Database Handling** (Prisma ORM)
- 🔑 **JWT-based User Authentication**

### 🧑‍💻 Technologies Used

|                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)        |
| ![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)       |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)             |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) |
| ![Pusher](https://img.shields.io/badge/PUSHER-4A148C?style=for-the-badge&logo=pusher&logoColor=white)             |
| ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)             |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)            |

## 🛣️ API Endpoints

### 🧑‍🤝‍🧑 Players

- `GET /players` – List all players
- `POST /players` – Create new player (**adminOnly**)
- `PUT /players/:id` – Update player details (**adminOnly**)
- `DELETE /players/:id` – Delete a player (**adminOnly**)

### 🏆 Matches (Tournaments)

- `POST /matches/update` – Submit tournament results and update rankings (**adminOnly**)
- `GET /matches/history` – Retrieve past tournament data

### 💬 Chat

- `POST /chat/login` – Player login (returns JWT)
- `GET /chat/history` – Get recent messages (**requires JWT**)
- `POST /chat/message` – Post a message to chat (**requires JWT**)
- `POST /chat/pusher/auth` – Auth endpoint for Pusher presence channels (**requires JWT**)

### 🤖 AI Summary

- `POST /summary` – Generate an AI-powered tournament summary

## 🔒 Authentication & Security

- Admin routes are protected using a `SECRET_CODE` hashed with **bcrypt**.

- Players authenticate using **JWT tokens**. The token is returned from `/chat/login` and must be sent in an `Authorization` header:

## 🤖 AI Integration

Tournament summaries are auto-generated using OpenAI’s **GPT-4o API**.  
Logic for this lives in:

### src/utils/getSummary.ts

Summaries:

- Track match results chronologically
- Highlight winning streaks, eliminations, and first-time champions
- Add subtle humor based on player context
- Are used in the frontend's post-tournament recap modal

## 💬 Real-Time Chat

Chat uses **Pusher** presence channels to enable:

- Authenticated identity per player
- Real-time message syncing
- Message history capped to 1000 entries (auto-prunes old ones)
