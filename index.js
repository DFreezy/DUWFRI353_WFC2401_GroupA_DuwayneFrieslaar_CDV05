// Select the navigation toggle button and all navigation links
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Add event listener to the navigation toggle button to toggle the 'nav-open' class on the body
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Loop through each navigation link and add event listener to close the navigation when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Select the GitHub button
const gitButton = document.getElementById("git-button");

// Add event listener to the GitHub button to display an alert and change its background color to red when clicked
gitButton.addEventListener('click', function(){
    alert("Of to GitHub!"); // Display an alert message
    gitButton.style.backgroundColor = "red"; // Change the background color of the button to red
});
