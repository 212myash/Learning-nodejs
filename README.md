# Learning Node.js

This repository contains my practice and learning code of **Node.js**.  
I created this repository to learn backend development step by step with practical examples.

I am currently learning Node.js fundamentals including modules, file system, events, and JSON handling.

---

# About Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine.  
It allows developers to run JavaScript outside the browser and build fast and scalable backend applications.

Node.js is commonly used for:
- Backend APIs
- Real-time applications
- REST services
- Microservices

---

# Topics Covered in This Repository

## 1. JavaScript Basics

Before learning Node.js, it is important to understand basic JavaScript concepts.

Concepts covered:
- Variables (var, let, const)
- Functions
- Arrays
- Objects
- If-else conditions
- Loops (for loop, while loop)
- Simple programs like:
  - Sum of two numbers
  - Even or odd number

Example concepts implemented:
- Declaring variables
- Writing functions
- Iterating arrays
- Working with objects

---

## 2. Node.js Modules

Modules are reusable blocks of code in Node.js.

Types of modules covered:

### Core Modules
These modules come built-in with Node.js.

Examples used:
- os module
- fs module

Example:
- Getting system information using os module

---

### Local Modules
Local modules are user-defined modules.

Concepts covered:
- Exporting functions using module.exports
- Importing modules using require()

Example:
- math.js (Addition, Subtraction, Multiplication, Division)
- data.js (Exporting user data)

---

### Third Party Modules
These modules are installed using npm.

Example:
- cat-me package

Concept learned:
- Installing packages using npm
- Using external libraries

---

## 3. File System Module (fs)

The File System module is used to work with files in Node.js.

Concepts covered:
- readFileSync()
- readFile()
- Checking file existence
- Reading files using callbacks
- Working with text files


Examples implemented:
- Reading files synchronously
- Reading files asynchronously
- Checking if file exists

---

## 4. EventEmitter

Node.js uses events heavily.

Concepts covered:
- Creating events
- Listening to events
- Emitting events


Example:
- Creating custom events and triggering them

---

## 5. JSON Handling

Concepts covered:
- Reading JSON files
- Writing JSON data

Examples:
- Parsing JSON
- Saving JSON data

---

### Streams and Compression

Concepts covered:
- Readable streams
- Writing streams
- File compression using zlib
- File decompression

---

## 6. Promises and Async/Await

Promises and Async/Await are used to handle asynchronous operations in JavaScript and Node.js.

Concepts covered:
- Creating a Promise
- resolve() and reject()
- then(), catch(), finally()
- async and await
- try...catch...finally

Examples:
- Creating and resolving a Promise
- Handling errors using catch()
- Fetching data using async/await
- Waiting for asynchronous operations

---

# Project Structure
```
Learning-nodejs/
│
├── basics/
├── modules/
├── fs-module/
├── event-emitter/
├── npm-packages/
├── promises/
├── JSON-Demo/
├── package.json
└── README.md
```
---

# How to Run This Project

### Step 1: Clone repository
     git clone https://github.com/212myash/Learning-nodejs.git

### Step 2: Open folder
     cd Learning-nodejs

### Step 3: Install dependencies
    npm install

### Step 4: Run any file
Example:
    node basics/basics.js


---

# Tools Used

- Node.js
- Visual Studio Code
- Git
- GitHub

---

# What I Learned From This Project

From this project I learned:
- Basics of JavaScript required for backend
- How Node.js works
- How modules work in Node.js
- How to read and write files
- How events work in Node.js
- How to use npm packages

---

# Future Learning Goals

Next topics I plan to learn:
- Express.js
- REST API development
- JWT Authentication
- Database connection (MySQL / MongoDB)
- Full backend project

---

# Author

Yash Raj

---

# Purpose of This Repository

This repository is created for:
- Learning Node.js
- Practicing backend development
- Improving coding skills
- Building GitHub portfolio
