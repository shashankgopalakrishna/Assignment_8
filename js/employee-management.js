/*eslint-env browser*/

"use strict";

var $ = function(id) {
    return window.document.getElementById(id);
}

var employeeList = [
    ["Sally Smith","Quality Assurance",3423],
    ["Mark Martin","VP Sales",3346],
    ["John Johnson","Marketing",3232],
    ["Dave","Real estate",5346],
    ["Michel","Business",4186]
];

window.addEventListener("load", function () {
    resetForm();
    displayEmployees();
    $("add-button").addEventListener("click", function(e) {
        e.preventDefault();
        addEmployee();
    });
});

function displayEmployees() {
    $("display-employee-rows").innerHTML = ""; // Clear existing data

    for (let i = 0; i < employeeList.length; i++) {
        const employee = employeeList[i];
        const row = document.createElement("tr");

        const empName = document.createElement("td");
        empName.innerText = employee[0];
        row.appendChild(empName);
        const empTitle = document.createElement("td");
        empTitle.innerText = employee[1];
        row.appendChild(empTitle);
        const empExtension = document.createElement("td");
        empExtension.innerText = employee[2];
        row.appendChild(empExtension);

        const deleteBtnCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("class","delete-btn");
        deleteBtn.addEventListener("click", () => deleteEmployee(i));
        deleteBtnCell.appendChild(deleteBtn);
        row.appendChild(deleteBtnCell);

        $("display-employee-rows").appendChild(row);
    }
    
    $("employee-count").innerHTML = employeeList.length;
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    displayEmployees();
}

function addEmployee() {
    const name = $("name").value;
    const title = $("title").value;
    const extension = $("extension").value;
    const elems = document.querySelectorAll('#required-ele').length;
    for (let k = 0; k < elems; k++) {
        if ($("required-ele")) {
            $("required-ele").remove();
        }
    }
    if (!name) {
        $("name-block").appendChild(getRequiredHTMlElement());
    }
    if (!title) {
        $("title-block").appendChild(getRequiredHTMlElement());
    }
    if (!extension) {
        $("extension-block").appendChild(getRequiredHTMlElement());
    }
    if (name && title && extension) {
        employeeList.push([name, title, extension]);
        displayEmployees();
        resetForm();
    }
}

function resetForm() {
    $("name").value = "";
    $("title").value = "";
    $("extension").value = "";
}

function getRequiredHTMlElement() {
    const requiredEle = document.createElement("span");
    requiredEle.innerHTML = "Required field";
    requiredEle.setAttribute("id", "required-ele");
    requiredEle.setAttribute("class", "required");
    return requiredEle;
}