var postDetails = [
  {
    author: "Srishti Gupta",
    title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    content:
      "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.‘let’ vs. ‘const’:Change of value in futureVariables declared using the let keyword can change their values in the future.Consider the example given below:let iChange = 11;iChange = 12;console.log(iChange);Output:12On the first line, the variable iChange is declared using the let keyword and is initialized with value 11. When you come down to the next line, the variable iChange is again assigned a new value, which is 12. Changing the values of variables declared using the let keyword is allowed. When, on the last line, you try to print the value of the variable iChange, you correctly get the updated value 12.Variables declared using the const keyword cannot change their values in future. This is why you must always initialize the variables declared with the const keyword.const PI = 3.14;PI = 22/7;console.log(PI);Output:Uncaught TypeError: Assignment to constant variableHere, the variable PI is declared using the const keyword and is initialized with value 3.14 on the first line. When you come down to the next line, the variable PI is updated with a new value 22/7. Changing values of variables declared using the const keyword is not allowed. This is why the second line throws the error shown in the output because you are trying to assign a new value to a constant variable. Therefore, remember that variables declared using the const keyword are read-only & cannot be reassigned any value.As mentioned earlier, it is mandatory to initialize a constant when declaring it. Let’s see the following statement of code:const PI;Output:Uncaught SyntaxError: Missing initializer in const declarationYou know that you cannot update a constant in future. If you do not initialize a constant during its declaration, you will not be able to assign any value to it EVER! This is why you get a SyntaxError when you leave a constant uninitialized.What do you think will be the output of the code given below?const passengerBus = {wheels: 8, passengers: 40}passengerBus.passengers = 50;console.log(passengerBus);Do you think an error will be thrown? Let’s check the output. Here we go.Output:{ wheels: 8, passengers: 50 }The objects (including arrays & functions) declared using the const keyword are mutable.So far, you’ve learned that variables declared using the const keyword cannot be assigned any other value. While this is true, there’s another side of the story too. Undoubtedly, you cannot assign a new value to a constant but you can manipulate the existing value if it is an object or an array.In the code given above, you are not changing the entire value assigned to the constant passengerBus but you are manipulating a property inside it. You can add/delete/update a property inside an object declared using the const keyword.Similar can be done with arrays too. You can add add/delete/update an element inside an array declared using a const keyword.const android = ['Marshmallow', 'Noughat', 'Oreo'];arr[3] = 'Pie'; // adding new versionconsole.log(android);Output:['Marshmallow', 'Noughat', 'Oreo', 'Pie']Now, considering that the keywords let and const belong to the same category, the following points enlist the differences between the variables declared using the let/const keywords and the variables declared using the var keyword:‘let’ (or ‘const’) vs. ‘var’:Scope    Variables declared using the let/const keywords are block-scoped.Consider the following example:function foo() {   for (let i = 0; i < 3; i++) {      console.log(i); // statement 1   }   console.log(`All eyes here please: ${i}`); // statement 2}foo();Output:012Uncaught ReferenceError: i is not definedThe variable i is declared using the let keyword inside the for-loop block. This means that when the for-loop block ends, the variable i loses its scope and is no longer accessible outside the curly braces of the for-loop block. Thus, when you try to access the variable i and print its value on statement 2, you get a ReferenceError: i is not defined, as shown in the output.Consider another example of declaring a variable using the const keyword:function placeOrder(status) {   if (status) {      const message = 'Order placed successfully!';      console.log(message); // statement 1   }   console.log(message); // statement 2}placeOrder(true);Output:Order placed successfullyUncaught ReferenceError: message is not definedThe variable message is declared using the const keyword inside the if-block. This means that when the if-block ends, the variable message loses its scope and is no longer accessible outside the curly braces of the if-block. This is why, when you try to access variable message and print its value on statement 2, you get a ReferenceError: message is not defined, as shown in the output.    Variables declared using the var keyword are function-scoped.Consider the example which we’ve discussed earlier where instead of using let, you use the var keyword to declare the variable i:function foo() {   for (var i = 0; i < 3; i++) {      console.log(i); // statement 1   }   console.log(`All eyes here please: ${i}`); // statement 2}foo();Output:012All eyes here please: 3The variable i is declared using the var keyword inside the for-loop-block. Because the variables declared using the var keyword are function-scoped, the variable i does not go out of scope when the for-loop-block ends and is accessible anywhere inside the scope of the function foo. Thus, on statement 2, when you try to access the variable i and print its value, you get the correct output as 3 (incremented value of variable i after the for-loop’s increment statement is executed) as shown in the output.Redeclaration    Variables declared using the let/const keywords cannot be redeclared in the same scope.What do you think will be the output of the following code?let avengers = 'Infinity War';let avengers = 'Endgame';console.log(avengers);Output:Uncaught SyntaxError: Identifier 'avengers' has already been declaredIn the above code, you declared a variable with the name avengers using the let keyword and then you declared it again on the next line. Thus, the second line throws an SyntaxError as mentioned in the output.    Variables declared using the var keyword can be redeclared in the same scope.Let’s now declare a variable already declared earlier in the same scope using the var keyword.var avengers = 'Infinity War';var avengers = 'Endgame';console.log(avengers);Output:EndgameAs evident from the output , you can redeclare variables having the same name in the same scope using the var keyword. The value contained in the variable will be the final value that you have assigned to it.Hoisting    Variables declared using the let/const keywords are NOT hoisted.This is an important point which is forgotten by many and you won’t find it in all articles. To understand what this point means, consider the example given below:console.log(x);let x = 10;Output:Uncaught ReferenceError: x is not definedNotice that on the first line in the code given above, you are trying to access a variable x, which is declared and assigned a value on the next line. Essentially, you are trying to access a variable, which has not yet been allocated memory (declared). Since the variable x is declared using the let keyword and the variables declared using the let/const keywords are not hoisted, this throws a ReferenceError: x is not defined, as shown in the output.    Variables declared using the var keyword are hoisted to the top of their scope.console.log(x);var x = 10;Output:undefinedAll the declarations are moved to the top of the scope. Notice that on the first line, you are trying to access a variable x, which is declared and assigned a value on the next line. Now, since the variable x is declared using the var keyword and the variables declared using the var keyword are hoisted to the top of their scope in JavaScript, the code gets converted to the one given below:var x;console.log(x);x = 10;Here, the variable x is declared on line 1 and is not assigned any value. All the variables in JavaScript are initialized with the default value undefined, if no other value is assigned explicitly by the user. Thus, x is assigned the value undefined, which is what is printed on the second line (before x is updated to 10).The Bigger Question — What to Prefer?ES6 (aka ES2015) is supported by almost all the browsers today. If you can follow this syntax, it is recommended to use the let and const keywords for declaring all the variables in your code.Now, which one to choose amongst let and const? The title says it all.",
  },
  {
    author: "Colby Fayock",
    title: "What is linting and how can it save you time?",
    content:
      "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.So what is linting?lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. https://en.wikipedia.org/wiki/Lint(software)Simply put, a linter is a tool that programmatically scans your code with the goal of finding issues that can lead to bugs or inconsistencies with code health and style. Some can even help fix them for you!Take for instance, the following example:const test = 'I am a test';console.log(`Test: ${test}`);const test = 'Another one.';We’re declaring the constant test twice, which our javascript engine won’t be happy about. With the proper linter settings and watch configuration, instead of getting caught later as an error when the code runs, you’ll immediately get an error through your linter running in the background:  10:9  error  Parsing error: Identifier 'test' has already been declared   8 |   const test = 'I am a test';   9 |   console.log(`Test: ${2}`);> 10 |   const test = 'Another one.';     |         ^It might be pretty obvious that you have 2 of the same const declarations given this is only 3 lines, but in a more complex application, this can save tons of time having to hunt down a pesky bug that’s not always obvious.What all can linting help with?Lots of things, including but not limited to:    Flagging bugs in your code from syntax errors    Giving you warnings when code may not be intuitive    Providing suggestions for common best practices    Keeping track of TODO’s and FIXME’s    Keeping a consistent code styleMost things you can think of probably already exist in one form or another, and if not, you can even create custom rules that fit your needs!",
  },
  {
    author: "Yazeed Bzadough",
    title: "How to Get More Views on Your Tech Blog",
    content:
      "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.And why not? Just a few benefits include    You build a portfolio of content.    You retain knowledge and benefit others by teaching.    You build an audience and create content tailored to their tastes.    Finding a job becomes easier.    Companies begin applying to you! Most of us get recruiter emails, but top tech names receive actual job offers.",
  },
  {
    author: "Cedd Burge",
    title: "How to write easily describable code",
    content:
      "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.This is usually a fertile breeding ground for bugs born out of miscommunication / misunderstanding, and fixing these bugs often introduces new ones, for the same reasons. In the end it becomes code that no one really understands or wants to touch.Example of undescribable codeIt is easy to think that code is already a written language. If it looks simple, it should be easy to read, speak and listen to. However, this is not always the case.Below is a common solution to deciding whether a year is a leap year.(divisibleBy(4) and not divisibleBy(100)) or divisibleBy(400)This is not overly complicated code. It calls a functions 3 times, has 3 operators (and, or, not), and has two levels of nesting.However, if you take a second to try and describe the algorithm in words I think you will find it to be a struggle.Maybe “A year is leap year if it is divisible by 4 and not divisible by 100, or divisible by 400”?The trouble with this is that the code has brackets, but the words do not. So they cannot adequately describe the condition, and whether “or divisible by 400” applies to “divisible by 4” or “not divisible by 400”. You could try some hand waving and gesturing to get around this, or vary the length of pause between the statements, but hopefully it’s obvious that there is a lot of potential for error.Refactoring to describable codeInstead we can start by describing the condition with words, and then make the words as clear and concise as possible. We might start with this:“400 years is a special case. If a year is divisible by 400, then it is a leap  year. 100 years is also a special case. If a year is divisible by 100 then it isn’t a leap year, unless it is also divisble by 400, the 400 year special case takes priority. If there are no special cases, then the year is a leap year if it is divisible by 4.”This is clear, but isn’t concise, so we would probably want to shrink it a bit:“If a year is divisible by 400, then it is a leap year. Otherwise if it is divisible by 100 then it is a normal year, otherwise it is a leap year if it is divisible by 4.”If we turn these words in to code, we probably get something like the following:	if divisbleBy(400):		return LeapYear	elif divisbleBy(100)		return NormalYear	elif divisbleBy(4):		return LeapYear	else:		return NormalYear",
  },
  {
    author: "Srishti Gupta",
    title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    content:
      "Node.js treats each JavaScript file as a separate module.For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.Let’s take an example to understand this better.You have a file named circle.js which consists of the logic for calculating the area & the circumference of a circle of a given radius, as given below:circle.jsYou can call circle.js file a module named circle.You might be wondering why is there a need to have multiple modules? You could have just written all the code in a single module. Well, it is very important to write modular code. By modular, I mean to say that your code should be independent and should be loosely coupled. Imagine that there’s a large application and you have all your code written in just one place, just one file. Too messy, right?How does the code written inside a module run?Before executing the code written inside a module, Node takes the entire code and encloses it within a function wrapper. The syntax of this function wrapper is:The function wrapper for the circle module will look like the one given below:You can see that there is a function wrapper at the root level encompassing all the code written inside the circle module.     The entire code written inside a module is private to the module, unless explicitly stated (exported) otherwise.This is the most significant advantage of having modules in Node.js. Even if you define a global variable in a module using var, let or const keywords, the variables are scoped locally to the module rather than being scoped globally. This happens because each module has a function wrapper of its own and the code written inside one function is local to that function and cannot be accessed outside this function.",
  },
];

/**
 * Method to display the user signup modal
 *
 * @param {*} segment
 */
function signUp(segment) {
  var template =
    "<div id='segment2-modal' class='segment-2-child-modal'>\
    <form><p class='title-prop'><label>Get Started</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Name</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-name' class='input-text-prop input-text-prop-width' placeholder='Enter your name' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Confirm Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-confirmpwd' class='input-text-prop input-text-prop-width' placeholder='Re-enter your password' required></input>\
          </p>\
          <p class='segment-2-p'><button class='segment-2-btn'>Sign Up</button></p>\
          </form></div>";
  document.getElementById(segment).innerHTML = template;
}

// function signUpUser(name, username, pwd, confirmpwd) {}

/**
 * Method to close the respective modal
 */
function closeSegment2Parent() {
  document.getElementById("segment2-modal").remove();
}

/**
 * Method to display the user signin modal
 *
 * @param {*} segment
 */
function signIn(segment) {
  var template =
    "<div id='segment2-modal' class='segment-2-child-modal'>\
    <form><p class='title-prop'><label>Welcome Back!</label><span class='close-win-prop'><i class='fa fa-times' aria-hidden='true' onclick='closeSegment2Parent()'></i></span></p>\
          <hr>\
          <p class='segment-2-p'><label class='label-prop'>Username</label></p>\
          <p class='segment-2-p'>\
              <input type='text' id='input-username' class='input-text-prop input-text-prop-width' placeholder='Enter your username' required></input>\
          </p>\
          <p class='segment-2-p'><label class='label-prop'>Password</label></p>\
          <p class='segment-2-p'>\
              <input type='password' id='input-pwd' class='input-text-prop input-text-prop-width' placeholder='Enter your password' required></input>\
          </p>\
          <p class='segment-2-p2'>Not a member? <a href='#' onclick = 'closeSegment2Parent();signUp(" +
    '"' +
    segment +
    "\")'>Sign Up</a></p>\
          <p class='segment-2-p'><button class='segment-2-btn'>Sign In</button></p>\
          </form></div>";
  document.getElementById(segment).innerHTML = template;
}
