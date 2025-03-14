let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Type Multi Language",
            "Hyper Text Multiple Language",
            "Hyper Text Markup Language",
            "Home Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Cascading Style Sheet",
            "Cute Style Sheet",
            "Computer Style Sheet",
            "Codehal Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hometext Programming",
            "Hypertext Preprogramming",
            "Programming Hypertext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Strength Query Language",
            "Stylesheet Query Language",
            "Science Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "Extensible Markup Language",
        options: [
            "Excellent Multiple Language",
            "Explore Multiple Language",
            "Extra Markup Language",
            "Extensible Markup Language"
        ]
    }
];
// let questions = [
//     {
//         numb: 1,
//         question: "Which company developed JavaScript?",
//         answer: "C) Netscape",
//         options:[
//             "A) Google",
//             "B) Microsoft ",
//             "C) Netscape", 
//             "D) Apple"
//         ]
//     },
//     {
//         numb: 2,
//         question: "Which event occurs when the user clicks on an HTML element?",
//         answer: "A) onclick()",
//         options:[
//             "A) onclick()",
//             "B) onchange()",
//             "C) onmouseover()", 
//             "D) onmouseclick()"
//         ]
//     },
//     {
//         numb: 3,
//         question: "How do you create a function in JavaScript?",
//         answer: "A) function myFunction() {}",
//         options:[
//             "A) function myFunction() {}",
//             "B) function:myFunction() {}", 
//             "C) function = myFunction() {}", 
//             "D) myFunction function() {}"
//         ]
//     },
//     {
//         numb: 4,
//         question: "How can you call a function named myFunction?",
//         answer: "B) myFunction();",
//         options:[
//             "A) call myFunction();", 
//             "B) myFunction();", 
//             "C) call function myFunction(); ",
//             "D) Call.myFunction();"
//         ]
//     },
//     {
//         numb: 5,
//         question: "How do you write an IF statement in JavaScript?",
//         answer: "A) if (i == 5)",
//         options:[
//             "A) if (i == 5)", 
//             "B) if i = 5 then", 
//             "C) if i == 5", 
//             "D) if (i = 5)"
//         ]
//     },
//     {
//         numb: 6,
//         question: "Which operator is used to assign a value to a variable?",
//         answer: "C) =",
//         options:[
//             "A) *",
//             "B) -",
//             "C) =",
//             "D) x"
//         ]
//     },
//     {
//         numb: 7,
//         question: "What is the correct way to write a JavaScript array?",
//         answer: "B) var colors = [red, green, blue];",
//         options:[
//             "A) var colors = red, green, blue;", 
//             "B) var colors = [red, green, blue];", 
//             "C) var colors = (1:red, 2:green, 3:blue);", 
//             "D) var colors = 1:red, 2:green, 3:blue;"
//         ]
//     },
//     {
//         numb: 8,
//         question: "How do you round the number 7.25 to the nearest integer?",
//         answer: "B) Math.round(7.25)",
//         options:[
//             "A) Math.rnd(7.25)", 
//             "B) Math.round(7.25)",
//             "C) round(7.25)", 
//             "D) rnd(7.25)"
//         ]
//     },
//     {
//         numb: 9,
//         question: "Which of the following is a JavaScript framework?",
//         answer: "C) Angular",
//         options:[
//             "A) Django",
//             "B) Flask",   
//             "C) Angular", 
//             "D) Laravel"
//         ]
//     },
//     {
//         numb: 10,
//         question: "What will typeof NaN return in JavaScript?",
//         answer: "A) number",
//         options:[
//             "A) number", 
//             "B) NaN",
//             "C) object", 
//             "D) undefined"
//         ]
//     }
// ];
const javascriptQuestions = {
    easy: [
        { question: "What is the correct syntax for referring to an external script called 'script.js'?", options: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script file='script.js'>"], answer: "<script src='script.js'>" },
        { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
        { question: "How do you write 'Hello, World!' in an alert box?", options: ["msg('Hello, World!');", "alertBox('Hello, World!');", "alert('Hello, World!');", "msgBox('Hello, World!');"], answer: "alert('Hello, World!');" },
        { question: "Which operator is used to assign a value to a variable?", options: ["*", "=", "==", "==="], answer: "=" },
        { question: "What will `typeof []` return?", options: ["Array", "Object", "Undefined", "Null"], answer: "Object" },
        { question: "What does `NaN` stand for in JavaScript?", options: ["Not a Number", "Null and Nothing", "Negative Number", "None of the Above"], answer: "Not a Number" },
        { question: "Which method can be used to find the length of a string?", options: ["length()", "getSize()", "size()", "length"], answer: "length" },
        { question: "Which built-in method removes the last element from an array?", options: ["pop()", "push()", "shift()", "slice()"], answer: "pop()" },
        { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "/* */", "#", "--"], answer: "//" },
        { question: "Which function is used to parse a string into an integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInt()"], answer: "parseInt()" }
    ],

    medium: [
        { question: "What is the difference between `==` and `===` in JavaScript?", options: ["No difference", "`==` checks type, `===` checks value", "`===` checks type and value", "`==` checks strict equality"], answer: "`===` checks type and value" },
        { question: "Which method can be used to combine two arrays in JavaScript?", options: ["concat()", "merge()", "combine()", "append()"], answer: "concat()" },
        { question: "What will `console.log(typeof null);` return?", options: ["null", "object", "undefined", "string"], answer: "object" },
        { question: "Which of the following is a JavaScript framework?", options: ["React", "Laravel", "Django", "Bootstrap"], answer: "React" },
        { question: "What does `JSON.stringify()` do?", options: ["Converts a JavaScript object to a JSON string", "Parses a JSON string to an object", "Sends JSON data to the server", "None of the above"], answer: "Converts a JavaScript object to a JSON string" },
        { question: "Which of the following methods is used to loop through an array?", options: ["forEach()", "loop()", "iterate()", "repeat()"], answer: "forEach()" },
        { question: "What is the output of `2 + '2'` in JavaScript?", options: ["22", "4", "Error", "NaN"], answer: "22" },
        { question: "Which of the following is not a JavaScript Data Type?", options: ["String", "Number", "Boolean", "Float"], answer: "Float" },
        { question: "Which function is used to convert JSON data to an object?", options: ["stringify()", "convert()", "JSON.parse()", "objectify()"], answer: "JSON.parse()" },
        { question: "What does DOM stand for in JavaScript?", options: ["Document Object Model", "Data Object Model", "Document Oriented Module", "None of the above"], answer: "Document Object Model" },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseclick", "onchange", "onclick", "onmousehover"], answer: "onclick" },
        { question: "Which method is used to remove an item from the beginning of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "shift()" },
        { question: "Which JavaScript method is used to write content to the browser?", options: ["document.write()", "console.write()", "browser.write()", "window.write()"], answer: "document.write()" },
        { question: "Which operator can be used for strict comparison?", options: ["==", "===", "!=", "!=="], answer: "===" },
        { question: "What is the output of `typeof undefined`?", options: ["null", "undefined", "object", "string"], answer: "undefined" }
    ],

    hard: [
        { question: "What is the output of `console.log(0.1 + 0.2 === 0.3);`?", options: ["true", "false", "undefined", "NaN"], answer: "false" },
        { question: "What does the `bind` method do in JavaScript?", options: ["Creates a copy of a function", "Binds an object to a function", "Executes a function immediately", "None of the above"], answer: "Binds an object to a function" },
        { question: "How do you create a private variable in JavaScript?", options: ["Using `var` inside a function", "Using `this` keyword", "Using closures", "Using `private` keyword"], answer: "Using closures" },
        { question: "What is a higher-order function in JavaScript?", options: ["A function that returns a function", "A function that executes immediately", "A method of the DOM", "None of the above"], answer: "A function that returns a function" },
        { question: "What is the purpose of `apply()` in JavaScript?", options: ["Call a function with arguments as array", "Apply CSS to elements", "Create new function", "Execute function immediately"], answer: "Call a function with arguments as array" },
        { question: "What is a pure function?", options: ["A function that returns the same output for same input", "A function without parameters", "A method that modifies state", "A function with no return"], answer: "A function that returns the same output for same input" },
        { question: "What is event delegation in JavaScript?", options: ["Handling events using a parent element", "Delegating tasks to another function", "A new method of handling events", "None of the above"], answer: "Handling events using a parent element" },
        { question: "What is the use of `call()` method?", options: ["To call a function with an object", "To create a new function", "To apply styles", "None"], answer: "To call a function with an object" },
        { question: "What will `console.log([] + {})` return?", options: ["[object Object]", "{}", "undefined", "0"], answer: "[object Object]" },
        { question: "What is the purpose of `Object.defineProperty()`?", options: ["Define new properties", "Create objects", "Delete properties", "None"], answer: "Define new properties" },
        { question: "What will `console.log(typeof NaN)` return?", options: ["NaN", "Number", "undefined", "object"], answer: "Number" },
        { question: "Which JavaScript feature is used for lazy loading?", options: ["Promise", "async/await", "setTimeout", "Lazy function"], answer: "Promise" },
        { question: "What is the output of `console.log([] == ![])`?", options: ["true", "false", "NaN", "undefined"], answer: "true" },
        { question: "What does `Object.seal()` do?", options: ["Seal object properties", "Freeze object", "Prevent deletion", "Both 1 and 3"], answer: "Both 1 and 3" },
        { question: "What is a closure in JavaScript?", options: ["Function with access to outer scope", "Function without arguments", "Hidden function", "None"], answer: "Function with access to outer scope" },
        { question: "What is the output of `console.log([] + [])`?", options: ["''", "[]", "0", "undefined"], answer: "''" }
    ],

    extreme: [
        { question: "What is the event loop in JavaScript?", options: ["A loop that handles async operations", "A loop that runs for each event", "A built-in JavaScript function", "A method of DOM"], answer: "A loop that handles async operations" },
        { question: "What does `Object.freeze()` do?", options: ["Prevents modifications", "Deletes properties", "Converts to string", "None of the above"], answer: "Prevents modifications" },
        { question: "What is tail call optimization?", options: ["Optimizing recursive functions", "Minimizing loop memory", "CSS selector optimization", "Handling promises"], answer: "Optimizing recursive functions" },
        { question: "What does `Symbol()` do?", options: ["Creates unique identifier", "Generates random number", "Defines data type", "Placeholder for variables"], answer: "Creates unique identifier" },
        { question: "What does the `this` keyword refer to?", options: ["Global object", "Current object", "Document object", "Parent object"], answer: "Current object" },
        { question: "What is the Temporal Dead Zone (TDZ)?", options: ["Time before a variable is declared", "Error during execution", "A new JavaScript API", "None"], answer: "Time before a variable is declared" },
        { question: "What is hoisting in JavaScript?", options: ["Variable and function declarations are moved to the top", "A JS library", "Error handling method", "None"], answer: "Variable and function declarations are moved to the top" },
        { question: "What is a microtask in JavaScript?", options: ["Callback from promise", "JavaScript loop", "CSS rendering method", "None"], answer: "Callback from promise" },
        { question: "What will `console.log('5' - 3)` return?", options: ["2", "53", "NaN", "undefined"], answer: "2" },
        { question: "Which JavaScript method is asynchronous?", options: ["setTimeout()", "console.log()", "alert()", "parseInt()"], answer: "setTimeout()" },
        { question: "Which JavaScript API is used for multithreading?", options: ["Web Workers", "setTimeout()", "Promise", "Event Loop"], answer: "Web Workers" },
        { question: "What will `console.log([] + [])` return?", options: ["''", "[]", "NaN", "undefined"], answer: "''" },
        { question: "What does `JSON.parse()` do?", options: ["Convert JSON to object", "Stringify object", "Convert object to JSON", "None"], answer: "Convert JSON to object" },
        { question: "What does `Object.entries()` do?", options: ["Convert object to array", "Freeze object", "Seal object", "None"], answer: "Convert object to array" },
        { question: "Which method allows JavaScript to run concurrently?", options: ["Promise", "async/await", "setTimeout()", "All of these"], answer: "All of these" }
    ]
};

const htmlQuestions = {
    easy: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<p>"], answer: "<a>" },
        { question: "Which tag is used to display an image in HTML?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
        { question: "Which HTML tag is used for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<newline>"], answer: "<br>" },
        { question: "Which HTML element is used to create a table?", options: ["<table>", "<td>", "<tr>", "<tb>"], answer: "<table>" },
        { question: "Which tag is used to define the largest heading?", options: ["<h6>", "<h1>", "<h3>", "<heading>"], answer: "<h1>" },
        { question: "Which HTML attribute is used to specify the background color?", options: ["bgcolor", "background", "color", "style"], answer: "bgcolor" },
        { question: "Which of the following is an empty element?", options: ["<p>", "<img>", "<div>", "<span>"], answer: "<img>" },
        { question: "Which HTML tag is used to create a horizontal line?", options: ["<hr>", "<line>", "<border>", "<break>"], answer: "<hr>" },
        { question: "Which tag is used to add a checkbox in a form?", options: ["<text>", "<check>", "<input type='checkbox'>", "<box>"], answer: "<input type='checkbox'>" }
    ],

    medium: [
        { question: "Which attribute is used to uniquely identify an element?", options: ["id", "class", "style", "name"], answer: "id" },
        { question: "Which element is used to group and wrap elements in a form?", options: ["<fieldset>", "<form>", "<group>", "<input>"], answer: "<fieldset>" },
        { question: "Which of the following is a semantic element in HTML?", options: ["<div>", "<section>", "<span>", "<br>"], answer: "<section>" },
        { question: "Which tag is used to create a dropdown list?", options: ["<dropdown>", "<select>", "<input>", "<list>"], answer: "<select>" },
        { question: "What is the full form of HTTP?", options: ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"], answer: "Hyper Text Transfer Protocol" },
        { question: "What is the default font size in HTML?", options: ["12px", "16px", "14px", "10px"], answer: "16px" },
        { question: "Which tag is used to add a video in HTML?", options: ["<video>", "<media>", "<play>", "<stream>"], answer: "<video>" },
        { question: "Which input type is used for entering an email?", options: ["<text>", "<email>", "<input type='email'>", "<mail>"], answer: "<input type='email'>" },
        { question: "What does the `<mark>` tag do?", options: ["Underline text", "Highlight text", "Italic text", "Bold text"], answer: "Highlight text" },
        { question: "Which tag is used to display a numbered list?", options: ["<ul>", "<li>", "<ol>", "<orderlist>"], answer: "<ol>" },
        { question: "Which tag is used to embed a YouTube video in HTML?", options: ["<iframe>", "<embed>", "<media>", "<youtube>"], answer: "<iframe>" },
        { question: "What is the use of the `<caption>` tag in a table?", options: ["Add title to table", "Add heading", "Add image", "Add rows"], answer: "Add title to table" },
        { question: "Which is the correct doctype declaration for HTML5?", options: ["<!DOCTYPE HTML>", "<!DOCTYPE html>", "<!DOCTYPE>", "<!HTML>"], answer: "<!DOCTYPE html>" },
        { question: "What does the `<abbr>` tag do?", options: ["Add abbreviation", "Add definition", "Add reference", "Add description"], answer: "Add abbreviation" },
        { question: "Which tag is used to define the footer of a document?", options: ["<footer>", "<bottom>", "<foot>", "<end>"], answer: "<footer>" }
    ],

    hard: [
        { question: "Which attribute specifies the alternative text for an image?", options: ["src", "alt", "title", "name"], answer: "alt" },
        { question: "Which element is used to play audio in HTML?", options: ["<audio>", "<music>", "<sound>", "<play>"], answer: "<audio>" },
        { question: "Which tag is used to create a navigation bar?", options: ["<nav>", "<menu>", "<bar>", "<header>"], answer: "<nav>" },
        { question: "Which meta tag is used to define character encoding?", options: ["<meta charset='UTF-8'>", "<meta encoding='UTF-8'>", "<charset>", "<encoding>"], answer: "<meta charset='UTF-8'>" },
        { question: "Which HTML tag is used for canvas drawing?", options: ["<canvas>", "<paint>", "<draw>", "<sketch>"], answer: "<canvas>" },
        { question: "Which of the following is not an HTML element?", options: ["<strong>", "<em>", "<blink>", "<marquee>"], answer: "<blink>" },
        { question: "Which is the correct format for adding a favicon?", options: ["<link rel='icon'>", "<icon>", "<favicon>", "<img>"], answer: "<link rel='icon'>" },
        { question: "Which tag is used to define a table cell?", options: ["<td>", "<tr>", "<th>", "<cell>"], answer: "<td>" },
        { question: "What is the function of the `<label>` tag?", options: ["Label input field", "Add heading", "Display text", "None"], answer: "Label input field" },
        { question: "Which attribute is used to open a link in a new tab?", options: ["target='_blank'", "target='_new'", "target='_window'", "target='_open'"], answer: "target='_blank'" },
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<p>"], answer: "<a>" },
        { question: "Which tag is used to display an image in HTML?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
        { question: "Which HTML tag is used for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<newline>"], answer: "<br>" },
        { question: "Which HTML element is used to create a table?", options: ["<table>", "<td>", "<tr>", "<tb>"], answer: "<table>" },
        { question: "Which tag is used to define the largest heading?", options: ["<h6>", "<h1>", "<h3>", "<heading>"], answer: "<h1>" },
        { question: "Which HTML attribute is used to specify the background color?", options: ["bgcolor", "background", "color", "style"], answer: "bgcolor" },
        { question: "Which of the following is an empty element?", options: ["<p>", "<img>", "<div>", "<span>"], answer: "<img>" },
        { question: "Which HTML tag is used to create a horizontal line?", options: ["<hr>", "<line>", "<border>", "<break>"], answer: "<hr>" },
        { question: "Which tag is used to add a checkbox in a form?", options: ["<text>", "<check>", "<input type='checkbox'>", "<box>"], answer: "<input type='checkbox'>" }
    ],

    extreme: [
        { question: "Which protocol is used for secure web pages?", options: ["HTTP", "HTTPS", "FTP", "TCP/IP"], answer: "HTTPS" },
        { question: "Which tag is used to create a responsive website layout?", options: ["<meta>", "<viewport>", "<responsive>", "<flex>"], answer: "<meta>" },
        { question: "What is the use of the `<figure>` tag?", options: ["Image with caption", "Group elements", "Frame content", "Add border"], answer: "Image with caption" },
        { question: "Which tag is used to create an email link?", options: ["<email>", "<mail>", "<a href='mailto:'>", "<link>"], answer: "<a href='mailto:'>" },
        { question: "What is the function of the `<source>` tag?", options: ["Provide media source", "Add images", "Insert audio", "None"], answer: "Provide media source" },
        { question: "What is the output of `<input type='password'>`?", options: ["Hidden text", "Plain text", "Masked text", "None"], answer: "Masked text" },
        { question: "Which attribute adds a tooltip to elements?", options: ["title", "tooltip", "alt", "info"], answer: "title" },
        { question: "Which HTML tag is deprecated?", options: ["<center>", "<marquee>", "<blink>", "All of the above"], answer: "All of the above" },
        { question: "Which attribute is used to uniquely identify an element?", options: ["id", "class", "style", "name"], answer: "id" },
        { question: "Which element is used to group and wrap elements in a form?", options: ["<fieldset>", "<form>", "<group>", "<input>"], answer: "<fieldset>" },
        { question: "Which of the following is a semantic element in HTML?", options: ["<div>", "<section>", "<span>", "<br>"], answer: "<section>" },
        { question: "Which tag is used to create a dropdown list?", options: ["<dropdown>", "<select>", "<input>", "<list>"], answer: "<select>" },
        { question: "What is the full form of HTTP?", options: ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"], answer: "Hyper Text Transfer Protocol" },
        { question: "What is the default font size in HTML?", options: ["12px", "16px", "14px", "10px"], answer: "16px" },
        { question: "Which tag is used to add a video in HTML?", options: ["<video>", "<media>", "<play>", "<stream>"], answer: "<video>" },
        { question: "Which input type is used for entering an email?", options: ["<text>", "<email>", "<input type='email'>", "<mail>"], answer: "<input type='email'>" },
        { question: "What does the `<mark>` tag do?", options: ["Underline text", "Highlight text", "Italic text", "Bold text"], answer: "Highlight text" },
        { question: "Which tag is used to display a numbered list?", options: ["<ul>", "<li>", "<ol>", "<orderlist>"], answer: "<ol>" },
        { question: "Which tag is used to embed a YouTube video in HTML?", options: ["<iframe>", "<embed>", "<media>", "<youtube>"], answer: "<iframe>" },
        { question: "What is the use of the `<caption>` tag in a table?", options: ["Add title to table", "Add heading", "Add image", "Add rows"], answer: "Add title to table" },
        { question: "Which tag is used to define keyboard input?", options: ["<kbd>", "<keyboard>", "<input>", "<key>"], answer: "<kbd>" },
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<p>"], answer: "<a>" },
        { question: "Which tag is used to display an image in HTML?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
        { question: "Which HTML tag is used for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<newline>"], answer: "<br>" },
        { question: "Which HTML element is used to create a table?", options: ["<table>", "<td>", "<tr>", "<tb>"], answer: "<table>" },
        { question: "Which tag is used to define the largest heading?", options: ["<h6>", "<h1>", "<h3>", "<heading>"], answer: "<h1>" },
        { question: "Which HTML attribute is used to specify the background color?", options: ["bgcolor", "background", "color", "style"], answer: "bgcolor" },
        { question: "Which of the following is an empty element?", options: ["<p>", "<img>", "<div>", "<span>"], answer: "<img>" },
        { question: "Which HTML tag is used to create a horizontal line?", options: ["<hr>", "<line>", "<border>", "<break>"], answer: "<hr>" },
        { question: "Which tag is used to add a checkbox in a form?", options: ["<text>", "<check>", "<input type='checkbox'>", "<box>"], answer: "<input type='checkbox'>" }

    ]
};

const pythonQuestions = {
    easy: [
        { question: "What is the output of `print(2 * 3)`?", options: ["5", "6", "8", "10"], answer: "6" },
        { question: "Which of the following is a Python data type?", options: ["String", "Array", "List", "All of the above"], answer: "All of the above" },
        { question: "What does `len()` function do?", options: ["Returns length of a string", "Sorts a list", "Adds two numbers", "None"], answer: "Returns length of a string" },
        { question: "Which keyword is used to define a function in Python?", options: ["function", "def", "fun", "define"], answer: "def" },
        { question: "Which of the following is used for comments in Python?", options: ["#", "//", "/* */", "--"], answer: "#" },
        { question: "Which operator is used for exponentiation in Python?", options: ["*", "**", "^", "exp"], answer: "**" },
        { question: "What is the output of `print(type(5))`?", options: ["int", "str", "float", "None"], answer: "int" },
        { question: "What is the default value of a variable declared without a value?", options: ["0", "None", "Undefined", "False"], answer: "None" },
        { question: "Which method is used to convert a string to lowercase?", options: ["lower()", "uppercase()", "downcase()", "lowercase()"], answer: "lower()" },
        { question: "Which module is used to work with dates in Python?", options: ["time", "date", "datetime", "calendar"], answer: "datetime" }
    ],

    medium: [
        { question: "What will `bool('False')` return?", options: ["True", "False", "Error", "None"], answer: "True" },
        { question: "What does `is` operator do in Python?", options: ["Check equality", "Check reference equality", "Assign value", "None"], answer: "Check reference equality" },
        { question: "Which Python keyword is used to handle exceptions?", options: ["except", "error", "try", "catch"], answer: "try" },
        { question: "What does `//` operator do?", options: ["Floor division", "Modulo", "Exponent", "Addition"], answer: "Floor division" },
        { question: "What is the output of `print('5' + '5')`?", options: ["10", "55", "Error", "None"], answer: "55" },
        { question: "What will `list(range(0, 5))` output?", options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "None"], answer: "[0, 1, 2, 3, 4]" },
        { question: "Which method is used to remove the last element from a list?", options: ["pop()", "delete()", "remove()", "clear()"], answer: "pop()" },
        { question: "What does `break` keyword do?", options: ["Break the loop", "Pause execution", "Skip next iteration", "None"], answer: "Break the loop" },
        { question: "Which of the following is mutable?", options: ["Tuple", "List", "String", "None"], answer: "List" },
        { question: "What does `pass` keyword do in Python?", options: ["Skip a block", "Terminate function", "Pause execution", "None"], answer: "Skip a block" },
        { question: "Which method is used to read a file in Python?", options: ["read()", "file()", "open()", "fetch()"], answer: "read()" },
        { question: "Which of the following is a Python framework?", options: ["React", "Django", "Bootstrap", "Angular"], answer: "Django" },
        { question: "Which module is used for mathematical operations in Python?", options: ["math", "random", "os", "sys"], answer: "math" },
        { question: "Which keyword is used to exit a loop prematurely?", options: ["break", "exit", "stop", "return"], answer: "break" },
        { question: "What will `print(len(['a','b','c']))` return?", options: ["2", "3", "4", "None"], answer: "3" }
    ],

    hard: [
        { question: "What does `lambda` keyword do?", options: ["Create a function", "Create a variable", "Create a class", "None"], answer: "Create a function" },
        { question: "What is the output of `3 * 'abc'`?", options: ["abcabcabc", "Error", "3abc", "None"], answer: "abcabcabc" },
        { question: "What will `list(set([1,2,3,2]))` output?", options: ["[1, 2, 3]", "[1, 2, 3, 2]", "[1,2,2,3]", "None"], answer: "[1, 2, 3]" },
        { question: "What does `__init__` do in a class?", options: ["Initialize object", "Create function", "Destroy object", "None"], answer: "Initialize object" },
        { question: "Which keyword is used for inheritance?", options: ["inherit", "super", "class", "extends"], answer: "super" },
        { question: "What will `print([] or False)` return?", options: ["False", "[]", "Error", "None"], answer: "[]" },
        { question: "What is the output of `1 == True`?", options: ["True", "False", "Error", "None"], answer: "True" },
        { question: "Which Python library is used for data visualization?", options: ["matplotlib", "os", "sys", "numpy"], answer: "matplotlib" },
        { question: "What does `__name__` in Python return?", options: ["Module name", "Class name", "Function name", "None"], answer: "Module name" },
        { question: "What will `bool('0')` return?", options: ["True", "False", "Error", "None"], answer: "True" },
        { question: "What will `list(range(0, 5))` output?", options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "None"], answer: "[0, 1, 2, 3, 4]" },
        { question: "Which method is used to remove the last element from a list?", options: ["pop()", "delete()", "remove()", "clear()"], answer: "pop()" },
        { question: "What does `break` keyword do?", options: ["Break the loop", "Pause execution", "Skip next iteration", "None"], answer: "Break the loop" },
        { question: "Which of the following is mutable?", options: ["Tuple", "List", "String", "None"], answer: "List" },
        { question: "What does `pass` keyword do in Python?", options: ["Skip a block", "Terminate function", "Pause execution", "None"], answer: "Skip a block" },
        { question: "Which method is used to read a file in Python?", options: ["read()", "file()", "open()", "fetch()"], answer: "read()" },
        { question: "Which of the following is a Python framework?", options: ["React", "Django", "Bootstrap", "Angular"], answer: "Django" },
        { question: "Which module is used for mathematical operations in Python?", options: ["math", "random", "os", "sys"], answer: "math" },
        { question: "Which keyword is used to exit a loop prematurely?", options: ["break", "exit", "stop", "return"], answer: "break" },
        { question: "What will `print(len(['a','b','c']))` return?", options: ["2", "3", "4", "None"], answer: "3" }
    ],

    extreme: [
        { question: "What is monkey patching in Python?", options: ["Dynamically modifying code", "Adding new functions", "Replacing class methods", "None"], answer: "Dynamically modifying code" },
        { question: "Which Python function is used to compile code?", options: ["compile()", "exec()", "eval()", "None"], answer: "compile()" },
        { question: "What does `__slots__` do?", options: ["Restrict instance attributes", "Create memory", "Limit methods", "None"], answer: "Restrict instance attributes" },
        { question: "What does `yield` keyword do?", options: ["Return a generator", "Break loop", "Pause execution", "None"], answer: "Return a generator" },
        { question: "Which Python module is used for web development?", options: ["Flask", "os", "sys", "math"], answer: "Flask" },
        { question: "What is the time complexity of a dictionary lookup?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
        { question: "What does `GIL` stand for?", options: ["Global Interpreter Lock", "General Inheritance Link", "Global Instance Level", "None"], answer: "Global Interpreter Lock" },
        { question: "What is the output of `print(chr(65))`?", options: ["A", "65", "Error", "None"], answer: "A" },
        { question: "Which method is used to convert JSON to Python object?", options: ["json.loads()", "json.dumps()", "convert()", "None"], answer: "json.loads()" },
        { question: "What does `lambda` keyword do?", options: ["Create a function", "Create a variable", "Create a class", "None"], answer: "Create a function" },
        { question: "What is the output of `3 * 'abc'`?", options: ["abcabcabc", "Error", "3abc", "None"], answer: "abcabcabc" },
        { question: "What will `list(set([1,2,3,2]))` output?", options: ["[1, 2, 3]", "[1, 2, 3, 2]", "[1,2,2,3]", "None"], answer: "[1, 2, 3]" },
        { question: "What does `__init__` do in a class?", options: ["Initialize object", "Create function", "Destroy object", "None"], answer: "Initialize object" },
        { question: "Which keyword is used for inheritance?", options: ["inherit", "super", "class", "extends"], answer: "super" },
        { question: "What will `print([] or False)` return?", options: ["False", "[]", "Error", "None"], answer: "[]" },
        { question: "What is the output of `1 == True`?", options: ["True", "False", "Error", "None"], answer: "True" },
        { question: "Which Python library is used for data visualization?", options: ["matplotlib", "os", "sys", "numpy"], answer: "matplotlib" },
        { question: "What does `__name__` in Python return?", options: ["Module name", "Class name", "Function name", "None"], answer: "Module name" },
        { question: "What will `bool('0')` return?", options: ["True", "False", "Error", "None"], answer: "True" },
        { question: "Which module is used for web scraping?", options: ["BeautifulSoup", "os", "sys", "math"], answer: "BeautifulSoup" },
        { question: "What will `list(range(0, 5))` output?", options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "None"], answer: "[0, 1, 2, 3, 4]" },
        { question: "Which method is used to remove the last element from a list?", options: ["pop()", "delete()", "remove()", "clear()"], answer: "pop()" },
        { question: "What does `break` keyword do?", options: ["Break the loop", "Pause execution", "Skip next iteration", "None"], answer: "Break the loop" },
        { question: "Which of the following is mutable?", options: ["Tuple", "List", "String", "None"], answer: "List" },
        { question: "What does `pass` keyword do in Python?", options: ["Skip a block", "Terminate function", "Pause execution", "None"], answer: "Skip a block" },
        { question: "Which method is used to read a file in Python?", options: ["read()", "file()", "open()", "fetch()"], answer: "read()" },
        { question: "Which of the following is a Python framework?", options: ["React", "Django", "Bootstrap", "Angular"], answer: "Django" },
        { question: "Which module is used for mathematical operations in Python?", options: ["math", "random", "os", "sys"], answer: "math" },
        { question: "Which keyword is used to exit a loop prematurely?", options: ["break", "exit", "stop", "return"], answer: "break" },
        { question: "What will `print(len(['a','b','c']))` return?", options: ["2", "3", "4", "None"], answer: "3" }
    ]
};

const dbmsQuestions = {
    easy: [
        { question: "What does DBMS stand for?", options: ["Database Management System", "Data Base Managed Software", "Data Backup Management System", "None"], answer: "Database Management System" },
        { question: "Which of the following is a type of database?", options: ["Hierarchical", "Network", "Relational", "All of the above"], answer: "All of the above" },
        { question: "Which language is used to query a database?", options: ["SQL", "HTML", "Python", "Java"], answer: "SQL" },
        { question: "Which of the following is a database model?", options: ["Hierarchical", "Flat File", "Object-oriented", "All of the above"], answer: "All of the above" },
        { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "Structured Quick Language", "None"], answer: "Structured Query Language" },
        { question: "Which of the following is an example of RDBMS?", options: ["MySQL", "Oracle", "PostgreSQL", "All of the above"], answer: "All of the above" },
        { question: "Which SQL command is used to retrieve data?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: "SELECT" },
        { question: "Which SQL statement is used to update data?", options: ["UPDATE", "ALTER", "CHANGE", "MODIFY"], answer: "UPDATE" },
        { question: "Which of the following is not a type of SQL join?", options: ["INNER", "OUTER", "FULL", "MERGE"], answer: "MERGE" },
        { question: "Which constraint is used to ensure uniqueness?", options: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "CHECK"], answer: "PRIMARY KEY" }
    ],

    medium: [
        { question: "Which of the following represents a set of operations that a DBMS can perform?", options: ["CRUD", "CRUDS", "CUD", "CRD"], answer: "CRUD" },
        { question: "Which SQL function is used to count the number of records?", options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"], answer: "COUNT()" },
        { question: "What is the use of the FOREIGN KEY constraint?", options: ["To link two tables", "To prevent null values", "To ensure unique values", "None"], answer: "To link two tables" },
        { question: "Which of the following is a DDL command?", options: ["CREATE", "SELECT", "INSERT", "UPDATE"], answer: "CREATE" },
        { question: "Which of the following is a DML command?", options: ["INSERT", "CREATE", "DROP", "ALTER"], answer: "INSERT" },
        { question: "What is the purpose of the COMMIT command?", options: ["Save changes", "Rollback changes", "Delete records", "Modify records"], answer: "Save changes" },
        { question: "Which SQL function is used to combine rows with the same values?", options: ["GROUP BY", "ORDER BY", "JOIN", "UNION"], answer: "GROUP BY" },
        { question: "Which of the following is used to remove duplicates in SQL?", options: ["DISTINCT", "ORDER BY", "HAVING", "FILTER"], answer: "DISTINCT" },
        { question: "Which of the following is NOT a valid SQL constraint?", options: ["NOT NULL", "FOREIGN KEY", "DELETE", "PRIMARY KEY"], answer: "DELETE" },
        { question: "Which command is used to create a database?", options: ["CREATE DATABASE", "NEW DATABASE", "MAKE DATABASE", "INSERT DATABASE"], answer: "CREATE DATABASE" },
        { question: "What is a view in DBMS?", options: ["Virtual table", "Physical table", "Temporary table", "None"], answer: "Virtual table" },
        { question: "Which operator is used to select values within a range?", options: ["BETWEEN", "IN", "LIKE", "RANGE"], answer: "BETWEEN" },
        { question: "What is the default port for MySQL?", options: ["3306", "8080", "1433", "1521"], answer: "3306" },
        { question: "Which of the following supports ACID properties?", options: ["RDBMS", "NoSQL", "File System", "None"], answer: "RDBMS" },
        { question: "Which of the following is a key feature of a DBMS?", options: ["Data Integrity", "Data Redundancy", "Data Duplication", "Data Loss"], answer: "Data Integrity" }
    ],

    hard: [
        { question: "What does ACID stand for in DBMS?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Isolation, Dependability", "Atomicity, Concurrency, Integrity, Durability", "Accuracy, Concurrency, Isolation, Dependability"], answer: "Atomicity, Consistency, Isolation, Durability" },
        { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "Oracle", "MySQL", "PostgreSQL"], answer: "MongoDB" },
        { question: "What does the TRUNCATE command do?", options: ["Deletes all rows", "Deletes table", "Deletes database", "None"], answer: "Deletes all rows" },
        { question: "What is normalization in DBMS?", options: ["Reduce redundancy", "Increase redundancy", "Reduce data", "None"], answer: "Reduce redundancy" },
        { question: "Which of the following is a type of key in DBMS?", options: ["Primary Key", "Foreign Key", "Composite Key", "All of the above"], answer: "All of the above" },
        { question: "Which normal form eliminates partial dependency?", options: ["2NF", "1NF", "3NF", "BCNF"], answer: "2NF" },
        { question: "Which SQL clause is used for pattern matching?", options: ["LIKE", "MATCH", "PATTERN", "SEARCH"], answer: "LIKE" },
        { question: "Which of the following supports horizontal scaling?", options: ["NoSQL", "RDBMS", "File System", "None"], answer: "NoSQL" },
        { question: "Which of the following is a relational algebra operator?", options: ["Union", "Intersection", "Difference", "All of the above"], answer: "All of the above" },
        { question: "What is a deadlock in DBMS?", options: ["Two transactions blocking each other", "Table corruption", "Data loss", "None"], answer: "Two transactions blocking each other" }
    ],

    extreme: [
        { question: "What does BCNF stand for?", options: ["Boyce-Codd Normal Form", "Binary Code Normal Form", "Base Coded Normal Form", "None"], answer: "Boyce-Codd Normal Form" },
        { question: "Which of the following is a DCL command?", options: ["GRANT", "INSERT", "UPDATE", "SELECT"], answer: "GRANT" },
        { question: "What is the purpose of the CASCADE option?", options: ["Delete child record automatically", "Update parent record automatically", "Prevent deletion", "None"], answer: "Delete child record automatically" },
        { question: "What is a materialized view?", options: ["Stored result of query", "Virtual table", "Temporary table", "None"], answer: "Stored result of query" },
        { question: "Which language is used for relational algebra?", options: ["SQL", "RA", "RDBMS", "All of the above"], answer: "RA" },
        { question: "Which type of join returns all rows when there is a match?", options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "SELF JOIN"], answer: "INNER JOIN" },
        { question: "Which command is used to give user access?", options: ["GRANT", "GIVE", "ALLOW", "PERMIT"], answer: "GRANT" },
        { question: "Which SQL command is used to merge records?", options: ["MERGE", "INSERT", "JOIN", "UPDATE"], answer: "MERGE" }
    ]
};

