<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("userTableBody");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("user_")) {
        const data = JSON.parse(localStorage.getItem(key));
        addRow(tableBody, data);
      }
    }
  });

  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dob = new Date(form.dob.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - dob.getFullYear();
    if (!(age >= 18 && age <= 55)) {
      alert("Age should be between 18 and 55.");
      return;
    }
    const key = "user_" + Date.now();
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      dob: form.dob.value,
      acceptedTerms: form.acceptedTerms.checked,
    };
    localStorage.setItem(key, JSON.stringify(data));
    addRow(userTableBody, data);
  });

  function addRow(tableBody, data) {
    const row = tableBody.insertRow();
    const cellStyle = "border border-gray-300 p-2";
    const nameCell = row.insertCell();
    nameCell.textContent = data.name;
    nameCell.className = cellStyle;
    const emailCell = row.insertCell();
    emailCell.textContent = data.email;
    emailCell.className = cellStyle;
    const passwordCell = row.insertCell();
    passwordCell.textContent = data.password;
    passwordCell.className = cellStyle;
    const dobCell = row.insertCell();
    dobCell.textContent = data.dob;
    dobCell.className = cellStyle;
    const acceptedTermsCell = row.insertCell();
    acceptedTermsCell.textContent = data.acceptedTerms;
    acceptedTermsCell.className = cellStyle;
=======
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("userTableBody");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("user_")) {
        const data = JSON.parse(localStorage.getItem(key));
        addRow(tableBody, data);
      }
    }
  });

  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dob = new Date(form.dob.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - dob.getFullYear();
    if (!(age >= 18 && age <= 55)) {
      alert("Age should be between 18 and 55.");
      return;
    }
    const key = "user_" + Date.now();
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      dob: form.dob.value,
      acceptedTerms: form.acceptedTerms.checked,
    };
    localStorage.setItem(key, JSON.stringify(data));
    addRow(userTableBody, data);
  });

  function addRow(tableBody, data) {
    const row = tableBody.insertRow();
    const cellStyle = "border border-gray-300 p-2";
    const nameCell = row.insertCell();
    nameCell.textContent = data.name;
    nameCell.className = cellStyle;
    const emailCell = row.insertCell();
    emailCell.textContent = data.email;
    emailCell.className = cellStyle;
    const passwordCell = row.insertCell();
    passwordCell.textContent = data.password;
    passwordCell.className = cellStyle;
    const dobCell = row.insertCell();
    dobCell.textContent = data.dob;
    dobCell.className = cellStyle;
    const acceptedTermsCell = row.insertCell();
    acceptedTermsCell.textContent = data.acceptedTerms;
    acceptedTermsCell.className = cellStyle;
>>>>>>> 025e202f51611da68cca201bec6c8148211c288b
  }