// * DATA TYPE EXERCISES
// We have 8 Data Types: Number, String, Boolean, Bigint, Undefined, Null, Symbol, and Object

// * Strings

/**
 * Create a variable called doubleQuotes with any string value, but the string 
 * must be created using double quotes.
 */
function doubleQuotes() {
    // TODO Write your answer here
}

/**
 * Create a variable called singleQuotes with any string value, but the string
 * must be created using single quotes.
 */
function singleQuotes() {
    // TODO Write your answer here
}

/**
 * Create a variable called yourFullName and assign it a value of your full
 * name. Then create another variable called backtickString and assign it a 
 * value of `Hi, my name is:` followed by your fullname. You should insert
 * yourFullName rather than append it.
 */
function backtickString() {
    // TODO Write your answer here

}

/**
 * Create three variables. The first should be called example1 and should have a
 * value of "Hello world". The second should be example2 with a value of 50. The
 * third should be example3 with a value of 50. 
 * 
 * Once you have created all three variables, add example2 and example3 to 
 * example1, then use console.log() to print out the value of example1.
 */
function concatenate() {
    let example1 = "Hello world";
    let example2 = 50;
    let example3 = 50;
    // String is first
    // Concatenate 50
    // Concatenate 50 again
    console.log(example3 + example2 + example1 );
}

// TODO Add (and log) exampleNumber1 to exampleString

/**
 * Create two variables. The first should be called example1 and should have 
 * a value of "Hello world". The second should be example2 with a value of 50. 
 * 
 * 
 * Once you have created the variables, add example1 to example2, then use 
 * console.log() to check the value example2.
 * 
 * ? How is it different from the last exercise?
 */
function addNumberAndString() {
    // TODO Write your answer here
}

// TODO Add (and log) exampleNumber1 to exampleNumber2, then add it to exampleString
/**
 * Create three variables. The first should be called example1 and should have 
 * a value of "Hello World". The second should be example2 with a value of 50. 
 * The third should be example3 with a value of 50.
 * 
 * Once you have created the three variables, use console.log() to add example3,
 * example2, and example1 together in that order. 
 * 
 * ? How is the answer different than in the past?
 */
function addNumberStringAndNumber() {
    // TODO Write your answer here
}

// * Numbers

/**
 * Create a variable of a number using decimal points. For example, 3.1415.
 * Use console.log() to print the value of the variable.
 */
function createFloat() {
    // TODO Write your answer here
    let pi = 3.14;
    console.log(pi);
}

/**
 * Create a variable of a whole number, like 3, 4, or 5. Use console.log() to 
 * print out the variable's value. 
 * 
 * The Number type can hold either integers or floats in JavaScript, unlike most
 * programming languages.
 */
function createInteger() {
    // TODO Write your answer here
    let integer = 5;
    console.log(integer);
}

/**
 * Create a variable of a number using exponential notation. For example, 
 * 150,000 would be the same as 15e4. Use console.log() to print out the 
 * variable's value.
 */
function exponential() {
    // TODO Write your answer here
    let exp = 213e5;
    console.log(exp);
}

// * Booleans

/**
 * Create a variable holding a boolean value of true. Use console.log() to 
 * print out the variable's value.
 */
function createBoolean() {
    // TODO Write your answer here
    let bool = true;
    console.log(bool);
}

/**
 * Create a variable holding a boolean value of false. Use console.log() to
 * print out the variable's value.
 */
function createBoolean2() {
    // TODO Write your answer here
}


// * Bigints

// TODO Give largeNumber a value of 100000000000000000000 and bigInteger a value of100000000000000000000n 
let largeNumber;    // Number
let bigInteger;    // Bigint

/**
 * Create two variables. One should be called largeNumber and should have a 
 * value of 100000000000000000000. The other should be called bigInteger and 
 * should have a value of 100000000000000000000n.
 * 
 * Use console.log() along with the typeof operator to check the type of both 
 * variables.
 * 
 */
function createBigInteger() {
    // TODO Write your answer here
    let largeNumber = 100000000000000000000;
    let bigInteger = 100000000000000000000n;
    console.log(typeof largeNumber);
    console.log(typeof bigInteger);
}

// TODO Try to add these variables together in the console.
// ? What happens?

/**
 * Create two variables. The first variable should be called largeNumber and 
 * have a value of 10000000000000000. The second should be called bigInteger 
 * and should have a value of 1000000000000n. 
 * 
 * Use console.log() to add the variables together. Be sure to run this in the 
 * console to see what happens. 
 * 
 * ? What is the sum of the two variables? Does it work at all?
 */
function addNumberAndBigInteger() {
    // TODO Write your answer here
}


/**
 * Create a new variable called safe which is equal to 9007199254740991. Then
 * create another variable called largeNumber with a value of 10000000000000000.
 * 
 * Use console.log() to add the two variables together. Be sure to run this in 
 * the console to see what happens. 
 * 
 * ?  What is the sum of the two variables? Does that answer seem correct?
 */
function addToMaxSafeInteger() {
    // TODO Write your answer here
    let safe = 9007199254740991;
    let largeNumber = 10000000000000000;
    console.log(safe + largeNumber);
}

// * Objects

/**
 * Create a variable called meObject and assign it to an object that represents 
 * yourself (name, age, hairColor).
 * 
 * Once you have created the object, use console.log() to print out each
 * of the values of the object's properties.
 */

function createMeObject() {
    // TODO Write your answer here
    const meObject = {
        name : "Graham Eichstaedt",
        age : 24,
        hairColor : "Blonde"
    };
    console.log(meObject.name);
    console.log(meObject.age);
    console.log(meObject.hairColor);
}



// * Undefined

/**
 * Create a variable called unassigned, but do not assign a value to it.  Use 
 * console.log() to find the value of unassigned.
 */
function createUndefined() {
    // TODO Write your answer here
    let unassigned;
    console.log(unassigned);
}

/**
 * Given a variable called dog, use undefined to clear the variable. Once you
 * have cleared the variable, use console.log() to find the value of dog.
 */
function useUndefined() {
    let dog = {name: "Simba", age: 2, breed:"Belgian Malinois"};
    // TODO Write your answer here
    dog = undefined;
    console.log(dog);
}

// * Null

/**
 * Given a variable called person, use null to clear the variable. Once you 
 * have cleared the variable, use console.log() to find the value of person.
 */
function useNull() {
    let person = { name: "Eggbert" };
    // TODO Write your answer here
    person = null;
    console.log(person);
    return 0;
}

// * Symbol

/**
 * Create a variable that is a Symbol which holds your name. Then, create a 
 * second variable that is also a Symbol and holds your name. Use console.log() 
 * to check if the two variables are equal.
 * 
 * ? Are the variables equal?
 */
function createSymbol() {
    // TODO Write your answer here
    const name1 = Symbol("Graham");
    const name2 = Symbol("Graham");
    console.log(name1 === name2);
}

/**
 * Create a variable that is a Symbol which holds your name. Then, create an 
 * Object called person. Its only property should be a name. The property key
 * should be your symbol and the value should also be the value of the Symbol. 
 */
function useSymbol() {
    // TODO Write your answer here
    const name = Symbol("Graham");
    const person = {
        name : "Graham"
    };
    console.log(person);
}

