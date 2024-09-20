document.getElementById('send-message').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageDisplay = document.getElementById('display-message');
    const message = messageInput.value.trim();
    
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.classList.add('message');
        messageDisplay.appendChild(newMessage);
        messageInput.value = ''; // Clear input

        // Show success alert
        alert("Your message has been sent with love!");
    } else {
        alert("Please enter a message.");
    }
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
    alert("Thank you for your message! We'll get back to you soon.");
    this.reset(); // Reset the form

});
// Previous code...

let girlfriendLocation = "Your Girlfriend's Location"; // Set this to Tanushree's actual location for calculations
let myLocation = "";

document.getElementById('set-location').addEventListener('click', function() {
    myLocation = document.getElementById('location-input').value.trim();
    if (myLocation) {
        updateDistance();
    } else {
        alert("Please enter your location.");
    }
});

// Function to calculate distance (replace this with a real API call or distance calculation)
function updateDistance() {
    const distanceDisplay = document.getElementById('distance-display');
    
    // Dummy distance calculation, replace with actual logic
    const distance = Math.floor(Math.random() * 100) + 1; // Random distance for demo
    distanceDisplay.textContent = `Distance between you and Tanushree: ${distance} km`;
}

// Countdown functionality
document.getElementById('start-countdown').addEventListener('click', function() {
    const meetDate = new Date(document.getElementById('meet-date').value);
    const countdownDisplay = document.getElementById('countdown-display');

    if (isNaN(meetDate.getTime())) {
        alert("Please select a valid date.");
        return;
    }

    const countdownInterval = setInterval(function() {
        const now = new Date();
        const distance = meetDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "It's time to meet!";
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownDisplay.textContent = `Countdown to next meeting: ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
