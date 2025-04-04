export default [

    {
        "question": "Which keyword is used to declare a variable that can be reassigned?",
        "options": ["var", "let", "const", "None"],
        "answer": "let",
        "topic": "Basic topic"
    },
    {
        "question": "What will happen if you declare a variable without using var, let, or const?",
        "options": ["It will be a global variable", "It will throw an error", "It will be a local variable", "It won’t be declared"],
        "answer": "It will be a global variable",
        "topic": "Basic topic"
    },
    {
        "question": "Which variable declaration cannot be reassigned?",
        "options": ["var", "let", "const", "None"],
        "answer": "const",
        "topic": "Basic topic"
    },
    {
        "question": "Which of the following is a valid variable name in JavaScript?",
        "options": ["1var", "_varName", "var-name", "var name"],
        "answer": "_varName",
        "topic": "Basic topic"
    },

    // 6 Questions on Scope
    {
        "question": "Which keyword declares a block-scoped variable?",
        "options": ["var", "let", "const", "Both let and const"],
        "answer": "Both let and const",
        "topic": "Basic topic"
    },
    {
        "question": "What will be logged?\n\n```js\nfunction test() {\n  var a = 10;\n}\nconsole.log(a);\n```",
        "options": ["10", "undefined", "ReferenceError", "null"],
        "answer": "ReferenceError",
        "topic": "Basic topic"
    },
    {
        "question": "Which type of scope does `var` have?",
        "options": ["Block", "Function", "Global", "Both Function and Global"],
        "answer": "Both Function and Global",
        "topic": "Basic topic"
    },
    {
        "question": "What will be logged?\n\n```js\nlet x = 10;\nif (true) {\n  let x = 20;\n  console.log(x);\n}\nconsole.log(x);\n```",
        "options": ["10 10", "20 20", "20 10", "10 20"],
        "answer": "20 10",
        "topic": "Basic topic"
    },
    {
        "question": "Which of the following statements about global variables is true?",
        "options": ["They can be accessed anywhere", "They are function-scoped", "They can only be declared with let", "They must be declared inside a function"],
        "answer": "They can be accessed anywhere",
        "topic": "Basic topic"
    },
    {
        "question": "Which keyword allows you to create a variable inside a function without affecting the global scope?",
        "options": ["var", "let", "const", "Both let and const"],
        "answer": "Both let and const",
        "topic": "Basic topic"
    },

    // 2 Questions on Data Type
    {
        "question": "What is the result of `typeof null`?",
        "options": ["null", "undefined", "object", "number"],
        "answer": "object",
        "topic": "Basic topic"
    },
    {
        "question": "Which of the following is NOT a primitive data type?",
        "options": ["Number", "String", "Object", "Boolean"],
        "answer": "Object",
        "topic": "Basic topic"
    },

    // 5 Questions on Hoisting
    {
        "question": "Which variables are hoisted in JavaScript?",
        "options": ["Only var", "Only let and const", "All variables", "None"],
        "answer": "Only var",
        "topic": "Basic topic"
    },
    {
        "question": "What will be logged?\n\n```js\nconsole.log(a);\nvar a = 5;\n```",
        "options": ["5", "undefined", "ReferenceError", "null"],
        "answer": "undefined",
        "topic": "Basic topic"
    },
    {
        "question": "What happens when you access a `let` variable before its declaration?",
        "options": ["Returns undefined", "Throws a ReferenceError", "Returns null", "Works normally"],
        "answer": "Throws a ReferenceError",
        "topic": "Basic topic"
    },
    {
        "question": "Which of the following statements is true about function hoisting?",
        "options": ["Only function expressions are hoisted", "Function declarations are hoisted", "Both are hoisted", "Functions are not hoisted"],
        "answer": "Function declarations are hoisted",
        "topic": "Basic topic"
    },
    {
        "question": "Which will NOT be hoisted?\n\n```js\nconsole.log(test);\nlet test = 10;\n```",
        "options": ["var", "let", "const", "Both let and const"],
        "answer": "Both let and const",
        "topic": "Basic topic"
    },

    // 5 Questions on Conditions
    {
        "question": "Which of the following evaluates to `true`?",
        "options": ["0", "'false'", "null", "1"],
        "answer": "1",
        "topic": "Basic topic"
    },
    {
        "question": "What will `console.log(5 > 3 && 10 < 15)` return?",
        "options": ["true", "false", "undefined", "Error"],
        "answer": "true",
        "topic": "Basic topic"
    },
    {
        "question": "Which of the following is used for a switch case default condition?",
        "options": ["else", "default", "finally", "None"],
        "answer": "default",
        "topic": "Basic topic"
    },
    {
        "question": "What does `if (0)` evaluate to?",
        "options": ["true", "false", "undefined", "Error"],
        "answer": "false",
        "topic": "Basic topic"
    },
    {
        "question": "Which of these is a ternary operator?",
        "options": ["??", "&&", "||", "?: "],
        "answer": "?:",
        "topic": "Basic topic"
    },

    // 4 Questions on Operators
    {
        "question": "Which operator checks both value and type?",
        "options": ["==", "===", "!=", "!=="],
        "answer": "===",
        "topic": "Basic topic"
    },
    {
        "question": "What will be logged?\n\n```js\nconsole.log('5' + 5);\n```",
        "options": ["10", "'55'", "5", "Error"],
        "answer": "'55'",
        "topic": "Basic topic"
    },
    {
        "question": "What does the `!!` operator do?",
        "options": ["Negates a boolean", "Converts a value to a boolean", "Performs a logical AND", "None"],
        "answer": "Converts a value to a boolean",
        "topic": "Basic topic"
    },
    {
        "question": "Which operator is used for optional chaining?",
        "options": [".", "?.", "??", "!"],
        "answer": "?.",
        "topic": "Basic topic"
    },

    // 4 Questions on Loops
    {
        "question": "Which loop is best when the number of iterations is unknown?",
        "options": ["for", "while", "do...while", "forEach"],
        "answer": "while",
        "topic": "Basic topic"
    },
    {
        "question": "Which statement exits a loop early?",
        "options": ["continue", "break", "return", "stop"],
        "answer": "break",
        "topic": "Basic topic"
    },
    {
        "question": "Which loop guarantees at least one iteration?",
        "options": ["for", "while", "do...while", "None"],
        "answer": "do...while",
        "topic": "Basic topic"
    },
    {
        "question": "Which loop is best suited for iterating over an array?",
        "options": ["for", "while", "forEach", "do...while"],
        "answer": "forEach",
        "topic": "Basic topic"
    },
    {
        "question": "Which keyword is used to define a function in JavaScript?",
        "options": ["func", "function", "def", "lambda"],
        "answer": "function",
        "topic": "Intermediate topic"
    },
    {
        "question": "How do you define a function expression in JavaScript?",
        "options": [
            "function myFunc() {}",
            "let myFunc = function() {}",
            "const myFunc = () => {}",
            "Both B and C"
        ],
        "answer": "Both B and C",
        "topic": "Intermediate topic"
    },
    {
        "question": "What will be the output of `console.log(typeof function(){});`?",
        "options": ["function", "object", "undefined", "string"],
        "answer": "function",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is a higher-order function?",
        "options": [
            "A function that returns another function",
            "A function that takes another function as an argument",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Both A and B",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which statement is true about arrow functions?",
        "options": [
            "They do not have their own `this` context",
            "They can be used as constructors",
            "They support `arguments` object",
            "They are slower than normal functions"
        ],
        "answer": "They do not have their own `this` context",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which of the following is a correct way to pass default parameters in a function?",
        "options": [
            "function myFunc(a = 10, b = 20) {}",
            "function myFunc(a, b) { a = 10; b = 20; }",
            "function myFunc(a, b) { a ||= 10; b ||= 20; }",
            "function myFunc(a, b) { a ?= 10; b ?= 20; }"
        ],
        "answer": "function myFunc(a = 10, b = 20) {}",
        "topic": "Intermediate topic"
    },
    {
        "question": "How do you create an object in JavaScript?",
        "options": [
            "let obj = new Object();",
            "let obj = {};",
            "let obj = Object.create(null);",
            "All of the above"
        ],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method is used to get the keys of an object?",
        "options": ["Object.values()", "Object.entries()", "Object.keys()", "Object.getOwnPropertyNames()"],
        "answer": "Object.keys()",
        "topic": "Intermediate topic"
    },
    {
        "question": "How can you prevent an object from being modified?",
        "options": ["Object.freeze(obj)", "Object.preventExtensions(obj)", "Object.seal(obj)", "All of the above"],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method converts an object into an array of key-value pairs?",
        "options": ["Object.entries()", "Object.keys()", "Object.values()", "JSON.stringify()"],
        "answer": "Object.entries()",
        "topic": "Intermediate topic"
    },
    {
        "question": "What does `Object.assign({}, obj)` do?",
        "options": [
            "Creates a shallow copy of `obj`",
            "Creates a deep copy of `obj`",
            "Modifies `obj`",
            "None of the above"
        ],
        "answer": "Creates a shallow copy of `obj`",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method allows merging two objects?",
        "options": ["Object.assign()", "spread operator (...)", "Both A and B", "None of the above"],
        "answer": "Both A and B",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is object destructuring in JavaScript?",
        "options": [
            "Extracting values from an object into variables",
            "Deleting properties from an object",
            "Modifying object properties",
            "None of the above"
        ],
        "answer": "Extracting values from an object into variables",
        "topic": "Intermediate topic"
    },
    {
        "question": "How do you rename a variable while destructuring an object?",
        "options": [
            "const { oldName: newName } = obj;",
            "const { oldName as newName } = obj;",
            "const [oldName: newName] = obj;",
            "const newName = obj.oldName;"
        ],
        "answer": "const { oldName: newName } = obj;",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which function converts a value to a number?",
        "options": ["parseInt()", "parseFloat()", "Number()", "All of the above"],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is function currying?",
        "options": [
            "Breaking a function into multiple functions",
            "Returning a function from another function",
            "Creating a function that takes arguments one at a time",
            "None of the above"
        ],
        "answer": "Creating a function that takes arguments one at a time",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is a closure in JavaScript?",
        "options": [
            "A function with access to its parent scope",
            "A function that is immediately invoked",
            "A function that executes only once",
            "None of the above"
        ],
        "answer": "A function with access to its parent scope",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method allows a function to be called with a specific `this` value?",
        "options": ["call()", "apply()", "bind()", "All of the above"],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is the difference between `call` and `apply`?",
        "options": [
            "call() takes arguments individually, apply() takes an array",
            "apply() takes arguments individually, call() takes an array",
            "They are the same",
            "None of the above"
        ],
        "answer": "call() takes arguments individually, apply() takes an array",
        "topic": "Intermediate topic"
    }
    ,
    {
        "question": "Which keyword is used to define a function in JavaScript?",
        "options": ["func", "def", "function", "define"],
        "answer": "function",
        "topic": "Intermediate topic"
    },
    {
        "question": "What will `typeof function() {}` return?",
        "options": ["function", "object", "undefined", "string"],
        "answer": "function",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is the default return value of a function that does not return anything?",
        "options": ["null", "undefined", "0", "false"],
        "answer": "undefined",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which of the following is NOT a way to define a function?",
        "options": [
            "Function Declaration",
            "Function Expression",
            "Arrow Function",
            "Class Function"
        ],
        "answer": "Class Function",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which statement about function hoisting is correct?",
        "options": [
            "Function declarations are hoisted",
            "Function expressions are hoisted",
            "Both are hoisted",
            "Neither are hoisted"
        ],
        "answer": "Function declarations are hoisted",
        "topic": "Intermediate topic"
    },
    {
        "question": "How can you define an arrow function in JavaScript?",
        "options": [
            "const myFunc = function() {}",
            "const myFunc = () => {}",
            "function myFunc() {}",
            "Both A and C"
        ],
        "answer": "const myFunc = () => {}",
        "topic": "Intermediate topic"
    }, {
        "question": "Which keyword is used to define an object in JavaScript?",
        "options": ["class", "object", "var", "{}"],
        "answer": "{}",
        "topic": "Intermediate topic"
    },
    {
        "question": "How do you access the property `name` of an object `person`?",
        "options": ["person.name", "person[name]", "person->name", "person::name"],
        "answer": "person.name",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method is used to get the keys of an object?",
        "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.get()"],
        "answer": "Object.keys()",
        "topic": "Intermediate topic"
    },
    {
        "question": "How can you check if an object has a specific property?",
        "options": [
            "'name' in obj",
            "obj.hasOwnProperty('name')",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Both A and B",
        "topic": "Intermediate topic"
    },
    {
        "question": "What does `Object.assign({}, obj1, obj2)` do?",
        "options": [
            "Merge obj1 and obj2 into a new object",
            "Modify obj1 directly",
            "Create a deep copy of obj1 and obj2",
            "Throw an error"
        ],
        "answer": "Merge obj1 and obj2 into a new object",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method is used to get both keys and values of an object?",
        "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.getProperties()"],
        "answer": "Object.entries()",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which statement correctly uses object destructuring?",
        "options": [
            "const { name } = person;",
            "const name = person.name;",
            "const name = { person };",
            "const [ name ] = person;"
        ],
        "answer": "const { name } = person;",
        "topic": "Intermediate topic"
    },

    {
        "question": "What is the result of `Boolean('')`?",
        "options": ["true", "false", "NaN", "undefined"],
        "answer": "false",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which method converts a number to a string?",
        "options": ["toString()", "String()", "Both A and B", "None"],
        "answer": "Both A and B",
        "topic": "Intermediate topic"
    },
    {
        "question": "What will `parseInt('10px')` return?",
        "options": ["10", "NaN", "'10px'", "0"],
        "answer": "10",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which of the following will return `true`?",
        "options": [
            "Boolean(0)",
            "Boolean('false')",
            "Boolean('')",
            "Boolean(null)"
        ],
        "answer": "Boolean('false')",
        "topic": "Intermediate topic"
    },
    {
        "question": "What will `+'99'` return?",
        "options": ["99", "'99'", "NaN", "Error"],
        "answer": "99",
        "topic": "Intermediate topic"
    }, {
        "question": "What is function currying in JavaScript?",
        "options": [
            "A function that takes multiple arguments at once",
            "A function that returns another function with some arguments pre-applied",
            "A function that executes immediately",
            "A function that modifies `this` context"
        ],
        "answer": "A function that returns another function with some arguments pre-applied",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which of the following is an example of a curried function?",
        "options": [
            "function add(a, b) { return a + b; }",
            "const add = a => b => a + b;",
            "function add(a) { return function(b) { return a + b; }; }",
            "Both B and C"
        ],
        "answer": "Both B and C",
        "topic": "Intermediate topic"
    },
    {
        "question": "What is the main advantage of function currying?",
        "options": [
            "It reduces the number of functions in a program",
            "It allows partial application of arguments",
            "It makes the code run faster",
            "It converts functions into objects"
        ],
        "answer": "It allows partial application of arguments",
        "topic": "Intermediate topic"
    },
    {
        "question": "How can you implement currying in JavaScript?",
        "options": [
            "Using nested functions",
            "Using the bind() method",
            "Using closures",
            "All of the above"
        ],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    }, {
        "question": "What is a closure in JavaScript?",
        "options": [
            "A function inside another function",
            "A function that remembers its lexical scope even when executed outside of it",
            "A function that executes immediately",
            "A function that modifies the global scope"
        ],
        "answer": "A function that remembers its lexical scope even when executed outside of it",
        "topic": "Intermediate topic"
    },
    {
        "question": "Why are closures useful in JavaScript?",
        "options": [
            "They help in data encapsulation",
            "They allow functions to retain access to variables even after execution",
            "They are used for creating private variables",
            "All of the above"
        ],
        "answer": "All of the above",
        "topic": "Intermediate topic"
    },
    {
        "question": "Which of the following best demonstrates a closure?",
        "options": [
            "function outer() { let count = 0; return function inner() { count++; return count; } }",
            "function add(a, b) { return a + b; }",
            "const multiply = (a, b) => a * b;",
            "let count = 0; function increment() { count++; return count; }"
        ],
        "answer": "function outer() { let count = 0; return function inner() { count++; return count; } }",
        "topic": "Intermediate topic"
    },
    {
        "question": "What will be the output of the following code?\n```js\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\nconst counter = outer();\ncounter();\ncounter();\n```",
        "options": ["1, 1", "1, 2", "0, 1", "2, 2"],
        "answer": "1, 2",
        "topic": "Intermediate topic"
    }, {
        "question": "What is the call stack in JavaScript?",
        "options": [
            "A data structure that tracks function calls",
            "A queue that handles asynchronous tasks",
            "A heap memory management system",
            "An event loop that manages execution"
        ],
        "answer": "A data structure that tracks function calls",
        "topic": "Advanced topic"
    },
    {
        "question": "What happens when a function is called in JavaScript?",
        "options": [
            "It is pushed onto the call stack",
            "It is added to the event loop",
            "It is sent to the web API for execution",
            "It is executed in the background"
        ],
        "answer": "It is pushed onto the call stack",
        "topic": "Advanced topic"
    },
    {
        "question": "What causes a stack overflow in JavaScript?",
        "options": [
            "Too many nested loops",
            "Too many functions being pushed onto the call stack without being popped",
            "Too many event listeners",
            "Too many variables being declared"
        ],
        "answer": "Too many functions being pushed onto the call stack without being popped",
        "topic": "Advanced topic"
    },
    {
        "question": "Which function is always at the bottom of the call stack?",
        "options": [
            "The first function executed in the script",
            "The last function that was called",
            "The function currently being executed",
            "The global execution context"
        ],
        "answer": "The global execution context",
        "topic": "Advanced topic"
    },
    {
        "question": "What happens when the call stack is empty?",
        "options": [
            "The event loop continues executing tasks from the callback queue",
            "JavaScript stops execution",
            "The heap memory gets cleared",
            "Garbage collection occurs"
        ],
        "answer": "The event loop continues executing tasks from the callback queue",
        "topic": "Advanced topic"
    },
    {
        "question": "How can you inspect the call stack in JavaScript?",
        "options": [
            "Using console.log()",
            "Using console.trace()",
            "Using document.getElementById()",
            "Using setTimeout()"
        ],
        "answer": "Using console.trace()",
        "topic": "Advanced topic"
    }, {
        "question": "What is a Promise?",
        "options": [
            "A callback",
            "An async function",
            "An object for async operations",
            "A synchronous method"
        ],
        "answer": "An object for async operations",
        "topic": "Advanced topic"
    },
    {
        "question": "What are the Promise states?",
        "options": [
            "Pending, Fulfilled, Rejected",
            "Start, Process, End",
            "Waiting, Done, Failed",
            "Loading, Success, Error"
        ],
        "answer": "Pending, Fulfilled, Rejected",
        "topic": "Advanced topic"
    },
    {
        "question": "Which method handles Promise rejection?",
        "options": [
            ".then()",
            ".catch()",
            ".finally()",
            ".resolve()"
        ],
        "answer": ".catch()",
        "topic": "Advanced topic"
    },
    {
        "question": "What does Promise.all() do?",
        "options": [
            "Runs Promises in sequence",
            "Waits for all Promises to resolve",
            "Returns the first resolved Promise",
            "Ignores rejected Promises"
        ],
        "answer": "Waits for all Promises to resolve",
        "topic": "Advanced topic"
    },
    {
        "question": "Which method returns the first resolved Promise?",
        "options": [
            "Promise.all()",
            "Promise.any()",
            "Promise.race()",
            "Promise.resolve()"
        ],
        "answer": "Promise.race()",
        "topic": "Advanced topic"
    },
    {
        "question": "What does async/await do?",
        "options": [
            "Creates a new Promise",
            "Handles Promises in a sync way",
            "Removes the need for Promises",
            "Rejects all Promises"
        ],
        "answer": "Handles Promises in a sync way",
        "topic": "Advanced topic"
    }, {
        "question": "What happens if an async function has no return statement?",
        "options": [
            "It returns undefined",
            "It returns null",
            "It returns a Promise that resolves to undefined",
            "It throws an error"
        ],
        "answer": "It returns a Promise that resolves to undefined",
        "topic": "Advanced topic"
    },
    {
        "question": "How does JavaScript handle multiple await calls inside a loop?",
        "options": [
            "Executes them in parallel",
            "Executes them sequentially",
            "Skips the await keyword",
            "Throws an error"
        ],
        "answer": "Executes them sequentially",
        "topic": "Advanced topic"
    },
    {
        "question": "What is a potential downside of using await inside a loop?",
        "options": [
            "It makes the loop execute sequentially, slowing performance",
            "It causes memory leaks",
            "It blocks the entire JavaScript thread",
            "It automatically converts values into Promises"
        ],
        "answer": "It makes the loop execute sequentially, slowing performance",
        "topic": "Advanced topic"
    },
    {
        "question": "What happens if an async function throws an error and there is no try-catch?",
        "options": [
            "The error is silently ignored",
            "The function execution is paused",
            "The returned Promise is rejected",
            "JavaScript crashes"
        ],
        "answer": "The returned Promise is rejected",
        "topic": "Advanced topic"
    },
    {
        "question": "How can you execute multiple async tasks in parallel efficiently?",
        "options": [
            "Using multiple await statements in sequence",
            "Using Promise.all()",
            "Using nested async functions",
            "Using a setTimeout with async"
        ],
        "answer": "Using Promise.all()",
        "topic": "Advanced topic"
    },
    {
        "question": "Why should you avoid mixing async/await with .then()/.catch()?",
        "options": [
            "It leads to unpredictable execution order",
            "It blocks the event loop",
            "It converts Promises into callbacks",
            "JavaScript does not support both together"
        ],
        "answer": "It leads to unpredictable execution order",
        "topic": "Advanced topic"
    }, {
        "question": "What will Math.round(4.5) return in JavaScript?",
        "options": [
            "4",
            "5",
            "4.5",
            "Error"
        ],
        "answer": "5",
        "topic": "Advanced topic"
    },
    {
        "question": "What does Math.random() return?",
        "options": [
            "A random integer between 0 and 100",
            "A random float between 0 and 1",
            "A random integer between 1 and 10",
            "A random boolean value"
        ],
        "answer": "A random float between 0 and 1",
        "topic": "Advanced topic"
    },
    {
        "question": "Which method returns the largest integer less than or equal to a given number?",
        "options": [
            "Math.round()",
            "Math.ceil()",
            "Math.floor()",
            "Math.trunc()"
        ],
        "answer": "Math.floor()",
        "topic": "Advanced topic"
    },
    {
        "question": "How do you get a random integer between 1 and 10 in JavaScript?",
        "options": [
            "Math.random() * 10",
            "Math.floor(Math.random() * 10) + 1",
            "Math.ceil(Math.random() * 10)",
            "Math.round(Math.random() * 10)"
        ],
        "answer": "Math.floor(Math.random() * 10) + 1",
        "topic": "Advanced topic"
    },
    {
        "question": "What does Math.trunc(4.9) return?",
        "options": [
            "4",
            "5",
            "4.9",
            "0"
        ],
        "answer": "4",
        "topic": "Advanced topic"
    },
    {
        "question": "What is the result of Math.pow(2, 3)?",
        "options": [
            "6",
            "8",
            "9",
            "16"
        ],
        "answer": "8",
        "topic": "Advanced topic"
    }, {
        "question": "What does new Date(0) return?",
        "options": [
            "Current date and time",
            "January 1, 1970, 00:00:00 UTC",
            "Invalid Date",
            "System-dependent date"
        ],
        "answer": "January 1, 1970, 00:00:00 UTC",
        "topic": "Advanced topic"
    },
    {
        "question": "Which method returns the day of the week as a number (0-6) in JavaScript?",
        "options": [
            "getDate()",
            "getDay()",
            "getWeek()",
            "getUTCDate()"
        ],
        "answer": "getDay()",
        "topic": "Advanced topic"
    },
    {
        "question": "How do you get the current timestamp in milliseconds in JavaScript?",
        "options": [
            "Date.now()",
            "new Date().milliseconds()",
            "new Date().getTime()",
            "Both Date.now() and new Date().getTime()"
        ],
        "answer": "Both Date.now() and new Date().getTime()",
        "topic": "Advanced topic"
    },
    {
        "question": "How can you create a Date object for a specific date in JavaScript?",
        "options": [
            "new Date('2024-04-03')",
            "new Date(2024, 3, 3)",
            "new Date(2024, 3, 3, 12, 30, 0)",
            "All of the above"
        ],
        "answer": "All of the above",
        "topic": "Advanced topic"
    },
    {
        "question": "Which method converts a Date object to a readable string format?",
        "options": [
            "toDateString()",
            "toUTCString()",
            "toISOString()",
            "All of the above"
        ],
        "answer": "All of the above",
        "topic": "Advanced topic"
    },
    {
        "question": "What will new Date('2024-02-30') return?",
        "options": [
            "February 30, 2024",
            "March 1, 2024",
            "Invalid Date",
            "An error"
        ],
        "answer": "Invalid Date",
        "topic": "Advanced topic"
    }, {
        "question": "What does [1, 2, 3].map(x => x * 2) return?",
        "options": [
            "[2, 4, 6]",
            "[1, 2, 3]",
            "undefined",
            "Error"
        ],
        "answer": "[2, 4, 6]",
        "topic": "Array Methods"
    },
    {
        "question": "Which method is used to transform each element of an array and return a new array?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "forEach()"
        ],
        "answer": "map()",
        "topic": "Array Methods"
    },
    {
        "question": "What does [2, 4, 6].map(x => x / 2) return?",
        "options": [
            "[1, 2, 3]",
            "[2, 4, 6]",
            "[1, 4, 9]",
            "Error"
        ],
        "answer": "[1, 2, 3]",
        "topic": "Array Methods"
    },
    {
        "question": "What will [1, 2, 3, 4].filter(x => x % 2 === 0) return?",
        "options": [
            "[2, 4]",
            "[1, 3]",
            "[1, 2, 3, 4]",
            "undefined"
        ],
        "answer": "[2, 4]",
        "topic": "Array Methods"
    },
    {
        "question": "Which method is used to create a new array with elements that match a condition?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "sort()"
        ],
        "answer": "filter()",
        "topic": "Array Methods"
    },
    {
        "question": "What does ['apple', 'banana', 'orange'].filter(fruit => fruit.includes('a')) return?",
        "options": [
            "['apple', 'banana']",
            "['banana', 'orange']",
            "['apple', 'banana', 'orange']",
            "['orange']"
        ],
        "answer": "['apple', 'banana']",
        "topic": "Array Methods"
    },
    {
        "question": "What does [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0) return?",
        "options": [
            "10",
            "0",
            "[1, 2, 3, 4]",
            "undefined"
        ],
        "answer": "10",
        "topic": "Array Methods"
    },
    {
        "question": "Which method is used to accumulate values from an array into a single value?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "forEach()"
        ],
        "answer": "reduce()",
        "topic": "Array Methods"
    },
    {
        "question": "What does [5, 10, 15].reduce((acc, cur) => acc + cur, 5) return?",
        "options": [
            "35",
            "30",
            "15",
            "5"
        ],
        "answer": "35",
        "topic": "Array Methods"
    },
    {
        "question": "What will [1, 2, 3].map(x => x + 'a') return?",
        "options": [
            "['1a', '2a', '3a']",
            "[1, 2, 3]",
            "['a1', 'a2', 'a3']",
            "Error"
        ],
        "answer": "['1a', '2a', '3a']",
        "topic": "Array Methods"
    },
    {
        "question": "What does [10, 20, 30].reduce((acc, cur) => acc * cur, 1) return?",
        "options": [
            "6000",
            "60",
            "10",
            "1"
        ],
        "answer": "6000",
        "topic": "Array Methods"
    },
    {
        "question": "What will ['a', 'b', 'c'].map(x => x.toUpperCase()) return?",
        "options": [
            "['A', 'B', 'C']",
            "['a', 'b', 'c']",
            "['a', 'B', 'C']",
            "Error"
        ],
        "answer": "['A', 'B', 'C']",
        "topic": "Array Methods"
    }, {
        "question": "Which method adds an element to the end of an array?",
        "options": [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        "answer": "push()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method removes the last element from an array?",
        "options": [
            "pop()",
            "push()",
            "shift()",
            "splice()"
        ],
        "answer": "pop()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method removes the first element from an array?",
        "options": [
            "shift()",
            "pop()",
            "unshift()",
            "slice()"
        ],
        "answer": "shift()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method adds an element to the beginning of an array?",
        "options": [
            "unshift()",
            "push()",
            "shift()",
            "concat()"
        ],
        "answer": "unshift()",
        "topic": "Array Methods"
    },
    {
        "question": "What does [1, 2, 3].concat([4, 5]) return?",
        "options": [
            "[1, 2, 3, 4, 5]",
            "[[1, 2, 3], [4, 5]]",
            "[1, 2, 3]",
            "[4, 5]"
        ],
        "answer": "[1, 2, 3, 4, 5]",
        "topic": "Array Methods"
    },
    {
        "question": "Which method returns a shallow copy of a portion of an array?",
        "options": [
            "slice()",
            "splice()",
            "concat()",
            "filter()"
        ],
        "answer": "slice()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method removes or replaces existing elements in an array?",
        "options": [
            "splice()",
            "slice()",
            "pop()",
            "shift()"
        ],
        "answer": "splice()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method returns the first index of a specified element in an array?",
        "options": [
            "indexOf()",
            "findIndex()",
            "includes()",
            "lastIndexOf()"
        ],
        "answer": "indexOf()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method returns the last index of a specified element in an array?",
        "options": [
            "lastIndexOf()",
            "indexOf()",
            "findIndex()",
            "includes()"
        ],
        "answer": "lastIndexOf()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method checks if an array contains a specific element?",
        "options": [
            "includes()",
            "indexOf()",
            "find()",
            "some()"
        ],
        "answer": "includes()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method reverses the order of elements in an array?",
        "options": [
            "reverse()",
            "sort()",
            "toReversed()",
            "map()"
        ],
        "answer": "reverse()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method sorts the elements of an array alphabetically by default?",
        "options": [
            "sort()",
            "order()",
            "arrange()",
            "setOrder()"
        ],
        "answer": "sort()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method checks if every element in an array passes a test?",
        "options": [
            "every()",
            "some()",
            "find()",
            "filter()"
        ],
        "answer": "every()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method creates an array from an iterable object?",
        "options": [
            "Array.from()",
            "Array.of()",
            "concat()",
            "flat()"
        ],
        "answer": "Array.from()",
        "topic": "Array Methods"
    },
    {
        "question": "Which method creates a new array from a set of values?",
        "options": [
            "Array.of()",
            "Array.from()",
            "concat()",
            "splice()"
        ],
        "answer": "Array.of()",
        "topic": "Array Methods"
    }, {
        "question": "Which method returns the length of a string?",
        "options": [
            "length",
            "size()",
            "count()",
            "getLength()"
        ],
        "answer": "length",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a string to uppercase?",
        "options": [
            "toUpperCase()",
            "toLowerCase()",
            "capitalize()",
            "upper()"
        ],
        "answer": "toUpperCase()",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a string to lowercase?",
        "options": [
            "toLowerCase()",
            "toUpperCase()",
            "smallCase()",
            "lower()"
        ],
        "answer": "toLowerCase()",
        "topic": "String Methods"
    },
    {
        "question": "Which method removes whitespace from both ends of a string?",
        "options": [
            "trim()",
            "strip()",
            "cut()",
            "slice()"
        ],
        "answer": "trim()",
        "topic": "String Methods"
    },
    {
        "question": "Which method returns the character at a specific index?",
        "options": [
            "charAt()",
            "getChar()",
            "characterAt()",
            "indexOf()"
        ],
        "answer": "charAt()",
        "topic": "String Methods"
    },
    {
        "question": "Which method returns the Unicode value of a character at a specific index?",
        "options": [
            "charCodeAt()",
            "codeAt()",
            "getUnicode()",
            "charAt()"
        ],
        "answer": "charCodeAt()",
        "topic": "String Methods"
    },
    {
        "question": "Which method joins two or more strings?",
        "options": [
            "concat()",
            "join()",
            "append()",
            "merge()"
        ],
        "answer": "concat()",
        "topic": "String Methods"
    },
    {
        "question": "Which method splits a string into an array based on a specified separator?",
        "options": [
            "split()",
            "divide()",
            "explode()",
            "separate()"
        ],
        "answer": "split()",
        "topic": "String Methods"
    },
    {
        "question": "Which method extracts a portion of a string?",
        "options": [
            "slice()",
            "splice()",
            "cut()",
            "split()"
        ],
        "answer": "slice()",
        "topic": "String Methods"
    },
    {
        "question": "Which method replaces a specified value in a string with another value?",
        "options": [
            "replace()",
            "swap()",
            "substitute()",
            "change()"
        ],
        "answer": "replace()",
        "topic": "String Methods"
    },
    {
        "question": "Which method checks if a string contains a specific substring?",
        "options": [
            "includes()",
            "contains()",
            "has()",
            "exists()"
        ],
        "answer": "includes()",
        "topic": "String Methods"
    },
    {
        "question": "Which method finds the first occurrence of a specified value in a string?",
        "options": [
            "indexOf()",
            "search()",
            "find()",
            "position()"
        ],
        "answer": "indexOf()",
        "topic": "String Methods"
    },
    {
        "question": "Which method finds the last occurrence of a specified value in a string?",
        "options": [
            "lastIndexOf()",
            "indexOf()",
            "search()",
            "findLast()"
        ],
        "answer": "lastIndexOf()",
        "topic": "String Methods"
    },
    {
        "question": "Which method determines whether a string starts with a specific substring?",
        "options": [
            "startsWith()",
            "beginsWith()",
            "first()",
            "hasStart()"
        ],
        "answer": "startsWith()",
        "topic": "String Methods"
    },
    {
        "question": "Which method determines whether a string ends with a specific substring?",
        "options": [
            "endsWith()",
            "finishWith()",
            "last()",
            "hasEnd()"
        ],
        "answer": "endsWith()",
        "topic": "String Methods"
    },
    {
        "question": "Which method pads a string at the beginning with another string?",
        "options": [
            "padStart()",
            "padLeft()",
            "startPad()",
            "prepend()"
        ],
        "answer": "padStart()",
        "topic": "String Methods"
    },
    {
        "question": "Which method pads a string at the end with another string?",
        "options": [
            "padEnd()",
            "padRight()",
            "endPad()",
            "append()"
        ],
        "answer": "padEnd()",
        "topic": "String Methods"
    },
    {
        "question": "Which method repeats a string a specified number of times?",
        "options": [
            "repeat()",
            "duplicate()",
            "multiply()",
            "clone()"
        ],
        "answer": "repeat()",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a string into an array of characters?",
        "options": [
            "split('')",
            "charArray()",
            "toArray()",
            "explode()"
        ],
        "answer": "split('')",
        "topic": "String Methods"
    },
    {
        "question": "Which method searches a string for a match using a regular expression?",
        "options": [
            "match()",
            "search()",
            "test()",
            "find()"
        ],
        "answer": "match()",
        "topic": "String Methods"
    },
    {
        "question": "Which method extracts a substring from a string?",
        "options": [
            "substring()",
            "slice()",
            "subString()",
            "splice()"
        ],
        "answer": "substring()",
        "topic": "String Methods"
    },
    {
        "question": "Which method tests if a string matches a pattern?",
        "options": [
            "test()",
            "search()",
            "match()",
            "verify()"
        ],
        "answer": "test()",
        "topic": "String Methods"
    },
    {
        "question": "Which method returns the primitive value of a String object?",
        "options": [
            "valueOf()",
            "toString()",
            "primitive()",
            "convert()"
        ],
        "answer": "valueOf()",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a string to an integer?",
        "options": [
            "parseInt()",
            "toInteger()",
            "convertInt()",
            "intValue()"
        ],
        "answer": "parseInt()",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a string to a float?",
        "options": [
            "parseFloat()",
            "toFloat()",
            "convertFloat()",
            "floatValue()"
        ],
        "answer": "parseFloat()",
        "topic": "String Methods"
    },
    {
        "question": "Which method converts a number to a string?",
        "options": [
            "toString()",
            "stringify()",
            "convertString()",
            "numToStr()"
        ],
        "answer": "toString()",
        "topic": "String Methods"
    },
    {
        "question": "Which method is used to get an element by its ID?",
        "options": [
            "getElementById()",
            "getElement()",
            "querySelector()",
            "getById()"
        ],
        "answer": "getElementById()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to select elements by their class name?",
        "options": [
            "getElementsByClassName()",
            "querySelector()",
            "getByClass()",
            "getClassName()"
        ],
        "answer": "getElementsByClassName()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to select the first element that matches a CSS selector?",
        "options": [
            "querySelector()",
            "getElementById()",
            "getElementsByTagName()",
            "querySelectorAll()"
        ],
        "answer": "querySelector()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to get all elements with a specified tag name?",
        "options": [
            "getElementsByTagName()",
            "getElementsByClassName()",
            "querySelectorAll()",
            "querySelector()"
        ],
        "answer": "getElementsByTagName()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to add a new class to an element?",
        "options": [
            "classList.add()",
            "addClass()",
            "setClass()",
            "class.add()"
        ],
        "answer": "classList.add()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to change the inner HTML of an element?",
        "options": [
            "innerHTML",
            "textContent",
            "innerText",
            "htmlContent"
        ],
        "answer": "innerHTML",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to change the text content of an element?",
        "options": [
            "textContent",
            "innerHTML",
            "innerText",
            "htmlText"
        ],
        "answer": "textContent",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to remove an element from the DOM?",
        "options": [
            "remove()",
            "delete()",
            "removeChild()",
            "destroy()"
        ],
        "answer": "remove()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to access an element's attribute?",
        "options": [
            "getAttribute()",
            "setAttribute()",
            "attr()",
            "attribute()"
        ],
        "answer": "getAttribute()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to set a specific attribute to an element?",
        "options": [
            "setAttribute()",
            "setAttr()",
            "setProperty()",
            "addAttribute()"
        ],
        "answer": "setAttribute()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to access the value of an input element?",
        "options": [
            "value",
            "inputValue",
            "textValue",
            "getValue()"
        ],
        "answer": "value",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to add an event listener to an element?",
        "options": [
            "addEventListener()",
            "attachEvent()",
            "onClick()",
            "bind()"
        ],
        "answer": "addEventListener()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to remove an event listener from an element?",
        "options": [
            "removeEventListener()",
            "detachEvent()",
            "off()",
            "unbind()"
        ],
        "answer": "removeEventListener()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property returns the number of child nodes of an element?",
        "options": [
            "childNodes.length",
            "children.length",
            "countChild()",
            "numChildren()"
        ],
        "answer": "childNodes.length",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to get the parent node of an element?",
        "options": [
            "parentNode",
            "getParent()",
            "parent()",
            "upNode()"
        ],
        "answer": "parentNode",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to create a new element in the DOM?",
        "options": [
            "createElement()",
            "createNode()",
            "newElement()",
            "create()"
        ],
        "answer": "createElement()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to append a child element to an existing element?",
        "options": [
            "appendChild()",
            "addChild()",
            "insertChild()",
            "append()"
        ],
        "answer": "appendChild()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to get the height of an element?",
        "options": [
            "offsetHeight",
            "height",
            "getHeight()",
            "clientHeight"
        ],
        "answer": "offsetHeight",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to get the dimensions of an element including padding?",
        "options": [
            "getBoundingClientRect()",
            "getDimensions()",
            "measure()",
            "clientDimensions()"
        ],
        "answer": "getBoundingClientRect()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to scroll an element into view?",
        "options": [
            "scrollIntoView()",
            "scroll()",
            "smoothScroll()",
            "scrollElement()"
        ],
        "answer": "scrollIntoView()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property is used to check if an element is currently visible on the page?",
        "options": [
            "hidden",
            "visibility",
            "isVisible()",
            "style.visibility"
        ],
        "answer": "hidden",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to toggle a class on an element?",
        "options": [
            "classList.toggle()",
            "toggleClass()",
            "setClass()",
            "addClass()"
        ],
        "answer": "classList.toggle()",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to get the class list of an element?",
        "options": [
            "classList",
            "getClassList()",
            "getClass()",
            "classes()"
        ],
        "answer": "classList",
        "topic": "DOM Objects"
    },
    {
        "question": "Which property provides access to the document's head element?",
        "options": [
            "document.head",
            "document.body",
            "document.top",
            "document.title"
        ],
        "answer": "document.head",
        "topic": "DOM Objects"
    },
    {
        "question": "Which method is used to open a new browser window?",
        "options": [
            "window.open()",
            "openWindow()",
            "newWindow()",
            "window.create()"
        ],
        "answer": "window.open()",
        "topic": "DOM Objects"
    }


]

 