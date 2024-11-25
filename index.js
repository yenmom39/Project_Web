// function showItems(category) {
//     var items = document.getElementsByClassName('menu-items');
//     for (var i = 0; i < items.length; i++) {
//         items[i].style.display = 'none';
//     }
//     document.getElementById(category).style.display = 'flex';
//     }
//     document.addEventListener('DOMContentLoaded', function() {
//         showItems('breakfast');
//         showItems('lunch');
//         showItems('dinner');
//     });

function showItems(category) {
    var breakfast = document.getElementById('breakfast');
    var lunch = document.getElementById('lunch');
    var dinner = document.getElementById('dinner');

    // Hide all items initially
    breakfast.style.display = 'none';
    lunch.style.display = 'none';
    dinner.style.display = 'none';

    // Show the relevant category based on the condition
    if (category === 'breakfast') {
        breakfast.style.display = 'flex';
    } else if (category === 'lunch') {
        lunch.style.display = 'flex';
    } else {
        dinner.style.display = 'flex';
    }
}
// Initialize and show a default category on page load
document.addEventListener('DOMContentLoaded', function() {
    showItems('breakfast'); // Default to breakfast items
});

// dialog
function openDialog() {
    document.getElementById("dialog").style.display = "flex";
}

function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}


//type submit
function validateForm() {
    // Get form values
    const name = document.getElementById("bookingName").value;
    const email = document.getElementById("bookingEmail").value;
    const dateTime = document.getElementById("bookingDateTime").value;
    const people = document.getElementById("people").value;
    const request = document.getElementById("bookingRequest").value;

    // Validate form fields
    if (!name || !email || !dateTime || !people) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Show booking details
    showDetails(name, email, dateTime, people, request);
    return false; // Prevent form submission
}

function showDetails(name, email, dateTime, people, request) {
    // Display booking details
    document.getElementById("detailName").innerText = name;
    document.getElementById("detailEmail").innerText = email;
    document.getElementById("detailDateTime").innerText = dateTime;
    document.getElementById("detailPeople").innerText = people;
    document.getElementById("detailRequest").innerText = request;

    // Show the details section
    document.getElementById("details").style.display = "block";
}

