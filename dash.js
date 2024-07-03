// JavaScript code for handling navigation and loading content dynamically

// Function to handle navigation
function handleNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetPage = e.target.textContent.toLowerCase();
        loadPage(targetPage);
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }
  
  // Function to load content dynamically
  function loadPage(page) {
    const mainSection = document.getElementById('main-section');
    // You can fetch content from the server based on the 'page' parameter and update the mainSection accordingly
    mainSection.innerHTML = `<h2>${page} Content</h2>`;
  }
  
  // Initialize the dashboard
  function initDashboard() {
    handleNavigation();
    loadPage('dashboard');
  }
  
  // Run initialization when the page is loaded
  window.addEventListener('load', initDashboard);
  document.addEventListener("DOMContentLoaded", function() {
    const patientsLink = document.getElementById('patients-link');
    const doctorsLink = document.getElementById('doctors-link');
    const appointmentsLink = document.getElementById('appointments-link');
    const mainContent = document.getElementById('main-content');
  
    patientsLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = `
        <h2>Add Patient</h2>
        <form id="add-patient-form">
          <label for="patient-name">Name:</label>
          <input type="text" id="patient-name" name="patient-name" required><br><br>
          <label for="patient-age">Age:</label>
          <input type="number" id="patient-age" name="patient-age" required><br><br>
          <label for="patient-gender">Gender:</label>
          <select id="patient-gender" name="patient-gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br><br>
          <button type="submit">Add</button>
        </form>
        <div id="patient-list"></div>
      `;
  
      const addPatientForm = document.getElementById('add-patient-form');
      const patientList = document.getElementById('patient-list');
  
      addPatientForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('patient-name').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
  
        // Here you can process the form data, for now, let's just display it
        const newPatient = document.createElement('div');
        newPatient.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Age:</strong> ${age}</p><p><strong>Gender:</strong> ${gender}</p>`;
        patientList.appendChild(newPatient);
  
        // Clear the form fields
        addPatientForm.reset();
      });
    });
  
    // Code for handling other links (Doctors, Appointments) goes here...
  });
  document.addEventListener("DOMContentLoaded", function() {
    const patientsLink = document.getElementById('patients-link');
    const doctorsLink = document.getElementById('doctors-link');
    const appointmentsLink = document.getElementById('appointments-link');
    const mainContent = document.getElementById('main-content');
  
    patientsLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = `
        <h2>Add Patient</h2>
        <form id="add-patient-form">
          <label for="patient-name">Name:</label>
          <input type="text" id="patient-name" name="patient-name" required><br><br>
          <label for="patient-age">Age:</label>
          <input type="number" id="patient-age" name="patient-age" required><br><br>
          <label for="patient-gender">Gender:</label>
          <select id="patient-gender" name="patient-gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br><br>
          <button type="submit">Add</button>
        </form>
        <div id="patient-list"></div>
      `;
  
      const addPatientForm = document.getElementById('add-patient-form');
      const patientList = document.getElementById('patient-list');
  
      addPatientForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('patient-name').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
  
        // Here you can process the form data, for now, let's just display it
        const newPatient = document.createElement('div');
        newPatient.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Age:</strong> ${age}</p><p><strong>Gender:</strong> ${gender}</p>`;
        patientList.appendChild(newPatient);
  
        // Clear the form fields
        addPatientForm.reset();
      });
    });
  
    doctorsLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = `
        <h2>Add Doctor</h2>
        <form id="add-doctor-form">
          <label for="doctor-name">Name:</label>
          <input type="text" id="doctor-name" name="doctor-name" required><br><br>
          <label for="doctor-specialty">Specialty:</label>
          <input type="text" id="doctor-specialty" name="doctor-specialty" required><br><br>
          <label for="doctor-experience">Experience (years):</label>
          <input type="number" id="doctor-experience" name="doctor-experience" required><br><br>
          <button type="submit">Add</button>
        </form>
        <div id="doctor-list"></div>
      `;
  
      const addDoctorForm = document.getElementById('add-doctor-form');
      const doctorList = document.getElementById('doctor-list');
  
      addDoctorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('doctor-name').value;
        const specialty = document.getElementById('doctor-specialty').value;
        const experience = document.getElementById('doctor-experience').value;
  
        // Here you can process the form data, for now, let's just display it
        const newDoctor = document.createElement('div');
        newDoctor.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Specialty:</strong> ${specialty}</p><p><strong>Experience:</strong> ${experience} years</p>`;
        doctorList.appendChild(newDoctor);
  
        // Clear the form fields
        addDoctorForm.reset();
      });
    });
  
    // Code for handling other links (Appointments) goes here...
  });
      