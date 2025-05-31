# Node.js Global Objects

There is no `window` object in Node.js. The `window` object is a browser-specific object.

In Node.js, we have the following global objects:

---

## 1. `__dirname`

This is a built-in Node.js global object that returns the directory name of the current module.

**Example:**
```js
console.log(__dirname); // Outputs the directory path of the current file
```

---

## 2. `__filename`

This is a built-in Node.js global object that returns the filename of the current module.

**Example:**
```js
console.log(__filename); // Outputs the full path and filename of the current file
```

---

## 3. `process`

This is a built-in Node.js global object that provides information about, and control over, the current Node.js process. In simple words, it gives info about the environment where the program is being executed.

**Example:**
```js
console.log(process.platform); // Outputs the platform (e.g., 'win32')
console.log(process.env.NODE_ENV); // Outputs the value of NODE_ENV environment variable
```

---

## 4. `module`

Provides information about the current module (file).

**Example:**
```js
console.log(module); // Outputs details about the current module
```

---

## 5. `require`

This is a built-in Node.js function that allows you to import modules in your code.

**Example:**
```js
const fs = require('fs'); // Imports the built-in 'fs' module
```

---