const employeeNameField = document.getElementById("employeeName-input");
const emailField = document.getElementById("email-input");
const phoneNumberField = document.getElementById("phoneNumber-input");

const form = document.getElementById("employee-form");
const table = document.getElementById("table");
const updateEmployeeNameField = document.getElementById("update-employeeName");
const updateEmailField = document.getElementById("update-email");
const updatePhoneNumberField = document.getElementById("update-phoneNumber");
const editTable = document.getElementById("editTable");

const headers = {
  'Content-Type':'application/json'
}

const baseUrl = 'http://localhost:8080/employee';

const handleSubmit = async (e) => {
  e.preventDefault();
  let bodyObj = {
    employeeName: employeeNameField.value,
    email: emailField.value,
    phoneNumber: phoneNumberField.value
  };
  await addEmployee(bodyObj);
}

async function addEmployee(obj) {
  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: headers
  })
    .catch(err => console.error(err.message))
  if (response.status == 200) {
    employeeNameField.value = "";
    emailField.value = "";
    phoneNumberField.value = "";
    return getEmployees();
  }
}

async function getEmployees() {
  await fetch(`${baseUrl}`, {
    method: "GET",
    headers: headers
  })
    .then(response => response.json())
    .then(data => createEmployeeCards(data))
    .catch(err => console.error(err))
}

async function updateEmployee() {
    const selectedEmployeeId = document.querySelector('.editTable').getAttribute('data-employee-id');
    let bodyObj = {
        id: selectedEmployeeId,
        employeeName: updateEmployeeNameField.value,
        email: updateEmailField.value,
        phoneNumber: updatePhoneNumberField.value
    }

    const response = await fetch(`${baseUrl}/`, {
        method: "PUT",
        body: JSON.stringify(bodyObj),
        headers: headers
    })
        .catch(err => console.error(err.message))

    if (response.status == 200) {
        updateEmployeeNameField.value = "";
        updateEmailField.value = "";
        updatePhoneNumberField.value = "";
        editTable.style.display = "none";
        return getEmployees();
    }
}

async function handleDelete(employeeId) {
  await fetch(`${baseUrl}/${employeeId}`, {
    method: "DELETE",
    headers: headers
  })
    .catch(err => console.error(err))
  return getEmployees();
}

const createEmployeeCards = (array) => {
  let tableData = "";

  array.forEach(obj => {
    tableData += `
     <tr>
       <th scope="row">${obj.employeeName}</th>
       <td scope="row">${obj.email}</td>
       <td scope="row">${obj.phoneNumber}</td>
       <td width="265rem">
         <button class="btn btn-info" onclick="editTableDisplay(${obj.id})">Update</button>
         <button class="btn btn-danger" onclick="handleDelete(${obj.id})">Delete</button>
       </td>
     </tr>
    `;
  });

  document.getElementById("table_body").innerHTML = tableData;
}

function logout() {
  window.location.replace("http://localhost:8080/login.html");
}

function editTableDisplay(id) {
  document.querySelector('.editTable').setAttribute('style', 'display: block;');
  document.querySelector('.editTableSubmit').setAttribute('style', 'display: block;');
  document.querySelector('.editTable').setAttribute('data-employee-id', id);
}
document.getElementById("logout-button").addEventListener("click", () => {

    window.location.replace("http://localhost:8080/login.html");
});
getEmployees();
form.addEventListener("submit", handleSubmit);
