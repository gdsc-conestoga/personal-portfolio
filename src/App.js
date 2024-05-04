import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

// Getting Started
// Lines that start with "//" are comments and are ignored by the computer
// Comments are used to explain what the code does and provide other helpful information
// We've provided some comments to help you understand the code. Follow the instructions in the comments 
// to complete the project. Feel free to add your own comments as you go along!

// Ignore this line for now. This line "imports" code from a library called ReactBootstrap
// ReactBootstrap is a libray, or a "bundle" of code that someone else wrote.
// We use libraries to make our code easier to write, reuse other people's code, and make our websites look nice.
import { Container, Row, Col, Button, Card } from "react-bootstrap";


// A variable is a piece of data that can change over time
var myVariable = "Hello, world!";
// The "var" keyword tells the computer that we're creating a variable
// We use variables to store data that we want to use later in our program.
// In this case, we're storing the text "Hello, world!" in the variable "myVariable"
// Using variables makes our code more flexible and easier to read. We can change the value of the variable
// and the new value will be used throughout the program. Also, we can use the variable multiple times
// without having to retype the value each time. Then, if we want to change the value, we only have to do it in one place.

// Variables can store different types of data, like text, numbers, and true/false values
var myNumber = 42;
var myBoolean = true; // Booleans are true/false values


var seenByComputer = true; // By the way, comments can be on the same line as code, like this:
// The computer sees "var seenByComputer = true;" but *doesn't see* "// Comments can also be on the same line as code."


// Step 1: Change the values of the variables below
// These variables are used in the code to display a greeting message and a tagline.
// Can you find where they are used in the website? What about in the code?
// Change the values of the variables to your own name and favorite food (or anything else you'd like).
var name = "[ERROR: Name not found]";
var tagline = "My favorite food is [ERROR: Food not found]";
var favouriteNumber = 0;

// In addition to variables, we can also use functions to store code that we want to run later
// Functions are like recipes. They store a set of instructions that we can use whenever we want
// (and as many times as we want).
// Here's an example of a function:
function sayHello() {
  alert("Hello, world!");
}
// This function is called "sayHello". It doesn't take any inputs (or "arguments").
// When we call this function, it will show a browser alert (window) with the text "Hello, world!"
// This function isn't used in the code below, so we will sadly never see the alert :(

// Functions can also take inputs, or "arguments". These are values that we give to the function
// when we call it. The function can then use these values to do something.
// Here's an example of a function that takes an argument:
function saySomething(message) {
  alert(message);
}
// This function is called "saySomething". It takes one argument, called "message".
// It is almost the same as the "sayHello" function, but instead of showing "Hello, world!" in the alert,
// it will show whatever message we give it.
// For example, if we call "saySomething('Goodbye, world!')", it will show an alert with the text "Goodbye, world!"

// Functions can also return values. This means that they can give us back a piece of data when they finish running.
// Here's an example of a function that returns a value:
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
// This function is called "multiplyNumbers". It takes two arguments, "num1" and "num2".
// It returns the result of multiplying these two numbers together.

// We can combine functions and variables like this:
var multiplyResult = multiplyNumbers(5, 10);
// This line calls the "multiplyNumbers" function with the arguments 5 and 10.
// so "multiplyResult" will be 5 * 10, or 50.

// In React, a special type of function called a "component" is used to create parts of a website
// Components are like functions, but they return a special type of data that React uses to build the website
// Components are used to create reusable parts of a website, like a header, a button, or a form
// Here's an example of a simple component:
var Hello = () => {
  return <h1>Hello</h1>;
}
// This component is called "Hello". It doesn't take any arguments.
// It returns an "h1" element with the text "Hello". An h1 element is a heading, basically large bold text.

// Enough talking! Let's see some code!

// Step 2: Fixing code!
// The code below is broken. Can you fix it?
// We've provided some hints in the comments. Try to understand what the code is doing and fix the error

var GreetButton = () => { // GreetButton is a component that displays a button
  var greet = () => { // greet is a function that shows an alert with a greeting message
    alert(`Hello ${name}! I hope you're having a great day!`);
  }
  var doNothing = () => { // doNothing is a function that..., well you can guess
    console.log("I'm doing nothing!");
  }

  return (
    <Button variant="primary" onClick={doNothing}>Greet me!</Button>
  );
}


var AddNumbersComponent = () => {
  // The following is a bit of React "magic" that we'll explain later
  // We promise the error is not here!
  var [num1, setNum1] = useState(0);
  var [num2, setNum2] = useState(0);
  var [result, setResult] = useState(0);
  
  
  useEffect(() => {
    setResult(addNumbers(num1, num2));
  }, [num1, num2]);
  // End of "magic" code

  // This function adds two numbers together
  var addNumbers = (num1, num2) => {
    return num1 + num2 - 1;
  }

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      +
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      =
      <span>{result}</span>
    </div>
  );
}

// Step 3: Password Guesser
// Instead of fixing code, let's try to crack a password!
// Can you figure out the password? Don't modify the code to cheat!
var PasswordGuesserComponent = () => {
  // The following is a bit of React "magic", no password here!
  const [guess, setGuess] = useState("");
  // End of "magic" code

  // Tempted to cheat? Don't do it! Try to guess the password the right way!
  const checkPassword = () => {
    if (guess === password) {
      alert("You guessed the password!"); // If you see this alert, you've guessed the password!
    } else {
      alert("Incorrect password. Try again!"); // If you see this alert, you haven't guessed the password yet
    }
  }

  return (
    <div>
      <input type="password" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <Button style={{ margin: 10 }} variant="primary" onClick={checkPassword}>Check password</Button>
    </div>
  );
}


var CardComponent = ({title, child,}) => {
  return (
    <Card className='bg-dark text-white' style={{ width: '30rem', margin: 20 }}>
      <Card.Title style={{ 'margin-top': 20}}>{title}</Card.Title>
      <Card.Body>{child}</Card.Body>
    </Card>
  );
}


const Projects = () => {

  return (
    <section className="project animate__animated animate__fadeIn" id="projects">
      <h2>Projects</h2>
      <Container>
        <Row>
          <CardComponent title="GreetButton" child={<GreetButton />} />
          <CardComponent title="AddNumbersComponent" child={<AddNumbersComponent />} />
          <CardComponent title="PasswordGuesserComponent" child={<PasswordGuesserComponent />} />
        </Row>
      </Container>
    </section>
  )
}


const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div
              className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my website!</span>
              <h1>Hi! I'm {name}</h1>
              <p>My favourite number is {favouriteNumber}</p>
              <p>{tagline}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


function App() {
  return (
    <div className="App">
      <Banner />
      <Projects />
    </div>
  );
}


export default App;














































































// Almost there...






































var password = "GoCodeGirl2024!";

































// Too far!