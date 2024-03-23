// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Creat empty array to hold employee objects.
  const employees = []
  // Set initial condition for the main while loop to true.
  let input = true;
  // Start while loop to collect employee data.
  while (input) {
    // Declare the variables we are collecting. leaving them undefined for now.
    let firstname, lastname, sal
    // The following loops collect the information using the browser prompt. 
    // The loops exit when a value is entered and it is of an appropriate type.
    while (!firstname || Number(firstname)) {
      firstname = prompt('Enter employee First Name')
    }
    while (!lastname || Number(lastname)) {
      lastname = prompt('Enter employee Last Name')
    }
    while (!sal || !Number(sal)) {
      sal = prompt('Enter employee salary')
    }
    // Declare employee as an object with the values collected by the prompts.
    let employee = { firstName: firstname, lastName: lastname, salary: Number(sal) }
    // Add the employee object created during the loop to our employees array.
    employees.push(employee)
    // Use confirm prompt to determine whether to contunue the loop.
    // If they choose the "Cancel" button, input is set to false by the confirm method.
    input = confirm('Enter another employee?')
  }
  // Return the employees Array which now contains all collected information.
  return employees;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Use the Array reduce method to get the sum of all employee salarys.
  // Then divide by the number of employees to get the average.
  const avg = employeesArray.reduce((a, b) => (a + b.salary), 0) / employeesArray.length
  // Print statment to console with the average salary.
  console.log('Our employee average salary is ' + avg);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Use Math.random() to generate a random number value 0 between 1. 
  // Multiply by the number of Employees. Then use Math.floor to get the index of the random employee.
  const randEmp = Math.floor(Math.random() * employeesArray.length);
  // Print statment to console congratulating the employee chosen.
  console.log("Congrats " + employeesArray[randEmp].firstName + ' ' + employeesArray[randEmp].lastName + ', you have been randomly selcted!')
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
