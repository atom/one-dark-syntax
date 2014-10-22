// Some sample JS to test a "typical" use case.

function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;

// logs "Hello, I'm Alice"
person1.sayHello();

// logs "Hello, I'm Bob"
person2.sayHello();

// logs "Hello, I'm undefined" (or fails
// with a TypeError in strict mode)
helloFunction();

// logs true
console.log(helloFunction === person1.sayHello);

// logs true
console.log(helloFunction === Person.prototype.sayHello);

// logs "Hello, I'm Alice"
helloFunction.call(person1);
