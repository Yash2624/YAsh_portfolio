if (localStorage.getItem('counter')) {
    // If it exists, retrieve the value and update the counter
    var count = parseInt(localStorage.getItem('counter'));
    document.getElementById('counter').innerText = count;
} else {
    // If it doesn't exist, initialize the counter in localStorage
    localStorage.setItem('counter', '0');
}

// Update the counter and save to localStorage when the page loads
var currentCount = parseInt(localStorage.getItem('counter'));
currentCount++;
localStorage.setItem('counter', currentCount.toString());
document.getElementById('counter').innerText = currentCount;

// function updateCounter() {
//     if (localStorage.getItem('counter')) {
//         var count = localStorage.getItem('counter');
//         for (var i = 0; i < count.length; i++) {
//             document.getElementById('digit' + (i + 1)).innerText = count[i];
//         }
//     } else {
//         localStorage.setItem('counter', '000');
//     }
// }

// function incrementCounter() {
//     var currentCount = localStorage.getItem('counter') || '000';
//     var newCount = (parseInt(currentCount) + 1).toString().padStart(3, '0');
//     localStorage.setItem('counter', newCount);
//     updateCounter();
// }

// // Call updateCounter when the page loads
// updateCounter();


function updateDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('dateTime').innerText = formattedDateTime;
}

// Call updateDateTime when the page loads
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

// document.addEventListener('DOMContentLoaded', function () {
//     // Check if the user has visited the last page
//     if (document.visibilityState === 'hidden') {
//         // Show the feedback overlay after a delay
//         setTimeout(showFeedbackOverlay, 3000);
//     }

//     function showFeedbackOverlay() {
//         const overlay = document.getElementById('feedbackOverlay');
//         overlay.style.display = 'flex';

//         // Attach event listeners to feedback buttons
//         const yesButton = document.getElementById('yesButton');
//         const improvementButton = document.getElementById('improvementButton');

//         yesButton.addEventListener('click', function () {
//             submitFeedback('Yes');
//             overlay.style.display = 'none';
//         });

//         improvementButton.addEventListener('click', function () {
//             submitFeedback('Need Improvement');
//             overlay.style.display = 'none';
//         });
//     }

//     function submitFeedback(answer) {
//         const email = getUserEmail(); // Function to get user's email (modify as needed)
//         fetch('/submit-feedback', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, answer }),
//         });
//     }

//     function getUserEmail() {
//         // Implement a function to retrieve the user's email
//         // This can be done based on your authentication system
//         // For demonstration purposes, a placeholder value is returned
//         return 'user@example.com';
//     }
// });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


document.addEventListener('DOMContentLoaded', function () {
    // Simulate user reaching the last page
    setTimeout(showFeedbackOverlay, 3000);
    
    function showFeedbackOverlay() {
        const overlay = document.getElementById('feedbackOverlay');
        overlay.style.display = 'block';

        const yesButton = document.getElementById('yesButton');
        const improvementButton = document.getElementById('improvementButton');

        yesButton.addEventListener('click', function () {
            submitFeedback('Yes');
            overlay.style.display = 'none';
        });

        improvementButton.addEventListener('click', function () {
            submitFeedback('Need Improvement');
            overlay.style.display = 'none';
        });
    }

    function submitFeedback(answer) {
        const email = getUserEmail();
        fetch('/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, answer }),
        });
    }

    function getUserEmail() {
        // Placeholder value for demonstration
        return 'yashportfolio.server@gmail.com'; }
    });