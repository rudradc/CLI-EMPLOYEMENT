// app.js

const readline = require("readline");

// Array to store employee data
let employees = [];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display menu options
function showMenu() {
  console.log("\n=== Employee Management System ===");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("Select an option: ", handleMenu);
}

// Handle user input from menu
function handleMenu(option) {
  switch(option) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option! Try again.");
      showMenu();
  }
}

// Add a new employee
function addEmployee() {
  rl.question("Enter Employee Name: ", (name) => {
    rl.question("Enter Employee ID: ", (id) => {
      // Check if ID already exists
      if (employees.find(emp => emp.id === id)) {
        console.log(`Employee with ID ${id} already exists!`);
      } else {
        employees.push({ name, id });
        console.log(`Employee ${name} added successfully!`);
      }
      showMenu();
    });
  });
}

// List all employees
function listEmployees() {
  if (employees.length === 0) {
    console.log("No employees found!");
  } else {
    console.log("\nList of Employees:");
    employees.forEach(emp => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  showMenu();
}

// Remove employee by ID
function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      const removed = employees.splice(index, 1);
      console.log(`Employee ${removed[0].name} removed successfully!`);
    } else {
      console.log(`Employee with ID ${id} not found!`);
    }
    showMenu();
  });
}

// Start the CLI
showMenu();
