// updateDateTime.js

// Function to update the current date and time
function updateDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('currentDateTime').textContent = 'Date: ' + formattedDate;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
