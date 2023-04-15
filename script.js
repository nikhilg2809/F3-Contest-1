let arr = [];
let id = 1;

// storing html elements
const form = document.getElementById("inputs");
const button = document.getElementById("btn");
const meaasage = document.getElementById("message");

// clicking the button function will run
function onSubmit(e) {
  e.preventDefault(); // preventing default behaviour

  // taking input values
  const name = document.getElementById("name-input").value;
  const profession = document.getElementById("profession-input").value;
  const age = document.getElementById("age-input").value;

  // checking for inputs to be filled
  if (name == "" || profession == "" || age == "") {
    message.innerText = `Error : Please Make sure All the fields are filled before adding in an employee !`;
    message.style.color = "#FF4343";
    message.style.fontSize = "20px";
    message.style.marginBottom = "15px";
    return;
  }

  // creating objects to push in array
  const obj = {
    id: id++,
    name: name,
    profession: profession,
    age: parseInt(age),
  };

  // pushing object into array
  arr.push(obj);

  // succesfull message
  message.innerText = "Success : Employee Added!";
  message.style.color = "#43FF78";
  message.style.fontSize = "22px";
  message.style.marginBottom = "15px";

  // resetting the form
  document.getElementById("name-input").value = "";
  document.getElementById("profession-input").value = "";
  document.getElementById("age-input").value = "";

  updateList();
}

// updation of list of employees
function updateList() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  // iterating through array
  arr.forEach(function (obj) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `
    <div class ="spans">
        <span>${obj.id}.</span>
        <span>${obj.name}</span>
        <span>${obj.profession}</span>
        <span>${obj.age}</span>
    </div>
        <button class="delete-button" data-id="${obj.id}">Delete User</button>
       `;

    list.appendChild(li);
  });
  // add event listener to delete buttons
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteEmployee);
  });
}

// function to delete employee from array
function deleteEmployee(event) {
  // get employee ID from data attribute
  const id = parseInt(event.target.getAttribute("data-id"));

  // remove employee from array
  arr = arr.filter(function (obj) {
    return obj.id !== id;
  });

  // update employee list
  updateList();
}
button.addEventListener("click", onSubmit);