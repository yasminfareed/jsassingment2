
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

var fuel= prompt("Enter remaining fuel in liters.");
if (fuel<0.25) {
    document.write("Please refill the fuel in your car.")
    
}
document.write("<br>")

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

var fuel= prompt("Enter remaining fuel in liters.");
if (fuel<0.25) {
   
    alert("Please refill the fuel in your car.")
}
document.write("<br>")
// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.

var Inputmarks = prompt("Enter marks obtained in three subjects, separated by commas (e.g. 85,75,90):");
var totalMarks = parseInt(prompt("Enter total marks for each subject:"));

// Convert the input string into an array of marks
var marksArray = Inputmarks.split(',').map(function(m) {
    return parseInt(m);
});

function calculatePercentage(marksArray, totalMarks) {
    var totalObtainedMarks = marksArray.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);
    
    return (totalObtainedMarks / (totalMarks * marksArray.length)) * 100;
}

var percentage = calculatePercentage(marksArray, totalMarks);

document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>");

if (percentage >= 90) {
    document.write("Grade: A+");
    document.write("<br>");
    document.write("Remarks: Excellent");
} else if (percentage >= 80) {
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Very Good");
} else if (percentage >= 70) {
    document.write("Grade: B");
    document.write("<br>");
    document.write("Remarks: Good");
} else if (percentage >= 60) {
    document.write("Grade: C");
    document.write("<br>");
    document.write("Remarks: Fair");
} else {
    document.write("Grade: F");
    document.write("<br>");
    document.write("Remarks: Needs Improvement");
}
document.write("<br>");

// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

let literalArr= [null, undefined, true, false];
let stringArr= ["ali", "ahmed"];
let numberArr= [1,2,3];
let boolArr= [true, false, true, true];
let mixedArr= [42, "mango", true, null, { name: "yasmin", age: 26}];
let qualificationArr= ["Bachelor's Degree", "Master's Degree", "Ph.D."];

// 5)Write a program to store phone manufacturers in an array.

var phoneManufacturers = ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "OnePlus", "Sony", "LG", "Nokia"];

document.write("List of phone manufacturers:");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write(i + 1 + ". " + phoneManufacturers[i]);
}
document.write("<br>")

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

let scores = [80, 50, 70,60,90,];

document.write(scores.sort());
document.write("<br>");

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

let Array= ["This is my cat"];

// 8)Implement the FIFO (First In First Out) approach using arrays.

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log("Front of the queue:", queue.front()); // Output: 10
  
  queue.dequeue();
  queue.print(); // Output: [20, 30]
  
  console.log("Is queue empty?", queue.isEmpty()); // Output: false
  console.log("Queue size:", queue.size()); // Output: 2
  

// 9) Implement the LIFO (Last In First Out) approach using arrays.

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.peek()); // Output: 20
  console.log(stack.size()); // Output: 2
  
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

// Sample array of items
const items = ["apple", "banana", "cherry", "grape", "orange", "pear"];

// Function to search for an item in the array
function searchItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true; // Item found
    }
  }
  return false; // Item not found
}

// Prompt the user for input
const userInput = prompt("Enter an item to search for:");

// Call the searchItem function and display the result
if (searchItem(items, userInput)) {
  alert(`"${userInput}" was found in the list.`);
} else {
  alert(`"${userInput}" was not found in the list.`);
}


// 11)Write a program to identify the largest number in the given array.

let myArray = [20,50,80,90,100,30];
let largest = myArray[0];
for(var i=0; i < myArray.length; i++){
if (myArray[i] > largest){
    largest= myArray[i];
}
}
document.write(largest);
document.write("<br>");
// 12)Write a program to identify the smallest number in the given array.

let sm = [20,50,80,90,100,30];
let smallest = sm[0];
for(var i=0; i < sm.length; i++){
if (sm[i] > smallest){
    largest= sm[i];
}
}
document.write(smallest);

// 13)Write a program to print multiples of 5 ranging from 1 to 100.

for (let i = 1; i <= 20; i++) { 
    let multipleOf5 = i * 5;
    document.write(multipleOf5);
}
document.write("<br>")

// // Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

// // solution in html file

// // 14)Repeat task1 for subtraction, multiplication, division & modulus.

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

var cityName = prompt("Enter a city name:");
if (cityName === "karachi") {
    document.write("Welcome to the city of lights.");
} 
document.write("<br>")

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

var gender = prompt("Write your gender:");


if (gender=== "Male") {
    document.write("Good Morning Sir.");
} else {
    document.write("Good Morning Ma'am.");
}
document.write("<br>")

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
// Prompt the user for input
var color = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

if (color === "red") {
    document.write("Must Stop.");
} else if (color === "yellow") {
    document.write("Ready to move.");
} else if (color === "green") {
    document.write("Move now.");
} else {
    document.write("Enter valid color.");
}
