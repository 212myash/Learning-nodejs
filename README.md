# 🚀 Learning Node.js  

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![NPM](https://img.shields.io/badge/NPM-Package_Manager-red?logo=npm)
![Status](https://img.shields.io/badge/Status-Learning-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 Table of Contents

- [About Node.js](#about-nodejs)
- [Project Structure](#project-structure)
- [Topics Covered](#topics-covered)
  - [JavaScript Basics](#javascript-basics)
  - [Modules](#modules)
  - [File System (fs)](#file-system-fs)
  - [EventEmitter](#eventemitter)
  - [JSON Handling](#json-handling)
  - [Promises & Async/Await](#promises--asyncawait)
  - [Streams & Zlib](#streams--zlib)
  - [HTTP Server](#http-server)
  - [Express.js](#expressjs)
- [How to Run](#how-to-run)
- [What I Learned](#what-i-learned)
- [Future Goals](#future-goals)
- [Author](#author)

---

# 📖 About Node.js

Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows developers to execute JavaScript outside the browser.

### 🔹 Features
- Event-driven architecture
- Non-blocking I/O
- Highly scalable
- Fast performance

### 🔹 Use Cases
- REST APIs
- Microservices
- Real-time applications
- Backend services

---

# 📂 Project Structure

```
Learning-nodejs/
│
├── basics/
├── modules/
├── fs-module/
├── event-emitter/
├── npm-packages/
├── JSON-Demo/
├── Promise/
├── server/
├── stream/
├── package.json
└── README.md
```

---

# 📚 Topics Covered

---

## JavaScript Basics

### Definition
Core JavaScript concepts required before learning Node.js.

### Topics
- Variables (var, let, const)
- Functions
- Arrays & Objects
- Conditions
- Loops

### Example
```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));
```

---

## Modules

### Definition
Reusable blocks of code in Node.js.

### Types
1. Core Modules (fs, os, http, path)
2. Local Modules (module.exports, require())
3. Third-Party Modules (installed using npm)

---

## File System (fs)

### Definition
Used to read, write, update, and delete files.

### Example
```js
const fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

---

## EventEmitter

### Definition
Used to create and handle custom events in Node.js.

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("event", () => {
  console.log("Event Fired");
});

emitter.emit("event");
```

---

## JSON Handling

### Definition
Used for structured data storage and exchange.

### Concepts
- Parsing JSON
- Writing JSON
- Reading JSON files

---

## Promises & Async/Await

### Definition
Used to handle asynchronous operations.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve("Success");
});

myPromise.then(data => console.log(data));
```

---

## Streams & Zlib

### Definition
Used to handle large data efficiently without loading everything into memory.

### Concepts
- Readable Stream
- Writable Stream
- Piping
- Compression using zlib

---

## HTTP Server

### Definition
Creating backend services using Node.js http module.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000);
```

---

## Express.js

### Definition
Fast and minimal web framework for Node.js.

### Concepts
- Installing Express
- GET & POST methods
- express.Router
- express-validator
- Error Handling

---

# 🛠 How to Run

### 1️⃣ Clone Repository
```
git clone https://github.com/212myash/Learning-nodejs.git
```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Run Any File
```
node basics/filename.js
```

---

# 📈 What I Learned

- Backend fundamentals
- Node.js architecture
- Module system
- File handling
- Event-driven programming
- Async programming
- HTTP services
- Express basics

---

# 🎯 Future Goals

- REST API Development
- JWT Authentication
- Database Integration (MySQL / MongoDB)
- Microservices Architecture
- Full Backend Project

---

# 👨‍💻 Author

**Yash Raj**  
B.Tech CSE | Backend Developer (Learning Phase)

---

⭐ This repository is part of my backend learning journey.
