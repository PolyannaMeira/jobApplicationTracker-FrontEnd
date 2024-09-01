"use strict";

// script.js

document.getElementById("addJobBtn").addEventListener("click", function () {
  const companyName = document.getElementById("companyName").value;
  const position = document.getElementById("position").value;
  const dateApplied = document.getElementById("dateApplied").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;

  if (companyName && position && dateApplied && status) {
    const table = document
      .getElementById("jobTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
          <td>${companyName}</td>
          <td>${position}</td>
          <td>${dateApplied}</td>
          <td>${status}</td>
          <td>${notes}</td>
          <td><button class="delete-btn">Delete</button></td>
      `;

    // Clear form
    document.getElementById("companyName").value = "";
    document.getElementById("position").value = "";
    document.getElementById("dateApplied").value = "";
    document.getElementById("status").value = "Applied";
    document.getElementById("notes").value = "";

    // Add delete functionality
    const deleteBtn = newRow.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      table.deleteRow(newRow.rowIndex - 1);
    });
  } else {
    alert("Please fill out all required fields.");
  }
});
