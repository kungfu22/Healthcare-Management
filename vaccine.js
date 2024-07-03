let entriesVisible = false; // Flag to track visibility state of entries

// Function to store booking entry in local storage
function storeBookingEntry(bookingEntry) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingEntry);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Function to display booking entries in a table
function displayBookingEntries() {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingTable = document.getElementById('bookingTable');
    bookingTable.innerHTML = ''; // Clear existing table content
    // Create table header
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `
        <th>Full Name</th>
        <th>Age</th>
        <th>Location</th>
        <th>Action</th>
    `;
    bookingTable.appendChild(tableHeader);
    // Add booking entries to the table
    bookings.forEach(function(booking, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.fullName}</td>
            <td>${booking.age}</td>
            <td>${booking.location}</td>
            <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
        `;
        bookingTable.appendChild(row);
    });
}

// Function to delete booking entry from local storage
function deleteBookingEntry(index) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.splice(index, 1); // Remove entry at specified index
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Function to toggle visibility of booking entries
function toggleBookingEntries() {
    const bookingTable = document.getElementById('bookingTable');
    if (entriesVisible) {
        bookingTable.style.display = 'none';
        entriesVisible = false;
    } else {
        displayBookingEntries();
        bookingTable.style.display = 'block';
        entriesVisible = true;
    }
}

// Form submission event listener for booking form
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;

    // Display confirmation pop-up
    const confirmation = confirm(`Booked Successfully`);

    // If user confirms, proceed with booking
    if (confirmation) {
        // Store booking entry
        const bookingEntry = { fullName, age, location };
        storeBookingEntry(bookingEntry);
        // Display booking entries in table format
        displayBookingEntries();
        // Clear form fields
        this.reset();
    } else {
        // If user cancels, prevent form submission
        event.preventDefault();
    }
});

// Display booking entries only when the button is clicked
document.getElementById('showEntriesBtn').addEventListener('click', function() {
    toggleBookingEntries();
});

// Event delegation for delete buttons
document.getElementById('bookingTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const index = event.target.dataset.index;
        deleteBookingEntry(index);
        displayBookingEntries();
    }
});
document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Replace 'home.html' with the URL of your home page
});

//check vaccine availability
document.getElementById('availabilityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the location input value
    const location = document.getElementById('location').value;

    // List of available locations (example)
    const availableLocations = ['faridabad', 'bangluru', 'ambala', 'new delhi', 'gurgoan'];

    // Check if the entered location is in the list of available locations
    const availabilityResult = document.getElementById('availabilityResult');
    if (availableLocations.includes(location)) {
        availabilityResult.textContent = 'Vaccine available at this location!';
    } else {
        availabilityResult.textContent = 'Sorry, vaccine not available at this location.';
    }
});
