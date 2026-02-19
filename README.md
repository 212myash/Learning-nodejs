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


---

## 6️. Streams & Compression

Streams allow processing large data in chunks instead of loading everything into memory.

Types of streams covered:
- Readable Streams
- Writable Streams
- Duplex Streams
- Transform Streams

Also implemented:
- File compression using `zlib`
- File decompression using `zlib`


---

## 7️. Basic HTTP Server & Routing

Created a basic HTTP server using Node.js built-in `http` module.

Concepts implemented:
- `http.createServer()`
- Handling `req` (request) and `res` (response)
- Routing using `req.url`
- Checking HTTP methods using `req.method`
- Sending HTML responses
- Handling 404 errors

Example Routes:
- `/` → Landing Page
- `/about` → About Page
- `/contact` → Contact Page


# Project Structure
```
Learning-nodejs/
│
├── basics/
├── modules/
├── fs-module/
├── event-emitter/
├── npm-packages/
├── JSON-Demo/
├── stream/
├── server/
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

# 🛠 Tools Used

- Node.js
- Visual Studio Code
- Git
- GitHub

---

# 🎯 What I Learned

Through this project, I learned:

- Core JavaScript concepts required for backend development
- How Node.js works internally
- Understanding modules in Node.js
- File handling using the fs module
- Event-driven programming
- Working with streams and compression
- Creating a basic HTTP server
- Implementing routing logic

---

# 🚀 Future Learning Goals

Next steps in my backend development journey:

- Express.js
- REST API development
- JWT Authentication
- Database integration (MySQL / MongoDB)
- Building a complete backend project

---

# 👨‍💻 Author

**Yash Raj**

---

# 🎓 Purpose of This Repository

This repository is created to:

- Learn Node.js step by step
- Practice backend development
- Improve problem-solving skills
- Build a strong GitHub portfolio
