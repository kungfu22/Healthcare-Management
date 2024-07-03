document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Basic validation example
    var nameInput = document.querySelector('input[type="text"][placeholder="Name"]');
    var emailInput = document.querySelector('input[type="text"][placeholder="Email"]');
    var dateInput = document.querySelector('input[type="date"]');
    var doctorSelect = document.getElementById("doctor");

    var name = nameInput.value;
    var email = emailInput.value;
    var date = dateInput.value;
    var doctor = doctorSelect.value;

    if (name === "" || email === "" || date === "" || doctor === "NORMAL MBBS DOCTOR") {
      alert("Please fill in all fields and select a doctor.");
    } else {
      // Form submission code here
      alert("Form submitted successfully!");
      
      // Clearing form fields
      nameInput.value = "";
      emailInput.value = "";
      dateInput.value = "";
      doctorSelect.value = "NORMAL MBBS DOCTOR";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.querySelector('input[type="text"][placeholder="Name"]');
  var emailInput = document.querySelector('input[type="text"][placeholder="Email"]');
  var doctorSelect = document.getElementById("doctor");
  var selectedDoctorInput = document.querySelector('input[type="text"][placeholder="name of your doctor"]');
  var dateInput = document.querySelector('input[type="date"]');

  function updatePreview() {
    var previewName = document.querySelector(".preview_name");
    var previewEmail = document.querySelector(".preview_email");
    var previewDoctor = document.querySelector(".preview_doctor");
    var previewSelectedDoctor = document.querySelector(".preview_selected_doctor");
    var previewDate = document.querySelector(".preview_date");

    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewDoctor.textContent = doctorSelect.options[doctorSelect.selectedIndex].text;
    previewSelectedDoctor.textContent = selectedDoctorInput.value;
    previewDate.textContent = dateInput.value;
  }

  // Update preview on input change
  nameInput.addEventListener("input", updatePreview);
  emailInput.addEventListener("input", updatePreview);
  doctorSelect.addEventListener("change", updatePreview);
  selectedDoctorInput.addEventListener("input", updatePreview);
  dateInput.addEventListener("input", updatePreview);
});
